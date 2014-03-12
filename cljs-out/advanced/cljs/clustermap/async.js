// Compiled by ClojureScript 0.0-2173
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
map_async.cljs$lang$applyTo = (function (arglist__33748){
var f = cljs.core.first(arglist__33748);
var colls = cljs.core.rest(arglist__33748);
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
var dorun_async__delegate = function (ch,p__33749){var map__33809 = p__33749;var map__33809__$1 = ((cljs.core.seq_QMARK_(map__33809))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33809):map__33809);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33809__$1,cljs.core.constant$keyword$790);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33809__$1,cljs.core.constant$keyword$791);var c__5562__auto___33868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33838){var state_val_33839 = (state_33838[1]);if((state_val_33839 === 1))
{var state_33838__$1 = state_33838;var statearr_33840_33869 = state_33838__$1;(statearr_33840_33869[2] = null);
(statearr_33840_33869[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 2))
{var state_33838__$1 = state_33838;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33838__$1,4,ch);
} else
{if((state_val_33839 === 3))
{var inst_33836 = (state_33838[2]);var state_33838__$1 = state_33838;return cljs.core.async.impl.ioc_helpers.return_chan(state_33838__$1,inst_33836);
} else
{if((state_val_33839 === 4))
{var inst_33812 = (state_33838[7]);var inst_33812__$1 = (state_33838[2]);var state_33838__$1 = (function (){var statearr_33841 = state_33838;(statearr_33841[7] = inst_33812__$1);
return statearr_33841;
})();if(cljs.core.truth_(inst_33812__$1))
{var statearr_33842_33870 = state_33838__$1;(statearr_33842_33870[1] = 5);
} else
{var statearr_33843_33871 = state_33838__$1;(statearr_33843_33871[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 5))
{var state_33838__$1 = state_33838;if(cljs.core.truth_(delay))
{var statearr_33844_33872 = state_33838__$1;(statearr_33844_33872[1] = 8);
} else
{var statearr_33845_33873 = state_33838__$1;(statearr_33845_33873[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 6))
{var state_33838__$1 = state_33838;var statearr_33846_33874 = state_33838__$1;(statearr_33846_33874[2] = null);
(statearr_33846_33874[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 7))
{var inst_33829 = (state_33838[2]);var state_33838__$1 = state_33838;if(cljs.core.truth_(inst_33829))
{var statearr_33847_33875 = state_33838__$1;(statearr_33847_33875[1] = 15);
} else
{var statearr_33848_33876 = state_33838__$1;(statearr_33848_33876[1] = 16);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 8))
{var inst_33815 = cljs.core.async.timeout(delay);var state_33838__$1 = state_33838;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33838__$1,11,inst_33815);
} else
{if((state_val_33839 === 9))
{var state_33838__$1 = state_33838;var statearr_33849_33877 = state_33838__$1;(statearr_33849_33877[2] = null);
(statearr_33849_33877[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 10))
{var inst_33820 = (state_33838[2]);var state_33838__$1 = (function (){var statearr_33850 = state_33838;(statearr_33850[8] = inst_33820);
return statearr_33850;
})();if(cljs.core.truth_(log))
{var statearr_33851_33878 = state_33838__$1;(statearr_33851_33878[1] = 12);
} else
{var statearr_33852_33879 = state_33838__$1;(statearr_33852_33879[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 11))
{var inst_33817 = (state_33838[2]);var state_33838__$1 = state_33838;var statearr_33853_33880 = state_33838__$1;(statearr_33853_33880[2] = inst_33817);
(statearr_33853_33880[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 12))
{var inst_33812 = (state_33838[7]);var inst_33822 = cljs.core.clj__GT_js(inst_33812);var inst_33823 = console.log(inst_33822);var state_33838__$1 = state_33838;var statearr_33854_33881 = state_33838__$1;(statearr_33854_33881[2] = inst_33823);
(statearr_33854_33881[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 13))
{var state_33838__$1 = state_33838;var statearr_33855_33882 = state_33838__$1;(statearr_33855_33882[2] = null);
(statearr_33855_33882[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 14))
{var inst_33812 = (state_33838[7]);var inst_33826 = (state_33838[2]);var state_33838__$1 = (function (){var statearr_33856 = state_33838;(statearr_33856[9] = inst_33826);
return statearr_33856;
})();var statearr_33857_33883 = state_33838__$1;(statearr_33857_33883[2] = inst_33812);
(statearr_33857_33883[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 15))
{var state_33838__$1 = state_33838;var statearr_33858_33884 = state_33838__$1;(statearr_33858_33884[2] = null);
(statearr_33858_33884[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 16))
{var state_33838__$1 = state_33838;var statearr_33859_33885 = state_33838__$1;(statearr_33859_33885[2] = null);
(statearr_33859_33885[1] = 17);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33839 === 17))
{var inst_33834 = (state_33838[2]);var state_33838__$1 = state_33838;var statearr_33860_33886 = state_33838__$1;(statearr_33860_33886[2] = inst_33834);
(statearr_33860_33886[1] = 3);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33864 = [null,null,null,null,null,null,null,null,null,null];(statearr_33864[0] = state_machine__5548__auto__);
(statearr_33864[1] = 1);
return statearr_33864;
});
var state_machine__5548__auto____1 = (function (state_33838){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33838);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33865){if((e33865 instanceof Object))
{var ex__5551__auto__ = e33865;var statearr_33866_33887 = state_33838;(statearr_33866_33887[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33838);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33888 = state_33838;
state_33838 = G__33888;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33838){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33867 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___33868);
return statearr_33867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__33749 = null;if (arguments.length > 1) {
  p__33749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__33749);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__33889){
var ch = cljs.core.first(arglist__33889);
var p__33749 = cljs.core.rest(arglist__33889);
return dorun_async__delegate(ch,p__33749);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
