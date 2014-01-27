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
map_async.cljs$lang$applyTo = (function (arglist__10828){
var f = cljs.core.first(arglist__10828);
var colls = cljs.core.rest(arglist__10828);
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
var dorun_async__delegate = function (ch,p__10829){var map__10889 = p__10829;var map__10889__$1 = ((cljs.core.seq_QMARK_.call(null,map__10889))?cljs.core.apply.call(null,cljs.core.hash_map,map__10889):map__10889);var delay = cljs.core.get.call(null,map__10889__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10889__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10948 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10918){var state_val_10919 = (state_10918[1]);if((state_val_10919 === 1))
{var state_10918__$1 = state_10918;var statearr_10920_10949 = state_10918__$1;(statearr_10920_10949[2] = null);
(statearr_10920_10949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 2))
{var state_10918__$1 = state_10918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10918__$1,4,ch);
} else
{if((state_val_10919 === 3))
{var inst_10916 = (state_10918[2]);var state_10918__$1 = state_10918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10918__$1,inst_10916);
} else
{if((state_val_10919 === 4))
{var inst_10892 = (state_10918[7]);var inst_10892__$1 = (state_10918[2]);var state_10918__$1 = (function (){var statearr_10921 = state_10918;(statearr_10921[7] = inst_10892__$1);
return statearr_10921;
})();if(cljs.core.truth_(inst_10892__$1))
{var statearr_10922_10950 = state_10918__$1;(statearr_10922_10950[1] = 5);
} else
{var statearr_10923_10951 = state_10918__$1;(statearr_10923_10951[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 5))
{var state_10918__$1 = state_10918;if(cljs.core.truth_(delay))
{var statearr_10924_10952 = state_10918__$1;(statearr_10924_10952[1] = 8);
} else
{var statearr_10925_10953 = state_10918__$1;(statearr_10925_10953[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 6))
{var state_10918__$1 = state_10918;var statearr_10926_10954 = state_10918__$1;(statearr_10926_10954[2] = null);
(statearr_10926_10954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 7))
{var inst_10909 = (state_10918[2]);var state_10918__$1 = state_10918;if(cljs.core.truth_(inst_10909))
{var statearr_10927_10955 = state_10918__$1;(statearr_10927_10955[1] = 15);
} else
{var statearr_10928_10956 = state_10918__$1;(statearr_10928_10956[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 8))
{var inst_10895 = cljs.core.async.timeout.call(null,delay);var state_10918__$1 = state_10918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10918__$1,11,inst_10895);
} else
{if((state_val_10919 === 9))
{var state_10918__$1 = state_10918;var statearr_10929_10957 = state_10918__$1;(statearr_10929_10957[2] = null);
(statearr_10929_10957[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 10))
{var inst_10900 = (state_10918[2]);var state_10918__$1 = (function (){var statearr_10930 = state_10918;(statearr_10930[8] = inst_10900);
return statearr_10930;
})();if(cljs.core.truth_(log))
{var statearr_10931_10958 = state_10918__$1;(statearr_10931_10958[1] = 12);
} else
{var statearr_10932_10959 = state_10918__$1;(statearr_10932_10959[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 11))
{var inst_10897 = (state_10918[2]);var state_10918__$1 = state_10918;var statearr_10933_10960 = state_10918__$1;(statearr_10933_10960[2] = inst_10897);
(statearr_10933_10960[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 12))
{var inst_10892 = (state_10918[7]);var inst_10902 = cljs.core.clj__GT_js.call(null,inst_10892);var inst_10903 = console.log(inst_10902);var state_10918__$1 = state_10918;var statearr_10934_10961 = state_10918__$1;(statearr_10934_10961[2] = inst_10903);
(statearr_10934_10961[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 13))
{var state_10918__$1 = state_10918;var statearr_10935_10962 = state_10918__$1;(statearr_10935_10962[2] = null);
(statearr_10935_10962[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 14))
{var inst_10892 = (state_10918[7]);var inst_10906 = (state_10918[2]);var state_10918__$1 = (function (){var statearr_10936 = state_10918;(statearr_10936[9] = inst_10906);
return statearr_10936;
})();var statearr_10937_10963 = state_10918__$1;(statearr_10937_10963[2] = inst_10892);
(statearr_10937_10963[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 15))
{var state_10918__$1 = state_10918;var statearr_10938_10964 = state_10918__$1;(statearr_10938_10964[2] = null);
(statearr_10938_10964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 16))
{var state_10918__$1 = state_10918;var statearr_10939_10965 = state_10918__$1;(statearr_10939_10965[2] = null);
(statearr_10939_10965[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10919 === 17))
{var inst_10914 = (state_10918[2]);var state_10918__$1 = state_10918;var statearr_10940_10966 = state_10918__$1;(statearr_10940_10966[2] = inst_10914);
(statearr_10940_10966[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10944 = [null,null,null,null,null,null,null,null,null,null];(statearr_10944[0] = state_machine__5507__auto__);
(statearr_10944[1] = 1);
return statearr_10944;
});
var state_machine__5507__auto____1 = (function (state_10918){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10918);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10945){if((e10945 instanceof Object))
{var ex__5510__auto__ = e10945;var statearr_10946_10967 = state_10918;(statearr_10946_10967[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10918);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10968 = state_10918;
state_10918 = G__10968;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10918){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10947 = f__5522__auto__.call(null);(statearr_10947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10948);
return statearr_10947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10829 = null;if (arguments.length > 1) {
  p__10829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10829);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10969){
var ch = cljs.core.first(arglist__10969);
var p__10829 = cljs.core.rest(arglist__10969);
return dorun_async__delegate(ch,p__10829);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map