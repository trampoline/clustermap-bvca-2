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
map_async.cljs$lang$applyTo = (function (arglist__50584){
var f = cljs.core.first(arglist__50584);
var colls = cljs.core.rest(arglist__50584);
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
var dorun_async__delegate = function (ch,p__50585){var map__50645 = p__50585;var map__50645__$1 = ((cljs.core.seq_QMARK_.call(null,map__50645))?cljs.core.apply.call(null,cljs.core.hash_map,map__50645):map__50645);var delay = cljs.core.get.call(null,map__50645__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__50645__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___50704 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50704,map__50645,map__50645__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50704,map__50645,map__50645__$1,delay,log){
return (function (state_50674){var state_val_50675 = (state_50674[(1)]);if((state_val_50675 === (7)))
{var inst_50665 = (state_50674[(2)]);var state_50674__$1 = state_50674;if(cljs.core.truth_(inst_50665))
{var statearr_50676_50705 = state_50674__$1;(statearr_50676_50705[(1)] = (15));
} else
{var statearr_50677_50706 = state_50674__$1;(statearr_50677_50706[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (1)))
{var state_50674__$1 = state_50674;var statearr_50678_50707 = state_50674__$1;(statearr_50678_50707[(2)] = null);
(statearr_50678_50707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (4)))
{var inst_50648 = (state_50674[(7)]);var inst_50648__$1 = (state_50674[(2)]);var state_50674__$1 = (function (){var statearr_50679 = state_50674;(statearr_50679[(7)] = inst_50648__$1);
return statearr_50679;
})();if(cljs.core.truth_(inst_50648__$1))
{var statearr_50680_50708 = state_50674__$1;(statearr_50680_50708[(1)] = (5));
} else
{var statearr_50681_50709 = state_50674__$1;(statearr_50681_50709[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (15)))
{var state_50674__$1 = state_50674;var statearr_50682_50710 = state_50674__$1;(statearr_50682_50710[(2)] = null);
(statearr_50682_50710[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (13)))
{var state_50674__$1 = state_50674;var statearr_50683_50711 = state_50674__$1;(statearr_50683_50711[(2)] = null);
(statearr_50683_50711[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (6)))
{var state_50674__$1 = state_50674;var statearr_50684_50712 = state_50674__$1;(statearr_50684_50712[(2)] = null);
(statearr_50684_50712[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (17)))
{var inst_50670 = (state_50674[(2)]);var state_50674__$1 = state_50674;var statearr_50685_50713 = state_50674__$1;(statearr_50685_50713[(2)] = inst_50670);
(statearr_50685_50713[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (3)))
{var inst_50672 = (state_50674[(2)]);var state_50674__$1 = state_50674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50674__$1,inst_50672);
} else
{if((state_val_50675 === (12)))
{var inst_50648 = (state_50674[(7)]);var inst_50658 = cljs.core.clj__GT_js.call(null,inst_50648);var inst_50659 = console.log(inst_50658);var state_50674__$1 = state_50674;var statearr_50686_50714 = state_50674__$1;(statearr_50686_50714[(2)] = inst_50659);
(statearr_50686_50714[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (2)))
{var state_50674__$1 = state_50674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50674__$1,(4),ch);
} else
{if((state_val_50675 === (11)))
{var inst_50653 = (state_50674[(2)]);var state_50674__$1 = state_50674;var statearr_50687_50715 = state_50674__$1;(statearr_50687_50715[(2)] = inst_50653);
(statearr_50687_50715[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (9)))
{var state_50674__$1 = state_50674;var statearr_50688_50716 = state_50674__$1;(statearr_50688_50716[(2)] = null);
(statearr_50688_50716[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (5)))
{var state_50674__$1 = state_50674;if(cljs.core.truth_(delay))
{var statearr_50689_50717 = state_50674__$1;(statearr_50689_50717[(1)] = (8));
} else
{var statearr_50690_50718 = state_50674__$1;(statearr_50690_50718[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (14)))
{var inst_50648 = (state_50674[(7)]);var inst_50662 = (state_50674[(2)]);var state_50674__$1 = (function (){var statearr_50691 = state_50674;(statearr_50691[(8)] = inst_50662);
return statearr_50691;
})();var statearr_50692_50719 = state_50674__$1;(statearr_50692_50719[(2)] = inst_50648);
(statearr_50692_50719[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (16)))
{var state_50674__$1 = state_50674;var statearr_50693_50720 = state_50674__$1;(statearr_50693_50720[(2)] = null);
(statearr_50693_50720[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (10)))
{var inst_50656 = (state_50674[(2)]);var state_50674__$1 = (function (){var statearr_50694 = state_50674;(statearr_50694[(9)] = inst_50656);
return statearr_50694;
})();if(cljs.core.truth_(log))
{var statearr_50695_50721 = state_50674__$1;(statearr_50695_50721[(1)] = (12));
} else
{var statearr_50696_50722 = state_50674__$1;(statearr_50696_50722[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50675 === (8)))
{var inst_50651 = cljs.core.async.timeout.call(null,delay);var state_50674__$1 = state_50674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50674__$1,(11),inst_50651);
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
});})(c__5693__auto___50704,map__50645,map__50645__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___50704,map__50645,map__50645__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50700 = [null,null,null,null,null,null,null,null,null,null];(statearr_50700[(0)] = state_machine__5679__auto__);
(statearr_50700[(1)] = (1));
return statearr_50700;
});
var state_machine__5679__auto____1 = (function (state_50674){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50701){if((e50701 instanceof Object))
{var ex__5682__auto__ = e50701;var statearr_50702_50723 = state_50674;(statearr_50702_50723[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50724 = state_50674;
state_50674 = G__50724;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50674){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50704,map__50645,map__50645__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_50703 = f__5694__auto__.call(null);(statearr_50703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50704);
return statearr_50703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50704,map__50645,map__50645__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__50585 = null;if (arguments.length > 1) {
  p__50585 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__50585);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__50725){
var ch = cljs.core.first(arglist__50725);
var p__50585 = cljs.core.rest(arglist__50725);
return dorun_async__delegate(ch,p__50585);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map