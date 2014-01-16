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
map_async.cljs$lang$applyTo = (function (arglist__10805){
var f = cljs.core.first(arglist__10805);
var colls = cljs.core.rest(arglist__10805);
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
var dorun_async__delegate = function (ch,p__10806){var map__10866 = p__10806;var map__10866__$1 = ((cljs.core.seq_QMARK_.call(null,map__10866))?cljs.core.apply.call(null,cljs.core.hash_map,map__10866):map__10866);var delay = cljs.core.get.call(null,map__10866__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10866__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10925 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10895){var state_val_10896 = (state_10895[1]);if((state_val_10896 === 1))
{var state_10895__$1 = state_10895;var statearr_10897_10926 = state_10895__$1;(statearr_10897_10926[2] = null);
(statearr_10897_10926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 2))
{var state_10895__$1 = state_10895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10895__$1,4,ch);
} else
{if((state_val_10896 === 3))
{var inst_10893 = (state_10895[2]);var state_10895__$1 = state_10895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10895__$1,inst_10893);
} else
{if((state_val_10896 === 4))
{var inst_10869 = (state_10895[7]);var inst_10869__$1 = (state_10895[2]);var state_10895__$1 = (function (){var statearr_10898 = state_10895;(statearr_10898[7] = inst_10869__$1);
return statearr_10898;
})();if(cljs.core.truth_(inst_10869__$1))
{var statearr_10899_10927 = state_10895__$1;(statearr_10899_10927[1] = 5);
} else
{var statearr_10900_10928 = state_10895__$1;(statearr_10900_10928[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 5))
{var state_10895__$1 = state_10895;if(cljs.core.truth_(delay))
{var statearr_10901_10929 = state_10895__$1;(statearr_10901_10929[1] = 8);
} else
{var statearr_10902_10930 = state_10895__$1;(statearr_10902_10930[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 6))
{var state_10895__$1 = state_10895;var statearr_10903_10931 = state_10895__$1;(statearr_10903_10931[2] = null);
(statearr_10903_10931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 7))
{var inst_10886 = (state_10895[2]);var state_10895__$1 = state_10895;if(cljs.core.truth_(inst_10886))
{var statearr_10904_10932 = state_10895__$1;(statearr_10904_10932[1] = 15);
} else
{var statearr_10905_10933 = state_10895__$1;(statearr_10905_10933[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 8))
{var inst_10872 = cljs.core.async.timeout.call(null,delay);var state_10895__$1 = state_10895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10895__$1,11,inst_10872);
} else
{if((state_val_10896 === 9))
{var state_10895__$1 = state_10895;var statearr_10906_10934 = state_10895__$1;(statearr_10906_10934[2] = null);
(statearr_10906_10934[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 10))
{var inst_10877 = (state_10895[2]);var state_10895__$1 = (function (){var statearr_10907 = state_10895;(statearr_10907[8] = inst_10877);
return statearr_10907;
})();if(cljs.core.truth_(log))
{var statearr_10908_10935 = state_10895__$1;(statearr_10908_10935[1] = 12);
} else
{var statearr_10909_10936 = state_10895__$1;(statearr_10909_10936[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 11))
{var inst_10874 = (state_10895[2]);var state_10895__$1 = state_10895;var statearr_10910_10937 = state_10895__$1;(statearr_10910_10937[2] = inst_10874);
(statearr_10910_10937[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 12))
{var inst_10869 = (state_10895[7]);var inst_10879 = cljs.core.clj__GT_js.call(null,inst_10869);var inst_10880 = console.log(inst_10879);var state_10895__$1 = state_10895;var statearr_10911_10938 = state_10895__$1;(statearr_10911_10938[2] = inst_10880);
(statearr_10911_10938[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 13))
{var state_10895__$1 = state_10895;var statearr_10912_10939 = state_10895__$1;(statearr_10912_10939[2] = null);
(statearr_10912_10939[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 14))
{var inst_10869 = (state_10895[7]);var inst_10883 = (state_10895[2]);var state_10895__$1 = (function (){var statearr_10913 = state_10895;(statearr_10913[9] = inst_10883);
return statearr_10913;
})();var statearr_10914_10940 = state_10895__$1;(statearr_10914_10940[2] = inst_10869);
(statearr_10914_10940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 15))
{var state_10895__$1 = state_10895;var statearr_10915_10941 = state_10895__$1;(statearr_10915_10941[2] = null);
(statearr_10915_10941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 16))
{var state_10895__$1 = state_10895;var statearr_10916_10942 = state_10895__$1;(statearr_10916_10942[2] = null);
(statearr_10916_10942[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 17))
{var inst_10891 = (state_10895[2]);var state_10895__$1 = state_10895;var statearr_10917_10943 = state_10895__$1;(statearr_10917_10943[2] = inst_10891);
(statearr_10917_10943[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10921 = [null,null,null,null,null,null,null,null,null,null];(statearr_10921[0] = state_machine__5507__auto__);
(statearr_10921[1] = 1);
return statearr_10921;
});
var state_machine__5507__auto____1 = (function (state_10895){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10922){if((e10922 instanceof Object))
{var ex__5510__auto__ = e10922;var statearr_10923_10944 = state_10895;(statearr_10923_10944[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10945 = state_10895;
state_10895 = G__10945;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10895){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10924 = f__5522__auto__.call(null);(statearr_10924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10925);
return statearr_10924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10806 = null;if (arguments.length > 1) {
  p__10806 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10806);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10946){
var ch = cljs.core.first(arglist__10946);
var p__10806 = cljs.core.rest(arglist__10946);
return dorun_async__delegate(ch,p__10806);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map