// Compiled by ClojureScript 0.0-2261
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
map_async.cljs$lang$applyTo = (function (arglist__45880){
var f = cljs.core.first(arglist__45880);
var colls = cljs.core.rest(arglist__45880);
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
var dorun_async__delegate = function (ch,p__45881){var map__45941 = p__45881;var map__45941__$1 = ((cljs.core.seq_QMARK_.call(null,map__45941))?cljs.core.apply.call(null,cljs.core.hash_map,map__45941):map__45941);var delay = cljs.core.get.call(null,map__45941__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__45941__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___46000 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___46000,map__45941,map__45941__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___46000,map__45941,map__45941__$1,delay,log){
return (function (state_45970){var state_val_45971 = (state_45970[(1)]);if((state_val_45971 === (7)))
{var inst_45961 = (state_45970[(2)]);var state_45970__$1 = state_45970;if(cljs.core.truth_(inst_45961))
{var statearr_45972_46001 = state_45970__$1;(statearr_45972_46001[(1)] = (15));
} else
{var statearr_45973_46002 = state_45970__$1;(statearr_45973_46002[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (1)))
{var state_45970__$1 = state_45970;var statearr_45974_46003 = state_45970__$1;(statearr_45974_46003[(2)] = null);
(statearr_45974_46003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (4)))
{var inst_45944 = (state_45970[(7)]);var inst_45944__$1 = (state_45970[(2)]);var state_45970__$1 = (function (){var statearr_45975 = state_45970;(statearr_45975[(7)] = inst_45944__$1);
return statearr_45975;
})();if(cljs.core.truth_(inst_45944__$1))
{var statearr_45976_46004 = state_45970__$1;(statearr_45976_46004[(1)] = (5));
} else
{var statearr_45977_46005 = state_45970__$1;(statearr_45977_46005[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (15)))
{var state_45970__$1 = state_45970;var statearr_45978_46006 = state_45970__$1;(statearr_45978_46006[(2)] = null);
(statearr_45978_46006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (13)))
{var state_45970__$1 = state_45970;var statearr_45979_46007 = state_45970__$1;(statearr_45979_46007[(2)] = null);
(statearr_45979_46007[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (6)))
{var state_45970__$1 = state_45970;var statearr_45980_46008 = state_45970__$1;(statearr_45980_46008[(2)] = null);
(statearr_45980_46008[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (17)))
{var inst_45966 = (state_45970[(2)]);var state_45970__$1 = state_45970;var statearr_45981_46009 = state_45970__$1;(statearr_45981_46009[(2)] = inst_45966);
(statearr_45981_46009[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (3)))
{var inst_45968 = (state_45970[(2)]);var state_45970__$1 = state_45970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45970__$1,inst_45968);
} else
{if((state_val_45971 === (12)))
{var inst_45944 = (state_45970[(7)]);var inst_45954 = cljs.core.clj__GT_js.call(null,inst_45944);var inst_45955 = console.log(inst_45954);var state_45970__$1 = state_45970;var statearr_45982_46010 = state_45970__$1;(statearr_45982_46010[(2)] = inst_45955);
(statearr_45982_46010[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (2)))
{var state_45970__$1 = state_45970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45970__$1,(4),ch);
} else
{if((state_val_45971 === (11)))
{var inst_45949 = (state_45970[(2)]);var state_45970__$1 = state_45970;var statearr_45983_46011 = state_45970__$1;(statearr_45983_46011[(2)] = inst_45949);
(statearr_45983_46011[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (9)))
{var state_45970__$1 = state_45970;var statearr_45984_46012 = state_45970__$1;(statearr_45984_46012[(2)] = null);
(statearr_45984_46012[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (5)))
{var state_45970__$1 = state_45970;if(cljs.core.truth_(delay))
{var statearr_45985_46013 = state_45970__$1;(statearr_45985_46013[(1)] = (8));
} else
{var statearr_45986_46014 = state_45970__$1;(statearr_45986_46014[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (14)))
{var inst_45944 = (state_45970[(7)]);var inst_45958 = (state_45970[(2)]);var state_45970__$1 = (function (){var statearr_45987 = state_45970;(statearr_45987[(8)] = inst_45958);
return statearr_45987;
})();var statearr_45988_46015 = state_45970__$1;(statearr_45988_46015[(2)] = inst_45944);
(statearr_45988_46015[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (16)))
{var state_45970__$1 = state_45970;var statearr_45989_46016 = state_45970__$1;(statearr_45989_46016[(2)] = null);
(statearr_45989_46016[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (10)))
{var inst_45952 = (state_45970[(2)]);var state_45970__$1 = (function (){var statearr_45990 = state_45970;(statearr_45990[(9)] = inst_45952);
return statearr_45990;
})();if(cljs.core.truth_(log))
{var statearr_45991_46017 = state_45970__$1;(statearr_45991_46017[(1)] = (12));
} else
{var statearr_45992_46018 = state_45970__$1;(statearr_45992_46018[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45971 === (8)))
{var inst_45947 = cljs.core.async.timeout.call(null,delay);var state_45970__$1 = state_45970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45970__$1,(11),inst_45947);
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
});})(c__5693__auto___46000,map__45941,map__45941__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___46000,map__45941,map__45941__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45996 = [null,null,null,null,null,null,null,null,null,null];(statearr_45996[(0)] = state_machine__5679__auto__);
(statearr_45996[(1)] = (1));
return statearr_45996;
});
var state_machine__5679__auto____1 = (function (state_45970){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45997){if((e45997 instanceof Object))
{var ex__5682__auto__ = e45997;var statearr_45998_46019 = state_45970;(statearr_45998_46019[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46020 = state_45970;
state_45970 = G__46020;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45970){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___46000,map__45941,map__45941__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_45999 = f__5694__auto__.call(null);(statearr_45999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___46000);
return statearr_45999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___46000,map__45941,map__45941__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__45881 = null;if (arguments.length > 1) {
  p__45881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__45881);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__46021){
var ch = cljs.core.first(arglist__46021);
var p__45881 = cljs.core.rest(arglist__46021);
return dorun_async__delegate(ch,p__45881);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map