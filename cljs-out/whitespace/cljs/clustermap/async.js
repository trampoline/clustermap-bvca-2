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
map_async.cljs$lang$applyTo = (function (arglist__32669){
var f = cljs.core.first(arglist__32669);
var colls = cljs.core.rest(arglist__32669);
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
var dorun_async__delegate = function (ch,p__32670){var map__32730 = p__32670;var map__32730__$1 = ((cljs.core.seq_QMARK_.call(null,map__32730))?cljs.core.apply.call(null,cljs.core.hash_map,map__32730):map__32730);var delay = cljs.core.get.call(null,map__32730__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32730__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32759){var state_val_32760 = (state_32759[1]);if((state_val_32760 === 1))
{var state_32759__$1 = state_32759;var statearr_32761_32790 = state_32759__$1;(statearr_32761_32790[2] = null);
(statearr_32761_32790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 2))
{var state_32759__$1 = state_32759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32759__$1,4,ch);
} else
{if((state_val_32760 === 3))
{var inst_32757 = (state_32759[2]);var state_32759__$1 = state_32759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32759__$1,inst_32757);
} else
{if((state_val_32760 === 4))
{var inst_32733 = (state_32759[7]);var inst_32733__$1 = (state_32759[2]);var state_32759__$1 = (function (){var statearr_32762 = state_32759;(statearr_32762[7] = inst_32733__$1);
return statearr_32762;
})();if(cljs.core.truth_(inst_32733__$1))
{var statearr_32763_32791 = state_32759__$1;(statearr_32763_32791[1] = 5);
} else
{var statearr_32764_32792 = state_32759__$1;(statearr_32764_32792[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 5))
{var state_32759__$1 = state_32759;if(cljs.core.truth_(delay))
{var statearr_32765_32793 = state_32759__$1;(statearr_32765_32793[1] = 8);
} else
{var statearr_32766_32794 = state_32759__$1;(statearr_32766_32794[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 6))
{var state_32759__$1 = state_32759;var statearr_32767_32795 = state_32759__$1;(statearr_32767_32795[2] = null);
(statearr_32767_32795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 7))
{var inst_32750 = (state_32759[2]);var state_32759__$1 = state_32759;if(cljs.core.truth_(inst_32750))
{var statearr_32768_32796 = state_32759__$1;(statearr_32768_32796[1] = 15);
} else
{var statearr_32769_32797 = state_32759__$1;(statearr_32769_32797[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 8))
{var inst_32736 = cljs.core.async.timeout.call(null,delay);var state_32759__$1 = state_32759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32759__$1,11,inst_32736);
} else
{if((state_val_32760 === 9))
{var state_32759__$1 = state_32759;var statearr_32770_32798 = state_32759__$1;(statearr_32770_32798[2] = null);
(statearr_32770_32798[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 10))
{var inst_32741 = (state_32759[2]);var state_32759__$1 = (function (){var statearr_32771 = state_32759;(statearr_32771[8] = inst_32741);
return statearr_32771;
})();if(cljs.core.truth_(log))
{var statearr_32772_32799 = state_32759__$1;(statearr_32772_32799[1] = 12);
} else
{var statearr_32773_32800 = state_32759__$1;(statearr_32773_32800[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 11))
{var inst_32738 = (state_32759[2]);var state_32759__$1 = state_32759;var statearr_32774_32801 = state_32759__$1;(statearr_32774_32801[2] = inst_32738);
(statearr_32774_32801[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 12))
{var inst_32733 = (state_32759[7]);var inst_32743 = cljs.core.clj__GT_js.call(null,inst_32733);var inst_32744 = console.log(inst_32743);var state_32759__$1 = state_32759;var statearr_32775_32802 = state_32759__$1;(statearr_32775_32802[2] = inst_32744);
(statearr_32775_32802[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 13))
{var state_32759__$1 = state_32759;var statearr_32776_32803 = state_32759__$1;(statearr_32776_32803[2] = null);
(statearr_32776_32803[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 14))
{var inst_32733 = (state_32759[7]);var inst_32747 = (state_32759[2]);var state_32759__$1 = (function (){var statearr_32777 = state_32759;(statearr_32777[9] = inst_32747);
return statearr_32777;
})();var statearr_32778_32804 = state_32759__$1;(statearr_32778_32804[2] = inst_32733);
(statearr_32778_32804[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 15))
{var state_32759__$1 = state_32759;var statearr_32779_32805 = state_32759__$1;(statearr_32779_32805[2] = null);
(statearr_32779_32805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 16))
{var state_32759__$1 = state_32759;var statearr_32780_32806 = state_32759__$1;(statearr_32780_32806[2] = null);
(statearr_32780_32806[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 17))
{var inst_32755 = (state_32759[2]);var state_32759__$1 = state_32759;var statearr_32781_32807 = state_32759__$1;(statearr_32781_32807[2] = inst_32755);
(statearr_32781_32807[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32785 = [null,null,null,null,null,null,null,null,null,null];(statearr_32785[0] = state_machine__5507__auto__);
(statearr_32785[1] = 1);
return statearr_32785;
});
var state_machine__5507__auto____1 = (function (state_32759){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32786){if((e32786 instanceof Object))
{var ex__5510__auto__ = e32786;var statearr_32787_32808 = state_32759;(statearr_32787_32808[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32809 = state_32759;
state_32759 = G__32809;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32759){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32788 = f__5522__auto__.call(null);(statearr_32788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32789);
return statearr_32788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32670 = null;if (arguments.length > 1) {
  p__32670 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32670);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32810){
var ch = cljs.core.first(arglist__32810);
var p__32670 = cljs.core.rest(arglist__32810);
return dorun_async__delegate(ch,p__32670);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
