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
map_async.cljs$lang$applyTo = (function (arglist__28540){
var f = cljs.core.first(arglist__28540);
var colls = cljs.core.rest(arglist__28540);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* asynch consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__28541){var map__28601 = p__28541;var map__28601__$1 = ((cljs.core.seq_QMARK_.call(null,map__28601))?cljs.core.apply.call(null,cljs.core.hash_map,map__28601):map__28601);var delay = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___28660 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28630){var state_val_28631 = (state_28630[1]);if((state_val_28631 === 1))
{var state_28630__$1 = state_28630;var statearr_28632_28661 = state_28630__$1;(statearr_28632_28661[2] = null);
(statearr_28632_28661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 2))
{var state_28630__$1 = state_28630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28630__$1,4,ch);
} else
{if((state_val_28631 === 3))
{var inst_28628 = (state_28630[2]);var state_28630__$1 = state_28630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28630__$1,inst_28628);
} else
{if((state_val_28631 === 4))
{var inst_28604 = (state_28630[7]);var inst_28604__$1 = (state_28630[2]);var state_28630__$1 = (function (){var statearr_28633 = state_28630;(statearr_28633[7] = inst_28604__$1);
return statearr_28633;
})();if(cljs.core.truth_(inst_28604__$1))
{var statearr_28634_28662 = state_28630__$1;(statearr_28634_28662[1] = 5);
} else
{var statearr_28635_28663 = state_28630__$1;(statearr_28635_28663[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 5))
{var state_28630__$1 = state_28630;if(cljs.core.truth_(delay))
{var statearr_28636_28664 = state_28630__$1;(statearr_28636_28664[1] = 8);
} else
{var statearr_28637_28665 = state_28630__$1;(statearr_28637_28665[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 6))
{var state_28630__$1 = state_28630;var statearr_28638_28666 = state_28630__$1;(statearr_28638_28666[2] = null);
(statearr_28638_28666[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 7))
{var inst_28621 = (state_28630[2]);var state_28630__$1 = state_28630;if(cljs.core.truth_(inst_28621))
{var statearr_28639_28667 = state_28630__$1;(statearr_28639_28667[1] = 15);
} else
{var statearr_28640_28668 = state_28630__$1;(statearr_28640_28668[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 8))
{var inst_28607 = cljs.core.async.timeout.call(null,delay);var state_28630__$1 = state_28630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28630__$1,11,inst_28607);
} else
{if((state_val_28631 === 9))
{var state_28630__$1 = state_28630;var statearr_28641_28669 = state_28630__$1;(statearr_28641_28669[2] = null);
(statearr_28641_28669[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 10))
{var inst_28612 = (state_28630[2]);var state_28630__$1 = (function (){var statearr_28642 = state_28630;(statearr_28642[8] = inst_28612);
return statearr_28642;
})();if(cljs.core.truth_(log))
{var statearr_28643_28670 = state_28630__$1;(statearr_28643_28670[1] = 12);
} else
{var statearr_28644_28671 = state_28630__$1;(statearr_28644_28671[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 11))
{var inst_28609 = (state_28630[2]);var state_28630__$1 = state_28630;var statearr_28645_28672 = state_28630__$1;(statearr_28645_28672[2] = inst_28609);
(statearr_28645_28672[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 12))
{var inst_28604 = (state_28630[7]);var inst_28614 = cljs.core.clj__GT_js.call(null,inst_28604);var inst_28615 = console.log(inst_28614);var state_28630__$1 = state_28630;var statearr_28646_28673 = state_28630__$1;(statearr_28646_28673[2] = inst_28615);
(statearr_28646_28673[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 13))
{var state_28630__$1 = state_28630;var statearr_28647_28674 = state_28630__$1;(statearr_28647_28674[2] = null);
(statearr_28647_28674[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 14))
{var inst_28604 = (state_28630[7]);var inst_28618 = (state_28630[2]);var state_28630__$1 = (function (){var statearr_28648 = state_28630;(statearr_28648[9] = inst_28618);
return statearr_28648;
})();var statearr_28649_28675 = state_28630__$1;(statearr_28649_28675[2] = inst_28604);
(statearr_28649_28675[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 15))
{var state_28630__$1 = state_28630;var statearr_28650_28676 = state_28630__$1;(statearr_28650_28676[2] = null);
(statearr_28650_28676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 16))
{var state_28630__$1 = state_28630;var statearr_28651_28677 = state_28630__$1;(statearr_28651_28677[2] = null);
(statearr_28651_28677[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28631 === 17))
{var inst_28626 = (state_28630[2]);var state_28630__$1 = state_28630;var statearr_28652_28678 = state_28630__$1;(statearr_28652_28678[2] = inst_28626);
(statearr_28652_28678[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_28656 = [null,null,null,null,null,null,null,null,null,null];(statearr_28656[0] = state_machine__5507__auto__);
(statearr_28656[1] = 1);
return statearr_28656;
});
var state_machine__5507__auto____1 = (function (state_28630){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28630);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28657){if((e28657 instanceof Object))
{var ex__5510__auto__ = e28657;var statearr_28658_28679 = state_28630;(statearr_28658_28679[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28680 = state_28630;
state_28630 = G__28680;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28630){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28659 = f__5522__auto__.call(null);(statearr_28659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___28660);
return statearr_28659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__28541 = null;if (arguments.length > 1) {
  p__28541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__28541);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__28681){
var ch = cljs.core.first(arglist__28681);
var p__28541 = cljs.core.rest(arglist__28681);
return dorun_async__delegate(ch,p__28541);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
