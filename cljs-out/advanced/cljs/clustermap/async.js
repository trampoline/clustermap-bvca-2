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
map_async.cljs$lang$applyTo = (function (arglist__20769){
var f = cljs.core.first(arglist__20769);
var colls = cljs.core.rest(arglist__20769);
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
var dorun_async__delegate = function (ch,p__20770){var map__20830 = p__20770;var map__20830__$1 = ((cljs.core.seq_QMARK_(map__20830))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20830):map__20830);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830__$1,cljs.core.constant$keyword$329);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830__$1,cljs.core.constant$keyword$340);var c__5521__auto___20889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20859){var state_val_20860 = (state_20859[1]);if((state_val_20860 === 1))
{var state_20859__$1 = state_20859;var statearr_20861_20890 = state_20859__$1;(statearr_20861_20890[2] = null);
(statearr_20861_20890[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 2))
{var state_20859__$1 = state_20859;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20859__$1,4,ch);
} else
{if((state_val_20860 === 3))
{var inst_20857 = (state_20859[2]);var state_20859__$1 = state_20859;return cljs.core.async.impl.ioc_helpers.return_chan(state_20859__$1,inst_20857);
} else
{if((state_val_20860 === 4))
{var inst_20833 = (state_20859[7]);var inst_20833__$1 = (state_20859[2]);var state_20859__$1 = (function (){var statearr_20862 = state_20859;(statearr_20862[7] = inst_20833__$1);
return statearr_20862;
})();if(cljs.core.truth_(inst_20833__$1))
{var statearr_20863_20891 = state_20859__$1;(statearr_20863_20891[1] = 5);
} else
{var statearr_20864_20892 = state_20859__$1;(statearr_20864_20892[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 5))
{var state_20859__$1 = state_20859;if(cljs.core.truth_(delay))
{var statearr_20865_20893 = state_20859__$1;(statearr_20865_20893[1] = 8);
} else
{var statearr_20866_20894 = state_20859__$1;(statearr_20866_20894[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 6))
{var state_20859__$1 = state_20859;var statearr_20867_20895 = state_20859__$1;(statearr_20867_20895[2] = null);
(statearr_20867_20895[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 7))
{var inst_20850 = (state_20859[2]);var state_20859__$1 = state_20859;if(cljs.core.truth_(inst_20850))
{var statearr_20868_20896 = state_20859__$1;(statearr_20868_20896[1] = 15);
} else
{var statearr_20869_20897 = state_20859__$1;(statearr_20869_20897[1] = 16);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 8))
{var inst_20836 = cljs.core.async.timeout(delay);var state_20859__$1 = state_20859;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20859__$1,11,inst_20836);
} else
{if((state_val_20860 === 9))
{var state_20859__$1 = state_20859;var statearr_20870_20898 = state_20859__$1;(statearr_20870_20898[2] = null);
(statearr_20870_20898[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 10))
{var inst_20841 = (state_20859[2]);var state_20859__$1 = (function (){var statearr_20871 = state_20859;(statearr_20871[8] = inst_20841);
return statearr_20871;
})();if(cljs.core.truth_(log))
{var statearr_20872_20899 = state_20859__$1;(statearr_20872_20899[1] = 12);
} else
{var statearr_20873_20900 = state_20859__$1;(statearr_20873_20900[1] = 13);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 11))
{var inst_20838 = (state_20859[2]);var state_20859__$1 = state_20859;var statearr_20874_20901 = state_20859__$1;(statearr_20874_20901[2] = inst_20838);
(statearr_20874_20901[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 12))
{var inst_20833 = (state_20859[7]);var inst_20843 = cljs.core.clj__GT_js(inst_20833);var inst_20844 = console.log(inst_20843);var state_20859__$1 = state_20859;var statearr_20875_20902 = state_20859__$1;(statearr_20875_20902[2] = inst_20844);
(statearr_20875_20902[1] = 14);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 13))
{var state_20859__$1 = state_20859;var statearr_20876_20903 = state_20859__$1;(statearr_20876_20903[2] = null);
(statearr_20876_20903[1] = 14);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 14))
{var inst_20833 = (state_20859[7]);var inst_20847 = (state_20859[2]);var state_20859__$1 = (function (){var statearr_20877 = state_20859;(statearr_20877[9] = inst_20847);
return statearr_20877;
})();var statearr_20878_20904 = state_20859__$1;(statearr_20878_20904[2] = inst_20833);
(statearr_20878_20904[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 15))
{var state_20859__$1 = state_20859;var statearr_20879_20905 = state_20859__$1;(statearr_20879_20905[2] = null);
(statearr_20879_20905[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 16))
{var state_20859__$1 = state_20859;var statearr_20880_20906 = state_20859__$1;(statearr_20880_20906[2] = null);
(statearr_20880_20906[1] = 17);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20860 === 17))
{var inst_20855 = (state_20859[2]);var state_20859__$1 = state_20859;var statearr_20881_20907 = state_20859__$1;(statearr_20881_20907[2] = inst_20855);
(statearr_20881_20907[1] = 3);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_20885 = [null,null,null,null,null,null,null,null,null,null];(statearr_20885[0] = state_machine__5507__auto__);
(statearr_20885[1] = 1);
return statearr_20885;
});
var state_machine__5507__auto____1 = (function (state_20859){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20859);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20886){if((e20886 instanceof Object))
{var ex__5510__auto__ = e20886;var statearr_20887_20908 = state_20859;(statearr_20887_20908[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20859);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e20886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__20909 = state_20859;
state_20859 = G__20909;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20859){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20888 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20889);
return statearr_20888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20770 = null;if (arguments.length > 1) {
  p__20770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20770);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20910){
var ch = cljs.core.first(arglist__20910);
var p__20770 = cljs.core.rest(arglist__20910);
return dorun_async__delegate(ch,p__20770);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
