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
map_async.cljs$lang$applyTo = (function (arglist__31042){
var f = cljs.core.first(arglist__31042);
var colls = cljs.core.rest(arglist__31042);
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
var dorun_async__delegate = function (ch,p__31043){var map__31103 = p__31043;var map__31103__$1 = ((cljs.core.seq_QMARK_.call(null,map__31103))?cljs.core.apply.call(null,cljs.core.hash_map,map__31103):map__31103);var delay = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___31162 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31162,map__31103,map__31103__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31162,map__31103,map__31103__$1,delay,log){
return (function (state_31132){var state_val_31133 = (state_31132[(1)]);if((state_val_31133 === (7)))
{var inst_31123 = (state_31132[(2)]);var state_31132__$1 = state_31132;if(cljs.core.truth_(inst_31123))
{var statearr_31134_31163 = state_31132__$1;(statearr_31134_31163[(1)] = (15));
} else
{var statearr_31135_31164 = state_31132__$1;(statearr_31135_31164[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (1)))
{var state_31132__$1 = state_31132;var statearr_31136_31165 = state_31132__$1;(statearr_31136_31165[(2)] = null);
(statearr_31136_31165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (4)))
{var inst_31106 = (state_31132[(7)]);var inst_31106__$1 = (state_31132[(2)]);var state_31132__$1 = (function (){var statearr_31137 = state_31132;(statearr_31137[(7)] = inst_31106__$1);
return statearr_31137;
})();if(cljs.core.truth_(inst_31106__$1))
{var statearr_31138_31166 = state_31132__$1;(statearr_31138_31166[(1)] = (5));
} else
{var statearr_31139_31167 = state_31132__$1;(statearr_31139_31167[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (15)))
{var state_31132__$1 = state_31132;var statearr_31140_31168 = state_31132__$1;(statearr_31140_31168[(2)] = null);
(statearr_31140_31168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (13)))
{var state_31132__$1 = state_31132;var statearr_31141_31169 = state_31132__$1;(statearr_31141_31169[(2)] = null);
(statearr_31141_31169[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (6)))
{var state_31132__$1 = state_31132;var statearr_31142_31170 = state_31132__$1;(statearr_31142_31170[(2)] = null);
(statearr_31142_31170[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (17)))
{var inst_31128 = (state_31132[(2)]);var state_31132__$1 = state_31132;var statearr_31143_31171 = state_31132__$1;(statearr_31143_31171[(2)] = inst_31128);
(statearr_31143_31171[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (3)))
{var inst_31130 = (state_31132[(2)]);var state_31132__$1 = state_31132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31132__$1,inst_31130);
} else
{if((state_val_31133 === (12)))
{var inst_31106 = (state_31132[(7)]);var inst_31116 = cljs.core.clj__GT_js.call(null,inst_31106);var inst_31117 = console.log(inst_31116);var state_31132__$1 = state_31132;var statearr_31144_31172 = state_31132__$1;(statearr_31144_31172[(2)] = inst_31117);
(statearr_31144_31172[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (2)))
{var state_31132__$1 = state_31132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31132__$1,(4),ch);
} else
{if((state_val_31133 === (11)))
{var inst_31111 = (state_31132[(2)]);var state_31132__$1 = state_31132;var statearr_31145_31173 = state_31132__$1;(statearr_31145_31173[(2)] = inst_31111);
(statearr_31145_31173[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (9)))
{var state_31132__$1 = state_31132;var statearr_31146_31174 = state_31132__$1;(statearr_31146_31174[(2)] = null);
(statearr_31146_31174[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (5)))
{var state_31132__$1 = state_31132;if(cljs.core.truth_(delay))
{var statearr_31147_31175 = state_31132__$1;(statearr_31147_31175[(1)] = (8));
} else
{var statearr_31148_31176 = state_31132__$1;(statearr_31148_31176[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (14)))
{var inst_31106 = (state_31132[(7)]);var inst_31120 = (state_31132[(2)]);var state_31132__$1 = (function (){var statearr_31149 = state_31132;(statearr_31149[(8)] = inst_31120);
return statearr_31149;
})();var statearr_31150_31177 = state_31132__$1;(statearr_31150_31177[(2)] = inst_31106);
(statearr_31150_31177[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (16)))
{var state_31132__$1 = state_31132;var statearr_31151_31178 = state_31132__$1;(statearr_31151_31178[(2)] = null);
(statearr_31151_31178[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (10)))
{var inst_31114 = (state_31132[(2)]);var state_31132__$1 = (function (){var statearr_31152 = state_31132;(statearr_31152[(9)] = inst_31114);
return statearr_31152;
})();if(cljs.core.truth_(log))
{var statearr_31153_31179 = state_31132__$1;(statearr_31153_31179[(1)] = (12));
} else
{var statearr_31154_31180 = state_31132__$1;(statearr_31154_31180[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31133 === (8)))
{var inst_31109 = cljs.core.async.timeout.call(null,delay);var state_31132__$1 = state_31132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31132__$1,(11),inst_31109);
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
});})(c__5708__auto___31162,map__31103,map__31103__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___31162,map__31103,map__31103__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31158 = [null,null,null,null,null,null,null,null,null,null];(statearr_31158[(0)] = state_machine__5694__auto__);
(statearr_31158[(1)] = (1));
return statearr_31158;
});
var state_machine__5694__auto____1 = (function (state_31132){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31132);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31159){if((e31159 instanceof Object))
{var ex__5697__auto__ = e31159;var statearr_31160_31181 = state_31132;(statearr_31160_31181[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31159;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31182 = state_31132;
state_31132 = G__31182;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31132){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31162,map__31103,map__31103__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_31161 = f__5709__auto__.call(null);(statearr_31161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31162);
return statearr_31161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31162,map__31103,map__31103__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__31043 = null;if (arguments.length > 1) {
  p__31043 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31043);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31183){
var ch = cljs.core.first(arglist__31183);
var p__31043 = cljs.core.rest(arglist__31183);
return dorun_async__delegate(ch,p__31043);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
