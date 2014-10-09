// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj14759 = {};return obj14759;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___14788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___14788,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___14788,rq_ticket,this$__$1){
return (function (state_14774){var state_val_14775 = (state_14774[(1)]);if((state_val_14775 === (6)))
{var inst_14766 = (state_14774[(2)]);var state_14774__$1 = state_14774;var statearr_14776_14789 = state_14774__$1;(statearr_14776_14789[(2)] = inst_14766);
(statearr_14776_14789[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14775 === (5)))
{var inst_14772 = (state_14774[(2)]);var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14774__$1,inst_14772);
} else
{if((state_val_14775 === (4)))
{var inst_14768 = cljs.core.deref.call(null,self__.ticket);var inst_14769 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14768));var inst_14770 = console.log(inst_14769);var state_14774__$1 = state_14774;var statearr_14777_14790 = state_14774__$1;(statearr_14777_14790[(2)] = inst_14770);
(statearr_14777_14790[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14775 === (3)))
{var inst_14761 = (state_14774[(7)]);var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14774__$1,(6),self__.response_chan,inst_14761);
} else
{if((state_val_14775 === (2)))
{var inst_14761 = (state_14774[(2)]);var inst_14762 = cljs.core.deref.call(null,self__.ticket);var inst_14763 = cljs.core._EQ_.call(null,rq_ticket,inst_14762);var state_14774__$1 = (function (){var statearr_14778 = state_14774;(statearr_14778[(7)] = inst_14761);
return statearr_14778;
})();if(inst_14763)
{var statearr_14779_14791 = state_14774__$1;(statearr_14779_14791[(1)] = (3));
} else
{var statearr_14780_14792 = state_14774__$1;(statearr_14780_14792[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14775 === (1)))
{var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14774__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___14788,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___14788,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_14784 = [null,null,null,null,null,null,null,null];(statearr_14784[(0)] = state_machine__5694__auto__);
(statearr_14784[(1)] = (1));
return statearr_14784;
});
var state_machine__5694__auto____1 = (function (state_14774){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_14774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e14785){if((e14785 instanceof Object))
{var ex__5697__auto__ = e14785;var statearr_14786_14793 = state_14774;(statearr_14786_14793[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14785;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14794 = state_14774;
state_14774 = G__14794;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_14774){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_14774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___14788,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_14787 = f__5709__auto__.call(null);(statearr_14787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___14788);
return statearr_14787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___14788,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__14795){
var ordered_resource = cljs.core.first(arglist__14795);
arglist__14795 = cljs.core.next(arglist__14795);
var api_fn = cljs.core.first(arglist__14795);
var args = cljs.core.rest(arglist__14795);
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
return (function (state_14851){var state_val_14852 = (state_14851[(1)]);if((state_val_14852 === (7)))
{var inst_14842 = (state_14851[(2)]);var state_14851__$1 = state_14851;if(cljs.core.truth_(inst_14842))
{var statearr_14853_14872 = state_14851__$1;(statearr_14853_14872[(1)] = (8));
} else
{var statearr_14854_14873 = state_14851__$1;(statearr_14854_14873[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14852 === (1)))
{var state_14851__$1 = state_14851;var statearr_14855_14874 = state_14851__$1;(statearr_14855_14874[(2)] = null);
(statearr_14855_14874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14852 === (4)))
{var inst_14837 = (state_14851[(7)]);var inst_14837__$1 = (state_14851[(2)]);var state_14851__$1 = (function (){var statearr_14856 = state_14851;(statearr_14856[(7)] = inst_14837__$1);
return statearr_14856;
})();if(cljs.core.truth_(inst_14837__$1))
{var statearr_14857_14875 = state_14851__$1;(statearr_14857_14875[(1)] = (5));
} else
{var statearr_14858_14876 = state_14851__$1;(statearr_14858_14876[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14852 === (6)))
{var state_14851__$1 = state_14851;var statearr_14859_14877 = state_14851__$1;(statearr_14859_14877[(2)] = null);
(statearr_14859_14877[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14852 === (3)))
{var inst_14849 = (state_14851[(2)]);var state_14851__$1 = state_14851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14851__$1,inst_14849);
} else
{if((state_val_14852 === (2)))
{var inst_14835 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_14851__$1 = state_14851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14851__$1,(4),inst_14835);
} else
{if((state_val_14852 === (9)))
{var state_14851__$1 = state_14851;var statearr_14860_14878 = state_14851__$1;(statearr_14860_14878[(2)] = null);
(statearr_14860_14878[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14852 === (5)))
{var inst_14837 = (state_14851[(7)]);var inst_14839 = f.call(null,inst_14837);var state_14851__$1 = (function (){var statearr_14861 = state_14851;(statearr_14861[(8)] = inst_14839);
return statearr_14861;
})();var statearr_14862_14879 = state_14851__$1;(statearr_14862_14879[(2)] = true);
(statearr_14862_14879[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14852 === (10)))
{var inst_14847 = (state_14851[(2)]);var state_14851__$1 = state_14851;var statearr_14863_14880 = state_14851__$1;(statearr_14863_14880[(2)] = inst_14847);
(statearr_14863_14880[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14852 === (8)))
{var state_14851__$1 = state_14851;var statearr_14864_14881 = state_14851__$1;(statearr_14864_14881[(2)] = null);
(statearr_14864_14881[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_14868 = [null,null,null,null,null,null,null,null,null];(statearr_14868[(0)] = state_machine__5694__auto__);
(statearr_14868[(1)] = (1));
return statearr_14868;
});
var state_machine__5694__auto____1 = (function (state_14851){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_14851);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e14869){if((e14869 instanceof Object))
{var ex__5697__auto__ = e14869;var statearr_14870_14882 = state_14851;(statearr_14870_14882[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14869;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14883 = state_14851;
state_14851 = G__14883;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_14851){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_14851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_14871 = f__5709__auto__.call(null);(statearr_14871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_14871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
