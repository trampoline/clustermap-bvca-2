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
map_async.cljs$lang$applyTo = (function (arglist__11174){
var f = cljs.core.first(arglist__11174);
var colls = cljs.core.rest(arglist__11174);
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
var dorun_async__delegate = function (ch,p__11175){var map__11235 = p__11175;var map__11235__$1 = ((cljs.core.seq_QMARK_.call(null,map__11235))?cljs.core.apply.call(null,cljs.core.hash_map,map__11235):map__11235);var delay = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___11294 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___11294,map__11235,map__11235__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___11294,map__11235,map__11235__$1,delay,log){
return (function (state_11264){var state_val_11265 = (state_11264[(1)]);if((state_val_11265 === (7)))
{var inst_11255 = (state_11264[(2)]);var state_11264__$1 = state_11264;if(cljs.core.truth_(inst_11255))
{var statearr_11266_11295 = state_11264__$1;(statearr_11266_11295[(1)] = (15));
} else
{var statearr_11267_11296 = state_11264__$1;(statearr_11267_11296[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (1)))
{var state_11264__$1 = state_11264;var statearr_11268_11297 = state_11264__$1;(statearr_11268_11297[(2)] = null);
(statearr_11268_11297[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (4)))
{var inst_11238 = (state_11264[(7)]);var inst_11238__$1 = (state_11264[(2)]);var state_11264__$1 = (function (){var statearr_11269 = state_11264;(statearr_11269[(7)] = inst_11238__$1);
return statearr_11269;
})();if(cljs.core.truth_(inst_11238__$1))
{var statearr_11270_11298 = state_11264__$1;(statearr_11270_11298[(1)] = (5));
} else
{var statearr_11271_11299 = state_11264__$1;(statearr_11271_11299[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (15)))
{var state_11264__$1 = state_11264;var statearr_11272_11300 = state_11264__$1;(statearr_11272_11300[(2)] = null);
(statearr_11272_11300[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (13)))
{var state_11264__$1 = state_11264;var statearr_11273_11301 = state_11264__$1;(statearr_11273_11301[(2)] = null);
(statearr_11273_11301[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (6)))
{var state_11264__$1 = state_11264;var statearr_11274_11302 = state_11264__$1;(statearr_11274_11302[(2)] = null);
(statearr_11274_11302[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (17)))
{var inst_11260 = (state_11264[(2)]);var state_11264__$1 = state_11264;var statearr_11275_11303 = state_11264__$1;(statearr_11275_11303[(2)] = inst_11260);
(statearr_11275_11303[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (3)))
{var inst_11262 = (state_11264[(2)]);var state_11264__$1 = state_11264;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11264__$1,inst_11262);
} else
{if((state_val_11265 === (12)))
{var inst_11238 = (state_11264[(7)]);var inst_11248 = cljs.core.clj__GT_js.call(null,inst_11238);var inst_11249 = console.log(inst_11248);var state_11264__$1 = state_11264;var statearr_11276_11304 = state_11264__$1;(statearr_11276_11304[(2)] = inst_11249);
(statearr_11276_11304[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (2)))
{var state_11264__$1 = state_11264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11264__$1,(4),ch);
} else
{if((state_val_11265 === (11)))
{var inst_11243 = (state_11264[(2)]);var state_11264__$1 = state_11264;var statearr_11277_11305 = state_11264__$1;(statearr_11277_11305[(2)] = inst_11243);
(statearr_11277_11305[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (9)))
{var state_11264__$1 = state_11264;var statearr_11278_11306 = state_11264__$1;(statearr_11278_11306[(2)] = null);
(statearr_11278_11306[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (5)))
{var state_11264__$1 = state_11264;if(cljs.core.truth_(delay))
{var statearr_11279_11307 = state_11264__$1;(statearr_11279_11307[(1)] = (8));
} else
{var statearr_11280_11308 = state_11264__$1;(statearr_11280_11308[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (14)))
{var inst_11238 = (state_11264[(7)]);var inst_11252 = (state_11264[(2)]);var state_11264__$1 = (function (){var statearr_11281 = state_11264;(statearr_11281[(8)] = inst_11252);
return statearr_11281;
})();var statearr_11282_11309 = state_11264__$1;(statearr_11282_11309[(2)] = inst_11238);
(statearr_11282_11309[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (16)))
{var state_11264__$1 = state_11264;var statearr_11283_11310 = state_11264__$1;(statearr_11283_11310[(2)] = null);
(statearr_11283_11310[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (10)))
{var inst_11246 = (state_11264[(2)]);var state_11264__$1 = (function (){var statearr_11284 = state_11264;(statearr_11284[(9)] = inst_11246);
return statearr_11284;
})();if(cljs.core.truth_(log))
{var statearr_11285_11311 = state_11264__$1;(statearr_11285_11311[(1)] = (12));
} else
{var statearr_11286_11312 = state_11264__$1;(statearr_11286_11312[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11265 === (8)))
{var inst_11241 = cljs.core.async.timeout.call(null,delay);var state_11264__$1 = state_11264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11264__$1,(11),inst_11241);
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
});})(c__5708__auto___11294,map__11235,map__11235__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___11294,map__11235,map__11235__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11290 = [null,null,null,null,null,null,null,null,null,null];(statearr_11290[(0)] = state_machine__5694__auto__);
(statearr_11290[(1)] = (1));
return statearr_11290;
});
var state_machine__5694__auto____1 = (function (state_11264){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_11264);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11291){if((e11291 instanceof Object))
{var ex__5697__auto__ = e11291;var statearr_11292_11313 = state_11264;(statearr_11292_11313[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11264);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11291;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11314 = state_11264;
state_11264 = G__11314;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11264){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___11294,map__11235,map__11235__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_11293 = f__5709__auto__.call(null);(statearr_11293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___11294);
return statearr_11293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___11294,map__11235,map__11235__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__11175 = null;if (arguments.length > 1) {
  p__11175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11175);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11315){
var ch = cljs.core.first(arglist__11315);
var p__11175 = cljs.core.rest(arglist__11315);
return dorun_async__delegate(ch,p__11175);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
