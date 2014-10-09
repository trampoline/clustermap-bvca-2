// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj32753 = {};return obj32753;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___32782 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___32782,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___32782,rq_ticket,this$__$1){
return (function (state_32768){var state_val_32769 = (state_32768[(1)]);if((state_val_32769 === (6)))
{var inst_32760 = (state_32768[(2)]);var state_32768__$1 = state_32768;var statearr_32770_32783 = state_32768__$1;(statearr_32770_32783[(2)] = inst_32760);
(statearr_32770_32783[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32769 === (5)))
{var inst_32766 = (state_32768[(2)]);var state_32768__$1 = state_32768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32768__$1,inst_32766);
} else
{if((state_val_32769 === (4)))
{var inst_32762 = cljs.core.deref.call(null,self__.ticket);var inst_32763 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32762));var inst_32764 = console.log(inst_32763);var state_32768__$1 = state_32768;var statearr_32771_32784 = state_32768__$1;(statearr_32771_32784[(2)] = inst_32764);
(statearr_32771_32784[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32769 === (3)))
{var inst_32755 = (state_32768[(7)]);var state_32768__$1 = state_32768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32768__$1,(6),self__.response_chan,inst_32755);
} else
{if((state_val_32769 === (2)))
{var inst_32755 = (state_32768[(2)]);var inst_32756 = cljs.core.deref.call(null,self__.ticket);var inst_32757 = cljs.core._EQ_.call(null,rq_ticket,inst_32756);var state_32768__$1 = (function (){var statearr_32772 = state_32768;(statearr_32772[(7)] = inst_32755);
return statearr_32772;
})();if(inst_32757)
{var statearr_32773_32785 = state_32768__$1;(statearr_32773_32785[(1)] = (3));
} else
{var statearr_32774_32786 = state_32768__$1;(statearr_32774_32786[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32769 === (1)))
{var state_32768__$1 = state_32768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32768__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___32782,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___32782,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_32778 = [null,null,null,null,null,null,null,null];(statearr_32778[(0)] = state_machine__5694__auto__);
(statearr_32778[(1)] = (1));
return statearr_32778;
});
var state_machine__5694__auto____1 = (function (state_32768){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_32768);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e32779){if((e32779 instanceof Object))
{var ex__5697__auto__ = e32779;var statearr_32780_32787 = state_32768;(statearr_32780_32787[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32779;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32788 = state_32768;
state_32768 = G__32788;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_32768){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_32768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___32782,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_32781 = f__5709__auto__.call(null);(statearr_32781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___32782);
return statearr_32781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___32782,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__32789){
var ordered_resource = cljs.core.first(arglist__32789);
arglist__32789 = cljs.core.next(arglist__32789);
var api_fn = cljs.core.first(arglist__32789);
var args = cljs.core.rest(arglist__32789);
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
return (function (state_32845){var state_val_32846 = (state_32845[(1)]);if((state_val_32846 === (7)))
{var inst_32836 = (state_32845[(2)]);var state_32845__$1 = state_32845;if(cljs.core.truth_(inst_32836))
{var statearr_32847_32866 = state_32845__$1;(statearr_32847_32866[(1)] = (8));
} else
{var statearr_32848_32867 = state_32845__$1;(statearr_32848_32867[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (1)))
{var state_32845__$1 = state_32845;var statearr_32849_32868 = state_32845__$1;(statearr_32849_32868[(2)] = null);
(statearr_32849_32868[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (4)))
{var inst_32831 = (state_32845[(7)]);var inst_32831__$1 = (state_32845[(2)]);var state_32845__$1 = (function (){var statearr_32850 = state_32845;(statearr_32850[(7)] = inst_32831__$1);
return statearr_32850;
})();if(cljs.core.truth_(inst_32831__$1))
{var statearr_32851_32869 = state_32845__$1;(statearr_32851_32869[(1)] = (5));
} else
{var statearr_32852_32870 = state_32845__$1;(statearr_32852_32870[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (6)))
{var state_32845__$1 = state_32845;var statearr_32853_32871 = state_32845__$1;(statearr_32853_32871[(2)] = null);
(statearr_32853_32871[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (3)))
{var inst_32843 = (state_32845[(2)]);var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32845__$1,inst_32843);
} else
{if((state_val_32846 === (2)))
{var inst_32829 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32845__$1,(4),inst_32829);
} else
{if((state_val_32846 === (9)))
{var state_32845__$1 = state_32845;var statearr_32854_32872 = state_32845__$1;(statearr_32854_32872[(2)] = null);
(statearr_32854_32872[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (5)))
{var inst_32831 = (state_32845[(7)]);var inst_32833 = f.call(null,inst_32831);var state_32845__$1 = (function (){var statearr_32855 = state_32845;(statearr_32855[(8)] = inst_32833);
return statearr_32855;
})();var statearr_32856_32873 = state_32845__$1;(statearr_32856_32873[(2)] = true);
(statearr_32856_32873[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (10)))
{var inst_32841 = (state_32845[(2)]);var state_32845__$1 = state_32845;var statearr_32857_32874 = state_32845__$1;(statearr_32857_32874[(2)] = inst_32841);
(statearr_32857_32874[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (8)))
{var state_32845__$1 = state_32845;var statearr_32858_32875 = state_32845__$1;(statearr_32858_32875[(2)] = null);
(statearr_32858_32875[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_32862 = [null,null,null,null,null,null,null,null,null];(statearr_32862[(0)] = state_machine__5694__auto__);
(statearr_32862[(1)] = (1));
return statearr_32862;
});
var state_machine__5694__auto____1 = (function (state_32845){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_32845);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e32863){if((e32863 instanceof Object))
{var ex__5697__auto__ = e32863;var statearr_32864_32876 = state_32845;(statearr_32864_32876[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32845);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32863;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32877 = state_32845;
state_32845 = G__32877;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_32845){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_32845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_32865 = f__5709__auto__.call(null);(statearr_32865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_32865;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
