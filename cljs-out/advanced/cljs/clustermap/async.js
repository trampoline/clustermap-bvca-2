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
map_async.cljs$lang$applyTo = (function (arglist__33808){
var f = cljs.core.first(arglist__33808);
var colls = cljs.core.rest(arglist__33808);
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
var dorun_async__delegate = function (ch,p__33809){var map__33869 = p__33809;var map__33869__$1 = ((cljs.core.seq_QMARK_(map__33869))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33869):map__33869);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33869__$1,cljs.core.constant$keyword$790);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33869__$1,cljs.core.constant$keyword$791);var c__5562__auto___33928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33898){var state_val_33899 = (state_33898[1]);if((state_val_33899 === 1))
{var state_33898__$1 = state_33898;var statearr_33900_33929 = state_33898__$1;(statearr_33900_33929[2] = null);
(statearr_33900_33929[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 2))
{var state_33898__$1 = state_33898;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33898__$1,4,ch);
} else
{if((state_val_33899 === 3))
{var inst_33896 = (state_33898[2]);var state_33898__$1 = state_33898;return cljs.core.async.impl.ioc_helpers.return_chan(state_33898__$1,inst_33896);
} else
{if((state_val_33899 === 4))
{var inst_33872 = (state_33898[7]);var inst_33872__$1 = (state_33898[2]);var state_33898__$1 = (function (){var statearr_33901 = state_33898;(statearr_33901[7] = inst_33872__$1);
return statearr_33901;
})();if(cljs.core.truth_(inst_33872__$1))
{var statearr_33902_33930 = state_33898__$1;(statearr_33902_33930[1] = 5);
} else
{var statearr_33903_33931 = state_33898__$1;(statearr_33903_33931[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 5))
{var state_33898__$1 = state_33898;if(cljs.core.truth_(delay))
{var statearr_33904_33932 = state_33898__$1;(statearr_33904_33932[1] = 8);
} else
{var statearr_33905_33933 = state_33898__$1;(statearr_33905_33933[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 6))
{var state_33898__$1 = state_33898;var statearr_33906_33934 = state_33898__$1;(statearr_33906_33934[2] = null);
(statearr_33906_33934[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 7))
{var inst_33889 = (state_33898[2]);var state_33898__$1 = state_33898;if(cljs.core.truth_(inst_33889))
{var statearr_33907_33935 = state_33898__$1;(statearr_33907_33935[1] = 15);
} else
{var statearr_33908_33936 = state_33898__$1;(statearr_33908_33936[1] = 16);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 8))
{var inst_33875 = cljs.core.async.timeout(delay);var state_33898__$1 = state_33898;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33898__$1,11,inst_33875);
} else
{if((state_val_33899 === 9))
{var state_33898__$1 = state_33898;var statearr_33909_33937 = state_33898__$1;(statearr_33909_33937[2] = null);
(statearr_33909_33937[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 10))
{var inst_33880 = (state_33898[2]);var state_33898__$1 = (function (){var statearr_33910 = state_33898;(statearr_33910[8] = inst_33880);
return statearr_33910;
})();if(cljs.core.truth_(log))
{var statearr_33911_33938 = state_33898__$1;(statearr_33911_33938[1] = 12);
} else
{var statearr_33912_33939 = state_33898__$1;(statearr_33912_33939[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 11))
{var inst_33877 = (state_33898[2]);var state_33898__$1 = state_33898;var statearr_33913_33940 = state_33898__$1;(statearr_33913_33940[2] = inst_33877);
(statearr_33913_33940[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 12))
{var inst_33872 = (state_33898[7]);var inst_33882 = cljs.core.clj__GT_js(inst_33872);var inst_33883 = console.log(inst_33882);var state_33898__$1 = state_33898;var statearr_33914_33941 = state_33898__$1;(statearr_33914_33941[2] = inst_33883);
(statearr_33914_33941[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 13))
{var state_33898__$1 = state_33898;var statearr_33915_33942 = state_33898__$1;(statearr_33915_33942[2] = null);
(statearr_33915_33942[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 14))
{var inst_33872 = (state_33898[7]);var inst_33886 = (state_33898[2]);var state_33898__$1 = (function (){var statearr_33916 = state_33898;(statearr_33916[9] = inst_33886);
return statearr_33916;
})();var statearr_33917_33943 = state_33898__$1;(statearr_33917_33943[2] = inst_33872);
(statearr_33917_33943[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 15))
{var state_33898__$1 = state_33898;var statearr_33918_33944 = state_33898__$1;(statearr_33918_33944[2] = null);
(statearr_33918_33944[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 16))
{var state_33898__$1 = state_33898;var statearr_33919_33945 = state_33898__$1;(statearr_33919_33945[2] = null);
(statearr_33919_33945[1] = 17);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33899 === 17))
{var inst_33894 = (state_33898[2]);var state_33898__$1 = state_33898;var statearr_33920_33946 = state_33898__$1;(statearr_33920_33946[2] = inst_33894);
(statearr_33920_33946[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_33924 = [null,null,null,null,null,null,null,null,null,null];(statearr_33924[0] = state_machine__5548__auto__);
(statearr_33924[1] = 1);
return statearr_33924;
});
var state_machine__5548__auto____1 = (function (state_33898){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33898);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33925){if((e33925 instanceof Object))
{var ex__5551__auto__ = e33925;var statearr_33926_33947 = state_33898;(statearr_33926_33947[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33898);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33948 = state_33898;
state_33898 = G__33948;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33898){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33927 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___33928);
return statearr_33927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__33809 = null;if (arguments.length > 1) {
  p__33809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__33809);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__33949){
var ch = cljs.core.first(arglist__33949);
var p__33809 = cljs.core.rest(arglist__33949);
return dorun_async__delegate(ch,p__33809);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
