// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__37038){var vec__37039 = p__37038;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37039,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37039,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.some(avail_set,coarser);
}
}
});
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_(x))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__37044 = cljs.core.seq(boundarylines);var chunk__37045 = null;var count__37046 = (0);var i__37047 = (0);while(true){
if((i__37047 < count__37046))
{var bl = chunk__37045.cljs$core$IIndexed$_nth$arity$2(null,i__37047);var boundaryline_id_37048 = (bl["id"]);var tolerance_37049 = (bl["tolerance"]);var general_cache_path_37050 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37048,tolerance_37049], null));var collection_cache_path_37051 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37048,tolerance_37049], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37050,((function (seq__37044,chunk__37045,count__37046,i__37047,boundaryline_id_37048,tolerance_37049,general_cache_path_37050,collection_cache_path_37051,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37044,chunk__37045,count__37046,i__37047,boundaryline_id_37048,tolerance_37049,general_cache_path_37050,collection_cache_path_37051,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37051))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37051,((function (seq__37044,chunk__37045,count__37046,i__37047,boundaryline_id_37048,tolerance_37049,general_cache_path_37050,collection_cache_path_37051,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37044,chunk__37045,count__37046,i__37047,boundaryline_id_37048,tolerance_37049,general_cache_path_37050,collection_cache_path_37051,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37052 = seq__37044;
var G__37053 = chunk__37045;
var G__37054 = count__37046;
var G__37055 = (i__37047 + (1));
seq__37044 = G__37052;
chunk__37045 = G__37053;
count__37046 = G__37054;
i__37047 = G__37055;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37044);if(temp__4126__auto__)
{var seq__37044__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37044__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37044__$1);{
var G__37056 = cljs.core.chunk_rest(seq__37044__$1);
var G__37057 = c__4299__auto__;
var G__37058 = cljs.core.count(c__4299__auto__);
var G__37059 = (0);
seq__37044 = G__37056;
chunk__37045 = G__37057;
count__37046 = G__37058;
i__37047 = G__37059;
continue;
}
} else
{var bl = cljs.core.first(seq__37044__$1);var boundaryline_id_37060 = (bl["id"]);var tolerance_37061 = (bl["tolerance"]);var general_cache_path_37062 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37060,tolerance_37061], null));var collection_cache_path_37063 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37060,tolerance_37061], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37062,((function (seq__37044,chunk__37045,count__37046,i__37047,boundaryline_id_37060,tolerance_37061,general_cache_path_37062,collection_cache_path_37063,bl,seq__37044__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37044,chunk__37045,count__37046,i__37047,boundaryline_id_37060,tolerance_37061,general_cache_path_37062,collection_cache_path_37063,bl,seq__37044__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37063))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37063,((function (seq__37044,chunk__37045,count__37046,i__37047,boundaryline_id_37060,tolerance_37061,general_cache_path_37062,collection_cache_path_37063,bl,seq__37044__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37044,chunk__37045,count__37046,i__37047,boundaryline_id_37060,tolerance_37061,general_cache_path_37062,collection_cache_path_37063,bl,seq__37044__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37064 = cljs.core.next(seq__37044__$1);
var G__37065 = null;
var G__37066 = (0);
var G__37067 = (0);
seq__37044 = G__37064;
chunk__37045 = G__37065;
count__37046 = G__37066;
i__37047 = G__37067;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37068){var map__37084 = p__37068;var map__37084__$1 = ((cljs.core.seq_QMARK_(map__37084))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37084):map__37084);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37084__$1,cljs.core.constant$keyword$801);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37084__$1,cljs.core.constant$keyword$800);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$800,boundaryline_ids,cljs.core.constant$keyword$797,true], 0));var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,comm,map__37084,map__37084__$1,bounds,boundaryline_ids){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,map__37084,map__37084__$1,bounds,boundaryline_ids){
return (function (state_37089){var state_val_37090 = (state_37089[(1)]);if((state_val_37090 === (2)))
{var inst_37086 = (state_37089[(2)]);var inst_37087 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_37086);var state_37089__$1 = (function (){var statearr_37091 = state_37089;(statearr_37091[(7)] = inst_37087);
return statearr_37091;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37089__$1,true);
} else
{if((state_val_37090 === (1)))
{var state_37089__$1 = state_37089;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37089__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,map__37084,map__37084__$1,bounds,boundaryline_ids))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,map__37084,map__37084__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37095 = [null,null,null,null,null,null,null,null];(statearr_37095[(0)] = state_machine__5679__auto__);
(statearr_37095[(1)] = (1));
return statearr_37095;
});
var state_machine__5679__auto____1 = (function (state_37089){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37089);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37096){if((e37096 instanceof Object))
{var ex__5682__auto__ = e37096;var statearr_37097_37099 = state_37089;(statearr_37097_37099[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37089);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e37096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__37100 = state_37089;
state_37089 = G__37100;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37089){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,map__37084,map__37084__$1,bounds,boundaryline_ids))
})();var state__5695__auto__ = (function (){var statearr_37098 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,comm,map__37084,map__37084__$1,bounds,boundaryline_ids))
);
return c__5693__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__37068 = null;if (arguments.length > 5) {
  p__37068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37068);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__37101){
var app_state = cljs.core.first(arglist__37101);
arglist__37101 = cljs.core.next(arglist__37101);
var boundarylines_path = cljs.core.first(arglist__37101);
arglist__37101 = cljs.core.next(arglist__37101);
var collection_boundarylines_path = cljs.core.first(arglist__37101);
arglist__37101 = cljs.core.next(arglist__37101);
var collection_id = cljs.core.first(arglist__37101);
arglist__37101 = cljs.core.next(arglist__37101);
var tolerance = cljs.core.first(arglist__37101);
var p__37068 = cljs.core.rest(arglist__37101);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37068);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name(boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3531__auto__ = default_bl;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var use_tol = clustermap.boundarylines.best_available_tolerance(zoom,cljs.core.keys(bl_versions));var use_bl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bl_versions,use_tol);if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__37102){var map__37107 = p__37102;var map__37107__$1 = ((cljs.core.seq_QMARK_(map__37107))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37107):map__37107);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,cljs.core.constant$keyword$800);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$810], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$811], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$812], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$811], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37107,map__37107__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37107,map__37107__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37107,map__37107__$1,boundaryline_ids){
return (function (p__37108){var vec__37109 = p__37108;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37109,(0),null);var vec__37110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37109,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37110,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37110,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37107,map__37107__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$800,required,cljs.core.constant$keyword$801,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__37102 = null;if (arguments.length > 5) {
  p__37102 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__37102);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__37111){
var app_state = cljs.core.first(arglist__37111);
arglist__37111 = cljs.core.next(arglist__37111);
var boundarylines_path = cljs.core.first(arglist__37111);
arglist__37111 = cljs.core.next(arglist__37111);
var collection_id = cljs.core.first(arglist__37111);
arglist__37111 = cljs.core.next(arglist__37111);
var bounds = cljs.core.first(arglist__37111);
arglist__37111 = cljs.core.next(arglist__37111);
var zoom = cljs.core.first(arglist__37111);
var p__37102 = cljs.core.rest(arglist__37111);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__37102);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$810], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$813], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$814,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__37116_37120 = cljs.core.seq(keys);var chunk__37117_37121 = null;var count__37118_37122 = (0);var i__37119_37123 = (0);while(true){
if((i__37119_37123 < count__37118_37122))
{var k_37124 = chunk__37117_37121.cljs$core$IIndexed$_nth$arity$2(null,i__37119_37123);var obj_37125 = (js_index[k_37124]);var geom_37126 = (obj_37125["geojson"]);var feature_37127 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$814,"Feature",cljs.core.constant$keyword$815,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$816,(obj_37125["id"]),cljs.core.constant$keyword$817,(obj_37125["id"]),cljs.core.constant$keyword$818,(obj_37125["compact_name"])], null)], null));var __37128__$1 = (feature_37127["geometry"] = geom_37126);var __37129__$2 = ((feature_37127["properties"])["index_object"] = obj_37125);features.push(feature_37127);
{
var G__37130 = seq__37116_37120;
var G__37131 = chunk__37117_37121;
var G__37132 = count__37118_37122;
var G__37133 = (i__37119_37123 + (1));
seq__37116_37120 = G__37130;
chunk__37117_37121 = G__37131;
count__37118_37122 = G__37132;
i__37119_37123 = G__37133;
continue;
}
} else
{var temp__4126__auto___37134 = cljs.core.seq(seq__37116_37120);if(temp__4126__auto___37134)
{var seq__37116_37135__$1 = temp__4126__auto___37134;if(cljs.core.chunked_seq_QMARK_(seq__37116_37135__$1))
{var c__4299__auto___37136 = cljs.core.chunk_first(seq__37116_37135__$1);{
var G__37137 = cljs.core.chunk_rest(seq__37116_37135__$1);
var G__37138 = c__4299__auto___37136;
var G__37139 = cljs.core.count(c__4299__auto___37136);
var G__37140 = (0);
seq__37116_37120 = G__37137;
chunk__37117_37121 = G__37138;
count__37118_37122 = G__37139;
i__37119_37123 = G__37140;
continue;
}
} else
{var k_37141 = cljs.core.first(seq__37116_37135__$1);var obj_37142 = (js_index[k_37141]);var geom_37143 = (obj_37142["geojson"]);var feature_37144 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$814,"Feature",cljs.core.constant$keyword$815,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$816,(obj_37142["id"]),cljs.core.constant$keyword$817,(obj_37142["id"]),cljs.core.constant$keyword$818,(obj_37142["compact_name"])], null)], null));var __37145__$1 = (feature_37144["geometry"] = geom_37143);var __37146__$2 = ((feature_37144["properties"])["index_object"] = obj_37142);features.push(feature_37144);
{
var G__37147 = cljs.core.next(seq__37116_37135__$1);
var G__37148 = null;
var G__37149 = (0);
var G__37150 = (0);
seq__37116_37120 = G__37147;
chunk__37117_37121 = G__37148;
count__37118_37122 = G__37149;
i__37119_37123 = G__37150;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$810], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$812], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_37193){var state_val_37194 = (state_37193[(1)]);if((state_val_37194 === (5)))
{var inst_37191 = (state_37193[(2)]);var state_37193__$1 = state_37193;return cljs.core.async.impl.ioc_helpers.return_chan(state_37193__$1,inst_37191);
} else
{if((state_val_37194 === (4)))
{var state_37193__$1 = state_37193;var statearr_37195_37207 = state_37193__$1;(statearr_37195_37207[(2)] = null);
(statearr_37195_37207[(1)] = (5));
return cljs.core.constant$keyword$781;
} else
{if((state_val_37194 === (3)))
{var inst_37181 = (state_37193[(7)]);var inst_37188 = clustermap.boundarylines.rtree_index(rtree,inst_37181);var state_37193__$1 = state_37193;var statearr_37196_37208 = state_37193__$1;(statearr_37196_37208[(2)] = inst_37188);
(statearr_37196_37208[(1)] = (5));
return cljs.core.constant$keyword$781;
} else
{if((state_val_37194 === (2)))
{var inst_37181 = (state_37193[(7)]);var inst_37181__$1 = (state_37193[(2)]);var inst_37182 = (function (){var bl_coll_index = inst_37181__$1;return ((function (bl_coll_index,inst_37181,inst_37181__$1,state_val_37194,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_37181,inst_37181__$1,state_val_37194,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_37183 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_37182);var inst_37184 = cljs.core.deref(app_state);var inst_37185 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37184,index_path);var inst_37186 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37185,inst_37181__$1);var state_37193__$1 = (function (){var statearr_37197 = state_37193;(statearr_37197[(7)] = inst_37181__$1);
(statearr_37197[(8)] = inst_37183);
return statearr_37197;
})();if(inst_37186)
{var statearr_37198_37209 = state_37193__$1;(statearr_37198_37209[(1)] = (3));
} else
{var statearr_37199_37210 = state_37193__$1;(statearr_37199_37210[(1)] = (4));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_37194 === (1)))
{var inst_37179 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$797,true], 0));var state_37193__$1 = state_37193;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37193__$1,(2),inst_37179);
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
var state_machine__5679__auto____0 = (function (){var statearr_37203 = [null,null,null,null,null,null,null,null,null];(statearr_37203[(0)] = state_machine__5679__auto__);
(statearr_37203[(1)] = (1));
return statearr_37203;
});
var state_machine__5679__auto____1 = (function (state_37193){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37193);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37204){if((e37204 instanceof Object))
{var ex__5682__auto__ = e37204;var statearr_37205_37211 = state_37193;(statearr_37205_37211[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37193);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e37204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__37212 = state_37193;
state_37193 = G__37212;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37193){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_37206 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$810], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$813], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$819,x,cljs.core.constant$keyword$820,y,cljs.core.constant$keyword$821,(0),cljs.core.constant$keyword$822,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$816,hit.properties.id,cljs.core.constant$keyword$818,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$814,"Point",cljs.core.constant$keyword$823,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
