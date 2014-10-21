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
map_async.cljs$lang$applyTo = (function (arglist__31059){
var f = cljs.core.first(arglist__31059);
var colls = cljs.core.rest(arglist__31059);
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
var dorun_async__delegate = function (ch,p__31060){var map__31120 = p__31060;var map__31120__$1 = ((cljs.core.seq_QMARK_.call(null,map__31120))?cljs.core.apply.call(null,cljs.core.hash_map,map__31120):map__31120);var delay = cljs.core.get.call(null,map__31120__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__31120__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5819__auto___31179 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___31179,map__31120,map__31120__$1,delay,log){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___31179,map__31120,map__31120__$1,delay,log){
return (function (state_31149){var state_val_31150 = (state_31149[(1)]);if((state_val_31150 === (7)))
{var inst_31140 = (state_31149[(2)]);var state_31149__$1 = state_31149;if(cljs.core.truth_(inst_31140))
{var statearr_31151_31180 = state_31149__$1;(statearr_31151_31180[(1)] = (15));
} else
{var statearr_31152_31181 = state_31149__$1;(statearr_31152_31181[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (1)))
{var state_31149__$1 = state_31149;var statearr_31153_31182 = state_31149__$1;(statearr_31153_31182[(2)] = null);
(statearr_31153_31182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (4)))
{var inst_31123 = (state_31149[(7)]);var inst_31123__$1 = (state_31149[(2)]);var state_31149__$1 = (function (){var statearr_31154 = state_31149;(statearr_31154[(7)] = inst_31123__$1);
return statearr_31154;
})();if(cljs.core.truth_(inst_31123__$1))
{var statearr_31155_31183 = state_31149__$1;(statearr_31155_31183[(1)] = (5));
} else
{var statearr_31156_31184 = state_31149__$1;(statearr_31156_31184[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (15)))
{var state_31149__$1 = state_31149;var statearr_31157_31185 = state_31149__$1;(statearr_31157_31185[(2)] = null);
(statearr_31157_31185[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (13)))
{var state_31149__$1 = state_31149;var statearr_31158_31186 = state_31149__$1;(statearr_31158_31186[(2)] = null);
(statearr_31158_31186[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (6)))
{var state_31149__$1 = state_31149;var statearr_31159_31187 = state_31149__$1;(statearr_31159_31187[(2)] = null);
(statearr_31159_31187[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (17)))
{var inst_31145 = (state_31149[(2)]);var state_31149__$1 = state_31149;var statearr_31160_31188 = state_31149__$1;(statearr_31160_31188[(2)] = inst_31145);
(statearr_31160_31188[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (3)))
{var inst_31147 = (state_31149[(2)]);var state_31149__$1 = state_31149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31149__$1,inst_31147);
} else
{if((state_val_31150 === (12)))
{var inst_31123 = (state_31149[(7)]);var inst_31133 = cljs.core.clj__GT_js.call(null,inst_31123);var inst_31134 = console.log(inst_31133);var state_31149__$1 = state_31149;var statearr_31161_31189 = state_31149__$1;(statearr_31161_31189[(2)] = inst_31134);
(statearr_31161_31189[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (2)))
{var state_31149__$1 = state_31149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31149__$1,(4),ch);
} else
{if((state_val_31150 === (11)))
{var inst_31128 = (state_31149[(2)]);var state_31149__$1 = state_31149;var statearr_31162_31190 = state_31149__$1;(statearr_31162_31190[(2)] = inst_31128);
(statearr_31162_31190[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (9)))
{var state_31149__$1 = state_31149;var statearr_31163_31191 = state_31149__$1;(statearr_31163_31191[(2)] = null);
(statearr_31163_31191[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (5)))
{var state_31149__$1 = state_31149;if(cljs.core.truth_(delay))
{var statearr_31164_31192 = state_31149__$1;(statearr_31164_31192[(1)] = (8));
} else
{var statearr_31165_31193 = state_31149__$1;(statearr_31165_31193[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (14)))
{var inst_31123 = (state_31149[(7)]);var inst_31137 = (state_31149[(2)]);var state_31149__$1 = (function (){var statearr_31166 = state_31149;(statearr_31166[(8)] = inst_31137);
return statearr_31166;
})();var statearr_31167_31194 = state_31149__$1;(statearr_31167_31194[(2)] = inst_31123);
(statearr_31167_31194[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (16)))
{var state_31149__$1 = state_31149;var statearr_31168_31195 = state_31149__$1;(statearr_31168_31195[(2)] = null);
(statearr_31168_31195[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (10)))
{var inst_31131 = (state_31149[(2)]);var state_31149__$1 = (function (){var statearr_31169 = state_31149;(statearr_31169[(9)] = inst_31131);
return statearr_31169;
})();if(cljs.core.truth_(log))
{var statearr_31170_31196 = state_31149__$1;(statearr_31170_31196[(1)] = (12));
} else
{var statearr_31171_31197 = state_31149__$1;(statearr_31171_31197[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31150 === (8)))
{var inst_31126 = cljs.core.async.timeout.call(null,delay);var state_31149__$1 = state_31149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31149__$1,(11),inst_31126);
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
});})(c__5819__auto___31179,map__31120,map__31120__$1,delay,log))
;return ((function (switch__5804__auto__,c__5819__auto___31179,map__31120,map__31120__$1,delay,log){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_31175 = [null,null,null,null,null,null,null,null,null,null];(statearr_31175[(0)] = state_machine__5805__auto__);
(statearr_31175[(1)] = (1));
return statearr_31175;
});
var state_machine__5805__auto____1 = (function (state_31149){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_31149);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e31176){if((e31176 instanceof Object))
{var ex__5808__auto__ = e31176;var statearr_31177_31198 = state_31149;(statearr_31177_31198[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31176;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31199 = state_31149;
state_31149 = G__31199;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_31149){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_31149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___31179,map__31120,map__31120__$1,delay,log))
})();var state__5821__auto__ = (function (){var statearr_31178 = f__5820__auto__.call(null);(statearr_31178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___31179);
return statearr_31178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___31179,map__31120,map__31120__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__31060 = null;if (arguments.length > 1) {
  p__31060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31060);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31200){
var ch = cljs.core.first(arglist__31200);
var p__31060 = cljs.core.rest(arglist__31200);
return dorun_async__delegate(ch,p__31060);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
