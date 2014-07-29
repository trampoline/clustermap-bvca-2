// Compiled by ClojureScript 0.0-2268
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
map_async.cljs$lang$applyTo = (function (arglist__49077){
var f = cljs.core.first(arglist__49077);
var colls = cljs.core.rest(arglist__49077);
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
var dorun_async__delegate = function (ch,p__49078){var map__49138 = p__49078;var map__49138__$1 = ((cljs.core.seq_QMARK_.call(null,map__49138))?cljs.core.apply.call(null,cljs.core.hash_map,map__49138):map__49138);var delay = cljs.core.get.call(null,map__49138__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__49138__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___49197 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___49197,map__49138,map__49138__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___49197,map__49138,map__49138__$1,delay,log){
return (function (state_49167){var state_val_49168 = (state_49167[(1)]);if((state_val_49168 === (7)))
{var inst_49158 = (state_49167[(2)]);var state_49167__$1 = state_49167;if(cljs.core.truth_(inst_49158))
{var statearr_49169_49198 = state_49167__$1;(statearr_49169_49198[(1)] = (15));
} else
{var statearr_49170_49199 = state_49167__$1;(statearr_49170_49199[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (1)))
{var state_49167__$1 = state_49167;var statearr_49171_49200 = state_49167__$1;(statearr_49171_49200[(2)] = null);
(statearr_49171_49200[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (4)))
{var inst_49141 = (state_49167[(7)]);var inst_49141__$1 = (state_49167[(2)]);var state_49167__$1 = (function (){var statearr_49172 = state_49167;(statearr_49172[(7)] = inst_49141__$1);
return statearr_49172;
})();if(cljs.core.truth_(inst_49141__$1))
{var statearr_49173_49201 = state_49167__$1;(statearr_49173_49201[(1)] = (5));
} else
{var statearr_49174_49202 = state_49167__$1;(statearr_49174_49202[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (15)))
{var state_49167__$1 = state_49167;var statearr_49175_49203 = state_49167__$1;(statearr_49175_49203[(2)] = null);
(statearr_49175_49203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (13)))
{var state_49167__$1 = state_49167;var statearr_49176_49204 = state_49167__$1;(statearr_49176_49204[(2)] = null);
(statearr_49176_49204[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (6)))
{var state_49167__$1 = state_49167;var statearr_49177_49205 = state_49167__$1;(statearr_49177_49205[(2)] = null);
(statearr_49177_49205[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (17)))
{var inst_49163 = (state_49167[(2)]);var state_49167__$1 = state_49167;var statearr_49178_49206 = state_49167__$1;(statearr_49178_49206[(2)] = inst_49163);
(statearr_49178_49206[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (3)))
{var inst_49165 = (state_49167[(2)]);var state_49167__$1 = state_49167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49167__$1,inst_49165);
} else
{if((state_val_49168 === (12)))
{var inst_49141 = (state_49167[(7)]);var inst_49151 = cljs.core.clj__GT_js.call(null,inst_49141);var inst_49152 = console.log(inst_49151);var state_49167__$1 = state_49167;var statearr_49179_49207 = state_49167__$1;(statearr_49179_49207[(2)] = inst_49152);
(statearr_49179_49207[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (2)))
{var state_49167__$1 = state_49167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49167__$1,(4),ch);
} else
{if((state_val_49168 === (11)))
{var inst_49146 = (state_49167[(2)]);var state_49167__$1 = state_49167;var statearr_49180_49208 = state_49167__$1;(statearr_49180_49208[(2)] = inst_49146);
(statearr_49180_49208[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (9)))
{var state_49167__$1 = state_49167;var statearr_49181_49209 = state_49167__$1;(statearr_49181_49209[(2)] = null);
(statearr_49181_49209[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (5)))
{var state_49167__$1 = state_49167;if(cljs.core.truth_(delay))
{var statearr_49182_49210 = state_49167__$1;(statearr_49182_49210[(1)] = (8));
} else
{var statearr_49183_49211 = state_49167__$1;(statearr_49183_49211[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (14)))
{var inst_49141 = (state_49167[(7)]);var inst_49155 = (state_49167[(2)]);var state_49167__$1 = (function (){var statearr_49184 = state_49167;(statearr_49184[(8)] = inst_49155);
return statearr_49184;
})();var statearr_49185_49212 = state_49167__$1;(statearr_49185_49212[(2)] = inst_49141);
(statearr_49185_49212[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (16)))
{var state_49167__$1 = state_49167;var statearr_49186_49213 = state_49167__$1;(statearr_49186_49213[(2)] = null);
(statearr_49186_49213[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (10)))
{var inst_49149 = (state_49167[(2)]);var state_49167__$1 = (function (){var statearr_49187 = state_49167;(statearr_49187[(9)] = inst_49149);
return statearr_49187;
})();if(cljs.core.truth_(log))
{var statearr_49188_49214 = state_49167__$1;(statearr_49188_49214[(1)] = (12));
} else
{var statearr_49189_49215 = state_49167__$1;(statearr_49189_49215[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49168 === (8)))
{var inst_49144 = cljs.core.async.timeout.call(null,delay);var state_49167__$1 = state_49167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49167__$1,(11),inst_49144);
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
});})(c__5693__auto___49197,map__49138,map__49138__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___49197,map__49138,map__49138__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_49193 = [null,null,null,null,null,null,null,null,null,null];(statearr_49193[(0)] = state_machine__5679__auto__);
(statearr_49193[(1)] = (1));
return statearr_49193;
});
var state_machine__5679__auto____1 = (function (state_49167){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49167);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49194){if((e49194 instanceof Object))
{var ex__5682__auto__ = e49194;var statearr_49195_49216 = state_49167;(statearr_49195_49216[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49217 = state_49167;
state_49167 = G__49217;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49167){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___49197,map__49138,map__49138__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_49196 = f__5694__auto__.call(null);(statearr_49196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___49197);
return statearr_49196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___49197,map__49138,map__49138__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__49078 = null;if (arguments.length > 1) {
  p__49078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__49078);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__49218){
var ch = cljs.core.first(arglist__49218);
var p__49078 = cljs.core.rest(arglist__49218);
return dorun_async__delegate(ch,p__49078);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map