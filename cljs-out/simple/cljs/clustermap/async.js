// Compiled by ClojureScript 0.0-2227
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
map_async.cljs$lang$applyTo = (function (arglist__23193){
var f = cljs.core.first(arglist__23193);
var colls = cljs.core.rest(arglist__23193);
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
var dorun_async__delegate = function (ch,p__23194){var map__23254 = p__23194;var map__23254__$1 = ((cljs.core.seq_QMARK_.call(null,map__23254))?cljs.core.apply.call(null,cljs.core.hash_map,map__23254):map__23254);var delay = cljs.core.get.call(null,map__23254__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__23254__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5691__auto___23313 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___23313,map__23254,map__23254__$1,delay,log){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___23313,map__23254,map__23254__$1,delay,log){
return (function (state_23283){var state_val_23284 = (state_23283[1]);if((state_val_23284 === 7))
{var inst_23274 = (state_23283[2]);var state_23283__$1 = state_23283;if(cljs.core.truth_(inst_23274))
{var statearr_23285_23314 = state_23283__$1;(statearr_23285_23314[1] = 15);
} else
{var statearr_23286_23315 = state_23283__$1;(statearr_23286_23315[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 1))
{var state_23283__$1 = state_23283;var statearr_23287_23316 = state_23283__$1;(statearr_23287_23316[2] = null);
(statearr_23287_23316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 4))
{var inst_23257 = (state_23283[7]);var inst_23257__$1 = (state_23283[2]);var state_23283__$1 = (function (){var statearr_23288 = state_23283;(statearr_23288[7] = inst_23257__$1);
return statearr_23288;
})();if(cljs.core.truth_(inst_23257__$1))
{var statearr_23289_23317 = state_23283__$1;(statearr_23289_23317[1] = 5);
} else
{var statearr_23290_23318 = state_23283__$1;(statearr_23290_23318[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 15))
{var state_23283__$1 = state_23283;var statearr_23291_23319 = state_23283__$1;(statearr_23291_23319[2] = null);
(statearr_23291_23319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 13))
{var state_23283__$1 = state_23283;var statearr_23292_23320 = state_23283__$1;(statearr_23292_23320[2] = null);
(statearr_23292_23320[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 6))
{var state_23283__$1 = state_23283;var statearr_23293_23321 = state_23283__$1;(statearr_23293_23321[2] = null);
(statearr_23293_23321[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 17))
{var inst_23279 = (state_23283[2]);var state_23283__$1 = state_23283;var statearr_23294_23322 = state_23283__$1;(statearr_23294_23322[2] = inst_23279);
(statearr_23294_23322[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 3))
{var inst_23281 = (state_23283[2]);var state_23283__$1 = state_23283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23283__$1,inst_23281);
} else
{if((state_val_23284 === 12))
{var inst_23257 = (state_23283[7]);var inst_23267 = cljs.core.clj__GT_js.call(null,inst_23257);var inst_23268 = console.log(inst_23267);var state_23283__$1 = state_23283;var statearr_23295_23323 = state_23283__$1;(statearr_23295_23323[2] = inst_23268);
(statearr_23295_23323[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 2))
{var state_23283__$1 = state_23283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23283__$1,4,ch);
} else
{if((state_val_23284 === 11))
{var inst_23262 = (state_23283[2]);var state_23283__$1 = state_23283;var statearr_23296_23324 = state_23283__$1;(statearr_23296_23324[2] = inst_23262);
(statearr_23296_23324[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 9))
{var state_23283__$1 = state_23283;var statearr_23297_23325 = state_23283__$1;(statearr_23297_23325[2] = null);
(statearr_23297_23325[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 5))
{var state_23283__$1 = state_23283;if(cljs.core.truth_(delay))
{var statearr_23298_23326 = state_23283__$1;(statearr_23298_23326[1] = 8);
} else
{var statearr_23299_23327 = state_23283__$1;(statearr_23299_23327[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 14))
{var inst_23257 = (state_23283[7]);var inst_23271 = (state_23283[2]);var state_23283__$1 = (function (){var statearr_23300 = state_23283;(statearr_23300[8] = inst_23271);
return statearr_23300;
})();var statearr_23301_23328 = state_23283__$1;(statearr_23301_23328[2] = inst_23257);
(statearr_23301_23328[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 16))
{var state_23283__$1 = state_23283;var statearr_23302_23329 = state_23283__$1;(statearr_23302_23329[2] = null);
(statearr_23302_23329[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 10))
{var inst_23265 = (state_23283[2]);var state_23283__$1 = (function (){var statearr_23303 = state_23283;(statearr_23303[9] = inst_23265);
return statearr_23303;
})();if(cljs.core.truth_(log))
{var statearr_23304_23330 = state_23283__$1;(statearr_23304_23330[1] = 12);
} else
{var statearr_23305_23331 = state_23283__$1;(statearr_23305_23331[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23284 === 8))
{var inst_23260 = cljs.core.async.timeout.call(null,delay);var state_23283__$1 = state_23283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23283__$1,11,inst_23260);
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
});})(c__5691__auto___23313,map__23254,map__23254__$1,delay,log))
;return ((function (switch__5676__auto__,c__5691__auto___23313,map__23254,map__23254__$1,delay,log){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_23309 = [null,null,null,null,null,null,null,null,null,null];(statearr_23309[0] = state_machine__5677__auto__);
(statearr_23309[1] = 1);
return statearr_23309;
});
var state_machine__5677__auto____1 = (function (state_23283){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_23283);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e23310){if((e23310 instanceof Object))
{var ex__5680__auto__ = e23310;var statearr_23311_23332 = state_23283;(statearr_23311_23332[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23283);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23333 = state_23283;
state_23283 = G__23333;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_23283){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_23283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___23313,map__23254,map__23254__$1,delay,log))
})();var state__5693__auto__ = (function (){var statearr_23312 = f__5692__auto__.call(null);(statearr_23312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___23313);
return statearr_23312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___23313,map__23254,map__23254__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__23194 = null;if (arguments.length > 1) {
  p__23194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__23194);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__23334){
var ch = cljs.core.first(arglist__23334);
var p__23194 = cljs.core.rest(arglist__23334);
return dorun_async__delegate(ch,p__23194);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
