// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__12842){var vec__12843 = p__12842;var z = cljs.core.nth.call(null,vec__12843,(0),null);var t = cljs.core.nth.call(null,vec__12843,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__12848 = cljs.core.seq.call(null,boundarylines);var chunk__12849 = null;var count__12850 = (0);var i__12851 = (0);while(true){
if((i__12851 < count__12850))
{var bl = cljs.core._nth.call(null,chunk__12849,i__12851);var boundaryline_id_12852 = (bl["id"]);var tolerance_12853 = (bl["tolerance"]);var general_cache_path_12854 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12852,tolerance_12853], null));var collection_cache_path_12855 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12852,tolerance_12853], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12854,((function (seq__12848,chunk__12849,count__12850,i__12851,boundaryline_id_12852,tolerance_12853,general_cache_path_12854,collection_cache_path_12855,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12848,chunk__12849,count__12850,i__12851,boundaryline_id_12852,tolerance_12853,general_cache_path_12854,collection_cache_path_12855,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12855))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12855,((function (seq__12848,chunk__12849,count__12850,i__12851,boundaryline_id_12852,tolerance_12853,general_cache_path_12854,collection_cache_path_12855,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12848,chunk__12849,count__12850,i__12851,boundaryline_id_12852,tolerance_12853,general_cache_path_12854,collection_cache_path_12855,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12856 = seq__12848;
var G__12857 = chunk__12849;
var G__12858 = count__12850;
var G__12859 = (i__12851 + (1));
seq__12848 = G__12856;
chunk__12849 = G__12857;
count__12850 = G__12858;
i__12851 = G__12859;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12848);if(temp__4126__auto__)
{var seq__12848__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12848__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__12848__$1);{
var G__12860 = cljs.core.chunk_rest.call(null,seq__12848__$1);
var G__12861 = c__4314__auto__;
var G__12862 = cljs.core.count.call(null,c__4314__auto__);
var G__12863 = (0);
seq__12848 = G__12860;
chunk__12849 = G__12861;
count__12850 = G__12862;
i__12851 = G__12863;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__12848__$1);var boundaryline_id_12864 = (bl["id"]);var tolerance_12865 = (bl["tolerance"]);var general_cache_path_12866 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12864,tolerance_12865], null));var collection_cache_path_12867 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12864,tolerance_12865], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12866,((function (seq__12848,chunk__12849,count__12850,i__12851,boundaryline_id_12864,tolerance_12865,general_cache_path_12866,collection_cache_path_12867,bl,seq__12848__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12848,chunk__12849,count__12850,i__12851,boundaryline_id_12864,tolerance_12865,general_cache_path_12866,collection_cache_path_12867,bl,seq__12848__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12867))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12867,((function (seq__12848,chunk__12849,count__12850,i__12851,boundaryline_id_12864,tolerance_12865,general_cache_path_12866,collection_cache_path_12867,bl,seq__12848__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12848,chunk__12849,count__12850,i__12851,boundaryline_id_12864,tolerance_12865,general_cache_path_12866,collection_cache_path_12867,bl,seq__12848__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12868 = cljs.core.next.call(null,seq__12848__$1);
var G__12869 = null;
var G__12870 = (0);
var G__12871 = (0);
seq__12848 = G__12868;
chunk__12849 = G__12869;
count__12850 = G__12870;
i__12851 = G__12871;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12872){var map__12888 = p__12872;var map__12888__$1 = ((cljs.core.seq_QMARK_.call(null,map__12888))?cljs.core.apply.call(null,cljs.core.hash_map,map__12888):map__12888);var bounds = cljs.core.get.call(null,map__12888__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__12888__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__12888,map__12888__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__12888,map__12888__$1,bounds,boundaryline_ids){
return (function (state_12893){var state_val_12894 = (state_12893[(1)]);if((state_val_12894 === (2)))
{var inst_12890 = (state_12893[(2)]);var inst_12891 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_12890);var state_12893__$1 = (function (){var statearr_12895 = state_12893;(statearr_12895[(7)] = inst_12891);
return statearr_12895;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12893__$1,true);
} else
{if((state_val_12894 === (1)))
{var state_12893__$1 = state_12893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12893__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__12888,map__12888__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__12888,map__12888__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12899 = [null,null,null,null,null,null,null,null];(statearr_12899[(0)] = state_machine__5694__auto__);
(statearr_12899[(1)] = (1));
return statearr_12899;
});
var state_machine__5694__auto____1 = (function (state_12893){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12893);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12900){if((e12900 instanceof Object))
{var ex__5697__auto__ = e12900;var statearr_12901_12903 = state_12893;(statearr_12901_12903[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12900;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12904 = state_12893;
state_12893 = G__12904;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12893){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__12888,map__12888__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_12902 = f__5709__auto__.call(null);(statearr_12902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_12902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__12888,map__12888__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__12872 = null;if (arguments.length > 5) {
  p__12872 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12872);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__12905){
var app_state = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var boundarylines_path = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var collection_boundarylines_path = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var collection_id = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var tolerance = cljs.core.first(arglist__12905);
var p__12872 = cljs.core.rest(arglist__12905);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12872);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__12906){var map__12911 = p__12906;var map__12911__$1 = ((cljs.core.seq_QMARK_.call(null,map__12911))?cljs.core.apply.call(null,cljs.core.hash_map,map__12911):map__12911);var boundaryline_ids = cljs.core.get.call(null,map__12911__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12911,map__12911__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12911,map__12911__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12911,map__12911__$1,boundaryline_ids){
return (function (p__12912){var vec__12913 = p__12912;var blid = cljs.core.nth.call(null,vec__12913,(0),null);var vec__12914 = cljs.core.nth.call(null,vec__12913,(1),null);var tol = cljs.core.nth.call(null,vec__12914,(0),null);var bl = cljs.core.nth.call(null,vec__12914,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12911,map__12911__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__12906 = null;if (arguments.length > 5) {
  p__12906 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__12906);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__12915){
var app_state = cljs.core.first(arglist__12915);
arglist__12915 = cljs.core.next(arglist__12915);
var boundarylines_path = cljs.core.first(arglist__12915);
arglist__12915 = cljs.core.next(arglist__12915);
var collection_id = cljs.core.first(arglist__12915);
arglist__12915 = cljs.core.next(arglist__12915);
var bounds = cljs.core.first(arglist__12915);
arglist__12915 = cljs.core.next(arglist__12915);
var zoom = cljs.core.first(arglist__12915);
var p__12906 = cljs.core.rest(arglist__12915);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__12906);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12920_12924 = cljs.core.seq.call(null,keys);var chunk__12921_12925 = null;var count__12922_12926 = (0);var i__12923_12927 = (0);while(true){
if((i__12923_12927 < count__12922_12926))
{var k_12928 = cljs.core._nth.call(null,chunk__12921_12925,i__12923_12927);var obj_12929 = (js_index[k_12928]);var geom_12930 = (obj_12929["geojson"]);var feature_12931 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12929["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12929["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12929["compact_name"])], null)], null));var __12932__$1 = (feature_12931["geometry"] = geom_12930);var __12933__$2 = ((feature_12931["properties"])["index_object"] = obj_12929);features.push(feature_12931);
{
var G__12934 = seq__12920_12924;
var G__12935 = chunk__12921_12925;
var G__12936 = count__12922_12926;
var G__12937 = (i__12923_12927 + (1));
seq__12920_12924 = G__12934;
chunk__12921_12925 = G__12935;
count__12922_12926 = G__12936;
i__12923_12927 = G__12937;
continue;
}
} else
{var temp__4126__auto___12938 = cljs.core.seq.call(null,seq__12920_12924);if(temp__4126__auto___12938)
{var seq__12920_12939__$1 = temp__4126__auto___12938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12920_12939__$1))
{var c__4314__auto___12940 = cljs.core.chunk_first.call(null,seq__12920_12939__$1);{
var G__12941 = cljs.core.chunk_rest.call(null,seq__12920_12939__$1);
var G__12942 = c__4314__auto___12940;
var G__12943 = cljs.core.count.call(null,c__4314__auto___12940);
var G__12944 = (0);
seq__12920_12924 = G__12941;
chunk__12921_12925 = G__12942;
count__12922_12926 = G__12943;
i__12923_12927 = G__12944;
continue;
}
} else
{var k_12945 = cljs.core.first.call(null,seq__12920_12939__$1);var obj_12946 = (js_index[k_12945]);var geom_12947 = (obj_12946["geojson"]);var feature_12948 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12946["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12946["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12946["compact_name"])], null)], null));var __12949__$1 = (feature_12948["geometry"] = geom_12947);var __12950__$2 = ((feature_12948["properties"])["index_object"] = obj_12946);features.push(feature_12948);
{
var G__12951 = cljs.core.next.call(null,seq__12920_12939__$1);
var G__12952 = null;
var G__12953 = (0);
var G__12954 = (0);
seq__12920_12924 = G__12951;
chunk__12921_12925 = G__12952;
count__12922_12926 = G__12953;
i__12923_12927 = G__12954;
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
return (function (state_12997){var state_val_12998 = (state_12997[(1)]);if((state_val_12998 === (5)))
{var inst_12995 = (state_12997[(2)]);var state_12997__$1 = state_12997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12997__$1,inst_12995);
} else
{if((state_val_12998 === (4)))
{var state_12997__$1 = state_12997;var statearr_12999_13011 = state_12997__$1;(statearr_12999_13011[(2)] = null);
(statearr_12999_13011[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12998 === (3)))
{var inst_12985 = (state_12997[(7)]);var inst_12992 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_12985);var state_12997__$1 = state_12997;var statearr_13000_13012 = state_12997__$1;(statearr_13000_13012[(2)] = inst_12992);
(statearr_13000_13012[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12998 === (2)))
{var inst_12985 = (state_12997[(7)]);var inst_12985__$1 = (state_12997[(2)]);var inst_12986 = (function (){var bl_coll_index = inst_12985__$1;return ((function (bl_coll_index,inst_12985,inst_12985__$1,state_val_12998,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_12985,inst_12985__$1,state_val_12998,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_12987 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_12986);var inst_12988 = cljs.core.deref.call(null,app_state);var inst_12989 = cljs.core.get_in.call(null,inst_12988,index_path);var inst_12990 = cljs.core._EQ_.call(null,inst_12989,inst_12985__$1);var state_12997__$1 = (function (){var statearr_13001 = state_12997;(statearr_13001[(8)] = inst_12987);
(statearr_13001[(7)] = inst_12985__$1);
return statearr_13001;
})();if(inst_12990)
{var statearr_13002_13013 = state_12997__$1;(statearr_13002_13013[(1)] = (3));
} else
{var statearr_13003_13014 = state_12997__$1;(statearr_13003_13014[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12998 === (1)))
{var inst_12983 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12997__$1 = state_12997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12997__$1,(2),inst_12983);
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
var state_machine__5694__auto____0 = (function (){var statearr_13007 = [null,null,null,null,null,null,null,null,null];(statearr_13007[(0)] = state_machine__5694__auto__);
(statearr_13007[(1)] = (1));
return statearr_13007;
});
var state_machine__5694__auto____1 = (function (state_12997){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12997);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e13008){if((e13008 instanceof Object))
{var ex__5697__auto__ = e13008;var statearr_13009_13015 = state_12997;(statearr_13009_13015[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12997);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13008;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13016 = state_12997;
state_12997 = G__13016;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12997){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_13010 = f__5709__auto__.call(null);(statearr_13010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_13010;
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
