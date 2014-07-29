// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__12698){var vec__12699 = p__12698;var z = cljs.core.nth.call(null,vec__12699,(0),null);var t = cljs.core.nth.call(null,vec__12699,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__12704 = cljs.core.seq.call(null,boundarylines);var chunk__12705 = null;var count__12706 = (0);var i__12707 = (0);while(true){
if((i__12707 < count__12706))
{var bl = cljs.core._nth.call(null,chunk__12705,i__12707);var boundaryline_id_12708 = (bl["id"]);var tolerance_12709 = (bl["tolerance"]);var general_cache_path_12710 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12708,tolerance_12709], null));var collection_cache_path_12711 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12708,tolerance_12709], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12710,((function (seq__12704,chunk__12705,count__12706,i__12707,boundaryline_id_12708,tolerance_12709,general_cache_path_12710,collection_cache_path_12711,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12704,chunk__12705,count__12706,i__12707,boundaryline_id_12708,tolerance_12709,general_cache_path_12710,collection_cache_path_12711,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12711))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12711,((function (seq__12704,chunk__12705,count__12706,i__12707,boundaryline_id_12708,tolerance_12709,general_cache_path_12710,collection_cache_path_12711,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12704,chunk__12705,count__12706,i__12707,boundaryline_id_12708,tolerance_12709,general_cache_path_12710,collection_cache_path_12711,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12712 = seq__12704;
var G__12713 = chunk__12705;
var G__12714 = count__12706;
var G__12715 = (i__12707 + (1));
seq__12704 = G__12712;
chunk__12705 = G__12713;
count__12706 = G__12714;
i__12707 = G__12715;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12704);if(temp__4126__auto__)
{var seq__12704__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12704__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12704__$1);{
var G__12716 = cljs.core.chunk_rest.call(null,seq__12704__$1);
var G__12717 = c__4299__auto__;
var G__12718 = cljs.core.count.call(null,c__4299__auto__);
var G__12719 = (0);
seq__12704 = G__12716;
chunk__12705 = G__12717;
count__12706 = G__12718;
i__12707 = G__12719;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__12704__$1);var boundaryline_id_12720 = (bl["id"]);var tolerance_12721 = (bl["tolerance"]);var general_cache_path_12722 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12720,tolerance_12721], null));var collection_cache_path_12723 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12720,tolerance_12721], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12722,((function (seq__12704,chunk__12705,count__12706,i__12707,boundaryline_id_12720,tolerance_12721,general_cache_path_12722,collection_cache_path_12723,bl,seq__12704__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12704,chunk__12705,count__12706,i__12707,boundaryline_id_12720,tolerance_12721,general_cache_path_12722,collection_cache_path_12723,bl,seq__12704__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12723))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12723,((function (seq__12704,chunk__12705,count__12706,i__12707,boundaryline_id_12720,tolerance_12721,general_cache_path_12722,collection_cache_path_12723,bl,seq__12704__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12704,chunk__12705,count__12706,i__12707,boundaryline_id_12720,tolerance_12721,general_cache_path_12722,collection_cache_path_12723,bl,seq__12704__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12724 = cljs.core.next.call(null,seq__12704__$1);
var G__12725 = null;
var G__12726 = (0);
var G__12727 = (0);
seq__12704 = G__12724;
chunk__12705 = G__12725;
count__12706 = G__12726;
i__12707 = G__12727;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12728){var map__12744 = p__12728;var map__12744__$1 = ((cljs.core.seq_QMARK_.call(null,map__12744))?cljs.core.apply.call(null,cljs.core.hash_map,map__12744):map__12744);var bounds = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,map__12744,map__12744__$1,bounds,boundaryline_ids){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,map__12744,map__12744__$1,bounds,boundaryline_ids){
return (function (state_12749){var state_val_12750 = (state_12749[(1)]);if((state_val_12750 === (2)))
{var inst_12746 = (state_12749[(2)]);var inst_12747 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_12746);var state_12749__$1 = (function (){var statearr_12751 = state_12749;(statearr_12751[(7)] = inst_12747);
return statearr_12751;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12749__$1,true);
} else
{if((state_val_12750 === (1)))
{var state_12749__$1 = state_12749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12749__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,map__12744,map__12744__$1,bounds,boundaryline_ids))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,map__12744,map__12744__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12755 = [null,null,null,null,null,null,null,null];(statearr_12755[(0)] = state_machine__5679__auto__);
(statearr_12755[(1)] = (1));
return statearr_12755;
});
var state_machine__5679__auto____1 = (function (state_12749){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12756){if((e12756 instanceof Object))
{var ex__5682__auto__ = e12756;var statearr_12757_12759 = state_12749;(statearr_12757_12759[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12760 = state_12749;
state_12749 = G__12760;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12749){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,map__12744,map__12744__$1,bounds,boundaryline_ids))
})();var state__5695__auto__ = (function (){var statearr_12758 = f__5694__auto__.call(null);(statearr_12758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_12758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,map__12744,map__12744__$1,bounds,boundaryline_ids))
);
return c__5693__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__12728 = null;if (arguments.length > 5) {
  p__12728 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12728);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__12761){
var app_state = cljs.core.first(arglist__12761);
arglist__12761 = cljs.core.next(arglist__12761);
var boundarylines_path = cljs.core.first(arglist__12761);
arglist__12761 = cljs.core.next(arglist__12761);
var collection_boundarylines_path = cljs.core.first(arglist__12761);
arglist__12761 = cljs.core.next(arglist__12761);
var collection_id = cljs.core.first(arglist__12761);
arglist__12761 = cljs.core.next(arglist__12761);
var tolerance = cljs.core.first(arglist__12761);
var p__12728 = cljs.core.rest(arglist__12761);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12728);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__12762){var map__12767 = p__12762;var map__12767__$1 = ((cljs.core.seq_QMARK_.call(null,map__12767))?cljs.core.apply.call(null,cljs.core.hash_map,map__12767):map__12767);var boundaryline_ids = cljs.core.get.call(null,map__12767__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12767,map__12767__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12767,map__12767__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12767,map__12767__$1,boundaryline_ids){
return (function (p__12768){var vec__12769 = p__12768;var blid = cljs.core.nth.call(null,vec__12769,(0),null);var vec__12770 = cljs.core.nth.call(null,vec__12769,(1),null);var tol = cljs.core.nth.call(null,vec__12770,(0),null);var bl = cljs.core.nth.call(null,vec__12770,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12767,map__12767__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__12762 = null;if (arguments.length > 5) {
  p__12762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__12762);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__12771){
var app_state = cljs.core.first(arglist__12771);
arglist__12771 = cljs.core.next(arglist__12771);
var boundarylines_path = cljs.core.first(arglist__12771);
arglist__12771 = cljs.core.next(arglist__12771);
var collection_id = cljs.core.first(arglist__12771);
arglist__12771 = cljs.core.next(arglist__12771);
var bounds = cljs.core.first(arglist__12771);
arglist__12771 = cljs.core.next(arglist__12771);
var zoom = cljs.core.first(arglist__12771);
var p__12762 = cljs.core.rest(arglist__12771);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__12762);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12776_12780 = cljs.core.seq.call(null,keys);var chunk__12777_12781 = null;var count__12778_12782 = (0);var i__12779_12783 = (0);while(true){
if((i__12779_12783 < count__12778_12782))
{var k_12784 = cljs.core._nth.call(null,chunk__12777_12781,i__12779_12783);var obj_12785 = (js_index[k_12784]);var geom_12786 = (obj_12785["geojson"]);var feature_12787 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12785["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12785["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12785["compact_name"])], null)], null));var __12788__$1 = (feature_12787["geometry"] = geom_12786);var __12789__$2 = ((feature_12787["properties"])["index_object"] = obj_12785);features.push(feature_12787);
{
var G__12790 = seq__12776_12780;
var G__12791 = chunk__12777_12781;
var G__12792 = count__12778_12782;
var G__12793 = (i__12779_12783 + (1));
seq__12776_12780 = G__12790;
chunk__12777_12781 = G__12791;
count__12778_12782 = G__12792;
i__12779_12783 = G__12793;
continue;
}
} else
{var temp__4126__auto___12794 = cljs.core.seq.call(null,seq__12776_12780);if(temp__4126__auto___12794)
{var seq__12776_12795__$1 = temp__4126__auto___12794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12776_12795__$1))
{var c__4299__auto___12796 = cljs.core.chunk_first.call(null,seq__12776_12795__$1);{
var G__12797 = cljs.core.chunk_rest.call(null,seq__12776_12795__$1);
var G__12798 = c__4299__auto___12796;
var G__12799 = cljs.core.count.call(null,c__4299__auto___12796);
var G__12800 = (0);
seq__12776_12780 = G__12797;
chunk__12777_12781 = G__12798;
count__12778_12782 = G__12799;
i__12779_12783 = G__12800;
continue;
}
} else
{var k_12801 = cljs.core.first.call(null,seq__12776_12795__$1);var obj_12802 = (js_index[k_12801]);var geom_12803 = (obj_12802["geojson"]);var feature_12804 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12802["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12802["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12802["compact_name"])], null)], null));var __12805__$1 = (feature_12804["geometry"] = geom_12803);var __12806__$2 = ((feature_12804["properties"])["index_object"] = obj_12802);features.push(feature_12804);
{
var G__12807 = cljs.core.next.call(null,seq__12776_12795__$1);
var G__12808 = null;
var G__12809 = (0);
var G__12810 = (0);
seq__12776_12780 = G__12807;
chunk__12777_12781 = G__12808;
count__12778_12782 = G__12809;
i__12779_12783 = G__12810;
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
return (function (state_12853){var state_val_12854 = (state_12853[(1)]);if((state_val_12854 === (5)))
{var inst_12851 = (state_12853[(2)]);var state_12853__$1 = state_12853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12853__$1,inst_12851);
} else
{if((state_val_12854 === (4)))
{var state_12853__$1 = state_12853;var statearr_12855_12867 = state_12853__$1;(statearr_12855_12867[(2)] = null);
(statearr_12855_12867[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12854 === (3)))
{var inst_12841 = (state_12853[(7)]);var inst_12848 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_12841);var state_12853__$1 = state_12853;var statearr_12856_12868 = state_12853__$1;(statearr_12856_12868[(2)] = inst_12848);
(statearr_12856_12868[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12854 === (2)))
{var inst_12841 = (state_12853[(7)]);var inst_12841__$1 = (state_12853[(2)]);var inst_12842 = (function (){var bl_coll_index = inst_12841__$1;return ((function (bl_coll_index,inst_12841,inst_12841__$1,state_val_12854,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_12841,inst_12841__$1,state_val_12854,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_12843 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_12842);var inst_12844 = cljs.core.deref.call(null,app_state);var inst_12845 = cljs.core.get_in.call(null,inst_12844,index_path);var inst_12846 = cljs.core._EQ_.call(null,inst_12845,inst_12841__$1);var state_12853__$1 = (function (){var statearr_12857 = state_12853;(statearr_12857[(7)] = inst_12841__$1);
(statearr_12857[(8)] = inst_12843);
return statearr_12857;
})();if(inst_12846)
{var statearr_12858_12869 = state_12853__$1;(statearr_12858_12869[(1)] = (3));
} else
{var statearr_12859_12870 = state_12853__$1;(statearr_12859_12870[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12854 === (1)))
{var inst_12839 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12853__$1 = state_12853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12853__$1,(2),inst_12839);
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
var state_machine__5679__auto____0 = (function (){var statearr_12863 = [null,null,null,null,null,null,null,null,null];(statearr_12863[(0)] = state_machine__5679__auto__);
(statearr_12863[(1)] = (1));
return statearr_12863;
});
var state_machine__5679__auto____1 = (function (state_12853){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12853);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12864){if((e12864 instanceof Object))
{var ex__5682__auto__ = e12864;var statearr_12865_12871 = state_12853;(statearr_12865_12871[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12853);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12872 = state_12853;
state_12853 = G__12872;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12853){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_12866 = f__5694__auto__.call(null);(statearr_12866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_12866;
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
