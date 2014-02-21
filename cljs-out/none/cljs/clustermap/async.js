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
map_async.cljs$lang$applyTo = (function (arglist__11564){
var f = cljs.core.first(arglist__11564);
var colls = cljs.core.rest(arglist__11564);
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
var dorun_async__delegate = function (ch,p__11565){var map__11625 = p__11565;var map__11625__$1 = ((cljs.core.seq_QMARK_.call(null,map__11625))?cljs.core.apply.call(null,cljs.core.hash_map,map__11625):map__11625);var delay = cljs.core.get.call(null,map__11625__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11625__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11684 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11654){var state_val_11655 = (state_11654[1]);if((state_val_11655 === 1))
{var state_11654__$1 = state_11654;var statearr_11656_11685 = state_11654__$1;(statearr_11656_11685[2] = null);
(statearr_11656_11685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 2))
{var state_11654__$1 = state_11654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11654__$1,4,ch);
} else
{if((state_val_11655 === 3))
{var inst_11652 = (state_11654[2]);var state_11654__$1 = state_11654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11654__$1,inst_11652);
} else
{if((state_val_11655 === 4))
{var inst_11628 = (state_11654[7]);var inst_11628__$1 = (state_11654[2]);var state_11654__$1 = (function (){var statearr_11657 = state_11654;(statearr_11657[7] = inst_11628__$1);
return statearr_11657;
})();if(cljs.core.truth_(inst_11628__$1))
{var statearr_11658_11686 = state_11654__$1;(statearr_11658_11686[1] = 5);
} else
{var statearr_11659_11687 = state_11654__$1;(statearr_11659_11687[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 5))
{var state_11654__$1 = state_11654;if(cljs.core.truth_(delay))
{var statearr_11660_11688 = state_11654__$1;(statearr_11660_11688[1] = 8);
} else
{var statearr_11661_11689 = state_11654__$1;(statearr_11661_11689[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 6))
{var state_11654__$1 = state_11654;var statearr_11662_11690 = state_11654__$1;(statearr_11662_11690[2] = null);
(statearr_11662_11690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 7))
{var inst_11645 = (state_11654[2]);var state_11654__$1 = state_11654;if(cljs.core.truth_(inst_11645))
{var statearr_11663_11691 = state_11654__$1;(statearr_11663_11691[1] = 15);
} else
{var statearr_11664_11692 = state_11654__$1;(statearr_11664_11692[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 8))
{var inst_11631 = cljs.core.async.timeout.call(null,delay);var state_11654__$1 = state_11654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11654__$1,11,inst_11631);
} else
{if((state_val_11655 === 9))
{var state_11654__$1 = state_11654;var statearr_11665_11693 = state_11654__$1;(statearr_11665_11693[2] = null);
(statearr_11665_11693[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 10))
{var inst_11636 = (state_11654[2]);var state_11654__$1 = (function (){var statearr_11666 = state_11654;(statearr_11666[8] = inst_11636);
return statearr_11666;
})();if(cljs.core.truth_(log))
{var statearr_11667_11694 = state_11654__$1;(statearr_11667_11694[1] = 12);
} else
{var statearr_11668_11695 = state_11654__$1;(statearr_11668_11695[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 11))
{var inst_11633 = (state_11654[2]);var state_11654__$1 = state_11654;var statearr_11669_11696 = state_11654__$1;(statearr_11669_11696[2] = inst_11633);
(statearr_11669_11696[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 12))
{var inst_11628 = (state_11654[7]);var inst_11638 = cljs.core.clj__GT_js.call(null,inst_11628);var inst_11639 = console.log(inst_11638);var state_11654__$1 = state_11654;var statearr_11670_11697 = state_11654__$1;(statearr_11670_11697[2] = inst_11639);
(statearr_11670_11697[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 13))
{var state_11654__$1 = state_11654;var statearr_11671_11698 = state_11654__$1;(statearr_11671_11698[2] = null);
(statearr_11671_11698[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 14))
{var inst_11628 = (state_11654[7]);var inst_11642 = (state_11654[2]);var state_11654__$1 = (function (){var statearr_11672 = state_11654;(statearr_11672[9] = inst_11642);
return statearr_11672;
})();var statearr_11673_11699 = state_11654__$1;(statearr_11673_11699[2] = inst_11628);
(statearr_11673_11699[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 15))
{var state_11654__$1 = state_11654;var statearr_11674_11700 = state_11654__$1;(statearr_11674_11700[2] = null);
(statearr_11674_11700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 16))
{var state_11654__$1 = state_11654;var statearr_11675_11701 = state_11654__$1;(statearr_11675_11701[2] = null);
(statearr_11675_11701[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11655 === 17))
{var inst_11650 = (state_11654[2]);var state_11654__$1 = state_11654;var statearr_11676_11702 = state_11654__$1;(statearr_11676_11702[2] = inst_11650);
(statearr_11676_11702[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11680 = [null,null,null,null,null,null,null,null,null,null];(statearr_11680[0] = state_machine__5507__auto__);
(statearr_11680[1] = 1);
return statearr_11680;
});
var state_machine__5507__auto____1 = (function (state_11654){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11654);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11681){if((e11681 instanceof Object))
{var ex__5510__auto__ = e11681;var statearr_11682_11703 = state_11654;(statearr_11682_11703[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11704 = state_11654;
state_11654 = G__11704;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11654){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11683 = f__5522__auto__.call(null);(statearr_11683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11684);
return statearr_11683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11565 = null;if (arguments.length > 1) {
  p__11565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11565);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11705){
var ch = cljs.core.first(arglist__11705);
var p__11565 = cljs.core.rest(arglist__11705);
return dorun_async__delegate(ch,p__11565);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map