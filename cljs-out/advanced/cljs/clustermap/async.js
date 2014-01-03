// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
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
map_async.cljs$lang$applyTo = (function (arglist__30013){
var f = cljs.core.first(arglist__30013);
var colls = cljs.core.rest(arglist__30013);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__30014){var map__30062 = p__30014;var map__30062__$1 = ((cljs.core.seq_QMARK_(map__30062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30062):map__30062);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30062__$1,cljs.core.constant$keyword$91);var c__5861__auto___30109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_30084){var state_val_30085 = (state_30084[1]);if((state_val_30085 === 1))
{var state_30084__$1 = state_30084;var statearr_30086_30110 = state_30084__$1;(statearr_30086_30110[2] = null);
(statearr_30086_30110[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 2))
{var state_30084__$1 = state_30084;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30084__$1,4,ch);
} else
{if((state_val_30085 === 3))
{var inst_30082 = (state_30084[2]);var state_30084__$1 = state_30084;return cljs.core.async.impl.ioc_helpers.return_chan(state_30084__$1,inst_30082);
} else
{if((state_val_30085 === 4))
{var inst_30065 = (state_30084[7]);var inst_30065__$1 = (state_30084[2]);var state_30084__$1 = (function (){var statearr_30087 = state_30084;(statearr_30087[7] = inst_30065__$1);
return statearr_30087;
})();if(cljs.core.truth_(inst_30065__$1))
{var statearr_30088_30111 = state_30084__$1;(statearr_30088_30111[1] = 5);
} else
{var statearr_30089_30112 = state_30084__$1;(statearr_30089_30112[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 5))
{var state_30084__$1 = state_30084;if(cljs.core.truth_(log))
{var statearr_30090_30113 = state_30084__$1;(statearr_30090_30113[1] = 8);
} else
{var statearr_30091_30114 = state_30084__$1;(statearr_30091_30114[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 6))
{var state_30084__$1 = state_30084;var statearr_30092_30115 = state_30084__$1;(statearr_30092_30115[2] = null);
(statearr_30092_30115[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 7))
{var inst_30075 = (state_30084[2]);var state_30084__$1 = state_30084;if(cljs.core.truth_(inst_30075))
{var statearr_30093_30116 = state_30084__$1;(statearr_30093_30116[1] = 11);
} else
{var statearr_30094_30117 = state_30084__$1;(statearr_30094_30117[1] = 12);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 8))
{var inst_30065 = (state_30084[7]);var inst_30068 = cljs.core.clj__GT_js(inst_30065);var inst_30069 = console.log(inst_30068);var state_30084__$1 = state_30084;var statearr_30095_30118 = state_30084__$1;(statearr_30095_30118[2] = inst_30069);
(statearr_30095_30118[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 9))
{var state_30084__$1 = state_30084;var statearr_30096_30119 = state_30084__$1;(statearr_30096_30119[2] = null);
(statearr_30096_30119[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 10))
{var inst_30065 = (state_30084[7]);var inst_30072 = (state_30084[2]);var state_30084__$1 = (function (){var statearr_30097 = state_30084;(statearr_30097[8] = inst_30072);
return statearr_30097;
})();var statearr_30098_30120 = state_30084__$1;(statearr_30098_30120[2] = inst_30065);
(statearr_30098_30120[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 11))
{var state_30084__$1 = state_30084;var statearr_30099_30121 = state_30084__$1;(statearr_30099_30121[2] = null);
(statearr_30099_30121[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 12))
{var state_30084__$1 = state_30084;var statearr_30100_30122 = state_30084__$1;(statearr_30100_30122[2] = null);
(statearr_30100_30122[1] = 13);
return cljs.core.constant$keyword$77;
} else
{if((state_val_30085 === 13))
{var inst_30080 = (state_30084[2]);var state_30084__$1 = state_30084;var statearr_30101_30123 = state_30084__$1;(statearr_30101_30123[2] = inst_30080);
(statearr_30101_30123[1] = 3);
return cljs.core.constant$keyword$77;
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_30105 = (new Array(9));(statearr_30105[0] = state_machine__5792__auto__);
(statearr_30105[1] = 1);
return statearr_30105;
});
var state_machine__5792__auto____1 = (function (state_30084){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_30084);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e30106){if((e30106 instanceof Object))
{var ex__5795__auto__ = e30106;var statearr_30107_30124 = state_30084;(statearr_30107_30124[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30084);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e30106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$77))
{{
var G__30125 = state_30084;
state_30084 = G__30125;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_30084){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_30084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_30108 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_30108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___30109);
return statearr_30108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__30014 = null;if (arguments.length > 1) {
  p__30014 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30014);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30126){
var ch = cljs.core.first(arglist__30126);
var p__30014 = cljs.core.rest(arglist__30126);
return dorun_async__delegate(ch,p__30014);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
