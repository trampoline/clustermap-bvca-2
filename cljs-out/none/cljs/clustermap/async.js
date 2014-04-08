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
map_async.cljs$lang$applyTo = (function (arglist__11786){
var f = cljs.core.first(arglist__11786);
var colls = cljs.core.rest(arglist__11786);
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
var dorun_async__delegate = function (ch,p__11787){var map__11847 = p__11787;var map__11847__$1 = ((cljs.core.seq_QMARK_.call(null,map__11847))?cljs.core.apply.call(null,cljs.core.hash_map,map__11847):map__11847);var delay = cljs.core.get.call(null,map__11847__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11847__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___11906 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11876){var state_val_11877 = (state_11876[1]);if((state_val_11877 === 1))
{var state_11876__$1 = state_11876;var statearr_11878_11907 = state_11876__$1;(statearr_11878_11907[2] = null);
(statearr_11878_11907[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 2))
{var state_11876__$1 = state_11876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11876__$1,4,ch);
} else
{if((state_val_11877 === 3))
{var inst_11874 = (state_11876[2]);var state_11876__$1 = state_11876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11876__$1,inst_11874);
} else
{if((state_val_11877 === 4))
{var inst_11850 = (state_11876[7]);var inst_11850__$1 = (state_11876[2]);var state_11876__$1 = (function (){var statearr_11879 = state_11876;(statearr_11879[7] = inst_11850__$1);
return statearr_11879;
})();if(cljs.core.truth_(inst_11850__$1))
{var statearr_11880_11908 = state_11876__$1;(statearr_11880_11908[1] = 5);
} else
{var statearr_11881_11909 = state_11876__$1;(statearr_11881_11909[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 5))
{var state_11876__$1 = state_11876;if(cljs.core.truth_(delay))
{var statearr_11882_11910 = state_11876__$1;(statearr_11882_11910[1] = 8);
} else
{var statearr_11883_11911 = state_11876__$1;(statearr_11883_11911[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 6))
{var state_11876__$1 = state_11876;var statearr_11884_11912 = state_11876__$1;(statearr_11884_11912[2] = null);
(statearr_11884_11912[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 7))
{var inst_11867 = (state_11876[2]);var state_11876__$1 = state_11876;if(cljs.core.truth_(inst_11867))
{var statearr_11885_11913 = state_11876__$1;(statearr_11885_11913[1] = 15);
} else
{var statearr_11886_11914 = state_11876__$1;(statearr_11886_11914[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 8))
{var inst_11853 = cljs.core.async.timeout.call(null,delay);var state_11876__$1 = state_11876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11876__$1,11,inst_11853);
} else
{if((state_val_11877 === 9))
{var state_11876__$1 = state_11876;var statearr_11887_11915 = state_11876__$1;(statearr_11887_11915[2] = null);
(statearr_11887_11915[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 10))
{var inst_11858 = (state_11876[2]);var state_11876__$1 = (function (){var statearr_11888 = state_11876;(statearr_11888[8] = inst_11858);
return statearr_11888;
})();if(cljs.core.truth_(log))
{var statearr_11889_11916 = state_11876__$1;(statearr_11889_11916[1] = 12);
} else
{var statearr_11890_11917 = state_11876__$1;(statearr_11890_11917[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 11))
{var inst_11855 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11891_11918 = state_11876__$1;(statearr_11891_11918[2] = inst_11855);
(statearr_11891_11918[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 12))
{var inst_11850 = (state_11876[7]);var inst_11860 = cljs.core.clj__GT_js.call(null,inst_11850);var inst_11861 = console.log(inst_11860);var state_11876__$1 = state_11876;var statearr_11892_11919 = state_11876__$1;(statearr_11892_11919[2] = inst_11861);
(statearr_11892_11919[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 13))
{var state_11876__$1 = state_11876;var statearr_11893_11920 = state_11876__$1;(statearr_11893_11920[2] = null);
(statearr_11893_11920[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 14))
{var inst_11850 = (state_11876[7]);var inst_11864 = (state_11876[2]);var state_11876__$1 = (function (){var statearr_11894 = state_11876;(statearr_11894[9] = inst_11864);
return statearr_11894;
})();var statearr_11895_11921 = state_11876__$1;(statearr_11895_11921[2] = inst_11850);
(statearr_11895_11921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 15))
{var state_11876__$1 = state_11876;var statearr_11896_11922 = state_11876__$1;(statearr_11896_11922[2] = null);
(statearr_11896_11922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 16))
{var state_11876__$1 = state_11876;var statearr_11897_11923 = state_11876__$1;(statearr_11897_11923[2] = null);
(statearr_11897_11923[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11877 === 17))
{var inst_11872 = (state_11876[2]);var state_11876__$1 = state_11876;var statearr_11898_11924 = state_11876__$1;(statearr_11898_11924[2] = inst_11872);
(statearr_11898_11924[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_11902 = [null,null,null,null,null,null,null,null,null,null];(statearr_11902[0] = state_machine__5548__auto__);
(statearr_11902[1] = 1);
return statearr_11902;
});
var state_machine__5548__auto____1 = (function (state_11876){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11876);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11903){if((e11903 instanceof Object))
{var ex__5551__auto__ = e11903;var statearr_11904_11925 = state_11876;(statearr_11904_11925[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11876);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11926 = state_11876;
state_11876 = G__11926;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11876){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11905 = f__5563__auto__.call(null);(statearr_11905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___11906);
return statearr_11905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11787 = null;if (arguments.length > 1) {
  p__11787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11787);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11927){
var ch = cljs.core.first(arglist__11927);
var p__11787 = cljs.core.rest(arglist__11927);
return dorun_async__delegate(ch,p__11787);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map