// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__34771){var vec__34772 = p__34771;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.cljs$core$IFn$_invoke$arity$variadic(boundaryline_id,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$667,true], 0));var use_korks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,comm,use_korks,path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,use_korks,path){
return (function (state_34792){var state_val_34793 = (state_34792[(1)]);if((state_val_34793 === (2)))
{var inst_34788 = (state_34792[(2)]);var inst_34789 = (function (){var bl = inst_34788;return ((function (bl,inst_34788,state_val_34793,c__5693__auto__,comm,use_korks,path){
return (function (old){return bl;
});
;})(bl,inst_34788,state_val_34793,c__5693__auto__,comm,use_korks,path))
})();var inst_34790 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,path,inst_34789);var state_34792__$1 = state_34792;return cljs.core.async.impl.ioc_helpers.return_chan(state_34792__$1,inst_34790);
} else
{if((state_val_34793 === (1)))
{var state_34792__$1 = state_34792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34792__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,use_korks,path))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,use_korks,path){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34797 = [null,null,null,null,null,null,null];(statearr_34797[(0)] = state_machine__5679__auto__);
(statearr_34797[(1)] = (1));
return statearr_34797;
});
var state_machine__5679__auto____1 = (function (state_34792){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34792);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34798){if((e34798 instanceof Object))
{var ex__5682__auto__ = e34798;var statearr_34799_34801 = state_34792;(statearr_34799_34801[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34792);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e34798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__34802 = state_34792;
state_34792 = G__34802;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34792){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,use_korks,path))
})();var state__5695__auto__ = (function (){var statearr_34800 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,comm,use_korks,path))
);
return c__5693__auto__;
});
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,collection_id,boundaryline_id,zoom,p__34803){var map__34805 = p__34803;var map__34805__$1 = ((cljs.core.seq_QMARK_(map__34805))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34805):map__34805);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34805__$1,cljs.core.constant$keyword$675);var all_collections_path = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$676], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index(index,boundaryline_id);
} else
{var boundarylines_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$677], null));var boundarylines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),boundarylines_path);var bl_versions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(boundarylines,boundaryline_id);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var use_tol = clustermap.boundarylines.best_available_tolerance(zoom,cljs.core.keys(bl_versions));var use_bl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(boundarylines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,use_tol], null));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline(app_state,boundarylines_path,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index(index,boundaryline_id);
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,korks,collection_id,boundaryline_id,zoom,var_args){
var p__34803 = null;if (arguments.length > 5) {
  p__34803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,collection_id,boundaryline_id,zoom,p__34803);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__34806){
var app_state = cljs.core.first(arglist__34806);
arglist__34806 = cljs.core.next(arglist__34806);
var korks = cljs.core.first(arglist__34806);
arglist__34806 = cljs.core.next(arglist__34806);
var collection_id = cljs.core.first(arglist__34806);
arglist__34806 = cljs.core.next(arglist__34806);
var boundaryline_id = cljs.core.first(arglist__34806);
arglist__34806 = cljs.core.next(arglist__34806);
var zoom = cljs.core.first(arglist__34806);
var p__34803 = cljs.core.rest(arglist__34806);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,collection_id,boundaryline_id,zoom,p__34803);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundaryline_collections_path,collection_id){var all_collections_path = ((cljs.core.sequential_QMARK_(boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$678], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$679,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34811_34815 = cljs.core.seq(keys);var chunk__34812_34816 = null;var count__34813_34817 = (0);var i__34814_34818 = (0);while(true){
if((i__34814_34818 < count__34813_34817))
{var k_34819 = chunk__34812_34816.cljs$core$IIndexed$_nth$arity$2(null,i__34814_34818);var obj_34820 = (js_index[k_34819]);var geom_34821 = (obj_34820["geojson"]);var feature_34822 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$679,"Feature",cljs.core.constant$keyword$680,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$681,(obj_34820["id"]),cljs.core.constant$keyword$682,(obj_34820["id"]),cljs.core.constant$keyword$683,(obj_34820["compact_name"])], null)], null));var __34823__$1 = (feature_34822["geometry"] = geom_34821);var __34824__$2 = ((feature_34822["properties"])["index_object"] = obj_34820);features.push(feature_34822);
{
var G__34825 = seq__34811_34815;
var G__34826 = chunk__34812_34816;
var G__34827 = count__34813_34817;
var G__34828 = (i__34814_34818 + (1));
seq__34811_34815 = G__34825;
chunk__34812_34816 = G__34826;
count__34813_34817 = G__34827;
i__34814_34818 = G__34828;
continue;
}
} else
{var temp__4126__auto___34829 = cljs.core.seq(seq__34811_34815);if(temp__4126__auto___34829)
{var seq__34811_34830__$1 = temp__4126__auto___34829;if(cljs.core.chunked_seq_QMARK_(seq__34811_34830__$1))
{var c__4299__auto___34831 = cljs.core.chunk_first(seq__34811_34830__$1);{
var G__34832 = cljs.core.chunk_rest(seq__34811_34830__$1);
var G__34833 = c__4299__auto___34831;
var G__34834 = cljs.core.count(c__4299__auto___34831);
var G__34835 = (0);
seq__34811_34815 = G__34832;
chunk__34812_34816 = G__34833;
count__34813_34817 = G__34834;
i__34814_34818 = G__34835;
continue;
}
} else
{var k_34836 = cljs.core.first(seq__34811_34830__$1);var obj_34837 = (js_index[k_34836]);var geom_34838 = (obj_34837["geojson"]);var feature_34839 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$679,"Feature",cljs.core.constant$keyword$680,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$681,(obj_34837["id"]),cljs.core.constant$keyword$682,(obj_34837["id"]),cljs.core.constant$keyword$683,(obj_34837["compact_name"])], null)], null));var __34840__$1 = (feature_34839["geometry"] = geom_34838);var __34841__$2 = ((feature_34839["properties"])["index_object"] = obj_34837);features.push(feature_34839);
{
var G__34842 = cljs.core.next(seq__34811_34830__$1);
var G__34843 = null;
var G__34844 = (0);
var G__34845 = (0);
seq__34811_34815 = G__34842;
chunk__34812_34816 = G__34843;
count__34813_34817 = G__34844;
i__34814_34818 = G__34845;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundaryline_collections_path,collection_id){var all_collections_path = ((cljs.core.sequential_QMARK_(boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$676], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundaryline_collections_path,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_34888){var state_val_34889 = (state_34888[(1)]);if((state_val_34889 === (5)))
{var inst_34886 = (state_34888[(2)]);var state_34888__$1 = state_34888;return cljs.core.async.impl.ioc_helpers.return_chan(state_34888__$1,inst_34886);
} else
{if((state_val_34889 === (4)))
{var state_34888__$1 = state_34888;var statearr_34890_34902 = state_34888__$1;(statearr_34890_34902[(2)] = null);
(statearr_34890_34902[(1)] = (5));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34889 === (3)))
{var inst_34876 = (state_34888[(7)]);var inst_34883 = clustermap.boundarylines.rtree_index(rtree,inst_34876);var state_34888__$1 = state_34888;var statearr_34891_34903 = state_34888__$1;(statearr_34891_34903[(2)] = inst_34883);
(statearr_34891_34903[(1)] = (5));
return cljs.core.constant$keyword$653;
} else
{if((state_val_34889 === (2)))
{var inst_34876 = (state_34888[(7)]);var inst_34876__$1 = (state_34888[(2)]);var inst_34877 = (function (){var bl_coll_index = inst_34876__$1;return ((function (bl_coll_index,inst_34876,inst_34876__$1,state_val_34889,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_34876,inst_34876__$1,state_val_34889,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_34878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_34877);var inst_34879 = cljs.core.deref(app_state);var inst_34880 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_34879,index_path);var inst_34881 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34880,inst_34876__$1);var state_34888__$1 = (function (){var statearr_34892 = state_34888;(statearr_34892[(7)] = inst_34876__$1);
(statearr_34892[(8)] = inst_34878);
return statearr_34892;
})();if(inst_34881)
{var statearr_34893_34904 = state_34888__$1;(statearr_34893_34904[(1)] = (3));
} else
{var statearr_34894_34905 = state_34888__$1;(statearr_34894_34905[(1)] = (4));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_34889 === (1)))
{var inst_34874 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$667,true], 0));var state_34888__$1 = state_34888;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34888__$1,(2),inst_34874);
} else
{return null;
}
}
}
}
}
});})(c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5678__auto__,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34898 = [null,null,null,null,null,null,null,null,null];(statearr_34898[(0)] = state_machine__5679__auto__);
(statearr_34898[(1)] = (1));
return statearr_34898;
});
var state_machine__5679__auto____1 = (function (state_34888){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34888);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34899){if((e34899 instanceof Object))
{var ex__5682__auto__ = e34899;var statearr_34900_34906 = state_34888;(statearr_34900_34906[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34888);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e34899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__34907 = state_34888;
state_34888 = G__34907;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34888){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_34901 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundaryline_collections_path,collection_id,x,y){var all_collections_path = ((cljs.core.sequential_QMARK_(boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$678], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$684,x,cljs.core.constant$keyword$685,y,cljs.core.constant$keyword$686,(0),cljs.core.constant$keyword$687,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$681,hit.properties.id,cljs.core.constant$keyword$683,hit.properties.compact_name], null);
});})(all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$679,"Point",cljs.core.constant$keyword$688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
