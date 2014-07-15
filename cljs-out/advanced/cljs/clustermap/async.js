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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__34925){
var f = cljs.core.first(arglist__34925);
var colls = cljs.core.rest(arglist__34925);
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
var dorun_async__delegate = function (ch,p__34926){var map__34986 = p__34926;var map__34986__$1 = ((cljs.core.seq_QMARK_(map__34986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34986):map__34986);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,cljs.core.constant$keyword$1078);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,cljs.core.constant$keyword$1005);var c__5693__auto___35045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___35045,map__34986,map__34986__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___35045,map__34986,map__34986__$1,delay,log){
return (function (state_35015){var state_val_35016 = (state_35015[(1)]);if((state_val_35016 === (7)))
{var inst_35006 = (state_35015[(2)]);var state_35015__$1 = state_35015;if(cljs.core.truth_(inst_35006))
{var statearr_35017_35046 = state_35015__$1;(statearr_35017_35046[(1)] = (15));
} else
{var statearr_35018_35047 = state_35015__$1;(statearr_35018_35047[(1)] = (16));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (1)))
{var state_35015__$1 = state_35015;var statearr_35019_35048 = state_35015__$1;(statearr_35019_35048[(2)] = null);
(statearr_35019_35048[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (4)))
{var inst_34989 = (state_35015[(7)]);var inst_34989__$1 = (state_35015[(2)]);var state_35015__$1 = (function (){var statearr_35020 = state_35015;(statearr_35020[(7)] = inst_34989__$1);
return statearr_35020;
})();if(cljs.core.truth_(inst_34989__$1))
{var statearr_35021_35049 = state_35015__$1;(statearr_35021_35049[(1)] = (5));
} else
{var statearr_35022_35050 = state_35015__$1;(statearr_35022_35050[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (15)))
{var state_35015__$1 = state_35015;var statearr_35023_35051 = state_35015__$1;(statearr_35023_35051[(2)] = null);
(statearr_35023_35051[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (13)))
{var state_35015__$1 = state_35015;var statearr_35024_35052 = state_35015__$1;(statearr_35024_35052[(2)] = null);
(statearr_35024_35052[(1)] = (14));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (6)))
{var state_35015__$1 = state_35015;var statearr_35025_35053 = state_35015__$1;(statearr_35025_35053[(2)] = null);
(statearr_35025_35053[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (17)))
{var inst_35011 = (state_35015[(2)]);var state_35015__$1 = state_35015;var statearr_35026_35054 = state_35015__$1;(statearr_35026_35054[(2)] = inst_35011);
(statearr_35026_35054[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (3)))
{var inst_35013 = (state_35015[(2)]);var state_35015__$1 = state_35015;return cljs.core.async.impl.ioc_helpers.return_chan(state_35015__$1,inst_35013);
} else
{if((state_val_35016 === (12)))
{var inst_34989 = (state_35015[(7)]);var inst_34999 = cljs.core.clj__GT_js(inst_34989);var inst_35000 = console.log(inst_34999);var state_35015__$1 = state_35015;var statearr_35027_35055 = state_35015__$1;(statearr_35027_35055[(2)] = inst_35000);
(statearr_35027_35055[(1)] = (14));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (2)))
{var state_35015__$1 = state_35015;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35015__$1,(4),ch);
} else
{if((state_val_35016 === (11)))
{var inst_34994 = (state_35015[(2)]);var state_35015__$1 = state_35015;var statearr_35028_35056 = state_35015__$1;(statearr_35028_35056[(2)] = inst_34994);
(statearr_35028_35056[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (9)))
{var state_35015__$1 = state_35015;var statearr_35029_35057 = state_35015__$1;(statearr_35029_35057[(2)] = null);
(statearr_35029_35057[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (5)))
{var state_35015__$1 = state_35015;if(cljs.core.truth_(delay))
{var statearr_35030_35058 = state_35015__$1;(statearr_35030_35058[(1)] = (8));
} else
{var statearr_35031_35059 = state_35015__$1;(statearr_35031_35059[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (14)))
{var inst_34989 = (state_35015[(7)]);var inst_35003 = (state_35015[(2)]);var state_35015__$1 = (function (){var statearr_35032 = state_35015;(statearr_35032[(8)] = inst_35003);
return statearr_35032;
})();var statearr_35033_35060 = state_35015__$1;(statearr_35033_35060[(2)] = inst_34989);
(statearr_35033_35060[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (16)))
{var state_35015__$1 = state_35015;var statearr_35034_35061 = state_35015__$1;(statearr_35034_35061[(2)] = null);
(statearr_35034_35061[(1)] = (17));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (10)))
{var inst_34997 = (state_35015[(2)]);var state_35015__$1 = (function (){var statearr_35035 = state_35015;(statearr_35035[(9)] = inst_34997);
return statearr_35035;
})();if(cljs.core.truth_(log))
{var statearr_35036_35062 = state_35015__$1;(statearr_35036_35062[(1)] = (12));
} else
{var statearr_35037_35063 = state_35015__$1;(statearr_35037_35063[(1)] = (13));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_35016 === (8)))
{var inst_34992 = cljs.core.async.timeout(delay);var state_35015__$1 = state_35015;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35015__$1,(11),inst_34992);
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
});})(c__5693__auto___35045,map__34986,map__34986__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___35045,map__34986,map__34986__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_35041 = [null,null,null,null,null,null,null,null,null,null];(statearr_35041[(0)] = state_machine__5679__auto__);
(statearr_35041[(1)] = (1));
return statearr_35041;
});
var state_machine__5679__auto____1 = (function (state_35015){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35015);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35042){if((e35042 instanceof Object))
{var ex__5682__auto__ = e35042;var statearr_35043_35064 = state_35015;(statearr_35043_35064[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35015);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e35042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__35065 = state_35015;
state_35015 = G__35065;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35015){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___35045,map__34986,map__34986__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_35044 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___35045);
return statearr_35044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___35045,map__34986,map__34986__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__34926 = null;if (arguments.length > 1) {
  p__34926 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__34926);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__35066){
var ch = cljs.core.first(arglist__35066);
var p__34926 = cljs.core.rest(arglist__35066);
return dorun_async__delegate(ch,p__34926);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
