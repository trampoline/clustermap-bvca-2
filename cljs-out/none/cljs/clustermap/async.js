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
map_async.cljs$lang$applyTo = (function (arglist__50179){
var f = cljs.core.first(arglist__50179);
var colls = cljs.core.rest(arglist__50179);
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
var dorun_async__delegate = function (ch,p__50180){var map__50240 = p__50180;var map__50240__$1 = ((cljs.core.seq_QMARK_.call(null,map__50240))?cljs.core.apply.call(null,cljs.core.hash_map,map__50240):map__50240);var delay = cljs.core.get.call(null,map__50240__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__50240__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___50299 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___50299,map__50240,map__50240__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50299,map__50240,map__50240__$1,delay,log){
return (function (state_50269){var state_val_50270 = (state_50269[(1)]);if((state_val_50270 === (7)))
{var inst_50260 = (state_50269[(2)]);var state_50269__$1 = state_50269;if(cljs.core.truth_(inst_50260))
{var statearr_50271_50300 = state_50269__$1;(statearr_50271_50300[(1)] = (15));
} else
{var statearr_50272_50301 = state_50269__$1;(statearr_50272_50301[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (1)))
{var state_50269__$1 = state_50269;var statearr_50273_50302 = state_50269__$1;(statearr_50273_50302[(2)] = null);
(statearr_50273_50302[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (4)))
{var inst_50243 = (state_50269[(7)]);var inst_50243__$1 = (state_50269[(2)]);var state_50269__$1 = (function (){var statearr_50274 = state_50269;(statearr_50274[(7)] = inst_50243__$1);
return statearr_50274;
})();if(cljs.core.truth_(inst_50243__$1))
{var statearr_50275_50303 = state_50269__$1;(statearr_50275_50303[(1)] = (5));
} else
{var statearr_50276_50304 = state_50269__$1;(statearr_50276_50304[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (15)))
{var state_50269__$1 = state_50269;var statearr_50277_50305 = state_50269__$1;(statearr_50277_50305[(2)] = null);
(statearr_50277_50305[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (13)))
{var state_50269__$1 = state_50269;var statearr_50278_50306 = state_50269__$1;(statearr_50278_50306[(2)] = null);
(statearr_50278_50306[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (6)))
{var state_50269__$1 = state_50269;var statearr_50279_50307 = state_50269__$1;(statearr_50279_50307[(2)] = null);
(statearr_50279_50307[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (17)))
{var inst_50265 = (state_50269[(2)]);var state_50269__$1 = state_50269;var statearr_50280_50308 = state_50269__$1;(statearr_50280_50308[(2)] = inst_50265);
(statearr_50280_50308[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (3)))
{var inst_50267 = (state_50269[(2)]);var state_50269__$1 = state_50269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50269__$1,inst_50267);
} else
{if((state_val_50270 === (12)))
{var inst_50243 = (state_50269[(7)]);var inst_50253 = cljs.core.clj__GT_js.call(null,inst_50243);var inst_50254 = console.log(inst_50253);var state_50269__$1 = state_50269;var statearr_50281_50309 = state_50269__$1;(statearr_50281_50309[(2)] = inst_50254);
(statearr_50281_50309[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (2)))
{var state_50269__$1 = state_50269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50269__$1,(4),ch);
} else
{if((state_val_50270 === (11)))
{var inst_50248 = (state_50269[(2)]);var state_50269__$1 = state_50269;var statearr_50282_50310 = state_50269__$1;(statearr_50282_50310[(2)] = inst_50248);
(statearr_50282_50310[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (9)))
{var state_50269__$1 = state_50269;var statearr_50283_50311 = state_50269__$1;(statearr_50283_50311[(2)] = null);
(statearr_50283_50311[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (5)))
{var state_50269__$1 = state_50269;if(cljs.core.truth_(delay))
{var statearr_50284_50312 = state_50269__$1;(statearr_50284_50312[(1)] = (8));
} else
{var statearr_50285_50313 = state_50269__$1;(statearr_50285_50313[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (14)))
{var inst_50243 = (state_50269[(7)]);var inst_50257 = (state_50269[(2)]);var state_50269__$1 = (function (){var statearr_50286 = state_50269;(statearr_50286[(8)] = inst_50257);
return statearr_50286;
})();var statearr_50287_50314 = state_50269__$1;(statearr_50287_50314[(2)] = inst_50243);
(statearr_50287_50314[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (16)))
{var state_50269__$1 = state_50269;var statearr_50288_50315 = state_50269__$1;(statearr_50288_50315[(2)] = null);
(statearr_50288_50315[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (10)))
{var inst_50251 = (state_50269[(2)]);var state_50269__$1 = (function (){var statearr_50289 = state_50269;(statearr_50289[(9)] = inst_50251);
return statearr_50289;
})();if(cljs.core.truth_(log))
{var statearr_50290_50316 = state_50269__$1;(statearr_50290_50316[(1)] = (12));
} else
{var statearr_50291_50317 = state_50269__$1;(statearr_50291_50317[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50270 === (8)))
{var inst_50246 = cljs.core.async.timeout.call(null,delay);var state_50269__$1 = state_50269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50269__$1,(11),inst_50246);
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
});})(c__5708__auto___50299,map__50240,map__50240__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___50299,map__50240,map__50240__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50295 = [null,null,null,null,null,null,null,null,null,null];(statearr_50295[(0)] = state_machine__5694__auto__);
(statearr_50295[(1)] = (1));
return statearr_50295;
});
var state_machine__5694__auto____1 = (function (state_50269){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_50269);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50296){if((e50296 instanceof Object))
{var ex__5697__auto__ = e50296;var statearr_50297_50318 = state_50269;(statearr_50297_50318[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50269);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50296;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50319 = state_50269;
state_50269 = G__50319;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50269){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50299,map__50240,map__50240__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_50298 = f__5709__auto__.call(null);(statearr_50298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50299);
return statearr_50298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___50299,map__50240,map__50240__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__50180 = null;if (arguments.length > 1) {
  p__50180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__50180);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__50320){
var ch = cljs.core.first(arglist__50320);
var p__50180 = cljs.core.rest(arglist__50320);
return dorun_async__delegate(ch,p__50180);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map