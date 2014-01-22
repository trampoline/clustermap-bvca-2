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
map_async.cljs$lang$applyTo = (function (arglist__10894){
var f = cljs.core.first(arglist__10894);
var colls = cljs.core.rest(arglist__10894);
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
var dorun_async__delegate = function (ch,p__10895){var map__10955 = p__10895;var map__10955__$1 = ((cljs.core.seq_QMARK_.call(null,map__10955))?cljs.core.apply.call(null,cljs.core.hash_map,map__10955):map__10955);var delay = cljs.core.get.call(null,map__10955__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10955__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11014 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10984){var state_val_10985 = (state_10984[1]);if((state_val_10985 === 1))
{var state_10984__$1 = state_10984;var statearr_10986_11015 = state_10984__$1;(statearr_10986_11015[2] = null);
(statearr_10986_11015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 2))
{var state_10984__$1 = state_10984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10984__$1,4,ch);
} else
{if((state_val_10985 === 3))
{var inst_10982 = (state_10984[2]);var state_10984__$1 = state_10984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10984__$1,inst_10982);
} else
{if((state_val_10985 === 4))
{var inst_10958 = (state_10984[7]);var inst_10958__$1 = (state_10984[2]);var state_10984__$1 = (function (){var statearr_10987 = state_10984;(statearr_10987[7] = inst_10958__$1);
return statearr_10987;
})();if(cljs.core.truth_(inst_10958__$1))
{var statearr_10988_11016 = state_10984__$1;(statearr_10988_11016[1] = 5);
} else
{var statearr_10989_11017 = state_10984__$1;(statearr_10989_11017[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 5))
{var state_10984__$1 = state_10984;if(cljs.core.truth_(delay))
{var statearr_10990_11018 = state_10984__$1;(statearr_10990_11018[1] = 8);
} else
{var statearr_10991_11019 = state_10984__$1;(statearr_10991_11019[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 6))
{var state_10984__$1 = state_10984;var statearr_10992_11020 = state_10984__$1;(statearr_10992_11020[2] = null);
(statearr_10992_11020[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 7))
{var inst_10975 = (state_10984[2]);var state_10984__$1 = state_10984;if(cljs.core.truth_(inst_10975))
{var statearr_10993_11021 = state_10984__$1;(statearr_10993_11021[1] = 15);
} else
{var statearr_10994_11022 = state_10984__$1;(statearr_10994_11022[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 8))
{var inst_10961 = cljs.core.async.timeout.call(null,delay);var state_10984__$1 = state_10984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10984__$1,11,inst_10961);
} else
{if((state_val_10985 === 9))
{var state_10984__$1 = state_10984;var statearr_10995_11023 = state_10984__$1;(statearr_10995_11023[2] = null);
(statearr_10995_11023[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 10))
{var inst_10966 = (state_10984[2]);var state_10984__$1 = (function (){var statearr_10996 = state_10984;(statearr_10996[8] = inst_10966);
return statearr_10996;
})();if(cljs.core.truth_(log))
{var statearr_10997_11024 = state_10984__$1;(statearr_10997_11024[1] = 12);
} else
{var statearr_10998_11025 = state_10984__$1;(statearr_10998_11025[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 11))
{var inst_10963 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_10999_11026 = state_10984__$1;(statearr_10999_11026[2] = inst_10963);
(statearr_10999_11026[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 12))
{var inst_10958 = (state_10984[7]);var inst_10968 = cljs.core.clj__GT_js.call(null,inst_10958);var inst_10969 = console.log(inst_10968);var state_10984__$1 = state_10984;var statearr_11000_11027 = state_10984__$1;(statearr_11000_11027[2] = inst_10969);
(statearr_11000_11027[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 13))
{var state_10984__$1 = state_10984;var statearr_11001_11028 = state_10984__$1;(statearr_11001_11028[2] = null);
(statearr_11001_11028[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 14))
{var inst_10958 = (state_10984[7]);var inst_10972 = (state_10984[2]);var state_10984__$1 = (function (){var statearr_11002 = state_10984;(statearr_11002[9] = inst_10972);
return statearr_11002;
})();var statearr_11003_11029 = state_10984__$1;(statearr_11003_11029[2] = inst_10958);
(statearr_11003_11029[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 15))
{var state_10984__$1 = state_10984;var statearr_11004_11030 = state_10984__$1;(statearr_11004_11030[2] = null);
(statearr_11004_11030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 16))
{var state_10984__$1 = state_10984;var statearr_11005_11031 = state_10984__$1;(statearr_11005_11031[2] = null);
(statearr_11005_11031[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 17))
{var inst_10980 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11006_11032 = state_10984__$1;(statearr_11006_11032[2] = inst_10980);
(statearr_11006_11032[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11010 = [null,null,null,null,null,null,null,null,null,null];(statearr_11010[0] = state_machine__5507__auto__);
(statearr_11010[1] = 1);
return statearr_11010;
});
var state_machine__5507__auto____1 = (function (state_10984){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11011){if((e11011 instanceof Object))
{var ex__5510__auto__ = e11011;var statearr_11012_11033 = state_10984;(statearr_11012_11033[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11034 = state_10984;
state_10984 = G__11034;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10984){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11013 = f__5522__auto__.call(null);(statearr_11013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11014);
return statearr_11013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10895 = null;if (arguments.length > 1) {
  p__10895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10895);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11035){
var ch = cljs.core.first(arglist__11035);
var p__10895 = cljs.core.rest(arglist__11035);
return dorun_async__delegate(ch,p__10895);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map