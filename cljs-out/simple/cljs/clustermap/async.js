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
map_async.cljs$lang$applyTo = (function (arglist__25081){
var f = cljs.core.first(arglist__25081);
var colls = cljs.core.rest(arglist__25081);
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
var dorun_async__delegate = function (ch,p__25082){var map__25142 = p__25082;var map__25142__$1 = ((cljs.core.seq_QMARK_.call(null,map__25142))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142):map__25142);var delay = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___25201 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___25201,map__25142,map__25142__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___25201,map__25142,map__25142__$1,delay,log){
return (function (state_25171){var state_val_25172 = (state_25171[(1)]);if((state_val_25172 === (7)))
{var inst_25162 = (state_25171[(2)]);var state_25171__$1 = state_25171;if(cljs.core.truth_(inst_25162))
{var statearr_25173_25202 = state_25171__$1;(statearr_25173_25202[(1)] = (15));
} else
{var statearr_25174_25203 = state_25171__$1;(statearr_25174_25203[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (1)))
{var state_25171__$1 = state_25171;var statearr_25175_25204 = state_25171__$1;(statearr_25175_25204[(2)] = null);
(statearr_25175_25204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (4)))
{var inst_25145 = (state_25171[(7)]);var inst_25145__$1 = (state_25171[(2)]);var state_25171__$1 = (function (){var statearr_25176 = state_25171;(statearr_25176[(7)] = inst_25145__$1);
return statearr_25176;
})();if(cljs.core.truth_(inst_25145__$1))
{var statearr_25177_25205 = state_25171__$1;(statearr_25177_25205[(1)] = (5));
} else
{var statearr_25178_25206 = state_25171__$1;(statearr_25178_25206[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (15)))
{var state_25171__$1 = state_25171;var statearr_25179_25207 = state_25171__$1;(statearr_25179_25207[(2)] = null);
(statearr_25179_25207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (13)))
{var state_25171__$1 = state_25171;var statearr_25180_25208 = state_25171__$1;(statearr_25180_25208[(2)] = null);
(statearr_25180_25208[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (6)))
{var state_25171__$1 = state_25171;var statearr_25181_25209 = state_25171__$1;(statearr_25181_25209[(2)] = null);
(statearr_25181_25209[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (17)))
{var inst_25167 = (state_25171[(2)]);var state_25171__$1 = state_25171;var statearr_25182_25210 = state_25171__$1;(statearr_25182_25210[(2)] = inst_25167);
(statearr_25182_25210[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (3)))
{var inst_25169 = (state_25171[(2)]);var state_25171__$1 = state_25171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25171__$1,inst_25169);
} else
{if((state_val_25172 === (12)))
{var inst_25145 = (state_25171[(7)]);var inst_25155 = cljs.core.clj__GT_js.call(null,inst_25145);var inst_25156 = console.log(inst_25155);var state_25171__$1 = state_25171;var statearr_25183_25211 = state_25171__$1;(statearr_25183_25211[(2)] = inst_25156);
(statearr_25183_25211[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (2)))
{var state_25171__$1 = state_25171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25171__$1,(4),ch);
} else
{if((state_val_25172 === (11)))
{var inst_25150 = (state_25171[(2)]);var state_25171__$1 = state_25171;var statearr_25184_25212 = state_25171__$1;(statearr_25184_25212[(2)] = inst_25150);
(statearr_25184_25212[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (9)))
{var state_25171__$1 = state_25171;var statearr_25185_25213 = state_25171__$1;(statearr_25185_25213[(2)] = null);
(statearr_25185_25213[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (5)))
{var state_25171__$1 = state_25171;if(cljs.core.truth_(delay))
{var statearr_25186_25214 = state_25171__$1;(statearr_25186_25214[(1)] = (8));
} else
{var statearr_25187_25215 = state_25171__$1;(statearr_25187_25215[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (14)))
{var inst_25145 = (state_25171[(7)]);var inst_25159 = (state_25171[(2)]);var state_25171__$1 = (function (){var statearr_25188 = state_25171;(statearr_25188[(8)] = inst_25159);
return statearr_25188;
})();var statearr_25189_25216 = state_25171__$1;(statearr_25189_25216[(2)] = inst_25145);
(statearr_25189_25216[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (16)))
{var state_25171__$1 = state_25171;var statearr_25190_25217 = state_25171__$1;(statearr_25190_25217[(2)] = null);
(statearr_25190_25217[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (10)))
{var inst_25153 = (state_25171[(2)]);var state_25171__$1 = (function (){var statearr_25191 = state_25171;(statearr_25191[(9)] = inst_25153);
return statearr_25191;
})();if(cljs.core.truth_(log))
{var statearr_25192_25218 = state_25171__$1;(statearr_25192_25218[(1)] = (12));
} else
{var statearr_25193_25219 = state_25171__$1;(statearr_25193_25219[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25172 === (8)))
{var inst_25148 = cljs.core.async.timeout.call(null,delay);var state_25171__$1 = state_25171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25171__$1,(11),inst_25148);
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
});})(c__5708__auto___25201,map__25142,map__25142__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___25201,map__25142,map__25142__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_25197 = [null,null,null,null,null,null,null,null,null,null];(statearr_25197[(0)] = state_machine__5694__auto__);
(statearr_25197[(1)] = (1));
return statearr_25197;
});
var state_machine__5694__auto____1 = (function (state_25171){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_25171);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e25198){if((e25198 instanceof Object))
{var ex__5697__auto__ = e25198;var statearr_25199_25220 = state_25171;(statearr_25199_25220[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25198;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25221 = state_25171;
state_25171 = G__25221;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_25171){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_25171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___25201,map__25142,map__25142__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_25200 = f__5709__auto__.call(null);(statearr_25200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___25201);
return statearr_25200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___25201,map__25142,map__25142__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__25082 = null;if (arguments.length > 1) {
  p__25082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__25082);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__25222){
var ch = cljs.core.first(arglist__25222);
var p__25082 = cljs.core.rest(arglist__25222);
return dorun_async__delegate(ch,p__25082);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
