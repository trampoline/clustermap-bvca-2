// Compiled by ClojureScript 0.0-2227
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
map_async.cljs$lang$applyTo = (function (arglist__12067){
var f = cljs.core.first(arglist__12067);
var colls = cljs.core.rest(arglist__12067);
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
var dorun_async__delegate = function (ch,p__12068){var map__12128 = p__12068;var map__12128__$1 = ((cljs.core.seq_QMARK_.call(null,map__12128))?cljs.core.apply.call(null,cljs.core.hash_map,map__12128):map__12128);var delay = cljs.core.get.call(null,map__12128__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__12128__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5691__auto___12187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___12187,map__12128,map__12128__$1,delay,log){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___12187,map__12128,map__12128__$1,delay,log){
return (function (state_12157){var state_val_12158 = (state_12157[1]);if((state_val_12158 === 7))
{var inst_12148 = (state_12157[2]);var state_12157__$1 = state_12157;if(cljs.core.truth_(inst_12148))
{var statearr_12159_12188 = state_12157__$1;(statearr_12159_12188[1] = 15);
} else
{var statearr_12160_12189 = state_12157__$1;(statearr_12160_12189[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 1))
{var state_12157__$1 = state_12157;var statearr_12161_12190 = state_12157__$1;(statearr_12161_12190[2] = null);
(statearr_12161_12190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 4))
{var inst_12131 = (state_12157[7]);var inst_12131__$1 = (state_12157[2]);var state_12157__$1 = (function (){var statearr_12162 = state_12157;(statearr_12162[7] = inst_12131__$1);
return statearr_12162;
})();if(cljs.core.truth_(inst_12131__$1))
{var statearr_12163_12191 = state_12157__$1;(statearr_12163_12191[1] = 5);
} else
{var statearr_12164_12192 = state_12157__$1;(statearr_12164_12192[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 15))
{var state_12157__$1 = state_12157;var statearr_12165_12193 = state_12157__$1;(statearr_12165_12193[2] = null);
(statearr_12165_12193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 13))
{var state_12157__$1 = state_12157;var statearr_12166_12194 = state_12157__$1;(statearr_12166_12194[2] = null);
(statearr_12166_12194[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 6))
{var state_12157__$1 = state_12157;var statearr_12167_12195 = state_12157__$1;(statearr_12167_12195[2] = null);
(statearr_12167_12195[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 17))
{var inst_12153 = (state_12157[2]);var state_12157__$1 = state_12157;var statearr_12168_12196 = state_12157__$1;(statearr_12168_12196[2] = inst_12153);
(statearr_12168_12196[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 3))
{var inst_12155 = (state_12157[2]);var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12157__$1,inst_12155);
} else
{if((state_val_12158 === 12))
{var inst_12131 = (state_12157[7]);var inst_12141 = cljs.core.clj__GT_js.call(null,inst_12131);var inst_12142 = console.log(inst_12141);var state_12157__$1 = state_12157;var statearr_12169_12197 = state_12157__$1;(statearr_12169_12197[2] = inst_12142);
(statearr_12169_12197[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 2))
{var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12157__$1,4,ch);
} else
{if((state_val_12158 === 11))
{var inst_12136 = (state_12157[2]);var state_12157__$1 = state_12157;var statearr_12170_12198 = state_12157__$1;(statearr_12170_12198[2] = inst_12136);
(statearr_12170_12198[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 9))
{var state_12157__$1 = state_12157;var statearr_12171_12199 = state_12157__$1;(statearr_12171_12199[2] = null);
(statearr_12171_12199[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 5))
{var state_12157__$1 = state_12157;if(cljs.core.truth_(delay))
{var statearr_12172_12200 = state_12157__$1;(statearr_12172_12200[1] = 8);
} else
{var statearr_12173_12201 = state_12157__$1;(statearr_12173_12201[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 14))
{var inst_12131 = (state_12157[7]);var inst_12145 = (state_12157[2]);var state_12157__$1 = (function (){var statearr_12174 = state_12157;(statearr_12174[8] = inst_12145);
return statearr_12174;
})();var statearr_12175_12202 = state_12157__$1;(statearr_12175_12202[2] = inst_12131);
(statearr_12175_12202[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 16))
{var state_12157__$1 = state_12157;var statearr_12176_12203 = state_12157__$1;(statearr_12176_12203[2] = null);
(statearr_12176_12203[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 10))
{var inst_12139 = (state_12157[2]);var state_12157__$1 = (function (){var statearr_12177 = state_12157;(statearr_12177[9] = inst_12139);
return statearr_12177;
})();if(cljs.core.truth_(log))
{var statearr_12178_12204 = state_12157__$1;(statearr_12178_12204[1] = 12);
} else
{var statearr_12179_12205 = state_12157__$1;(statearr_12179_12205[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 8))
{var inst_12134 = cljs.core.async.timeout.call(null,delay);var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12157__$1,11,inst_12134);
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
});})(c__5691__auto___12187,map__12128,map__12128__$1,delay,log))
;return ((function (switch__5676__auto__,c__5691__auto___12187,map__12128,map__12128__$1,delay,log){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_12183 = [null,null,null,null,null,null,null,null,null,null];(statearr_12183[0] = state_machine__5677__auto__);
(statearr_12183[1] = 1);
return statearr_12183;
});
var state_machine__5677__auto____1 = (function (state_12157){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_12157);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e12184){if((e12184 instanceof Object))
{var ex__5680__auto__ = e12184;var statearr_12185_12206 = state_12157;(statearr_12185_12206[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12207 = state_12157;
state_12157 = G__12207;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_12157){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_12157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___12187,map__12128,map__12128__$1,delay,log))
})();var state__5693__auto__ = (function (){var statearr_12186 = f__5692__auto__.call(null);(statearr_12186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___12187);
return statearr_12186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___12187,map__12128,map__12128__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12068 = null;if (arguments.length > 1) {
  p__12068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12068);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12208){
var ch = cljs.core.first(arglist__12208);
var p__12068 = cljs.core.rest(arglist__12208);
return dorun_async__delegate(ch,p__12068);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
