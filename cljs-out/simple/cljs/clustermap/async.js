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
map_async.cljs$lang$applyTo = (function (arglist__26028){
var f = cljs.core.first(arglist__26028);
var colls = cljs.core.rest(arglist__26028);
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
var dorun_async__delegate = function (ch,p__26029){var map__26089 = p__26029;var map__26089__$1 = ((cljs.core.seq_QMARK_.call(null,map__26089))?cljs.core.apply.call(null,cljs.core.hash_map,map__26089):map__26089);var delay = cljs.core.get.call(null,map__26089__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__26089__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___26148 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___26148,map__26089,map__26089__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___26148,map__26089,map__26089__$1,delay,log){
return (function (state_26118){var state_val_26119 = (state_26118[(1)]);if((state_val_26119 === (7)))
{var inst_26109 = (state_26118[(2)]);var state_26118__$1 = state_26118;if(cljs.core.truth_(inst_26109))
{var statearr_26120_26149 = state_26118__$1;(statearr_26120_26149[(1)] = (15));
} else
{var statearr_26121_26150 = state_26118__$1;(statearr_26121_26150[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (1)))
{var state_26118__$1 = state_26118;var statearr_26122_26151 = state_26118__$1;(statearr_26122_26151[(2)] = null);
(statearr_26122_26151[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (4)))
{var inst_26092 = (state_26118[(7)]);var inst_26092__$1 = (state_26118[(2)]);var state_26118__$1 = (function (){var statearr_26123 = state_26118;(statearr_26123[(7)] = inst_26092__$1);
return statearr_26123;
})();if(cljs.core.truth_(inst_26092__$1))
{var statearr_26124_26152 = state_26118__$1;(statearr_26124_26152[(1)] = (5));
} else
{var statearr_26125_26153 = state_26118__$1;(statearr_26125_26153[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (15)))
{var state_26118__$1 = state_26118;var statearr_26126_26154 = state_26118__$1;(statearr_26126_26154[(2)] = null);
(statearr_26126_26154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (13)))
{var state_26118__$1 = state_26118;var statearr_26127_26155 = state_26118__$1;(statearr_26127_26155[(2)] = null);
(statearr_26127_26155[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (6)))
{var state_26118__$1 = state_26118;var statearr_26128_26156 = state_26118__$1;(statearr_26128_26156[(2)] = null);
(statearr_26128_26156[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (17)))
{var inst_26114 = (state_26118[(2)]);var state_26118__$1 = state_26118;var statearr_26129_26157 = state_26118__$1;(statearr_26129_26157[(2)] = inst_26114);
(statearr_26129_26157[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (3)))
{var inst_26116 = (state_26118[(2)]);var state_26118__$1 = state_26118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26118__$1,inst_26116);
} else
{if((state_val_26119 === (12)))
{var inst_26092 = (state_26118[(7)]);var inst_26102 = cljs.core.clj__GT_js.call(null,inst_26092);var inst_26103 = console.log(inst_26102);var state_26118__$1 = state_26118;var statearr_26130_26158 = state_26118__$1;(statearr_26130_26158[(2)] = inst_26103);
(statearr_26130_26158[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (2)))
{var state_26118__$1 = state_26118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26118__$1,(4),ch);
} else
{if((state_val_26119 === (11)))
{var inst_26097 = (state_26118[(2)]);var state_26118__$1 = state_26118;var statearr_26131_26159 = state_26118__$1;(statearr_26131_26159[(2)] = inst_26097);
(statearr_26131_26159[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (9)))
{var state_26118__$1 = state_26118;var statearr_26132_26160 = state_26118__$1;(statearr_26132_26160[(2)] = null);
(statearr_26132_26160[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (5)))
{var state_26118__$1 = state_26118;if(cljs.core.truth_(delay))
{var statearr_26133_26161 = state_26118__$1;(statearr_26133_26161[(1)] = (8));
} else
{var statearr_26134_26162 = state_26118__$1;(statearr_26134_26162[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (14)))
{var inst_26092 = (state_26118[(7)]);var inst_26106 = (state_26118[(2)]);var state_26118__$1 = (function (){var statearr_26135 = state_26118;(statearr_26135[(8)] = inst_26106);
return statearr_26135;
})();var statearr_26136_26163 = state_26118__$1;(statearr_26136_26163[(2)] = inst_26092);
(statearr_26136_26163[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (16)))
{var state_26118__$1 = state_26118;var statearr_26137_26164 = state_26118__$1;(statearr_26137_26164[(2)] = null);
(statearr_26137_26164[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (10)))
{var inst_26100 = (state_26118[(2)]);var state_26118__$1 = (function (){var statearr_26138 = state_26118;(statearr_26138[(9)] = inst_26100);
return statearr_26138;
})();if(cljs.core.truth_(log))
{var statearr_26139_26165 = state_26118__$1;(statearr_26139_26165[(1)] = (12));
} else
{var statearr_26140_26166 = state_26118__$1;(statearr_26140_26166[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26119 === (8)))
{var inst_26095 = cljs.core.async.timeout.call(null,delay);var state_26118__$1 = state_26118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26118__$1,(11),inst_26095);
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
});})(c__5708__auto___26148,map__26089,map__26089__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___26148,map__26089,map__26089__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_26144 = [null,null,null,null,null,null,null,null,null,null];(statearr_26144[(0)] = state_machine__5694__auto__);
(statearr_26144[(1)] = (1));
return statearr_26144;
});
var state_machine__5694__auto____1 = (function (state_26118){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26118);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26145){if((e26145 instanceof Object))
{var ex__5697__auto__ = e26145;var statearr_26146_26167 = state_26118;(statearr_26146_26167[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26118);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26145;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26168 = state_26118;
state_26118 = G__26168;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26118){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___26148,map__26089,map__26089__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_26147 = f__5709__auto__.call(null);(statearr_26147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___26148);
return statearr_26147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___26148,map__26089,map__26089__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__26029 = null;if (arguments.length > 1) {
  p__26029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__26029);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__26169){
var ch = cljs.core.first(arglist__26169);
var p__26029 = cljs.core.rest(arglist__26169);
return dorun_async__delegate(ch,p__26029);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
