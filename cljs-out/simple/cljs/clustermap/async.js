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
map_async.cljs$lang$applyTo = (function (arglist__11818){
var f = cljs.core.first(arglist__11818);
var colls = cljs.core.rest(arglist__11818);
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
var dorun_async__delegate = function (ch,p__11819){var map__11879 = p__11819;var map__11879__$1 = ((cljs.core.seq_QMARK_.call(null,map__11879))?cljs.core.apply.call(null,cljs.core.hash_map,map__11879):map__11879);var delay = cljs.core.get.call(null,map__11879__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11879__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___11938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11908){var state_val_11909 = (state_11908[1]);if((state_val_11909 === 1))
{var state_11908__$1 = state_11908;var statearr_11910_11939 = state_11908__$1;(statearr_11910_11939[2] = null);
(statearr_11910_11939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 2))
{var state_11908__$1 = state_11908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11908__$1,4,ch);
} else
{if((state_val_11909 === 3))
{var inst_11906 = (state_11908[2]);var state_11908__$1 = state_11908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11908__$1,inst_11906);
} else
{if((state_val_11909 === 4))
{var inst_11882 = (state_11908[7]);var inst_11882__$1 = (state_11908[2]);var state_11908__$1 = (function (){var statearr_11911 = state_11908;(statearr_11911[7] = inst_11882__$1);
return statearr_11911;
})();if(cljs.core.truth_(inst_11882__$1))
{var statearr_11912_11940 = state_11908__$1;(statearr_11912_11940[1] = 5);
} else
{var statearr_11913_11941 = state_11908__$1;(statearr_11913_11941[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 5))
{var state_11908__$1 = state_11908;if(cljs.core.truth_(delay))
{var statearr_11914_11942 = state_11908__$1;(statearr_11914_11942[1] = 8);
} else
{var statearr_11915_11943 = state_11908__$1;(statearr_11915_11943[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 6))
{var state_11908__$1 = state_11908;var statearr_11916_11944 = state_11908__$1;(statearr_11916_11944[2] = null);
(statearr_11916_11944[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 7))
{var inst_11899 = (state_11908[2]);var state_11908__$1 = state_11908;if(cljs.core.truth_(inst_11899))
{var statearr_11917_11945 = state_11908__$1;(statearr_11917_11945[1] = 15);
} else
{var statearr_11918_11946 = state_11908__$1;(statearr_11918_11946[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 8))
{var inst_11885 = cljs.core.async.timeout.call(null,delay);var state_11908__$1 = state_11908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11908__$1,11,inst_11885);
} else
{if((state_val_11909 === 9))
{var state_11908__$1 = state_11908;var statearr_11919_11947 = state_11908__$1;(statearr_11919_11947[2] = null);
(statearr_11919_11947[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 10))
{var inst_11890 = (state_11908[2]);var state_11908__$1 = (function (){var statearr_11920 = state_11908;(statearr_11920[8] = inst_11890);
return statearr_11920;
})();if(cljs.core.truth_(log))
{var statearr_11921_11948 = state_11908__$1;(statearr_11921_11948[1] = 12);
} else
{var statearr_11922_11949 = state_11908__$1;(statearr_11922_11949[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 11))
{var inst_11887 = (state_11908[2]);var state_11908__$1 = state_11908;var statearr_11923_11950 = state_11908__$1;(statearr_11923_11950[2] = inst_11887);
(statearr_11923_11950[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 12))
{var inst_11882 = (state_11908[7]);var inst_11892 = cljs.core.clj__GT_js.call(null,inst_11882);var inst_11893 = console.log(inst_11892);var state_11908__$1 = state_11908;var statearr_11924_11951 = state_11908__$1;(statearr_11924_11951[2] = inst_11893);
(statearr_11924_11951[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 13))
{var state_11908__$1 = state_11908;var statearr_11925_11952 = state_11908__$1;(statearr_11925_11952[2] = null);
(statearr_11925_11952[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 14))
{var inst_11882 = (state_11908[7]);var inst_11896 = (state_11908[2]);var state_11908__$1 = (function (){var statearr_11926 = state_11908;(statearr_11926[9] = inst_11896);
return statearr_11926;
})();var statearr_11927_11953 = state_11908__$1;(statearr_11927_11953[2] = inst_11882);
(statearr_11927_11953[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 15))
{var state_11908__$1 = state_11908;var statearr_11928_11954 = state_11908__$1;(statearr_11928_11954[2] = null);
(statearr_11928_11954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 16))
{var state_11908__$1 = state_11908;var statearr_11929_11955 = state_11908__$1;(statearr_11929_11955[2] = null);
(statearr_11929_11955[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11909 === 17))
{var inst_11904 = (state_11908[2]);var state_11908__$1 = state_11908;var statearr_11930_11956 = state_11908__$1;(statearr_11930_11956[2] = inst_11904);
(statearr_11930_11956[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_11934 = [null,null,null,null,null,null,null,null,null,null];(statearr_11934[0] = state_machine__5548__auto__);
(statearr_11934[1] = 1);
return statearr_11934;
});
var state_machine__5548__auto____1 = (function (state_11908){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11908);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11935){if((e11935 instanceof Object))
{var ex__5551__auto__ = e11935;var statearr_11936_11957 = state_11908;(statearr_11936_11957[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11958 = state_11908;
state_11908 = G__11958;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11908){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11937 = f__5563__auto__.call(null);(statearr_11937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___11938);
return statearr_11937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11819 = null;if (arguments.length > 1) {
  p__11819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11819);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11959){
var ch = cljs.core.first(arglist__11959);
var p__11819 = cljs.core.rest(arglist__11959);
return dorun_async__delegate(ch,p__11819);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
