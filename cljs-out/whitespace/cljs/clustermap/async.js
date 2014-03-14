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
map_async.cljs$lang$applyTo = (function (arglist__44727){
var f = cljs.core.first(arglist__44727);
var colls = cljs.core.rest(arglist__44727);
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
var dorun_async__delegate = function (ch,p__44728){var map__44788 = p__44728;var map__44788__$1 = ((cljs.core.seq_QMARK_.call(null,map__44788))?cljs.core.apply.call(null,cljs.core.hash_map,map__44788):map__44788);var delay = cljs.core.get.call(null,map__44788__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__44788__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___44847 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44817){var state_val_44818 = (state_44817[1]);if((state_val_44818 === 1))
{var state_44817__$1 = state_44817;var statearr_44819_44848 = state_44817__$1;(statearr_44819_44848[2] = null);
(statearr_44819_44848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 2))
{var state_44817__$1 = state_44817;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44817__$1,4,ch);
} else
{if((state_val_44818 === 3))
{var inst_44815 = (state_44817[2]);var state_44817__$1 = state_44817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44817__$1,inst_44815);
} else
{if((state_val_44818 === 4))
{var inst_44791 = (state_44817[7]);var inst_44791__$1 = (state_44817[2]);var state_44817__$1 = (function (){var statearr_44820 = state_44817;(statearr_44820[7] = inst_44791__$1);
return statearr_44820;
})();if(cljs.core.truth_(inst_44791__$1))
{var statearr_44821_44849 = state_44817__$1;(statearr_44821_44849[1] = 5);
} else
{var statearr_44822_44850 = state_44817__$1;(statearr_44822_44850[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 5))
{var state_44817__$1 = state_44817;if(cljs.core.truth_(delay))
{var statearr_44823_44851 = state_44817__$1;(statearr_44823_44851[1] = 8);
} else
{var statearr_44824_44852 = state_44817__$1;(statearr_44824_44852[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 6))
{var state_44817__$1 = state_44817;var statearr_44825_44853 = state_44817__$1;(statearr_44825_44853[2] = null);
(statearr_44825_44853[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 7))
{var inst_44808 = (state_44817[2]);var state_44817__$1 = state_44817;if(cljs.core.truth_(inst_44808))
{var statearr_44826_44854 = state_44817__$1;(statearr_44826_44854[1] = 15);
} else
{var statearr_44827_44855 = state_44817__$1;(statearr_44827_44855[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 8))
{var inst_44794 = cljs.core.async.timeout.call(null,delay);var state_44817__$1 = state_44817;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44817__$1,11,inst_44794);
} else
{if((state_val_44818 === 9))
{var state_44817__$1 = state_44817;var statearr_44828_44856 = state_44817__$1;(statearr_44828_44856[2] = null);
(statearr_44828_44856[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 10))
{var inst_44799 = (state_44817[2]);var state_44817__$1 = (function (){var statearr_44829 = state_44817;(statearr_44829[8] = inst_44799);
return statearr_44829;
})();if(cljs.core.truth_(log))
{var statearr_44830_44857 = state_44817__$1;(statearr_44830_44857[1] = 12);
} else
{var statearr_44831_44858 = state_44817__$1;(statearr_44831_44858[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 11))
{var inst_44796 = (state_44817[2]);var state_44817__$1 = state_44817;var statearr_44832_44859 = state_44817__$1;(statearr_44832_44859[2] = inst_44796);
(statearr_44832_44859[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 12))
{var inst_44791 = (state_44817[7]);var inst_44801 = cljs.core.clj__GT_js.call(null,inst_44791);var inst_44802 = console.log(inst_44801);var state_44817__$1 = state_44817;var statearr_44833_44860 = state_44817__$1;(statearr_44833_44860[2] = inst_44802);
(statearr_44833_44860[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 13))
{var state_44817__$1 = state_44817;var statearr_44834_44861 = state_44817__$1;(statearr_44834_44861[2] = null);
(statearr_44834_44861[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 14))
{var inst_44791 = (state_44817[7]);var inst_44805 = (state_44817[2]);var state_44817__$1 = (function (){var statearr_44835 = state_44817;(statearr_44835[9] = inst_44805);
return statearr_44835;
})();var statearr_44836_44862 = state_44817__$1;(statearr_44836_44862[2] = inst_44791);
(statearr_44836_44862[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 15))
{var state_44817__$1 = state_44817;var statearr_44837_44863 = state_44817__$1;(statearr_44837_44863[2] = null);
(statearr_44837_44863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 16))
{var state_44817__$1 = state_44817;var statearr_44838_44864 = state_44817__$1;(statearr_44838_44864[2] = null);
(statearr_44838_44864[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44818 === 17))
{var inst_44813 = (state_44817[2]);var state_44817__$1 = state_44817;var statearr_44839_44865 = state_44817__$1;(statearr_44839_44865[2] = inst_44813);
(statearr_44839_44865[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_44843 = [null,null,null,null,null,null,null,null,null,null];(statearr_44843[0] = state_machine__5548__auto__);
(statearr_44843[1] = 1);
return statearr_44843;
});
var state_machine__5548__auto____1 = (function (state_44817){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44817);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44844){if((e44844 instanceof Object))
{var ex__5551__auto__ = e44844;var statearr_44845_44866 = state_44817;(statearr_44845_44866[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44817);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44867 = state_44817;
state_44817 = G__44867;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44817){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44846 = f__5563__auto__.call(null);(statearr_44846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___44847);
return statearr_44846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__44728 = null;if (arguments.length > 1) {
  p__44728 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__44728);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__44868){
var ch = cljs.core.first(arglist__44868);
var p__44728 = cljs.core.rest(arglist__44868);
return dorun_async__delegate(ch,p__44728);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
