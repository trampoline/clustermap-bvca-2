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
map_async.cljs$lang$applyTo = (function (arglist__11820){
var f = cljs.core.first(arglist__11820);
var colls = cljs.core.rest(arglist__11820);
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
var dorun_async__delegate = function (ch,p__11821){var map__11881 = p__11821;var map__11881__$1 = ((cljs.core.seq_QMARK_.call(null,map__11881))?cljs.core.apply.call(null,cljs.core.hash_map,map__11881):map__11881);var delay = cljs.core.get.call(null,map__11881__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11881__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___11940 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11910){var state_val_11911 = (state_11910[1]);if((state_val_11911 === 1))
{var state_11910__$1 = state_11910;var statearr_11912_11941 = state_11910__$1;(statearr_11912_11941[2] = null);
(statearr_11912_11941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 2))
{var state_11910__$1 = state_11910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11910__$1,4,ch);
} else
{if((state_val_11911 === 3))
{var inst_11908 = (state_11910[2]);var state_11910__$1 = state_11910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11910__$1,inst_11908);
} else
{if((state_val_11911 === 4))
{var inst_11884 = (state_11910[7]);var inst_11884__$1 = (state_11910[2]);var state_11910__$1 = (function (){var statearr_11913 = state_11910;(statearr_11913[7] = inst_11884__$1);
return statearr_11913;
})();if(cljs.core.truth_(inst_11884__$1))
{var statearr_11914_11942 = state_11910__$1;(statearr_11914_11942[1] = 5);
} else
{var statearr_11915_11943 = state_11910__$1;(statearr_11915_11943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 5))
{var state_11910__$1 = state_11910;if(cljs.core.truth_(delay))
{var statearr_11916_11944 = state_11910__$1;(statearr_11916_11944[1] = 8);
} else
{var statearr_11917_11945 = state_11910__$1;(statearr_11917_11945[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 6))
{var state_11910__$1 = state_11910;var statearr_11918_11946 = state_11910__$1;(statearr_11918_11946[2] = null);
(statearr_11918_11946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 7))
{var inst_11901 = (state_11910[2]);var state_11910__$1 = state_11910;if(cljs.core.truth_(inst_11901))
{var statearr_11919_11947 = state_11910__$1;(statearr_11919_11947[1] = 15);
} else
{var statearr_11920_11948 = state_11910__$1;(statearr_11920_11948[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 8))
{var inst_11887 = cljs.core.async.timeout.call(null,delay);var state_11910__$1 = state_11910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11910__$1,11,inst_11887);
} else
{if((state_val_11911 === 9))
{var state_11910__$1 = state_11910;var statearr_11921_11949 = state_11910__$1;(statearr_11921_11949[2] = null);
(statearr_11921_11949[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 10))
{var inst_11892 = (state_11910[2]);var state_11910__$1 = (function (){var statearr_11922 = state_11910;(statearr_11922[8] = inst_11892);
return statearr_11922;
})();if(cljs.core.truth_(log))
{var statearr_11923_11950 = state_11910__$1;(statearr_11923_11950[1] = 12);
} else
{var statearr_11924_11951 = state_11910__$1;(statearr_11924_11951[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 11))
{var inst_11889 = (state_11910[2]);var state_11910__$1 = state_11910;var statearr_11925_11952 = state_11910__$1;(statearr_11925_11952[2] = inst_11889);
(statearr_11925_11952[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 12))
{var inst_11884 = (state_11910[7]);var inst_11894 = cljs.core.clj__GT_js.call(null,inst_11884);var inst_11895 = console.log(inst_11894);var state_11910__$1 = state_11910;var statearr_11926_11953 = state_11910__$1;(statearr_11926_11953[2] = inst_11895);
(statearr_11926_11953[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 13))
{var state_11910__$1 = state_11910;var statearr_11927_11954 = state_11910__$1;(statearr_11927_11954[2] = null);
(statearr_11927_11954[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 14))
{var inst_11884 = (state_11910[7]);var inst_11898 = (state_11910[2]);var state_11910__$1 = (function (){var statearr_11928 = state_11910;(statearr_11928[9] = inst_11898);
return statearr_11928;
})();var statearr_11929_11955 = state_11910__$1;(statearr_11929_11955[2] = inst_11884);
(statearr_11929_11955[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 15))
{var state_11910__$1 = state_11910;var statearr_11930_11956 = state_11910__$1;(statearr_11930_11956[2] = null);
(statearr_11930_11956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 16))
{var state_11910__$1 = state_11910;var statearr_11931_11957 = state_11910__$1;(statearr_11931_11957[2] = null);
(statearr_11931_11957[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11911 === 17))
{var inst_11906 = (state_11910[2]);var state_11910__$1 = state_11910;var statearr_11932_11958 = state_11910__$1;(statearr_11932_11958[2] = inst_11906);
(statearr_11932_11958[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_11936 = [null,null,null,null,null,null,null,null,null,null];(statearr_11936[0] = state_machine__5548__auto__);
(statearr_11936[1] = 1);
return statearr_11936;
});
var state_machine__5548__auto____1 = (function (state_11910){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11910);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11937){if((e11937 instanceof Object))
{var ex__5551__auto__ = e11937;var statearr_11938_11959 = state_11910;(statearr_11938_11959[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11960 = state_11910;
state_11910 = G__11960;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11910){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11939 = f__5563__auto__.call(null);(statearr_11939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___11940);
return statearr_11939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11821 = null;if (arguments.length > 1) {
  p__11821 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11821);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11961){
var ch = cljs.core.first(arglist__11961);
var p__11821 = cljs.core.rest(arglist__11961);
return dorun_async__delegate(ch,p__11821);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
