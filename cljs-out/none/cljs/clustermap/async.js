// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* asynchronously maps a function over some colls
* @param {...*} var_args
*/
clustermap.async.map_async = (function() { 
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__49564){
var f = cljs.core.first(arglist__49564);
var colls = cljs.core.rest(arglist__49564);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* async consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__49565){var map__49625 = p__49565;var map__49625__$1 = ((cljs.core.seq_QMARK_.call(null,map__49625))?cljs.core.apply.call(null,cljs.core.hash_map,map__49625):map__49625);var delay = cljs.core.get.call(null,map__49625__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__49625__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5691__auto___49684 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___49684,map__49625,map__49625__$1,delay,log){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___49684,map__49625,map__49625__$1,delay,log){
return (function (state_49654){var state_val_49655 = (state_49654[(1)]);if((state_val_49655 === (7)))
{var inst_49645 = (state_49654[(2)]);var state_49654__$1 = state_49654;if(cljs.core.truth_(inst_49645))
{var statearr_49656_49685 = state_49654__$1;(statearr_49656_49685[(1)] = (15));
} else
{var statearr_49657_49686 = state_49654__$1;(statearr_49657_49686[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (1)))
{var state_49654__$1 = state_49654;var statearr_49658_49687 = state_49654__$1;(statearr_49658_49687[(2)] = null);
(statearr_49658_49687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (4)))
{var inst_49628 = (state_49654[(7)]);var inst_49628__$1 = (state_49654[(2)]);var state_49654__$1 = (function (){var statearr_49659 = state_49654;(statearr_49659[(7)] = inst_49628__$1);
return statearr_49659;
})();if(cljs.core.truth_(inst_49628__$1))
{var statearr_49660_49688 = state_49654__$1;(statearr_49660_49688[(1)] = (5));
} else
{var statearr_49661_49689 = state_49654__$1;(statearr_49661_49689[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (15)))
{var state_49654__$1 = state_49654;var statearr_49662_49690 = state_49654__$1;(statearr_49662_49690[(2)] = null);
(statearr_49662_49690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (13)))
{var state_49654__$1 = state_49654;var statearr_49663_49691 = state_49654__$1;(statearr_49663_49691[(2)] = null);
(statearr_49663_49691[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (6)))
{var state_49654__$1 = state_49654;var statearr_49664_49692 = state_49654__$1;(statearr_49664_49692[(2)] = null);
(statearr_49664_49692[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (17)))
{var inst_49650 = (state_49654[(2)]);var state_49654__$1 = state_49654;var statearr_49665_49693 = state_49654__$1;(statearr_49665_49693[(2)] = inst_49650);
(statearr_49665_49693[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (3)))
{var inst_49652 = (state_49654[(2)]);var state_49654__$1 = state_49654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49654__$1,inst_49652);
} else
{if((state_val_49655 === (12)))
{var inst_49628 = (state_49654[(7)]);var inst_49638 = cljs.core.clj__GT_js.call(null,inst_49628);var inst_49639 = console.log(inst_49638);var state_49654__$1 = state_49654;var statearr_49666_49694 = state_49654__$1;(statearr_49666_49694[(2)] = inst_49639);
(statearr_49666_49694[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (2)))
{var state_49654__$1 = state_49654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49654__$1,(4),ch);
} else
{if((state_val_49655 === (11)))
{var inst_49633 = (state_49654[(2)]);var state_49654__$1 = state_49654;var statearr_49667_49695 = state_49654__$1;(statearr_49667_49695[(2)] = inst_49633);
(statearr_49667_49695[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (9)))
{var state_49654__$1 = state_49654;var statearr_49668_49696 = state_49654__$1;(statearr_49668_49696[(2)] = null);
(statearr_49668_49696[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (5)))
{var state_49654__$1 = state_49654;if(cljs.core.truth_(delay))
{var statearr_49669_49697 = state_49654__$1;(statearr_49669_49697[(1)] = (8));
} else
{var statearr_49670_49698 = state_49654__$1;(statearr_49670_49698[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (14)))
{var inst_49628 = (state_49654[(7)]);var inst_49642 = (state_49654[(2)]);var state_49654__$1 = (function (){var statearr_49671 = state_49654;(statearr_49671[(8)] = inst_49642);
return statearr_49671;
})();var statearr_49672_49699 = state_49654__$1;(statearr_49672_49699[(2)] = inst_49628);
(statearr_49672_49699[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (16)))
{var state_49654__$1 = state_49654;var statearr_49673_49700 = state_49654__$1;(statearr_49673_49700[(2)] = null);
(statearr_49673_49700[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (10)))
{var inst_49636 = (state_49654[(2)]);var state_49654__$1 = (function (){var statearr_49674 = state_49654;(statearr_49674[(9)] = inst_49636);
return statearr_49674;
})();if(cljs.core.truth_(log))
{var statearr_49675_49701 = state_49654__$1;(statearr_49675_49701[(1)] = (12));
} else
{var statearr_49676_49702 = state_49654__$1;(statearr_49676_49702[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49655 === (8)))
{var inst_49631 = cljs.core.async.timeout.call(null,delay);var state_49654__$1 = state_49654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49654__$1,(11),inst_49631);
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
}
}
}
}
}
}
}
});})(c__5691__auto___49684,map__49625,map__49625__$1,delay,log))
;return ((function (switch__5676__auto__,c__5691__auto___49684,map__49625,map__49625__$1,delay,log){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_49680 = [null,null,null,null,null,null,null,null,null,null];(statearr_49680[(0)] = state_machine__5677__auto__);
(statearr_49680[(1)] = (1));
return statearr_49680;
});
var state_machine__5677__auto____1 = (function (state_49654){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49654);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49681){if((e49681 instanceof Object))
{var ex__5680__auto__ = e49681;var statearr_49682_49703 = state_49654;(statearr_49682_49703[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49704 = state_49654;
state_49654 = G__49704;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49654){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___49684,map__49625,map__49625__$1,delay,log))
})();var state__5693__auto__ = (function (){var statearr_49683 = f__5692__auto__.call(null);(statearr_49683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___49684);
return statearr_49683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___49684,map__49625,map__49625__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__49565 = null;if (arguments.length > 1) {
  p__49565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__49565);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__49705){
var ch = cljs.core.first(arglist__49705);
var p__49565 = cljs.core.rest(arglist__49705);
return dorun_async__delegate(ch,p__49565);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map