// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__12572){var vec__12573 = p__12572;var z = cljs.core.nth.call(null,vec__12573,(0),null);var t = cljs.core.nth.call(null,vec__12573,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
* fetch a boundaryline for a given tolerance and add it to the collection-specific cache
* and the general cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,boundarylines_path,collection_boundarylines_path,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.call(null,boundaryline_id,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var collection_cache_path = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null)):null);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (state_12610){var state_val_12611 = (state_12610[(1)]);if((state_val_12611 === (5)))
{var inst_12608 = (state_12610[(2)]);var state_12610__$1 = state_12610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12610__$1,inst_12608);
} else
{if((state_val_12611 === (4)))
{var state_12610__$1 = state_12610;var statearr_12612_12624 = state_12610__$1;(statearr_12612_12624[(2)] = null);
(statearr_12612_12624[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12611 === (3)))
{var inst_12600 = (state_12610[(7)]);var inst_12604 = (function (){var bl = inst_12600;return ((function (bl,inst_12600,state_val_12611,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_12600,state_val_12611,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_12605 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path,inst_12604);var state_12610__$1 = state_12610;var statearr_12613_12625 = state_12610__$1;(statearr_12613_12625[(2)] = inst_12605);
(statearr_12613_12625[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12611 === (2)))
{var inst_12600 = (state_12610[(7)]);var inst_12600__$1 = (state_12610[(2)]);var inst_12601 = (function (){var bl = inst_12600__$1;return ((function (bl,inst_12600,inst_12600__$1,state_val_12611,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_12600,inst_12600__$1,state_val_12611,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_12602 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path,inst_12601);var state_12610__$1 = (function (){var statearr_12614 = state_12610;(statearr_12614[(8)] = inst_12602);
(statearr_12614[(7)] = inst_12600__$1);
return statearr_12614;
})();if(cljs.core.truth_(collection_cache_path))
{var statearr_12615_12626 = state_12610__$1;(statearr_12615_12626[(1)] = (3));
} else
{var statearr_12616_12627 = state_12610__$1;(statearr_12616_12627[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12611 === (1)))
{var state_12610__$1 = state_12610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12610__$1,(2),comm);
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
var state_machine__5679__auto____0 = (function (){var statearr_12620 = [null,null,null,null,null,null,null,null,null];(statearr_12620[(0)] = state_machine__5679__auto__);
(statearr_12620[(1)] = (1));
return statearr_12620;
});
var state_machine__5679__auto____1 = (function (state_12610){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12610);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12621){if((e12621 instanceof Object))
{var ex__5682__auto__ = e12621;var statearr_12622_12628 = state_12610;(statearr_12622_12628[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12629 = state_12610;
state_12610 = G__12629;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12610){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var state__5695__auto__ = (function (){var statearr_12623 = f__5694__auto__.call(null);(statearr_12623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_12623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__12630){var map__12632 = p__12630;var map__12632__$1 = ((cljs.core.seq_QMARK_.call(null,map__12632))?cljs.core.apply.call(null,cljs.core.hash_map,map__12632):map__12632);var min_zoom = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
} else
{var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get.call(null,bl_versions,use_tol);if(cljs.core.not_EQ_.call(null,i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline.call(null,app_state,general_cache_path,collection_cache_path,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,var_args){
var p__12630 = null;if (arguments.length > 5) {
  p__12630 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__12630);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__12633){
var app_state = cljs.core.first(arglist__12633);
arglist__12633 = cljs.core.next(arglist__12633);
var boundarylines_path = cljs.core.first(arglist__12633);
arglist__12633 = cljs.core.next(arglist__12633);
var collection_id = cljs.core.first(arglist__12633);
arglist__12633 = cljs.core.next(arglist__12633);
var boundaryline_id = cljs.core.first(arglist__12633);
arglist__12633 = cljs.core.next(arglist__12633);
var zoom = cljs.core.first(arglist__12633);
var p__12630 = cljs.core.rest(arglist__12633);
return get_or_fetch_best_boundaryline__delegate(app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__12630);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12638_12642 = cljs.core.seq.call(null,keys);var chunk__12639_12643 = null;var count__12640_12644 = (0);var i__12641_12645 = (0);while(true){
if((i__12641_12645 < count__12640_12644))
{var k_12646 = cljs.core._nth.call(null,chunk__12639_12643,i__12641_12645);var obj_12647 = (js_index[k_12646]);var geom_12648 = (obj_12647["geojson"]);var feature_12649 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12647["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12647["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12647["compact_name"])], null)], null));var __12650__$1 = (feature_12649["geometry"] = geom_12648);var __12651__$2 = ((feature_12649["properties"])["index_object"] = obj_12647);features.push(feature_12649);
{
var G__12652 = seq__12638_12642;
var G__12653 = chunk__12639_12643;
var G__12654 = count__12640_12644;
var G__12655 = (i__12641_12645 + (1));
seq__12638_12642 = G__12652;
chunk__12639_12643 = G__12653;
count__12640_12644 = G__12654;
i__12641_12645 = G__12655;
continue;
}
} else
{var temp__4126__auto___12656 = cljs.core.seq.call(null,seq__12638_12642);if(temp__4126__auto___12656)
{var seq__12638_12657__$1 = temp__4126__auto___12656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12638_12657__$1))
{var c__4299__auto___12658 = cljs.core.chunk_first.call(null,seq__12638_12657__$1);{
var G__12659 = cljs.core.chunk_rest.call(null,seq__12638_12657__$1);
var G__12660 = c__4299__auto___12658;
var G__12661 = cljs.core.count.call(null,c__4299__auto___12658);
var G__12662 = (0);
seq__12638_12642 = G__12659;
chunk__12639_12643 = G__12660;
count__12640_12644 = G__12661;
i__12641_12645 = G__12662;
continue;
}
} else
{var k_12663 = cljs.core.first.call(null,seq__12638_12657__$1);var obj_12664 = (js_index[k_12663]);var geom_12665 = (obj_12664["geojson"]);var feature_12666 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12664["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12664["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12664["compact_name"])], null)], null));var __12667__$1 = (feature_12666["geometry"] = geom_12665);var __12668__$2 = ((feature_12666["properties"])["index_object"] = obj_12664);features.push(feature_12666);
{
var G__12669 = cljs.core.next.call(null,seq__12638_12657__$1);
var G__12670 = null;
var G__12671 = (0);
var G__12672 = (0);
seq__12638_12642 = G__12669;
chunk__12639_12643 = G__12670;
count__12640_12644 = G__12671;
i__12641_12645 = G__12672;
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
return (function (state_12715){var state_val_12716 = (state_12715[(1)]);if((state_val_12716 === (5)))
{var inst_12713 = (state_12715[(2)]);var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12715__$1,inst_12713);
} else
{if((state_val_12716 === (4)))
{var state_12715__$1 = state_12715;var statearr_12717_12729 = state_12715__$1;(statearr_12717_12729[(2)] = null);
(statearr_12717_12729[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12716 === (3)))
{var inst_12703 = (state_12715[(7)]);var inst_12710 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_12703);var state_12715__$1 = state_12715;var statearr_12718_12730 = state_12715__$1;(statearr_12718_12730[(2)] = inst_12710);
(statearr_12718_12730[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12716 === (2)))
{var inst_12703 = (state_12715[(7)]);var inst_12703__$1 = (state_12715[(2)]);var inst_12704 = (function (){var bl_coll_index = inst_12703__$1;return ((function (bl_coll_index,inst_12703,inst_12703__$1,state_val_12716,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_12703,inst_12703__$1,state_val_12716,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_12705 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_12704);var inst_12706 = cljs.core.deref.call(null,app_state);var inst_12707 = cljs.core.get_in.call(null,inst_12706,index_path);var inst_12708 = cljs.core._EQ_.call(null,inst_12707,inst_12703__$1);var state_12715__$1 = (function (){var statearr_12719 = state_12715;(statearr_12719[(8)] = inst_12705);
(statearr_12719[(7)] = inst_12703__$1);
return statearr_12719;
})();if(inst_12708)
{var statearr_12720_12731 = state_12715__$1;(statearr_12720_12731[(1)] = (3));
} else
{var statearr_12721_12732 = state_12715__$1;(statearr_12721_12732[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12716 === (1)))
{var inst_12701 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12715__$1,(2),inst_12701);
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
var state_machine__5679__auto____0 = (function (){var statearr_12725 = [null,null,null,null,null,null,null,null,null];(statearr_12725[(0)] = state_machine__5679__auto__);
(statearr_12725[(1)] = (1));
return statearr_12725;
});
var state_machine__5679__auto____1 = (function (state_12715){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12715);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12726){if((e12726 instanceof Object))
{var ex__5682__auto__ = e12726;var statearr_12727_12733 = state_12715;(statearr_12727_12733[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12734 = state_12715;
state_12715 = G__12734;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12715){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_12728 = f__5694__auto__.call(null);(statearr_12728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_12728;
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
