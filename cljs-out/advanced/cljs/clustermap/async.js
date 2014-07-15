// Compiled by ClojureScript 0.0-2261
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
map_async.cljs$lang$applyTo = (function (arglist__34623){
var f = cljs.core.first(arglist__34623);
var colls = cljs.core.rest(arglist__34623);
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
var dorun_async__delegate = function (ch,p__34624){var map__34684 = p__34624;var map__34684__$1 = ((cljs.core.seq_QMARK_(map__34684))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34684):map__34684);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34684__$1,cljs.core.constant$keyword$940);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34684__$1,cljs.core.constant$keyword$867);var c__5693__auto___34743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___34743,map__34684,map__34684__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___34743,map__34684,map__34684__$1,delay,log){
return (function (state_34713){var state_val_34714 = (state_34713[(1)]);if((state_val_34714 === (7)))
{var inst_34704 = (state_34713[(2)]);var state_34713__$1 = state_34713;if(cljs.core.truth_(inst_34704))
{var statearr_34715_34744 = state_34713__$1;(statearr_34715_34744[(1)] = (15));
} else
{var statearr_34716_34745 = state_34713__$1;(statearr_34716_34745[(1)] = (16));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (1)))
{var state_34713__$1 = state_34713;var statearr_34717_34746 = state_34713__$1;(statearr_34717_34746[(2)] = null);
(statearr_34717_34746[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (4)))
{var inst_34687 = (state_34713[(7)]);var inst_34687__$1 = (state_34713[(2)]);var state_34713__$1 = (function (){var statearr_34718 = state_34713;(statearr_34718[(7)] = inst_34687__$1);
return statearr_34718;
})();if(cljs.core.truth_(inst_34687__$1))
{var statearr_34719_34747 = state_34713__$1;(statearr_34719_34747[(1)] = (5));
} else
{var statearr_34720_34748 = state_34713__$1;(statearr_34720_34748[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (15)))
{var state_34713__$1 = state_34713;var statearr_34721_34749 = state_34713__$1;(statearr_34721_34749[(2)] = null);
(statearr_34721_34749[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (13)))
{var state_34713__$1 = state_34713;var statearr_34722_34750 = state_34713__$1;(statearr_34722_34750[(2)] = null);
(statearr_34722_34750[(1)] = (14));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (6)))
{var state_34713__$1 = state_34713;var statearr_34723_34751 = state_34713__$1;(statearr_34723_34751[(2)] = null);
(statearr_34723_34751[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (17)))
{var inst_34709 = (state_34713[(2)]);var state_34713__$1 = state_34713;var statearr_34724_34752 = state_34713__$1;(statearr_34724_34752[(2)] = inst_34709);
(statearr_34724_34752[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (3)))
{var inst_34711 = (state_34713[(2)]);var state_34713__$1 = state_34713;return cljs.core.async.impl.ioc_helpers.return_chan(state_34713__$1,inst_34711);
} else
{if((state_val_34714 === (12)))
{var inst_34687 = (state_34713[(7)]);var inst_34697 = cljs.core.clj__GT_js(inst_34687);var inst_34698 = console.log(inst_34697);var state_34713__$1 = state_34713;var statearr_34725_34753 = state_34713__$1;(statearr_34725_34753[(2)] = inst_34698);
(statearr_34725_34753[(1)] = (14));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (2)))
{var state_34713__$1 = state_34713;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34713__$1,(4),ch);
} else
{if((state_val_34714 === (11)))
{var inst_34692 = (state_34713[(2)]);var state_34713__$1 = state_34713;var statearr_34726_34754 = state_34713__$1;(statearr_34726_34754[(2)] = inst_34692);
(statearr_34726_34754[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (9)))
{var state_34713__$1 = state_34713;var statearr_34727_34755 = state_34713__$1;(statearr_34727_34755[(2)] = null);
(statearr_34727_34755[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (5)))
{var state_34713__$1 = state_34713;if(cljs.core.truth_(delay))
{var statearr_34728_34756 = state_34713__$1;(statearr_34728_34756[(1)] = (8));
} else
{var statearr_34729_34757 = state_34713__$1;(statearr_34729_34757[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (14)))
{var inst_34687 = (state_34713[(7)]);var inst_34701 = (state_34713[(2)]);var state_34713__$1 = (function (){var statearr_34730 = state_34713;(statearr_34730[(8)] = inst_34701);
return statearr_34730;
})();var statearr_34731_34758 = state_34713__$1;(statearr_34731_34758[(2)] = inst_34687);
(statearr_34731_34758[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (16)))
{var state_34713__$1 = state_34713;var statearr_34732_34759 = state_34713__$1;(statearr_34732_34759[(2)] = null);
(statearr_34732_34759[(1)] = (17));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (10)))
{var inst_34695 = (state_34713[(2)]);var state_34713__$1 = (function (){var statearr_34733 = state_34713;(statearr_34733[(9)] = inst_34695);
return statearr_34733;
})();if(cljs.core.truth_(log))
{var statearr_34734_34760 = state_34713__$1;(statearr_34734_34760[(1)] = (12));
} else
{var statearr_34735_34761 = state_34713__$1;(statearr_34735_34761[(1)] = (13));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_34714 === (8)))
{var inst_34690 = cljs.core.async.timeout(delay);var state_34713__$1 = state_34713;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34713__$1,(11),inst_34690);
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
});})(c__5693__auto___34743,map__34684,map__34684__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___34743,map__34684,map__34684__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34739 = [null,null,null,null,null,null,null,null,null,null];(statearr_34739[(0)] = state_machine__5679__auto__);
(statearr_34739[(1)] = (1));
return statearr_34739;
});
var state_machine__5679__auto____1 = (function (state_34713){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34713);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34740){if((e34740 instanceof Object))
{var ex__5682__auto__ = e34740;var statearr_34741_34762 = state_34713;(statearr_34741_34762[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34713);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e34740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__34763 = state_34713;
state_34713 = G__34763;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34713){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___34743,map__34684,map__34684__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_34742 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___34743);
return statearr_34742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___34743,map__34684,map__34684__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__34624 = null;if (arguments.length > 1) {
  p__34624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__34624);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__34764){
var ch = cljs.core.first(arglist__34764);
var p__34624 = cljs.core.rest(arglist__34764);
return dorun_async__delegate(ch,p__34624);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
