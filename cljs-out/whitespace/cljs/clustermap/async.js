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
map_async.cljs$lang$applyTo = (function (arglist__12109){
var f = cljs.core.first(arglist__12109);
var colls = cljs.core.rest(arglist__12109);
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
var dorun_async__delegate = function (ch,p__12110){var map__12170 = p__12110;var map__12170__$1 = ((cljs.core.seq_QMARK_.call(null,map__12170))?cljs.core.apply.call(null,cljs.core.hash_map,map__12170):map__12170);var delay = cljs.core.get.call(null,map__12170__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12170__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12229 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12229,map__12170,map__12170__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12229,map__12170,map__12170__$1,delay,log){
return (function (state_12199){var state_val_12200 = (state_12199[(1)]);if((state_val_12200 === (7)))
{var inst_12190 = (state_12199[(2)]);var state_12199__$1 = state_12199;if(cljs.core.truth_(inst_12190))
{var statearr_12201_12230 = state_12199__$1;(statearr_12201_12230[(1)] = (15));
} else
{var statearr_12202_12231 = state_12199__$1;(statearr_12202_12231[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (1)))
{var state_12199__$1 = state_12199;var statearr_12203_12232 = state_12199__$1;(statearr_12203_12232[(2)] = null);
(statearr_12203_12232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (4)))
{var inst_12173 = (state_12199[(7)]);var inst_12173__$1 = (state_12199[(2)]);var state_12199__$1 = (function (){var statearr_12204 = state_12199;(statearr_12204[(7)] = inst_12173__$1);
return statearr_12204;
})();if(cljs.core.truth_(inst_12173__$1))
{var statearr_12205_12233 = state_12199__$1;(statearr_12205_12233[(1)] = (5));
} else
{var statearr_12206_12234 = state_12199__$1;(statearr_12206_12234[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (15)))
{var state_12199__$1 = state_12199;var statearr_12207_12235 = state_12199__$1;(statearr_12207_12235[(2)] = null);
(statearr_12207_12235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (13)))
{var state_12199__$1 = state_12199;var statearr_12208_12236 = state_12199__$1;(statearr_12208_12236[(2)] = null);
(statearr_12208_12236[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (6)))
{var state_12199__$1 = state_12199;var statearr_12209_12237 = state_12199__$1;(statearr_12209_12237[(2)] = null);
(statearr_12209_12237[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (17)))
{var inst_12195 = (state_12199[(2)]);var state_12199__$1 = state_12199;var statearr_12210_12238 = state_12199__$1;(statearr_12210_12238[(2)] = inst_12195);
(statearr_12210_12238[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (3)))
{var inst_12197 = (state_12199[(2)]);var state_12199__$1 = state_12199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12199__$1,inst_12197);
} else
{if((state_val_12200 === (12)))
{var inst_12173 = (state_12199[(7)]);var inst_12183 = cljs.core.clj__GT_js.call(null,inst_12173);var inst_12184 = console.log(inst_12183);var state_12199__$1 = state_12199;var statearr_12211_12239 = state_12199__$1;(statearr_12211_12239[(2)] = inst_12184);
(statearr_12211_12239[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (2)))
{var state_12199__$1 = state_12199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12199__$1,(4),ch);
} else
{if((state_val_12200 === (11)))
{var inst_12178 = (state_12199[(2)]);var state_12199__$1 = state_12199;var statearr_12212_12240 = state_12199__$1;(statearr_12212_12240[(2)] = inst_12178);
(statearr_12212_12240[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (9)))
{var state_12199__$1 = state_12199;var statearr_12213_12241 = state_12199__$1;(statearr_12213_12241[(2)] = null);
(statearr_12213_12241[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (5)))
{var state_12199__$1 = state_12199;if(cljs.core.truth_(delay))
{var statearr_12214_12242 = state_12199__$1;(statearr_12214_12242[(1)] = (8));
} else
{var statearr_12215_12243 = state_12199__$1;(statearr_12215_12243[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (14)))
{var inst_12173 = (state_12199[(7)]);var inst_12187 = (state_12199[(2)]);var state_12199__$1 = (function (){var statearr_12216 = state_12199;(statearr_12216[(8)] = inst_12187);
return statearr_12216;
})();var statearr_12217_12244 = state_12199__$1;(statearr_12217_12244[(2)] = inst_12173);
(statearr_12217_12244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (16)))
{var state_12199__$1 = state_12199;var statearr_12218_12245 = state_12199__$1;(statearr_12218_12245[(2)] = null);
(statearr_12218_12245[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (10)))
{var inst_12181 = (state_12199[(2)]);var state_12199__$1 = (function (){var statearr_12219 = state_12199;(statearr_12219[(9)] = inst_12181);
return statearr_12219;
})();if(cljs.core.truth_(log))
{var statearr_12220_12246 = state_12199__$1;(statearr_12220_12246[(1)] = (12));
} else
{var statearr_12221_12247 = state_12199__$1;(statearr_12221_12247[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12200 === (8)))
{var inst_12176 = cljs.core.async.timeout.call(null,delay);var state_12199__$1 = state_12199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12199__$1,(11),inst_12176);
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
});})(c__5693__auto___12229,map__12170,map__12170__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12229,map__12170,map__12170__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12225 = [null,null,null,null,null,null,null,null,null,null];(statearr_12225[(0)] = state_machine__5679__auto__);
(statearr_12225[(1)] = (1));
return statearr_12225;
});
var state_machine__5679__auto____1 = (function (state_12199){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12199);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12226){if((e12226 instanceof Object))
{var ex__5682__auto__ = e12226;var statearr_12227_12248 = state_12199;(statearr_12227_12248[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12199);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12249 = state_12199;
state_12199 = G__12249;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12199){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12229,map__12170,map__12170__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12228 = f__5694__auto__.call(null);(statearr_12228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12229);
return statearr_12228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12229,map__12170,map__12170__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12110 = null;if (arguments.length > 1) {
  p__12110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12110);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12250){
var ch = cljs.core.first(arglist__12250);
var p__12110 = cljs.core.rest(arglist__12250);
return dorun_async__delegate(ch,p__12110);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
