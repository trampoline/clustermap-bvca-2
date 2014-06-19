// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7,0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,0], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3539__auto__ = cljs.core.some((function (p__34483){var vec__34484 = p__34483;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = z;if(cljs.core.truth_(and__3527__auto__))
{return (zoom <= z);
} else
{return and__3527__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3539__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3539__auto____$1))
{return or__3539__auto____$1;
} else
{return cljs.core.some(avail_set,coarser);
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.cljs$core$IFn$_invoke$arity$variadic(boundaryline_id,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$603,true], 0));var use_korks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__,comm,use_korks,path){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,comm,use_korks,path){
return (function (state_34504){var state_val_34505 = (state_34504[1]);if((state_val_34505 === 2))
{var inst_34500 = (state_34504[2]);var inst_34501 = (function (){var bl = inst_34500;return ((function (bl,inst_34500,state_val_34505,c__5689__auto__,comm,use_korks,path){
return (function (old){return bl;
});
;})(bl,inst_34500,state_val_34505,c__5689__auto__,comm,use_korks,path))
})();var inst_34502 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,path,inst_34501);var state_34504__$1 = state_34504;return cljs.core.async.impl.ioc_helpers.return_chan(state_34504__$1,inst_34502);
} else
{if((state_val_34505 === 1))
{var state_34504__$1 = state_34504;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34504__$1,2,comm);
} else
{return null;
}
}
});})(c__5689__auto__,comm,use_korks,path))
;return ((function (switch__5674__auto__,c__5689__auto__,comm,use_korks,path){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34509 = [null,null,null,null,null,null,null];(statearr_34509[0] = state_machine__5675__auto__);
(statearr_34509[1] = 1);
return statearr_34509;
});
var state_machine__5675__auto____1 = (function (state_34504){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34504);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34510){if((e34510 instanceof Object))
{var ex__5678__auto__ = e34510;var statearr_34511_34513 = state_34504;(statearr_34511_34513[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34504);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e34510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__34514 = state_34504;
state_34504 = G__34514;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,comm,use_korks,path))
})();var state__5691__auto__ = (function (){var statearr_34512 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__,comm,use_korks,path))
);
return c__5689__auto__;
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,boundaryline_id,zoom,p__34515){var map__34517 = p__34515;var map__34517__$1 = ((cljs.core.seq_QMARK_(map__34517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34517):map__34517);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34517__$1,cljs.core.constant$keyword$611);if(cljs.core.truth_((function (){var and__3527__auto__ = min_zoom;if(cljs.core.truth_(and__3527__auto__))
{return (zoom <= min_zoom);
} else
{return and__3527__auto__;
}
})()))
{return null;
} else
{var use_korks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var boundarylines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),use_korks);var bl_versions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(boundarylines,boundaryline_id);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var use_tol = clustermap.boundarylines.best_available_tolerance(zoom,cljs.core.keys(bl_versions));var use_bl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(boundarylines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,use_tol], null));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline(app_state,korks,boundaryline_id,i_tol);
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
var p__34515 = null;if (arguments.length > 4) {
  p__34515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,boundaryline_id,zoom,p__34515);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 4;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__34518){
var app_state = cljs.core.first(arglist__34518);
arglist__34518 = cljs.core.next(arglist__34518);
var korks = cljs.core.first(arglist__34518);
arglist__34518 = cljs.core.next(arglist__34518);
var boundaryline_id = cljs.core.first(arglist__34518);
arglist__34518 = cljs.core.next(arglist__34518);
var zoom = cljs.core.first(arglist__34518);
var p__34515 = cljs.core.rest(arglist__34518);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,boundaryline_id,zoom,p__34515);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
