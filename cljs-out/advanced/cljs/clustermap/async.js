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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__33608){
var f = cljs.core.first(arglist__33608);
var colls = cljs.core.rest(arglist__33608);
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
var dorun_async__delegate = function (ch,p__33609){var map__33669 = p__33609;var map__33669__$1 = ((cljs.core.seq_QMARK_(map__33669))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33669):map__33669);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33669__$1,cljs.core.constant$keyword$796);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33669__$1,cljs.core.constant$keyword$797);var c__5562__auto___33728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33698){var state_val_33699 = (state_33698[1]);if((state_val_33699 === 1))
{var state_33698__$1 = state_33698;var statearr_33700_33729 = state_33698__$1;(statearr_33700_33729[2] = null);
(statearr_33700_33729[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 2))
{var state_33698__$1 = state_33698;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33698__$1,4,ch);
} else
{if((state_val_33699 === 3))
{var inst_33696 = (state_33698[2]);var state_33698__$1 = state_33698;return cljs.core.async.impl.ioc_helpers.return_chan(state_33698__$1,inst_33696);
} else
{if((state_val_33699 === 4))
{var inst_33672 = (state_33698[7]);var inst_33672__$1 = (state_33698[2]);var state_33698__$1 = (function (){var statearr_33701 = state_33698;(statearr_33701[7] = inst_33672__$1);
return statearr_33701;
})();if(cljs.core.truth_(inst_33672__$1))
{var statearr_33702_33730 = state_33698__$1;(statearr_33702_33730[1] = 5);
} else
{var statearr_33703_33731 = state_33698__$1;(statearr_33703_33731[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 5))
{var state_33698__$1 = state_33698;if(cljs.core.truth_(delay))
{var statearr_33704_33732 = state_33698__$1;(statearr_33704_33732[1] = 8);
} else
{var statearr_33705_33733 = state_33698__$1;(statearr_33705_33733[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 6))
{var state_33698__$1 = state_33698;var statearr_33706_33734 = state_33698__$1;(statearr_33706_33734[2] = null);
(statearr_33706_33734[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 7))
{var inst_33689 = (state_33698[2]);var state_33698__$1 = state_33698;if(cljs.core.truth_(inst_33689))
{var statearr_33707_33735 = state_33698__$1;(statearr_33707_33735[1] = 15);
} else
{var statearr_33708_33736 = state_33698__$1;(statearr_33708_33736[1] = 16);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 8))
{var inst_33675 = cljs.core.async.timeout(delay);var state_33698__$1 = state_33698;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33698__$1,11,inst_33675);
} else
{if((state_val_33699 === 9))
{var state_33698__$1 = state_33698;var statearr_33709_33737 = state_33698__$1;(statearr_33709_33737[2] = null);
(statearr_33709_33737[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 10))
{var inst_33680 = (state_33698[2]);var state_33698__$1 = (function (){var statearr_33710 = state_33698;(statearr_33710[8] = inst_33680);
return statearr_33710;
})();if(cljs.core.truth_(log))
{var statearr_33711_33738 = state_33698__$1;(statearr_33711_33738[1] = 12);
} else
{var statearr_33712_33739 = state_33698__$1;(statearr_33712_33739[1] = 13);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 11))
{var inst_33677 = (state_33698[2]);var state_33698__$1 = state_33698;var statearr_33713_33740 = state_33698__$1;(statearr_33713_33740[2] = inst_33677);
(statearr_33713_33740[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 12))
{var inst_33672 = (state_33698[7]);var inst_33682 = cljs.core.clj__GT_js(inst_33672);var inst_33683 = console.log(inst_33682);var state_33698__$1 = state_33698;var statearr_33714_33741 = state_33698__$1;(statearr_33714_33741[2] = inst_33683);
(statearr_33714_33741[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 13))
{var state_33698__$1 = state_33698;var statearr_33715_33742 = state_33698__$1;(statearr_33715_33742[2] = null);
(statearr_33715_33742[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 14))
{var inst_33672 = (state_33698[7]);var inst_33686 = (state_33698[2]);var state_33698__$1 = (function (){var statearr_33716 = state_33698;(statearr_33716[9] = inst_33686);
return statearr_33716;
})();var statearr_33717_33743 = state_33698__$1;(statearr_33717_33743[2] = inst_33672);
(statearr_33717_33743[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 15))
{var state_33698__$1 = state_33698;var statearr_33718_33744 = state_33698__$1;(statearr_33718_33744[2] = null);
(statearr_33718_33744[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 16))
{var state_33698__$1 = state_33698;var statearr_33719_33745 = state_33698__$1;(statearr_33719_33745[2] = null);
(statearr_33719_33745[1] = 17);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33699 === 17))
{var inst_33694 = (state_33698[2]);var state_33698__$1 = state_33698;var statearr_33720_33746 = state_33698__$1;(statearr_33720_33746[2] = inst_33694);
(statearr_33720_33746[1] = 3);
return cljs.core.constant$keyword$555;
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
var state_machine__5548__auto____0 = (function (){var statearr_33724 = [null,null,null,null,null,null,null,null,null,null];(statearr_33724[0] = state_machine__5548__auto__);
(statearr_33724[1] = 1);
return statearr_33724;
});
var state_machine__5548__auto____1 = (function (state_33698){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33698);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33725){if((e33725 instanceof Object))
{var ex__5551__auto__ = e33725;var statearr_33726_33747 = state_33698;(statearr_33726_33747[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33698);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33748 = state_33698;
state_33698 = G__33748;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33698){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33727 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___33728);
return statearr_33727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__33609 = null;if (arguments.length > 1) {
  p__33609 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__33609);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__33749){
var ch = cljs.core.first(arglist__33749);
var p__33609 = cljs.core.rest(arglist__33749);
return dorun_async__delegate(ch,p__33609);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
