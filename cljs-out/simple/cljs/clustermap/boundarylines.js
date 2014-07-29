// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__24851){var vec__24852 = p__24851;var z = cljs.core.nth.call(null,vec__24852,(0),null);var t = cljs.core.nth.call(null,vec__24852,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= z);
} else
{return and__3531__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3543__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
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
{if(true)
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{return null;
}
}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__24857 = cljs.core.seq.call(null,boundarylines);var chunk__24858 = null;var count__24859 = (0);var i__24860 = (0);while(true){
if((i__24860 < count__24859))
{var bl = cljs.core._nth.call(null,chunk__24858,i__24860);var boundaryline_id_24861 = (bl["id"]);var tolerance_24862 = (bl["tolerance"]);var general_cache_path_24863 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_24861,tolerance_24862], null));var collection_cache_path_24864 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_24861,tolerance_24862], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_24863,((function (seq__24857,chunk__24858,count__24859,i__24860,boundaryline_id_24861,tolerance_24862,general_cache_path_24863,collection_cache_path_24864,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__24857,chunk__24858,count__24859,i__24860,boundaryline_id_24861,tolerance_24862,general_cache_path_24863,collection_cache_path_24864,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_24864))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_24864,((function (seq__24857,chunk__24858,count__24859,i__24860,boundaryline_id_24861,tolerance_24862,general_cache_path_24863,collection_cache_path_24864,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__24857,chunk__24858,count__24859,i__24860,boundaryline_id_24861,tolerance_24862,general_cache_path_24863,collection_cache_path_24864,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__24865 = seq__24857;
var G__24866 = chunk__24858;
var G__24867 = count__24859;
var G__24868 = (i__24860 + (1));
seq__24857 = G__24865;
chunk__24858 = G__24866;
count__24859 = G__24867;
i__24860 = G__24868;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24857);if(temp__4126__auto__)
{var seq__24857__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24857__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__24857__$1);{
var G__24869 = cljs.core.chunk_rest.call(null,seq__24857__$1);
var G__24870 = c__4299__auto__;
var G__24871 = cljs.core.count.call(null,c__4299__auto__);
var G__24872 = (0);
seq__24857 = G__24869;
chunk__24858 = G__24870;
count__24859 = G__24871;
i__24860 = G__24872;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__24857__$1);var boundaryline_id_24873 = (bl["id"]);var tolerance_24874 = (bl["tolerance"]);var general_cache_path_24875 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_24873,tolerance_24874], null));var collection_cache_path_24876 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_24873,tolerance_24874], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_24875,((function (seq__24857,chunk__24858,count__24859,i__24860,boundaryline_id_24873,tolerance_24874,general_cache_path_24875,collection_cache_path_24876,bl,seq__24857__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__24857,chunk__24858,count__24859,i__24860,boundaryline_id_24873,tolerance_24874,general_cache_path_24875,collection_cache_path_24876,bl,seq__24857__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_24876))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_24876,((function (seq__24857,chunk__24858,count__24859,i__24860,boundaryline_id_24873,tolerance_24874,general_cache_path_24875,collection_cache_path_24876,bl,seq__24857__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__24857,chunk__24858,count__24859,i__24860,boundaryline_id_24873,tolerance_24874,general_cache_path_24875,collection_cache_path_24876,bl,seq__24857__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__24877 = cljs.core.next.call(null,seq__24857__$1);
var G__24878 = null;
var G__24879 = (0);
var G__24880 = (0);
seq__24857 = G__24877;
chunk__24858 = G__24878;
count__24859 = G__24879;
i__24860 = G__24880;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__24881){var map__24897 = p__24881;var map__24897__$1 = ((cljs.core.seq_QMARK_.call(null,map__24897))?cljs.core.apply.call(null,cljs.core.hash_map,map__24897):map__24897);var bounds = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,map__24897,map__24897__$1,bounds,boundaryline_ids){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,map__24897,map__24897__$1,bounds,boundaryline_ids){
return (function (state_24902){var state_val_24903 = (state_24902[(1)]);if((state_val_24903 === (2)))
{var inst_24899 = (state_24902[(2)]);var inst_24900 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_24899);var state_24902__$1 = (function (){var statearr_24904 = state_24902;(statearr_24904[(7)] = inst_24900);
return statearr_24904;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24902__$1,true);
} else
{if((state_val_24903 === (1)))
{var state_24902__$1 = state_24902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24902__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,map__24897,map__24897__$1,bounds,boundaryline_ids))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,map__24897,map__24897__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_24908 = [null,null,null,null,null,null,null,null];(statearr_24908[(0)] = state_machine__5679__auto__);
(statearr_24908[(1)] = (1));
return statearr_24908;
});
var state_machine__5679__auto____1 = (function (state_24902){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_24902);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e24909){if((e24909 instanceof Object))
{var ex__5682__auto__ = e24909;var statearr_24910_24912 = state_24902;(statearr_24910_24912[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24913 = state_24902;
state_24902 = G__24913;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_24902){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_24902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,map__24897,map__24897__$1,bounds,boundaryline_ids))
})();var state__5695__auto__ = (function (){var statearr_24911 = f__5694__auto__.call(null);(statearr_24911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_24911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,map__24897,map__24897__$1,bounds,boundaryline_ids))
);
return c__5693__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__24881 = null;if (arguments.length > 5) {
  p__24881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__24881);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__24914){
var app_state = cljs.core.first(arglist__24914);
arglist__24914 = cljs.core.next(arglist__24914);
var boundarylines_path = cljs.core.first(arglist__24914);
arglist__24914 = cljs.core.next(arglist__24914);
var collection_boundarylines_path = cljs.core.first(arglist__24914);
arglist__24914 = cljs.core.next(arglist__24914);
var collection_id = cljs.core.first(arglist__24914);
arglist__24914 = cljs.core.next(arglist__24914);
var tolerance = cljs.core.first(arglist__24914);
var p__24881 = cljs.core.rest(arglist__24914);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__24881);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3531__auto__ = default_bl;if(cljs.core.truth_(and__3531__auto__))
{return default_tol;
} else
{return and__3531__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__24915){var map__24920 = p__24915;var map__24920__$1 = ((cljs.core.seq_QMARK_.call(null,map__24920))?cljs.core.apply.call(null,cljs.core.hash_map,map__24920):map__24920);var boundaryline_ids = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24920,map__24920__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24920,map__24920__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24920,map__24920__$1,boundaryline_ids){
return (function (p__24921){var vec__24922 = p__24921;var blid = cljs.core.nth.call(null,vec__24922,(0),null);var vec__24923 = cljs.core.nth.call(null,vec__24922,(1),null);var tol = cljs.core.nth.call(null,vec__24923,(0),null);var bl = cljs.core.nth.call(null,vec__24923,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24920,map__24920__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__24915 = null;if (arguments.length > 5) {
  p__24915 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__24915);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__24924){
var app_state = cljs.core.first(arglist__24924);
arglist__24924 = cljs.core.next(arglist__24924);
var boundarylines_path = cljs.core.first(arglist__24924);
arglist__24924 = cljs.core.next(arglist__24924);
var collection_id = cljs.core.first(arglist__24924);
arglist__24924 = cljs.core.next(arglist__24924);
var bounds = cljs.core.first(arglist__24924);
arglist__24924 = cljs.core.next(arglist__24924);
var zoom = cljs.core.first(arglist__24924);
var p__24915 = cljs.core.rest(arglist__24924);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__24915);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24929_24933 = cljs.core.seq.call(null,keys);var chunk__24930_24934 = null;var count__24931_24935 = (0);var i__24932_24936 = (0);while(true){
if((i__24932_24936 < count__24931_24935))
{var k_24937 = cljs.core._nth.call(null,chunk__24930_24934,i__24932_24936);var obj_24938 = (js_index[k_24937]);var geom_24939 = (obj_24938["geojson"]);var feature_24940 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24938["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24938["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24938["compact_name"])], null)], null));var __24941__$1 = (feature_24940["geometry"] = geom_24939);var __24942__$2 = ((feature_24940["properties"])["index_object"] = obj_24938);features.push(feature_24940);
{
var G__24943 = seq__24929_24933;
var G__24944 = chunk__24930_24934;
var G__24945 = count__24931_24935;
var G__24946 = (i__24932_24936 + (1));
seq__24929_24933 = G__24943;
chunk__24930_24934 = G__24944;
count__24931_24935 = G__24945;
i__24932_24936 = G__24946;
continue;
}
} else
{var temp__4126__auto___24947 = cljs.core.seq.call(null,seq__24929_24933);if(temp__4126__auto___24947)
{var seq__24929_24948__$1 = temp__4126__auto___24947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24929_24948__$1))
{var c__4299__auto___24949 = cljs.core.chunk_first.call(null,seq__24929_24948__$1);{
var G__24950 = cljs.core.chunk_rest.call(null,seq__24929_24948__$1);
var G__24951 = c__4299__auto___24949;
var G__24952 = cljs.core.count.call(null,c__4299__auto___24949);
var G__24953 = (0);
seq__24929_24933 = G__24950;
chunk__24930_24934 = G__24951;
count__24931_24935 = G__24952;
i__24932_24936 = G__24953;
continue;
}
} else
{var k_24954 = cljs.core.first.call(null,seq__24929_24948__$1);var obj_24955 = (js_index[k_24954]);var geom_24956 = (obj_24955["geojson"]);var feature_24957 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24955["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24955["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24955["compact_name"])], null)], null));var __24958__$1 = (feature_24957["geometry"] = geom_24956);var __24959__$2 = ((feature_24957["properties"])["index_object"] = obj_24955);features.push(feature_24957);
{
var G__24960 = cljs.core.next.call(null,seq__24929_24948__$1);
var G__24961 = null;
var G__24962 = (0);
var G__24963 = (0);
seq__24929_24933 = G__24960;
chunk__24930_24934 = G__24961;
count__24931_24935 = G__24962;
i__24932_24936 = G__24963;
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
{var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_25006){var state_val_25007 = (state_25006[(1)]);if((state_val_25007 === (5)))
{var inst_25004 = (state_25006[(2)]);var state_25006__$1 = state_25006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25006__$1,inst_25004);
} else
{if((state_val_25007 === (4)))
{var state_25006__$1 = state_25006;var statearr_25008_25020 = state_25006__$1;(statearr_25008_25020[(2)] = null);
(statearr_25008_25020[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25007 === (3)))
{var inst_24994 = (state_25006[(7)]);var inst_25001 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_24994);var state_25006__$1 = state_25006;var statearr_25009_25021 = state_25006__$1;(statearr_25009_25021[(2)] = inst_25001);
(statearr_25009_25021[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25007 === (2)))
{var inst_24994 = (state_25006[(7)]);var inst_24994__$1 = (state_25006[(2)]);var inst_24995 = (function (){var bl_coll_index = inst_24994__$1;return ((function (bl_coll_index,inst_24994,inst_24994__$1,state_val_25007,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_24994,inst_24994__$1,state_val_25007,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_24996 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_24995);var inst_24997 = cljs.core.deref.call(null,app_state);var inst_24998 = cljs.core.get_in.call(null,inst_24997,index_path);var inst_24999 = cljs.core._EQ_.call(null,inst_24998,inst_24994__$1);var state_25006__$1 = (function (){var statearr_25010 = state_25006;(statearr_25010[(7)] = inst_24994__$1);
(statearr_25010[(8)] = inst_24996);
return statearr_25010;
})();if(inst_24999)
{var statearr_25011_25022 = state_25006__$1;(statearr_25011_25022[(1)] = (3));
} else
{var statearr_25012_25023 = state_25006__$1;(statearr_25012_25023[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25007 === (1)))
{var inst_24992 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_25006__$1 = state_25006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25006__$1,(2),inst_24992);
} else
{return null;
}
}
}
}
}
});})(c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_25016 = [null,null,null,null,null,null,null,null,null];(statearr_25016[(0)] = state_machine__5679__auto__);
(statearr_25016[(1)] = (1));
return statearr_25016;
});
var state_machine__5679__auto____1 = (function (state_25006){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25006);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25017){if((e25017 instanceof Object))
{var ex__5682__auto__ = e25017;var statearr_25018_25024 = state_25006;(statearr_25018_25024[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25025 = state_25006;
state_25006 = G__25025;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25006){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_25019 = f__5694__auto__.call(null);(statearr_25019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_25019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
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
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
