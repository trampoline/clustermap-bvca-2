// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj51910 = {};return obj51910;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___51939 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___51939,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51939,rq_ticket,this$__$1){
return (function (state_51925){var state_val_51926 = (state_51925[(1)]);if((state_val_51926 === (6)))
{var inst_51917 = (state_51925[(2)]);var state_51925__$1 = state_51925;var statearr_51927_51940 = state_51925__$1;(statearr_51927_51940[(2)] = inst_51917);
(statearr_51927_51940[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51926 === (5)))
{var inst_51923 = (state_51925[(2)]);var state_51925__$1 = state_51925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51925__$1,inst_51923);
} else
{if((state_val_51926 === (4)))
{var inst_51919 = cljs.core.deref.call(null,self__.ticket);var inst_51920 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51919));var inst_51921 = console.log(inst_51920);var state_51925__$1 = state_51925;var statearr_51928_51941 = state_51925__$1;(statearr_51928_51941[(2)] = inst_51921);
(statearr_51928_51941[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51926 === (3)))
{var inst_51912 = (state_51925[(7)]);var state_51925__$1 = state_51925;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51925__$1,(6),self__.response_chan,inst_51912);
} else
{if((state_val_51926 === (2)))
{var inst_51912 = (state_51925[(2)]);var inst_51913 = cljs.core.deref.call(null,self__.ticket);var inst_51914 = cljs.core._EQ_.call(null,rq_ticket,inst_51913);var state_51925__$1 = (function (){var statearr_51929 = state_51925;(statearr_51929[(7)] = inst_51912);
return statearr_51929;
})();if(inst_51914)
{var statearr_51930_51942 = state_51925__$1;(statearr_51930_51942[(1)] = (3));
} else
{var statearr_51931_51943 = state_51925__$1;(statearr_51931_51943[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51926 === (1)))
{var state_51925__$1 = state_51925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51925__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___51939,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___51939,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51935 = [null,null,null,null,null,null,null,null];(statearr_51935[(0)] = state_machine__5694__auto__);
(statearr_51935[(1)] = (1));
return statearr_51935;
});
var state_machine__5694__auto____1 = (function (state_51925){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_51925);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51936){if((e51936 instanceof Object))
{var ex__5697__auto__ = e51936;var statearr_51937_51944 = state_51925;(statearr_51937_51944[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51925);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51936;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51945 = state_51925;
state_51925 = G__51945;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51925){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51939,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_51938 = f__5709__auto__.call(null);(statearr_51938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51939);
return statearr_51938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___51939,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__51946){
var ordered_resource = cljs.core.first(arglist__51946);
arglist__51946 = cljs.core.next(arglist__51946);
var api_fn = cljs.core.first(arglist__51946);
var args = cljs.core.rest(arglist__51946);
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
return (function (state_52002){var state_val_52003 = (state_52002[(1)]);if((state_val_52003 === (7)))
{var inst_51993 = (state_52002[(2)]);var state_52002__$1 = state_52002;if(cljs.core.truth_(inst_51993))
{var statearr_52004_52023 = state_52002__$1;(statearr_52004_52023[(1)] = (8));
} else
{var statearr_52005_52024 = state_52002__$1;(statearr_52005_52024[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52003 === (1)))
{var state_52002__$1 = state_52002;var statearr_52006_52025 = state_52002__$1;(statearr_52006_52025[(2)] = null);
(statearr_52006_52025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52003 === (4)))
{var inst_51988 = (state_52002[(7)]);var inst_51988__$1 = (state_52002[(2)]);var state_52002__$1 = (function (){var statearr_52007 = state_52002;(statearr_52007[(7)] = inst_51988__$1);
return statearr_52007;
})();if(cljs.core.truth_(inst_51988__$1))
{var statearr_52008_52026 = state_52002__$1;(statearr_52008_52026[(1)] = (5));
} else
{var statearr_52009_52027 = state_52002__$1;(statearr_52009_52027[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52003 === (6)))
{var state_52002__$1 = state_52002;var statearr_52010_52028 = state_52002__$1;(statearr_52010_52028[(2)] = null);
(statearr_52010_52028[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52003 === (3)))
{var inst_52000 = (state_52002[(2)]);var state_52002__$1 = state_52002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52002__$1,inst_52000);
} else
{if((state_val_52003 === (2)))
{var inst_51986 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_52002__$1 = state_52002;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52002__$1,(4),inst_51986);
} else
{if((state_val_52003 === (9)))
{var state_52002__$1 = state_52002;var statearr_52011_52029 = state_52002__$1;(statearr_52011_52029[(2)] = null);
(statearr_52011_52029[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52003 === (5)))
{var inst_51988 = (state_52002[(7)]);var inst_51990 = f.call(null,inst_51988);var state_52002__$1 = (function (){var statearr_52012 = state_52002;(statearr_52012[(8)] = inst_51990);
return statearr_52012;
})();var statearr_52013_52030 = state_52002__$1;(statearr_52013_52030[(2)] = true);
(statearr_52013_52030[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52003 === (10)))
{var inst_51998 = (state_52002[(2)]);var state_52002__$1 = state_52002;var statearr_52014_52031 = state_52002__$1;(statearr_52014_52031[(2)] = inst_51998);
(statearr_52014_52031[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52003 === (8)))
{var state_52002__$1 = state_52002;var statearr_52015_52032 = state_52002__$1;(statearr_52015_52032[(2)] = null);
(statearr_52015_52032[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_52019 = [null,null,null,null,null,null,null,null,null];(statearr_52019[(0)] = state_machine__5694__auto__);
(statearr_52019[(1)] = (1));
return statearr_52019;
});
var state_machine__5694__auto____1 = (function (state_52002){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_52002);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e52020){if((e52020 instanceof Object))
{var ex__5697__auto__ = e52020;var statearr_52021_52033 = state_52002;(statearr_52021_52033[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52002);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e52020;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52034 = state_52002;
state_52002 = G__52034;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_52002){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_52002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_52022 = f__5709__auto__.call(null);(statearr_52022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_52022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});

//# sourceMappingURL=ordered_resource.js.map