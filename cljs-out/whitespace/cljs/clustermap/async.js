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
map_async.cljs$lang$applyTo = (function (arglist__16134){
var f = cljs.core.first(arglist__16134);
var colls = cljs.core.rest(arglist__16134);
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
var dorun_async__delegate = function (ch,p__16135){var map__16195 = p__16135;var map__16195__$1 = ((cljs.core.seq_QMARK_.call(null,map__16195))?cljs.core.apply.call(null,cljs.core.hash_map,map__16195):map__16195);var delay = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___16254 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16254,map__16195,map__16195__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16254,map__16195,map__16195__$1,delay,log){
return (function (state_16224){var state_val_16225 = (state_16224[(1)]);if((state_val_16225 === (7)))
{var inst_16215 = (state_16224[(2)]);var state_16224__$1 = state_16224;if(cljs.core.truth_(inst_16215))
{var statearr_16226_16255 = state_16224__$1;(statearr_16226_16255[(1)] = (15));
} else
{var statearr_16227_16256 = state_16224__$1;(statearr_16227_16256[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (1)))
{var state_16224__$1 = state_16224;var statearr_16228_16257 = state_16224__$1;(statearr_16228_16257[(2)] = null);
(statearr_16228_16257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (4)))
{var inst_16198 = (state_16224[(7)]);var inst_16198__$1 = (state_16224[(2)]);var state_16224__$1 = (function (){var statearr_16229 = state_16224;(statearr_16229[(7)] = inst_16198__$1);
return statearr_16229;
})();if(cljs.core.truth_(inst_16198__$1))
{var statearr_16230_16258 = state_16224__$1;(statearr_16230_16258[(1)] = (5));
} else
{var statearr_16231_16259 = state_16224__$1;(statearr_16231_16259[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (15)))
{var state_16224__$1 = state_16224;var statearr_16232_16260 = state_16224__$1;(statearr_16232_16260[(2)] = null);
(statearr_16232_16260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (13)))
{var state_16224__$1 = state_16224;var statearr_16233_16261 = state_16224__$1;(statearr_16233_16261[(2)] = null);
(statearr_16233_16261[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (6)))
{var state_16224__$1 = state_16224;var statearr_16234_16262 = state_16224__$1;(statearr_16234_16262[(2)] = null);
(statearr_16234_16262[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (17)))
{var inst_16220 = (state_16224[(2)]);var state_16224__$1 = state_16224;var statearr_16235_16263 = state_16224__$1;(statearr_16235_16263[(2)] = inst_16220);
(statearr_16235_16263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (3)))
{var inst_16222 = (state_16224[(2)]);var state_16224__$1 = state_16224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16224__$1,inst_16222);
} else
{if((state_val_16225 === (12)))
{var inst_16198 = (state_16224[(7)]);var inst_16208 = cljs.core.clj__GT_js.call(null,inst_16198);var inst_16209 = console.log(inst_16208);var state_16224__$1 = state_16224;var statearr_16236_16264 = state_16224__$1;(statearr_16236_16264[(2)] = inst_16209);
(statearr_16236_16264[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (2)))
{var state_16224__$1 = state_16224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16224__$1,(4),ch);
} else
{if((state_val_16225 === (11)))
{var inst_16203 = (state_16224[(2)]);var state_16224__$1 = state_16224;var statearr_16237_16265 = state_16224__$1;(statearr_16237_16265[(2)] = inst_16203);
(statearr_16237_16265[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (9)))
{var state_16224__$1 = state_16224;var statearr_16238_16266 = state_16224__$1;(statearr_16238_16266[(2)] = null);
(statearr_16238_16266[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (5)))
{var state_16224__$1 = state_16224;if(cljs.core.truth_(delay))
{var statearr_16239_16267 = state_16224__$1;(statearr_16239_16267[(1)] = (8));
} else
{var statearr_16240_16268 = state_16224__$1;(statearr_16240_16268[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (14)))
{var inst_16198 = (state_16224[(7)]);var inst_16212 = (state_16224[(2)]);var state_16224__$1 = (function (){var statearr_16241 = state_16224;(statearr_16241[(8)] = inst_16212);
return statearr_16241;
})();var statearr_16242_16269 = state_16224__$1;(statearr_16242_16269[(2)] = inst_16198);
(statearr_16242_16269[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (16)))
{var state_16224__$1 = state_16224;var statearr_16243_16270 = state_16224__$1;(statearr_16243_16270[(2)] = null);
(statearr_16243_16270[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (10)))
{var inst_16206 = (state_16224[(2)]);var state_16224__$1 = (function (){var statearr_16244 = state_16224;(statearr_16244[(9)] = inst_16206);
return statearr_16244;
})();if(cljs.core.truth_(log))
{var statearr_16245_16271 = state_16224__$1;(statearr_16245_16271[(1)] = (12));
} else
{var statearr_16246_16272 = state_16224__$1;(statearr_16246_16272[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16225 === (8)))
{var inst_16201 = cljs.core.async.timeout.call(null,delay);var state_16224__$1 = state_16224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16224__$1,(11),inst_16201);
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
});})(c__5708__auto___16254,map__16195,map__16195__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___16254,map__16195,map__16195__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16250 = [null,null,null,null,null,null,null,null,null,null];(statearr_16250[(0)] = state_machine__5694__auto__);
(statearr_16250[(1)] = (1));
return statearr_16250;
});
var state_machine__5694__auto____1 = (function (state_16224){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16251){if((e16251 instanceof Object))
{var ex__5697__auto__ = e16251;var statearr_16252_16273 = state_16224;(statearr_16252_16273[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16251;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16274 = state_16224;
state_16224 = G__16274;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16224){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16254,map__16195,map__16195__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_16253 = f__5709__auto__.call(null);(statearr_16253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16254);
return statearr_16253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16254,map__16195,map__16195__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__16135 = null;if (arguments.length > 1) {
  p__16135 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__16135);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__16275){
var ch = cljs.core.first(arglist__16275);
var p__16135 = cljs.core.rest(arglist__16275);
return dorun_async__delegate(ch,p__16135);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
