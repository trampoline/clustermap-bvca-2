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
map_async.cljs$lang$applyTo = (function (arglist__31068){
var f = cljs.core.first(arglist__31068);
var colls = cljs.core.rest(arglist__31068);
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
var dorun_async__delegate = function (ch,p__31069){var map__31129 = p__31069;var map__31129__$1 = ((cljs.core.seq_QMARK_.call(null,map__31129))?cljs.core.apply.call(null,cljs.core.hash_map,map__31129):map__31129);var delay = cljs.core.get.call(null,map__31129__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__31129__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___31188 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31188,map__31129,map__31129__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31188,map__31129,map__31129__$1,delay,log){
return (function (state_31158){var state_val_31159 = (state_31158[(1)]);if((state_val_31159 === (7)))
{var inst_31149 = (state_31158[(2)]);var state_31158__$1 = state_31158;if(cljs.core.truth_(inst_31149))
{var statearr_31160_31189 = state_31158__$1;(statearr_31160_31189[(1)] = (15));
} else
{var statearr_31161_31190 = state_31158__$1;(statearr_31161_31190[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (1)))
{var state_31158__$1 = state_31158;var statearr_31162_31191 = state_31158__$1;(statearr_31162_31191[(2)] = null);
(statearr_31162_31191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (4)))
{var inst_31132 = (state_31158[(7)]);var inst_31132__$1 = (state_31158[(2)]);var state_31158__$1 = (function (){var statearr_31163 = state_31158;(statearr_31163[(7)] = inst_31132__$1);
return statearr_31163;
})();if(cljs.core.truth_(inst_31132__$1))
{var statearr_31164_31192 = state_31158__$1;(statearr_31164_31192[(1)] = (5));
} else
{var statearr_31165_31193 = state_31158__$1;(statearr_31165_31193[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (15)))
{var state_31158__$1 = state_31158;var statearr_31166_31194 = state_31158__$1;(statearr_31166_31194[(2)] = null);
(statearr_31166_31194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (13)))
{var state_31158__$1 = state_31158;var statearr_31167_31195 = state_31158__$1;(statearr_31167_31195[(2)] = null);
(statearr_31167_31195[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (6)))
{var state_31158__$1 = state_31158;var statearr_31168_31196 = state_31158__$1;(statearr_31168_31196[(2)] = null);
(statearr_31168_31196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (17)))
{var inst_31154 = (state_31158[(2)]);var state_31158__$1 = state_31158;var statearr_31169_31197 = state_31158__$1;(statearr_31169_31197[(2)] = inst_31154);
(statearr_31169_31197[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (3)))
{var inst_31156 = (state_31158[(2)]);var state_31158__$1 = state_31158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31158__$1,inst_31156);
} else
{if((state_val_31159 === (12)))
{var inst_31132 = (state_31158[(7)]);var inst_31142 = cljs.core.clj__GT_js.call(null,inst_31132);var inst_31143 = console.log(inst_31142);var state_31158__$1 = state_31158;var statearr_31170_31198 = state_31158__$1;(statearr_31170_31198[(2)] = inst_31143);
(statearr_31170_31198[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (2)))
{var state_31158__$1 = state_31158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31158__$1,(4),ch);
} else
{if((state_val_31159 === (11)))
{var inst_31137 = (state_31158[(2)]);var state_31158__$1 = state_31158;var statearr_31171_31199 = state_31158__$1;(statearr_31171_31199[(2)] = inst_31137);
(statearr_31171_31199[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (9)))
{var state_31158__$1 = state_31158;var statearr_31172_31200 = state_31158__$1;(statearr_31172_31200[(2)] = null);
(statearr_31172_31200[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (5)))
{var state_31158__$1 = state_31158;if(cljs.core.truth_(delay))
{var statearr_31173_31201 = state_31158__$1;(statearr_31173_31201[(1)] = (8));
} else
{var statearr_31174_31202 = state_31158__$1;(statearr_31174_31202[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (14)))
{var inst_31132 = (state_31158[(7)]);var inst_31146 = (state_31158[(2)]);var state_31158__$1 = (function (){var statearr_31175 = state_31158;(statearr_31175[(8)] = inst_31146);
return statearr_31175;
})();var statearr_31176_31203 = state_31158__$1;(statearr_31176_31203[(2)] = inst_31132);
(statearr_31176_31203[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (16)))
{var state_31158__$1 = state_31158;var statearr_31177_31204 = state_31158__$1;(statearr_31177_31204[(2)] = null);
(statearr_31177_31204[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (10)))
{var inst_31140 = (state_31158[(2)]);var state_31158__$1 = (function (){var statearr_31178 = state_31158;(statearr_31178[(9)] = inst_31140);
return statearr_31178;
})();if(cljs.core.truth_(log))
{var statearr_31179_31205 = state_31158__$1;(statearr_31179_31205[(1)] = (12));
} else
{var statearr_31180_31206 = state_31158__$1;(statearr_31180_31206[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31159 === (8)))
{var inst_31135 = cljs.core.async.timeout.call(null,delay);var state_31158__$1 = state_31158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31158__$1,(11),inst_31135);
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
});})(c__5708__auto___31188,map__31129,map__31129__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___31188,map__31129,map__31129__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31184 = [null,null,null,null,null,null,null,null,null,null];(statearr_31184[(0)] = state_machine__5694__auto__);
(statearr_31184[(1)] = (1));
return statearr_31184;
});
var state_machine__5694__auto____1 = (function (state_31158){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31158);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31185){if((e31185 instanceof Object))
{var ex__5697__auto__ = e31185;var statearr_31186_31207 = state_31158;(statearr_31186_31207[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31185;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31208 = state_31158;
state_31158 = G__31208;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31158){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31188,map__31129,map__31129__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_31187 = f__5709__auto__.call(null);(statearr_31187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31188);
return statearr_31187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31188,map__31129,map__31129__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__31069 = null;if (arguments.length > 1) {
  p__31069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31069);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31209){
var ch = cljs.core.first(arglist__31209);
var p__31069 = cljs.core.rest(arglist__31209);
return dorun_async__delegate(ch,p__31069);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
