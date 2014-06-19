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
map_async.cljs$lang$applyTo = (function (arglist__45443){
var f = cljs.core.first(arglist__45443);
var colls = cljs.core.rest(arglist__45443);
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
var dorun_async__delegate = function (ch,p__45444){var map__45504 = p__45444;var map__45504__$1 = ((cljs.core.seq_QMARK_.call(null,map__45504))?cljs.core.apply.call(null,cljs.core.hash_map,map__45504):map__45504);var delay = cljs.core.get.call(null,map__45504__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__45504__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5689__auto___45563 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___45563,map__45504,map__45504__$1,delay,log){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___45563,map__45504,map__45504__$1,delay,log){
return (function (state_45533){var state_val_45534 = (state_45533[1]);if((state_val_45534 === 7))
{var inst_45524 = (state_45533[2]);var state_45533__$1 = state_45533;if(cljs.core.truth_(inst_45524))
{var statearr_45535_45564 = state_45533__$1;(statearr_45535_45564[1] = 15);
} else
{var statearr_45536_45565 = state_45533__$1;(statearr_45536_45565[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 1))
{var state_45533__$1 = state_45533;var statearr_45537_45566 = state_45533__$1;(statearr_45537_45566[2] = null);
(statearr_45537_45566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 4))
{var inst_45507 = (state_45533[7]);var inst_45507__$1 = (state_45533[2]);var state_45533__$1 = (function (){var statearr_45538 = state_45533;(statearr_45538[7] = inst_45507__$1);
return statearr_45538;
})();if(cljs.core.truth_(inst_45507__$1))
{var statearr_45539_45567 = state_45533__$1;(statearr_45539_45567[1] = 5);
} else
{var statearr_45540_45568 = state_45533__$1;(statearr_45540_45568[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 15))
{var state_45533__$1 = state_45533;var statearr_45541_45569 = state_45533__$1;(statearr_45541_45569[2] = null);
(statearr_45541_45569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 13))
{var state_45533__$1 = state_45533;var statearr_45542_45570 = state_45533__$1;(statearr_45542_45570[2] = null);
(statearr_45542_45570[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 6))
{var state_45533__$1 = state_45533;var statearr_45543_45571 = state_45533__$1;(statearr_45543_45571[2] = null);
(statearr_45543_45571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 17))
{var inst_45529 = (state_45533[2]);var state_45533__$1 = state_45533;var statearr_45544_45572 = state_45533__$1;(statearr_45544_45572[2] = inst_45529);
(statearr_45544_45572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 3))
{var inst_45531 = (state_45533[2]);var state_45533__$1 = state_45533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45533__$1,inst_45531);
} else
{if((state_val_45534 === 12))
{var inst_45507 = (state_45533[7]);var inst_45517 = cljs.core.clj__GT_js.call(null,inst_45507);var inst_45518 = console.log(inst_45517);var state_45533__$1 = state_45533;var statearr_45545_45573 = state_45533__$1;(statearr_45545_45573[2] = inst_45518);
(statearr_45545_45573[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 2))
{var state_45533__$1 = state_45533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45533__$1,4,ch);
} else
{if((state_val_45534 === 11))
{var inst_45512 = (state_45533[2]);var state_45533__$1 = state_45533;var statearr_45546_45574 = state_45533__$1;(statearr_45546_45574[2] = inst_45512);
(statearr_45546_45574[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 9))
{var state_45533__$1 = state_45533;var statearr_45547_45575 = state_45533__$1;(statearr_45547_45575[2] = null);
(statearr_45547_45575[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 5))
{var state_45533__$1 = state_45533;if(cljs.core.truth_(delay))
{var statearr_45548_45576 = state_45533__$1;(statearr_45548_45576[1] = 8);
} else
{var statearr_45549_45577 = state_45533__$1;(statearr_45549_45577[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 14))
{var inst_45507 = (state_45533[7]);var inst_45521 = (state_45533[2]);var state_45533__$1 = (function (){var statearr_45550 = state_45533;(statearr_45550[8] = inst_45521);
return statearr_45550;
})();var statearr_45551_45578 = state_45533__$1;(statearr_45551_45578[2] = inst_45507);
(statearr_45551_45578[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 16))
{var state_45533__$1 = state_45533;var statearr_45552_45579 = state_45533__$1;(statearr_45552_45579[2] = null);
(statearr_45552_45579[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 10))
{var inst_45515 = (state_45533[2]);var state_45533__$1 = (function (){var statearr_45553 = state_45533;(statearr_45553[9] = inst_45515);
return statearr_45553;
})();if(cljs.core.truth_(log))
{var statearr_45554_45580 = state_45533__$1;(statearr_45554_45580[1] = 12);
} else
{var statearr_45555_45581 = state_45533__$1;(statearr_45555_45581[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45534 === 8))
{var inst_45510 = cljs.core.async.timeout.call(null,delay);var state_45533__$1 = state_45533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45533__$1,11,inst_45510);
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
});})(c__5689__auto___45563,map__45504,map__45504__$1,delay,log))
;return ((function (switch__5674__auto__,c__5689__auto___45563,map__45504,map__45504__$1,delay,log){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_45559 = [null,null,null,null,null,null,null,null,null,null];(statearr_45559[0] = state_machine__5675__auto__);
(statearr_45559[1] = 1);
return statearr_45559;
});
var state_machine__5675__auto____1 = (function (state_45533){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_45533);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e45560){if((e45560 instanceof Object))
{var ex__5678__auto__ = e45560;var statearr_45561_45582 = state_45533;(statearr_45561_45582[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45583 = state_45533;
state_45533 = G__45583;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_45533){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_45533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___45563,map__45504,map__45504__$1,delay,log))
})();var state__5691__auto__ = (function (){var statearr_45562 = f__5690__auto__.call(null);(statearr_45562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___45563);
return statearr_45562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___45563,map__45504,map__45504__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__45444 = null;if (arguments.length > 1) {
  p__45444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__45444);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__45584){
var ch = cljs.core.first(arglist__45584);
var p__45444 = cljs.core.rest(arglist__45584);
return dorun_async__delegate(ch,p__45444);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
