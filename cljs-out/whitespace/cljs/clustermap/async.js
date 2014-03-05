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
map_async.cljs$lang$applyTo = (function (arglist__44811){
var f = cljs.core.first(arglist__44811);
var colls = cljs.core.rest(arglist__44811);
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
var dorun_async__delegate = function (ch,p__44812){var map__44872 = p__44812;var map__44872__$1 = ((cljs.core.seq_QMARK_.call(null,map__44872))?cljs.core.apply.call(null,cljs.core.hash_map,map__44872):map__44872);var delay = cljs.core.get.call(null,map__44872__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__44872__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___44931 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44901){var state_val_44902 = (state_44901[1]);if((state_val_44902 === 1))
{var state_44901__$1 = state_44901;var statearr_44903_44932 = state_44901__$1;(statearr_44903_44932[2] = null);
(statearr_44903_44932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 2))
{var state_44901__$1 = state_44901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44901__$1,4,ch);
} else
{if((state_val_44902 === 3))
{var inst_44899 = (state_44901[2]);var state_44901__$1 = state_44901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44901__$1,inst_44899);
} else
{if((state_val_44902 === 4))
{var inst_44875 = (state_44901[7]);var inst_44875__$1 = (state_44901[2]);var state_44901__$1 = (function (){var statearr_44904 = state_44901;(statearr_44904[7] = inst_44875__$1);
return statearr_44904;
})();if(cljs.core.truth_(inst_44875__$1))
{var statearr_44905_44933 = state_44901__$1;(statearr_44905_44933[1] = 5);
} else
{var statearr_44906_44934 = state_44901__$1;(statearr_44906_44934[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 5))
{var state_44901__$1 = state_44901;if(cljs.core.truth_(delay))
{var statearr_44907_44935 = state_44901__$1;(statearr_44907_44935[1] = 8);
} else
{var statearr_44908_44936 = state_44901__$1;(statearr_44908_44936[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 6))
{var state_44901__$1 = state_44901;var statearr_44909_44937 = state_44901__$1;(statearr_44909_44937[2] = null);
(statearr_44909_44937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 7))
{var inst_44892 = (state_44901[2]);var state_44901__$1 = state_44901;if(cljs.core.truth_(inst_44892))
{var statearr_44910_44938 = state_44901__$1;(statearr_44910_44938[1] = 15);
} else
{var statearr_44911_44939 = state_44901__$1;(statearr_44911_44939[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 8))
{var inst_44878 = cljs.core.async.timeout.call(null,delay);var state_44901__$1 = state_44901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44901__$1,11,inst_44878);
} else
{if((state_val_44902 === 9))
{var state_44901__$1 = state_44901;var statearr_44912_44940 = state_44901__$1;(statearr_44912_44940[2] = null);
(statearr_44912_44940[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 10))
{var inst_44883 = (state_44901[2]);var state_44901__$1 = (function (){var statearr_44913 = state_44901;(statearr_44913[8] = inst_44883);
return statearr_44913;
})();if(cljs.core.truth_(log))
{var statearr_44914_44941 = state_44901__$1;(statearr_44914_44941[1] = 12);
} else
{var statearr_44915_44942 = state_44901__$1;(statearr_44915_44942[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 11))
{var inst_44880 = (state_44901[2]);var state_44901__$1 = state_44901;var statearr_44916_44943 = state_44901__$1;(statearr_44916_44943[2] = inst_44880);
(statearr_44916_44943[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 12))
{var inst_44875 = (state_44901[7]);var inst_44885 = cljs.core.clj__GT_js.call(null,inst_44875);var inst_44886 = console.log(inst_44885);var state_44901__$1 = state_44901;var statearr_44917_44944 = state_44901__$1;(statearr_44917_44944[2] = inst_44886);
(statearr_44917_44944[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 13))
{var state_44901__$1 = state_44901;var statearr_44918_44945 = state_44901__$1;(statearr_44918_44945[2] = null);
(statearr_44918_44945[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 14))
{var inst_44875 = (state_44901[7]);var inst_44889 = (state_44901[2]);var state_44901__$1 = (function (){var statearr_44919 = state_44901;(statearr_44919[9] = inst_44889);
return statearr_44919;
})();var statearr_44920_44946 = state_44901__$1;(statearr_44920_44946[2] = inst_44875);
(statearr_44920_44946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 15))
{var state_44901__$1 = state_44901;var statearr_44921_44947 = state_44901__$1;(statearr_44921_44947[2] = null);
(statearr_44921_44947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 16))
{var state_44901__$1 = state_44901;var statearr_44922_44948 = state_44901__$1;(statearr_44922_44948[2] = null);
(statearr_44922_44948[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44902 === 17))
{var inst_44897 = (state_44901[2]);var state_44901__$1 = state_44901;var statearr_44923_44949 = state_44901__$1;(statearr_44923_44949[2] = inst_44897);
(statearr_44923_44949[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_44927 = [null,null,null,null,null,null,null,null,null,null];(statearr_44927[0] = state_machine__5548__auto__);
(statearr_44927[1] = 1);
return statearr_44927;
});
var state_machine__5548__auto____1 = (function (state_44901){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44928){if((e44928 instanceof Object))
{var ex__5551__auto__ = e44928;var statearr_44929_44950 = state_44901;(statearr_44929_44950[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44951 = state_44901;
state_44901 = G__44951;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44901){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44930 = f__5563__auto__.call(null);(statearr_44930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___44931);
return statearr_44930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__44812 = null;if (arguments.length > 1) {
  p__44812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__44812);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__44952){
var ch = cljs.core.first(arglist__44952);
var p__44812 = cljs.core.rest(arglist__44952);
return dorun_async__delegate(ch,p__44812);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
