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
map_async.cljs$lang$applyTo = (function (arglist__11349){
var f = cljs.core.first(arglist__11349);
var colls = cljs.core.rest(arglist__11349);
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
var dorun_async__delegate = function (ch,p__11350){var map__11410 = p__11350;var map__11410__$1 = ((cljs.core.seq_QMARK_.call(null,map__11410))?cljs.core.apply.call(null,cljs.core.hash_map,map__11410):map__11410);var delay = cljs.core.get.call(null,map__11410__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11410__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11439){var state_val_11440 = (state_11439[1]);if((state_val_11440 === 1))
{var state_11439__$1 = state_11439;var statearr_11441_11470 = state_11439__$1;(statearr_11441_11470[2] = null);
(statearr_11441_11470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 2))
{var state_11439__$1 = state_11439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11439__$1,4,ch);
} else
{if((state_val_11440 === 3))
{var inst_11437 = (state_11439[2]);var state_11439__$1 = state_11439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11439__$1,inst_11437);
} else
{if((state_val_11440 === 4))
{var inst_11413 = (state_11439[7]);var inst_11413__$1 = (state_11439[2]);var state_11439__$1 = (function (){var statearr_11442 = state_11439;(statearr_11442[7] = inst_11413__$1);
return statearr_11442;
})();if(cljs.core.truth_(inst_11413__$1))
{var statearr_11443_11471 = state_11439__$1;(statearr_11443_11471[1] = 5);
} else
{var statearr_11444_11472 = state_11439__$1;(statearr_11444_11472[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 5))
{var state_11439__$1 = state_11439;if(cljs.core.truth_(delay))
{var statearr_11445_11473 = state_11439__$1;(statearr_11445_11473[1] = 8);
} else
{var statearr_11446_11474 = state_11439__$1;(statearr_11446_11474[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 6))
{var state_11439__$1 = state_11439;var statearr_11447_11475 = state_11439__$1;(statearr_11447_11475[2] = null);
(statearr_11447_11475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 7))
{var inst_11430 = (state_11439[2]);var state_11439__$1 = state_11439;if(cljs.core.truth_(inst_11430))
{var statearr_11448_11476 = state_11439__$1;(statearr_11448_11476[1] = 15);
} else
{var statearr_11449_11477 = state_11439__$1;(statearr_11449_11477[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 8))
{var inst_11416 = cljs.core.async.timeout.call(null,delay);var state_11439__$1 = state_11439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11439__$1,11,inst_11416);
} else
{if((state_val_11440 === 9))
{var state_11439__$1 = state_11439;var statearr_11450_11478 = state_11439__$1;(statearr_11450_11478[2] = null);
(statearr_11450_11478[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 10))
{var inst_11421 = (state_11439[2]);var state_11439__$1 = (function (){var statearr_11451 = state_11439;(statearr_11451[8] = inst_11421);
return statearr_11451;
})();if(cljs.core.truth_(log))
{var statearr_11452_11479 = state_11439__$1;(statearr_11452_11479[1] = 12);
} else
{var statearr_11453_11480 = state_11439__$1;(statearr_11453_11480[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 11))
{var inst_11418 = (state_11439[2]);var state_11439__$1 = state_11439;var statearr_11454_11481 = state_11439__$1;(statearr_11454_11481[2] = inst_11418);
(statearr_11454_11481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 12))
{var inst_11413 = (state_11439[7]);var inst_11423 = cljs.core.clj__GT_js.call(null,inst_11413);var inst_11424 = console.log(inst_11423);var state_11439__$1 = state_11439;var statearr_11455_11482 = state_11439__$1;(statearr_11455_11482[2] = inst_11424);
(statearr_11455_11482[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 13))
{var state_11439__$1 = state_11439;var statearr_11456_11483 = state_11439__$1;(statearr_11456_11483[2] = null);
(statearr_11456_11483[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 14))
{var inst_11413 = (state_11439[7]);var inst_11427 = (state_11439[2]);var state_11439__$1 = (function (){var statearr_11457 = state_11439;(statearr_11457[9] = inst_11427);
return statearr_11457;
})();var statearr_11458_11484 = state_11439__$1;(statearr_11458_11484[2] = inst_11413);
(statearr_11458_11484[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 15))
{var state_11439__$1 = state_11439;var statearr_11459_11485 = state_11439__$1;(statearr_11459_11485[2] = null);
(statearr_11459_11485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 16))
{var state_11439__$1 = state_11439;var statearr_11460_11486 = state_11439__$1;(statearr_11460_11486[2] = null);
(statearr_11460_11486[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11440 === 17))
{var inst_11435 = (state_11439[2]);var state_11439__$1 = state_11439;var statearr_11461_11487 = state_11439__$1;(statearr_11461_11487[2] = inst_11435);
(statearr_11461_11487[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11465 = [null,null,null,null,null,null,null,null,null,null];(statearr_11465[0] = state_machine__5507__auto__);
(statearr_11465[1] = 1);
return statearr_11465;
});
var state_machine__5507__auto____1 = (function (state_11439){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11439);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11466){if((e11466 instanceof Object))
{var ex__5510__auto__ = e11466;var statearr_11467_11488 = state_11439;(statearr_11467_11488[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11439);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11489 = state_11439;
state_11439 = G__11489;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11439){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11468 = f__5522__auto__.call(null);(statearr_11468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11469);
return statearr_11468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11350 = null;if (arguments.length > 1) {
  p__11350 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11350);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11490){
var ch = cljs.core.first(arglist__11490);
var p__11350 = cljs.core.rest(arglist__11490);
return dorun_async__delegate(ch,p__11350);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map