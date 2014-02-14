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
map_async.cljs$lang$applyTo = (function (arglist__32336){
var f = cljs.core.first(arglist__32336);
var colls = cljs.core.rest(arglist__32336);
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
var dorun_async__delegate = function (ch,p__32337){var map__32397 = p__32337;var map__32397__$1 = ((cljs.core.seq_QMARK_.call(null,map__32397))?cljs.core.apply.call(null,cljs.core.hash_map,map__32397):map__32397);var delay = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32456 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32426){var state_val_32427 = (state_32426[1]);if((state_val_32427 === 1))
{var state_32426__$1 = state_32426;var statearr_32428_32457 = state_32426__$1;(statearr_32428_32457[2] = null);
(statearr_32428_32457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 2))
{var state_32426__$1 = state_32426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32426__$1,4,ch);
} else
{if((state_val_32427 === 3))
{var inst_32424 = (state_32426[2]);var state_32426__$1 = state_32426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32426__$1,inst_32424);
} else
{if((state_val_32427 === 4))
{var inst_32400 = (state_32426[7]);var inst_32400__$1 = (state_32426[2]);var state_32426__$1 = (function (){var statearr_32429 = state_32426;(statearr_32429[7] = inst_32400__$1);
return statearr_32429;
})();if(cljs.core.truth_(inst_32400__$1))
{var statearr_32430_32458 = state_32426__$1;(statearr_32430_32458[1] = 5);
} else
{var statearr_32431_32459 = state_32426__$1;(statearr_32431_32459[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 5))
{var state_32426__$1 = state_32426;if(cljs.core.truth_(delay))
{var statearr_32432_32460 = state_32426__$1;(statearr_32432_32460[1] = 8);
} else
{var statearr_32433_32461 = state_32426__$1;(statearr_32433_32461[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 6))
{var state_32426__$1 = state_32426;var statearr_32434_32462 = state_32426__$1;(statearr_32434_32462[2] = null);
(statearr_32434_32462[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 7))
{var inst_32417 = (state_32426[2]);var state_32426__$1 = state_32426;if(cljs.core.truth_(inst_32417))
{var statearr_32435_32463 = state_32426__$1;(statearr_32435_32463[1] = 15);
} else
{var statearr_32436_32464 = state_32426__$1;(statearr_32436_32464[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 8))
{var inst_32403 = cljs.core.async.timeout.call(null,delay);var state_32426__$1 = state_32426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32426__$1,11,inst_32403);
} else
{if((state_val_32427 === 9))
{var state_32426__$1 = state_32426;var statearr_32437_32465 = state_32426__$1;(statearr_32437_32465[2] = null);
(statearr_32437_32465[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 10))
{var inst_32408 = (state_32426[2]);var state_32426__$1 = (function (){var statearr_32438 = state_32426;(statearr_32438[8] = inst_32408);
return statearr_32438;
})();if(cljs.core.truth_(log))
{var statearr_32439_32466 = state_32426__$1;(statearr_32439_32466[1] = 12);
} else
{var statearr_32440_32467 = state_32426__$1;(statearr_32440_32467[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 11))
{var inst_32405 = (state_32426[2]);var state_32426__$1 = state_32426;var statearr_32441_32468 = state_32426__$1;(statearr_32441_32468[2] = inst_32405);
(statearr_32441_32468[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 12))
{var inst_32400 = (state_32426[7]);var inst_32410 = cljs.core.clj__GT_js.call(null,inst_32400);var inst_32411 = console.log(inst_32410);var state_32426__$1 = state_32426;var statearr_32442_32469 = state_32426__$1;(statearr_32442_32469[2] = inst_32411);
(statearr_32442_32469[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 13))
{var state_32426__$1 = state_32426;var statearr_32443_32470 = state_32426__$1;(statearr_32443_32470[2] = null);
(statearr_32443_32470[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 14))
{var inst_32400 = (state_32426[7]);var inst_32414 = (state_32426[2]);var state_32426__$1 = (function (){var statearr_32444 = state_32426;(statearr_32444[9] = inst_32414);
return statearr_32444;
})();var statearr_32445_32471 = state_32426__$1;(statearr_32445_32471[2] = inst_32400);
(statearr_32445_32471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 15))
{var state_32426__$1 = state_32426;var statearr_32446_32472 = state_32426__$1;(statearr_32446_32472[2] = null);
(statearr_32446_32472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 16))
{var state_32426__$1 = state_32426;var statearr_32447_32473 = state_32426__$1;(statearr_32447_32473[2] = null);
(statearr_32447_32473[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 17))
{var inst_32422 = (state_32426[2]);var state_32426__$1 = state_32426;var statearr_32448_32474 = state_32426__$1;(statearr_32448_32474[2] = inst_32422);
(statearr_32448_32474[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32452 = [null,null,null,null,null,null,null,null,null,null];(statearr_32452[0] = state_machine__5507__auto__);
(statearr_32452[1] = 1);
return statearr_32452;
});
var state_machine__5507__auto____1 = (function (state_32426){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32426);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32453){if((e32453 instanceof Object))
{var ex__5510__auto__ = e32453;var statearr_32454_32475 = state_32426;(statearr_32454_32475[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32476 = state_32426;
state_32426 = G__32476;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32426){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32455 = f__5522__auto__.call(null);(statearr_32455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32456);
return statearr_32455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32337 = null;if (arguments.length > 1) {
  p__32337 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32337);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32477){
var ch = cljs.core.first(arglist__32477);
var p__32337 = cljs.core.rest(arglist__32477);
return dorun_async__delegate(ch,p__32337);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
