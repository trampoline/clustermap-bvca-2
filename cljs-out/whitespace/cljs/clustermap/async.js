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
map_async.cljs$lang$applyTo = (function (arglist__31806){
var f = cljs.core.first(arglist__31806);
var colls = cljs.core.rest(arglist__31806);
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
var dorun_async__delegate = function (ch,p__31807){var map__31867 = p__31807;var map__31867__$1 = ((cljs.core.seq_QMARK_.call(null,map__31867))?cljs.core.apply.call(null,cljs.core.hash_map,map__31867):map__31867);var delay = cljs.core.get.call(null,map__31867__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31867__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31926 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31896){var state_val_31897 = (state_31896[1]);if((state_val_31897 === 1))
{var state_31896__$1 = state_31896;var statearr_31898_31927 = state_31896__$1;(statearr_31898_31927[2] = null);
(statearr_31898_31927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 2))
{var state_31896__$1 = state_31896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31896__$1,4,ch);
} else
{if((state_val_31897 === 3))
{var inst_31894 = (state_31896[2]);var state_31896__$1 = state_31896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31896__$1,inst_31894);
} else
{if((state_val_31897 === 4))
{var inst_31870 = (state_31896[7]);var inst_31870__$1 = (state_31896[2]);var state_31896__$1 = (function (){var statearr_31899 = state_31896;(statearr_31899[7] = inst_31870__$1);
return statearr_31899;
})();if(cljs.core.truth_(inst_31870__$1))
{var statearr_31900_31928 = state_31896__$1;(statearr_31900_31928[1] = 5);
} else
{var statearr_31901_31929 = state_31896__$1;(statearr_31901_31929[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 5))
{var state_31896__$1 = state_31896;if(cljs.core.truth_(delay))
{var statearr_31902_31930 = state_31896__$1;(statearr_31902_31930[1] = 8);
} else
{var statearr_31903_31931 = state_31896__$1;(statearr_31903_31931[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 6))
{var state_31896__$1 = state_31896;var statearr_31904_31932 = state_31896__$1;(statearr_31904_31932[2] = null);
(statearr_31904_31932[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 7))
{var inst_31887 = (state_31896[2]);var state_31896__$1 = state_31896;if(cljs.core.truth_(inst_31887))
{var statearr_31905_31933 = state_31896__$1;(statearr_31905_31933[1] = 15);
} else
{var statearr_31906_31934 = state_31896__$1;(statearr_31906_31934[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 8))
{var inst_31873 = cljs.core.async.timeout.call(null,delay);var state_31896__$1 = state_31896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31896__$1,11,inst_31873);
} else
{if((state_val_31897 === 9))
{var state_31896__$1 = state_31896;var statearr_31907_31935 = state_31896__$1;(statearr_31907_31935[2] = null);
(statearr_31907_31935[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 10))
{var inst_31878 = (state_31896[2]);var state_31896__$1 = (function (){var statearr_31908 = state_31896;(statearr_31908[8] = inst_31878);
return statearr_31908;
})();if(cljs.core.truth_(log))
{var statearr_31909_31936 = state_31896__$1;(statearr_31909_31936[1] = 12);
} else
{var statearr_31910_31937 = state_31896__$1;(statearr_31910_31937[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 11))
{var inst_31875 = (state_31896[2]);var state_31896__$1 = state_31896;var statearr_31911_31938 = state_31896__$1;(statearr_31911_31938[2] = inst_31875);
(statearr_31911_31938[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 12))
{var inst_31870 = (state_31896[7]);var inst_31880 = cljs.core.clj__GT_js.call(null,inst_31870);var inst_31881 = console.log(inst_31880);var state_31896__$1 = state_31896;var statearr_31912_31939 = state_31896__$1;(statearr_31912_31939[2] = inst_31881);
(statearr_31912_31939[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 13))
{var state_31896__$1 = state_31896;var statearr_31913_31940 = state_31896__$1;(statearr_31913_31940[2] = null);
(statearr_31913_31940[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 14))
{var inst_31870 = (state_31896[7]);var inst_31884 = (state_31896[2]);var state_31896__$1 = (function (){var statearr_31914 = state_31896;(statearr_31914[9] = inst_31884);
return statearr_31914;
})();var statearr_31915_31941 = state_31896__$1;(statearr_31915_31941[2] = inst_31870);
(statearr_31915_31941[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 15))
{var state_31896__$1 = state_31896;var statearr_31916_31942 = state_31896__$1;(statearr_31916_31942[2] = null);
(statearr_31916_31942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 16))
{var state_31896__$1 = state_31896;var statearr_31917_31943 = state_31896__$1;(statearr_31917_31943[2] = null);
(statearr_31917_31943[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31897 === 17))
{var inst_31892 = (state_31896[2]);var state_31896__$1 = state_31896;var statearr_31918_31944 = state_31896__$1;(statearr_31918_31944[2] = inst_31892);
(statearr_31918_31944[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31922 = [null,null,null,null,null,null,null,null,null,null];(statearr_31922[0] = state_machine__5507__auto__);
(statearr_31922[1] = 1);
return statearr_31922;
});
var state_machine__5507__auto____1 = (function (state_31896){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31896);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31923){if((e31923 instanceof Object))
{var ex__5510__auto__ = e31923;var statearr_31924_31945 = state_31896;(statearr_31924_31945[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31896);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31946 = state_31896;
state_31896 = G__31946;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31896){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31925 = f__5522__auto__.call(null);(statearr_31925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31926);
return statearr_31925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31807 = null;if (arguments.length > 1) {
  p__31807 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31807);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31947){
var ch = cljs.core.first(arglist__31947);
var p__31807 = cljs.core.rest(arglist__31947);
return dorun_async__delegate(ch,p__31807);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
