// Compiled by ClojureScript 0.0-2356
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
map_async.cljs$lang$applyTo = (function (arglist__12828){
var f = cljs.core.first(arglist__12828);
var colls = cljs.core.rest(arglist__12828);
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
var dorun_async__delegate = function (ch,p__12829){var map__12889 = p__12829;var map__12889__$1 = ((cljs.core.seq_QMARK_.call(null,map__12889))?cljs.core.apply.call(null,cljs.core.hash_map,map__12889):map__12889);var delay = cljs.core.get.call(null,map__12889__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12889__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5813__auto___12948 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___12948,map__12889,map__12889__$1,delay,log){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___12948,map__12889,map__12889__$1,delay,log){
return (function (state_12918){var state_val_12919 = (state_12918[(1)]);if((state_val_12919 === (7)))
{var inst_12909 = (state_12918[(2)]);var state_12918__$1 = state_12918;if(cljs.core.truth_(inst_12909))
{var statearr_12920_12949 = state_12918__$1;(statearr_12920_12949[(1)] = (15));
} else
{var statearr_12921_12950 = state_12918__$1;(statearr_12921_12950[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (1)))
{var state_12918__$1 = state_12918;var statearr_12922_12951 = state_12918__$1;(statearr_12922_12951[(2)] = null);
(statearr_12922_12951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (4)))
{var inst_12892 = (state_12918[(7)]);var inst_12892__$1 = (state_12918[(2)]);var state_12918__$1 = (function (){var statearr_12923 = state_12918;(statearr_12923[(7)] = inst_12892__$1);
return statearr_12923;
})();if(cljs.core.truth_(inst_12892__$1))
{var statearr_12924_12952 = state_12918__$1;(statearr_12924_12952[(1)] = (5));
} else
{var statearr_12925_12953 = state_12918__$1;(statearr_12925_12953[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (15)))
{var state_12918__$1 = state_12918;var statearr_12926_12954 = state_12918__$1;(statearr_12926_12954[(2)] = null);
(statearr_12926_12954[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (13)))
{var state_12918__$1 = state_12918;var statearr_12927_12955 = state_12918__$1;(statearr_12927_12955[(2)] = null);
(statearr_12927_12955[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (6)))
{var state_12918__$1 = state_12918;var statearr_12928_12956 = state_12918__$1;(statearr_12928_12956[(2)] = null);
(statearr_12928_12956[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (17)))
{var inst_12914 = (state_12918[(2)]);var state_12918__$1 = state_12918;var statearr_12929_12957 = state_12918__$1;(statearr_12929_12957[(2)] = inst_12914);
(statearr_12929_12957[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (3)))
{var inst_12916 = (state_12918[(2)]);var state_12918__$1 = state_12918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12918__$1,inst_12916);
} else
{if((state_val_12919 === (12)))
{var inst_12892 = (state_12918[(7)]);var inst_12902 = cljs.core.clj__GT_js.call(null,inst_12892);var inst_12903 = console.log(inst_12902);var state_12918__$1 = state_12918;var statearr_12930_12958 = state_12918__$1;(statearr_12930_12958[(2)] = inst_12903);
(statearr_12930_12958[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (2)))
{var state_12918__$1 = state_12918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12918__$1,(4),ch);
} else
{if((state_val_12919 === (11)))
{var inst_12897 = (state_12918[(2)]);var state_12918__$1 = state_12918;var statearr_12931_12959 = state_12918__$1;(statearr_12931_12959[(2)] = inst_12897);
(statearr_12931_12959[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (9)))
{var state_12918__$1 = state_12918;var statearr_12932_12960 = state_12918__$1;(statearr_12932_12960[(2)] = null);
(statearr_12932_12960[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (5)))
{var state_12918__$1 = state_12918;if(cljs.core.truth_(delay))
{var statearr_12933_12961 = state_12918__$1;(statearr_12933_12961[(1)] = (8));
} else
{var statearr_12934_12962 = state_12918__$1;(statearr_12934_12962[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (14)))
{var inst_12892 = (state_12918[(7)]);var inst_12906 = (state_12918[(2)]);var state_12918__$1 = (function (){var statearr_12935 = state_12918;(statearr_12935[(8)] = inst_12906);
return statearr_12935;
})();var statearr_12936_12963 = state_12918__$1;(statearr_12936_12963[(2)] = inst_12892);
(statearr_12936_12963[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (16)))
{var state_12918__$1 = state_12918;var statearr_12937_12964 = state_12918__$1;(statearr_12937_12964[(2)] = null);
(statearr_12937_12964[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (10)))
{var inst_12900 = (state_12918[(2)]);var state_12918__$1 = (function (){var statearr_12938 = state_12918;(statearr_12938[(9)] = inst_12900);
return statearr_12938;
})();if(cljs.core.truth_(log))
{var statearr_12939_12965 = state_12918__$1;(statearr_12939_12965[(1)] = (12));
} else
{var statearr_12940_12966 = state_12918__$1;(statearr_12940_12966[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12919 === (8)))
{var inst_12895 = cljs.core.async.timeout.call(null,delay);var state_12918__$1 = state_12918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12918__$1,(11),inst_12895);
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
});})(c__5813__auto___12948,map__12889,map__12889__$1,delay,log))
;return ((function (switch__5798__auto__,c__5813__auto___12948,map__12889,map__12889__$1,delay,log){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_12944 = [null,null,null,null,null,null,null,null,null,null];(statearr_12944[(0)] = state_machine__5799__auto__);
(statearr_12944[(1)] = (1));
return statearr_12944;
});
var state_machine__5799__auto____1 = (function (state_12918){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_12918);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e12945){if((e12945 instanceof Object))
{var ex__5802__auto__ = e12945;var statearr_12946_12967 = state_12918;(statearr_12946_12967[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12945;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12968 = state_12918;
state_12918 = G__12968;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_12918){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_12918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___12948,map__12889,map__12889__$1,delay,log))
})();var state__5815__auto__ = (function (){var statearr_12947 = f__5814__auto__.call(null);(statearr_12947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___12948);
return statearr_12947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___12948,map__12889,map__12889__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12829 = null;if (arguments.length > 1) {
  p__12829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12829);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12969){
var ch = cljs.core.first(arglist__12969);
var p__12829 = cljs.core.rest(arglist__12969);
return dorun_async__delegate(ch,p__12829);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
