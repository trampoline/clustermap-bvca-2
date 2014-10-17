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
map_async.cljs$lang$applyTo = (function (arglist__16105){
var f = cljs.core.first(arglist__16105);
var colls = cljs.core.rest(arglist__16105);
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
var dorun_async__delegate = function (ch,p__16106){var map__16166 = p__16106;var map__16166__$1 = ((cljs.core.seq_QMARK_.call(null,map__16166))?cljs.core.apply.call(null,cljs.core.hash_map,map__16166):map__16166);var delay = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___16225 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16225,map__16166,map__16166__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16225,map__16166,map__16166__$1,delay,log){
return (function (state_16195){var state_val_16196 = (state_16195[(1)]);if((state_val_16196 === (7)))
{var inst_16186 = (state_16195[(2)]);var state_16195__$1 = state_16195;if(cljs.core.truth_(inst_16186))
{var statearr_16197_16226 = state_16195__$1;(statearr_16197_16226[(1)] = (15));
} else
{var statearr_16198_16227 = state_16195__$1;(statearr_16198_16227[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (1)))
{var state_16195__$1 = state_16195;var statearr_16199_16228 = state_16195__$1;(statearr_16199_16228[(2)] = null);
(statearr_16199_16228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (4)))
{var inst_16169 = (state_16195[(7)]);var inst_16169__$1 = (state_16195[(2)]);var state_16195__$1 = (function (){var statearr_16200 = state_16195;(statearr_16200[(7)] = inst_16169__$1);
return statearr_16200;
})();if(cljs.core.truth_(inst_16169__$1))
{var statearr_16201_16229 = state_16195__$1;(statearr_16201_16229[(1)] = (5));
} else
{var statearr_16202_16230 = state_16195__$1;(statearr_16202_16230[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (15)))
{var state_16195__$1 = state_16195;var statearr_16203_16231 = state_16195__$1;(statearr_16203_16231[(2)] = null);
(statearr_16203_16231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (13)))
{var state_16195__$1 = state_16195;var statearr_16204_16232 = state_16195__$1;(statearr_16204_16232[(2)] = null);
(statearr_16204_16232[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (6)))
{var state_16195__$1 = state_16195;var statearr_16205_16233 = state_16195__$1;(statearr_16205_16233[(2)] = null);
(statearr_16205_16233[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (17)))
{var inst_16191 = (state_16195[(2)]);var state_16195__$1 = state_16195;var statearr_16206_16234 = state_16195__$1;(statearr_16206_16234[(2)] = inst_16191);
(statearr_16206_16234[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (3)))
{var inst_16193 = (state_16195[(2)]);var state_16195__$1 = state_16195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16195__$1,inst_16193);
} else
{if((state_val_16196 === (12)))
{var inst_16169 = (state_16195[(7)]);var inst_16179 = cljs.core.clj__GT_js.call(null,inst_16169);var inst_16180 = console.log(inst_16179);var state_16195__$1 = state_16195;var statearr_16207_16235 = state_16195__$1;(statearr_16207_16235[(2)] = inst_16180);
(statearr_16207_16235[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (2)))
{var state_16195__$1 = state_16195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16195__$1,(4),ch);
} else
{if((state_val_16196 === (11)))
{var inst_16174 = (state_16195[(2)]);var state_16195__$1 = state_16195;var statearr_16208_16236 = state_16195__$1;(statearr_16208_16236[(2)] = inst_16174);
(statearr_16208_16236[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (9)))
{var state_16195__$1 = state_16195;var statearr_16209_16237 = state_16195__$1;(statearr_16209_16237[(2)] = null);
(statearr_16209_16237[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (5)))
{var state_16195__$1 = state_16195;if(cljs.core.truth_(delay))
{var statearr_16210_16238 = state_16195__$1;(statearr_16210_16238[(1)] = (8));
} else
{var statearr_16211_16239 = state_16195__$1;(statearr_16211_16239[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (14)))
{var inst_16169 = (state_16195[(7)]);var inst_16183 = (state_16195[(2)]);var state_16195__$1 = (function (){var statearr_16212 = state_16195;(statearr_16212[(8)] = inst_16183);
return statearr_16212;
})();var statearr_16213_16240 = state_16195__$1;(statearr_16213_16240[(2)] = inst_16169);
(statearr_16213_16240[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (16)))
{var state_16195__$1 = state_16195;var statearr_16214_16241 = state_16195__$1;(statearr_16214_16241[(2)] = null);
(statearr_16214_16241[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (10)))
{var inst_16177 = (state_16195[(2)]);var state_16195__$1 = (function (){var statearr_16215 = state_16195;(statearr_16215[(9)] = inst_16177);
return statearr_16215;
})();if(cljs.core.truth_(log))
{var statearr_16216_16242 = state_16195__$1;(statearr_16216_16242[(1)] = (12));
} else
{var statearr_16217_16243 = state_16195__$1;(statearr_16217_16243[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (8)))
{var inst_16172 = cljs.core.async.timeout.call(null,delay);var state_16195__$1 = state_16195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16195__$1,(11),inst_16172);
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
});})(c__5708__auto___16225,map__16166,map__16166__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___16225,map__16166,map__16166__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16221 = [null,null,null,null,null,null,null,null,null,null];(statearr_16221[(0)] = state_machine__5694__auto__);
(statearr_16221[(1)] = (1));
return statearr_16221;
});
var state_machine__5694__auto____1 = (function (state_16195){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16222){if((e16222 instanceof Object))
{var ex__5697__auto__ = e16222;var statearr_16223_16244 = state_16195;(statearr_16223_16244[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16245 = state_16195;
state_16195 = G__16245;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16195){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16225,map__16166,map__16166__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_16224 = f__5709__auto__.call(null);(statearr_16224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16225);
return statearr_16224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16225,map__16166,map__16166__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__16106 = null;if (arguments.length > 1) {
  p__16106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__16106);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__16246){
var ch = cljs.core.first(arglist__16246);
var p__16106 = cljs.core.rest(arglist__16246);
return dorun_async__delegate(ch,p__16106);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
