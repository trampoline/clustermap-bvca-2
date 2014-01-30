// Compiled by ClojureScript 0.0-2138
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
map_async.cljs$lang$applyTo = (function (arglist__11285){
var f = cljs.core.first(arglist__11285);
var colls = cljs.core.rest(arglist__11285);
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
var dorun_async__delegate = function (ch,p__11286){var map__11346 = p__11286;var map__11346__$1 = ((cljs.core.seq_QMARK_.call(null,map__11346))?cljs.core.apply.call(null,cljs.core.hash_map,map__11346):map__11346);var delay = cljs.core.get.call(null,map__11346__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11346__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11405 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11375){var state_val_11376 = (state_11375[1]);if((state_val_11376 === 1))
{var state_11375__$1 = state_11375;var statearr_11377_11406 = state_11375__$1;(statearr_11377_11406[2] = null);
(statearr_11377_11406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 2))
{var state_11375__$1 = state_11375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11375__$1,4,ch);
} else
{if((state_val_11376 === 3))
{var inst_11373 = (state_11375[2]);var state_11375__$1 = state_11375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11375__$1,inst_11373);
} else
{if((state_val_11376 === 4))
{var inst_11349 = (state_11375[7]);var inst_11349__$1 = (state_11375[2]);var state_11375__$1 = (function (){var statearr_11378 = state_11375;(statearr_11378[7] = inst_11349__$1);
return statearr_11378;
})();if(cljs.core.truth_(inst_11349__$1))
{var statearr_11379_11407 = state_11375__$1;(statearr_11379_11407[1] = 5);
} else
{var statearr_11380_11408 = state_11375__$1;(statearr_11380_11408[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 5))
{var state_11375__$1 = state_11375;if(cljs.core.truth_(delay))
{var statearr_11381_11409 = state_11375__$1;(statearr_11381_11409[1] = 8);
} else
{var statearr_11382_11410 = state_11375__$1;(statearr_11382_11410[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 6))
{var state_11375__$1 = state_11375;var statearr_11383_11411 = state_11375__$1;(statearr_11383_11411[2] = null);
(statearr_11383_11411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 7))
{var inst_11366 = (state_11375[2]);var state_11375__$1 = state_11375;if(cljs.core.truth_(inst_11366))
{var statearr_11384_11412 = state_11375__$1;(statearr_11384_11412[1] = 15);
} else
{var statearr_11385_11413 = state_11375__$1;(statearr_11385_11413[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 8))
{var inst_11352 = cljs.core.async.timeout.call(null,delay);var state_11375__$1 = state_11375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11375__$1,11,inst_11352);
} else
{if((state_val_11376 === 9))
{var state_11375__$1 = state_11375;var statearr_11386_11414 = state_11375__$1;(statearr_11386_11414[2] = null);
(statearr_11386_11414[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 10))
{var inst_11357 = (state_11375[2]);var state_11375__$1 = (function (){var statearr_11387 = state_11375;(statearr_11387[8] = inst_11357);
return statearr_11387;
})();if(cljs.core.truth_(log))
{var statearr_11388_11415 = state_11375__$1;(statearr_11388_11415[1] = 12);
} else
{var statearr_11389_11416 = state_11375__$1;(statearr_11389_11416[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 11))
{var inst_11354 = (state_11375[2]);var state_11375__$1 = state_11375;var statearr_11390_11417 = state_11375__$1;(statearr_11390_11417[2] = inst_11354);
(statearr_11390_11417[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 12))
{var inst_11349 = (state_11375[7]);var inst_11359 = cljs.core.clj__GT_js.call(null,inst_11349);var inst_11360 = console.log(inst_11359);var state_11375__$1 = state_11375;var statearr_11391_11418 = state_11375__$1;(statearr_11391_11418[2] = inst_11360);
(statearr_11391_11418[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 13))
{var state_11375__$1 = state_11375;var statearr_11392_11419 = state_11375__$1;(statearr_11392_11419[2] = null);
(statearr_11392_11419[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 14))
{var inst_11349 = (state_11375[7]);var inst_11363 = (state_11375[2]);var state_11375__$1 = (function (){var statearr_11393 = state_11375;(statearr_11393[9] = inst_11363);
return statearr_11393;
})();var statearr_11394_11420 = state_11375__$1;(statearr_11394_11420[2] = inst_11349);
(statearr_11394_11420[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 15))
{var state_11375__$1 = state_11375;var statearr_11395_11421 = state_11375__$1;(statearr_11395_11421[2] = null);
(statearr_11395_11421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 16))
{var state_11375__$1 = state_11375;var statearr_11396_11422 = state_11375__$1;(statearr_11396_11422[2] = null);
(statearr_11396_11422[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11376 === 17))
{var inst_11371 = (state_11375[2]);var state_11375__$1 = state_11375;var statearr_11397_11423 = state_11375__$1;(statearr_11397_11423[2] = inst_11371);
(statearr_11397_11423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11401 = [null,null,null,null,null,null,null,null,null,null];(statearr_11401[0] = state_machine__5507__auto__);
(statearr_11401[1] = 1);
return statearr_11401;
});
var state_machine__5507__auto____1 = (function (state_11375){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11375);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11402){if((e11402 instanceof Object))
{var ex__5510__auto__ = e11402;var statearr_11403_11424 = state_11375;(statearr_11403_11424[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11425 = state_11375;
state_11375 = G__11425;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11375){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11404 = f__5522__auto__.call(null);(statearr_11404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11405);
return statearr_11404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11286 = null;if (arguments.length > 1) {
  p__11286 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11286);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11426){
var ch = cljs.core.first(arglist__11426);
var p__11286 = cljs.core.rest(arglist__11426);
return dorun_async__delegate(ch,p__11286);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map