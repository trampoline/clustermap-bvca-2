// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.boundarylines = cljs.core.atom.call(null,null);
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7,0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,0], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3406__auto__ = cljs.core.some.call(null,(function (p__11470){var vec__11471 = p__11470;var z = cljs.core.nth.call(null,vec__11471,0,null);var t = cljs.core.nth.call(null,vec__11471,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = z;if(cljs.core.truth_(and__3394__auto__))
{return (zoom <= z);
} else
{return and__3394__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3406__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.call(null,boundaryline_id,tolerance,new cljs.core.Keyword(null,"raw","raw",1014016922),true);var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.call(null,use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11500){var state_val_11501 = (state_11500[1]);if((state_val_11501 === 2))
{var inst_11492 = (state_11500[2]);var inst_11493 = ["rx",app_state,boundaryline_id,tolerance,inst_11492];var inst_11494 = (new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11493,null));var inst_11495 = cljs.core.clj__GT_js.call(null,inst_11494);var inst_11496 = console.log(inst_11495);var inst_11497 = (function (){var bl = inst_11492;return ((function (bl,inst_11492,inst_11493,inst_11494,inst_11495,inst_11496,state_val_11501){
return (function (old){return bl;
});
;})(bl,inst_11492,inst_11493,inst_11494,inst_11495,inst_11496,state_val_11501))
})();var inst_11498 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,path,inst_11497);var state_11500__$1 = (function (){var statearr_11502 = state_11500;(statearr_11502[7] = inst_11496);
return statearr_11502;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11500__$1,inst_11498);
} else
{if((state_val_11501 === 1))
{var state_11500__$1 = state_11500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11500__$1,2,comm);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11506 = [null,null,null,null,null,null,null,null];(statearr_11506[0] = state_machine__5507__auto__);
(statearr_11506[1] = 1);
return statearr_11506;
});
var state_machine__5507__auto____1 = (function (state_11500){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11507){if((e11507 instanceof Object))
{var ex__5510__auto__ = e11507;var statearr_11508_11510 = state_11500;(statearr_11508_11510[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11511 = state_11500;
state_11500 = G__11511;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11500){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11509 = f__5522__auto__.call(null);(statearr_11509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* gets the best boundaryline version for a zoom level...
* if the best isn't available, fetches it async and immediately
* returns the next best available
* - default : default value to return if nothing currently available
* - min-zoom : if (<= zoom min-zoom) do nothing and return the default
* returns [tolerance, boundaryline] or default if nothing is available or
* (<= zoom min-zoom)
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundaryline = (function() { 
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,boundaryline_id,zoom,p__11512){var map__11514 = p__11512;var map__11514__$1 = ((cljs.core.seq_QMARK_.call(null,map__11514))?cljs.core.apply.call(null,cljs.core.hash_map,map__11514):map__11514);var min_zoom = cljs.core.get.call(null,map__11514__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",3894785504));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-or-fetch",app_state,korks,boundaryline_id,zoom], null)));
if(cljs.core.truth_((function (){var and__3394__auto__ = min_zoom;if(cljs.core.truth_(and__3394__auto__))
{return (zoom <= min_zoom);
} else
{return and__3394__auto__;
}
})()))
{return null;
} else
{var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var boundarylines = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),use_korks);var bl_versions = cljs.core.get.call(null,boundarylines,boundaryline_id);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get_in.call(null,boundarylines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,use_tol], null));if(cljs.core.not_EQ_.call(null,i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline.call(null,app_state,korks,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return null;
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,korks,boundaryline_id,zoom,var_args){
var p__11512 = null;if (arguments.length > 4) {
  p__11512 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,boundaryline_id,zoom,p__11512);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 4;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__11515){
var app_state = cljs.core.first(arglist__11515);
arglist__11515 = cljs.core.next(arglist__11515);
var korks = cljs.core.first(arglist__11515);
arglist__11515 = cljs.core.next(arglist__11515);
var boundaryline_id = cljs.core.first(arglist__11515);
arglist__11515 = cljs.core.next(arglist__11515);
var zoom = cljs.core.first(arglist__11515);
var p__11512 = cljs.core.rest(arglist__11515);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,boundaryline_id,zoom,p__11512);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;

//# sourceMappingURL=boundarylines.js.map