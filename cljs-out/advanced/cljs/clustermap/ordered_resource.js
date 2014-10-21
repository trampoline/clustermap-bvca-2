// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj58672 = {};return obj58672;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.add_request[(function (){var G__58676 = x__4273__auto__;return goog.typeOf(G__58676);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOrderedResource.add-request",this$);
}
}
})().call(null,this$,ch);
}
});
clustermap.ordered_resource.get_response_chan = (function get_response_chan(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.get_response_chan[(function (){var G__58680 = x__4273__auto__;return goog.typeOf(G__58680);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOrderedResource.get-response-chan",this$);
}
}
})().call(null,this$);
}
});
clustermap.ordered_resource.close = (function close(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.close[(function (){var G__58684 = x__4273__auto__;return goog.typeOf(G__58684);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5819__auto___58715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___58715,rq_ticket,this$__$1){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___58715,rq_ticket,this$__$1){
return (function (state_58699){var state_val_58700 = (state_58699[(1)]);if((state_val_58700 === (6)))
{var inst_58691 = (state_58699[(2)]);var state_58699__$1 = state_58699;var statearr_58701_58716 = state_58699__$1;(statearr_58701_58716[(2)] = inst_58691);
(statearr_58701_58716[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58700 === (5)))
{var inst_58697 = (state_58699[(2)]);var state_58699__$1 = state_58699;return cljs.core.async.impl.ioc_helpers.return_chan(state_58699__$1,inst_58697);
} else
{if((state_val_58700 === (4)))
{var inst_58693 = (function (){var G__58702 = self__.ticket;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__58702) : cljs.core.deref.call(null,G__58702));
})();var inst_58694 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58693));var inst_58695 = console.log(inst_58694);var state_58699__$1 = state_58699;var statearr_58703_58717 = state_58699__$1;(statearr_58703_58717[(2)] = inst_58695);
(statearr_58703_58717[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58700 === (3)))
{var inst_58686 = (state_58699[(7)]);var state_58699__$1 = state_58699;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58699__$1,(6),self__.response_chan,inst_58686);
} else
{if((state_val_58700 === (2)))
{var inst_58686 = (state_58699[(2)]);var inst_58687 = (function (){var G__58704 = self__.ticket;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__58704) : cljs.core.deref.call(null,G__58704));
})();var inst_58688 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_58687);var state_58699__$1 = (function (){var statearr_58705 = state_58699;(statearr_58705[(7)] = inst_58686);
return statearr_58705;
})();if(inst_58688)
{var statearr_58706_58718 = state_58699__$1;(statearr_58706_58718[(1)] = (3));
} else
{var statearr_58707_58719 = state_58699__$1;(statearr_58707_58719[(1)] = (4));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58700 === (1)))
{var state_58699__$1 = state_58699;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58699__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto___58715,rq_ticket,this$__$1))
;return ((function (switch__5804__auto__,c__5819__auto___58715,rq_ticket,this$__$1){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_58711 = [null,null,null,null,null,null,null,null];(statearr_58711[(0)] = state_machine__5805__auto__);
(statearr_58711[(1)] = (1));
return statearr_58711;
});
var state_machine__5805__auto____1 = (function (state_58699){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_58699);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e58712){if((e58712 instanceof Object))
{var ex__5808__auto__ = e58712;var statearr_58713_58720 = state_58699;(statearr_58713_58720[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_58699);
return cljs.core.constant$keyword$1120;
} else
{throw e58712;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__58721 = state_58699;
state_58699 = G__58721;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_58699){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_58699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___58715,rq_ticket,this$__$1))
})();var state__5821__auto__ = (function (){var statearr_58714 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_58714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___58715);
return statearr_58714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___58715,rq_ticket,this$__$1))
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
clustermap.ordered_resource.make_discard_stale_resource = (function make_discard_stale_resource(name){return (new clustermap.ordered_resource.DiscardStaleResource(name,(function (){var G__58723 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58723) : cljs.core.atom.call(null,G__58723));
})(),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()));
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
api_call.cljs$lang$applyTo = (function (arglist__58724){
var ordered_resource = cljs.core.first(arglist__58724);
arglist__58724 = cljs.core.next(arglist__58724);
var api_fn = cljs.core.first(arglist__58724);
var args = cljs.core.rest(arglist__58724);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_58781){var state_val_58782 = (state_58781[(1)]);if((state_val_58782 === (7)))
{var inst_58772 = (state_58781[(2)]);var state_58781__$1 = state_58781;if(cljs.core.truth_(inst_58772))
{var statearr_58783_58803 = state_58781__$1;(statearr_58783_58803[(1)] = (8));
} else
{var statearr_58784_58804 = state_58781__$1;(statearr_58784_58804[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58782 === (1)))
{var state_58781__$1 = state_58781;var statearr_58785_58805 = state_58781__$1;(statearr_58785_58805[(2)] = null);
(statearr_58785_58805[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58782 === (4)))
{var inst_58767 = (state_58781[(7)]);var inst_58767__$1 = (state_58781[(2)]);var state_58781__$1 = (function (){var statearr_58786 = state_58781;(statearr_58786[(7)] = inst_58767__$1);
return statearr_58786;
})();if(cljs.core.truth_(inst_58767__$1))
{var statearr_58787_58806 = state_58781__$1;(statearr_58787_58806[(1)] = (5));
} else
{var statearr_58788_58807 = state_58781__$1;(statearr_58788_58807[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58782 === (6)))
{var state_58781__$1 = state_58781;var statearr_58789_58808 = state_58781__$1;(statearr_58789_58808[(2)] = null);
(statearr_58789_58808[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58782 === (3)))
{var inst_58779 = (state_58781[(2)]);var state_58781__$1 = state_58781;return cljs.core.async.impl.ioc_helpers.return_chan(state_58781__$1,inst_58779);
} else
{if((state_val_58782 === (2)))
{var inst_58765 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_58781__$1 = state_58781;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58781__$1,(4),inst_58765);
} else
{if((state_val_58782 === (9)))
{var state_58781__$1 = state_58781;var statearr_58790_58809 = state_58781__$1;(statearr_58790_58809[(2)] = null);
(statearr_58790_58809[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58782 === (5)))
{var inst_58767 = (state_58781[(7)]);var inst_58769 = (function (){var G__58791 = inst_58767;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58791) : f.call(null,G__58791));
})();var state_58781__$1 = (function (){var statearr_58792 = state_58781;(statearr_58792[(8)] = inst_58769);
return statearr_58792;
})();var statearr_58793_58810 = state_58781__$1;(statearr_58793_58810[(2)] = true);
(statearr_58793_58810[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58782 === (10)))
{var inst_58777 = (state_58781[(2)]);var state_58781__$1 = state_58781;var statearr_58794_58811 = state_58781__$1;(statearr_58794_58811[(2)] = inst_58777);
(statearr_58794_58811[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_58782 === (8)))
{var state_58781__$1 = state_58781;var statearr_58795_58812 = state_58781__$1;(statearr_58795_58812[(2)] = null);
(statearr_58795_58812[(1)] = (2));
return cljs.core.constant$keyword$1120;
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_58799 = [null,null,null,null,null,null,null,null,null];(statearr_58799[(0)] = state_machine__5805__auto__);
(statearr_58799[(1)] = (1));
return statearr_58799;
});
var state_machine__5805__auto____1 = (function (state_58781){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_58781);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e58800){if((e58800 instanceof Object))
{var ex__5808__auto__ = e58800;var statearr_58801_58813 = state_58781;(statearr_58801_58813[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_58781);
return cljs.core.constant$keyword$1120;
} else
{throw e58800;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__58814 = state_58781;
state_58781 = G__58814;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_58781){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_58781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_58802 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_58802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_58802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
