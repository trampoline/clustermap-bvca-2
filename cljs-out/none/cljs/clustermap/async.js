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
map_async.cljs$lang$applyTo = (function (arglist__23191){
var f = cljs.core.first(arglist__23191);
var colls = cljs.core.rest(arglist__23191);
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
var dorun_async__delegate = function (ch,p__23192){var map__23252 = p__23192;var map__23252__$1 = ((cljs.core.seq_QMARK_.call(null,map__23252))?cljs.core.apply.call(null,cljs.core.hash_map,map__23252):map__23252);var delay = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5689__auto___23311 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___23311,map__23252,map__23252__$1,delay,log){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___23311,map__23252,map__23252__$1,delay,log){
return (function (state_23281){var state_val_23282 = (state_23281[1]);if((state_val_23282 === 7))
{var inst_23272 = (state_23281[2]);var state_23281__$1 = state_23281;if(cljs.core.truth_(inst_23272))
{var statearr_23283_23312 = state_23281__$1;(statearr_23283_23312[1] = 15);
} else
{var statearr_23284_23313 = state_23281__$1;(statearr_23284_23313[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 1))
{var state_23281__$1 = state_23281;var statearr_23285_23314 = state_23281__$1;(statearr_23285_23314[2] = null);
(statearr_23285_23314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 4))
{var inst_23255 = (state_23281[7]);var inst_23255__$1 = (state_23281[2]);var state_23281__$1 = (function (){var statearr_23286 = state_23281;(statearr_23286[7] = inst_23255__$1);
return statearr_23286;
})();if(cljs.core.truth_(inst_23255__$1))
{var statearr_23287_23315 = state_23281__$1;(statearr_23287_23315[1] = 5);
} else
{var statearr_23288_23316 = state_23281__$1;(statearr_23288_23316[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 15))
{var state_23281__$1 = state_23281;var statearr_23289_23317 = state_23281__$1;(statearr_23289_23317[2] = null);
(statearr_23289_23317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 13))
{var state_23281__$1 = state_23281;var statearr_23290_23318 = state_23281__$1;(statearr_23290_23318[2] = null);
(statearr_23290_23318[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 6))
{var state_23281__$1 = state_23281;var statearr_23291_23319 = state_23281__$1;(statearr_23291_23319[2] = null);
(statearr_23291_23319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 17))
{var inst_23277 = (state_23281[2]);var state_23281__$1 = state_23281;var statearr_23292_23320 = state_23281__$1;(statearr_23292_23320[2] = inst_23277);
(statearr_23292_23320[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 3))
{var inst_23279 = (state_23281[2]);var state_23281__$1 = state_23281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23281__$1,inst_23279);
} else
{if((state_val_23282 === 12))
{var inst_23255 = (state_23281[7]);var inst_23265 = cljs.core.clj__GT_js.call(null,inst_23255);var inst_23266 = console.log(inst_23265);var state_23281__$1 = state_23281;var statearr_23293_23321 = state_23281__$1;(statearr_23293_23321[2] = inst_23266);
(statearr_23293_23321[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 2))
{var state_23281__$1 = state_23281;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23281__$1,4,ch);
} else
{if((state_val_23282 === 11))
{var inst_23260 = (state_23281[2]);var state_23281__$1 = state_23281;var statearr_23294_23322 = state_23281__$1;(statearr_23294_23322[2] = inst_23260);
(statearr_23294_23322[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 9))
{var state_23281__$1 = state_23281;var statearr_23295_23323 = state_23281__$1;(statearr_23295_23323[2] = null);
(statearr_23295_23323[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 5))
{var state_23281__$1 = state_23281;if(cljs.core.truth_(delay))
{var statearr_23296_23324 = state_23281__$1;(statearr_23296_23324[1] = 8);
} else
{var statearr_23297_23325 = state_23281__$1;(statearr_23297_23325[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 14))
{var inst_23255 = (state_23281[7]);var inst_23269 = (state_23281[2]);var state_23281__$1 = (function (){var statearr_23298 = state_23281;(statearr_23298[8] = inst_23269);
return statearr_23298;
})();var statearr_23299_23326 = state_23281__$1;(statearr_23299_23326[2] = inst_23255);
(statearr_23299_23326[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 16))
{var state_23281__$1 = state_23281;var statearr_23300_23327 = state_23281__$1;(statearr_23300_23327[2] = null);
(statearr_23300_23327[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 10))
{var inst_23263 = (state_23281[2]);var state_23281__$1 = (function (){var statearr_23301 = state_23281;(statearr_23301[9] = inst_23263);
return statearr_23301;
})();if(cljs.core.truth_(log))
{var statearr_23302_23328 = state_23281__$1;(statearr_23302_23328[1] = 12);
} else
{var statearr_23303_23329 = state_23281__$1;(statearr_23303_23329[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23282 === 8))
{var inst_23258 = cljs.core.async.timeout.call(null,delay);var state_23281__$1 = state_23281;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23281__$1,11,inst_23258);
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
});})(c__5689__auto___23311,map__23252,map__23252__$1,delay,log))
;return ((function (switch__5674__auto__,c__5689__auto___23311,map__23252,map__23252__$1,delay,log){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_23307 = [null,null,null,null,null,null,null,null,null,null];(statearr_23307[0] = state_machine__5675__auto__);
(statearr_23307[1] = 1);
return statearr_23307;
});
var state_machine__5675__auto____1 = (function (state_23281){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_23281);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e23308){if((e23308 instanceof Object))
{var ex__5678__auto__ = e23308;var statearr_23309_23330 = state_23281;(statearr_23309_23330[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23281);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23331 = state_23281;
state_23281 = G__23331;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_23281){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_23281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___23311,map__23252,map__23252__$1,delay,log))
})();var state__5691__auto__ = (function (){var statearr_23310 = f__5690__auto__.call(null);(statearr_23310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___23311);
return statearr_23310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___23311,map__23252,map__23252__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__23192 = null;if (arguments.length > 1) {
  p__23192 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__23192);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__23332){
var ch = cljs.core.first(arglist__23332);
var p__23192 = cljs.core.rest(arglist__23332);
return dorun_async__delegate(ch,p__23192);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map