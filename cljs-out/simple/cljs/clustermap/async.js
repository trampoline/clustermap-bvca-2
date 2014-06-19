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
map_async.cljs$lang$applyTo = (function (arglist__12065){
var f = cljs.core.first(arglist__12065);
var colls = cljs.core.rest(arglist__12065);
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
var dorun_async__delegate = function (ch,p__12066){var map__12126 = p__12066;var map__12126__$1 = ((cljs.core.seq_QMARK_.call(null,map__12126))?cljs.core.apply.call(null,cljs.core.hash_map,map__12126):map__12126);var delay = cljs.core.get.call(null,map__12126__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__12126__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5689__auto___12185 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___12185,map__12126,map__12126__$1,delay,log){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___12185,map__12126,map__12126__$1,delay,log){
return (function (state_12155){var state_val_12156 = (state_12155[1]);if((state_val_12156 === 7))
{var inst_12146 = (state_12155[2]);var state_12155__$1 = state_12155;if(cljs.core.truth_(inst_12146))
{var statearr_12157_12186 = state_12155__$1;(statearr_12157_12186[1] = 15);
} else
{var statearr_12158_12187 = state_12155__$1;(statearr_12158_12187[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 1))
{var state_12155__$1 = state_12155;var statearr_12159_12188 = state_12155__$1;(statearr_12159_12188[2] = null);
(statearr_12159_12188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 4))
{var inst_12129 = (state_12155[7]);var inst_12129__$1 = (state_12155[2]);var state_12155__$1 = (function (){var statearr_12160 = state_12155;(statearr_12160[7] = inst_12129__$1);
return statearr_12160;
})();if(cljs.core.truth_(inst_12129__$1))
{var statearr_12161_12189 = state_12155__$1;(statearr_12161_12189[1] = 5);
} else
{var statearr_12162_12190 = state_12155__$1;(statearr_12162_12190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 15))
{var state_12155__$1 = state_12155;var statearr_12163_12191 = state_12155__$1;(statearr_12163_12191[2] = null);
(statearr_12163_12191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 13))
{var state_12155__$1 = state_12155;var statearr_12164_12192 = state_12155__$1;(statearr_12164_12192[2] = null);
(statearr_12164_12192[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 6))
{var state_12155__$1 = state_12155;var statearr_12165_12193 = state_12155__$1;(statearr_12165_12193[2] = null);
(statearr_12165_12193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 17))
{var inst_12151 = (state_12155[2]);var state_12155__$1 = state_12155;var statearr_12166_12194 = state_12155__$1;(statearr_12166_12194[2] = inst_12151);
(statearr_12166_12194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 3))
{var inst_12153 = (state_12155[2]);var state_12155__$1 = state_12155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12155__$1,inst_12153);
} else
{if((state_val_12156 === 12))
{var inst_12129 = (state_12155[7]);var inst_12139 = cljs.core.clj__GT_js.call(null,inst_12129);var inst_12140 = console.log(inst_12139);var state_12155__$1 = state_12155;var statearr_12167_12195 = state_12155__$1;(statearr_12167_12195[2] = inst_12140);
(statearr_12167_12195[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 2))
{var state_12155__$1 = state_12155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12155__$1,4,ch);
} else
{if((state_val_12156 === 11))
{var inst_12134 = (state_12155[2]);var state_12155__$1 = state_12155;var statearr_12168_12196 = state_12155__$1;(statearr_12168_12196[2] = inst_12134);
(statearr_12168_12196[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 9))
{var state_12155__$1 = state_12155;var statearr_12169_12197 = state_12155__$1;(statearr_12169_12197[2] = null);
(statearr_12169_12197[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 5))
{var state_12155__$1 = state_12155;if(cljs.core.truth_(delay))
{var statearr_12170_12198 = state_12155__$1;(statearr_12170_12198[1] = 8);
} else
{var statearr_12171_12199 = state_12155__$1;(statearr_12171_12199[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 14))
{var inst_12129 = (state_12155[7]);var inst_12143 = (state_12155[2]);var state_12155__$1 = (function (){var statearr_12172 = state_12155;(statearr_12172[8] = inst_12143);
return statearr_12172;
})();var statearr_12173_12200 = state_12155__$1;(statearr_12173_12200[2] = inst_12129);
(statearr_12173_12200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 16))
{var state_12155__$1 = state_12155;var statearr_12174_12201 = state_12155__$1;(statearr_12174_12201[2] = null);
(statearr_12174_12201[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 10))
{var inst_12137 = (state_12155[2]);var state_12155__$1 = (function (){var statearr_12175 = state_12155;(statearr_12175[9] = inst_12137);
return statearr_12175;
})();if(cljs.core.truth_(log))
{var statearr_12176_12202 = state_12155__$1;(statearr_12176_12202[1] = 12);
} else
{var statearr_12177_12203 = state_12155__$1;(statearr_12177_12203[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12156 === 8))
{var inst_12132 = cljs.core.async.timeout.call(null,delay);var state_12155__$1 = state_12155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12155__$1,11,inst_12132);
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
});})(c__5689__auto___12185,map__12126,map__12126__$1,delay,log))
;return ((function (switch__5674__auto__,c__5689__auto___12185,map__12126,map__12126__$1,delay,log){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_12181 = [null,null,null,null,null,null,null,null,null,null];(statearr_12181[0] = state_machine__5675__auto__);
(statearr_12181[1] = 1);
return statearr_12181;
});
var state_machine__5675__auto____1 = (function (state_12155){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_12155);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e12182){if((e12182 instanceof Object))
{var ex__5678__auto__ = e12182;var statearr_12183_12204 = state_12155;(statearr_12183_12204[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12155);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12205 = state_12155;
state_12155 = G__12205;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_12155){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_12155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___12185,map__12126,map__12126__$1,delay,log))
})();var state__5691__auto__ = (function (){var statearr_12184 = f__5690__auto__.call(null);(statearr_12184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___12185);
return statearr_12184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___12185,map__12126,map__12126__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12066 = null;if (arguments.length > 1) {
  p__12066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12066);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12206){
var ch = cljs.core.first(arglist__12206);
var p__12066 = cljs.core.rest(arglist__12206);
return dorun_async__delegate(ch,p__12066);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
