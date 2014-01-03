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
map_async.cljs$lang$applyTo = (function (arglist__8827){
var f = cljs.core.first(arglist__8827);
var colls = cljs.core.rest(arglist__8827);
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
var dorun_async__delegate = function (ch,p__8828){var map__8876 = p__8828;var map__8876__$1 = ((cljs.core.seq_QMARK_.call(null,map__8876))?cljs.core.apply.call(null,cljs.core.hash_map,map__8876):map__8876);var log = cljs.core.get.call(null,map__8876__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___8923 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8898){var state_val_8899 = (state_8898[1]);if((state_val_8899 === 1))
{var state_8898__$1 = state_8898;var statearr_8900_8924 = state_8898__$1;(statearr_8900_8924[2] = null);
(statearr_8900_8924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 2))
{var state_8898__$1 = state_8898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8898__$1,4,ch);
} else
{if((state_val_8899 === 3))
{var inst_8896 = (state_8898[2]);var state_8898__$1 = state_8898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8898__$1,inst_8896);
} else
{if((state_val_8899 === 4))
{var inst_8879 = (state_8898[7]);var inst_8879__$1 = (state_8898[2]);var state_8898__$1 = (function (){var statearr_8901 = state_8898;(statearr_8901[7] = inst_8879__$1);
return statearr_8901;
})();if(cljs.core.truth_(inst_8879__$1))
{var statearr_8902_8925 = state_8898__$1;(statearr_8902_8925[1] = 5);
} else
{var statearr_8903_8926 = state_8898__$1;(statearr_8903_8926[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 5))
{var state_8898__$1 = state_8898;if(cljs.core.truth_(log))
{var statearr_8904_8927 = state_8898__$1;(statearr_8904_8927[1] = 8);
} else
{var statearr_8905_8928 = state_8898__$1;(statearr_8905_8928[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 6))
{var state_8898__$1 = state_8898;var statearr_8906_8929 = state_8898__$1;(statearr_8906_8929[2] = null);
(statearr_8906_8929[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 7))
{var inst_8889 = (state_8898[2]);var state_8898__$1 = state_8898;if(cljs.core.truth_(inst_8889))
{var statearr_8907_8930 = state_8898__$1;(statearr_8907_8930[1] = 11);
} else
{var statearr_8908_8931 = state_8898__$1;(statearr_8908_8931[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 8))
{var inst_8879 = (state_8898[7]);var inst_8882 = cljs.core.clj__GT_js.call(null,inst_8879);var inst_8883 = console.log(inst_8882);var state_8898__$1 = state_8898;var statearr_8909_8932 = state_8898__$1;(statearr_8909_8932[2] = inst_8883);
(statearr_8909_8932[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 9))
{var state_8898__$1 = state_8898;var statearr_8910_8933 = state_8898__$1;(statearr_8910_8933[2] = null);
(statearr_8910_8933[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 10))
{var inst_8879 = (state_8898[7]);var inst_8886 = (state_8898[2]);var state_8898__$1 = (function (){var statearr_8911 = state_8898;(statearr_8911[8] = inst_8886);
return statearr_8911;
})();var statearr_8912_8934 = state_8898__$1;(statearr_8912_8934[2] = inst_8879);
(statearr_8912_8934[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 11))
{var state_8898__$1 = state_8898;var statearr_8913_8935 = state_8898__$1;(statearr_8913_8935[2] = null);
(statearr_8913_8935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 12))
{var state_8898__$1 = state_8898;var statearr_8914_8936 = state_8898__$1;(statearr_8914_8936[2] = null);
(statearr_8914_8936[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8899 === 13))
{var inst_8894 = (state_8898[2]);var state_8898__$1 = state_8898;var statearr_8915_8937 = state_8898__$1;(statearr_8915_8937[2] = inst_8894);
(statearr_8915_8937[1] = 3);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8919 = [null,null,null,null,null,null,null,null,null];(statearr_8919[0] = state_machine__5507__auto__);
(statearr_8919[1] = 1);
return statearr_8919;
});
var state_machine__5507__auto____1 = (function (state_8898){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8920){if((e8920 instanceof Object))
{var ex__5510__auto__ = e8920;var statearr_8921_8938 = state_8898;(statearr_8921_8938[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8939 = state_8898;
state_8898 = G__8939;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8898){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8922 = f__5522__auto__.call(null);(statearr_8922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___8923);
return statearr_8922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__8828 = null;if (arguments.length > 1) {
  p__8828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__8828);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__8940){
var ch = cljs.core.first(arglist__8940);
var p__8828 = cljs.core.rest(arglist__8940);
return dorun_async__delegate(ch,p__8828);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map