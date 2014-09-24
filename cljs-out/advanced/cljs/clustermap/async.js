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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__37672){
var f = cljs.core.first(arglist__37672);
var colls = cljs.core.rest(arglist__37672);
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
var dorun_async__delegate = function (ch,p__37673){var map__37733 = p__37673;var map__37733__$1 = ((cljs.core.seq_QMARK_(map__37733))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37733):map__37733);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37733__$1,cljs.core.constant$keyword$1204);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37733__$1,cljs.core.constant$keyword$1118);var c__5708__auto___37792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___37792,map__37733,map__37733__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___37792,map__37733,map__37733__$1,delay,log){
return (function (state_37762){var state_val_37763 = (state_37762[(1)]);if((state_val_37763 === (7)))
{var inst_37753 = (state_37762[(2)]);var state_37762__$1 = state_37762;if(cljs.core.truth_(inst_37753))
{var statearr_37764_37793 = state_37762__$1;(statearr_37764_37793[(1)] = (15));
} else
{var statearr_37765_37794 = state_37762__$1;(statearr_37765_37794[(1)] = (16));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (1)))
{var state_37762__$1 = state_37762;var statearr_37766_37795 = state_37762__$1;(statearr_37766_37795[(2)] = null);
(statearr_37766_37795[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (4)))
{var inst_37736 = (state_37762[(7)]);var inst_37736__$1 = (state_37762[(2)]);var state_37762__$1 = (function (){var statearr_37767 = state_37762;(statearr_37767[(7)] = inst_37736__$1);
return statearr_37767;
})();if(cljs.core.truth_(inst_37736__$1))
{var statearr_37768_37796 = state_37762__$1;(statearr_37768_37796[(1)] = (5));
} else
{var statearr_37769_37797 = state_37762__$1;(statearr_37769_37797[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (15)))
{var state_37762__$1 = state_37762;var statearr_37770_37798 = state_37762__$1;(statearr_37770_37798[(2)] = null);
(statearr_37770_37798[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (13)))
{var state_37762__$1 = state_37762;var statearr_37771_37799 = state_37762__$1;(statearr_37771_37799[(2)] = null);
(statearr_37771_37799[(1)] = (14));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (6)))
{var state_37762__$1 = state_37762;var statearr_37772_37800 = state_37762__$1;(statearr_37772_37800[(2)] = null);
(statearr_37772_37800[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (17)))
{var inst_37758 = (state_37762[(2)]);var state_37762__$1 = state_37762;var statearr_37773_37801 = state_37762__$1;(statearr_37773_37801[(2)] = inst_37758);
(statearr_37773_37801[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (3)))
{var inst_37760 = (state_37762[(2)]);var state_37762__$1 = state_37762;return cljs.core.async.impl.ioc_helpers.return_chan(state_37762__$1,inst_37760);
} else
{if((state_val_37763 === (12)))
{var inst_37736 = (state_37762[(7)]);var inst_37746 = cljs.core.clj__GT_js(inst_37736);var inst_37747 = console.log(inst_37746);var state_37762__$1 = state_37762;var statearr_37774_37802 = state_37762__$1;(statearr_37774_37802[(2)] = inst_37747);
(statearr_37774_37802[(1)] = (14));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (2)))
{var state_37762__$1 = state_37762;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37762__$1,(4),ch);
} else
{if((state_val_37763 === (11)))
{var inst_37741 = (state_37762[(2)]);var state_37762__$1 = state_37762;var statearr_37775_37803 = state_37762__$1;(statearr_37775_37803[(2)] = inst_37741);
(statearr_37775_37803[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (9)))
{var state_37762__$1 = state_37762;var statearr_37776_37804 = state_37762__$1;(statearr_37776_37804[(2)] = null);
(statearr_37776_37804[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (5)))
{var state_37762__$1 = state_37762;if(cljs.core.truth_(delay))
{var statearr_37777_37805 = state_37762__$1;(statearr_37777_37805[(1)] = (8));
} else
{var statearr_37778_37806 = state_37762__$1;(statearr_37778_37806[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (14)))
{var inst_37736 = (state_37762[(7)]);var inst_37750 = (state_37762[(2)]);var state_37762__$1 = (function (){var statearr_37779 = state_37762;(statearr_37779[(8)] = inst_37750);
return statearr_37779;
})();var statearr_37780_37807 = state_37762__$1;(statearr_37780_37807[(2)] = inst_37736);
(statearr_37780_37807[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (16)))
{var state_37762__$1 = state_37762;var statearr_37781_37808 = state_37762__$1;(statearr_37781_37808[(2)] = null);
(statearr_37781_37808[(1)] = (17));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (10)))
{var inst_37744 = (state_37762[(2)]);var state_37762__$1 = (function (){var statearr_37782 = state_37762;(statearr_37782[(9)] = inst_37744);
return statearr_37782;
})();if(cljs.core.truth_(log))
{var statearr_37783_37809 = state_37762__$1;(statearr_37783_37809[(1)] = (12));
} else
{var statearr_37784_37810 = state_37762__$1;(statearr_37784_37810[(1)] = (13));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_37763 === (8)))
{var inst_37739 = cljs.core.async.timeout(delay);var state_37762__$1 = state_37762;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37762__$1,(11),inst_37739);
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
});})(c__5708__auto___37792,map__37733,map__37733__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___37792,map__37733,map__37733__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37788 = [null,null,null,null,null,null,null,null,null,null];(statearr_37788[(0)] = state_machine__5694__auto__);
(statearr_37788[(1)] = (1));
return statearr_37788;
});
var state_machine__5694__auto____1 = (function (state_37762){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37762);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37789){if((e37789 instanceof Object))
{var ex__5697__auto__ = e37789;var statearr_37790_37811 = state_37762;(statearr_37790_37811[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37762);
return cljs.core.constant$keyword$844;
} else
{throw e37789;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__37812 = state_37762;
state_37762 = G__37812;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37762){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___37792,map__37733,map__37733__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_37791 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___37792);
return statearr_37791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___37792,map__37733,map__37733__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__37673 = null;if (arguments.length > 1) {
  p__37673 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__37673);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__37813){
var ch = cljs.core.first(arglist__37813);
var p__37673 = cljs.core.rest(arglist__37813);
return dorun_async__delegate(ch,p__37673);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
