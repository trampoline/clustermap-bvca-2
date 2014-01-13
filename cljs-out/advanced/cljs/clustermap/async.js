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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__19818){
var f = cljs.core.first(arglist__19818);
var colls = cljs.core.rest(arglist__19818);
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
var dorun_async__delegate = function (ch,p__19819){var map__19879 = p__19819;var map__19879__$1 = ((cljs.core.seq_QMARK_(map__19879))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19879):map__19879);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,cljs.core.constant$keyword$202);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,cljs.core.constant$keyword$203);var c__5521__auto___19938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19908){var state_val_19909 = (state_19908[1]);if((state_val_19909 === 1))
{var state_19908__$1 = state_19908;var statearr_19910_19939 = state_19908__$1;(statearr_19910_19939[2] = null);
(statearr_19910_19939[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 2))
{var state_19908__$1 = state_19908;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19908__$1,4,ch);
} else
{if((state_val_19909 === 3))
{var inst_19906 = (state_19908[2]);var state_19908__$1 = state_19908;return cljs.core.async.impl.ioc_helpers.return_chan(state_19908__$1,inst_19906);
} else
{if((state_val_19909 === 4))
{var inst_19882 = (state_19908[7]);var inst_19882__$1 = (state_19908[2]);var state_19908__$1 = (function (){var statearr_19911 = state_19908;(statearr_19911[7] = inst_19882__$1);
return statearr_19911;
})();if(cljs.core.truth_(inst_19882__$1))
{var statearr_19912_19940 = state_19908__$1;(statearr_19912_19940[1] = 5);
} else
{var statearr_19913_19941 = state_19908__$1;(statearr_19913_19941[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 5))
{var state_19908__$1 = state_19908;if(cljs.core.truth_(delay))
{var statearr_19914_19942 = state_19908__$1;(statearr_19914_19942[1] = 8);
} else
{var statearr_19915_19943 = state_19908__$1;(statearr_19915_19943[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 6))
{var state_19908__$1 = state_19908;var statearr_19916_19944 = state_19908__$1;(statearr_19916_19944[2] = null);
(statearr_19916_19944[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 7))
{var inst_19899 = (state_19908[2]);var state_19908__$1 = state_19908;if(cljs.core.truth_(inst_19899))
{var statearr_19917_19945 = state_19908__$1;(statearr_19917_19945[1] = 15);
} else
{var statearr_19918_19946 = state_19908__$1;(statearr_19918_19946[1] = 16);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 8))
{var inst_19885 = cljs.core.async.timeout(delay);var state_19908__$1 = state_19908;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19908__$1,11,inst_19885);
} else
{if((state_val_19909 === 9))
{var state_19908__$1 = state_19908;var statearr_19919_19947 = state_19908__$1;(statearr_19919_19947[2] = null);
(statearr_19919_19947[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 10))
{var inst_19890 = (state_19908[2]);var state_19908__$1 = (function (){var statearr_19920 = state_19908;(statearr_19920[8] = inst_19890);
return statearr_19920;
})();if(cljs.core.truth_(log))
{var statearr_19921_19948 = state_19908__$1;(statearr_19921_19948[1] = 12);
} else
{var statearr_19922_19949 = state_19908__$1;(statearr_19922_19949[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 11))
{var inst_19887 = (state_19908[2]);var state_19908__$1 = state_19908;var statearr_19923_19950 = state_19908__$1;(statearr_19923_19950[2] = inst_19887);
(statearr_19923_19950[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 12))
{var inst_19882 = (state_19908[7]);var inst_19892 = cljs.core.clj__GT_js(inst_19882);var inst_19893 = console.log(inst_19892);var state_19908__$1 = state_19908;var statearr_19924_19951 = state_19908__$1;(statearr_19924_19951[2] = inst_19893);
(statearr_19924_19951[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 13))
{var state_19908__$1 = state_19908;var statearr_19925_19952 = state_19908__$1;(statearr_19925_19952[2] = null);
(statearr_19925_19952[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 14))
{var inst_19882 = (state_19908[7]);var inst_19896 = (state_19908[2]);var state_19908__$1 = (function (){var statearr_19926 = state_19908;(statearr_19926[9] = inst_19896);
return statearr_19926;
})();var statearr_19927_19953 = state_19908__$1;(statearr_19927_19953[2] = inst_19882);
(statearr_19927_19953[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 15))
{var state_19908__$1 = state_19908;var statearr_19928_19954 = state_19908__$1;(statearr_19928_19954[2] = null);
(statearr_19928_19954[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 16))
{var state_19908__$1 = state_19908;var statearr_19929_19955 = state_19908__$1;(statearr_19929_19955[2] = null);
(statearr_19929_19955[1] = 17);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19909 === 17))
{var inst_19904 = (state_19908[2]);var state_19908__$1 = state_19908;var statearr_19930_19956 = state_19908__$1;(statearr_19930_19956[2] = inst_19904);
(statearr_19930_19956[1] = 3);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_19934 = [null,null,null,null,null,null,null,null,null,null];(statearr_19934[0] = state_machine__5507__auto__);
(statearr_19934[1] = 1);
return statearr_19934;
});
var state_machine__5507__auto____1 = (function (state_19908){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19908);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19935){if((e19935 instanceof Object))
{var ex__5510__auto__ = e19935;var statearr_19936_19957 = state_19908;(statearr_19936_19957[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19908);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19958 = state_19908;
state_19908 = G__19958;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19908){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19937 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19938);
return statearr_19937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__19819 = null;if (arguments.length > 1) {
  p__19819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__19819);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__19959){
var ch = cljs.core.first(arglist__19959);
var p__19819 = cljs.core.rest(arglist__19959);
return dorun_async__delegate(ch,p__19819);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
