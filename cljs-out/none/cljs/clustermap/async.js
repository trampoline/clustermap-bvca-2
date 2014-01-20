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
map_async.cljs$lang$applyTo = (function (arglist__10861){
var f = cljs.core.first(arglist__10861);
var colls = cljs.core.rest(arglist__10861);
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
var dorun_async__delegate = function (ch,p__10862){var map__10922 = p__10862;var map__10922__$1 = ((cljs.core.seq_QMARK_.call(null,map__10922))?cljs.core.apply.call(null,cljs.core.hash_map,map__10922):map__10922);var delay = cljs.core.get.call(null,map__10922__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10922__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10981 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10951){var state_val_10952 = (state_10951[1]);if((state_val_10952 === 1))
{var state_10951__$1 = state_10951;var statearr_10953_10982 = state_10951__$1;(statearr_10953_10982[2] = null);
(statearr_10953_10982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 2))
{var state_10951__$1 = state_10951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10951__$1,4,ch);
} else
{if((state_val_10952 === 3))
{var inst_10949 = (state_10951[2]);var state_10951__$1 = state_10951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10951__$1,inst_10949);
} else
{if((state_val_10952 === 4))
{var inst_10925 = (state_10951[7]);var inst_10925__$1 = (state_10951[2]);var state_10951__$1 = (function (){var statearr_10954 = state_10951;(statearr_10954[7] = inst_10925__$1);
return statearr_10954;
})();if(cljs.core.truth_(inst_10925__$1))
{var statearr_10955_10983 = state_10951__$1;(statearr_10955_10983[1] = 5);
} else
{var statearr_10956_10984 = state_10951__$1;(statearr_10956_10984[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 5))
{var state_10951__$1 = state_10951;if(cljs.core.truth_(delay))
{var statearr_10957_10985 = state_10951__$1;(statearr_10957_10985[1] = 8);
} else
{var statearr_10958_10986 = state_10951__$1;(statearr_10958_10986[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 6))
{var state_10951__$1 = state_10951;var statearr_10959_10987 = state_10951__$1;(statearr_10959_10987[2] = null);
(statearr_10959_10987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 7))
{var inst_10942 = (state_10951[2]);var state_10951__$1 = state_10951;if(cljs.core.truth_(inst_10942))
{var statearr_10960_10988 = state_10951__$1;(statearr_10960_10988[1] = 15);
} else
{var statearr_10961_10989 = state_10951__$1;(statearr_10961_10989[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 8))
{var inst_10928 = cljs.core.async.timeout.call(null,delay);var state_10951__$1 = state_10951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10951__$1,11,inst_10928);
} else
{if((state_val_10952 === 9))
{var state_10951__$1 = state_10951;var statearr_10962_10990 = state_10951__$1;(statearr_10962_10990[2] = null);
(statearr_10962_10990[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 10))
{var inst_10933 = (state_10951[2]);var state_10951__$1 = (function (){var statearr_10963 = state_10951;(statearr_10963[8] = inst_10933);
return statearr_10963;
})();if(cljs.core.truth_(log))
{var statearr_10964_10991 = state_10951__$1;(statearr_10964_10991[1] = 12);
} else
{var statearr_10965_10992 = state_10951__$1;(statearr_10965_10992[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 11))
{var inst_10930 = (state_10951[2]);var state_10951__$1 = state_10951;var statearr_10966_10993 = state_10951__$1;(statearr_10966_10993[2] = inst_10930);
(statearr_10966_10993[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 12))
{var inst_10925 = (state_10951[7]);var inst_10935 = cljs.core.clj__GT_js.call(null,inst_10925);var inst_10936 = console.log(inst_10935);var state_10951__$1 = state_10951;var statearr_10967_10994 = state_10951__$1;(statearr_10967_10994[2] = inst_10936);
(statearr_10967_10994[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 13))
{var state_10951__$1 = state_10951;var statearr_10968_10995 = state_10951__$1;(statearr_10968_10995[2] = null);
(statearr_10968_10995[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 14))
{var inst_10925 = (state_10951[7]);var inst_10939 = (state_10951[2]);var state_10951__$1 = (function (){var statearr_10969 = state_10951;(statearr_10969[9] = inst_10939);
return statearr_10969;
})();var statearr_10970_10996 = state_10951__$1;(statearr_10970_10996[2] = inst_10925);
(statearr_10970_10996[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 15))
{var state_10951__$1 = state_10951;var statearr_10971_10997 = state_10951__$1;(statearr_10971_10997[2] = null);
(statearr_10971_10997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 16))
{var state_10951__$1 = state_10951;var statearr_10972_10998 = state_10951__$1;(statearr_10972_10998[2] = null);
(statearr_10972_10998[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10952 === 17))
{var inst_10947 = (state_10951[2]);var state_10951__$1 = state_10951;var statearr_10973_10999 = state_10951__$1;(statearr_10973_10999[2] = inst_10947);
(statearr_10973_10999[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10977 = [null,null,null,null,null,null,null,null,null,null];(statearr_10977[0] = state_machine__5507__auto__);
(statearr_10977[1] = 1);
return statearr_10977;
});
var state_machine__5507__auto____1 = (function (state_10951){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10951);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10978){if((e10978 instanceof Object))
{var ex__5510__auto__ = e10978;var statearr_10979_11000 = state_10951;(statearr_10979_11000[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11001 = state_10951;
state_10951 = G__11001;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10951){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10980 = f__5522__auto__.call(null);(statearr_10980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10981);
return statearr_10980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10862 = null;if (arguments.length > 1) {
  p__10862 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10862);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11002){
var ch = cljs.core.first(arglist__11002);
var p__10862 = cljs.core.rest(arglist__11002);
return dorun_async__delegate(ch,p__10862);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map