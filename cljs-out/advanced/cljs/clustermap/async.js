// Compiled by ClojureScript 0.0-2356
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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__51626){
var f = cljs.core.first(arglist__51626);
var colls = cljs.core.rest(arglist__51626);
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
var dorun_async__delegate = function (ch,p__51627){var map__51687 = p__51627;var map__51687__$1 = ((cljs.core.seq_QMARK_(map__51687))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51687):map__51687);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,cljs.core.constant$keyword$1314);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,cljs.core.constant$keyword$1215);var c__5819__auto___51746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___51746,map__51687,map__51687__$1,delay,log){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___51746,map__51687,map__51687__$1,delay,log){
return (function (state_51716){var state_val_51717 = (state_51716[(1)]);if((state_val_51717 === (7)))
{var inst_51707 = (state_51716[(2)]);var state_51716__$1 = state_51716;if(cljs.core.truth_(inst_51707))
{var statearr_51718_51747 = state_51716__$1;(statearr_51718_51747[(1)] = (15));
} else
{var statearr_51719_51748 = state_51716__$1;(statearr_51719_51748[(1)] = (16));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (1)))
{var state_51716__$1 = state_51716;var statearr_51720_51749 = state_51716__$1;(statearr_51720_51749[(2)] = null);
(statearr_51720_51749[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (4)))
{var inst_51690 = (state_51716[(7)]);var inst_51690__$1 = (state_51716[(2)]);var state_51716__$1 = (function (){var statearr_51721 = state_51716;(statearr_51721[(7)] = inst_51690__$1);
return statearr_51721;
})();if(cljs.core.truth_(inst_51690__$1))
{var statearr_51722_51750 = state_51716__$1;(statearr_51722_51750[(1)] = (5));
} else
{var statearr_51723_51751 = state_51716__$1;(statearr_51723_51751[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (15)))
{var state_51716__$1 = state_51716;var statearr_51724_51752 = state_51716__$1;(statearr_51724_51752[(2)] = null);
(statearr_51724_51752[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (13)))
{var state_51716__$1 = state_51716;var statearr_51725_51753 = state_51716__$1;(statearr_51725_51753[(2)] = null);
(statearr_51725_51753[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (6)))
{var state_51716__$1 = state_51716;var statearr_51726_51754 = state_51716__$1;(statearr_51726_51754[(2)] = null);
(statearr_51726_51754[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (17)))
{var inst_51712 = (state_51716[(2)]);var state_51716__$1 = state_51716;var statearr_51727_51755 = state_51716__$1;(statearr_51727_51755[(2)] = inst_51712);
(statearr_51727_51755[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (3)))
{var inst_51714 = (state_51716[(2)]);var state_51716__$1 = state_51716;return cljs.core.async.impl.ioc_helpers.return_chan(state_51716__$1,inst_51714);
} else
{if((state_val_51717 === (12)))
{var inst_51690 = (state_51716[(7)]);var inst_51700 = cljs.core.clj__GT_js(inst_51690);var inst_51701 = console.log(inst_51700);var state_51716__$1 = state_51716;var statearr_51728_51756 = state_51716__$1;(statearr_51728_51756[(2)] = inst_51701);
(statearr_51728_51756[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (2)))
{var state_51716__$1 = state_51716;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51716__$1,(4),ch);
} else
{if((state_val_51717 === (11)))
{var inst_51695 = (state_51716[(2)]);var state_51716__$1 = state_51716;var statearr_51729_51757 = state_51716__$1;(statearr_51729_51757[(2)] = inst_51695);
(statearr_51729_51757[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (9)))
{var state_51716__$1 = state_51716;var statearr_51730_51758 = state_51716__$1;(statearr_51730_51758[(2)] = null);
(statearr_51730_51758[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (5)))
{var state_51716__$1 = state_51716;if(cljs.core.truth_(delay))
{var statearr_51731_51759 = state_51716__$1;(statearr_51731_51759[(1)] = (8));
} else
{var statearr_51732_51760 = state_51716__$1;(statearr_51732_51760[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (14)))
{var inst_51690 = (state_51716[(7)]);var inst_51704 = (state_51716[(2)]);var state_51716__$1 = (function (){var statearr_51733 = state_51716;(statearr_51733[(8)] = inst_51704);
return statearr_51733;
})();var statearr_51734_51761 = state_51716__$1;(statearr_51734_51761[(2)] = inst_51690);
(statearr_51734_51761[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (16)))
{var state_51716__$1 = state_51716;var statearr_51735_51762 = state_51716__$1;(statearr_51735_51762[(2)] = null);
(statearr_51735_51762[(1)] = (17));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (10)))
{var inst_51698 = (state_51716[(2)]);var state_51716__$1 = (function (){var statearr_51736 = state_51716;(statearr_51736[(9)] = inst_51698);
return statearr_51736;
})();if(cljs.core.truth_(log))
{var statearr_51737_51763 = state_51716__$1;(statearr_51737_51763[(1)] = (12));
} else
{var statearr_51738_51764 = state_51716__$1;(statearr_51738_51764[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51717 === (8)))
{var inst_51693 = cljs.core.async.timeout(delay);var state_51716__$1 = state_51716;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51716__$1,(11),inst_51693);
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
});})(c__5819__auto___51746,map__51687,map__51687__$1,delay,log))
;return ((function (switch__5804__auto__,c__5819__auto___51746,map__51687,map__51687__$1,delay,log){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_51742 = [null,null,null,null,null,null,null,null,null,null];(statearr_51742[(0)] = state_machine__5805__auto__);
(statearr_51742[(1)] = (1));
return statearr_51742;
});
var state_machine__5805__auto____1 = (function (state_51716){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_51716);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e51743){if((e51743 instanceof Object))
{var ex__5808__auto__ = e51743;var statearr_51744_51765 = state_51716;(statearr_51744_51765[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51716);
return cljs.core.constant$keyword$1120;
} else
{throw e51743;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__51766 = state_51716;
state_51716 = G__51766;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_51716){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_51716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___51746,map__51687,map__51687__$1,delay,log))
})();var state__5821__auto__ = (function (){var statearr_51745 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_51745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___51746);
return statearr_51745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___51746,map__51687,map__51687__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__51627 = null;if (arguments.length > 1) {
  p__51627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__51627);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__51767){
var ch = cljs.core.first(arglist__51767);
var p__51627 = cljs.core.rest(arglist__51767);
return dorun_async__delegate(ch,p__51627);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
