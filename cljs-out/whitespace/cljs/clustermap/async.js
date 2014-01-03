// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
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
map_async.cljs$lang$applyTo = (function (arglist__44788){
var f = cljs.core.first(arglist__44788);
var colls = cljs.core.rest(arglist__44788);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__44789){var map__44837 = p__44789;var map__44837__$1 = ((cljs.core.seq_QMARK_.call(null,map__44837))?cljs.core.apply.call(null,cljs.core.hash_map,map__44837):map__44837);var log = cljs.core.get.call(null,map__44837__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5861__auto___44884 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_44859){var state_val_44860 = (state_44859[1]);if((state_val_44860 === 1))
{var state_44859__$1 = state_44859;var statearr_44861_44885 = state_44859__$1;(statearr_44861_44885[2] = null);
(statearr_44861_44885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 2))
{var state_44859__$1 = state_44859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44859__$1,4,ch);
} else
{if((state_val_44860 === 3))
{var inst_44857 = (state_44859[2]);var state_44859__$1 = state_44859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44859__$1,inst_44857);
} else
{if((state_val_44860 === 4))
{var inst_44840 = (state_44859[7]);var inst_44840__$1 = (state_44859[2]);var state_44859__$1 = (function (){var statearr_44862 = state_44859;(statearr_44862[7] = inst_44840__$1);
return statearr_44862;
})();if(cljs.core.truth_(inst_44840__$1))
{var statearr_44863_44886 = state_44859__$1;(statearr_44863_44886[1] = 5);
} else
{var statearr_44864_44887 = state_44859__$1;(statearr_44864_44887[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 5))
{var state_44859__$1 = state_44859;if(cljs.core.truth_(log))
{var statearr_44865_44888 = state_44859__$1;(statearr_44865_44888[1] = 8);
} else
{var statearr_44866_44889 = state_44859__$1;(statearr_44866_44889[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 6))
{var state_44859__$1 = state_44859;var statearr_44867_44890 = state_44859__$1;(statearr_44867_44890[2] = null);
(statearr_44867_44890[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 7))
{var inst_44850 = (state_44859[2]);var state_44859__$1 = state_44859;if(cljs.core.truth_(inst_44850))
{var statearr_44868_44891 = state_44859__$1;(statearr_44868_44891[1] = 11);
} else
{var statearr_44869_44892 = state_44859__$1;(statearr_44869_44892[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 8))
{var inst_44840 = (state_44859[7]);var inst_44843 = cljs.core.clj__GT_js.call(null,inst_44840);var inst_44844 = console.log(inst_44843);var state_44859__$1 = state_44859;var statearr_44870_44893 = state_44859__$1;(statearr_44870_44893[2] = inst_44844);
(statearr_44870_44893[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 9))
{var state_44859__$1 = state_44859;var statearr_44871_44894 = state_44859__$1;(statearr_44871_44894[2] = null);
(statearr_44871_44894[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 10))
{var inst_44840 = (state_44859[7]);var inst_44847 = (state_44859[2]);var state_44859__$1 = (function (){var statearr_44872 = state_44859;(statearr_44872[8] = inst_44847);
return statearr_44872;
})();var statearr_44873_44895 = state_44859__$1;(statearr_44873_44895[2] = inst_44840);
(statearr_44873_44895[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 11))
{var state_44859__$1 = state_44859;var statearr_44874_44896 = state_44859__$1;(statearr_44874_44896[2] = null);
(statearr_44874_44896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 12))
{var state_44859__$1 = state_44859;var statearr_44875_44897 = state_44859__$1;(statearr_44875_44897[2] = null);
(statearr_44875_44897[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44860 === 13))
{var inst_44855 = (state_44859[2]);var state_44859__$1 = state_44859;var statearr_44876_44898 = state_44859__$1;(statearr_44876_44898[2] = inst_44855);
(statearr_44876_44898[1] = 3);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_44880 = (new Array(9));(statearr_44880[0] = state_machine__5792__auto__);
(statearr_44880[1] = 1);
return statearr_44880;
});
var state_machine__5792__auto____1 = (function (state_44859){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_44859);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e44881){if((e44881 instanceof Object))
{var ex__5795__auto__ = e44881;var statearr_44882_44899 = state_44859;(statearr_44882_44899[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44900 = state_44859;
state_44859 = G__44900;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_44859){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_44859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_44883 = f__5862__auto__.call(null);(statearr_44883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___44884);
return statearr_44883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__44789 = null;if (arguments.length > 1) {
  p__44789 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__44789);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__44901){
var ch = cljs.core.first(arglist__44901);
var p__44789 = cljs.core.rest(arglist__44901);
return dorun_async__delegate(ch,p__44789);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
