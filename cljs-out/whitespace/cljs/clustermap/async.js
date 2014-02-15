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
map_async.cljs$lang$applyTo = (function (arglist__32318){
var f = cljs.core.first(arglist__32318);
var colls = cljs.core.rest(arglist__32318);
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
var dorun_async__delegate = function (ch,p__32319){var map__32379 = p__32319;var map__32379__$1 = ((cljs.core.seq_QMARK_.call(null,map__32379))?cljs.core.apply.call(null,cljs.core.hash_map,map__32379):map__32379);var delay = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32438 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32408){var state_val_32409 = (state_32408[1]);if((state_val_32409 === 1))
{var state_32408__$1 = state_32408;var statearr_32410_32439 = state_32408__$1;(statearr_32410_32439[2] = null);
(statearr_32410_32439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 2))
{var state_32408__$1 = state_32408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32408__$1,4,ch);
} else
{if((state_val_32409 === 3))
{var inst_32406 = (state_32408[2]);var state_32408__$1 = state_32408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32408__$1,inst_32406);
} else
{if((state_val_32409 === 4))
{var inst_32382 = (state_32408[7]);var inst_32382__$1 = (state_32408[2]);var state_32408__$1 = (function (){var statearr_32411 = state_32408;(statearr_32411[7] = inst_32382__$1);
return statearr_32411;
})();if(cljs.core.truth_(inst_32382__$1))
{var statearr_32412_32440 = state_32408__$1;(statearr_32412_32440[1] = 5);
} else
{var statearr_32413_32441 = state_32408__$1;(statearr_32413_32441[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 5))
{var state_32408__$1 = state_32408;if(cljs.core.truth_(delay))
{var statearr_32414_32442 = state_32408__$1;(statearr_32414_32442[1] = 8);
} else
{var statearr_32415_32443 = state_32408__$1;(statearr_32415_32443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 6))
{var state_32408__$1 = state_32408;var statearr_32416_32444 = state_32408__$1;(statearr_32416_32444[2] = null);
(statearr_32416_32444[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 7))
{var inst_32399 = (state_32408[2]);var state_32408__$1 = state_32408;if(cljs.core.truth_(inst_32399))
{var statearr_32417_32445 = state_32408__$1;(statearr_32417_32445[1] = 15);
} else
{var statearr_32418_32446 = state_32408__$1;(statearr_32418_32446[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 8))
{var inst_32385 = cljs.core.async.timeout.call(null,delay);var state_32408__$1 = state_32408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32408__$1,11,inst_32385);
} else
{if((state_val_32409 === 9))
{var state_32408__$1 = state_32408;var statearr_32419_32447 = state_32408__$1;(statearr_32419_32447[2] = null);
(statearr_32419_32447[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 10))
{var inst_32390 = (state_32408[2]);var state_32408__$1 = (function (){var statearr_32420 = state_32408;(statearr_32420[8] = inst_32390);
return statearr_32420;
})();if(cljs.core.truth_(log))
{var statearr_32421_32448 = state_32408__$1;(statearr_32421_32448[1] = 12);
} else
{var statearr_32422_32449 = state_32408__$1;(statearr_32422_32449[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 11))
{var inst_32387 = (state_32408[2]);var state_32408__$1 = state_32408;var statearr_32423_32450 = state_32408__$1;(statearr_32423_32450[2] = inst_32387);
(statearr_32423_32450[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 12))
{var inst_32382 = (state_32408[7]);var inst_32392 = cljs.core.clj__GT_js.call(null,inst_32382);var inst_32393 = console.log(inst_32392);var state_32408__$1 = state_32408;var statearr_32424_32451 = state_32408__$1;(statearr_32424_32451[2] = inst_32393);
(statearr_32424_32451[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 13))
{var state_32408__$1 = state_32408;var statearr_32425_32452 = state_32408__$1;(statearr_32425_32452[2] = null);
(statearr_32425_32452[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 14))
{var inst_32382 = (state_32408[7]);var inst_32396 = (state_32408[2]);var state_32408__$1 = (function (){var statearr_32426 = state_32408;(statearr_32426[9] = inst_32396);
return statearr_32426;
})();var statearr_32427_32453 = state_32408__$1;(statearr_32427_32453[2] = inst_32382);
(statearr_32427_32453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 15))
{var state_32408__$1 = state_32408;var statearr_32428_32454 = state_32408__$1;(statearr_32428_32454[2] = null);
(statearr_32428_32454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 16))
{var state_32408__$1 = state_32408;var statearr_32429_32455 = state_32408__$1;(statearr_32429_32455[2] = null);
(statearr_32429_32455[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32409 === 17))
{var inst_32404 = (state_32408[2]);var state_32408__$1 = state_32408;var statearr_32430_32456 = state_32408__$1;(statearr_32430_32456[2] = inst_32404);
(statearr_32430_32456[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32434 = [null,null,null,null,null,null,null,null,null,null];(statearr_32434[0] = state_machine__5507__auto__);
(statearr_32434[1] = 1);
return statearr_32434;
});
var state_machine__5507__auto____1 = (function (state_32408){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32408);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32435){if((e32435 instanceof Object))
{var ex__5510__auto__ = e32435;var statearr_32436_32457 = state_32408;(statearr_32436_32457[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32458 = state_32408;
state_32408 = G__32458;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32408){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32437 = f__5522__auto__.call(null);(statearr_32437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32438);
return statearr_32437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32319 = null;if (arguments.length > 1) {
  p__32319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32319);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32459){
var ch = cljs.core.first(arglist__32459);
var p__32319 = cljs.core.rest(arglist__32459);
return dorun_async__delegate(ch,p__32319);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
