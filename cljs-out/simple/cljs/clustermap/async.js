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
map_async.cljs$lang$applyTo = (function (arglist__28090){
var f = cljs.core.first(arglist__28090);
var colls = cljs.core.rest(arglist__28090);
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
var dorun_async__delegate = function (ch,p__28091){var map__28151 = p__28091;var map__28151__$1 = ((cljs.core.seq_QMARK_.call(null,map__28151))?cljs.core.apply.call(null,cljs.core.hash_map,map__28151):map__28151);var delay = cljs.core.get.call(null,map__28151__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__28151__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___28210 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___28210,map__28151,map__28151__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___28210,map__28151,map__28151__$1,delay,log){
return (function (state_28180){var state_val_28181 = (state_28180[(1)]);if((state_val_28181 === (7)))
{var inst_28171 = (state_28180[(2)]);var state_28180__$1 = state_28180;if(cljs.core.truth_(inst_28171))
{var statearr_28182_28211 = state_28180__$1;(statearr_28182_28211[(1)] = (15));
} else
{var statearr_28183_28212 = state_28180__$1;(statearr_28183_28212[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (1)))
{var state_28180__$1 = state_28180;var statearr_28184_28213 = state_28180__$1;(statearr_28184_28213[(2)] = null);
(statearr_28184_28213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (4)))
{var inst_28154 = (state_28180[(7)]);var inst_28154__$1 = (state_28180[(2)]);var state_28180__$1 = (function (){var statearr_28185 = state_28180;(statearr_28185[(7)] = inst_28154__$1);
return statearr_28185;
})();if(cljs.core.truth_(inst_28154__$1))
{var statearr_28186_28214 = state_28180__$1;(statearr_28186_28214[(1)] = (5));
} else
{var statearr_28187_28215 = state_28180__$1;(statearr_28187_28215[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (15)))
{var state_28180__$1 = state_28180;var statearr_28188_28216 = state_28180__$1;(statearr_28188_28216[(2)] = null);
(statearr_28188_28216[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (13)))
{var state_28180__$1 = state_28180;var statearr_28189_28217 = state_28180__$1;(statearr_28189_28217[(2)] = null);
(statearr_28189_28217[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (6)))
{var state_28180__$1 = state_28180;var statearr_28190_28218 = state_28180__$1;(statearr_28190_28218[(2)] = null);
(statearr_28190_28218[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (17)))
{var inst_28176 = (state_28180[(2)]);var state_28180__$1 = state_28180;var statearr_28191_28219 = state_28180__$1;(statearr_28191_28219[(2)] = inst_28176);
(statearr_28191_28219[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (3)))
{var inst_28178 = (state_28180[(2)]);var state_28180__$1 = state_28180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28180__$1,inst_28178);
} else
{if((state_val_28181 === (12)))
{var inst_28154 = (state_28180[(7)]);var inst_28164 = cljs.core.clj__GT_js.call(null,inst_28154);var inst_28165 = console.log(inst_28164);var state_28180__$1 = state_28180;var statearr_28192_28220 = state_28180__$1;(statearr_28192_28220[(2)] = inst_28165);
(statearr_28192_28220[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (2)))
{var state_28180__$1 = state_28180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28180__$1,(4),ch);
} else
{if((state_val_28181 === (11)))
{var inst_28159 = (state_28180[(2)]);var state_28180__$1 = state_28180;var statearr_28193_28221 = state_28180__$1;(statearr_28193_28221[(2)] = inst_28159);
(statearr_28193_28221[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (9)))
{var state_28180__$1 = state_28180;var statearr_28194_28222 = state_28180__$1;(statearr_28194_28222[(2)] = null);
(statearr_28194_28222[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (5)))
{var state_28180__$1 = state_28180;if(cljs.core.truth_(delay))
{var statearr_28195_28223 = state_28180__$1;(statearr_28195_28223[(1)] = (8));
} else
{var statearr_28196_28224 = state_28180__$1;(statearr_28196_28224[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (14)))
{var inst_28154 = (state_28180[(7)]);var inst_28168 = (state_28180[(2)]);var state_28180__$1 = (function (){var statearr_28197 = state_28180;(statearr_28197[(8)] = inst_28168);
return statearr_28197;
})();var statearr_28198_28225 = state_28180__$1;(statearr_28198_28225[(2)] = inst_28154);
(statearr_28198_28225[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (16)))
{var state_28180__$1 = state_28180;var statearr_28199_28226 = state_28180__$1;(statearr_28199_28226[(2)] = null);
(statearr_28199_28226[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (10)))
{var inst_28162 = (state_28180[(2)]);var state_28180__$1 = (function (){var statearr_28200 = state_28180;(statearr_28200[(9)] = inst_28162);
return statearr_28200;
})();if(cljs.core.truth_(log))
{var statearr_28201_28227 = state_28180__$1;(statearr_28201_28227[(1)] = (12));
} else
{var statearr_28202_28228 = state_28180__$1;(statearr_28202_28228[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (8)))
{var inst_28157 = cljs.core.async.timeout.call(null,delay);var state_28180__$1 = state_28180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28180__$1,(11),inst_28157);
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
});})(c__5708__auto___28210,map__28151,map__28151__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___28210,map__28151,map__28151__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28206 = [null,null,null,null,null,null,null,null,null,null];(statearr_28206[(0)] = state_machine__5694__auto__);
(statearr_28206[(1)] = (1));
return statearr_28206;
});
var state_machine__5694__auto____1 = (function (state_28180){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28180);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28207){if((e28207 instanceof Object))
{var ex__5697__auto__ = e28207;var statearr_28208_28229 = state_28180;(statearr_28208_28229[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28207;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28230 = state_28180;
state_28180 = G__28230;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28180){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___28210,map__28151,map__28151__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_28209 = f__5709__auto__.call(null);(statearr_28209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___28210);
return statearr_28209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___28210,map__28151,map__28151__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__28091 = null;if (arguments.length > 1) {
  p__28091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__28091);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__28231){
var ch = cljs.core.first(arglist__28231);
var p__28091 = cljs.core.rest(arglist__28231);
return dorun_async__delegate(ch,p__28091);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
