// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__30888){var vec__30889 = p__30888;var z = cljs.core.nth.call(null,vec__30889,(0),null);var t = cljs.core.nth.call(null,vec__30889,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
{return (zoom <= z);
} else
{return and__3546__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3558__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__30894 = cljs.core.seq.call(null,boundarylines);var chunk__30895 = null;var count__30896 = (0);var i__30897 = (0);while(true){
if((i__30897 < count__30896))
{var bl = cljs.core._nth.call(null,chunk__30895,i__30897);var boundaryline_id_30898 = (bl["id"]);var tolerance_30899 = (bl["tolerance"]);var general_cache_path_30900 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_30898,tolerance_30899], null));var collection_cache_path_30901 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_30898,tolerance_30899], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_30900,((function (seq__30894,chunk__30895,count__30896,i__30897,boundaryline_id_30898,tolerance_30899,general_cache_path_30900,collection_cache_path_30901,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__30894,chunk__30895,count__30896,i__30897,boundaryline_id_30898,tolerance_30899,general_cache_path_30900,collection_cache_path_30901,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_30901))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_30901,((function (seq__30894,chunk__30895,count__30896,i__30897,boundaryline_id_30898,tolerance_30899,general_cache_path_30900,collection_cache_path_30901,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__30894,chunk__30895,count__30896,i__30897,boundaryline_id_30898,tolerance_30899,general_cache_path_30900,collection_cache_path_30901,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__30902 = seq__30894;
var G__30903 = chunk__30895;
var G__30904 = count__30896;
var G__30905 = (i__30897 + (1));
seq__30894 = G__30902;
chunk__30895 = G__30903;
count__30896 = G__30904;
i__30897 = G__30905;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30894);if(temp__4126__auto__)
{var seq__30894__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30894__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__30894__$1);{
var G__30906 = cljs.core.chunk_rest.call(null,seq__30894__$1);
var G__30907 = c__4314__auto__;
var G__30908 = cljs.core.count.call(null,c__4314__auto__);
var G__30909 = (0);
seq__30894 = G__30906;
chunk__30895 = G__30907;
count__30896 = G__30908;
i__30897 = G__30909;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__30894__$1);var boundaryline_id_30910 = (bl["id"]);var tolerance_30911 = (bl["tolerance"]);var general_cache_path_30912 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_30910,tolerance_30911], null));var collection_cache_path_30913 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_30910,tolerance_30911], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_30912,((function (seq__30894,chunk__30895,count__30896,i__30897,boundaryline_id_30910,tolerance_30911,general_cache_path_30912,collection_cache_path_30913,bl,seq__30894__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__30894,chunk__30895,count__30896,i__30897,boundaryline_id_30910,tolerance_30911,general_cache_path_30912,collection_cache_path_30913,bl,seq__30894__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_30913))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_30913,((function (seq__30894,chunk__30895,count__30896,i__30897,boundaryline_id_30910,tolerance_30911,general_cache_path_30912,collection_cache_path_30913,bl,seq__30894__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__30894,chunk__30895,count__30896,i__30897,boundaryline_id_30910,tolerance_30911,general_cache_path_30912,collection_cache_path_30913,bl,seq__30894__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__30914 = cljs.core.next.call(null,seq__30894__$1);
var G__30915 = null;
var G__30916 = (0);
var G__30917 = (0);
seq__30894 = G__30914;
chunk__30895 = G__30915;
count__30896 = G__30916;
i__30897 = G__30917;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__30918){var map__30934 = p__30918;var map__30934__$1 = ((cljs.core.seq_QMARK_.call(null,map__30934))?cljs.core.apply.call(null,cljs.core.hash_map,map__30934):map__30934);var bounds = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__30934,map__30934__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__30934,map__30934__$1,bounds,boundaryline_ids){
return (function (state_30939){var state_val_30940 = (state_30939[(1)]);if((state_val_30940 === (2)))
{var inst_30936 = (state_30939[(2)]);var inst_30937 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_30936);var state_30939__$1 = (function (){var statearr_30941 = state_30939;(statearr_30941[(7)] = inst_30937);
return statearr_30941;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30939__$1,true);
} else
{if((state_val_30940 === (1)))
{var state_30939__$1 = state_30939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30939__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__30934,map__30934__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__30934,map__30934__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30945 = [null,null,null,null,null,null,null,null];(statearr_30945[(0)] = state_machine__5694__auto__);
(statearr_30945[(1)] = (1));
return statearr_30945;
});
var state_machine__5694__auto____1 = (function (state_30939){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30939);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30946){if((e30946 instanceof Object))
{var ex__5697__auto__ = e30946;var statearr_30947_30949 = state_30939;(statearr_30947_30949[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30939);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30946;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30950 = state_30939;
state_30939 = G__30950;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30939){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__30934,map__30934__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_30948 = f__5709__auto__.call(null);(statearr_30948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_30948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__30934,map__30934__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__30918 = null;if (arguments.length > 5) {
  p__30918 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__30918);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__30951){
var app_state = cljs.core.first(arglist__30951);
arglist__30951 = cljs.core.next(arglist__30951);
var boundarylines_path = cljs.core.first(arglist__30951);
arglist__30951 = cljs.core.next(arglist__30951);
var collection_boundarylines_path = cljs.core.first(arglist__30951);
arglist__30951 = cljs.core.next(arglist__30951);
var collection_id = cljs.core.first(arglist__30951);
arglist__30951 = cljs.core.next(arglist__30951);
var tolerance = cljs.core.first(arglist__30951);
var p__30918 = cljs.core.rest(arglist__30951);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__30918);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3546__auto__ = default_bl;if(cljs.core.truth_(and__3546__auto__))
{return default_tol;
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3558__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get.call(null,bl_versions,use_tol);if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
}
});
/**
* gets the best boundaryline versions for a zoom level... where the best are not
* immediately available, fetches it asynchronously and returns the best immediately
* available
* - app-state : atom containing app-state
* - boundarylines-path : path in app-state of boundarylines state
* - collection-id : id of boundaryline collection to retrieve from
* - zoom : zoom level to retrieve for
* - boundaryline-ids : ids of boundarylines required
* - bounds :
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundarylines = (function() { 
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__30952){var map__30957 = p__30952;var map__30957__$1 = ((cljs.core.seq_QMARK_.call(null,map__30957))?cljs.core.apply.call(null,cljs.core.hash_map,map__30957):map__30957);var boundaryline_ids = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__30957,map__30957__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__30957,map__30957__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__30957,map__30957__$1,boundaryline_ids){
return (function (p__30958){var vec__30959 = p__30958;var blid = cljs.core.nth.call(null,vec__30959,(0),null);var vec__30960 = cljs.core.nth.call(null,vec__30959,(1),null);var tol = cljs.core.nth.call(null,vec__30960,(0),null);var bl = cljs.core.nth.call(null,vec__30960,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__30957,map__30957__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__30952 = null;if (arguments.length > 5) {
  p__30952 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__30952);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__30961){
var app_state = cljs.core.first(arglist__30961);
arglist__30961 = cljs.core.next(arglist__30961);
var boundarylines_path = cljs.core.first(arglist__30961);
arglist__30961 = cljs.core.next(arglist__30961);
var collection_id = cljs.core.first(arglist__30961);
arglist__30961 = cljs.core.next(arglist__30961);
var bounds = cljs.core.first(arglist__30961);
arglist__30961 = cljs.core.next(arglist__30961);
var zoom = cljs.core.first(arglist__30961);
var p__30952 = cljs.core.rest(arglist__30961);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__30952);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__30966_30970 = cljs.core.seq.call(null,keys);var chunk__30967_30971 = null;var count__30968_30972 = (0);var i__30969_30973 = (0);while(true){
if((i__30969_30973 < count__30968_30972))
{var k_30974 = cljs.core._nth.call(null,chunk__30967_30971,i__30969_30973);var obj_30975 = (js_index[k_30974]);var geom_30976 = (obj_30975["geojson"]);var feature_30977 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_30975["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_30975["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_30975["compact_name"])], null)], null));var __30978__$1 = (feature_30977["geometry"] = geom_30976);var __30979__$2 = ((feature_30977["properties"])["index_object"] = obj_30975);features.push(feature_30977);
{
var G__30980 = seq__30966_30970;
var G__30981 = chunk__30967_30971;
var G__30982 = count__30968_30972;
var G__30983 = (i__30969_30973 + (1));
seq__30966_30970 = G__30980;
chunk__30967_30971 = G__30981;
count__30968_30972 = G__30982;
i__30969_30973 = G__30983;
continue;
}
} else
{var temp__4126__auto___30984 = cljs.core.seq.call(null,seq__30966_30970);if(temp__4126__auto___30984)
{var seq__30966_30985__$1 = temp__4126__auto___30984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30966_30985__$1))
{var c__4314__auto___30986 = cljs.core.chunk_first.call(null,seq__30966_30985__$1);{
var G__30987 = cljs.core.chunk_rest.call(null,seq__30966_30985__$1);
var G__30988 = c__4314__auto___30986;
var G__30989 = cljs.core.count.call(null,c__4314__auto___30986);
var G__30990 = (0);
seq__30966_30970 = G__30987;
chunk__30967_30971 = G__30988;
count__30968_30972 = G__30989;
i__30969_30973 = G__30990;
continue;
}
} else
{var k_30991 = cljs.core.first.call(null,seq__30966_30985__$1);var obj_30992 = (js_index[k_30991]);var geom_30993 = (obj_30992["geojson"]);var feature_30994 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_30992["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_30992["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_30992["compact_name"])], null)], null));var __30995__$1 = (feature_30994["geometry"] = geom_30993);var __30996__$2 = ((feature_30994["properties"])["index_object"] = obj_30992);features.push(feature_30994);
{
var G__30997 = cljs.core.next.call(null,seq__30966_30985__$1);
var G__30998 = null;
var G__30999 = (0);
var G__31000 = (0);
seq__30966_30970 = G__30997;
chunk__30967_30971 = G__30998;
count__30968_30972 = G__30999;
i__30969_30973 = G__31000;
continue;
}
}
} else
{}
}
break;
}
rtree.geoJSON(js_feature_coll);
return rtree;
});
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree.call(null,app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_31043){var state_val_31044 = (state_31043[(1)]);if((state_val_31044 === (5)))
{var inst_31041 = (state_31043[(2)]);var state_31043__$1 = state_31043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31043__$1,inst_31041);
} else
{if((state_val_31044 === (4)))
{var state_31043__$1 = state_31043;var statearr_31045_31057 = state_31043__$1;(statearr_31045_31057[(2)] = null);
(statearr_31045_31057[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31044 === (3)))
{var inst_31031 = (state_31043[(7)]);var inst_31038 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_31031);var state_31043__$1 = state_31043;var statearr_31046_31058 = state_31043__$1;(statearr_31046_31058[(2)] = inst_31038);
(statearr_31046_31058[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31044 === (2)))
{var inst_31031 = (state_31043[(7)]);var inst_31031__$1 = (state_31043[(2)]);var inst_31032 = (function (){var bl_coll_index = inst_31031__$1;return ((function (bl_coll_index,inst_31031,inst_31031__$1,state_val_31044,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_31031,inst_31031__$1,state_val_31044,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_31033 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_31032);var inst_31034 = cljs.core.deref.call(null,app_state);var inst_31035 = cljs.core.get_in.call(null,inst_31034,index_path);var inst_31036 = cljs.core._EQ_.call(null,inst_31035,inst_31031__$1);var state_31043__$1 = (function (){var statearr_31047 = state_31043;(statearr_31047[(8)] = inst_31033);
(statearr_31047[(7)] = inst_31031__$1);
return statearr_31047;
})();if(inst_31036)
{var statearr_31048_31059 = state_31043__$1;(statearr_31048_31059[(1)] = (3));
} else
{var statearr_31049_31060 = state_31043__$1;(statearr_31049_31060[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31044 === (1)))
{var inst_31029 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_31043__$1 = state_31043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31043__$1,(2),inst_31029);
} else
{return null;
}
}
}
}
}
});})(c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31053 = [null,null,null,null,null,null,null,null,null];(statearr_31053[(0)] = state_machine__5694__auto__);
(statearr_31053[(1)] = (1));
return statearr_31053;
});
var state_machine__5694__auto____1 = (function (state_31043){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31043);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31054){if((e31054 instanceof Object))
{var ex__5697__auto__ = e31054;var statearr_31055_31061 = state_31043;(statearr_31055_31061[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31043);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31054;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31062 = state_31043;
state_31043 = G__31062;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31043){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_31056 = f__5709__auto__.call(null);(statearr_31056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_31056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5708__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));var rtree = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null))):null);return cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hit.properties.id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
