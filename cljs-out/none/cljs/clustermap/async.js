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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__22819){
var f = cljs.core.first(arglist__22819);
var colls = cljs.core.rest(arglist__22819);
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
var dorun_async__delegate = function (ch,p__22820){var map__22880 = p__22820;var map__22880__$1 = ((cljs.core.seq_QMARK_.call(null,map__22880))?cljs.core.apply.call(null,cljs.core.hash_map,map__22880):map__22880);var delay = cljs.core.get.call(null,map__22880__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__22880__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___22939 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22909){var state_val_22910 = (state_22909[1]);if((state_val_22910 === 1))
{var state_22909__$1 = state_22909;var statearr_22911_22940 = state_22909__$1;(statearr_22911_22940[2] = null);
(statearr_22911_22940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 2))
{var state_22909__$1 = state_22909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22909__$1,4,ch);
} else
{if((state_val_22910 === 3))
{var inst_22907 = (state_22909[2]);var state_22909__$1 = state_22909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22909__$1,inst_22907);
} else
{if((state_val_22910 === 4))
{var inst_22883 = (state_22909[7]);var inst_22883__$1 = (state_22909[2]);var state_22909__$1 = (function (){var statearr_22912 = state_22909;(statearr_22912[7] = inst_22883__$1);
return statearr_22912;
})();if(cljs.core.truth_(inst_22883__$1))
{var statearr_22913_22941 = state_22909__$1;(statearr_22913_22941[1] = 5);
} else
{var statearr_22914_22942 = state_22909__$1;(statearr_22914_22942[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 5))
{var state_22909__$1 = state_22909;if(cljs.core.truth_(delay))
{var statearr_22915_22943 = state_22909__$1;(statearr_22915_22943[1] = 8);
} else
{var statearr_22916_22944 = state_22909__$1;(statearr_22916_22944[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 6))
{var state_22909__$1 = state_22909;var statearr_22917_22945 = state_22909__$1;(statearr_22917_22945[2] = null);
(statearr_22917_22945[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 7))
{var inst_22900 = (state_22909[2]);var state_22909__$1 = state_22909;if(cljs.core.truth_(inst_22900))
{var statearr_22918_22946 = state_22909__$1;(statearr_22918_22946[1] = 15);
} else
{var statearr_22919_22947 = state_22909__$1;(statearr_22919_22947[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 8))
{var inst_22886 = cljs.core.async.timeout.call(null,delay);var state_22909__$1 = state_22909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22909__$1,11,inst_22886);
} else
{if((state_val_22910 === 9))
{var state_22909__$1 = state_22909;var statearr_22920_22948 = state_22909__$1;(statearr_22920_22948[2] = null);
(statearr_22920_22948[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 10))
{var inst_22891 = (state_22909[2]);var state_22909__$1 = (function (){var statearr_22921 = state_22909;(statearr_22921[8] = inst_22891);
return statearr_22921;
})();if(cljs.core.truth_(log))
{var statearr_22922_22949 = state_22909__$1;(statearr_22922_22949[1] = 12);
} else
{var statearr_22923_22950 = state_22909__$1;(statearr_22923_22950[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 11))
{var inst_22888 = (state_22909[2]);var state_22909__$1 = state_22909;var statearr_22924_22951 = state_22909__$1;(statearr_22924_22951[2] = inst_22888);
(statearr_22924_22951[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 12))
{var inst_22883 = (state_22909[7]);var inst_22893 = cljs.core.clj__GT_js.call(null,inst_22883);var inst_22894 = console.log(inst_22893);var state_22909__$1 = state_22909;var statearr_22925_22952 = state_22909__$1;(statearr_22925_22952[2] = inst_22894);
(statearr_22925_22952[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 13))
{var state_22909__$1 = state_22909;var statearr_22926_22953 = state_22909__$1;(statearr_22926_22953[2] = null);
(statearr_22926_22953[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 14))
{var inst_22883 = (state_22909[7]);var inst_22897 = (state_22909[2]);var state_22909__$1 = (function (){var statearr_22927 = state_22909;(statearr_22927[9] = inst_22897);
return statearr_22927;
})();var statearr_22928_22954 = state_22909__$1;(statearr_22928_22954[2] = inst_22883);
(statearr_22928_22954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 15))
{var state_22909__$1 = state_22909;var statearr_22929_22955 = state_22909__$1;(statearr_22929_22955[2] = null);
(statearr_22929_22955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 16))
{var state_22909__$1 = state_22909;var statearr_22930_22956 = state_22909__$1;(statearr_22930_22956[2] = null);
(statearr_22930_22956[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22910 === 17))
{var inst_22905 = (state_22909[2]);var state_22909__$1 = state_22909;var statearr_22931_22957 = state_22909__$1;(statearr_22931_22957[2] = inst_22905);
(statearr_22931_22957[1] = 3);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22935 = [null,null,null,null,null,null,null,null,null,null];(statearr_22935[0] = state_machine__5548__auto__);
(statearr_22935[1] = 1);
return statearr_22935;
});
var state_machine__5548__auto____1 = (function (state_22909){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22909);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22936){if((e22936 instanceof Object))
{var ex__5551__auto__ = e22936;var statearr_22937_22958 = state_22909;(statearr_22937_22958[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22936;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22959 = state_22909;
state_22909 = G__22959;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22909){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22938 = f__5563__auto__.call(null);(statearr_22938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___22939);
return statearr_22938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22820 = null;if (arguments.length > 1) {
  p__22820 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22820);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22960){
var ch = cljs.core.first(arglist__22960);
var p__22820 = cljs.core.rest(arglist__22960);
return dorun_async__delegate(ch,p__22820);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map