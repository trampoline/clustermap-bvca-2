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
map_async.cljs$lang$applyTo = (function (arglist__12800){
var f = cljs.core.first(arglist__12800);
var colls = cljs.core.rest(arglist__12800);
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
var dorun_async__delegate = function (ch,p__12801){var map__12861 = p__12801;var map__12861__$1 = ((cljs.core.seq_QMARK_.call(null,map__12861))?cljs.core.apply.call(null,cljs.core.hash_map,map__12861):map__12861);var delay = cljs.core.get.call(null,map__12861__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12861__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___12920 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12920,map__12861,map__12861__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12920,map__12861,map__12861__$1,delay,log){
return (function (state_12890){var state_val_12891 = (state_12890[(1)]);if((state_val_12891 === (7)))
{var inst_12881 = (state_12890[(2)]);var state_12890__$1 = state_12890;if(cljs.core.truth_(inst_12881))
{var statearr_12892_12921 = state_12890__$1;(statearr_12892_12921[(1)] = (15));
} else
{var statearr_12893_12922 = state_12890__$1;(statearr_12893_12922[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (1)))
{var state_12890__$1 = state_12890;var statearr_12894_12923 = state_12890__$1;(statearr_12894_12923[(2)] = null);
(statearr_12894_12923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (4)))
{var inst_12864 = (state_12890[(7)]);var inst_12864__$1 = (state_12890[(2)]);var state_12890__$1 = (function (){var statearr_12895 = state_12890;(statearr_12895[(7)] = inst_12864__$1);
return statearr_12895;
})();if(cljs.core.truth_(inst_12864__$1))
{var statearr_12896_12924 = state_12890__$1;(statearr_12896_12924[(1)] = (5));
} else
{var statearr_12897_12925 = state_12890__$1;(statearr_12897_12925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (15)))
{var state_12890__$1 = state_12890;var statearr_12898_12926 = state_12890__$1;(statearr_12898_12926[(2)] = null);
(statearr_12898_12926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (13)))
{var state_12890__$1 = state_12890;var statearr_12899_12927 = state_12890__$1;(statearr_12899_12927[(2)] = null);
(statearr_12899_12927[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (6)))
{var state_12890__$1 = state_12890;var statearr_12900_12928 = state_12890__$1;(statearr_12900_12928[(2)] = null);
(statearr_12900_12928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (17)))
{var inst_12886 = (state_12890[(2)]);var state_12890__$1 = state_12890;var statearr_12901_12929 = state_12890__$1;(statearr_12901_12929[(2)] = inst_12886);
(statearr_12901_12929[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (3)))
{var inst_12888 = (state_12890[(2)]);var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12890__$1,inst_12888);
} else
{if((state_val_12891 === (12)))
{var inst_12864 = (state_12890[(7)]);var inst_12874 = cljs.core.clj__GT_js.call(null,inst_12864);var inst_12875 = console.log(inst_12874);var state_12890__$1 = state_12890;var statearr_12902_12930 = state_12890__$1;(statearr_12902_12930[(2)] = inst_12875);
(statearr_12902_12930[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (2)))
{var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12890__$1,(4),ch);
} else
{if((state_val_12891 === (11)))
{var inst_12869 = (state_12890[(2)]);var state_12890__$1 = state_12890;var statearr_12903_12931 = state_12890__$1;(statearr_12903_12931[(2)] = inst_12869);
(statearr_12903_12931[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (9)))
{var state_12890__$1 = state_12890;var statearr_12904_12932 = state_12890__$1;(statearr_12904_12932[(2)] = null);
(statearr_12904_12932[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (5)))
{var state_12890__$1 = state_12890;if(cljs.core.truth_(delay))
{var statearr_12905_12933 = state_12890__$1;(statearr_12905_12933[(1)] = (8));
} else
{var statearr_12906_12934 = state_12890__$1;(statearr_12906_12934[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (14)))
{var inst_12864 = (state_12890[(7)]);var inst_12878 = (state_12890[(2)]);var state_12890__$1 = (function (){var statearr_12907 = state_12890;(statearr_12907[(8)] = inst_12878);
return statearr_12907;
})();var statearr_12908_12935 = state_12890__$1;(statearr_12908_12935[(2)] = inst_12864);
(statearr_12908_12935[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (16)))
{var state_12890__$1 = state_12890;var statearr_12909_12936 = state_12890__$1;(statearr_12909_12936[(2)] = null);
(statearr_12909_12936[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (10)))
{var inst_12872 = (state_12890[(2)]);var state_12890__$1 = (function (){var statearr_12910 = state_12890;(statearr_12910[(9)] = inst_12872);
return statearr_12910;
})();if(cljs.core.truth_(log))
{var statearr_12911_12937 = state_12890__$1;(statearr_12911_12937[(1)] = (12));
} else
{var statearr_12912_12938 = state_12890__$1;(statearr_12912_12938[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12891 === (8)))
{var inst_12867 = cljs.core.async.timeout.call(null,delay);var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12890__$1,(11),inst_12867);
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
});})(c__5708__auto___12920,map__12861,map__12861__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___12920,map__12861,map__12861__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12916 = [null,null,null,null,null,null,null,null,null,null];(statearr_12916[(0)] = state_machine__5694__auto__);
(statearr_12916[(1)] = (1));
return statearr_12916;
});
var state_machine__5694__auto____1 = (function (state_12890){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12890);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12917){if((e12917 instanceof Object))
{var ex__5697__auto__ = e12917;var statearr_12918_12939 = state_12890;(statearr_12918_12939[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12917;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12940 = state_12890;
state_12890 = G__12940;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12890){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12920,map__12861,map__12861__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_12919 = f__5709__auto__.call(null);(statearr_12919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12920);
return statearr_12919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12920,map__12861,map__12861__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12801 = null;if (arguments.length > 1) {
  p__12801 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12801);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12941){
var ch = cljs.core.first(arglist__12941);
var p__12801 = cljs.core.rest(arglist__12941);
return dorun_async__delegate(ch,p__12801);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
