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
map_async.cljs$lang$applyTo = (function (arglist__44797){
var f = cljs.core.first(arglist__44797);
var colls = cljs.core.rest(arglist__44797);
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
var dorun_async__delegate = function (ch,p__44798){var map__44858 = p__44798;var map__44858__$1 = ((cljs.core.seq_QMARK_.call(null,map__44858))?cljs.core.apply.call(null,cljs.core.hash_map,map__44858):map__44858);var delay = cljs.core.get.call(null,map__44858__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__44858__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___44917 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44887){var state_val_44888 = (state_44887[1]);if((state_val_44888 === 1))
{var state_44887__$1 = state_44887;var statearr_44889_44918 = state_44887__$1;(statearr_44889_44918[2] = null);
(statearr_44889_44918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 2))
{var state_44887__$1 = state_44887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44887__$1,4,ch);
} else
{if((state_val_44888 === 3))
{var inst_44885 = (state_44887[2]);var state_44887__$1 = state_44887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44887__$1,inst_44885);
} else
{if((state_val_44888 === 4))
{var inst_44861 = (state_44887[7]);var inst_44861__$1 = (state_44887[2]);var state_44887__$1 = (function (){var statearr_44890 = state_44887;(statearr_44890[7] = inst_44861__$1);
return statearr_44890;
})();if(cljs.core.truth_(inst_44861__$1))
{var statearr_44891_44919 = state_44887__$1;(statearr_44891_44919[1] = 5);
} else
{var statearr_44892_44920 = state_44887__$1;(statearr_44892_44920[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 5))
{var state_44887__$1 = state_44887;if(cljs.core.truth_(delay))
{var statearr_44893_44921 = state_44887__$1;(statearr_44893_44921[1] = 8);
} else
{var statearr_44894_44922 = state_44887__$1;(statearr_44894_44922[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 6))
{var state_44887__$1 = state_44887;var statearr_44895_44923 = state_44887__$1;(statearr_44895_44923[2] = null);
(statearr_44895_44923[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 7))
{var inst_44878 = (state_44887[2]);var state_44887__$1 = state_44887;if(cljs.core.truth_(inst_44878))
{var statearr_44896_44924 = state_44887__$1;(statearr_44896_44924[1] = 15);
} else
{var statearr_44897_44925 = state_44887__$1;(statearr_44897_44925[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 8))
{var inst_44864 = cljs.core.async.timeout.call(null,delay);var state_44887__$1 = state_44887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44887__$1,11,inst_44864);
} else
{if((state_val_44888 === 9))
{var state_44887__$1 = state_44887;var statearr_44898_44926 = state_44887__$1;(statearr_44898_44926[2] = null);
(statearr_44898_44926[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 10))
{var inst_44869 = (state_44887[2]);var state_44887__$1 = (function (){var statearr_44899 = state_44887;(statearr_44899[8] = inst_44869);
return statearr_44899;
})();if(cljs.core.truth_(log))
{var statearr_44900_44927 = state_44887__$1;(statearr_44900_44927[1] = 12);
} else
{var statearr_44901_44928 = state_44887__$1;(statearr_44901_44928[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 11))
{var inst_44866 = (state_44887[2]);var state_44887__$1 = state_44887;var statearr_44902_44929 = state_44887__$1;(statearr_44902_44929[2] = inst_44866);
(statearr_44902_44929[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 12))
{var inst_44861 = (state_44887[7]);var inst_44871 = cljs.core.clj__GT_js.call(null,inst_44861);var inst_44872 = console.log(inst_44871);var state_44887__$1 = state_44887;var statearr_44903_44930 = state_44887__$1;(statearr_44903_44930[2] = inst_44872);
(statearr_44903_44930[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 13))
{var state_44887__$1 = state_44887;var statearr_44904_44931 = state_44887__$1;(statearr_44904_44931[2] = null);
(statearr_44904_44931[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 14))
{var inst_44861 = (state_44887[7]);var inst_44875 = (state_44887[2]);var state_44887__$1 = (function (){var statearr_44905 = state_44887;(statearr_44905[9] = inst_44875);
return statearr_44905;
})();var statearr_44906_44932 = state_44887__$1;(statearr_44906_44932[2] = inst_44861);
(statearr_44906_44932[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 15))
{var state_44887__$1 = state_44887;var statearr_44907_44933 = state_44887__$1;(statearr_44907_44933[2] = null);
(statearr_44907_44933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 16))
{var state_44887__$1 = state_44887;var statearr_44908_44934 = state_44887__$1;(statearr_44908_44934[2] = null);
(statearr_44908_44934[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44888 === 17))
{var inst_44883 = (state_44887[2]);var state_44887__$1 = state_44887;var statearr_44909_44935 = state_44887__$1;(statearr_44909_44935[2] = inst_44883);
(statearr_44909_44935[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_44913 = [null,null,null,null,null,null,null,null,null,null];(statearr_44913[0] = state_machine__5548__auto__);
(statearr_44913[1] = 1);
return statearr_44913;
});
var state_machine__5548__auto____1 = (function (state_44887){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44887);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44914){if((e44914 instanceof Object))
{var ex__5551__auto__ = e44914;var statearr_44915_44936 = state_44887;(statearr_44915_44936[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44887);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44937 = state_44887;
state_44887 = G__44937;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44887){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44916 = f__5563__auto__.call(null);(statearr_44916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___44917);
return statearr_44916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__44798 = null;if (arguments.length > 1) {
  p__44798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__44798);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__44938){
var ch = cljs.core.first(arglist__44938);
var p__44798 = cljs.core.rest(arglist__44938);
return dorun_async__delegate(ch,p__44798);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
