// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj47856 = {};return obj47856;
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
{throw cljs.core.missing_protocol("IOrderedResource.add-request",this$);
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
{throw cljs.core.missing_protocol("IOrderedResource.get-response-chan",this$);
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
{throw cljs.core.missing_protocol("IOrderedResource.close",this$);
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
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5708__auto___47885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___47885,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___47885,rq_ticket,this$__$1){
return (function (state_47871){var state_val_47872 = (state_47871[(1)]);if((state_val_47872 === (6)))
{var inst_47863 = (state_47871[(2)]);var state_47871__$1 = state_47871;var statearr_47873_47886 = state_47871__$1;(statearr_47873_47886[(2)] = inst_47863);
(statearr_47873_47886[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47872 === (5)))
{var inst_47869 = (state_47871[(2)]);var state_47871__$1 = state_47871;return cljs.core.async.impl.ioc_helpers.return_chan(state_47871__$1,inst_47869);
} else
{if((state_val_47872 === (4)))
{var inst_47865 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_47866 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47865));var inst_47867 = console.log(inst_47866);var state_47871__$1 = state_47871;var statearr_47874_47887 = state_47871__$1;(statearr_47874_47887[(2)] = inst_47867);
(statearr_47874_47887[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47872 === (3)))
{var inst_47858 = (state_47871[(7)]);var state_47871__$1 = state_47871;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47871__$1,(6),self__.response_chan,inst_47858);
} else
{if((state_val_47872 === (2)))
{var inst_47858 = (state_47871[(2)]);var inst_47859 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_47860 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_47859);var state_47871__$1 = (function (){var statearr_47875 = state_47871;(statearr_47875[(7)] = inst_47858);
return statearr_47875;
})();if(inst_47860)
{var statearr_47876_47888 = state_47871__$1;(statearr_47876_47888[(1)] = (3));
} else
{var statearr_47877_47889 = state_47871__$1;(statearr_47877_47889[(1)] = (4));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47872 === (1)))
{var state_47871__$1 = state_47871;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47871__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___47885,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___47885,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47881 = [null,null,null,null,null,null,null,null];(statearr_47881[(0)] = state_machine__5694__auto__);
(statearr_47881[(1)] = (1));
return statearr_47881;
});
var state_machine__5694__auto____1 = (function (state_47871){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47871);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47882){if((e47882 instanceof Object))
{var ex__5697__auto__ = e47882;var statearr_47883_47890 = state_47871;(statearr_47883_47890[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47871);
return cljs.core.constant$keyword$1094;
} else
{throw e47882;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__47891 = state_47871;
state_47871 = G__47891;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47871){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___47885,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_47884 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___47885);
return statearr_47884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___47885,rq_ticket,this$__$1))
);
return null;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.response_chan;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$close$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.async.close_BANG_(self__.response_chan);
});
clustermap.ordered_resource.__GT_DiscardStaleResource = (function __GT_DiscardStaleResource(name,ticket,response_chan){return (new clustermap.ordered_resource.DiscardStaleResource(name,ticket,response_chan));
});
/**
* creates an ordered-resource which will discard a response if
* a response to a later request has already been received
*/
clustermap.ordered_resource.make_discard_stale_resource = (function make_discard_stale_resource(name){return (new clustermap.ordered_resource.DiscardStaleResource(name,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()));
});
/**
* make an api call and put the result channel into an ordered-resource
* - ordered-resource : the ordered resources
* - api-fn : makes an api-call and returns a channel of a single result value
* - args : to be passed to the api-fn
* @param {...*} var_args
*/
clustermap.ordered_resource.api_call = (function() { 
var api_call__delegate = function (ordered_resource,api_fn,args){return clustermap.ordered_resource.add_request(ordered_resource,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_fn,args));
};
var api_call = function (ordered_resource,api_fn,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return api_call__delegate.call(this,ordered_resource,api_fn,args);};
api_call.cljs$lang$maxFixedArity = 2;
api_call.cljs$lang$applyTo = (function (arglist__47892){
var ordered_resource = cljs.core.first(arglist__47892);
arglist__47892 = cljs.core.next(arglist__47892);
var api_fn = cljs.core.first(arglist__47892);
var args = cljs.core.rest(arglist__47892);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_47948){var state_val_47949 = (state_47948[(1)]);if((state_val_47949 === (7)))
{var inst_47939 = (state_47948[(2)]);var state_47948__$1 = state_47948;if(cljs.core.truth_(inst_47939))
{var statearr_47950_47969 = state_47948__$1;(statearr_47950_47969[(1)] = (8));
} else
{var statearr_47951_47970 = state_47948__$1;(statearr_47951_47970[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47949 === (1)))
{var state_47948__$1 = state_47948;var statearr_47952_47971 = state_47948__$1;(statearr_47952_47971[(2)] = null);
(statearr_47952_47971[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47949 === (4)))
{var inst_47934 = (state_47948[(7)]);var inst_47934__$1 = (state_47948[(2)]);var state_47948__$1 = (function (){var statearr_47953 = state_47948;(statearr_47953[(7)] = inst_47934__$1);
return statearr_47953;
})();if(cljs.core.truth_(inst_47934__$1))
{var statearr_47954_47972 = state_47948__$1;(statearr_47954_47972[(1)] = (5));
} else
{var statearr_47955_47973 = state_47948__$1;(statearr_47955_47973[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47949 === (6)))
{var state_47948__$1 = state_47948;var statearr_47956_47974 = state_47948__$1;(statearr_47956_47974[(2)] = null);
(statearr_47956_47974[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47949 === (3)))
{var inst_47946 = (state_47948[(2)]);var state_47948__$1 = state_47948;return cljs.core.async.impl.ioc_helpers.return_chan(state_47948__$1,inst_47946);
} else
{if((state_val_47949 === (2)))
{var inst_47932 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_47948__$1 = state_47948;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47948__$1,(4),inst_47932);
} else
{if((state_val_47949 === (9)))
{var state_47948__$1 = state_47948;var statearr_47957_47975 = state_47948__$1;(statearr_47957_47975[(2)] = null);
(statearr_47957_47975[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47949 === (5)))
{var inst_47934 = (state_47948[(7)]);var inst_47936 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47934) : f.call(null,inst_47934));var state_47948__$1 = (function (){var statearr_47958 = state_47948;(statearr_47958[(8)] = inst_47936);
return statearr_47958;
})();var statearr_47959_47976 = state_47948__$1;(statearr_47959_47976[(2)] = true);
(statearr_47959_47976[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47949 === (10)))
{var inst_47944 = (state_47948[(2)]);var state_47948__$1 = state_47948;var statearr_47960_47977 = state_47948__$1;(statearr_47960_47977[(2)] = inst_47944);
(statearr_47960_47977[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47949 === (8)))
{var state_47948__$1 = state_47948;var statearr_47961_47978 = state_47948__$1;(statearr_47961_47978[(2)] = null);
(statearr_47961_47978[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
var state_machine__5694__auto____0 = (function (){var statearr_47965 = [null,null,null,null,null,null,null,null,null];(statearr_47965[(0)] = state_machine__5694__auto__);
(statearr_47965[(1)] = (1));
return statearr_47965;
});
var state_machine__5694__auto____1 = (function (state_47948){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47948);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47966){if((e47966 instanceof Object))
{var ex__5697__auto__ = e47966;var statearr_47967_47979 = state_47948;(statearr_47967_47979[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47948);
return cljs.core.constant$keyword$1094;
} else
{throw e47966;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__47980 = state_47948;
state_47948 = G__47980;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47948){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_47968 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_47968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
