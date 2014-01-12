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
map_async.cljs$lang$applyTo = (function (arglist__28563){
var f = cljs.core.first(arglist__28563);
var colls = cljs.core.rest(arglist__28563);
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
var dorun_async__delegate = function (ch,p__28564){var map__28624 = p__28564;var map__28624__$1 = ((cljs.core.seq_QMARK_.call(null,map__28624))?cljs.core.apply.call(null,cljs.core.hash_map,map__28624):map__28624);var delay = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___28683 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28653){var state_val_28654 = (state_28653[1]);if((state_val_28654 === 1))
{var state_28653__$1 = state_28653;var statearr_28655_28684 = state_28653__$1;(statearr_28655_28684[2] = null);
(statearr_28655_28684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 2))
{var state_28653__$1 = state_28653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28653__$1,4,ch);
} else
{if((state_val_28654 === 3))
{var inst_28651 = (state_28653[2]);var state_28653__$1 = state_28653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28653__$1,inst_28651);
} else
{if((state_val_28654 === 4))
{var inst_28627 = (state_28653[7]);var inst_28627__$1 = (state_28653[2]);var state_28653__$1 = (function (){var statearr_28656 = state_28653;(statearr_28656[7] = inst_28627__$1);
return statearr_28656;
})();if(cljs.core.truth_(inst_28627__$1))
{var statearr_28657_28685 = state_28653__$1;(statearr_28657_28685[1] = 5);
} else
{var statearr_28658_28686 = state_28653__$1;(statearr_28658_28686[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 5))
{var state_28653__$1 = state_28653;if(cljs.core.truth_(delay))
{var statearr_28659_28687 = state_28653__$1;(statearr_28659_28687[1] = 8);
} else
{var statearr_28660_28688 = state_28653__$1;(statearr_28660_28688[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 6))
{var state_28653__$1 = state_28653;var statearr_28661_28689 = state_28653__$1;(statearr_28661_28689[2] = null);
(statearr_28661_28689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 7))
{var inst_28644 = (state_28653[2]);var state_28653__$1 = state_28653;if(cljs.core.truth_(inst_28644))
{var statearr_28662_28690 = state_28653__$1;(statearr_28662_28690[1] = 15);
} else
{var statearr_28663_28691 = state_28653__$1;(statearr_28663_28691[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 8))
{var inst_28630 = cljs.core.async.timeout.call(null,delay);var state_28653__$1 = state_28653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28653__$1,11,inst_28630);
} else
{if((state_val_28654 === 9))
{var state_28653__$1 = state_28653;var statearr_28664_28692 = state_28653__$1;(statearr_28664_28692[2] = null);
(statearr_28664_28692[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 10))
{var inst_28635 = (state_28653[2]);var state_28653__$1 = (function (){var statearr_28665 = state_28653;(statearr_28665[8] = inst_28635);
return statearr_28665;
})();if(cljs.core.truth_(log))
{var statearr_28666_28693 = state_28653__$1;(statearr_28666_28693[1] = 12);
} else
{var statearr_28667_28694 = state_28653__$1;(statearr_28667_28694[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 11))
{var inst_28632 = (state_28653[2]);var state_28653__$1 = state_28653;var statearr_28668_28695 = state_28653__$1;(statearr_28668_28695[2] = inst_28632);
(statearr_28668_28695[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 12))
{var inst_28627 = (state_28653[7]);var inst_28637 = cljs.core.clj__GT_js.call(null,inst_28627);var inst_28638 = console.log(inst_28637);var state_28653__$1 = state_28653;var statearr_28669_28696 = state_28653__$1;(statearr_28669_28696[2] = inst_28638);
(statearr_28669_28696[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 13))
{var state_28653__$1 = state_28653;var statearr_28670_28697 = state_28653__$1;(statearr_28670_28697[2] = null);
(statearr_28670_28697[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 14))
{var inst_28627 = (state_28653[7]);var inst_28641 = (state_28653[2]);var state_28653__$1 = (function (){var statearr_28671 = state_28653;(statearr_28671[9] = inst_28641);
return statearr_28671;
})();var statearr_28672_28698 = state_28653__$1;(statearr_28672_28698[2] = inst_28627);
(statearr_28672_28698[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 15))
{var state_28653__$1 = state_28653;var statearr_28673_28699 = state_28653__$1;(statearr_28673_28699[2] = null);
(statearr_28673_28699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 16))
{var state_28653__$1 = state_28653;var statearr_28674_28700 = state_28653__$1;(statearr_28674_28700[2] = null);
(statearr_28674_28700[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28654 === 17))
{var inst_28649 = (state_28653[2]);var state_28653__$1 = state_28653;var statearr_28675_28701 = state_28653__$1;(statearr_28675_28701[2] = inst_28649);
(statearr_28675_28701[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_28679 = [null,null,null,null,null,null,null,null,null,null];(statearr_28679[0] = state_machine__5507__auto__);
(statearr_28679[1] = 1);
return statearr_28679;
});
var state_machine__5507__auto____1 = (function (state_28653){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28653);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28680){if((e28680 instanceof Object))
{var ex__5510__auto__ = e28680;var statearr_28681_28702 = state_28653;(statearr_28681_28702[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28703 = state_28653;
state_28653 = G__28703;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28653){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28682 = f__5522__auto__.call(null);(statearr_28682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___28683);
return statearr_28682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__28564 = null;if (arguments.length > 1) {
  p__28564 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__28564);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__28704){
var ch = cljs.core.first(arglist__28704);
var p__28564 = cljs.core.rest(arglist__28704);
return dorun_async__delegate(ch,p__28564);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
