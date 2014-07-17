// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__36464){var vec__36465 = p__36464;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36465,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36465,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
* fetch a boundaryline for a given tolerance and add it to the collection-specific cache
* and the general cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,boundarylines_path,collection_boundarylines_path,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.cljs$core$IFn$_invoke$arity$variadic(boundaryline_id,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$787,true], 0));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var collection_cache_path = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null)):null);var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (state_36502){var state_val_36503 = (state_36502[(1)]);if((state_val_36503 === (5)))
{var inst_36500 = (state_36502[(2)]);var state_36502__$1 = state_36502;return cljs.core.async.impl.ioc_helpers.return_chan(state_36502__$1,inst_36500);
} else
{if((state_val_36503 === (4)))
{var state_36502__$1 = state_36502;var statearr_36504_36516 = state_36502__$1;(statearr_36504_36516[(2)] = null);
(statearr_36504_36516[(1)] = (5));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36503 === (3)))
{var inst_36492 = (state_36502[(7)]);var inst_36496 = (function (){var bl = inst_36492;return ((function (bl,inst_36492,state_val_36503,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_36492,state_val_36503,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_36497 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path,inst_36496);var state_36502__$1 = state_36502;var statearr_36505_36517 = state_36502__$1;(statearr_36505_36517[(2)] = inst_36497);
(statearr_36505_36517[(1)] = (5));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36503 === (2)))
{var inst_36492 = (state_36502[(7)]);var inst_36492__$1 = (state_36502[(2)]);var inst_36493 = (function (){var bl = inst_36492__$1;return ((function (bl,inst_36492,inst_36492__$1,state_val_36503,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_36492,inst_36492__$1,state_val_36503,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_36494 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path,inst_36493);var state_36502__$1 = (function (){var statearr_36506 = state_36502;(statearr_36506[(7)] = inst_36492__$1);
(statearr_36506[(8)] = inst_36494);
return statearr_36506;
})();if(cljs.core.truth_(collection_cache_path))
{var statearr_36507_36518 = state_36502__$1;(statearr_36507_36518[(1)] = (3));
} else
{var statearr_36508_36519 = state_36502__$1;(statearr_36508_36519[(1)] = (4));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_36503 === (1)))
{var state_36502__$1 = state_36502;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36502__$1,(2),comm);
} else
{return null;
}
}
}
}
}
});})(c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36512 = [null,null,null,null,null,null,null,null,null];(statearr_36512[(0)] = state_machine__5679__auto__);
(statearr_36512[(1)] = (1));
return statearr_36512;
});
var state_machine__5679__auto____1 = (function (state_36502){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36502);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36513){if((e36513 instanceof Object))
{var ex__5682__auto__ = e36513;var statearr_36514_36520 = state_36502;(statearr_36514_36520[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36502);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e36513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__36521 = state_36502;
state_36502 = G__36521;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36502){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var state__5695__auto__ = (function (){var statearr_36515 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36522){var map__36524 = p__36522;var map__36524__$1 = ((cljs.core.seq_QMARK_(map__36524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36524):map__36524);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36524__$1,cljs.core.constant$keyword$796);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$797], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
} else
{var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$799], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$799], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var use_tol = clustermap.boundarylines.best_available_tolerance(zoom,cljs.core.keys(bl_versions));var use_bl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bl_versions,use_tol);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline(app_state,general_cache_path,collection_cache_path,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,var_args){
var p__36522 = null;if (arguments.length > 5) {
  p__36522 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36522);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__36525){
var app_state = cljs.core.first(arglist__36525);
arglist__36525 = cljs.core.next(arglist__36525);
var boundarylines_path = cljs.core.first(arglist__36525);
arglist__36525 = cljs.core.next(arglist__36525);
var collection_id = cljs.core.first(arglist__36525);
arglist__36525 = cljs.core.next(arglist__36525);
var boundaryline_id = cljs.core.first(arglist__36525);
arglist__36525 = cljs.core.next(arglist__36525);
var zoom = cljs.core.first(arglist__36525);
var p__36522 = cljs.core.rest(arglist__36525);
return get_or_fetch_best_boundaryline__delegate(app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36522);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$797], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$800], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$801,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__36530_36534 = cljs.core.seq(keys);var chunk__36531_36535 = null;var count__36532_36536 = (0);var i__36533_36537 = (0);while(true){
if((i__36533_36537 < count__36532_36536))
{var k_36538 = chunk__36531_36535.cljs$core$IIndexed$_nth$arity$2(null,i__36533_36537);var obj_36539 = (js_index[k_36538]);var geom_36540 = (obj_36539["geojson"]);var feature_36541 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$801,"Feature",cljs.core.constant$keyword$802,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$803,(obj_36539["id"]),cljs.core.constant$keyword$804,(obj_36539["id"]),cljs.core.constant$keyword$805,(obj_36539["compact_name"])], null)], null));var __36542__$1 = (feature_36541["geometry"] = geom_36540);var __36543__$2 = ((feature_36541["properties"])["index_object"] = obj_36539);features.push(feature_36541);
{
var G__36544 = seq__36530_36534;
var G__36545 = chunk__36531_36535;
var G__36546 = count__36532_36536;
var G__36547 = (i__36533_36537 + (1));
seq__36530_36534 = G__36544;
chunk__36531_36535 = G__36545;
count__36532_36536 = G__36546;
i__36533_36537 = G__36547;
continue;
}
} else
{var temp__4126__auto___36548 = cljs.core.seq(seq__36530_36534);if(temp__4126__auto___36548)
{var seq__36530_36549__$1 = temp__4126__auto___36548;if(cljs.core.chunked_seq_QMARK_(seq__36530_36549__$1))
{var c__4299__auto___36550 = cljs.core.chunk_first(seq__36530_36549__$1);{
var G__36551 = cljs.core.chunk_rest(seq__36530_36549__$1);
var G__36552 = c__4299__auto___36550;
var G__36553 = cljs.core.count(c__4299__auto___36550);
var G__36554 = (0);
seq__36530_36534 = G__36551;
chunk__36531_36535 = G__36552;
count__36532_36536 = G__36553;
i__36533_36537 = G__36554;
continue;
}
} else
{var k_36555 = cljs.core.first(seq__36530_36549__$1);var obj_36556 = (js_index[k_36555]);var geom_36557 = (obj_36556["geojson"]);var feature_36558 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$801,"Feature",cljs.core.constant$keyword$802,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$803,(obj_36556["id"]),cljs.core.constant$keyword$804,(obj_36556["id"]),cljs.core.constant$keyword$805,(obj_36556["compact_name"])], null)], null));var __36559__$1 = (feature_36558["geometry"] = geom_36557);var __36560__$2 = ((feature_36558["properties"])["index_object"] = obj_36556);features.push(feature_36558);
{
var G__36561 = cljs.core.next(seq__36530_36549__$1);
var G__36562 = null;
var G__36563 = (0);
var G__36564 = (0);
seq__36530_36534 = G__36561;
chunk__36531_36535 = G__36562;
count__36532_36536 = G__36563;
i__36533_36537 = G__36564;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$797], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_36607){var state_val_36608 = (state_36607[(1)]);if((state_val_36608 === (5)))
{var inst_36605 = (state_36607[(2)]);var state_36607__$1 = state_36607;return cljs.core.async.impl.ioc_helpers.return_chan(state_36607__$1,inst_36605);
} else
{if((state_val_36608 === (4)))
{var state_36607__$1 = state_36607;var statearr_36609_36621 = state_36607__$1;(statearr_36609_36621[(2)] = null);
(statearr_36609_36621[(1)] = (5));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36608 === (3)))
{var inst_36595 = (state_36607[(7)]);var inst_36602 = clustermap.boundarylines.rtree_index(rtree,inst_36595);var state_36607__$1 = state_36607;var statearr_36610_36622 = state_36607__$1;(statearr_36610_36622[(2)] = inst_36602);
(statearr_36610_36622[(1)] = (5));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36608 === (2)))
{var inst_36595 = (state_36607[(7)]);var inst_36595__$1 = (state_36607[(2)]);var inst_36596 = (function (){var bl_coll_index = inst_36595__$1;return ((function (bl_coll_index,inst_36595,inst_36595__$1,state_val_36608,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_36595,inst_36595__$1,state_val_36608,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_36597 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_36596);var inst_36598 = cljs.core.deref(app_state);var inst_36599 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_36598,index_path);var inst_36600 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36599,inst_36595__$1);var state_36607__$1 = (function (){var statearr_36611 = state_36607;(statearr_36611[(7)] = inst_36595__$1);
(statearr_36611[(8)] = inst_36597);
return statearr_36611;
})();if(inst_36600)
{var statearr_36612_36623 = state_36607__$1;(statearr_36612_36623[(1)] = (3));
} else
{var statearr_36613_36624 = state_36607__$1;(statearr_36613_36624[(1)] = (4));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_36608 === (1)))
{var inst_36593 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$787,true], 0));var state_36607__$1 = state_36607;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36607__$1,(2),inst_36593);
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
var state_machine__5679__auto____0 = (function (){var statearr_36617 = [null,null,null,null,null,null,null,null,null];(statearr_36617[(0)] = state_machine__5679__auto__);
(statearr_36617[(1)] = (1));
return statearr_36617;
});
var state_machine__5679__auto____1 = (function (state_36607){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36607);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36618){if((e36618 instanceof Object))
{var ex__5682__auto__ = e36618;var statearr_36619_36625 = state_36607;(statearr_36619_36625[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36607);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e36618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__36626 = state_36607;
state_36607 = G__36626;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36607){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_36620 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36620;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$797], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$800], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$806,x,cljs.core.constant$keyword$807,y,cljs.core.constant$keyword$808,(0),cljs.core.constant$keyword$809,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$803,hit.properties.id,cljs.core.constant$keyword$805,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$801,"Point",cljs.core.constant$keyword$810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
