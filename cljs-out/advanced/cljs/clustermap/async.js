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
map_async.cljs$lang$applyTo = (function (arglist__33818){
var f = cljs.core.first(arglist__33818);
var colls = cljs.core.rest(arglist__33818);
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
var dorun_async__delegate = function (ch,p__33819){var map__33879 = p__33819;var map__33879__$1 = ((cljs.core.seq_QMARK_(map__33879))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33879):map__33879);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33879__$1,cljs.core.constant$keyword$796);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33879__$1,cljs.core.constant$keyword$797);var c__5562__auto___33938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33908){var state_val_33909 = (state_33908[1]);if((state_val_33909 === 1))
{var state_33908__$1 = state_33908;var statearr_33910_33939 = state_33908__$1;(statearr_33910_33939[2] = null);
(statearr_33910_33939[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 2))
{var state_33908__$1 = state_33908;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33908__$1,4,ch);
} else
{if((state_val_33909 === 3))
{var inst_33906 = (state_33908[2]);var state_33908__$1 = state_33908;return cljs.core.async.impl.ioc_helpers.return_chan(state_33908__$1,inst_33906);
} else
{if((state_val_33909 === 4))
{var inst_33882 = (state_33908[7]);var inst_33882__$1 = (state_33908[2]);var state_33908__$1 = (function (){var statearr_33911 = state_33908;(statearr_33911[7] = inst_33882__$1);
return statearr_33911;
})();if(cljs.core.truth_(inst_33882__$1))
{var statearr_33912_33940 = state_33908__$1;(statearr_33912_33940[1] = 5);
} else
{var statearr_33913_33941 = state_33908__$1;(statearr_33913_33941[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 5))
{var state_33908__$1 = state_33908;if(cljs.core.truth_(delay))
{var statearr_33914_33942 = state_33908__$1;(statearr_33914_33942[1] = 8);
} else
{var statearr_33915_33943 = state_33908__$1;(statearr_33915_33943[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 6))
{var state_33908__$1 = state_33908;var statearr_33916_33944 = state_33908__$1;(statearr_33916_33944[2] = null);
(statearr_33916_33944[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 7))
{var inst_33899 = (state_33908[2]);var state_33908__$1 = state_33908;if(cljs.core.truth_(inst_33899))
{var statearr_33917_33945 = state_33908__$1;(statearr_33917_33945[1] = 15);
} else
{var statearr_33918_33946 = state_33908__$1;(statearr_33918_33946[1] = 16);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 8))
{var inst_33885 = cljs.core.async.timeout(delay);var state_33908__$1 = state_33908;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33908__$1,11,inst_33885);
} else
{if((state_val_33909 === 9))
{var state_33908__$1 = state_33908;var statearr_33919_33947 = state_33908__$1;(statearr_33919_33947[2] = null);
(statearr_33919_33947[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 10))
{var inst_33890 = (state_33908[2]);var state_33908__$1 = (function (){var statearr_33920 = state_33908;(statearr_33920[8] = inst_33890);
return statearr_33920;
})();if(cljs.core.truth_(log))
{var statearr_33921_33948 = state_33908__$1;(statearr_33921_33948[1] = 12);
} else
{var statearr_33922_33949 = state_33908__$1;(statearr_33922_33949[1] = 13);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 11))
{var inst_33887 = (state_33908[2]);var state_33908__$1 = state_33908;var statearr_33923_33950 = state_33908__$1;(statearr_33923_33950[2] = inst_33887);
(statearr_33923_33950[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 12))
{var inst_33882 = (state_33908[7]);var inst_33892 = cljs.core.clj__GT_js(inst_33882);var inst_33893 = console.log(inst_33892);var state_33908__$1 = state_33908;var statearr_33924_33951 = state_33908__$1;(statearr_33924_33951[2] = inst_33893);
(statearr_33924_33951[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 13))
{var state_33908__$1 = state_33908;var statearr_33925_33952 = state_33908__$1;(statearr_33925_33952[2] = null);
(statearr_33925_33952[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 14))
{var inst_33882 = (state_33908[7]);var inst_33896 = (state_33908[2]);var state_33908__$1 = (function (){var statearr_33926 = state_33908;(statearr_33926[9] = inst_33896);
return statearr_33926;
})();var statearr_33927_33953 = state_33908__$1;(statearr_33927_33953[2] = inst_33882);
(statearr_33927_33953[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 15))
{var state_33908__$1 = state_33908;var statearr_33928_33954 = state_33908__$1;(statearr_33928_33954[2] = null);
(statearr_33928_33954[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 16))
{var state_33908__$1 = state_33908;var statearr_33929_33955 = state_33908__$1;(statearr_33929_33955[2] = null);
(statearr_33929_33955[1] = 17);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33909 === 17))
{var inst_33904 = (state_33908[2]);var state_33908__$1 = state_33908;var statearr_33930_33956 = state_33908__$1;(statearr_33930_33956[2] = inst_33904);
(statearr_33930_33956[1] = 3);
return cljs.core.constant$keyword$555;
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
var state_machine__5548__auto____0 = (function (){var statearr_33934 = [null,null,null,null,null,null,null,null,null,null];(statearr_33934[0] = state_machine__5548__auto__);
(statearr_33934[1] = 1);
return statearr_33934;
});
var state_machine__5548__auto____1 = (function (state_33908){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33908);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33935){if((e33935 instanceof Object))
{var ex__5551__auto__ = e33935;var statearr_33936_33957 = state_33908;(statearr_33936_33957[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33908);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33958 = state_33908;
state_33908 = G__33958;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33908){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33937 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___33938);
return statearr_33937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__33819 = null;if (arguments.length > 1) {
  p__33819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__33819);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__33959){
var ch = cljs.core.first(arglist__33959);
var p__33819 = cljs.core.rest(arglist__33959);
return dorun_async__delegate(ch,p__33819);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
