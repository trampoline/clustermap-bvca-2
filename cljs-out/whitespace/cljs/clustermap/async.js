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
map_async.cljs$lang$applyTo = (function (arglist__32308){
var f = cljs.core.first(arglist__32308);
var colls = cljs.core.rest(arglist__32308);
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
var dorun_async__delegate = function (ch,p__32309){var map__32369 = p__32309;var map__32369__$1 = ((cljs.core.seq_QMARK_.call(null,map__32369))?cljs.core.apply.call(null,cljs.core.hash_map,map__32369):map__32369);var delay = cljs.core.get.call(null,map__32369__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32369__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32428 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32398){var state_val_32399 = (state_32398[1]);if((state_val_32399 === 1))
{var state_32398__$1 = state_32398;var statearr_32400_32429 = state_32398__$1;(statearr_32400_32429[2] = null);
(statearr_32400_32429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 2))
{var state_32398__$1 = state_32398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32398__$1,4,ch);
} else
{if((state_val_32399 === 3))
{var inst_32396 = (state_32398[2]);var state_32398__$1 = state_32398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32398__$1,inst_32396);
} else
{if((state_val_32399 === 4))
{var inst_32372 = (state_32398[7]);var inst_32372__$1 = (state_32398[2]);var state_32398__$1 = (function (){var statearr_32401 = state_32398;(statearr_32401[7] = inst_32372__$1);
return statearr_32401;
})();if(cljs.core.truth_(inst_32372__$1))
{var statearr_32402_32430 = state_32398__$1;(statearr_32402_32430[1] = 5);
} else
{var statearr_32403_32431 = state_32398__$1;(statearr_32403_32431[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 5))
{var state_32398__$1 = state_32398;if(cljs.core.truth_(delay))
{var statearr_32404_32432 = state_32398__$1;(statearr_32404_32432[1] = 8);
} else
{var statearr_32405_32433 = state_32398__$1;(statearr_32405_32433[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 6))
{var state_32398__$1 = state_32398;var statearr_32406_32434 = state_32398__$1;(statearr_32406_32434[2] = null);
(statearr_32406_32434[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 7))
{var inst_32389 = (state_32398[2]);var state_32398__$1 = state_32398;if(cljs.core.truth_(inst_32389))
{var statearr_32407_32435 = state_32398__$1;(statearr_32407_32435[1] = 15);
} else
{var statearr_32408_32436 = state_32398__$1;(statearr_32408_32436[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 8))
{var inst_32375 = cljs.core.async.timeout.call(null,delay);var state_32398__$1 = state_32398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32398__$1,11,inst_32375);
} else
{if((state_val_32399 === 9))
{var state_32398__$1 = state_32398;var statearr_32409_32437 = state_32398__$1;(statearr_32409_32437[2] = null);
(statearr_32409_32437[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 10))
{var inst_32380 = (state_32398[2]);var state_32398__$1 = (function (){var statearr_32410 = state_32398;(statearr_32410[8] = inst_32380);
return statearr_32410;
})();if(cljs.core.truth_(log))
{var statearr_32411_32438 = state_32398__$1;(statearr_32411_32438[1] = 12);
} else
{var statearr_32412_32439 = state_32398__$1;(statearr_32412_32439[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 11))
{var inst_32377 = (state_32398[2]);var state_32398__$1 = state_32398;var statearr_32413_32440 = state_32398__$1;(statearr_32413_32440[2] = inst_32377);
(statearr_32413_32440[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 12))
{var inst_32372 = (state_32398[7]);var inst_32382 = cljs.core.clj__GT_js.call(null,inst_32372);var inst_32383 = console.log(inst_32382);var state_32398__$1 = state_32398;var statearr_32414_32441 = state_32398__$1;(statearr_32414_32441[2] = inst_32383);
(statearr_32414_32441[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 13))
{var state_32398__$1 = state_32398;var statearr_32415_32442 = state_32398__$1;(statearr_32415_32442[2] = null);
(statearr_32415_32442[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 14))
{var inst_32372 = (state_32398[7]);var inst_32386 = (state_32398[2]);var state_32398__$1 = (function (){var statearr_32416 = state_32398;(statearr_32416[9] = inst_32386);
return statearr_32416;
})();var statearr_32417_32443 = state_32398__$1;(statearr_32417_32443[2] = inst_32372);
(statearr_32417_32443[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 15))
{var state_32398__$1 = state_32398;var statearr_32418_32444 = state_32398__$1;(statearr_32418_32444[2] = null);
(statearr_32418_32444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 16))
{var state_32398__$1 = state_32398;var statearr_32419_32445 = state_32398__$1;(statearr_32419_32445[2] = null);
(statearr_32419_32445[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 17))
{var inst_32394 = (state_32398[2]);var state_32398__$1 = state_32398;var statearr_32420_32446 = state_32398__$1;(statearr_32420_32446[2] = inst_32394);
(statearr_32420_32446[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32424 = [null,null,null,null,null,null,null,null,null,null];(statearr_32424[0] = state_machine__5507__auto__);
(statearr_32424[1] = 1);
return statearr_32424;
});
var state_machine__5507__auto____1 = (function (state_32398){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32398);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32425){if((e32425 instanceof Object))
{var ex__5510__auto__ = e32425;var statearr_32426_32447 = state_32398;(statearr_32426_32447[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32398);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32448 = state_32398;
state_32398 = G__32448;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32398){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32427 = f__5522__auto__.call(null);(statearr_32427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32428);
return statearr_32427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32309 = null;if (arguments.length > 1) {
  p__32309 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32309);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32449){
var ch = cljs.core.first(arglist__32449);
var p__32309 = cljs.core.rest(arglist__32449);
return dorun_async__delegate(ch,p__32309);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
