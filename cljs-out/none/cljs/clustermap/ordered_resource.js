// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj51814 = {};return obj51814;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___51843 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___51843,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51843,rq_ticket,this$__$1){
return (function (state_51829){var state_val_51830 = (state_51829[(1)]);if((state_val_51830 === (6)))
{var inst_51821 = (state_51829[(2)]);var state_51829__$1 = state_51829;var statearr_51831_51844 = state_51829__$1;(statearr_51831_51844[(2)] = inst_51821);
(statearr_51831_51844[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51830 === (5)))
{var inst_51827 = (state_51829[(2)]);var state_51829__$1 = state_51829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51829__$1,inst_51827);
} else
{if((state_val_51830 === (4)))
{var inst_51823 = cljs.core.deref.call(null,self__.ticket);var inst_51824 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51823));var inst_51825 = console.log(inst_51824);var state_51829__$1 = state_51829;var statearr_51832_51845 = state_51829__$1;(statearr_51832_51845[(2)] = inst_51825);
(statearr_51832_51845[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51830 === (3)))
{var inst_51816 = (state_51829[(7)]);var state_51829__$1 = state_51829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51829__$1,(6),self__.response_chan,inst_51816);
} else
{if((state_val_51830 === (2)))
{var inst_51816 = (state_51829[(2)]);var inst_51817 = cljs.core.deref.call(null,self__.ticket);var inst_51818 = cljs.core._EQ_.call(null,rq_ticket,inst_51817);var state_51829__$1 = (function (){var statearr_51833 = state_51829;(statearr_51833[(7)] = inst_51816);
return statearr_51833;
})();if(inst_51818)
{var statearr_51834_51846 = state_51829__$1;(statearr_51834_51846[(1)] = (3));
} else
{var statearr_51835_51847 = state_51829__$1;(statearr_51835_51847[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51830 === (1)))
{var state_51829__$1 = state_51829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51829__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___51843,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___51843,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51839 = [null,null,null,null,null,null,null,null];(statearr_51839[(0)] = state_machine__5694__auto__);
(statearr_51839[(1)] = (1));
return statearr_51839;
});
var state_machine__5694__auto____1 = (function (state_51829){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_51829);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51840){if((e51840 instanceof Object))
{var ex__5697__auto__ = e51840;var statearr_51841_51848 = state_51829;(statearr_51841_51848[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51840;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51849 = state_51829;
state_51829 = G__51849;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51829){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51843,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_51842 = f__5709__auto__.call(null);(statearr_51842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51843);
return statearr_51842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___51843,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__51850){
var ordered_resource = cljs.core.first(arglist__51850);
arglist__51850 = cljs.core.next(arglist__51850);
var api_fn = cljs.core.first(arglist__51850);
var args = cljs.core.rest(arglist__51850);
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
return (function (state_51906){var state_val_51907 = (state_51906[(1)]);if((state_val_51907 === (7)))
{var inst_51897 = (state_51906[(2)]);var state_51906__$1 = state_51906;if(cljs.core.truth_(inst_51897))
{var statearr_51908_51927 = state_51906__$1;(statearr_51908_51927[(1)] = (8));
} else
{var statearr_51909_51928 = state_51906__$1;(statearr_51909_51928[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51907 === (1)))
{var state_51906__$1 = state_51906;var statearr_51910_51929 = state_51906__$1;(statearr_51910_51929[(2)] = null);
(statearr_51910_51929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51907 === (4)))
{var inst_51892 = (state_51906[(7)]);var inst_51892__$1 = (state_51906[(2)]);var state_51906__$1 = (function (){var statearr_51911 = state_51906;(statearr_51911[(7)] = inst_51892__$1);
return statearr_51911;
})();if(cljs.core.truth_(inst_51892__$1))
{var statearr_51912_51930 = state_51906__$1;(statearr_51912_51930[(1)] = (5));
} else
{var statearr_51913_51931 = state_51906__$1;(statearr_51913_51931[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51907 === (6)))
{var state_51906__$1 = state_51906;var statearr_51914_51932 = state_51906__$1;(statearr_51914_51932[(2)] = null);
(statearr_51914_51932[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51907 === (3)))
{var inst_51904 = (state_51906[(2)]);var state_51906__$1 = state_51906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51906__$1,inst_51904);
} else
{if((state_val_51907 === (2)))
{var inst_51890 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_51906__$1 = state_51906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51906__$1,(4),inst_51890);
} else
{if((state_val_51907 === (9)))
{var state_51906__$1 = state_51906;var statearr_51915_51933 = state_51906__$1;(statearr_51915_51933[(2)] = null);
(statearr_51915_51933[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51907 === (5)))
{var inst_51892 = (state_51906[(7)]);var inst_51894 = f.call(null,inst_51892);var state_51906__$1 = (function (){var statearr_51916 = state_51906;(statearr_51916[(8)] = inst_51894);
return statearr_51916;
})();var statearr_51917_51934 = state_51906__$1;(statearr_51917_51934[(2)] = true);
(statearr_51917_51934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51907 === (10)))
{var inst_51902 = (state_51906[(2)]);var state_51906__$1 = state_51906;var statearr_51918_51935 = state_51906__$1;(statearr_51918_51935[(2)] = inst_51902);
(statearr_51918_51935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51907 === (8)))
{var state_51906__$1 = state_51906;var statearr_51919_51936 = state_51906__$1;(statearr_51919_51936[(2)] = null);
(statearr_51919_51936[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_51923 = [null,null,null,null,null,null,null,null,null];(statearr_51923[(0)] = state_machine__5694__auto__);
(statearr_51923[(1)] = (1));
return statearr_51923;
});
var state_machine__5694__auto____1 = (function (state_51906){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_51906);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51924){if((e51924 instanceof Object))
{var ex__5697__auto__ = e51924;var statearr_51925_51937 = state_51906;(statearr_51925_51937[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51924;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51938 = state_51906;
state_51906 = G__51938;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51906){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_51926 = f__5709__auto__.call(null);(statearr_51926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_51926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});

//# sourceMappingURL=ordered_resource.js.map