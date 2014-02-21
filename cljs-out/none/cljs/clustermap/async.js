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
map_async.cljs$lang$applyTo = (function (arglist__11577){
var f = cljs.core.first(arglist__11577);
var colls = cljs.core.rest(arglist__11577);
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
var dorun_async__delegate = function (ch,p__11578){var map__11638 = p__11578;var map__11638__$1 = ((cljs.core.seq_QMARK_.call(null,map__11638))?cljs.core.apply.call(null,cljs.core.hash_map,map__11638):map__11638);var delay = cljs.core.get.call(null,map__11638__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11638__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11697 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11667){var state_val_11668 = (state_11667[1]);if((state_val_11668 === 1))
{var state_11667__$1 = state_11667;var statearr_11669_11698 = state_11667__$1;(statearr_11669_11698[2] = null);
(statearr_11669_11698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 2))
{var state_11667__$1 = state_11667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11667__$1,4,ch);
} else
{if((state_val_11668 === 3))
{var inst_11665 = (state_11667[2]);var state_11667__$1 = state_11667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11667__$1,inst_11665);
} else
{if((state_val_11668 === 4))
{var inst_11641 = (state_11667[7]);var inst_11641__$1 = (state_11667[2]);var state_11667__$1 = (function (){var statearr_11670 = state_11667;(statearr_11670[7] = inst_11641__$1);
return statearr_11670;
})();if(cljs.core.truth_(inst_11641__$1))
{var statearr_11671_11699 = state_11667__$1;(statearr_11671_11699[1] = 5);
} else
{var statearr_11672_11700 = state_11667__$1;(statearr_11672_11700[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 5))
{var state_11667__$1 = state_11667;if(cljs.core.truth_(delay))
{var statearr_11673_11701 = state_11667__$1;(statearr_11673_11701[1] = 8);
} else
{var statearr_11674_11702 = state_11667__$1;(statearr_11674_11702[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 6))
{var state_11667__$1 = state_11667;var statearr_11675_11703 = state_11667__$1;(statearr_11675_11703[2] = null);
(statearr_11675_11703[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 7))
{var inst_11658 = (state_11667[2]);var state_11667__$1 = state_11667;if(cljs.core.truth_(inst_11658))
{var statearr_11676_11704 = state_11667__$1;(statearr_11676_11704[1] = 15);
} else
{var statearr_11677_11705 = state_11667__$1;(statearr_11677_11705[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 8))
{var inst_11644 = cljs.core.async.timeout.call(null,delay);var state_11667__$1 = state_11667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11667__$1,11,inst_11644);
} else
{if((state_val_11668 === 9))
{var state_11667__$1 = state_11667;var statearr_11678_11706 = state_11667__$1;(statearr_11678_11706[2] = null);
(statearr_11678_11706[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 10))
{var inst_11649 = (state_11667[2]);var state_11667__$1 = (function (){var statearr_11679 = state_11667;(statearr_11679[8] = inst_11649);
return statearr_11679;
})();if(cljs.core.truth_(log))
{var statearr_11680_11707 = state_11667__$1;(statearr_11680_11707[1] = 12);
} else
{var statearr_11681_11708 = state_11667__$1;(statearr_11681_11708[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 11))
{var inst_11646 = (state_11667[2]);var state_11667__$1 = state_11667;var statearr_11682_11709 = state_11667__$1;(statearr_11682_11709[2] = inst_11646);
(statearr_11682_11709[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 12))
{var inst_11641 = (state_11667[7]);var inst_11651 = cljs.core.clj__GT_js.call(null,inst_11641);var inst_11652 = console.log(inst_11651);var state_11667__$1 = state_11667;var statearr_11683_11710 = state_11667__$1;(statearr_11683_11710[2] = inst_11652);
(statearr_11683_11710[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 13))
{var state_11667__$1 = state_11667;var statearr_11684_11711 = state_11667__$1;(statearr_11684_11711[2] = null);
(statearr_11684_11711[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 14))
{var inst_11641 = (state_11667[7]);var inst_11655 = (state_11667[2]);var state_11667__$1 = (function (){var statearr_11685 = state_11667;(statearr_11685[9] = inst_11655);
return statearr_11685;
})();var statearr_11686_11712 = state_11667__$1;(statearr_11686_11712[2] = inst_11641);
(statearr_11686_11712[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 15))
{var state_11667__$1 = state_11667;var statearr_11687_11713 = state_11667__$1;(statearr_11687_11713[2] = null);
(statearr_11687_11713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 16))
{var state_11667__$1 = state_11667;var statearr_11688_11714 = state_11667__$1;(statearr_11688_11714[2] = null);
(statearr_11688_11714[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 17))
{var inst_11663 = (state_11667[2]);var state_11667__$1 = state_11667;var statearr_11689_11715 = state_11667__$1;(statearr_11689_11715[2] = inst_11663);
(statearr_11689_11715[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11693 = [null,null,null,null,null,null,null,null,null,null];(statearr_11693[0] = state_machine__5507__auto__);
(statearr_11693[1] = 1);
return statearr_11693;
});
var state_machine__5507__auto____1 = (function (state_11667){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11694){if((e11694 instanceof Object))
{var ex__5510__auto__ = e11694;var statearr_11695_11716 = state_11667;(statearr_11695_11716[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11717 = state_11667;
state_11667 = G__11717;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11667){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11696 = f__5522__auto__.call(null);(statearr_11696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11697);
return statearr_11696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11578 = null;if (arguments.length > 1) {
  p__11578 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11578);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11718){
var ch = cljs.core.first(arglist__11718);
var p__11578 = cljs.core.rest(arglist__11718);
return dorun_async__delegate(ch,p__11578);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map