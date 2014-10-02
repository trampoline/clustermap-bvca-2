// Compiled by ClojureScript 0.0-2322
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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__38705){
var f = cljs.core.first(arglist__38705);
var colls = cljs.core.rest(arglist__38705);
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
var dorun_async__delegate = function (ch,p__38706){var map__38766 = p__38706;var map__38766__$1 = ((cljs.core.seq_QMARK_(map__38766))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38766):map__38766);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38766__$1,cljs.core.constant$keyword$1258);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38766__$1,cljs.core.constant$keyword$1166);var c__5708__auto___38825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___38825,map__38766,map__38766__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___38825,map__38766,map__38766__$1,delay,log){
return (function (state_38795){var state_val_38796 = (state_38795[(1)]);if((state_val_38796 === (7)))
{var inst_38786 = (state_38795[(2)]);var state_38795__$1 = state_38795;if(cljs.core.truth_(inst_38786))
{var statearr_38797_38826 = state_38795__$1;(statearr_38797_38826[(1)] = (15));
} else
{var statearr_38798_38827 = state_38795__$1;(statearr_38798_38827[(1)] = (16));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (1)))
{var state_38795__$1 = state_38795;var statearr_38799_38828 = state_38795__$1;(statearr_38799_38828[(2)] = null);
(statearr_38799_38828[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (4)))
{var inst_38769 = (state_38795[(7)]);var inst_38769__$1 = (state_38795[(2)]);var state_38795__$1 = (function (){var statearr_38800 = state_38795;(statearr_38800[(7)] = inst_38769__$1);
return statearr_38800;
})();if(cljs.core.truth_(inst_38769__$1))
{var statearr_38801_38829 = state_38795__$1;(statearr_38801_38829[(1)] = (5));
} else
{var statearr_38802_38830 = state_38795__$1;(statearr_38802_38830[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (15)))
{var state_38795__$1 = state_38795;var statearr_38803_38831 = state_38795__$1;(statearr_38803_38831[(2)] = null);
(statearr_38803_38831[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (13)))
{var state_38795__$1 = state_38795;var statearr_38804_38832 = state_38795__$1;(statearr_38804_38832[(2)] = null);
(statearr_38804_38832[(1)] = (14));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (6)))
{var state_38795__$1 = state_38795;var statearr_38805_38833 = state_38795__$1;(statearr_38805_38833[(2)] = null);
(statearr_38805_38833[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (17)))
{var inst_38791 = (state_38795[(2)]);var state_38795__$1 = state_38795;var statearr_38806_38834 = state_38795__$1;(statearr_38806_38834[(2)] = inst_38791);
(statearr_38806_38834[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (3)))
{var inst_38793 = (state_38795[(2)]);var state_38795__$1 = state_38795;return cljs.core.async.impl.ioc_helpers.return_chan(state_38795__$1,inst_38793);
} else
{if((state_val_38796 === (12)))
{var inst_38769 = (state_38795[(7)]);var inst_38779 = cljs.core.clj__GT_js(inst_38769);var inst_38780 = console.log(inst_38779);var state_38795__$1 = state_38795;var statearr_38807_38835 = state_38795__$1;(statearr_38807_38835[(2)] = inst_38780);
(statearr_38807_38835[(1)] = (14));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (2)))
{var state_38795__$1 = state_38795;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38795__$1,(4),ch);
} else
{if((state_val_38796 === (11)))
{var inst_38774 = (state_38795[(2)]);var state_38795__$1 = state_38795;var statearr_38808_38836 = state_38795__$1;(statearr_38808_38836[(2)] = inst_38774);
(statearr_38808_38836[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (9)))
{var state_38795__$1 = state_38795;var statearr_38809_38837 = state_38795__$1;(statearr_38809_38837[(2)] = null);
(statearr_38809_38837[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (5)))
{var state_38795__$1 = state_38795;if(cljs.core.truth_(delay))
{var statearr_38810_38838 = state_38795__$1;(statearr_38810_38838[(1)] = (8));
} else
{var statearr_38811_38839 = state_38795__$1;(statearr_38811_38839[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (14)))
{var inst_38769 = (state_38795[(7)]);var inst_38783 = (state_38795[(2)]);var state_38795__$1 = (function (){var statearr_38812 = state_38795;(statearr_38812[(8)] = inst_38783);
return statearr_38812;
})();var statearr_38813_38840 = state_38795__$1;(statearr_38813_38840[(2)] = inst_38769);
(statearr_38813_38840[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (16)))
{var state_38795__$1 = state_38795;var statearr_38814_38841 = state_38795__$1;(statearr_38814_38841[(2)] = null);
(statearr_38814_38841[(1)] = (17));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (10)))
{var inst_38777 = (state_38795[(2)]);var state_38795__$1 = (function (){var statearr_38815 = state_38795;(statearr_38815[(9)] = inst_38777);
return statearr_38815;
})();if(cljs.core.truth_(log))
{var statearr_38816_38842 = state_38795__$1;(statearr_38816_38842[(1)] = (12));
} else
{var statearr_38817_38843 = state_38795__$1;(statearr_38817_38843[(1)] = (13));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_38796 === (8)))
{var inst_38772 = cljs.core.async.timeout(delay);var state_38795__$1 = state_38795;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38795__$1,(11),inst_38772);
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
});})(c__5708__auto___38825,map__38766,map__38766__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___38825,map__38766,map__38766__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38821 = [null,null,null,null,null,null,null,null,null,null];(statearr_38821[(0)] = state_machine__5694__auto__);
(statearr_38821[(1)] = (1));
return statearr_38821;
});
var state_machine__5694__auto____1 = (function (state_38795){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_38795);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38822){if((e38822 instanceof Object))
{var ex__5697__auto__ = e38822;var statearr_38823_38844 = state_38795;(statearr_38823_38844[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38795);
return cljs.core.constant$keyword$880;
} else
{throw e38822;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__38845 = state_38795;
state_38795 = G__38845;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38795){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___38825,map__38766,map__38766__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_38824 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_38824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___38825);
return statearr_38824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___38825,map__38766,map__38766__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__38706 = null;if (arguments.length > 1) {
  p__38706 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__38706);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__38846){
var ch = cljs.core.first(arglist__38846);
var p__38706 = cljs.core.rest(arglist__38846);
return dorun_async__delegate(ch,p__38706);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
