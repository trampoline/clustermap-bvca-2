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
map_async.cljs$lang$applyTo = (function (arglist__25045){
var f = cljs.core.first(arglist__25045);
var colls = cljs.core.rest(arglist__25045);
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
var dorun_async__delegate = function (ch,p__25046){var map__25106 = p__25046;var map__25106__$1 = ((cljs.core.seq_QMARK_.call(null,map__25106))?cljs.core.apply.call(null,cljs.core.hash_map,map__25106):map__25106);var delay = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___25165 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___25165,map__25106,map__25106__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___25165,map__25106,map__25106__$1,delay,log){
return (function (state_25135){var state_val_25136 = (state_25135[(1)]);if((state_val_25136 === (7)))
{var inst_25126 = (state_25135[(2)]);var state_25135__$1 = state_25135;if(cljs.core.truth_(inst_25126))
{var statearr_25137_25166 = state_25135__$1;(statearr_25137_25166[(1)] = (15));
} else
{var statearr_25138_25167 = state_25135__$1;(statearr_25138_25167[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (1)))
{var state_25135__$1 = state_25135;var statearr_25139_25168 = state_25135__$1;(statearr_25139_25168[(2)] = null);
(statearr_25139_25168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (4)))
{var inst_25109 = (state_25135[(7)]);var inst_25109__$1 = (state_25135[(2)]);var state_25135__$1 = (function (){var statearr_25140 = state_25135;(statearr_25140[(7)] = inst_25109__$1);
return statearr_25140;
})();if(cljs.core.truth_(inst_25109__$1))
{var statearr_25141_25169 = state_25135__$1;(statearr_25141_25169[(1)] = (5));
} else
{var statearr_25142_25170 = state_25135__$1;(statearr_25142_25170[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (15)))
{var state_25135__$1 = state_25135;var statearr_25143_25171 = state_25135__$1;(statearr_25143_25171[(2)] = null);
(statearr_25143_25171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (13)))
{var state_25135__$1 = state_25135;var statearr_25144_25172 = state_25135__$1;(statearr_25144_25172[(2)] = null);
(statearr_25144_25172[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (6)))
{var state_25135__$1 = state_25135;var statearr_25145_25173 = state_25135__$1;(statearr_25145_25173[(2)] = null);
(statearr_25145_25173[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (17)))
{var inst_25131 = (state_25135[(2)]);var state_25135__$1 = state_25135;var statearr_25146_25174 = state_25135__$1;(statearr_25146_25174[(2)] = inst_25131);
(statearr_25146_25174[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (3)))
{var inst_25133 = (state_25135[(2)]);var state_25135__$1 = state_25135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25135__$1,inst_25133);
} else
{if((state_val_25136 === (12)))
{var inst_25109 = (state_25135[(7)]);var inst_25119 = cljs.core.clj__GT_js.call(null,inst_25109);var inst_25120 = console.log(inst_25119);var state_25135__$1 = state_25135;var statearr_25147_25175 = state_25135__$1;(statearr_25147_25175[(2)] = inst_25120);
(statearr_25147_25175[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (2)))
{var state_25135__$1 = state_25135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(4),ch);
} else
{if((state_val_25136 === (11)))
{var inst_25114 = (state_25135[(2)]);var state_25135__$1 = state_25135;var statearr_25148_25176 = state_25135__$1;(statearr_25148_25176[(2)] = inst_25114);
(statearr_25148_25176[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (9)))
{var state_25135__$1 = state_25135;var statearr_25149_25177 = state_25135__$1;(statearr_25149_25177[(2)] = null);
(statearr_25149_25177[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (5)))
{var state_25135__$1 = state_25135;if(cljs.core.truth_(delay))
{var statearr_25150_25178 = state_25135__$1;(statearr_25150_25178[(1)] = (8));
} else
{var statearr_25151_25179 = state_25135__$1;(statearr_25151_25179[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (14)))
{var inst_25109 = (state_25135[(7)]);var inst_25123 = (state_25135[(2)]);var state_25135__$1 = (function (){var statearr_25152 = state_25135;(statearr_25152[(8)] = inst_25123);
return statearr_25152;
})();var statearr_25153_25180 = state_25135__$1;(statearr_25153_25180[(2)] = inst_25109);
(statearr_25153_25180[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (16)))
{var state_25135__$1 = state_25135;var statearr_25154_25181 = state_25135__$1;(statearr_25154_25181[(2)] = null);
(statearr_25154_25181[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (10)))
{var inst_25117 = (state_25135[(2)]);var state_25135__$1 = (function (){var statearr_25155 = state_25135;(statearr_25155[(9)] = inst_25117);
return statearr_25155;
})();if(cljs.core.truth_(log))
{var statearr_25156_25182 = state_25135__$1;(statearr_25156_25182[(1)] = (12));
} else
{var statearr_25157_25183 = state_25135__$1;(statearr_25157_25183[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25136 === (8)))
{var inst_25112 = cljs.core.async.timeout.call(null,delay);var state_25135__$1 = state_25135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(11),inst_25112);
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
});})(c__5708__auto___25165,map__25106,map__25106__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___25165,map__25106,map__25106__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_25161 = [null,null,null,null,null,null,null,null,null,null];(statearr_25161[(0)] = state_machine__5694__auto__);
(statearr_25161[(1)] = (1));
return statearr_25161;
});
var state_machine__5694__auto____1 = (function (state_25135){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_25135);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e25162){if((e25162 instanceof Object))
{var ex__5697__auto__ = e25162;var statearr_25163_25184 = state_25135;(statearr_25163_25184[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25162;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25185 = state_25135;
state_25135 = G__25185;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_25135){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_25135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___25165,map__25106,map__25106__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_25164 = f__5709__auto__.call(null);(statearr_25164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___25165);
return statearr_25164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___25165,map__25106,map__25106__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__25046 = null;if (arguments.length > 1) {
  p__25046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__25046);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__25186){
var ch = cljs.core.first(arglist__25186);
var p__25046 = cljs.core.rest(arglist__25186);
return dorun_async__delegate(ch,p__25046);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
