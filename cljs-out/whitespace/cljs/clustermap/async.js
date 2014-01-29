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
map_async.cljs$lang$applyTo = (function (arglist__30807){
var f = cljs.core.first(arglist__30807);
var colls = cljs.core.rest(arglist__30807);
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
var dorun_async__delegate = function (ch,p__30808){var map__30868 = p__30808;var map__30868__$1 = ((cljs.core.seq_QMARK_.call(null,map__30868))?cljs.core.apply.call(null,cljs.core.hash_map,map__30868):map__30868);var delay = cljs.core.get.call(null,map__30868__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__30868__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___30927 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30897){var state_val_30898 = (state_30897[1]);if((state_val_30898 === 1))
{var state_30897__$1 = state_30897;var statearr_30899_30928 = state_30897__$1;(statearr_30899_30928[2] = null);
(statearr_30899_30928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 2))
{var state_30897__$1 = state_30897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30897__$1,4,ch);
} else
{if((state_val_30898 === 3))
{var inst_30895 = (state_30897[2]);var state_30897__$1 = state_30897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30897__$1,inst_30895);
} else
{if((state_val_30898 === 4))
{var inst_30871 = (state_30897[7]);var inst_30871__$1 = (state_30897[2]);var state_30897__$1 = (function (){var statearr_30900 = state_30897;(statearr_30900[7] = inst_30871__$1);
return statearr_30900;
})();if(cljs.core.truth_(inst_30871__$1))
{var statearr_30901_30929 = state_30897__$1;(statearr_30901_30929[1] = 5);
} else
{var statearr_30902_30930 = state_30897__$1;(statearr_30902_30930[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 5))
{var state_30897__$1 = state_30897;if(cljs.core.truth_(delay))
{var statearr_30903_30931 = state_30897__$1;(statearr_30903_30931[1] = 8);
} else
{var statearr_30904_30932 = state_30897__$1;(statearr_30904_30932[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 6))
{var state_30897__$1 = state_30897;var statearr_30905_30933 = state_30897__$1;(statearr_30905_30933[2] = null);
(statearr_30905_30933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 7))
{var inst_30888 = (state_30897[2]);var state_30897__$1 = state_30897;if(cljs.core.truth_(inst_30888))
{var statearr_30906_30934 = state_30897__$1;(statearr_30906_30934[1] = 15);
} else
{var statearr_30907_30935 = state_30897__$1;(statearr_30907_30935[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 8))
{var inst_30874 = cljs.core.async.timeout.call(null,delay);var state_30897__$1 = state_30897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30897__$1,11,inst_30874);
} else
{if((state_val_30898 === 9))
{var state_30897__$1 = state_30897;var statearr_30908_30936 = state_30897__$1;(statearr_30908_30936[2] = null);
(statearr_30908_30936[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 10))
{var inst_30879 = (state_30897[2]);var state_30897__$1 = (function (){var statearr_30909 = state_30897;(statearr_30909[8] = inst_30879);
return statearr_30909;
})();if(cljs.core.truth_(log))
{var statearr_30910_30937 = state_30897__$1;(statearr_30910_30937[1] = 12);
} else
{var statearr_30911_30938 = state_30897__$1;(statearr_30911_30938[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 11))
{var inst_30876 = (state_30897[2]);var state_30897__$1 = state_30897;var statearr_30912_30939 = state_30897__$1;(statearr_30912_30939[2] = inst_30876);
(statearr_30912_30939[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 12))
{var inst_30871 = (state_30897[7]);var inst_30881 = cljs.core.clj__GT_js.call(null,inst_30871);var inst_30882 = console.log(inst_30881);var state_30897__$1 = state_30897;var statearr_30913_30940 = state_30897__$1;(statearr_30913_30940[2] = inst_30882);
(statearr_30913_30940[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 13))
{var state_30897__$1 = state_30897;var statearr_30914_30941 = state_30897__$1;(statearr_30914_30941[2] = null);
(statearr_30914_30941[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 14))
{var inst_30871 = (state_30897[7]);var inst_30885 = (state_30897[2]);var state_30897__$1 = (function (){var statearr_30915 = state_30897;(statearr_30915[9] = inst_30885);
return statearr_30915;
})();var statearr_30916_30942 = state_30897__$1;(statearr_30916_30942[2] = inst_30871);
(statearr_30916_30942[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 15))
{var state_30897__$1 = state_30897;var statearr_30917_30943 = state_30897__$1;(statearr_30917_30943[2] = null);
(statearr_30917_30943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 16))
{var state_30897__$1 = state_30897;var statearr_30918_30944 = state_30897__$1;(statearr_30918_30944[2] = null);
(statearr_30918_30944[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30898 === 17))
{var inst_30893 = (state_30897[2]);var state_30897__$1 = state_30897;var statearr_30919_30945 = state_30897__$1;(statearr_30919_30945[2] = inst_30893);
(statearr_30919_30945[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_30923 = [null,null,null,null,null,null,null,null,null,null];(statearr_30923[0] = state_machine__5507__auto__);
(statearr_30923[1] = 1);
return statearr_30923;
});
var state_machine__5507__auto____1 = (function (state_30897){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30897);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30924){if((e30924 instanceof Object))
{var ex__5510__auto__ = e30924;var statearr_30925_30946 = state_30897;(statearr_30925_30946[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30897);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30947 = state_30897;
state_30897 = G__30947;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30897){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30926 = f__5522__auto__.call(null);(statearr_30926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30927);
return statearr_30926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__30808 = null;if (arguments.length > 1) {
  p__30808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30808);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30948){
var ch = cljs.core.first(arglist__30948);
var p__30808 = cljs.core.rest(arglist__30948);
return dorun_async__delegate(ch,p__30808);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
