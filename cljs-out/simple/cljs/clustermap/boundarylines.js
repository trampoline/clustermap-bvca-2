// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__25855){var vec__25856 = p__25855;var z = cljs.core.nth.call(null,vec__25856,(0),null);var t = cljs.core.nth.call(null,vec__25856,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__25861 = cljs.core.seq.call(null,boundarylines);var chunk__25862 = null;var count__25863 = (0);var i__25864 = (0);while(true){
if((i__25864 < count__25863))
{var bl = cljs.core._nth.call(null,chunk__25862,i__25864);var boundaryline_id_25865 = (bl["id"]);var tolerance_25866 = (bl["tolerance"]);var general_cache_path_25867 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25865,tolerance_25866], null));var collection_cache_path_25868 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25865,tolerance_25866], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_25867,((function (seq__25861,chunk__25862,count__25863,i__25864,boundaryline_id_25865,tolerance_25866,general_cache_path_25867,collection_cache_path_25868,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25861,chunk__25862,count__25863,i__25864,boundaryline_id_25865,tolerance_25866,general_cache_path_25867,collection_cache_path_25868,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_25868))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_25868,((function (seq__25861,chunk__25862,count__25863,i__25864,boundaryline_id_25865,tolerance_25866,general_cache_path_25867,collection_cache_path_25868,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25861,chunk__25862,count__25863,i__25864,boundaryline_id_25865,tolerance_25866,general_cache_path_25867,collection_cache_path_25868,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__25869 = seq__25861;
var G__25870 = chunk__25862;
var G__25871 = count__25863;
var G__25872 = (i__25864 + (1));
seq__25861 = G__25869;
chunk__25862 = G__25870;
count__25863 = G__25871;
i__25864 = G__25872;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25861);if(temp__4126__auto__)
{var seq__25861__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25861__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__25861__$1);{
var G__25873 = cljs.core.chunk_rest.call(null,seq__25861__$1);
var G__25874 = c__4314__auto__;
var G__25875 = cljs.core.count.call(null,c__4314__auto__);
var G__25876 = (0);
seq__25861 = G__25873;
chunk__25862 = G__25874;
count__25863 = G__25875;
i__25864 = G__25876;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__25861__$1);var boundaryline_id_25877 = (bl["id"]);var tolerance_25878 = (bl["tolerance"]);var general_cache_path_25879 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25877,tolerance_25878], null));var collection_cache_path_25880 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25877,tolerance_25878], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_25879,((function (seq__25861,chunk__25862,count__25863,i__25864,boundaryline_id_25877,tolerance_25878,general_cache_path_25879,collection_cache_path_25880,bl,seq__25861__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25861,chunk__25862,count__25863,i__25864,boundaryline_id_25877,tolerance_25878,general_cache_path_25879,collection_cache_path_25880,bl,seq__25861__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_25880))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_25880,((function (seq__25861,chunk__25862,count__25863,i__25864,boundaryline_id_25877,tolerance_25878,general_cache_path_25879,collection_cache_path_25880,bl,seq__25861__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25861,chunk__25862,count__25863,i__25864,boundaryline_id_25877,tolerance_25878,general_cache_path_25879,collection_cache_path_25880,bl,seq__25861__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__25881 = cljs.core.next.call(null,seq__25861__$1);
var G__25882 = null;
var G__25883 = (0);
var G__25884 = (0);
seq__25861 = G__25881;
chunk__25862 = G__25882;
count__25863 = G__25883;
i__25864 = G__25884;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25885){var map__25901 = p__25885;var map__25901__$1 = ((cljs.core.seq_QMARK_.call(null,map__25901))?cljs.core.apply.call(null,cljs.core.hash_map,map__25901):map__25901);var bounds = cljs.core.get.call(null,map__25901__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__25901__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__25901,map__25901__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__25901,map__25901__$1,bounds,boundaryline_ids){
return (function (state_25906){var state_val_25907 = (state_25906[(1)]);if((state_val_25907 === (2)))
{var inst_25903 = (state_25906[(2)]);var inst_25904 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_25903);var state_25906__$1 = (function (){var statearr_25908 = state_25906;(statearr_25908[(7)] = inst_25904);
return statearr_25908;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25906__$1,true);
} else
{if((state_val_25907 === (1)))
{var state_25906__$1 = state_25906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25906__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__25901,map__25901__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__25901,map__25901__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_25912 = [null,null,null,null,null,null,null,null];(statearr_25912[(0)] = state_machine__5694__auto__);
(statearr_25912[(1)] = (1));
return statearr_25912;
});
var state_machine__5694__auto____1 = (function (state_25906){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_25906);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e25913){if((e25913 instanceof Object))
{var ex__5697__auto__ = e25913;var statearr_25914_25916 = state_25906;(statearr_25914_25916[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25913;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25917 = state_25906;
state_25906 = G__25917;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_25906){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_25906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__25901,map__25901__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_25915 = f__5709__auto__.call(null);(statearr_25915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_25915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__25901,map__25901__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__25885 = null;if (arguments.length > 5) {
  p__25885 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25885);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__25918){
var app_state = cljs.core.first(arglist__25918);
arglist__25918 = cljs.core.next(arglist__25918);
var boundarylines_path = cljs.core.first(arglist__25918);
arglist__25918 = cljs.core.next(arglist__25918);
var collection_boundarylines_path = cljs.core.first(arglist__25918);
arglist__25918 = cljs.core.next(arglist__25918);
var collection_id = cljs.core.first(arglist__25918);
arglist__25918 = cljs.core.next(arglist__25918);
var tolerance = cljs.core.first(arglist__25918);
var p__25885 = cljs.core.rest(arglist__25918);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25885);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__25919){var map__25924 = p__25919;var map__25924__$1 = ((cljs.core.seq_QMARK_.call(null,map__25924))?cljs.core.apply.call(null,cljs.core.hash_map,map__25924):map__25924);var boundaryline_ids = cljs.core.get.call(null,map__25924__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__25924,map__25924__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__25924,map__25924__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__25924,map__25924__$1,boundaryline_ids){
return (function (p__25925){var vec__25926 = p__25925;var blid = cljs.core.nth.call(null,vec__25926,(0),null);var vec__25927 = cljs.core.nth.call(null,vec__25926,(1),null);var tol = cljs.core.nth.call(null,vec__25927,(0),null);var bl = cljs.core.nth.call(null,vec__25927,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__25924,map__25924__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__25919 = null;if (arguments.length > 5) {
  p__25919 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__25919);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__25928){
var app_state = cljs.core.first(arglist__25928);
arglist__25928 = cljs.core.next(arglist__25928);
var boundarylines_path = cljs.core.first(arglist__25928);
arglist__25928 = cljs.core.next(arglist__25928);
var collection_id = cljs.core.first(arglist__25928);
arglist__25928 = cljs.core.next(arglist__25928);
var bounds = cljs.core.first(arglist__25928);
arglist__25928 = cljs.core.next(arglist__25928);
var zoom = cljs.core.first(arglist__25928);
var p__25919 = cljs.core.rest(arglist__25928);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__25919);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__25933_25937 = cljs.core.seq.call(null,keys);var chunk__25934_25938 = null;var count__25935_25939 = (0);var i__25936_25940 = (0);while(true){
if((i__25936_25940 < count__25935_25939))
{var k_25941 = cljs.core._nth.call(null,chunk__25934_25938,i__25936_25940);var obj_25942 = (js_index[k_25941]);var geom_25943 = (obj_25942["geojson"]);var feature_25944 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25942["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25942["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25942["compact_name"])], null)], null));var __25945__$1 = (feature_25944["geometry"] = geom_25943);var __25946__$2 = ((feature_25944["properties"])["index_object"] = obj_25942);features.push(feature_25944);
{
var G__25947 = seq__25933_25937;
var G__25948 = chunk__25934_25938;
var G__25949 = count__25935_25939;
var G__25950 = (i__25936_25940 + (1));
seq__25933_25937 = G__25947;
chunk__25934_25938 = G__25948;
count__25935_25939 = G__25949;
i__25936_25940 = G__25950;
continue;
}
} else
{var temp__4126__auto___25951 = cljs.core.seq.call(null,seq__25933_25937);if(temp__4126__auto___25951)
{var seq__25933_25952__$1 = temp__4126__auto___25951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25933_25952__$1))
{var c__4314__auto___25953 = cljs.core.chunk_first.call(null,seq__25933_25952__$1);{
var G__25954 = cljs.core.chunk_rest.call(null,seq__25933_25952__$1);
var G__25955 = c__4314__auto___25953;
var G__25956 = cljs.core.count.call(null,c__4314__auto___25953);
var G__25957 = (0);
seq__25933_25937 = G__25954;
chunk__25934_25938 = G__25955;
count__25935_25939 = G__25956;
i__25936_25940 = G__25957;
continue;
}
} else
{var k_25958 = cljs.core.first.call(null,seq__25933_25952__$1);var obj_25959 = (js_index[k_25958]);var geom_25960 = (obj_25959["geojson"]);var feature_25961 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25959["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25959["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25959["compact_name"])], null)], null));var __25962__$1 = (feature_25961["geometry"] = geom_25960);var __25963__$2 = ((feature_25961["properties"])["index_object"] = obj_25959);features.push(feature_25961);
{
var G__25964 = cljs.core.next.call(null,seq__25933_25952__$1);
var G__25965 = null;
var G__25966 = (0);
var G__25967 = (0);
seq__25933_25937 = G__25964;
chunk__25934_25938 = G__25965;
count__25935_25939 = G__25966;
i__25936_25940 = G__25967;
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
return (function (state_26010){var state_val_26011 = (state_26010[(1)]);if((state_val_26011 === (5)))
{var inst_26008 = (state_26010[(2)]);var state_26010__$1 = state_26010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26010__$1,inst_26008);
} else
{if((state_val_26011 === (4)))
{var state_26010__$1 = state_26010;var statearr_26012_26024 = state_26010__$1;(statearr_26012_26024[(2)] = null);
(statearr_26012_26024[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26011 === (3)))
{var inst_25998 = (state_26010[(7)]);var inst_26005 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_25998);var state_26010__$1 = state_26010;var statearr_26013_26025 = state_26010__$1;(statearr_26013_26025[(2)] = inst_26005);
(statearr_26013_26025[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26011 === (2)))
{var inst_25998 = (state_26010[(7)]);var inst_25998__$1 = (state_26010[(2)]);var inst_25999 = (function (){var bl_coll_index = inst_25998__$1;return ((function (bl_coll_index,inst_25998,inst_25998__$1,state_val_26011,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_25998,inst_25998__$1,state_val_26011,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_26000 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_25999);var inst_26001 = cljs.core.deref.call(null,app_state);var inst_26002 = cljs.core.get_in.call(null,inst_26001,index_path);var inst_26003 = cljs.core._EQ_.call(null,inst_26002,inst_25998__$1);var state_26010__$1 = (function (){var statearr_26014 = state_26010;(statearr_26014[(8)] = inst_26000);
(statearr_26014[(7)] = inst_25998__$1);
return statearr_26014;
})();if(inst_26003)
{var statearr_26015_26026 = state_26010__$1;(statearr_26015_26026[(1)] = (3));
} else
{var statearr_26016_26027 = state_26010__$1;(statearr_26016_26027[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26011 === (1)))
{var inst_25996 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_26010__$1 = state_26010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26010__$1,(2),inst_25996);
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
var state_machine__5694__auto____0 = (function (){var statearr_26020 = [null,null,null,null,null,null,null,null,null];(statearr_26020[(0)] = state_machine__5694__auto__);
(statearr_26020[(1)] = (1));
return statearr_26020;
});
var state_machine__5694__auto____1 = (function (state_26010){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26010);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26021){if((e26021 instanceof Object))
{var ex__5697__auto__ = e26021;var statearr_26022_26028 = state_26010;(statearr_26022_26028[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26021;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26029 = state_26010;
state_26010 = G__26029;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26010){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_26023 = f__5709__auto__.call(null);(statearr_26023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_26023;
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
