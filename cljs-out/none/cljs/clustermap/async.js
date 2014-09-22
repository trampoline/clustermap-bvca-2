// Compiled by ClojureScript 0.0-2322
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
map_async.cljs$lang$applyTo = (function (arglist__12647){
var f = cljs.core.first(arglist__12647);
var colls = cljs.core.rest(arglist__12647);
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
var dorun_async__delegate = function (ch,p__12648){var map__12708 = p__12648;var map__12708__$1 = ((cljs.core.seq_QMARK_.call(null,map__12708))?cljs.core.apply.call(null,cljs.core.hash_map,map__12708):map__12708);var delay = cljs.core.get.call(null,map__12708__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12708__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___12767 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12767,map__12708,map__12708__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12767,map__12708,map__12708__$1,delay,log){
return (function (state_12737){var state_val_12738 = (state_12737[(1)]);if((state_val_12738 === (7)))
{var inst_12728 = (state_12737[(2)]);var state_12737__$1 = state_12737;if(cljs.core.truth_(inst_12728))
{var statearr_12739_12768 = state_12737__$1;(statearr_12739_12768[(1)] = (15));
} else
{var statearr_12740_12769 = state_12737__$1;(statearr_12740_12769[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (1)))
{var state_12737__$1 = state_12737;var statearr_12741_12770 = state_12737__$1;(statearr_12741_12770[(2)] = null);
(statearr_12741_12770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (4)))
{var inst_12711 = (state_12737[(7)]);var inst_12711__$1 = (state_12737[(2)]);var state_12737__$1 = (function (){var statearr_12742 = state_12737;(statearr_12742[(7)] = inst_12711__$1);
return statearr_12742;
})();if(cljs.core.truth_(inst_12711__$1))
{var statearr_12743_12771 = state_12737__$1;(statearr_12743_12771[(1)] = (5));
} else
{var statearr_12744_12772 = state_12737__$1;(statearr_12744_12772[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (15)))
{var state_12737__$1 = state_12737;var statearr_12745_12773 = state_12737__$1;(statearr_12745_12773[(2)] = null);
(statearr_12745_12773[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (13)))
{var state_12737__$1 = state_12737;var statearr_12746_12774 = state_12737__$1;(statearr_12746_12774[(2)] = null);
(statearr_12746_12774[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (6)))
{var state_12737__$1 = state_12737;var statearr_12747_12775 = state_12737__$1;(statearr_12747_12775[(2)] = null);
(statearr_12747_12775[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (17)))
{var inst_12733 = (state_12737[(2)]);var state_12737__$1 = state_12737;var statearr_12748_12776 = state_12737__$1;(statearr_12748_12776[(2)] = inst_12733);
(statearr_12748_12776[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (3)))
{var inst_12735 = (state_12737[(2)]);var state_12737__$1 = state_12737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12737__$1,inst_12735);
} else
{if((state_val_12738 === (12)))
{var inst_12711 = (state_12737[(7)]);var inst_12721 = cljs.core.clj__GT_js.call(null,inst_12711);var inst_12722 = console.log(inst_12721);var state_12737__$1 = state_12737;var statearr_12749_12777 = state_12737__$1;(statearr_12749_12777[(2)] = inst_12722);
(statearr_12749_12777[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (2)))
{var state_12737__$1 = state_12737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12737__$1,(4),ch);
} else
{if((state_val_12738 === (11)))
{var inst_12716 = (state_12737[(2)]);var state_12737__$1 = state_12737;var statearr_12750_12778 = state_12737__$1;(statearr_12750_12778[(2)] = inst_12716);
(statearr_12750_12778[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (9)))
{var state_12737__$1 = state_12737;var statearr_12751_12779 = state_12737__$1;(statearr_12751_12779[(2)] = null);
(statearr_12751_12779[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (5)))
{var state_12737__$1 = state_12737;if(cljs.core.truth_(delay))
{var statearr_12752_12780 = state_12737__$1;(statearr_12752_12780[(1)] = (8));
} else
{var statearr_12753_12781 = state_12737__$1;(statearr_12753_12781[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (14)))
{var inst_12711 = (state_12737[(7)]);var inst_12725 = (state_12737[(2)]);var state_12737__$1 = (function (){var statearr_12754 = state_12737;(statearr_12754[(8)] = inst_12725);
return statearr_12754;
})();var statearr_12755_12782 = state_12737__$1;(statearr_12755_12782[(2)] = inst_12711);
(statearr_12755_12782[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (16)))
{var state_12737__$1 = state_12737;var statearr_12756_12783 = state_12737__$1;(statearr_12756_12783[(2)] = null);
(statearr_12756_12783[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (10)))
{var inst_12719 = (state_12737[(2)]);var state_12737__$1 = (function (){var statearr_12757 = state_12737;(statearr_12757[(9)] = inst_12719);
return statearr_12757;
})();if(cljs.core.truth_(log))
{var statearr_12758_12784 = state_12737__$1;(statearr_12758_12784[(1)] = (12));
} else
{var statearr_12759_12785 = state_12737__$1;(statearr_12759_12785[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12738 === (8)))
{var inst_12714 = cljs.core.async.timeout.call(null,delay);var state_12737__$1 = state_12737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12737__$1,(11),inst_12714);
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
});})(c__5708__auto___12767,map__12708,map__12708__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___12767,map__12708,map__12708__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12763 = [null,null,null,null,null,null,null,null,null,null];(statearr_12763[(0)] = state_machine__5694__auto__);
(statearr_12763[(1)] = (1));
return statearr_12763;
});
var state_machine__5694__auto____1 = (function (state_12737){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12737);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12764){if((e12764 instanceof Object))
{var ex__5697__auto__ = e12764;var statearr_12765_12786 = state_12737;(statearr_12765_12786[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12737);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12764;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12787 = state_12737;
state_12737 = G__12787;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12737){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12767,map__12708,map__12708__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_12766 = f__5709__auto__.call(null);(statearr_12766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12767);
return statearr_12766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12767,map__12708,map__12708__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12648 = null;if (arguments.length > 1) {
  p__12648 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12648);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12788){
var ch = cljs.core.first(arglist__12788);
var p__12648 = cljs.core.rest(arglist__12788);
return dorun_async__delegate(ch,p__12648);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map