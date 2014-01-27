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
map_async.cljs$lang$applyTo = (function (arglist__10911){
var f = cljs.core.first(arglist__10911);
var colls = cljs.core.rest(arglist__10911);
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
var dorun_async__delegate = function (ch,p__10912){var map__10972 = p__10912;var map__10972__$1 = ((cljs.core.seq_QMARK_.call(null,map__10972))?cljs.core.apply.call(null,cljs.core.hash_map,map__10972):map__10972);var delay = cljs.core.get.call(null,map__10972__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10972__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11031 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11001){var state_val_11002 = (state_11001[1]);if((state_val_11002 === 1))
{var state_11001__$1 = state_11001;var statearr_11003_11032 = state_11001__$1;(statearr_11003_11032[2] = null);
(statearr_11003_11032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 2))
{var state_11001__$1 = state_11001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11001__$1,4,ch);
} else
{if((state_val_11002 === 3))
{var inst_10999 = (state_11001[2]);var state_11001__$1 = state_11001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11001__$1,inst_10999);
} else
{if((state_val_11002 === 4))
{var inst_10975 = (state_11001[7]);var inst_10975__$1 = (state_11001[2]);var state_11001__$1 = (function (){var statearr_11004 = state_11001;(statearr_11004[7] = inst_10975__$1);
return statearr_11004;
})();if(cljs.core.truth_(inst_10975__$1))
{var statearr_11005_11033 = state_11001__$1;(statearr_11005_11033[1] = 5);
} else
{var statearr_11006_11034 = state_11001__$1;(statearr_11006_11034[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 5))
{var state_11001__$1 = state_11001;if(cljs.core.truth_(delay))
{var statearr_11007_11035 = state_11001__$1;(statearr_11007_11035[1] = 8);
} else
{var statearr_11008_11036 = state_11001__$1;(statearr_11008_11036[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 6))
{var state_11001__$1 = state_11001;var statearr_11009_11037 = state_11001__$1;(statearr_11009_11037[2] = null);
(statearr_11009_11037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 7))
{var inst_10992 = (state_11001[2]);var state_11001__$1 = state_11001;if(cljs.core.truth_(inst_10992))
{var statearr_11010_11038 = state_11001__$1;(statearr_11010_11038[1] = 15);
} else
{var statearr_11011_11039 = state_11001__$1;(statearr_11011_11039[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 8))
{var inst_10978 = cljs.core.async.timeout.call(null,delay);var state_11001__$1 = state_11001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11001__$1,11,inst_10978);
} else
{if((state_val_11002 === 9))
{var state_11001__$1 = state_11001;var statearr_11012_11040 = state_11001__$1;(statearr_11012_11040[2] = null);
(statearr_11012_11040[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 10))
{var inst_10983 = (state_11001[2]);var state_11001__$1 = (function (){var statearr_11013 = state_11001;(statearr_11013[8] = inst_10983);
return statearr_11013;
})();if(cljs.core.truth_(log))
{var statearr_11014_11041 = state_11001__$1;(statearr_11014_11041[1] = 12);
} else
{var statearr_11015_11042 = state_11001__$1;(statearr_11015_11042[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 11))
{var inst_10980 = (state_11001[2]);var state_11001__$1 = state_11001;var statearr_11016_11043 = state_11001__$1;(statearr_11016_11043[2] = inst_10980);
(statearr_11016_11043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 12))
{var inst_10975 = (state_11001[7]);var inst_10985 = cljs.core.clj__GT_js.call(null,inst_10975);var inst_10986 = console.log(inst_10985);var state_11001__$1 = state_11001;var statearr_11017_11044 = state_11001__$1;(statearr_11017_11044[2] = inst_10986);
(statearr_11017_11044[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 13))
{var state_11001__$1 = state_11001;var statearr_11018_11045 = state_11001__$1;(statearr_11018_11045[2] = null);
(statearr_11018_11045[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 14))
{var inst_10975 = (state_11001[7]);var inst_10989 = (state_11001[2]);var state_11001__$1 = (function (){var statearr_11019 = state_11001;(statearr_11019[9] = inst_10989);
return statearr_11019;
})();var statearr_11020_11046 = state_11001__$1;(statearr_11020_11046[2] = inst_10975);
(statearr_11020_11046[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 15))
{var state_11001__$1 = state_11001;var statearr_11021_11047 = state_11001__$1;(statearr_11021_11047[2] = null);
(statearr_11021_11047[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 16))
{var state_11001__$1 = state_11001;var statearr_11022_11048 = state_11001__$1;(statearr_11022_11048[2] = null);
(statearr_11022_11048[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 17))
{var inst_10997 = (state_11001[2]);var state_11001__$1 = state_11001;var statearr_11023_11049 = state_11001__$1;(statearr_11023_11049[2] = inst_10997);
(statearr_11023_11049[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11027 = [null,null,null,null,null,null,null,null,null,null];(statearr_11027[0] = state_machine__5507__auto__);
(statearr_11027[1] = 1);
return statearr_11027;
});
var state_machine__5507__auto____1 = (function (state_11001){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11001);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11028){if((e11028 instanceof Object))
{var ex__5510__auto__ = e11028;var statearr_11029_11050 = state_11001;(statearr_11029_11050[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11001);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11051 = state_11001;
state_11001 = G__11051;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11001){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11030 = f__5522__auto__.call(null);(statearr_11030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11031);
return statearr_11030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10912 = null;if (arguments.length > 1) {
  p__10912 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10912);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11052){
var ch = cljs.core.first(arglist__11052);
var p__10912 = cljs.core.rest(arglist__11052);
return dorun_async__delegate(ch,p__10912);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map