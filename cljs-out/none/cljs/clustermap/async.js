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
map_async.cljs$lang$applyTo = (function (arglist__60117){
var f = cljs.core.first(arglist__60117);
var colls = cljs.core.rest(arglist__60117);
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
var dorun_async__delegate = function (ch,p__60118){var map__60178 = p__60118;var map__60178__$1 = ((cljs.core.seq_QMARK_.call(null,map__60178))?cljs.core.apply.call(null,cljs.core.hash_map,map__60178):map__60178);var delay = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___60237 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___60237,map__60178,map__60178__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___60237,map__60178,map__60178__$1,delay,log){
return (function (state_60207){var state_val_60208 = (state_60207[(1)]);if((state_val_60208 === (7)))
{var inst_60198 = (state_60207[(2)]);var state_60207__$1 = state_60207;if(cljs.core.truth_(inst_60198))
{var statearr_60209_60238 = state_60207__$1;(statearr_60209_60238[(1)] = (15));
} else
{var statearr_60210_60239 = state_60207__$1;(statearr_60210_60239[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (1)))
{var state_60207__$1 = state_60207;var statearr_60211_60240 = state_60207__$1;(statearr_60211_60240[(2)] = null);
(statearr_60211_60240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (4)))
{var inst_60181 = (state_60207[(7)]);var inst_60181__$1 = (state_60207[(2)]);var state_60207__$1 = (function (){var statearr_60212 = state_60207;(statearr_60212[(7)] = inst_60181__$1);
return statearr_60212;
})();if(cljs.core.truth_(inst_60181__$1))
{var statearr_60213_60241 = state_60207__$1;(statearr_60213_60241[(1)] = (5));
} else
{var statearr_60214_60242 = state_60207__$1;(statearr_60214_60242[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (15)))
{var state_60207__$1 = state_60207;var statearr_60215_60243 = state_60207__$1;(statearr_60215_60243[(2)] = null);
(statearr_60215_60243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (13)))
{var state_60207__$1 = state_60207;var statearr_60216_60244 = state_60207__$1;(statearr_60216_60244[(2)] = null);
(statearr_60216_60244[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (6)))
{var state_60207__$1 = state_60207;var statearr_60217_60245 = state_60207__$1;(statearr_60217_60245[(2)] = null);
(statearr_60217_60245[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (17)))
{var inst_60203 = (state_60207[(2)]);var state_60207__$1 = state_60207;var statearr_60218_60246 = state_60207__$1;(statearr_60218_60246[(2)] = inst_60203);
(statearr_60218_60246[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (3)))
{var inst_60205 = (state_60207[(2)]);var state_60207__$1 = state_60207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60207__$1,inst_60205);
} else
{if((state_val_60208 === (12)))
{var inst_60181 = (state_60207[(7)]);var inst_60191 = cljs.core.clj__GT_js.call(null,inst_60181);var inst_60192 = console.log(inst_60191);var state_60207__$1 = state_60207;var statearr_60219_60247 = state_60207__$1;(statearr_60219_60247[(2)] = inst_60192);
(statearr_60219_60247[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (2)))
{var state_60207__$1 = state_60207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60207__$1,(4),ch);
} else
{if((state_val_60208 === (11)))
{var inst_60186 = (state_60207[(2)]);var state_60207__$1 = state_60207;var statearr_60220_60248 = state_60207__$1;(statearr_60220_60248[(2)] = inst_60186);
(statearr_60220_60248[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (9)))
{var state_60207__$1 = state_60207;var statearr_60221_60249 = state_60207__$1;(statearr_60221_60249[(2)] = null);
(statearr_60221_60249[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (5)))
{var state_60207__$1 = state_60207;if(cljs.core.truth_(delay))
{var statearr_60222_60250 = state_60207__$1;(statearr_60222_60250[(1)] = (8));
} else
{var statearr_60223_60251 = state_60207__$1;(statearr_60223_60251[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (14)))
{var inst_60181 = (state_60207[(7)]);var inst_60195 = (state_60207[(2)]);var state_60207__$1 = (function (){var statearr_60224 = state_60207;(statearr_60224[(8)] = inst_60195);
return statearr_60224;
})();var statearr_60225_60252 = state_60207__$1;(statearr_60225_60252[(2)] = inst_60181);
(statearr_60225_60252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (16)))
{var state_60207__$1 = state_60207;var statearr_60226_60253 = state_60207__$1;(statearr_60226_60253[(2)] = null);
(statearr_60226_60253[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (10)))
{var inst_60189 = (state_60207[(2)]);var state_60207__$1 = (function (){var statearr_60227 = state_60207;(statearr_60227[(9)] = inst_60189);
return statearr_60227;
})();if(cljs.core.truth_(log))
{var statearr_60228_60254 = state_60207__$1;(statearr_60228_60254[(1)] = (12));
} else
{var statearr_60229_60255 = state_60207__$1;(statearr_60229_60255[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60208 === (8)))
{var inst_60184 = cljs.core.async.timeout.call(null,delay);var state_60207__$1 = state_60207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60207__$1,(11),inst_60184);
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
});})(c__5708__auto___60237,map__60178,map__60178__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___60237,map__60178,map__60178__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_60233 = [null,null,null,null,null,null,null,null,null,null];(statearr_60233[(0)] = state_machine__5694__auto__);
(statearr_60233[(1)] = (1));
return statearr_60233;
});
var state_machine__5694__auto____1 = (function (state_60207){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_60207);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e60234){if((e60234 instanceof Object))
{var ex__5697__auto__ = e60234;var statearr_60235_60256 = state_60207;(statearr_60235_60256[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e60234;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__60257 = state_60207;
state_60207 = G__60257;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_60207){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_60207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___60237,map__60178,map__60178__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_60236 = f__5709__auto__.call(null);(statearr_60236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___60237);
return statearr_60236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___60237,map__60178,map__60178__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__60118 = null;if (arguments.length > 1) {
  p__60118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__60118);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__60258){
var ch = cljs.core.first(arglist__60258);
var p__60118 = cljs.core.rest(arglist__60258);
return dorun_async__delegate(ch,p__60118);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map