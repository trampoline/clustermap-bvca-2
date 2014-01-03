// Compiled by ClojureScript 0.0-2080
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
map_async.cljs$lang$applyTo = (function (arglist__15329){
var f = cljs.core.first(arglist__15329);
var colls = cljs.core.rest(arglist__15329);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* asynch consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__15330){var map__15378 = p__15330;var map__15378__$1 = ((cljs.core.seq_QMARK_.call(null,map__15378))?cljs.core.apply.call(null,cljs.core.hash_map,map__15378):map__15378);var log = cljs.core.get.call(null,map__15378__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5861__auto___15425 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_15400){var state_val_15401 = (state_15400[1]);if((state_val_15401 === 1))
{var state_15400__$1 = state_15400;var statearr_15402_15426 = state_15400__$1;(statearr_15402_15426[2] = null);
(statearr_15402_15426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 2))
{var state_15400__$1 = state_15400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15400__$1,4,ch);
} else
{if((state_val_15401 === 3))
{var inst_15398 = (state_15400[2]);var state_15400__$1 = state_15400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15400__$1,inst_15398);
} else
{if((state_val_15401 === 4))
{var inst_15381 = (state_15400[7]);var inst_15381__$1 = (state_15400[2]);var state_15400__$1 = (function (){var statearr_15403 = state_15400;(statearr_15403[7] = inst_15381__$1);
return statearr_15403;
})();if(cljs.core.truth_(inst_15381__$1))
{var statearr_15404_15427 = state_15400__$1;(statearr_15404_15427[1] = 5);
} else
{var statearr_15405_15428 = state_15400__$1;(statearr_15405_15428[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 5))
{var state_15400__$1 = state_15400;if(cljs.core.truth_(log))
{var statearr_15406_15429 = state_15400__$1;(statearr_15406_15429[1] = 8);
} else
{var statearr_15407_15430 = state_15400__$1;(statearr_15407_15430[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 6))
{var state_15400__$1 = state_15400;var statearr_15408_15431 = state_15400__$1;(statearr_15408_15431[2] = null);
(statearr_15408_15431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 7))
{var inst_15391 = (state_15400[2]);var state_15400__$1 = state_15400;if(cljs.core.truth_(inst_15391))
{var statearr_15409_15432 = state_15400__$1;(statearr_15409_15432[1] = 11);
} else
{var statearr_15410_15433 = state_15400__$1;(statearr_15410_15433[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 8))
{var inst_15381 = (state_15400[7]);var inst_15384 = cljs.core.clj__GT_js.call(null,inst_15381);var inst_15385 = console.log(inst_15384);var state_15400__$1 = state_15400;var statearr_15411_15434 = state_15400__$1;(statearr_15411_15434[2] = inst_15385);
(statearr_15411_15434[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 9))
{var state_15400__$1 = state_15400;var statearr_15412_15435 = state_15400__$1;(statearr_15412_15435[2] = null);
(statearr_15412_15435[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 10))
{var inst_15381 = (state_15400[7]);var inst_15388 = (state_15400[2]);var state_15400__$1 = (function (){var statearr_15413 = state_15400;(statearr_15413[8] = inst_15388);
return statearr_15413;
})();var statearr_15414_15436 = state_15400__$1;(statearr_15414_15436[2] = inst_15381);
(statearr_15414_15436[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 11))
{var state_15400__$1 = state_15400;var statearr_15415_15437 = state_15400__$1;(statearr_15415_15437[2] = null);
(statearr_15415_15437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 12))
{var state_15400__$1 = state_15400;var statearr_15416_15438 = state_15400__$1;(statearr_15416_15438[2] = null);
(statearr_15416_15438[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15401 === 13))
{var inst_15396 = (state_15400[2]);var state_15400__$1 = state_15400;var statearr_15417_15439 = state_15400__$1;(statearr_15417_15439[2] = inst_15396);
(statearr_15417_15439[1] = 3);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_15421 = (new Array(9));(statearr_15421[0] = state_machine__5792__auto__);
(statearr_15421[1] = 1);
return statearr_15421;
});
var state_machine__5792__auto____1 = (function (state_15400){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_15400);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e15422){if((e15422 instanceof Object))
{var ex__5795__auto__ = e15422;var statearr_15423_15440 = state_15400;(statearr_15423_15440[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15400);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15441 = state_15400;
state_15400 = G__15441;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_15400){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_15400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_15424 = f__5862__auto__.call(null);(statearr_15424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___15425);
return statearr_15424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__15330 = null;if (arguments.length > 1) {
  p__15330 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__15330);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__15442){
var ch = cljs.core.first(arglist__15442);
var p__15330 = cljs.core.rest(arglist__15442);
return dorun_async__delegate(ch,p__15330);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map