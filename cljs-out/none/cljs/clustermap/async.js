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
map_async.cljs$lang$applyTo = (function (arglist__23201){
var f = cljs.core.first(arglist__23201);
var colls = cljs.core.rest(arglist__23201);
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
var dorun_async__delegate = function (ch,p__23202){var map__23262 = p__23202;var map__23262__$1 = ((cljs.core.seq_QMARK_.call(null,map__23262))?cljs.core.apply.call(null,cljs.core.hash_map,map__23262):map__23262);var delay = cljs.core.get.call(null,map__23262__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__23262__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5689__auto___23321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___23321,map__23262,map__23262__$1,delay,log){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___23321,map__23262,map__23262__$1,delay,log){
return (function (state_23291){var state_val_23292 = (state_23291[1]);if((state_val_23292 === 7))
{var inst_23282 = (state_23291[2]);var state_23291__$1 = state_23291;if(cljs.core.truth_(inst_23282))
{var statearr_23293_23322 = state_23291__$1;(statearr_23293_23322[1] = 15);
} else
{var statearr_23294_23323 = state_23291__$1;(statearr_23294_23323[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 1))
{var state_23291__$1 = state_23291;var statearr_23295_23324 = state_23291__$1;(statearr_23295_23324[2] = null);
(statearr_23295_23324[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 4))
{var inst_23265 = (state_23291[7]);var inst_23265__$1 = (state_23291[2]);var state_23291__$1 = (function (){var statearr_23296 = state_23291;(statearr_23296[7] = inst_23265__$1);
return statearr_23296;
})();if(cljs.core.truth_(inst_23265__$1))
{var statearr_23297_23325 = state_23291__$1;(statearr_23297_23325[1] = 5);
} else
{var statearr_23298_23326 = state_23291__$1;(statearr_23298_23326[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 15))
{var state_23291__$1 = state_23291;var statearr_23299_23327 = state_23291__$1;(statearr_23299_23327[2] = null);
(statearr_23299_23327[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 13))
{var state_23291__$1 = state_23291;var statearr_23300_23328 = state_23291__$1;(statearr_23300_23328[2] = null);
(statearr_23300_23328[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 6))
{var state_23291__$1 = state_23291;var statearr_23301_23329 = state_23291__$1;(statearr_23301_23329[2] = null);
(statearr_23301_23329[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 17))
{var inst_23287 = (state_23291[2]);var state_23291__$1 = state_23291;var statearr_23302_23330 = state_23291__$1;(statearr_23302_23330[2] = inst_23287);
(statearr_23302_23330[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 3))
{var inst_23289 = (state_23291[2]);var state_23291__$1 = state_23291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23291__$1,inst_23289);
} else
{if((state_val_23292 === 12))
{var inst_23265 = (state_23291[7]);var inst_23275 = cljs.core.clj__GT_js.call(null,inst_23265);var inst_23276 = console.log(inst_23275);var state_23291__$1 = state_23291;var statearr_23303_23331 = state_23291__$1;(statearr_23303_23331[2] = inst_23276);
(statearr_23303_23331[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 2))
{var state_23291__$1 = state_23291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23291__$1,4,ch);
} else
{if((state_val_23292 === 11))
{var inst_23270 = (state_23291[2]);var state_23291__$1 = state_23291;var statearr_23304_23332 = state_23291__$1;(statearr_23304_23332[2] = inst_23270);
(statearr_23304_23332[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 9))
{var state_23291__$1 = state_23291;var statearr_23305_23333 = state_23291__$1;(statearr_23305_23333[2] = null);
(statearr_23305_23333[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 5))
{var state_23291__$1 = state_23291;if(cljs.core.truth_(delay))
{var statearr_23306_23334 = state_23291__$1;(statearr_23306_23334[1] = 8);
} else
{var statearr_23307_23335 = state_23291__$1;(statearr_23307_23335[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 14))
{var inst_23265 = (state_23291[7]);var inst_23279 = (state_23291[2]);var state_23291__$1 = (function (){var statearr_23308 = state_23291;(statearr_23308[8] = inst_23279);
return statearr_23308;
})();var statearr_23309_23336 = state_23291__$1;(statearr_23309_23336[2] = inst_23265);
(statearr_23309_23336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 16))
{var state_23291__$1 = state_23291;var statearr_23310_23337 = state_23291__$1;(statearr_23310_23337[2] = null);
(statearr_23310_23337[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 10))
{var inst_23273 = (state_23291[2]);var state_23291__$1 = (function (){var statearr_23311 = state_23291;(statearr_23311[9] = inst_23273);
return statearr_23311;
})();if(cljs.core.truth_(log))
{var statearr_23312_23338 = state_23291__$1;(statearr_23312_23338[1] = 12);
} else
{var statearr_23313_23339 = state_23291__$1;(statearr_23313_23339[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23292 === 8))
{var inst_23268 = cljs.core.async.timeout.call(null,delay);var state_23291__$1 = state_23291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23291__$1,11,inst_23268);
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
});})(c__5689__auto___23321,map__23262,map__23262__$1,delay,log))
;return ((function (switch__5674__auto__,c__5689__auto___23321,map__23262,map__23262__$1,delay,log){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_23317 = [null,null,null,null,null,null,null,null,null,null];(statearr_23317[0] = state_machine__5675__auto__);
(statearr_23317[1] = 1);
return statearr_23317;
});
var state_machine__5675__auto____1 = (function (state_23291){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_23291);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e23318){if((e23318 instanceof Object))
{var ex__5678__auto__ = e23318;var statearr_23319_23340 = state_23291;(statearr_23319_23340[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23291);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23341 = state_23291;
state_23291 = G__23341;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_23291){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_23291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___23321,map__23262,map__23262__$1,delay,log))
})();var state__5691__auto__ = (function (){var statearr_23320 = f__5690__auto__.call(null);(statearr_23320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___23321);
return statearr_23320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___23321,map__23262,map__23262__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__23202 = null;if (arguments.length > 1) {
  p__23202 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__23202);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__23342){
var ch = cljs.core.first(arglist__23342);
var p__23202 = cljs.core.rest(arglist__23342);
return dorun_async__delegate(ch,p__23202);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map