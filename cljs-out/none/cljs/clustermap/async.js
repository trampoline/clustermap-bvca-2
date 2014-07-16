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
map_async.cljs$lang$applyTo = (function (arglist__47888){
var f = cljs.core.first(arglist__47888);
var colls = cljs.core.rest(arglist__47888);
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
var dorun_async__delegate = function (ch,p__47889){var map__47949 = p__47889;var map__47949__$1 = ((cljs.core.seq_QMARK_.call(null,map__47949))?cljs.core.apply.call(null,cljs.core.hash_map,map__47949):map__47949);var delay = cljs.core.get.call(null,map__47949__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__47949__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___48008 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___48008,map__47949,map__47949__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___48008,map__47949,map__47949__$1,delay,log){
return (function (state_47978){var state_val_47979 = (state_47978[(1)]);if((state_val_47979 === (7)))
{var inst_47969 = (state_47978[(2)]);var state_47978__$1 = state_47978;if(cljs.core.truth_(inst_47969))
{var statearr_47980_48009 = state_47978__$1;(statearr_47980_48009[(1)] = (15));
} else
{var statearr_47981_48010 = state_47978__$1;(statearr_47981_48010[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (1)))
{var state_47978__$1 = state_47978;var statearr_47982_48011 = state_47978__$1;(statearr_47982_48011[(2)] = null);
(statearr_47982_48011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (4)))
{var inst_47952 = (state_47978[(7)]);var inst_47952__$1 = (state_47978[(2)]);var state_47978__$1 = (function (){var statearr_47983 = state_47978;(statearr_47983[(7)] = inst_47952__$1);
return statearr_47983;
})();if(cljs.core.truth_(inst_47952__$1))
{var statearr_47984_48012 = state_47978__$1;(statearr_47984_48012[(1)] = (5));
} else
{var statearr_47985_48013 = state_47978__$1;(statearr_47985_48013[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (15)))
{var state_47978__$1 = state_47978;var statearr_47986_48014 = state_47978__$1;(statearr_47986_48014[(2)] = null);
(statearr_47986_48014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (13)))
{var state_47978__$1 = state_47978;var statearr_47987_48015 = state_47978__$1;(statearr_47987_48015[(2)] = null);
(statearr_47987_48015[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (6)))
{var state_47978__$1 = state_47978;var statearr_47988_48016 = state_47978__$1;(statearr_47988_48016[(2)] = null);
(statearr_47988_48016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (17)))
{var inst_47974 = (state_47978[(2)]);var state_47978__$1 = state_47978;var statearr_47989_48017 = state_47978__$1;(statearr_47989_48017[(2)] = inst_47974);
(statearr_47989_48017[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (3)))
{var inst_47976 = (state_47978[(2)]);var state_47978__$1 = state_47978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47978__$1,inst_47976);
} else
{if((state_val_47979 === (12)))
{var inst_47952 = (state_47978[(7)]);var inst_47962 = cljs.core.clj__GT_js.call(null,inst_47952);var inst_47963 = console.log(inst_47962);var state_47978__$1 = state_47978;var statearr_47990_48018 = state_47978__$1;(statearr_47990_48018[(2)] = inst_47963);
(statearr_47990_48018[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (2)))
{var state_47978__$1 = state_47978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47978__$1,(4),ch);
} else
{if((state_val_47979 === (11)))
{var inst_47957 = (state_47978[(2)]);var state_47978__$1 = state_47978;var statearr_47991_48019 = state_47978__$1;(statearr_47991_48019[(2)] = inst_47957);
(statearr_47991_48019[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (9)))
{var state_47978__$1 = state_47978;var statearr_47992_48020 = state_47978__$1;(statearr_47992_48020[(2)] = null);
(statearr_47992_48020[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (5)))
{var state_47978__$1 = state_47978;if(cljs.core.truth_(delay))
{var statearr_47993_48021 = state_47978__$1;(statearr_47993_48021[(1)] = (8));
} else
{var statearr_47994_48022 = state_47978__$1;(statearr_47994_48022[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (14)))
{var inst_47952 = (state_47978[(7)]);var inst_47966 = (state_47978[(2)]);var state_47978__$1 = (function (){var statearr_47995 = state_47978;(statearr_47995[(8)] = inst_47966);
return statearr_47995;
})();var statearr_47996_48023 = state_47978__$1;(statearr_47996_48023[(2)] = inst_47952);
(statearr_47996_48023[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (16)))
{var state_47978__$1 = state_47978;var statearr_47997_48024 = state_47978__$1;(statearr_47997_48024[(2)] = null);
(statearr_47997_48024[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (10)))
{var inst_47960 = (state_47978[(2)]);var state_47978__$1 = (function (){var statearr_47998 = state_47978;(statearr_47998[(9)] = inst_47960);
return statearr_47998;
})();if(cljs.core.truth_(log))
{var statearr_47999_48025 = state_47978__$1;(statearr_47999_48025[(1)] = (12));
} else
{var statearr_48000_48026 = state_47978__$1;(statearr_48000_48026[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47979 === (8)))
{var inst_47955 = cljs.core.async.timeout.call(null,delay);var state_47978__$1 = state_47978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47978__$1,(11),inst_47955);
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
});})(c__5693__auto___48008,map__47949,map__47949__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___48008,map__47949,map__47949__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48004 = [null,null,null,null,null,null,null,null,null,null];(statearr_48004[(0)] = state_machine__5679__auto__);
(statearr_48004[(1)] = (1));
return statearr_48004;
});
var state_machine__5679__auto____1 = (function (state_47978){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_47978);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48005){if((e48005 instanceof Object))
{var ex__5682__auto__ = e48005;var statearr_48006_48027 = state_47978;(statearr_48006_48027[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48005;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48028 = state_47978;
state_47978 = G__48028;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_47978){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_47978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___48008,map__47949,map__47949__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_48007 = f__5694__auto__.call(null);(statearr_48007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___48008);
return statearr_48007;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___48008,map__47949,map__47949__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__47889 = null;if (arguments.length > 1) {
  p__47889 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__47889);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__48029){
var ch = cljs.core.first(arglist__48029);
var p__47889 = cljs.core.rest(arglist__48029);
return dorun_async__delegate(ch,p__47889);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map