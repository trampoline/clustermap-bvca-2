// Compiled by ClojureScript 0.0-2356
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
map_async.cljs$lang$applyTo = (function (arglist__80817){
var f = cljs.core.first(arglist__80817);
var colls = cljs.core.rest(arglist__80817);
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
var dorun_async__delegate = function (ch,p__80818){var map__80878 = p__80818;var map__80878__$1 = ((cljs.core.seq_QMARK_.call(null,map__80878))?cljs.core.apply.call(null,cljs.core.hash_map,map__80878):map__80878);var delay = cljs.core.get.call(null,map__80878__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__80878__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5819__auto___80937 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___80937,map__80878,map__80878__$1,delay,log){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___80937,map__80878,map__80878__$1,delay,log){
return (function (state_80907){var state_val_80908 = (state_80907[(1)]);if((state_val_80908 === (7)))
{var inst_80898 = (state_80907[(2)]);var state_80907__$1 = state_80907;if(cljs.core.truth_(inst_80898))
{var statearr_80909_80938 = state_80907__$1;(statearr_80909_80938[(1)] = (15));
} else
{var statearr_80910_80939 = state_80907__$1;(statearr_80910_80939[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (1)))
{var state_80907__$1 = state_80907;var statearr_80911_80940 = state_80907__$1;(statearr_80911_80940[(2)] = null);
(statearr_80911_80940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (4)))
{var inst_80881 = (state_80907[(7)]);var inst_80881__$1 = (state_80907[(2)]);var state_80907__$1 = (function (){var statearr_80912 = state_80907;(statearr_80912[(7)] = inst_80881__$1);
return statearr_80912;
})();if(cljs.core.truth_(inst_80881__$1))
{var statearr_80913_80941 = state_80907__$1;(statearr_80913_80941[(1)] = (5));
} else
{var statearr_80914_80942 = state_80907__$1;(statearr_80914_80942[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (15)))
{var state_80907__$1 = state_80907;var statearr_80915_80943 = state_80907__$1;(statearr_80915_80943[(2)] = null);
(statearr_80915_80943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (13)))
{var state_80907__$1 = state_80907;var statearr_80916_80944 = state_80907__$1;(statearr_80916_80944[(2)] = null);
(statearr_80916_80944[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (6)))
{var state_80907__$1 = state_80907;var statearr_80917_80945 = state_80907__$1;(statearr_80917_80945[(2)] = null);
(statearr_80917_80945[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (17)))
{var inst_80903 = (state_80907[(2)]);var state_80907__$1 = state_80907;var statearr_80918_80946 = state_80907__$1;(statearr_80918_80946[(2)] = inst_80903);
(statearr_80918_80946[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (3)))
{var inst_80905 = (state_80907[(2)]);var state_80907__$1 = state_80907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80907__$1,inst_80905);
} else
{if((state_val_80908 === (12)))
{var inst_80881 = (state_80907[(7)]);var inst_80891 = cljs.core.clj__GT_js.call(null,inst_80881);var inst_80892 = console.log(inst_80891);var state_80907__$1 = state_80907;var statearr_80919_80947 = state_80907__$1;(statearr_80919_80947[(2)] = inst_80892);
(statearr_80919_80947[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (2)))
{var state_80907__$1 = state_80907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80907__$1,(4),ch);
} else
{if((state_val_80908 === (11)))
{var inst_80886 = (state_80907[(2)]);var state_80907__$1 = state_80907;var statearr_80920_80948 = state_80907__$1;(statearr_80920_80948[(2)] = inst_80886);
(statearr_80920_80948[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (9)))
{var state_80907__$1 = state_80907;var statearr_80921_80949 = state_80907__$1;(statearr_80921_80949[(2)] = null);
(statearr_80921_80949[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (5)))
{var state_80907__$1 = state_80907;if(cljs.core.truth_(delay))
{var statearr_80922_80950 = state_80907__$1;(statearr_80922_80950[(1)] = (8));
} else
{var statearr_80923_80951 = state_80907__$1;(statearr_80923_80951[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (14)))
{var inst_80881 = (state_80907[(7)]);var inst_80895 = (state_80907[(2)]);var state_80907__$1 = (function (){var statearr_80924 = state_80907;(statearr_80924[(8)] = inst_80895);
return statearr_80924;
})();var statearr_80925_80952 = state_80907__$1;(statearr_80925_80952[(2)] = inst_80881);
(statearr_80925_80952[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (16)))
{var state_80907__$1 = state_80907;var statearr_80926_80953 = state_80907__$1;(statearr_80926_80953[(2)] = null);
(statearr_80926_80953[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (10)))
{var inst_80889 = (state_80907[(2)]);var state_80907__$1 = (function (){var statearr_80927 = state_80907;(statearr_80927[(9)] = inst_80889);
return statearr_80927;
})();if(cljs.core.truth_(log))
{var statearr_80928_80954 = state_80907__$1;(statearr_80928_80954[(1)] = (12));
} else
{var statearr_80929_80955 = state_80907__$1;(statearr_80929_80955[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80908 === (8)))
{var inst_80884 = cljs.core.async.timeout.call(null,delay);var state_80907__$1 = state_80907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80907__$1,(11),inst_80884);
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
});})(c__5819__auto___80937,map__80878,map__80878__$1,delay,log))
;return ((function (switch__5804__auto__,c__5819__auto___80937,map__80878,map__80878__$1,delay,log){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_80933 = [null,null,null,null,null,null,null,null,null,null];(statearr_80933[(0)] = state_machine__5805__auto__);
(statearr_80933[(1)] = (1));
return statearr_80933;
});
var state_machine__5805__auto____1 = (function (state_80907){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_80907);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e80934){if((e80934 instanceof Object))
{var ex__5808__auto__ = e80934;var statearr_80935_80956 = state_80907;(statearr_80935_80956[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80907);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e80934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__80957 = state_80907;
state_80907 = G__80957;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_80907){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_80907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___80937,map__80878,map__80878__$1,delay,log))
})();var state__5821__auto__ = (function (){var statearr_80936 = f__5820__auto__.call(null);(statearr_80936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___80937);
return statearr_80936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___80937,map__80878,map__80878__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__80818 = null;if (arguments.length > 1) {
  p__80818 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__80818);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__80958){
var ch = cljs.core.first(arglist__80958);
var p__80818 = cljs.core.rest(arglist__80958);
return dorun_async__delegate(ch,p__80818);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map