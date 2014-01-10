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
map_async.cljs$lang$applyTo = (function (arglist__28471){
var f = cljs.core.first(arglist__28471);
var colls = cljs.core.rest(arglist__28471);
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
var dorun_async__delegate = function (ch,p__28472){var map__28532 = p__28472;var map__28532__$1 = ((cljs.core.seq_QMARK_.call(null,map__28532))?cljs.core.apply.call(null,cljs.core.hash_map,map__28532):map__28532);var delay = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___28591 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28561){var state_val_28562 = (state_28561[1]);if((state_val_28562 === 1))
{var state_28561__$1 = state_28561;var statearr_28563_28592 = state_28561__$1;(statearr_28563_28592[2] = null);
(statearr_28563_28592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 2))
{var state_28561__$1 = state_28561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28561__$1,4,ch);
} else
{if((state_val_28562 === 3))
{var inst_28559 = (state_28561[2]);var state_28561__$1 = state_28561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28561__$1,inst_28559);
} else
{if((state_val_28562 === 4))
{var inst_28535 = (state_28561[7]);var inst_28535__$1 = (state_28561[2]);var state_28561__$1 = (function (){var statearr_28564 = state_28561;(statearr_28564[7] = inst_28535__$1);
return statearr_28564;
})();if(cljs.core.truth_(inst_28535__$1))
{var statearr_28565_28593 = state_28561__$1;(statearr_28565_28593[1] = 5);
} else
{var statearr_28566_28594 = state_28561__$1;(statearr_28566_28594[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 5))
{var state_28561__$1 = state_28561;if(cljs.core.truth_(delay))
{var statearr_28567_28595 = state_28561__$1;(statearr_28567_28595[1] = 8);
} else
{var statearr_28568_28596 = state_28561__$1;(statearr_28568_28596[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 6))
{var state_28561__$1 = state_28561;var statearr_28569_28597 = state_28561__$1;(statearr_28569_28597[2] = null);
(statearr_28569_28597[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 7))
{var inst_28552 = (state_28561[2]);var state_28561__$1 = state_28561;if(cljs.core.truth_(inst_28552))
{var statearr_28570_28598 = state_28561__$1;(statearr_28570_28598[1] = 15);
} else
{var statearr_28571_28599 = state_28561__$1;(statearr_28571_28599[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 8))
{var inst_28538 = cljs.core.async.timeout.call(null,delay);var state_28561__$1 = state_28561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28561__$1,11,inst_28538);
} else
{if((state_val_28562 === 9))
{var state_28561__$1 = state_28561;var statearr_28572_28600 = state_28561__$1;(statearr_28572_28600[2] = null);
(statearr_28572_28600[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 10))
{var inst_28543 = (state_28561[2]);var state_28561__$1 = (function (){var statearr_28573 = state_28561;(statearr_28573[8] = inst_28543);
return statearr_28573;
})();if(cljs.core.truth_(log))
{var statearr_28574_28601 = state_28561__$1;(statearr_28574_28601[1] = 12);
} else
{var statearr_28575_28602 = state_28561__$1;(statearr_28575_28602[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 11))
{var inst_28540 = (state_28561[2]);var state_28561__$1 = state_28561;var statearr_28576_28603 = state_28561__$1;(statearr_28576_28603[2] = inst_28540);
(statearr_28576_28603[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 12))
{var inst_28535 = (state_28561[7]);var inst_28545 = cljs.core.clj__GT_js.call(null,inst_28535);var inst_28546 = console.log(inst_28545);var state_28561__$1 = state_28561;var statearr_28577_28604 = state_28561__$1;(statearr_28577_28604[2] = inst_28546);
(statearr_28577_28604[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 13))
{var state_28561__$1 = state_28561;var statearr_28578_28605 = state_28561__$1;(statearr_28578_28605[2] = null);
(statearr_28578_28605[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 14))
{var inst_28535 = (state_28561[7]);var inst_28549 = (state_28561[2]);var state_28561__$1 = (function (){var statearr_28579 = state_28561;(statearr_28579[9] = inst_28549);
return statearr_28579;
})();var statearr_28580_28606 = state_28561__$1;(statearr_28580_28606[2] = inst_28535);
(statearr_28580_28606[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 15))
{var state_28561__$1 = state_28561;var statearr_28581_28607 = state_28561__$1;(statearr_28581_28607[2] = null);
(statearr_28581_28607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 16))
{var state_28561__$1 = state_28561;var statearr_28582_28608 = state_28561__$1;(statearr_28582_28608[2] = null);
(statearr_28582_28608[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28562 === 17))
{var inst_28557 = (state_28561[2]);var state_28561__$1 = state_28561;var statearr_28583_28609 = state_28561__$1;(statearr_28583_28609[2] = inst_28557);
(statearr_28583_28609[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_28587 = [null,null,null,null,null,null,null,null,null,null];(statearr_28587[0] = state_machine__5507__auto__);
(statearr_28587[1] = 1);
return statearr_28587;
});
var state_machine__5507__auto____1 = (function (state_28561){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28561);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28588){if((e28588 instanceof Object))
{var ex__5510__auto__ = e28588;var statearr_28589_28610 = state_28561;(statearr_28589_28610[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28588;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28611 = state_28561;
state_28561 = G__28611;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28561){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28590 = f__5522__auto__.call(null);(statearr_28590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___28591);
return statearr_28590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__28472 = null;if (arguments.length > 1) {
  p__28472 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__28472);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__28612){
var ch = cljs.core.first(arglist__28612);
var p__28472 = cljs.core.rest(arglist__28612);
return dorun_async__delegate(ch,p__28472);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
