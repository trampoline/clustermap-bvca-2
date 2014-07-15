// Compiled by ClojureScript 0.0-2261
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
map_async.cljs$lang$applyTo = (function (arglist__46304){
var f = cljs.core.first(arglist__46304);
var colls = cljs.core.rest(arglist__46304);
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
var dorun_async__delegate = function (ch,p__46305){var map__46365 = p__46305;var map__46365__$1 = ((cljs.core.seq_QMARK_.call(null,map__46365))?cljs.core.apply.call(null,cljs.core.hash_map,map__46365):map__46365);var delay = cljs.core.get.call(null,map__46365__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__46365__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___46424 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___46424,map__46365,map__46365__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___46424,map__46365,map__46365__$1,delay,log){
return (function (state_46394){var state_val_46395 = (state_46394[(1)]);if((state_val_46395 === (7)))
{var inst_46385 = (state_46394[(2)]);var state_46394__$1 = state_46394;if(cljs.core.truth_(inst_46385))
{var statearr_46396_46425 = state_46394__$1;(statearr_46396_46425[(1)] = (15));
} else
{var statearr_46397_46426 = state_46394__$1;(statearr_46397_46426[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (1)))
{var state_46394__$1 = state_46394;var statearr_46398_46427 = state_46394__$1;(statearr_46398_46427[(2)] = null);
(statearr_46398_46427[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (4)))
{var inst_46368 = (state_46394[(7)]);var inst_46368__$1 = (state_46394[(2)]);var state_46394__$1 = (function (){var statearr_46399 = state_46394;(statearr_46399[(7)] = inst_46368__$1);
return statearr_46399;
})();if(cljs.core.truth_(inst_46368__$1))
{var statearr_46400_46428 = state_46394__$1;(statearr_46400_46428[(1)] = (5));
} else
{var statearr_46401_46429 = state_46394__$1;(statearr_46401_46429[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (15)))
{var state_46394__$1 = state_46394;var statearr_46402_46430 = state_46394__$1;(statearr_46402_46430[(2)] = null);
(statearr_46402_46430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (13)))
{var state_46394__$1 = state_46394;var statearr_46403_46431 = state_46394__$1;(statearr_46403_46431[(2)] = null);
(statearr_46403_46431[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (6)))
{var state_46394__$1 = state_46394;var statearr_46404_46432 = state_46394__$1;(statearr_46404_46432[(2)] = null);
(statearr_46404_46432[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (17)))
{var inst_46390 = (state_46394[(2)]);var state_46394__$1 = state_46394;var statearr_46405_46433 = state_46394__$1;(statearr_46405_46433[(2)] = inst_46390);
(statearr_46405_46433[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (3)))
{var inst_46392 = (state_46394[(2)]);var state_46394__$1 = state_46394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46394__$1,inst_46392);
} else
{if((state_val_46395 === (12)))
{var inst_46368 = (state_46394[(7)]);var inst_46378 = cljs.core.clj__GT_js.call(null,inst_46368);var inst_46379 = console.log(inst_46378);var state_46394__$1 = state_46394;var statearr_46406_46434 = state_46394__$1;(statearr_46406_46434[(2)] = inst_46379);
(statearr_46406_46434[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (2)))
{var state_46394__$1 = state_46394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46394__$1,(4),ch);
} else
{if((state_val_46395 === (11)))
{var inst_46373 = (state_46394[(2)]);var state_46394__$1 = state_46394;var statearr_46407_46435 = state_46394__$1;(statearr_46407_46435[(2)] = inst_46373);
(statearr_46407_46435[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (9)))
{var state_46394__$1 = state_46394;var statearr_46408_46436 = state_46394__$1;(statearr_46408_46436[(2)] = null);
(statearr_46408_46436[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (5)))
{var state_46394__$1 = state_46394;if(cljs.core.truth_(delay))
{var statearr_46409_46437 = state_46394__$1;(statearr_46409_46437[(1)] = (8));
} else
{var statearr_46410_46438 = state_46394__$1;(statearr_46410_46438[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (14)))
{var inst_46368 = (state_46394[(7)]);var inst_46382 = (state_46394[(2)]);var state_46394__$1 = (function (){var statearr_46411 = state_46394;(statearr_46411[(8)] = inst_46382);
return statearr_46411;
})();var statearr_46412_46439 = state_46394__$1;(statearr_46412_46439[(2)] = inst_46368);
(statearr_46412_46439[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (16)))
{var state_46394__$1 = state_46394;var statearr_46413_46440 = state_46394__$1;(statearr_46413_46440[(2)] = null);
(statearr_46413_46440[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (10)))
{var inst_46376 = (state_46394[(2)]);var state_46394__$1 = (function (){var statearr_46414 = state_46394;(statearr_46414[(9)] = inst_46376);
return statearr_46414;
})();if(cljs.core.truth_(log))
{var statearr_46415_46441 = state_46394__$1;(statearr_46415_46441[(1)] = (12));
} else
{var statearr_46416_46442 = state_46394__$1;(statearr_46416_46442[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46395 === (8)))
{var inst_46371 = cljs.core.async.timeout.call(null,delay);var state_46394__$1 = state_46394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46394__$1,(11),inst_46371);
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
});})(c__5693__auto___46424,map__46365,map__46365__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___46424,map__46365,map__46365__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46420 = [null,null,null,null,null,null,null,null,null,null];(statearr_46420[(0)] = state_machine__5679__auto__);
(statearr_46420[(1)] = (1));
return statearr_46420;
});
var state_machine__5679__auto____1 = (function (state_46394){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46394);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46421){if((e46421 instanceof Object))
{var ex__5682__auto__ = e46421;var statearr_46422_46443 = state_46394;(statearr_46422_46443[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46394);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46444 = state_46394;
state_46394 = G__46444;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46394){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___46424,map__46365,map__46365__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_46423 = f__5694__auto__.call(null);(statearr_46423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___46424);
return statearr_46423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___46424,map__46365,map__46365__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__46305 = null;if (arguments.length > 1) {
  p__46305 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__46305);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__46445){
var ch = cljs.core.first(arglist__46445);
var p__46305 = cljs.core.rest(arglist__46445);
return dorun_async__delegate(ch,p__46305);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map