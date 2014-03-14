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
map_async.cljs$lang$applyTo = (function (arglist__11812){
var f = cljs.core.first(arglist__11812);
var colls = cljs.core.rest(arglist__11812);
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
var dorun_async__delegate = function (ch,p__11813){var map__11873 = p__11813;var map__11873__$1 = ((cljs.core.seq_QMARK_.call(null,map__11873))?cljs.core.apply.call(null,cljs.core.hash_map,map__11873):map__11873);var delay = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___11932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11902){var state_val_11903 = (state_11902[1]);if((state_val_11903 === 1))
{var state_11902__$1 = state_11902;var statearr_11904_11933 = state_11902__$1;(statearr_11904_11933[2] = null);
(statearr_11904_11933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 2))
{var state_11902__$1 = state_11902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11902__$1,4,ch);
} else
{if((state_val_11903 === 3))
{var inst_11900 = (state_11902[2]);var state_11902__$1 = state_11902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11902__$1,inst_11900);
} else
{if((state_val_11903 === 4))
{var inst_11876 = (state_11902[7]);var inst_11876__$1 = (state_11902[2]);var state_11902__$1 = (function (){var statearr_11905 = state_11902;(statearr_11905[7] = inst_11876__$1);
return statearr_11905;
})();if(cljs.core.truth_(inst_11876__$1))
{var statearr_11906_11934 = state_11902__$1;(statearr_11906_11934[1] = 5);
} else
{var statearr_11907_11935 = state_11902__$1;(statearr_11907_11935[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 5))
{var state_11902__$1 = state_11902;if(cljs.core.truth_(delay))
{var statearr_11908_11936 = state_11902__$1;(statearr_11908_11936[1] = 8);
} else
{var statearr_11909_11937 = state_11902__$1;(statearr_11909_11937[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 6))
{var state_11902__$1 = state_11902;var statearr_11910_11938 = state_11902__$1;(statearr_11910_11938[2] = null);
(statearr_11910_11938[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 7))
{var inst_11893 = (state_11902[2]);var state_11902__$1 = state_11902;if(cljs.core.truth_(inst_11893))
{var statearr_11911_11939 = state_11902__$1;(statearr_11911_11939[1] = 15);
} else
{var statearr_11912_11940 = state_11902__$1;(statearr_11912_11940[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 8))
{var inst_11879 = cljs.core.async.timeout.call(null,delay);var state_11902__$1 = state_11902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11902__$1,11,inst_11879);
} else
{if((state_val_11903 === 9))
{var state_11902__$1 = state_11902;var statearr_11913_11941 = state_11902__$1;(statearr_11913_11941[2] = null);
(statearr_11913_11941[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 10))
{var inst_11884 = (state_11902[2]);var state_11902__$1 = (function (){var statearr_11914 = state_11902;(statearr_11914[8] = inst_11884);
return statearr_11914;
})();if(cljs.core.truth_(log))
{var statearr_11915_11942 = state_11902__$1;(statearr_11915_11942[1] = 12);
} else
{var statearr_11916_11943 = state_11902__$1;(statearr_11916_11943[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 11))
{var inst_11881 = (state_11902[2]);var state_11902__$1 = state_11902;var statearr_11917_11944 = state_11902__$1;(statearr_11917_11944[2] = inst_11881);
(statearr_11917_11944[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 12))
{var inst_11876 = (state_11902[7]);var inst_11886 = cljs.core.clj__GT_js.call(null,inst_11876);var inst_11887 = console.log(inst_11886);var state_11902__$1 = state_11902;var statearr_11918_11945 = state_11902__$1;(statearr_11918_11945[2] = inst_11887);
(statearr_11918_11945[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 13))
{var state_11902__$1 = state_11902;var statearr_11919_11946 = state_11902__$1;(statearr_11919_11946[2] = null);
(statearr_11919_11946[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 14))
{var inst_11876 = (state_11902[7]);var inst_11890 = (state_11902[2]);var state_11902__$1 = (function (){var statearr_11920 = state_11902;(statearr_11920[9] = inst_11890);
return statearr_11920;
})();var statearr_11921_11947 = state_11902__$1;(statearr_11921_11947[2] = inst_11876);
(statearr_11921_11947[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 15))
{var state_11902__$1 = state_11902;var statearr_11922_11948 = state_11902__$1;(statearr_11922_11948[2] = null);
(statearr_11922_11948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 16))
{var state_11902__$1 = state_11902;var statearr_11923_11949 = state_11902__$1;(statearr_11923_11949[2] = null);
(statearr_11923_11949[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11903 === 17))
{var inst_11898 = (state_11902[2]);var state_11902__$1 = state_11902;var statearr_11924_11950 = state_11902__$1;(statearr_11924_11950[2] = inst_11898);
(statearr_11924_11950[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_11928 = [null,null,null,null,null,null,null,null,null,null];(statearr_11928[0] = state_machine__5548__auto__);
(statearr_11928[1] = 1);
return statearr_11928;
});
var state_machine__5548__auto____1 = (function (state_11902){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11902);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11929){if((e11929 instanceof Object))
{var ex__5551__auto__ = e11929;var statearr_11930_11951 = state_11902;(statearr_11930_11951[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11952 = state_11902;
state_11902 = G__11952;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11902){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11931 = f__5563__auto__.call(null);(statearr_11931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___11932);
return statearr_11931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11813 = null;if (arguments.length > 1) {
  p__11813 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11813);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11953){
var ch = cljs.core.first(arglist__11953);
var p__11813 = cljs.core.rest(arglist__11953);
return dorun_async__delegate(ch,p__11813);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
