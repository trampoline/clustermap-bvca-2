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
map_async.cljs$lang$applyTo = (function (arglist__11832){
var f = cljs.core.first(arglist__11832);
var colls = cljs.core.rest(arglist__11832);
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
var dorun_async__delegate = function (ch,p__11833){var map__11893 = p__11833;var map__11893__$1 = ((cljs.core.seq_QMARK_.call(null,map__11893))?cljs.core.apply.call(null,cljs.core.hash_map,map__11893):map__11893);var delay = cljs.core.get.call(null,map__11893__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11893__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___11952 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11922){var state_val_11923 = (state_11922[1]);if((state_val_11923 === 1))
{var state_11922__$1 = state_11922;var statearr_11924_11953 = state_11922__$1;(statearr_11924_11953[2] = null);
(statearr_11924_11953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 2))
{var state_11922__$1 = state_11922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11922__$1,4,ch);
} else
{if((state_val_11923 === 3))
{var inst_11920 = (state_11922[2]);var state_11922__$1 = state_11922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11922__$1,inst_11920);
} else
{if((state_val_11923 === 4))
{var inst_11896 = (state_11922[7]);var inst_11896__$1 = (state_11922[2]);var state_11922__$1 = (function (){var statearr_11925 = state_11922;(statearr_11925[7] = inst_11896__$1);
return statearr_11925;
})();if(cljs.core.truth_(inst_11896__$1))
{var statearr_11926_11954 = state_11922__$1;(statearr_11926_11954[1] = 5);
} else
{var statearr_11927_11955 = state_11922__$1;(statearr_11927_11955[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 5))
{var state_11922__$1 = state_11922;if(cljs.core.truth_(delay))
{var statearr_11928_11956 = state_11922__$1;(statearr_11928_11956[1] = 8);
} else
{var statearr_11929_11957 = state_11922__$1;(statearr_11929_11957[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 6))
{var state_11922__$1 = state_11922;var statearr_11930_11958 = state_11922__$1;(statearr_11930_11958[2] = null);
(statearr_11930_11958[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 7))
{var inst_11913 = (state_11922[2]);var state_11922__$1 = state_11922;if(cljs.core.truth_(inst_11913))
{var statearr_11931_11959 = state_11922__$1;(statearr_11931_11959[1] = 15);
} else
{var statearr_11932_11960 = state_11922__$1;(statearr_11932_11960[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 8))
{var inst_11899 = cljs.core.async.timeout.call(null,delay);var state_11922__$1 = state_11922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11922__$1,11,inst_11899);
} else
{if((state_val_11923 === 9))
{var state_11922__$1 = state_11922;var statearr_11933_11961 = state_11922__$1;(statearr_11933_11961[2] = null);
(statearr_11933_11961[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 10))
{var inst_11904 = (state_11922[2]);var state_11922__$1 = (function (){var statearr_11934 = state_11922;(statearr_11934[8] = inst_11904);
return statearr_11934;
})();if(cljs.core.truth_(log))
{var statearr_11935_11962 = state_11922__$1;(statearr_11935_11962[1] = 12);
} else
{var statearr_11936_11963 = state_11922__$1;(statearr_11936_11963[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 11))
{var inst_11901 = (state_11922[2]);var state_11922__$1 = state_11922;var statearr_11937_11964 = state_11922__$1;(statearr_11937_11964[2] = inst_11901);
(statearr_11937_11964[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 12))
{var inst_11896 = (state_11922[7]);var inst_11906 = cljs.core.clj__GT_js.call(null,inst_11896);var inst_11907 = console.log(inst_11906);var state_11922__$1 = state_11922;var statearr_11938_11965 = state_11922__$1;(statearr_11938_11965[2] = inst_11907);
(statearr_11938_11965[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 13))
{var state_11922__$1 = state_11922;var statearr_11939_11966 = state_11922__$1;(statearr_11939_11966[2] = null);
(statearr_11939_11966[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 14))
{var inst_11896 = (state_11922[7]);var inst_11910 = (state_11922[2]);var state_11922__$1 = (function (){var statearr_11940 = state_11922;(statearr_11940[9] = inst_11910);
return statearr_11940;
})();var statearr_11941_11967 = state_11922__$1;(statearr_11941_11967[2] = inst_11896);
(statearr_11941_11967[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 15))
{var state_11922__$1 = state_11922;var statearr_11942_11968 = state_11922__$1;(statearr_11942_11968[2] = null);
(statearr_11942_11968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 16))
{var state_11922__$1 = state_11922;var statearr_11943_11969 = state_11922__$1;(statearr_11943_11969[2] = null);
(statearr_11943_11969[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11923 === 17))
{var inst_11918 = (state_11922[2]);var state_11922__$1 = state_11922;var statearr_11944_11970 = state_11922__$1;(statearr_11944_11970[2] = inst_11918);
(statearr_11944_11970[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_11948 = [null,null,null,null,null,null,null,null,null,null];(statearr_11948[0] = state_machine__5548__auto__);
(statearr_11948[1] = 1);
return statearr_11948;
});
var state_machine__5548__auto____1 = (function (state_11922){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11922);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11949){if((e11949 instanceof Object))
{var ex__5551__auto__ = e11949;var statearr_11950_11971 = state_11922;(statearr_11950_11971[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11922);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11972 = state_11922;
state_11922 = G__11972;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11922){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11951 = f__5563__auto__.call(null);(statearr_11951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___11952);
return statearr_11951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11833 = null;if (arguments.length > 1) {
  p__11833 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11833);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11973){
var ch = cljs.core.first(arglist__11973);
var p__11833 = cljs.core.rest(arglist__11973);
return dorun_async__delegate(ch,p__11833);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
