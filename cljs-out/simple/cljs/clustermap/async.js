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
map_async.cljs$lang$applyTo = (function (arglist__11830){
var f = cljs.core.first(arglist__11830);
var colls = cljs.core.rest(arglist__11830);
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
var dorun_async__delegate = function (ch,p__11831){var map__11891 = p__11831;var map__11891__$1 = ((cljs.core.seq_QMARK_.call(null,map__11891))?cljs.core.apply.call(null,cljs.core.hash_map,map__11891):map__11891);var delay = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___11950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11920){var state_val_11921 = (state_11920[1]);if((state_val_11921 === 1))
{var state_11920__$1 = state_11920;var statearr_11922_11951 = state_11920__$1;(statearr_11922_11951[2] = null);
(statearr_11922_11951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 2))
{var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11920__$1,4,ch);
} else
{if((state_val_11921 === 3))
{var inst_11918 = (state_11920[2]);var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11920__$1,inst_11918);
} else
{if((state_val_11921 === 4))
{var inst_11894 = (state_11920[7]);var inst_11894__$1 = (state_11920[2]);var state_11920__$1 = (function (){var statearr_11923 = state_11920;(statearr_11923[7] = inst_11894__$1);
return statearr_11923;
})();if(cljs.core.truth_(inst_11894__$1))
{var statearr_11924_11952 = state_11920__$1;(statearr_11924_11952[1] = 5);
} else
{var statearr_11925_11953 = state_11920__$1;(statearr_11925_11953[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 5))
{var state_11920__$1 = state_11920;if(cljs.core.truth_(delay))
{var statearr_11926_11954 = state_11920__$1;(statearr_11926_11954[1] = 8);
} else
{var statearr_11927_11955 = state_11920__$1;(statearr_11927_11955[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 6))
{var state_11920__$1 = state_11920;var statearr_11928_11956 = state_11920__$1;(statearr_11928_11956[2] = null);
(statearr_11928_11956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 7))
{var inst_11911 = (state_11920[2]);var state_11920__$1 = state_11920;if(cljs.core.truth_(inst_11911))
{var statearr_11929_11957 = state_11920__$1;(statearr_11929_11957[1] = 15);
} else
{var statearr_11930_11958 = state_11920__$1;(statearr_11930_11958[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 8))
{var inst_11897 = cljs.core.async.timeout.call(null,delay);var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11920__$1,11,inst_11897);
} else
{if((state_val_11921 === 9))
{var state_11920__$1 = state_11920;var statearr_11931_11959 = state_11920__$1;(statearr_11931_11959[2] = null);
(statearr_11931_11959[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 10))
{var inst_11902 = (state_11920[2]);var state_11920__$1 = (function (){var statearr_11932 = state_11920;(statearr_11932[8] = inst_11902);
return statearr_11932;
})();if(cljs.core.truth_(log))
{var statearr_11933_11960 = state_11920__$1;(statearr_11933_11960[1] = 12);
} else
{var statearr_11934_11961 = state_11920__$1;(statearr_11934_11961[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 11))
{var inst_11899 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11935_11962 = state_11920__$1;(statearr_11935_11962[2] = inst_11899);
(statearr_11935_11962[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 12))
{var inst_11894 = (state_11920[7]);var inst_11904 = cljs.core.clj__GT_js.call(null,inst_11894);var inst_11905 = console.log(inst_11904);var state_11920__$1 = state_11920;var statearr_11936_11963 = state_11920__$1;(statearr_11936_11963[2] = inst_11905);
(statearr_11936_11963[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 13))
{var state_11920__$1 = state_11920;var statearr_11937_11964 = state_11920__$1;(statearr_11937_11964[2] = null);
(statearr_11937_11964[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 14))
{var inst_11894 = (state_11920[7]);var inst_11908 = (state_11920[2]);var state_11920__$1 = (function (){var statearr_11938 = state_11920;(statearr_11938[9] = inst_11908);
return statearr_11938;
})();var statearr_11939_11965 = state_11920__$1;(statearr_11939_11965[2] = inst_11894);
(statearr_11939_11965[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 15))
{var state_11920__$1 = state_11920;var statearr_11940_11966 = state_11920__$1;(statearr_11940_11966[2] = null);
(statearr_11940_11966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 16))
{var state_11920__$1 = state_11920;var statearr_11941_11967 = state_11920__$1;(statearr_11941_11967[2] = null);
(statearr_11941_11967[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 17))
{var inst_11916 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11942_11968 = state_11920__$1;(statearr_11942_11968[2] = inst_11916);
(statearr_11942_11968[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_11946 = [null,null,null,null,null,null,null,null,null,null];(statearr_11946[0] = state_machine__5548__auto__);
(statearr_11946[1] = 1);
return statearr_11946;
});
var state_machine__5548__auto____1 = (function (state_11920){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11920);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11947){if((e11947 instanceof Object))
{var ex__5551__auto__ = e11947;var statearr_11948_11969 = state_11920;(statearr_11948_11969[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11970 = state_11920;
state_11920 = G__11970;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11920){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11949 = f__5563__auto__.call(null);(statearr_11949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___11950);
return statearr_11949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11831 = null;if (arguments.length > 1) {
  p__11831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11831);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11971){
var ch = cljs.core.first(arglist__11971);
var p__11831 = cljs.core.rest(arglist__11971);
return dorun_async__delegate(ch,p__11831);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
