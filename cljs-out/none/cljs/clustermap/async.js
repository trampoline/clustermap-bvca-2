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
map_async.cljs$lang$applyTo = (function (arglist__50602){
var f = cljs.core.first(arglist__50602);
var colls = cljs.core.rest(arglist__50602);
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
var dorun_async__delegate = function (ch,p__50603){var map__50663 = p__50603;var map__50663__$1 = ((cljs.core.seq_QMARK_.call(null,map__50663))?cljs.core.apply.call(null,cljs.core.hash_map,map__50663):map__50663);var delay = cljs.core.get.call(null,map__50663__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__50663__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___50722 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50722,map__50663,map__50663__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50722,map__50663,map__50663__$1,delay,log){
return (function (state_50692){var state_val_50693 = (state_50692[(1)]);if((state_val_50693 === (7)))
{var inst_50683 = (state_50692[(2)]);var state_50692__$1 = state_50692;if(cljs.core.truth_(inst_50683))
{var statearr_50694_50723 = state_50692__$1;(statearr_50694_50723[(1)] = (15));
} else
{var statearr_50695_50724 = state_50692__$1;(statearr_50695_50724[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (1)))
{var state_50692__$1 = state_50692;var statearr_50696_50725 = state_50692__$1;(statearr_50696_50725[(2)] = null);
(statearr_50696_50725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (4)))
{var inst_50666 = (state_50692[(7)]);var inst_50666__$1 = (state_50692[(2)]);var state_50692__$1 = (function (){var statearr_50697 = state_50692;(statearr_50697[(7)] = inst_50666__$1);
return statearr_50697;
})();if(cljs.core.truth_(inst_50666__$1))
{var statearr_50698_50726 = state_50692__$1;(statearr_50698_50726[(1)] = (5));
} else
{var statearr_50699_50727 = state_50692__$1;(statearr_50699_50727[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (15)))
{var state_50692__$1 = state_50692;var statearr_50700_50728 = state_50692__$1;(statearr_50700_50728[(2)] = null);
(statearr_50700_50728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (13)))
{var state_50692__$1 = state_50692;var statearr_50701_50729 = state_50692__$1;(statearr_50701_50729[(2)] = null);
(statearr_50701_50729[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (6)))
{var state_50692__$1 = state_50692;var statearr_50702_50730 = state_50692__$1;(statearr_50702_50730[(2)] = null);
(statearr_50702_50730[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (17)))
{var inst_50688 = (state_50692[(2)]);var state_50692__$1 = state_50692;var statearr_50703_50731 = state_50692__$1;(statearr_50703_50731[(2)] = inst_50688);
(statearr_50703_50731[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (3)))
{var inst_50690 = (state_50692[(2)]);var state_50692__$1 = state_50692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50692__$1,inst_50690);
} else
{if((state_val_50693 === (12)))
{var inst_50666 = (state_50692[(7)]);var inst_50676 = cljs.core.clj__GT_js.call(null,inst_50666);var inst_50677 = console.log(inst_50676);var state_50692__$1 = state_50692;var statearr_50704_50732 = state_50692__$1;(statearr_50704_50732[(2)] = inst_50677);
(statearr_50704_50732[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (2)))
{var state_50692__$1 = state_50692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50692__$1,(4),ch);
} else
{if((state_val_50693 === (11)))
{var inst_50671 = (state_50692[(2)]);var state_50692__$1 = state_50692;var statearr_50705_50733 = state_50692__$1;(statearr_50705_50733[(2)] = inst_50671);
(statearr_50705_50733[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (9)))
{var state_50692__$1 = state_50692;var statearr_50706_50734 = state_50692__$1;(statearr_50706_50734[(2)] = null);
(statearr_50706_50734[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (5)))
{var state_50692__$1 = state_50692;if(cljs.core.truth_(delay))
{var statearr_50707_50735 = state_50692__$1;(statearr_50707_50735[(1)] = (8));
} else
{var statearr_50708_50736 = state_50692__$1;(statearr_50708_50736[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (14)))
{var inst_50666 = (state_50692[(7)]);var inst_50680 = (state_50692[(2)]);var state_50692__$1 = (function (){var statearr_50709 = state_50692;(statearr_50709[(8)] = inst_50680);
return statearr_50709;
})();var statearr_50710_50737 = state_50692__$1;(statearr_50710_50737[(2)] = inst_50666);
(statearr_50710_50737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (16)))
{var state_50692__$1 = state_50692;var statearr_50711_50738 = state_50692__$1;(statearr_50711_50738[(2)] = null);
(statearr_50711_50738[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (10)))
{var inst_50674 = (state_50692[(2)]);var state_50692__$1 = (function (){var statearr_50712 = state_50692;(statearr_50712[(9)] = inst_50674);
return statearr_50712;
})();if(cljs.core.truth_(log))
{var statearr_50713_50739 = state_50692__$1;(statearr_50713_50739[(1)] = (12));
} else
{var statearr_50714_50740 = state_50692__$1;(statearr_50714_50740[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50693 === (8)))
{var inst_50669 = cljs.core.async.timeout.call(null,delay);var state_50692__$1 = state_50692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50692__$1,(11),inst_50669);
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
});})(c__5693__auto___50722,map__50663,map__50663__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___50722,map__50663,map__50663__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50718 = [null,null,null,null,null,null,null,null,null,null];(statearr_50718[(0)] = state_machine__5679__auto__);
(statearr_50718[(1)] = (1));
return statearr_50718;
});
var state_machine__5679__auto____1 = (function (state_50692){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50692);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50719){if((e50719 instanceof Object))
{var ex__5682__auto__ = e50719;var statearr_50720_50741 = state_50692;(statearr_50720_50741[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50692);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50742 = state_50692;
state_50692 = G__50742;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50692){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50722,map__50663,map__50663__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_50721 = f__5694__auto__.call(null);(statearr_50721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50722);
return statearr_50721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50722,map__50663,map__50663__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__50603 = null;if (arguments.length > 1) {
  p__50603 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__50603);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__50743){
var ch = cljs.core.first(arglist__50743);
var p__50603 = cljs.core.rest(arglist__50743);
return dorun_async__delegate(ch,p__50603);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map