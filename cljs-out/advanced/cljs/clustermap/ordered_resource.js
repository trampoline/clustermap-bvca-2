// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj47847 = {};return obj47847;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5708__auto___47876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___47876,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___47876,rq_ticket,this$__$1){
return (function (state_47862){var state_val_47863 = (state_47862[(1)]);if((state_val_47863 === (6)))
{var inst_47854 = (state_47862[(2)]);var state_47862__$1 = state_47862;var statearr_47864_47877 = state_47862__$1;(statearr_47864_47877[(2)] = inst_47854);
(statearr_47864_47877[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47863 === (5)))
{var inst_47860 = (state_47862[(2)]);var state_47862__$1 = state_47862;return cljs.core.async.impl.ioc_helpers.return_chan(state_47862__$1,inst_47860);
} else
{if((state_val_47863 === (4)))
{var inst_47856 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_47857 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47856));var inst_47858 = console.log(inst_47857);var state_47862__$1 = state_47862;var statearr_47865_47878 = state_47862__$1;(statearr_47865_47878[(2)] = inst_47858);
(statearr_47865_47878[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47863 === (3)))
{var inst_47849 = (state_47862[(7)]);var state_47862__$1 = state_47862;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47862__$1,(6),self__.response_chan,inst_47849);
} else
{if((state_val_47863 === (2)))
{var inst_47849 = (state_47862[(2)]);var inst_47850 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_47851 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_47850);var state_47862__$1 = (function (){var statearr_47866 = state_47862;(statearr_47866[(7)] = inst_47849);
return statearr_47866;
})();if(inst_47851)
{var statearr_47867_47879 = state_47862__$1;(statearr_47867_47879[(1)] = (3));
} else
{var statearr_47868_47880 = state_47862__$1;(statearr_47868_47880[(1)] = (4));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47863 === (1)))
{var state_47862__$1 = state_47862;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47862__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___47876,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___47876,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47872 = [null,null,null,null,null,null,null,null];(statearr_47872[(0)] = state_machine__5694__auto__);
(statearr_47872[(1)] = (1));
return statearr_47872;
});
var state_machine__5694__auto____1 = (function (state_47862){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47862);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47873){if((e47873 instanceof Object))
{var ex__5697__auto__ = e47873;var statearr_47874_47881 = state_47862;(statearr_47874_47881[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47862);
return cljs.core.constant$keyword$1094;
} else
{throw e47873;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__47882 = state_47862;
state_47862 = G__47882;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47862){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___47876,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_47875 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___47876);
return statearr_47875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___47876,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__47883){
var ordered_resource = cljs.core.first(arglist__47883);
arglist__47883 = cljs.core.next(arglist__47883);
var api_fn = cljs.core.first(arglist__47883);
var args = cljs.core.rest(arglist__47883);
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
return (function (state_47939){var state_val_47940 = (state_47939[(1)]);if((state_val_47940 === (7)))
{var inst_47930 = (state_47939[(2)]);var state_47939__$1 = state_47939;if(cljs.core.truth_(inst_47930))
{var statearr_47941_47960 = state_47939__$1;(statearr_47941_47960[(1)] = (8));
} else
{var statearr_47942_47961 = state_47939__$1;(statearr_47942_47961[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47940 === (1)))
{var state_47939__$1 = state_47939;var statearr_47943_47962 = state_47939__$1;(statearr_47943_47962[(2)] = null);
(statearr_47943_47962[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47940 === (4)))
{var inst_47925 = (state_47939[(7)]);var inst_47925__$1 = (state_47939[(2)]);var state_47939__$1 = (function (){var statearr_47944 = state_47939;(statearr_47944[(7)] = inst_47925__$1);
return statearr_47944;
})();if(cljs.core.truth_(inst_47925__$1))
{var statearr_47945_47963 = state_47939__$1;(statearr_47945_47963[(1)] = (5));
} else
{var statearr_47946_47964 = state_47939__$1;(statearr_47946_47964[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47940 === (6)))
{var state_47939__$1 = state_47939;var statearr_47947_47965 = state_47939__$1;(statearr_47947_47965[(2)] = null);
(statearr_47947_47965[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47940 === (3)))
{var inst_47937 = (state_47939[(2)]);var state_47939__$1 = state_47939;return cljs.core.async.impl.ioc_helpers.return_chan(state_47939__$1,inst_47937);
} else
{if((state_val_47940 === (2)))
{var inst_47923 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_47939__$1 = state_47939;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47939__$1,(4),inst_47923);
} else
{if((state_val_47940 === (9)))
{var state_47939__$1 = state_47939;var statearr_47948_47966 = state_47939__$1;(statearr_47948_47966[(2)] = null);
(statearr_47948_47966[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47940 === (5)))
{var inst_47925 = (state_47939[(7)]);var inst_47927 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47925) : f.call(null,inst_47925));var state_47939__$1 = (function (){var statearr_47949 = state_47939;(statearr_47949[(8)] = inst_47927);
return statearr_47949;
})();var statearr_47950_47967 = state_47939__$1;(statearr_47950_47967[(2)] = true);
(statearr_47950_47967[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47940 === (10)))
{var inst_47935 = (state_47939[(2)]);var state_47939__$1 = state_47939;var statearr_47951_47968 = state_47939__$1;(statearr_47951_47968[(2)] = inst_47935);
(statearr_47951_47968[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_47940 === (8)))
{var state_47939__$1 = state_47939;var statearr_47952_47969 = state_47939__$1;(statearr_47952_47969[(2)] = null);
(statearr_47952_47969[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_47956 = [null,null,null,null,null,null,null,null,null];(statearr_47956[(0)] = state_machine__5694__auto__);
(statearr_47956[(1)] = (1));
return statearr_47956;
});
var state_machine__5694__auto____1 = (function (state_47939){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47939);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47957){if((e47957 instanceof Object))
{var ex__5697__auto__ = e47957;var statearr_47958_47970 = state_47939;(statearr_47958_47970[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47939);
return cljs.core.constant$keyword$1094;
} else
{throw e47957;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__47971 = state_47939;
state_47939 = G__47971;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47939){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_47959 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_47959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
