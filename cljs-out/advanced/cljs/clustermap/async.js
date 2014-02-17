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
map_async.cljs$lang$applyTo = (function (arglist__22005){
var f = cljs.core.first(arglist__22005);
var colls = cljs.core.rest(arglist__22005);
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
var dorun_async__delegate = function (ch,p__22006){var map__22066 = p__22006;var map__22066__$1 = ((cljs.core.seq_QMARK_(map__22066))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22066):map__22066);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22066__$1,cljs.core.constant$keyword$403);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22066__$1,cljs.core.constant$keyword$425);var c__5521__auto___22125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22095){var state_val_22096 = (state_22095[1]);if((state_val_22096 === 1))
{var state_22095__$1 = state_22095;var statearr_22097_22126 = state_22095__$1;(statearr_22097_22126[2] = null);
(statearr_22097_22126[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 2))
{var state_22095__$1 = state_22095;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22095__$1,4,ch);
} else
{if((state_val_22096 === 3))
{var inst_22093 = (state_22095[2]);var state_22095__$1 = state_22095;return cljs.core.async.impl.ioc_helpers.return_chan(state_22095__$1,inst_22093);
} else
{if((state_val_22096 === 4))
{var inst_22069 = (state_22095[7]);var inst_22069__$1 = (state_22095[2]);var state_22095__$1 = (function (){var statearr_22098 = state_22095;(statearr_22098[7] = inst_22069__$1);
return statearr_22098;
})();if(cljs.core.truth_(inst_22069__$1))
{var statearr_22099_22127 = state_22095__$1;(statearr_22099_22127[1] = 5);
} else
{var statearr_22100_22128 = state_22095__$1;(statearr_22100_22128[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 5))
{var state_22095__$1 = state_22095;if(cljs.core.truth_(delay))
{var statearr_22101_22129 = state_22095__$1;(statearr_22101_22129[1] = 8);
} else
{var statearr_22102_22130 = state_22095__$1;(statearr_22102_22130[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 6))
{var state_22095__$1 = state_22095;var statearr_22103_22131 = state_22095__$1;(statearr_22103_22131[2] = null);
(statearr_22103_22131[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 7))
{var inst_22086 = (state_22095[2]);var state_22095__$1 = state_22095;if(cljs.core.truth_(inst_22086))
{var statearr_22104_22132 = state_22095__$1;(statearr_22104_22132[1] = 15);
} else
{var statearr_22105_22133 = state_22095__$1;(statearr_22105_22133[1] = 16);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 8))
{var inst_22072 = cljs.core.async.timeout(delay);var state_22095__$1 = state_22095;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22095__$1,11,inst_22072);
} else
{if((state_val_22096 === 9))
{var state_22095__$1 = state_22095;var statearr_22106_22134 = state_22095__$1;(statearr_22106_22134[2] = null);
(statearr_22106_22134[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 10))
{var inst_22077 = (state_22095[2]);var state_22095__$1 = (function (){var statearr_22107 = state_22095;(statearr_22107[8] = inst_22077);
return statearr_22107;
})();if(cljs.core.truth_(log))
{var statearr_22108_22135 = state_22095__$1;(statearr_22108_22135[1] = 12);
} else
{var statearr_22109_22136 = state_22095__$1;(statearr_22109_22136[1] = 13);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 11))
{var inst_22074 = (state_22095[2]);var state_22095__$1 = state_22095;var statearr_22110_22137 = state_22095__$1;(statearr_22110_22137[2] = inst_22074);
(statearr_22110_22137[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 12))
{var inst_22069 = (state_22095[7]);var inst_22079 = cljs.core.clj__GT_js(inst_22069);var inst_22080 = console.log(inst_22079);var state_22095__$1 = state_22095;var statearr_22111_22138 = state_22095__$1;(statearr_22111_22138[2] = inst_22080);
(statearr_22111_22138[1] = 14);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 13))
{var state_22095__$1 = state_22095;var statearr_22112_22139 = state_22095__$1;(statearr_22112_22139[2] = null);
(statearr_22112_22139[1] = 14);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 14))
{var inst_22069 = (state_22095[7]);var inst_22083 = (state_22095[2]);var state_22095__$1 = (function (){var statearr_22113 = state_22095;(statearr_22113[9] = inst_22083);
return statearr_22113;
})();var statearr_22114_22140 = state_22095__$1;(statearr_22114_22140[2] = inst_22069);
(statearr_22114_22140[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 15))
{var state_22095__$1 = state_22095;var statearr_22115_22141 = state_22095__$1;(statearr_22115_22141[2] = null);
(statearr_22115_22141[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 16))
{var state_22095__$1 = state_22095;var statearr_22116_22142 = state_22095__$1;(statearr_22116_22142[2] = null);
(statearr_22116_22142[1] = 17);
return cljs.core.constant$keyword$235;
} else
{if((state_val_22096 === 17))
{var inst_22091 = (state_22095[2]);var state_22095__$1 = state_22095;var statearr_22117_22143 = state_22095__$1;(statearr_22117_22143[2] = inst_22091);
(statearr_22117_22143[1] = 3);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_22121 = [null,null,null,null,null,null,null,null,null,null];(statearr_22121[0] = state_machine__5507__auto__);
(statearr_22121[1] = 1);
return statearr_22121;
});
var state_machine__5507__auto____1 = (function (state_22095){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22095);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22122){if((e22122 instanceof Object))
{var ex__5510__auto__ = e22122;var statearr_22123_22144 = state_22095;(statearr_22123_22144[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22095);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e22122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__22145 = state_22095;
state_22095 = G__22145;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22095){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22124 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22125);
return statearr_22124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22006 = null;if (arguments.length > 1) {
  p__22006 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22006);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22146){
var ch = cljs.core.first(arglist__22146);
var p__22006 = cljs.core.rest(arglist__22146);
return dorun_async__delegate(ch,p__22006);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
