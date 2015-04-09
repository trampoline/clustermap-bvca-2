// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3631__auto__ = cljs.core.some.call(null,(function (p__12976){var vec__12977 = p__12976;var z = cljs.core.nth.call(null,vec__12977,(0),null);var t = cljs.core.nth.call(null,vec__12977,(1),null);if(cljs.core.truth_((function (){var and__3619__auto__ = z;if(cljs.core.truth_(and__3619__auto__))
{return (zoom <= z);
} else
{return and__3619__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return (0);
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3631__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3631__auto____$1))
{return or__3631__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.call(null,boundaryline_id,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.call(null,use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__,comm,use_korks,path){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__,comm,use_korks,path){
return (function (state_12997){var state_val_12998 = (state_12997[(1)]);if((state_val_12998 === (2)))
{var inst_12993 = (state_12997[(2)]);var inst_12994 = (function (){var bl = inst_12993;return ((function (bl,inst_12993,state_val_12998,c__5813__auto__,comm,use_korks,path){
return (function (old){return bl;
});
;})(bl,inst_12993,state_val_12998,c__5813__auto__,comm,use_korks,path))
})();var inst_12995 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,path,inst_12994);var state_12997__$1 = state_12997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12997__$1,inst_12995);
} else
{if((state_val_12998 === (1)))
{var state_12997__$1 = state_12997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12997__$1,(2),comm);
} else
{return null;
}
}
});})(c__5813__auto__,comm,use_korks,path))
;return ((function (switch__5798__auto__,c__5813__auto__,comm,use_korks,path){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_13002 = [null,null,null,null,null,null,null];(statearr_13002[(0)] = state_machine__5799__auto__);
(statearr_13002[(1)] = (1));
return statearr_13002;
});
var state_machine__5799__auto____1 = (function (state_12997){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_12997);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e13003){if((e13003 instanceof Object))
{var ex__5802__auto__ = e13003;var statearr_13004_13006 = state_12997;(statearr_13004_13006[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12997);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13003;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13007 = state_12997;
state_12997 = G__13007;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_12997){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_12997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__,comm,use_korks,path))
})();var state__5815__auto__ = (function (){var statearr_13005 = f__5814__auto__.call(null);(statearr_13005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_13005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__,comm,use_korks,path))
);
return c__5813__auto__;
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,boundaryline_id,zoom,p__13008){var map__13010 = p__13008;var map__13010__$1 = ((cljs.core.seq_QMARK_.call(null,map__13010))?cljs.core.apply.call(null,cljs.core.hash_map,map__13010):map__13010);var min_zoom = cljs.core.get.call(null,map__13010__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));if(cljs.core.truth_((function (){var and__3619__auto__ = min_zoom;if(cljs.core.truth_(and__3619__auto__))
{return (zoom <= min_zoom);
} else
{return and__3619__auto__;
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
var p__13008 = null;if (arguments.length > 4) {
  p__13008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,boundaryline_id,zoom,p__13008);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 4;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__13011){
var app_state = cljs.core.first(arglist__13011);
arglist__13011 = cljs.core.next(arglist__13011);
var korks = cljs.core.first(arglist__13011);
arglist__13011 = cljs.core.next(arglist__13011);
var boundaryline_id = cljs.core.first(arglist__13011);
arglist__13011 = cljs.core.next(arglist__13011);
var zoom = cljs.core.first(arglist__13011);
var p__13008 = cljs.core.rest(arglist__13011);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,boundaryline_id,zoom,p__13008);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
