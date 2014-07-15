// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__46028){var vec__46029 = p__46028;var z = cljs.core.nth.call(null,vec__46029,(0),null);var t = cljs.core.nth.call(null,vec__46029,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
return (function (state_46049){var state_val_46050 = (state_46049[(1)]);if((state_val_46050 === (2)))
{var inst_46045 = (state_46049[(2)]);var inst_46046 = (function (){var bl = inst_46045;return ((function (bl,inst_46045,state_val_46050,c__5693__auto__,comm,use_korks,path){
return (function (old){return bl;
});
;})(bl,inst_46045,state_val_46050,c__5693__auto__,comm,use_korks,path))
})();var inst_46047 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,path,inst_46046);var state_46049__$1 = state_46049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46049__$1,inst_46047);
} else
{if((state_val_46050 === (1)))
{var state_46049__$1 = state_46049;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46049__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,use_korks,path))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,use_korks,path){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46054 = [null,null,null,null,null,null,null];(statearr_46054[(0)] = state_machine__5679__auto__);
(statearr_46054[(1)] = (1));
return statearr_46054;
});
var state_machine__5679__auto____1 = (function (state_46049){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46049);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46055){if((e46055 instanceof Object))
{var ex__5682__auto__ = e46055;var statearr_46056_46058 = state_46049;(statearr_46056_46058[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46049);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46059 = state_46049;
state_46049 = G__46059;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46049){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,use_korks,path))
})();var state__5695__auto__ = (function (){var statearr_46057 = f__5694__auto__.call(null);(statearr_46057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_46057;
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,collection_id,boundaryline_id,zoom,p__46060){var map__46062 = p__46060;var map__46062__$1 = ((cljs.core.seq_QMARK_.call(null,map__46062))?cljs.core.apply.call(null,cljs.core.hash_map,map__46062):map__46062);var min_zoom = cljs.core.get.call(null,map__46062__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
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
var p__46060 = null;if (arguments.length > 5) {
  p__46060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,collection_id,boundaryline_id,zoom,p__46060);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__46063){
var app_state = cljs.core.first(arglist__46063);
arglist__46063 = cljs.core.next(arglist__46063);
var korks = cljs.core.first(arglist__46063);
arglist__46063 = cljs.core.next(arglist__46063);
var collection_id = cljs.core.first(arglist__46063);
arglist__46063 = cljs.core.next(arglist__46063);
var boundaryline_id = cljs.core.first(arglist__46063);
arglist__46063 = cljs.core.next(arglist__46063);
var zoom = cljs.core.first(arglist__46063);
var p__46060 = cljs.core.rest(arglist__46063);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,collection_id,boundaryline_id,zoom,p__46060);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__46068_46072 = cljs.core.seq.call(null,keys);var chunk__46069_46073 = null;var count__46070_46074 = (0);var i__46071_46075 = (0);while(true){
if((i__46071_46075 < count__46070_46074))
{var k_46076 = cljs.core._nth.call(null,chunk__46069_46073,i__46071_46075);var obj_46077 = (js_index[k_46076]);var geom_46078 = (obj_46077["geojson"]);var feature_46079 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_46077["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_46077["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_46077["compact_name"])], null)], null));var __46080__$1 = (feature_46079["geometry"] = geom_46078);var __46081__$2 = ((feature_46079["properties"])["index_object"] = obj_46077);features.push(feature_46079);
{
var G__46082 = seq__46068_46072;
var G__46083 = chunk__46069_46073;
var G__46084 = count__46070_46074;
var G__46085 = (i__46071_46075 + (1));
seq__46068_46072 = G__46082;
chunk__46069_46073 = G__46083;
count__46070_46074 = G__46084;
i__46071_46075 = G__46085;
continue;
}
} else
{var temp__4126__auto___46086 = cljs.core.seq.call(null,seq__46068_46072);if(temp__4126__auto___46086)
{var seq__46068_46087__$1 = temp__4126__auto___46086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46068_46087__$1))
{var c__4299__auto___46088 = cljs.core.chunk_first.call(null,seq__46068_46087__$1);{
var G__46089 = cljs.core.chunk_rest.call(null,seq__46068_46087__$1);
var G__46090 = c__4299__auto___46088;
var G__46091 = cljs.core.count.call(null,c__4299__auto___46088);
var G__46092 = (0);
seq__46068_46072 = G__46089;
chunk__46069_46073 = G__46090;
count__46070_46074 = G__46091;
i__46071_46075 = G__46092;
continue;
}
} else
{var k_46093 = cljs.core.first.call(null,seq__46068_46087__$1);var obj_46094 = (js_index[k_46093]);var geom_46095 = (obj_46094["geojson"]);var feature_46096 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_46094["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_46094["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_46094["compact_name"])], null)], null));var __46097__$1 = (feature_46096["geometry"] = geom_46095);var __46098__$2 = ((feature_46096["properties"])["index_object"] = obj_46094);features.push(feature_46096);
{
var G__46099 = cljs.core.next.call(null,seq__46068_46087__$1);
var G__46100 = null;
var G__46101 = (0);
var G__46102 = (0);
seq__46068_46072 = G__46099;
chunk__46069_46073 = G__46100;
count__46070_46074 = G__46101;
i__46071_46075 = G__46102;
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
return (function (state_46145){var state_val_46146 = (state_46145[(1)]);if((state_val_46146 === (5)))
{var inst_46143 = (state_46145[(2)]);var state_46145__$1 = state_46145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46145__$1,inst_46143);
} else
{if((state_val_46146 === (4)))
{var state_46145__$1 = state_46145;var statearr_46147_46159 = state_46145__$1;(statearr_46147_46159[(2)] = null);
(statearr_46147_46159[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46146 === (3)))
{var inst_46133 = (state_46145[(7)]);var inst_46140 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_46133);var state_46145__$1 = state_46145;var statearr_46148_46160 = state_46145__$1;(statearr_46148_46160[(2)] = inst_46140);
(statearr_46148_46160[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46146 === (2)))
{var inst_46133 = (state_46145[(7)]);var inst_46133__$1 = (state_46145[(2)]);var inst_46134 = (function (){var bl_coll_index = inst_46133__$1;return ((function (bl_coll_index,inst_46133,inst_46133__$1,state_val_46146,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_46133,inst_46133__$1,state_val_46146,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_46135 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_46134);var inst_46136 = cljs.core.deref.call(null,app_state);var inst_46137 = cljs.core.get_in.call(null,inst_46136,index_path);var inst_46138 = cljs.core._EQ_.call(null,inst_46137,inst_46133__$1);var state_46145__$1 = (function (){var statearr_46149 = state_46145;(statearr_46149[(7)] = inst_46133__$1);
(statearr_46149[(8)] = inst_46135);
return statearr_46149;
})();if(inst_46138)
{var statearr_46150_46161 = state_46145__$1;(statearr_46150_46161[(1)] = (3));
} else
{var statearr_46151_46162 = state_46145__$1;(statearr_46151_46162[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46146 === (1)))
{var inst_46131 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_46145__$1 = state_46145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46145__$1,(2),inst_46131);
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
var state_machine__5679__auto____0 = (function (){var statearr_46155 = [null,null,null,null,null,null,null,null,null];(statearr_46155[(0)] = state_machine__5679__auto__);
(statearr_46155[(1)] = (1));
return statearr_46155;
});
var state_machine__5679__auto____1 = (function (state_46145){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46145);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46156){if((e46156 instanceof Object))
{var ex__5682__auto__ = e46156;var statearr_46157_46163 = state_46145;(statearr_46157_46163[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46145);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46164 = state_46145;
state_46145 = G__46164;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46145){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_46158 = f__5694__auto__.call(null);(statearr_46158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_46158;
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

//# sourceMappingURL=boundarylines.js.map