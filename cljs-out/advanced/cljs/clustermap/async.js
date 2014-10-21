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
map_async.cljs$lang$applyTo = (function (arglist__42155){
var f = cljs.core.first(arglist__42155);
var colls = cljs.core.rest(arglist__42155);
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
var dorun_async__delegate = function (ch,p__42156){var map__42216 = p__42156;var map__42216__$1 = ((cljs.core.seq_QMARK_(map__42216))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42216):map__42216);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42216__$1,cljs.core.constant$keyword$1284);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42216__$1,cljs.core.constant$keyword$1193);var c__5708__auto___42275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42275,map__42216,map__42216__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42275,map__42216,map__42216__$1,delay,log){
return (function (state_42245){var state_val_42246 = (state_42245[(1)]);if((state_val_42246 === (7)))
{var inst_42236 = (state_42245[(2)]);var state_42245__$1 = state_42245;if(cljs.core.truth_(inst_42236))
{var statearr_42247_42276 = state_42245__$1;(statearr_42247_42276[(1)] = (15));
} else
{var statearr_42248_42277 = state_42245__$1;(statearr_42248_42277[(1)] = (16));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (1)))
{var state_42245__$1 = state_42245;var statearr_42249_42278 = state_42245__$1;(statearr_42249_42278[(2)] = null);
(statearr_42249_42278[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (4)))
{var inst_42219 = (state_42245[(7)]);var inst_42219__$1 = (state_42245[(2)]);var state_42245__$1 = (function (){var statearr_42250 = state_42245;(statearr_42250[(7)] = inst_42219__$1);
return statearr_42250;
})();if(cljs.core.truth_(inst_42219__$1))
{var statearr_42251_42279 = state_42245__$1;(statearr_42251_42279[(1)] = (5));
} else
{var statearr_42252_42280 = state_42245__$1;(statearr_42252_42280[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (15)))
{var state_42245__$1 = state_42245;var statearr_42253_42281 = state_42245__$1;(statearr_42253_42281[(2)] = null);
(statearr_42253_42281[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (13)))
{var state_42245__$1 = state_42245;var statearr_42254_42282 = state_42245__$1;(statearr_42254_42282[(2)] = null);
(statearr_42254_42282[(1)] = (14));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (6)))
{var state_42245__$1 = state_42245;var statearr_42255_42283 = state_42245__$1;(statearr_42255_42283[(2)] = null);
(statearr_42255_42283[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (17)))
{var inst_42241 = (state_42245[(2)]);var state_42245__$1 = state_42245;var statearr_42256_42284 = state_42245__$1;(statearr_42256_42284[(2)] = inst_42241);
(statearr_42256_42284[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (3)))
{var inst_42243 = (state_42245[(2)]);var state_42245__$1 = state_42245;return cljs.core.async.impl.ioc_helpers.return_chan(state_42245__$1,inst_42243);
} else
{if((state_val_42246 === (12)))
{var inst_42219 = (state_42245[(7)]);var inst_42229 = cljs.core.clj__GT_js(inst_42219);var inst_42230 = console.log(inst_42229);var state_42245__$1 = state_42245;var statearr_42257_42285 = state_42245__$1;(statearr_42257_42285[(2)] = inst_42230);
(statearr_42257_42285[(1)] = (14));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (2)))
{var state_42245__$1 = state_42245;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42245__$1,(4),ch);
} else
{if((state_val_42246 === (11)))
{var inst_42224 = (state_42245[(2)]);var state_42245__$1 = state_42245;var statearr_42258_42286 = state_42245__$1;(statearr_42258_42286[(2)] = inst_42224);
(statearr_42258_42286[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (9)))
{var state_42245__$1 = state_42245;var statearr_42259_42287 = state_42245__$1;(statearr_42259_42287[(2)] = null);
(statearr_42259_42287[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (5)))
{var state_42245__$1 = state_42245;if(cljs.core.truth_(delay))
{var statearr_42260_42288 = state_42245__$1;(statearr_42260_42288[(1)] = (8));
} else
{var statearr_42261_42289 = state_42245__$1;(statearr_42261_42289[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (14)))
{var inst_42219 = (state_42245[(7)]);var inst_42233 = (state_42245[(2)]);var state_42245__$1 = (function (){var statearr_42262 = state_42245;(statearr_42262[(8)] = inst_42233);
return statearr_42262;
})();var statearr_42263_42290 = state_42245__$1;(statearr_42263_42290[(2)] = inst_42219);
(statearr_42263_42290[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (16)))
{var state_42245__$1 = state_42245;var statearr_42264_42291 = state_42245__$1;(statearr_42264_42291[(2)] = null);
(statearr_42264_42291[(1)] = (17));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (10)))
{var inst_42227 = (state_42245[(2)]);var state_42245__$1 = (function (){var statearr_42265 = state_42245;(statearr_42265[(9)] = inst_42227);
return statearr_42265;
})();if(cljs.core.truth_(log))
{var statearr_42266_42292 = state_42245__$1;(statearr_42266_42292[(1)] = (12));
} else
{var statearr_42267_42293 = state_42245__$1;(statearr_42267_42293[(1)] = (13));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42246 === (8)))
{var inst_42222 = cljs.core.async.timeout(delay);var state_42245__$1 = state_42245;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42245__$1,(11),inst_42222);
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
});})(c__5708__auto___42275,map__42216,map__42216__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___42275,map__42216,map__42216__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42271 = [null,null,null,null,null,null,null,null,null,null];(statearr_42271[(0)] = state_machine__5694__auto__);
(statearr_42271[(1)] = (1));
return statearr_42271;
});
var state_machine__5694__auto____1 = (function (state_42245){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42245);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42272){if((e42272 instanceof Object))
{var ex__5697__auto__ = e42272;var statearr_42273_42294 = state_42245;(statearr_42273_42294[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42245);
return cljs.core.constant$keyword$1100;
} else
{throw e42272;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__42295 = state_42245;
state_42245 = G__42295;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42245){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42275,map__42216,map__42216__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_42274 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42275);
return statearr_42274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42275,map__42216,map__42216__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__42156 = null;if (arguments.length > 1) {
  p__42156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__42156);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__42296){
var ch = cljs.core.first(arglist__42296);
var p__42156 = cljs.core.rest(arglist__42296);
return dorun_async__delegate(ch,p__42156);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
