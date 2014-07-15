// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__35073){var vec__35074 = p__35073;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,boundarylines_path,collection_boundarylines_path,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.cljs$core$IFn$_invoke$arity$variadic(boundaryline_id,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$759,true], 0));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var collection_cache_path = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null)):null);var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (state_35111){var state_val_35112 = (state_35111[(1)]);if((state_val_35112 === (5)))
{var inst_35109 = (state_35111[(2)]);var state_35111__$1 = state_35111;return cljs.core.async.impl.ioc_helpers.return_chan(state_35111__$1,inst_35109);
} else
{if((state_val_35112 === (4)))
{var state_35111__$1 = state_35111;var statearr_35113_35125 = state_35111__$1;(statearr_35113_35125[(2)] = null);
(statearr_35113_35125[(1)] = (5));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35112 === (3)))
{var inst_35101 = (state_35111[(7)]);var inst_35105 = (function (){var bl = inst_35101;return ((function (bl,inst_35101,state_val_35112,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_35101,state_val_35112,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_35106 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path,inst_35105);var state_35111__$1 = state_35111;var statearr_35114_35126 = state_35111__$1;(statearr_35114_35126[(2)] = inst_35106);
(statearr_35114_35126[(1)] = (5));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35112 === (2)))
{var inst_35101 = (state_35111[(7)]);var inst_35101__$1 = (state_35111[(2)]);var inst_35102 = (function (){var bl = inst_35101__$1;return ((function (bl,inst_35101,inst_35101__$1,state_val_35112,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_35101,inst_35101__$1,state_val_35112,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_35103 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path,inst_35102);var state_35111__$1 = (function (){var statearr_35115 = state_35111;(statearr_35115[(8)] = inst_35103);
(statearr_35115[(7)] = inst_35101__$1);
return statearr_35115;
})();if(cljs.core.truth_(collection_cache_path))
{var statearr_35116_35127 = state_35111__$1;(statearr_35116_35127[(1)] = (3));
} else
{var statearr_35117_35128 = state_35111__$1;(statearr_35117_35128[(1)] = (4));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_35112 === (1)))
{var state_35111__$1 = state_35111;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35111__$1,(2),comm);
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
var state_machine__5679__auto____0 = (function (){var statearr_35121 = [null,null,null,null,null,null,null,null,null];(statearr_35121[(0)] = state_machine__5679__auto__);
(statearr_35121[(1)] = (1));
return statearr_35121;
});
var state_machine__5679__auto____1 = (function (state_35111){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35111);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35122){if((e35122 instanceof Object))
{var ex__5682__auto__ = e35122;var statearr_35123_35129 = state_35111;(statearr_35123_35129[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35111);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e35122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__35130 = state_35111;
state_35111 = G__35130;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35111){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var state__5695__auto__ = (function (){var statearr_35124 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35124;
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__35131){var map__35133 = p__35131;var map__35133__$1 = ((cljs.core.seq_QMARK_(map__35133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35133):map__35133);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35133__$1,cljs.core.constant$keyword$767);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$768], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$769], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
} else
{var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$770], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$770], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
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
var p__35131 = null;if (arguments.length > 5) {
  p__35131 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__35131);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__35134){
var app_state = cljs.core.first(arglist__35134);
arglist__35134 = cljs.core.next(arglist__35134);
var boundarylines_path = cljs.core.first(arglist__35134);
arglist__35134 = cljs.core.next(arglist__35134);
var collection_id = cljs.core.first(arglist__35134);
arglist__35134 = cljs.core.next(arglist__35134);
var boundaryline_id = cljs.core.first(arglist__35134);
arglist__35134 = cljs.core.next(arglist__35134);
var zoom = cljs.core.first(arglist__35134);
var p__35131 = cljs.core.rest(arglist__35134);
return get_or_fetch_best_boundaryline__delegate(app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__35131);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$768], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$771], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$772,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__35139_35143 = cljs.core.seq(keys);var chunk__35140_35144 = null;var count__35141_35145 = (0);var i__35142_35146 = (0);while(true){
if((i__35142_35146 < count__35141_35145))
{var k_35147 = chunk__35140_35144.cljs$core$IIndexed$_nth$arity$2(null,i__35142_35146);var obj_35148 = (js_index[k_35147]);var geom_35149 = (obj_35148["geojson"]);var feature_35150 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$772,"Feature",cljs.core.constant$keyword$773,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$774,(obj_35148["id"]),cljs.core.constant$keyword$775,(obj_35148["id"]),cljs.core.constant$keyword$776,(obj_35148["compact_name"])], null)], null));var __35151__$1 = (feature_35150["geometry"] = geom_35149);var __35152__$2 = ((feature_35150["properties"])["index_object"] = obj_35148);features.push(feature_35150);
{
var G__35153 = seq__35139_35143;
var G__35154 = chunk__35140_35144;
var G__35155 = count__35141_35145;
var G__35156 = (i__35142_35146 + (1));
seq__35139_35143 = G__35153;
chunk__35140_35144 = G__35154;
count__35141_35145 = G__35155;
i__35142_35146 = G__35156;
continue;
}
} else
{var temp__4126__auto___35157 = cljs.core.seq(seq__35139_35143);if(temp__4126__auto___35157)
{var seq__35139_35158__$1 = temp__4126__auto___35157;if(cljs.core.chunked_seq_QMARK_(seq__35139_35158__$1))
{var c__4299__auto___35159 = cljs.core.chunk_first(seq__35139_35158__$1);{
var G__35160 = cljs.core.chunk_rest(seq__35139_35158__$1);
var G__35161 = c__4299__auto___35159;
var G__35162 = cljs.core.count(c__4299__auto___35159);
var G__35163 = (0);
seq__35139_35143 = G__35160;
chunk__35140_35144 = G__35161;
count__35141_35145 = G__35162;
i__35142_35146 = G__35163;
continue;
}
} else
{var k_35164 = cljs.core.first(seq__35139_35158__$1);var obj_35165 = (js_index[k_35164]);var geom_35166 = (obj_35165["geojson"]);var feature_35167 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$772,"Feature",cljs.core.constant$keyword$773,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$774,(obj_35165["id"]),cljs.core.constant$keyword$775,(obj_35165["id"]),cljs.core.constant$keyword$776,(obj_35165["compact_name"])], null)], null));var __35168__$1 = (feature_35167["geometry"] = geom_35166);var __35169__$2 = ((feature_35167["properties"])["index_object"] = obj_35165);features.push(feature_35167);
{
var G__35170 = cljs.core.next(seq__35139_35158__$1);
var G__35171 = null;
var G__35172 = (0);
var G__35173 = (0);
seq__35139_35143 = G__35170;
chunk__35140_35144 = G__35171;
count__35141_35145 = G__35172;
i__35142_35146 = G__35173;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$768], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$769], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_35216){var state_val_35217 = (state_35216[(1)]);if((state_val_35217 === (5)))
{var inst_35214 = (state_35216[(2)]);var state_35216__$1 = state_35216;return cljs.core.async.impl.ioc_helpers.return_chan(state_35216__$1,inst_35214);
} else
{if((state_val_35217 === (4)))
{var state_35216__$1 = state_35216;var statearr_35218_35230 = state_35216__$1;(statearr_35218_35230[(2)] = null);
(statearr_35218_35230[(1)] = (5));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35217 === (3)))
{var inst_35204 = (state_35216[(7)]);var inst_35211 = clustermap.boundarylines.rtree_index(rtree,inst_35204);var state_35216__$1 = state_35216;var statearr_35219_35231 = state_35216__$1;(statearr_35219_35231[(2)] = inst_35211);
(statearr_35219_35231[(1)] = (5));
return cljs.core.constant$keyword$745;
} else
{if((state_val_35217 === (2)))
{var inst_35204 = (state_35216[(7)]);var inst_35204__$1 = (state_35216[(2)]);var inst_35205 = (function (){var bl_coll_index = inst_35204__$1;return ((function (bl_coll_index,inst_35204,inst_35204__$1,state_val_35217,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_35204,inst_35204__$1,state_val_35217,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_35206 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_35205);var inst_35207 = cljs.core.deref(app_state);var inst_35208 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_35207,index_path);var inst_35209 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35208,inst_35204__$1);var state_35216__$1 = (function (){var statearr_35220 = state_35216;(statearr_35220[(8)] = inst_35206);
(statearr_35220[(7)] = inst_35204__$1);
return statearr_35220;
})();if(inst_35209)
{var statearr_35221_35232 = state_35216__$1;(statearr_35221_35232[(1)] = (3));
} else
{var statearr_35222_35233 = state_35216__$1;(statearr_35222_35233[(1)] = (4));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_35217 === (1)))
{var inst_35202 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$759,true], 0));var state_35216__$1 = state_35216;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35216__$1,(2),inst_35202);
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
var state_machine__5679__auto____0 = (function (){var statearr_35226 = [null,null,null,null,null,null,null,null,null];(statearr_35226[(0)] = state_machine__5679__auto__);
(statearr_35226[(1)] = (1));
return statearr_35226;
});
var state_machine__5679__auto____1 = (function (state_35216){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35216);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35227){if((e35227 instanceof Object))
{var ex__5682__auto__ = e35227;var statearr_35228_35234 = state_35216;(statearr_35228_35234[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35216);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e35227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__35235 = state_35216;
state_35216 = G__35235;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35216){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_35229 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35229;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$768], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$771], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$777,x,cljs.core.constant$keyword$778,y,cljs.core.constant$keyword$779,(0),cljs.core.constant$keyword$780,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$774,hit.properties.id,cljs.core.constant$keyword$776,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$772,"Point",cljs.core.constant$keyword$781,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
