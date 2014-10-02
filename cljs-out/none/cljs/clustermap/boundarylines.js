// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__51851){var vec__51852 = p__51851;var z = cljs.core.nth.call(null,vec__51852,(0),null);var t = cljs.core.nth.call(null,vec__51852,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__51857 = cljs.core.seq.call(null,boundarylines);var chunk__51858 = null;var count__51859 = (0);var i__51860 = (0);while(true){
if((i__51860 < count__51859))
{var bl = cljs.core._nth.call(null,chunk__51858,i__51860);var boundaryline_id_51861 = (bl["id"]);var tolerance_51862 = (bl["tolerance"]);var general_cache_path_51863 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_51861,tolerance_51862], null));var collection_cache_path_51864 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_51861,tolerance_51862], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_51863,((function (seq__51857,chunk__51858,count__51859,i__51860,boundaryline_id_51861,tolerance_51862,general_cache_path_51863,collection_cache_path_51864,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__51857,chunk__51858,count__51859,i__51860,boundaryline_id_51861,tolerance_51862,general_cache_path_51863,collection_cache_path_51864,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_51864))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_51864,((function (seq__51857,chunk__51858,count__51859,i__51860,boundaryline_id_51861,tolerance_51862,general_cache_path_51863,collection_cache_path_51864,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__51857,chunk__51858,count__51859,i__51860,boundaryline_id_51861,tolerance_51862,general_cache_path_51863,collection_cache_path_51864,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__51865 = seq__51857;
var G__51866 = chunk__51858;
var G__51867 = count__51859;
var G__51868 = (i__51860 + (1));
seq__51857 = G__51865;
chunk__51858 = G__51866;
count__51859 = G__51867;
i__51860 = G__51868;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51857);if(temp__4126__auto__)
{var seq__51857__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51857__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__51857__$1);{
var G__51869 = cljs.core.chunk_rest.call(null,seq__51857__$1);
var G__51870 = c__4314__auto__;
var G__51871 = cljs.core.count.call(null,c__4314__auto__);
var G__51872 = (0);
seq__51857 = G__51869;
chunk__51858 = G__51870;
count__51859 = G__51871;
i__51860 = G__51872;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__51857__$1);var boundaryline_id_51873 = (bl["id"]);var tolerance_51874 = (bl["tolerance"]);var general_cache_path_51875 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_51873,tolerance_51874], null));var collection_cache_path_51876 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_51873,tolerance_51874], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_51875,((function (seq__51857,chunk__51858,count__51859,i__51860,boundaryline_id_51873,tolerance_51874,general_cache_path_51875,collection_cache_path_51876,bl,seq__51857__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__51857,chunk__51858,count__51859,i__51860,boundaryline_id_51873,tolerance_51874,general_cache_path_51875,collection_cache_path_51876,bl,seq__51857__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_51876))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_51876,((function (seq__51857,chunk__51858,count__51859,i__51860,boundaryline_id_51873,tolerance_51874,general_cache_path_51875,collection_cache_path_51876,bl,seq__51857__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__51857,chunk__51858,count__51859,i__51860,boundaryline_id_51873,tolerance_51874,general_cache_path_51875,collection_cache_path_51876,bl,seq__51857__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__51877 = cljs.core.next.call(null,seq__51857__$1);
var G__51878 = null;
var G__51879 = (0);
var G__51880 = (0);
seq__51857 = G__51877;
chunk__51858 = G__51878;
count__51859 = G__51879;
i__51860 = G__51880;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__51881){var map__51897 = p__51881;var map__51897__$1 = ((cljs.core.seq_QMARK_.call(null,map__51897))?cljs.core.apply.call(null,cljs.core.hash_map,map__51897):map__51897);var bounds = cljs.core.get.call(null,map__51897__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__51897__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__51897,map__51897__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__51897,map__51897__$1,bounds,boundaryline_ids){
return (function (state_51902){var state_val_51903 = (state_51902[(1)]);if((state_val_51903 === (2)))
{var inst_51899 = (state_51902[(2)]);var inst_51900 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_51899);var state_51902__$1 = (function (){var statearr_51904 = state_51902;(statearr_51904[(7)] = inst_51900);
return statearr_51904;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51902__$1,true);
} else
{if((state_val_51903 === (1)))
{var state_51902__$1 = state_51902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51902__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__51897,map__51897__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__51897,map__51897__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51908 = [null,null,null,null,null,null,null,null];(statearr_51908[(0)] = state_machine__5694__auto__);
(statearr_51908[(1)] = (1));
return statearr_51908;
});
var state_machine__5694__auto____1 = (function (state_51902){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_51902);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51909){if((e51909 instanceof Object))
{var ex__5697__auto__ = e51909;var statearr_51910_51912 = state_51902;(statearr_51910_51912[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51909;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51913 = state_51902;
state_51902 = G__51913;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51902){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__51897,map__51897__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_51911 = f__5709__auto__.call(null);(statearr_51911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_51911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__51897,map__51897__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__51881 = null;if (arguments.length > 5) {
  p__51881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__51881);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__51914){
var app_state = cljs.core.first(arglist__51914);
arglist__51914 = cljs.core.next(arglist__51914);
var boundarylines_path = cljs.core.first(arglist__51914);
arglist__51914 = cljs.core.next(arglist__51914);
var collection_boundarylines_path = cljs.core.first(arglist__51914);
arglist__51914 = cljs.core.next(arglist__51914);
var collection_id = cljs.core.first(arglist__51914);
arglist__51914 = cljs.core.next(arglist__51914);
var tolerance = cljs.core.first(arglist__51914);
var p__51881 = cljs.core.rest(arglist__51914);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__51881);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__51915){var map__51920 = p__51915;var map__51920__$1 = ((cljs.core.seq_QMARK_.call(null,map__51920))?cljs.core.apply.call(null,cljs.core.hash_map,map__51920):map__51920);var boundaryline_ids = cljs.core.get.call(null,map__51920__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__51920,map__51920__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__51920,map__51920__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__51920,map__51920__$1,boundaryline_ids){
return (function (p__51921){var vec__51922 = p__51921;var blid = cljs.core.nth.call(null,vec__51922,(0),null);var vec__51923 = cljs.core.nth.call(null,vec__51922,(1),null);var tol = cljs.core.nth.call(null,vec__51923,(0),null);var bl = cljs.core.nth.call(null,vec__51923,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__51920,map__51920__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__51915 = null;if (arguments.length > 5) {
  p__51915 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__51915);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__51924){
var app_state = cljs.core.first(arglist__51924);
arglist__51924 = cljs.core.next(arglist__51924);
var boundarylines_path = cljs.core.first(arglist__51924);
arglist__51924 = cljs.core.next(arglist__51924);
var collection_id = cljs.core.first(arglist__51924);
arglist__51924 = cljs.core.next(arglist__51924);
var bounds = cljs.core.first(arglist__51924);
arglist__51924 = cljs.core.next(arglist__51924);
var zoom = cljs.core.first(arglist__51924);
var p__51915 = cljs.core.rest(arglist__51924);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__51915);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__51929_51933 = cljs.core.seq.call(null,keys);var chunk__51930_51934 = null;var count__51931_51935 = (0);var i__51932_51936 = (0);while(true){
if((i__51932_51936 < count__51931_51935))
{var k_51937 = cljs.core._nth.call(null,chunk__51930_51934,i__51932_51936);var obj_51938 = (js_index[k_51937]);var geom_51939 = (obj_51938["geojson"]);var feature_51940 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_51938["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_51938["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_51938["compact_name"])], null)], null));var __51941__$1 = (feature_51940["geometry"] = geom_51939);var __51942__$2 = ((feature_51940["properties"])["index_object"] = obj_51938);features.push(feature_51940);
{
var G__51943 = seq__51929_51933;
var G__51944 = chunk__51930_51934;
var G__51945 = count__51931_51935;
var G__51946 = (i__51932_51936 + (1));
seq__51929_51933 = G__51943;
chunk__51930_51934 = G__51944;
count__51931_51935 = G__51945;
i__51932_51936 = G__51946;
continue;
}
} else
{var temp__4126__auto___51947 = cljs.core.seq.call(null,seq__51929_51933);if(temp__4126__auto___51947)
{var seq__51929_51948__$1 = temp__4126__auto___51947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51929_51948__$1))
{var c__4314__auto___51949 = cljs.core.chunk_first.call(null,seq__51929_51948__$1);{
var G__51950 = cljs.core.chunk_rest.call(null,seq__51929_51948__$1);
var G__51951 = c__4314__auto___51949;
var G__51952 = cljs.core.count.call(null,c__4314__auto___51949);
var G__51953 = (0);
seq__51929_51933 = G__51950;
chunk__51930_51934 = G__51951;
count__51931_51935 = G__51952;
i__51932_51936 = G__51953;
continue;
}
} else
{var k_51954 = cljs.core.first.call(null,seq__51929_51948__$1);var obj_51955 = (js_index[k_51954]);var geom_51956 = (obj_51955["geojson"]);var feature_51957 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_51955["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_51955["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_51955["compact_name"])], null)], null));var __51958__$1 = (feature_51957["geometry"] = geom_51956);var __51959__$2 = ((feature_51957["properties"])["index_object"] = obj_51955);features.push(feature_51957);
{
var G__51960 = cljs.core.next.call(null,seq__51929_51948__$1);
var G__51961 = null;
var G__51962 = (0);
var G__51963 = (0);
seq__51929_51933 = G__51960;
chunk__51930_51934 = G__51961;
count__51931_51935 = G__51962;
i__51932_51936 = G__51963;
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
return (function (state_52006){var state_val_52007 = (state_52006[(1)]);if((state_val_52007 === (5)))
{var inst_52004 = (state_52006[(2)]);var state_52006__$1 = state_52006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52006__$1,inst_52004);
} else
{if((state_val_52007 === (4)))
{var state_52006__$1 = state_52006;var statearr_52008_52020 = state_52006__$1;(statearr_52008_52020[(2)] = null);
(statearr_52008_52020[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52007 === (3)))
{var inst_51994 = (state_52006[(7)]);var inst_52001 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_51994);var state_52006__$1 = state_52006;var statearr_52009_52021 = state_52006__$1;(statearr_52009_52021[(2)] = inst_52001);
(statearr_52009_52021[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52007 === (2)))
{var inst_51994 = (state_52006[(7)]);var inst_51994__$1 = (state_52006[(2)]);var inst_51995 = (function (){var bl_coll_index = inst_51994__$1;return ((function (bl_coll_index,inst_51994,inst_51994__$1,state_val_52007,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_51994,inst_51994__$1,state_val_52007,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_51996 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_51995);var inst_51997 = cljs.core.deref.call(null,app_state);var inst_51998 = cljs.core.get_in.call(null,inst_51997,index_path);var inst_51999 = cljs.core._EQ_.call(null,inst_51998,inst_51994__$1);var state_52006__$1 = (function (){var statearr_52010 = state_52006;(statearr_52010[(8)] = inst_51996);
(statearr_52010[(7)] = inst_51994__$1);
return statearr_52010;
})();if(inst_51999)
{var statearr_52011_52022 = state_52006__$1;(statearr_52011_52022[(1)] = (3));
} else
{var statearr_52012_52023 = state_52006__$1;(statearr_52012_52023[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52007 === (1)))
{var inst_51992 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_52006__$1 = state_52006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52006__$1,(2),inst_51992);
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
var state_machine__5694__auto____0 = (function (){var statearr_52016 = [null,null,null,null,null,null,null,null,null];(statearr_52016[(0)] = state_machine__5694__auto__);
(statearr_52016[(1)] = (1));
return statearr_52016;
});
var state_machine__5694__auto____1 = (function (state_52006){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_52006);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e52017){if((e52017 instanceof Object))
{var ex__5697__auto__ = e52017;var statearr_52018_52024 = state_52006;(statearr_52018_52024[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e52017;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52025 = state_52006;
state_52006 = G__52025;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_52006){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_52006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_52019 = f__5709__auto__.call(null);(statearr_52019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_52019;
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

//# sourceMappingURL=boundarylines.js.map