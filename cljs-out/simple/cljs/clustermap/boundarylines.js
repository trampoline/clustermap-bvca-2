// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__23514){var vec__23515 = p__23514;var z = cljs.core.nth.call(null,vec__23515,(0),null);var t = cljs.core.nth.call(null,vec__23515,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.call(null,boundaryline_id,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.call(null,use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,use_korks,path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,use_korks,path){
return (function (state_23535){var state_val_23536 = (state_23535[(1)]);if((state_val_23536 === (2)))
{var inst_23531 = (state_23535[(2)]);var inst_23532 = (function (){var bl = inst_23531;return ((function (bl,inst_23531,state_val_23536,c__5693__auto__,comm,use_korks,path){
return (function (old){return bl;
});
;})(bl,inst_23531,state_val_23536,c__5693__auto__,comm,use_korks,path))
})();var inst_23533 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,path,inst_23532);var state_23535__$1 = state_23535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23535__$1,inst_23533);
} else
{if((state_val_23536 === (1)))
{var state_23535__$1 = state_23535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23535__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,use_korks,path))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,use_korks,path){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_23540 = [null,null,null,null,null,null,null];(statearr_23540[(0)] = state_machine__5679__auto__);
(statearr_23540[(1)] = (1));
return statearr_23540;
});
var state_machine__5679__auto____1 = (function (state_23535){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_23535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e23541){if((e23541 instanceof Object))
{var ex__5682__auto__ = e23541;var statearr_23542_23544 = state_23535;(statearr_23542_23544[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23545 = state_23535;
state_23535 = G__23545;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_23535){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_23535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,use_korks,path))
})();var state__5695__auto__ = (function (){var statearr_23543 = f__5694__auto__.call(null);(statearr_23543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_23543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,use_korks,path))
);
return c__5693__auto__;
});
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,collection_id,boundaryline_id,zoom,p__23546){var map__23548 = p__23546;var map__23548__$1 = ((cljs.core.seq_QMARK_.call(null,map__23548))?cljs.core.apply.call(null,cljs.core.hash_map,map__23548):map__23548);var min_zoom = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index.call(null,index,boundaryline_id);
} else
{var boundarylines_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var boundarylines = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),boundarylines_path);var bl_versions = cljs.core.get.call(null,boundarylines,boundaryline_id);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get_in.call(null,boundarylines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,use_tol], null));if(cljs.core.not_EQ_.call(null,i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline.call(null,app_state,boundarylines_path,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,index,boundaryline_id);
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,korks,collection_id,boundaryline_id,zoom,var_args){
var p__23546 = null;if (arguments.length > 5) {
  p__23546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,collection_id,boundaryline_id,zoom,p__23546);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__23549){
var app_state = cljs.core.first(arglist__23549);
arglist__23549 = cljs.core.next(arglist__23549);
var korks = cljs.core.first(arglist__23549);
arglist__23549 = cljs.core.next(arglist__23549);
var collection_id = cljs.core.first(arglist__23549);
arglist__23549 = cljs.core.next(arglist__23549);
var boundaryline_id = cljs.core.first(arglist__23549);
arglist__23549 = cljs.core.next(arglist__23549);
var zoom = cljs.core.first(arglist__23549);
var p__23546 = cljs.core.rest(arglist__23549);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,collection_id,boundaryline_id,zoom,p__23546);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundaryline_collections_path,collection_id){var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rtree_path,((function (all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23554_23558 = cljs.core.seq.call(null,keys);var chunk__23555_23559 = null;var count__23556_23560 = (0);var i__23557_23561 = (0);while(true){
if((i__23557_23561 < count__23556_23560))
{var k_23562 = cljs.core._nth.call(null,chunk__23555_23559,i__23557_23561);var obj_23563 = (js_index[k_23562]);var geom_23564 = (obj_23563["geojson"]);var feature_23565 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23563["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23563["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23563["compact_name"])], null)], null));var __23566__$1 = (feature_23565["geometry"] = geom_23564);var __23567__$2 = ((feature_23565["properties"])["index_object"] = obj_23563);features.push(feature_23565);
{
var G__23568 = seq__23554_23558;
var G__23569 = chunk__23555_23559;
var G__23570 = count__23556_23560;
var G__23571 = (i__23557_23561 + (1));
seq__23554_23558 = G__23568;
chunk__23555_23559 = G__23569;
count__23556_23560 = G__23570;
i__23557_23561 = G__23571;
continue;
}
} else
{var temp__4126__auto___23572 = cljs.core.seq.call(null,seq__23554_23558);if(temp__4126__auto___23572)
{var seq__23554_23573__$1 = temp__4126__auto___23572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23554_23573__$1))
{var c__4299__auto___23574 = cljs.core.chunk_first.call(null,seq__23554_23573__$1);{
var G__23575 = cljs.core.chunk_rest.call(null,seq__23554_23573__$1);
var G__23576 = c__4299__auto___23574;
var G__23577 = cljs.core.count.call(null,c__4299__auto___23574);
var G__23578 = (0);
seq__23554_23558 = G__23575;
chunk__23555_23559 = G__23576;
count__23556_23560 = G__23577;
i__23557_23561 = G__23578;
continue;
}
} else
{var k_23579 = cljs.core.first.call(null,seq__23554_23573__$1);var obj_23580 = (js_index[k_23579]);var geom_23581 = (obj_23580["geojson"]);var feature_23582 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23580["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23580["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23580["compact_name"])], null)], null));var __23583__$1 = (feature_23582["geometry"] = geom_23581);var __23584__$2 = ((feature_23582["properties"])["index_object"] = obj_23580);features.push(feature_23582);
{
var G__23585 = cljs.core.next.call(null,seq__23554_23573__$1);
var G__23586 = null;
var G__23587 = (0);
var G__23588 = (0);
seq__23554_23558 = G__23585;
chunk__23555_23559 = G__23586;
count__23556_23560 = G__23587;
i__23557_23561 = G__23588;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundaryline_collections_path,collection_id){var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree.call(null,app_state,boundaryline_collections_path,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_23631){var state_val_23632 = (state_23631[(1)]);if((state_val_23632 === (5)))
{var inst_23629 = (state_23631[(2)]);var state_23631__$1 = state_23631;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23631__$1,inst_23629);
} else
{if((state_val_23632 === (4)))
{var state_23631__$1 = state_23631;var statearr_23633_23645 = state_23631__$1;(statearr_23633_23645[(2)] = null);
(statearr_23633_23645[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23632 === (3)))
{var inst_23619 = (state_23631[(7)]);var inst_23626 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_23619);var state_23631__$1 = state_23631;var statearr_23634_23646 = state_23631__$1;(statearr_23634_23646[(2)] = inst_23626);
(statearr_23634_23646[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23632 === (2)))
{var inst_23619 = (state_23631[(7)]);var inst_23619__$1 = (state_23631[(2)]);var inst_23620 = (function (){var bl_coll_index = inst_23619__$1;return ((function (bl_coll_index,inst_23619,inst_23619__$1,state_val_23632,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_23619,inst_23619__$1,state_val_23632,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_23621 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_23620);var inst_23622 = cljs.core.deref.call(null,app_state);var inst_23623 = cljs.core.get_in.call(null,inst_23622,index_path);var inst_23624 = cljs.core._EQ_.call(null,inst_23623,inst_23619__$1);var state_23631__$1 = (function (){var statearr_23635 = state_23631;(statearr_23635[(7)] = inst_23619__$1);
(statearr_23635[(8)] = inst_23621);
return statearr_23635;
})();if(inst_23624)
{var statearr_23636_23647 = state_23631__$1;(statearr_23636_23647[(1)] = (3));
} else
{var statearr_23637_23648 = state_23631__$1;(statearr_23637_23648[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23632 === (1)))
{var inst_23617 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_23631__$1 = state_23631;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23631__$1,(2),inst_23617);
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
var state_machine__5679__auto____0 = (function (){var statearr_23641 = [null,null,null,null,null,null,null,null,null];(statearr_23641[(0)] = state_machine__5679__auto__);
(statearr_23641[(1)] = (1));
return statearr_23641;
});
var state_machine__5679__auto____1 = (function (state_23631){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_23631);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e23642){if((e23642 instanceof Object))
{var ex__5682__auto__ = e23642;var statearr_23643_23649 = state_23631;(statearr_23643_23649[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23631);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23650 = state_23631;
state_23631 = G__23650;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_23631){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_23631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_23644 = f__5694__auto__.call(null);(statearr_23644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_23644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundaryline_collections_path,collection_id,x,y){var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));var rtree = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null))):null);return cljs.core.map.call(null,((function (all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hit.properties.id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),hit.properties.compact_name], null);
});})(all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.call(null,((function (all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
