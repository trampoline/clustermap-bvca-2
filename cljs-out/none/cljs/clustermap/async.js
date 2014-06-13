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
map_async.cljs$lang$applyTo = (function (arglist__11790){
var f = cljs.core.first(arglist__11790);
var colls = cljs.core.rest(arglist__11790);
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
var dorun_async__delegate = function (ch,p__11791){var map__11851 = p__11791;var map__11851__$1 = ((cljs.core.seq_QMARK_.call(null,map__11851))?cljs.core.apply.call(null,cljs.core.hash_map,map__11851):map__11851);var delay = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___11910 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11880){var state_val_11881 = (state_11880[1]);if((state_val_11881 === 1))
{var state_11880__$1 = state_11880;var statearr_11882_11911 = state_11880__$1;(statearr_11882_11911[2] = null);
(statearr_11882_11911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 2))
{var state_11880__$1 = state_11880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11880__$1,4,ch);
} else
{if((state_val_11881 === 3))
{var inst_11878 = (state_11880[2]);var state_11880__$1 = state_11880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11880__$1,inst_11878);
} else
{if((state_val_11881 === 4))
{var inst_11854 = (state_11880[7]);var inst_11854__$1 = (state_11880[2]);var state_11880__$1 = (function (){var statearr_11883 = state_11880;(statearr_11883[7] = inst_11854__$1);
return statearr_11883;
})();if(cljs.core.truth_(inst_11854__$1))
{var statearr_11884_11912 = state_11880__$1;(statearr_11884_11912[1] = 5);
} else
{var statearr_11885_11913 = state_11880__$1;(statearr_11885_11913[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 5))
{var state_11880__$1 = state_11880;if(cljs.core.truth_(delay))
{var statearr_11886_11914 = state_11880__$1;(statearr_11886_11914[1] = 8);
} else
{var statearr_11887_11915 = state_11880__$1;(statearr_11887_11915[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 6))
{var state_11880__$1 = state_11880;var statearr_11888_11916 = state_11880__$1;(statearr_11888_11916[2] = null);
(statearr_11888_11916[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 7))
{var inst_11871 = (state_11880[2]);var state_11880__$1 = state_11880;if(cljs.core.truth_(inst_11871))
{var statearr_11889_11917 = state_11880__$1;(statearr_11889_11917[1] = 15);
} else
{var statearr_11890_11918 = state_11880__$1;(statearr_11890_11918[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 8))
{var inst_11857 = cljs.core.async.timeout.call(null,delay);var state_11880__$1 = state_11880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11880__$1,11,inst_11857);
} else
{if((state_val_11881 === 9))
{var state_11880__$1 = state_11880;var statearr_11891_11919 = state_11880__$1;(statearr_11891_11919[2] = null);
(statearr_11891_11919[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 10))
{var inst_11862 = (state_11880[2]);var state_11880__$1 = (function (){var statearr_11892 = state_11880;(statearr_11892[8] = inst_11862);
return statearr_11892;
})();if(cljs.core.truth_(log))
{var statearr_11893_11920 = state_11880__$1;(statearr_11893_11920[1] = 12);
} else
{var statearr_11894_11921 = state_11880__$1;(statearr_11894_11921[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 11))
{var inst_11859 = (state_11880[2]);var state_11880__$1 = state_11880;var statearr_11895_11922 = state_11880__$1;(statearr_11895_11922[2] = inst_11859);
(statearr_11895_11922[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 12))
{var inst_11854 = (state_11880[7]);var inst_11864 = cljs.core.clj__GT_js.call(null,inst_11854);var inst_11865 = console.log(inst_11864);var state_11880__$1 = state_11880;var statearr_11896_11923 = state_11880__$1;(statearr_11896_11923[2] = inst_11865);
(statearr_11896_11923[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 13))
{var state_11880__$1 = state_11880;var statearr_11897_11924 = state_11880__$1;(statearr_11897_11924[2] = null);
(statearr_11897_11924[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 14))
{var inst_11854 = (state_11880[7]);var inst_11868 = (state_11880[2]);var state_11880__$1 = (function (){var statearr_11898 = state_11880;(statearr_11898[9] = inst_11868);
return statearr_11898;
})();var statearr_11899_11925 = state_11880__$1;(statearr_11899_11925[2] = inst_11854);
(statearr_11899_11925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 15))
{var state_11880__$1 = state_11880;var statearr_11900_11926 = state_11880__$1;(statearr_11900_11926[2] = null);
(statearr_11900_11926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 16))
{var state_11880__$1 = state_11880;var statearr_11901_11927 = state_11880__$1;(statearr_11901_11927[2] = null);
(statearr_11901_11927[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11881 === 17))
{var inst_11876 = (state_11880[2]);var state_11880__$1 = state_11880;var statearr_11902_11928 = state_11880__$1;(statearr_11902_11928[2] = inst_11876);
(statearr_11902_11928[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_11906 = [null,null,null,null,null,null,null,null,null,null];(statearr_11906[0] = state_machine__5548__auto__);
(statearr_11906[1] = 1);
return statearr_11906;
});
var state_machine__5548__auto____1 = (function (state_11880){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11880);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11907){if((e11907 instanceof Object))
{var ex__5551__auto__ = e11907;var statearr_11908_11929 = state_11880;(statearr_11908_11929[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11930 = state_11880;
state_11880 = G__11930;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11880){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11909 = f__5563__auto__.call(null);(statearr_11909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___11910);
return statearr_11909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11791 = null;if (arguments.length > 1) {
  p__11791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11791);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11931){
var ch = cljs.core.first(arglist__11931);
var p__11791 = cljs.core.rest(arglist__11931);
return dorun_async__delegate(ch,p__11791);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map