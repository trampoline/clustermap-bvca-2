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
map_async.cljs$lang$applyTo = (function (arglist__16037){
var f = cljs.core.first(arglist__16037);
var colls = cljs.core.rest(arglist__16037);
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
var dorun_async__delegate = function (ch,p__16038){var map__16098 = p__16038;var map__16098__$1 = ((cljs.core.seq_QMARK_.call(null,map__16098))?cljs.core.apply.call(null,cljs.core.hash_map,map__16098):map__16098);var delay = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___16157 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16157,map__16098,map__16098__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16157,map__16098,map__16098__$1,delay,log){
return (function (state_16127){var state_val_16128 = (state_16127[(1)]);if((state_val_16128 === (7)))
{var inst_16118 = (state_16127[(2)]);var state_16127__$1 = state_16127;if(cljs.core.truth_(inst_16118))
{var statearr_16129_16158 = state_16127__$1;(statearr_16129_16158[(1)] = (15));
} else
{var statearr_16130_16159 = state_16127__$1;(statearr_16130_16159[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (1)))
{var state_16127__$1 = state_16127;var statearr_16131_16160 = state_16127__$1;(statearr_16131_16160[(2)] = null);
(statearr_16131_16160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (4)))
{var inst_16101 = (state_16127[(7)]);var inst_16101__$1 = (state_16127[(2)]);var state_16127__$1 = (function (){var statearr_16132 = state_16127;(statearr_16132[(7)] = inst_16101__$1);
return statearr_16132;
})();if(cljs.core.truth_(inst_16101__$1))
{var statearr_16133_16161 = state_16127__$1;(statearr_16133_16161[(1)] = (5));
} else
{var statearr_16134_16162 = state_16127__$1;(statearr_16134_16162[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (15)))
{var state_16127__$1 = state_16127;var statearr_16135_16163 = state_16127__$1;(statearr_16135_16163[(2)] = null);
(statearr_16135_16163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (13)))
{var state_16127__$1 = state_16127;var statearr_16136_16164 = state_16127__$1;(statearr_16136_16164[(2)] = null);
(statearr_16136_16164[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (6)))
{var state_16127__$1 = state_16127;var statearr_16137_16165 = state_16127__$1;(statearr_16137_16165[(2)] = null);
(statearr_16137_16165[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (17)))
{var inst_16123 = (state_16127[(2)]);var state_16127__$1 = state_16127;var statearr_16138_16166 = state_16127__$1;(statearr_16138_16166[(2)] = inst_16123);
(statearr_16138_16166[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (3)))
{var inst_16125 = (state_16127[(2)]);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16127__$1,inst_16125);
} else
{if((state_val_16128 === (12)))
{var inst_16101 = (state_16127[(7)]);var inst_16111 = cljs.core.clj__GT_js.call(null,inst_16101);var inst_16112 = console.log(inst_16111);var state_16127__$1 = state_16127;var statearr_16139_16167 = state_16127__$1;(statearr_16139_16167[(2)] = inst_16112);
(statearr_16139_16167[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (2)))
{var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16127__$1,(4),ch);
} else
{if((state_val_16128 === (11)))
{var inst_16106 = (state_16127[(2)]);var state_16127__$1 = state_16127;var statearr_16140_16168 = state_16127__$1;(statearr_16140_16168[(2)] = inst_16106);
(statearr_16140_16168[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (9)))
{var state_16127__$1 = state_16127;var statearr_16141_16169 = state_16127__$1;(statearr_16141_16169[(2)] = null);
(statearr_16141_16169[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (5)))
{var state_16127__$1 = state_16127;if(cljs.core.truth_(delay))
{var statearr_16142_16170 = state_16127__$1;(statearr_16142_16170[(1)] = (8));
} else
{var statearr_16143_16171 = state_16127__$1;(statearr_16143_16171[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (14)))
{var inst_16101 = (state_16127[(7)]);var inst_16115 = (state_16127[(2)]);var state_16127__$1 = (function (){var statearr_16144 = state_16127;(statearr_16144[(8)] = inst_16115);
return statearr_16144;
})();var statearr_16145_16172 = state_16127__$1;(statearr_16145_16172[(2)] = inst_16101);
(statearr_16145_16172[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (16)))
{var state_16127__$1 = state_16127;var statearr_16146_16173 = state_16127__$1;(statearr_16146_16173[(2)] = null);
(statearr_16146_16173[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (10)))
{var inst_16109 = (state_16127[(2)]);var state_16127__$1 = (function (){var statearr_16147 = state_16127;(statearr_16147[(9)] = inst_16109);
return statearr_16147;
})();if(cljs.core.truth_(log))
{var statearr_16148_16174 = state_16127__$1;(statearr_16148_16174[(1)] = (12));
} else
{var statearr_16149_16175 = state_16127__$1;(statearr_16149_16175[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (8)))
{var inst_16104 = cljs.core.async.timeout.call(null,delay);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16127__$1,(11),inst_16104);
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
});})(c__5708__auto___16157,map__16098,map__16098__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___16157,map__16098,map__16098__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16153 = [null,null,null,null,null,null,null,null,null,null];(statearr_16153[(0)] = state_machine__5694__auto__);
(statearr_16153[(1)] = (1));
return statearr_16153;
});
var state_machine__5694__auto____1 = (function (state_16127){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16127);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16154){if((e16154 instanceof Object))
{var ex__5697__auto__ = e16154;var statearr_16155_16176 = state_16127;(statearr_16155_16176[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16127);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16154;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16177 = state_16127;
state_16127 = G__16177;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16127){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16157,map__16098,map__16098__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_16156 = f__5709__auto__.call(null);(statearr_16156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16157);
return statearr_16156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16157,map__16098,map__16098__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__16038 = null;if (arguments.length > 1) {
  p__16038 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__16038);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__16178){
var ch = cljs.core.first(arglist__16178);
var p__16038 = cljs.core.rest(arglist__16178);
return dorun_async__delegate(ch,p__16038);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
