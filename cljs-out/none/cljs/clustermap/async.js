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
map_async.cljs$lang$applyTo = (function (arglist__22825){
var f = cljs.core.first(arglist__22825);
var colls = cljs.core.rest(arglist__22825);
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
var dorun_async__delegate = function (ch,p__22826){var map__22886 = p__22826;var map__22886__$1 = ((cljs.core.seq_QMARK_.call(null,map__22886))?cljs.core.apply.call(null,cljs.core.hash_map,map__22886):map__22886);var delay = cljs.core.get.call(null,map__22886__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__22886__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___22945 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22915){var state_val_22916 = (state_22915[1]);if((state_val_22916 === 1))
{var state_22915__$1 = state_22915;var statearr_22917_22946 = state_22915__$1;(statearr_22917_22946[2] = null);
(statearr_22917_22946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 2))
{var state_22915__$1 = state_22915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22915__$1,4,ch);
} else
{if((state_val_22916 === 3))
{var inst_22913 = (state_22915[2]);var state_22915__$1 = state_22915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22915__$1,inst_22913);
} else
{if((state_val_22916 === 4))
{var inst_22889 = (state_22915[7]);var inst_22889__$1 = (state_22915[2]);var state_22915__$1 = (function (){var statearr_22918 = state_22915;(statearr_22918[7] = inst_22889__$1);
return statearr_22918;
})();if(cljs.core.truth_(inst_22889__$1))
{var statearr_22919_22947 = state_22915__$1;(statearr_22919_22947[1] = 5);
} else
{var statearr_22920_22948 = state_22915__$1;(statearr_22920_22948[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 5))
{var state_22915__$1 = state_22915;if(cljs.core.truth_(delay))
{var statearr_22921_22949 = state_22915__$1;(statearr_22921_22949[1] = 8);
} else
{var statearr_22922_22950 = state_22915__$1;(statearr_22922_22950[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 6))
{var state_22915__$1 = state_22915;var statearr_22923_22951 = state_22915__$1;(statearr_22923_22951[2] = null);
(statearr_22923_22951[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 7))
{var inst_22906 = (state_22915[2]);var state_22915__$1 = state_22915;if(cljs.core.truth_(inst_22906))
{var statearr_22924_22952 = state_22915__$1;(statearr_22924_22952[1] = 15);
} else
{var statearr_22925_22953 = state_22915__$1;(statearr_22925_22953[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 8))
{var inst_22892 = cljs.core.async.timeout.call(null,delay);var state_22915__$1 = state_22915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22915__$1,11,inst_22892);
} else
{if((state_val_22916 === 9))
{var state_22915__$1 = state_22915;var statearr_22926_22954 = state_22915__$1;(statearr_22926_22954[2] = null);
(statearr_22926_22954[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 10))
{var inst_22897 = (state_22915[2]);var state_22915__$1 = (function (){var statearr_22927 = state_22915;(statearr_22927[8] = inst_22897);
return statearr_22927;
})();if(cljs.core.truth_(log))
{var statearr_22928_22955 = state_22915__$1;(statearr_22928_22955[1] = 12);
} else
{var statearr_22929_22956 = state_22915__$1;(statearr_22929_22956[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 11))
{var inst_22894 = (state_22915[2]);var state_22915__$1 = state_22915;var statearr_22930_22957 = state_22915__$1;(statearr_22930_22957[2] = inst_22894);
(statearr_22930_22957[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 12))
{var inst_22889 = (state_22915[7]);var inst_22899 = cljs.core.clj__GT_js.call(null,inst_22889);var inst_22900 = console.log(inst_22899);var state_22915__$1 = state_22915;var statearr_22931_22958 = state_22915__$1;(statearr_22931_22958[2] = inst_22900);
(statearr_22931_22958[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 13))
{var state_22915__$1 = state_22915;var statearr_22932_22959 = state_22915__$1;(statearr_22932_22959[2] = null);
(statearr_22932_22959[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 14))
{var inst_22889 = (state_22915[7]);var inst_22903 = (state_22915[2]);var state_22915__$1 = (function (){var statearr_22933 = state_22915;(statearr_22933[9] = inst_22903);
return statearr_22933;
})();var statearr_22934_22960 = state_22915__$1;(statearr_22934_22960[2] = inst_22889);
(statearr_22934_22960[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 15))
{var state_22915__$1 = state_22915;var statearr_22935_22961 = state_22915__$1;(statearr_22935_22961[2] = null);
(statearr_22935_22961[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 16))
{var state_22915__$1 = state_22915;var statearr_22936_22962 = state_22915__$1;(statearr_22936_22962[2] = null);
(statearr_22936_22962[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22916 === 17))
{var inst_22911 = (state_22915[2]);var state_22915__$1 = state_22915;var statearr_22937_22963 = state_22915__$1;(statearr_22937_22963[2] = inst_22911);
(statearr_22937_22963[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_22941 = [null,null,null,null,null,null,null,null,null,null];(statearr_22941[0] = state_machine__5548__auto__);
(statearr_22941[1] = 1);
return statearr_22941;
});
var state_machine__5548__auto____1 = (function (state_22915){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22915);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22942){if((e22942 instanceof Object))
{var ex__5551__auto__ = e22942;var statearr_22943_22964 = state_22915;(statearr_22943_22964[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22915);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22965 = state_22915;
state_22915 = G__22965;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22915){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22944 = f__5563__auto__.call(null);(statearr_22944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___22945);
return statearr_22944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22826 = null;if (arguments.length > 1) {
  p__22826 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22826);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22966){
var ch = cljs.core.first(arglist__22966);
var p__22826 = cljs.core.rest(arglist__22966);
return dorun_async__delegate(ch,p__22826);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map