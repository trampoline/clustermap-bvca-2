// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3637__auto__ = cljs.core.some((function (p__51774){var vec__51775 = p__51774;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51775,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51775,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = z;if(cljs.core.truth_(and__3625__auto__))
{return (zoom <= z);
} else
{return and__3625__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3637__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
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
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__51780 = cljs.core.seq(boundarylines);var chunk__51781 = null;var count__51782 = (0);var i__51783 = (0);while(true){
if((i__51783 < count__51782))
{var bl = chunk__51781.cljs$core$IIndexed$_nth$arity$2(null,i__51783);var boundaryline_id_51784 = (bl["id"]);var tolerance_51785 = (bl["tolerance"]);var general_cache_path_51786 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_51784,tolerance_51785], null));var collection_cache_path_51787 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_51784,tolerance_51785], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_51786,((function (seq__51780,chunk__51781,count__51782,i__51783,boundaryline_id_51784,tolerance_51785,general_cache_path_51786,collection_cache_path_51787,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__51780,chunk__51781,count__51782,i__51783,boundaryline_id_51784,tolerance_51785,general_cache_path_51786,collection_cache_path_51787,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_51787))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_51787,((function (seq__51780,chunk__51781,count__51782,i__51783,boundaryline_id_51784,tolerance_51785,general_cache_path_51786,collection_cache_path_51787,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__51780,chunk__51781,count__51782,i__51783,boundaryline_id_51784,tolerance_51785,general_cache_path_51786,collection_cache_path_51787,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__51788 = seq__51780;
var G__51789 = chunk__51781;
var G__51790 = count__51782;
var G__51791 = (i__51783 + (1));
seq__51780 = G__51788;
chunk__51781 = G__51789;
count__51782 = G__51790;
i__51783 = G__51791;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__51780);if(temp__4126__auto__)
{var seq__51780__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__51780__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__51780__$1);{
var G__51792 = cljs.core.chunk_rest(seq__51780__$1);
var G__51793 = c__4406__auto__;
var G__51794 = cljs.core.count(c__4406__auto__);
var G__51795 = (0);
seq__51780 = G__51792;
chunk__51781 = G__51793;
count__51782 = G__51794;
i__51783 = G__51795;
continue;
}
} else
{var bl = cljs.core.first(seq__51780__$1);var boundaryline_id_51796 = (bl["id"]);var tolerance_51797 = (bl["tolerance"]);var general_cache_path_51798 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_51796,tolerance_51797], null));var collection_cache_path_51799 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_51796,tolerance_51797], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_51798,((function (seq__51780,chunk__51781,count__51782,i__51783,boundaryline_id_51796,tolerance_51797,general_cache_path_51798,collection_cache_path_51799,bl,seq__51780__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__51780,chunk__51781,count__51782,i__51783,boundaryline_id_51796,tolerance_51797,general_cache_path_51798,collection_cache_path_51799,bl,seq__51780__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_51799))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_51799,((function (seq__51780,chunk__51781,count__51782,i__51783,boundaryline_id_51796,tolerance_51797,general_cache_path_51798,collection_cache_path_51799,bl,seq__51780__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__51780,chunk__51781,count__51782,i__51783,boundaryline_id_51796,tolerance_51797,general_cache_path_51798,collection_cache_path_51799,bl,seq__51780__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__51800 = cljs.core.next(seq__51780__$1);
var G__51801 = null;
var G__51802 = (0);
var G__51803 = (0);
seq__51780 = G__51800;
chunk__51781 = G__51801;
count__51782 = G__51802;
i__51783 = G__51803;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__51804){var map__51820 = p__51804;var map__51820__$1 = ((cljs.core.seq_QMARK_(map__51820))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51820):map__51820);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.constant$keyword$1142);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.constant$keyword$1141);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$1141,boundaryline_ids,cljs.core.constant$keyword$1138,true], 0));var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,comm,map__51820,map__51820__$1,bounds,boundaryline_ids){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,comm,map__51820,map__51820__$1,bounds,boundaryline_ids){
return (function (state_51825){var state_val_51826 = (state_51825[(1)]);if((state_val_51826 === (2)))
{var inst_51822 = (state_51825[(2)]);var inst_51823 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_51822);var state_51825__$1 = (function (){var statearr_51827 = state_51825;(statearr_51827[(7)] = inst_51823);
return statearr_51827;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51825__$1,true);
} else
{if((state_val_51826 === (1)))
{var state_51825__$1 = state_51825;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51825__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto__,comm,map__51820,map__51820__$1,bounds,boundaryline_ids))
;return ((function (switch__5804__auto__,c__5819__auto__,comm,map__51820,map__51820__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_51831 = [null,null,null,null,null,null,null,null];(statearr_51831[(0)] = state_machine__5805__auto__);
(statearr_51831[(1)] = (1));
return statearr_51831;
});
var state_machine__5805__auto____1 = (function (state_51825){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_51825);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e51832){if((e51832 instanceof Object))
{var ex__5808__auto__ = e51832;var statearr_51833_51835 = state_51825;(statearr_51833_51835[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51825);
return cljs.core.constant$keyword$1120;
} else
{throw e51832;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__51836 = state_51825;
state_51825 = G__51836;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_51825){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_51825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,comm,map__51820,map__51820__$1,bounds,boundaryline_ids))
})();var state__5821__auto__ = (function (){var statearr_51834 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_51834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_51834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,comm,map__51820,map__51820__$1,bounds,boundaryline_ids))
);
return c__5819__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__51804 = null;if (arguments.length > 5) {
  p__51804 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__51804);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__51837){
var app_state = cljs.core.first(arglist__51837);
arglist__51837 = cljs.core.next(arglist__51837);
var boundarylines_path = cljs.core.first(arglist__51837);
arglist__51837 = cljs.core.next(arglist__51837);
var collection_boundarylines_path = cljs.core.first(arglist__51837);
arglist__51837 = cljs.core.next(arglist__51837);
var collection_id = cljs.core.first(arglist__51837);
arglist__51837 = cljs.core.next(arglist__51837);
var tolerance = cljs.core.first(arglist__51837);
var p__51804 = cljs.core.rest(arglist__51837);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__51804);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name(boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3625__auto__ = default_bl;if(cljs.core.truth_(and__3625__auto__))
{return default_tol;
} else
{return and__3625__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3637__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__51838){var map__51846 = p__51838;var map__51846__$1 = ((cljs.core.seq_QMARK_(map__51846))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51846):map__51846);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51846__$1,cljs.core.constant$keyword$1141);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1156], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1157], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__51847 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51847) : cljs.core.deref.call(null,G__51847));
})(),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1158], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__51848 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51848) : cljs.core.deref.call(null,G__51848));
})(),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1157], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__51849 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51849) : cljs.core.deref.call(null,G__51849));
})(),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__51846,map__51846__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__51846,map__51846__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__51846,map__51846__$1,boundaryline_ids){
return (function (p__51850){var vec__51851 = p__51850;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51851,(0),null);var vec__51852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51851,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51852,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51852,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__51846,map__51846__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$1141,required,cljs.core.constant$keyword$1142,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__51838 = null;if (arguments.length > 5) {
  p__51838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__51838);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__51853){
var app_state = cljs.core.first(arglist__51853);
arglist__51853 = cljs.core.next(arglist__51853);
var boundarylines_path = cljs.core.first(arglist__51853);
arglist__51853 = cljs.core.next(arglist__51853);
var collection_id = cljs.core.first(arglist__51853);
arglist__51853 = cljs.core.next(arglist__51853);
var bounds = cljs.core.first(arglist__51853);
arglist__51853 = cljs.core.next(arglist__51853);
var zoom = cljs.core.first(arglist__51853);
var p__51838 = cljs.core.rest(arglist__51853);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__51838);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1156], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1159], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__51855 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51855) : cljs.core.deref.call(null,G__51855));
})(),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = (function (){var G__51861 = js_index;return Object.keys(G__51861);
})();var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1160,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__51862_51866 = cljs.core.seq(keys);var chunk__51863_51867 = null;var count__51864_51868 = (0);var i__51865_51869 = (0);while(true){
if((i__51865_51869 < count__51864_51868))
{var k_51870 = chunk__51863_51867.cljs$core$IIndexed$_nth$arity$2(null,i__51865_51869);var obj_51871 = (js_index[k_51870]);var geom_51872 = (obj_51871["geojson"]);var feature_51873 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"Feature",cljs.core.constant$keyword$1161,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1162,(obj_51871["id"]),cljs.core.constant$keyword$1163,(obj_51871["id"]),cljs.core.constant$keyword$1164,(obj_51871["compact_name"])], null)], null));var __51874__$1 = (feature_51873["geometry"] = geom_51872);var __51875__$2 = ((feature_51873["properties"])["index_object"] = obj_51871);features.push(feature_51873);
{
var G__51876 = seq__51862_51866;
var G__51877 = chunk__51863_51867;
var G__51878 = count__51864_51868;
var G__51879 = (i__51865_51869 + (1));
seq__51862_51866 = G__51876;
chunk__51863_51867 = G__51877;
count__51864_51868 = G__51878;
i__51865_51869 = G__51879;
continue;
}
} else
{var temp__4126__auto___51880 = cljs.core.seq(seq__51862_51866);if(temp__4126__auto___51880)
{var seq__51862_51881__$1 = temp__4126__auto___51880;if(cljs.core.chunked_seq_QMARK_(seq__51862_51881__$1))
{var c__4406__auto___51882 = cljs.core.chunk_first(seq__51862_51881__$1);{
var G__51883 = cljs.core.chunk_rest(seq__51862_51881__$1);
var G__51884 = c__4406__auto___51882;
var G__51885 = cljs.core.count(c__4406__auto___51882);
var G__51886 = (0);
seq__51862_51866 = G__51883;
chunk__51863_51867 = G__51884;
count__51864_51868 = G__51885;
i__51865_51869 = G__51886;
continue;
}
} else
{var k_51887 = cljs.core.first(seq__51862_51881__$1);var obj_51888 = (js_index[k_51887]);var geom_51889 = (obj_51888["geojson"]);var feature_51890 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"Feature",cljs.core.constant$keyword$1161,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1162,(obj_51888["id"]),cljs.core.constant$keyword$1163,(obj_51888["id"]),cljs.core.constant$keyword$1164,(obj_51888["compact_name"])], null)], null));var __51891__$1 = (feature_51890["geometry"] = geom_51889);var __51892__$2 = ((feature_51890["properties"])["index_object"] = obj_51888);features.push(feature_51890);
{
var G__51893 = cljs.core.next(seq__51862_51881__$1);
var G__51894 = null;
var G__51895 = (0);
var G__51896 = (0);
seq__51862_51866 = G__51893;
chunk__51863_51867 = G__51894;
count__51864_51868 = G__51895;
i__51865_51869 = G__51896;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1156], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1158], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__51927 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51927) : cljs.core.deref.call(null,G__51927));
})(),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_51942){var state_val_51943 = (state_51942[(1)]);if((state_val_51943 === (5)))
{var inst_51940 = (state_51942[(2)]);var state_51942__$1 = state_51942;return cljs.core.async.impl.ioc_helpers.return_chan(state_51942__$1,inst_51940);
} else
{if((state_val_51943 === (4)))
{var state_51942__$1 = state_51942;var statearr_51944_51957 = state_51942__$1;(statearr_51944_51957[(2)] = null);
(statearr_51944_51957[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51943 === (3)))
{var inst_51930 = (state_51942[(7)]);var inst_51937 = clustermap.boundarylines.rtree_index(rtree,inst_51930);var state_51942__$1 = state_51942;var statearr_51945_51958 = state_51942__$1;(statearr_51945_51958[(2)] = inst_51937);
(statearr_51945_51958[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51943 === (2)))
{var inst_51930 = (state_51942[(7)]);var inst_51930__$1 = (state_51942[(2)]);var inst_51931 = (function (){var bl_coll_index = inst_51930__$1;return ((function (bl_coll_index,inst_51930,inst_51930__$1,state_val_51943,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_51930,inst_51930__$1,state_val_51943,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_51932 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_51931);var inst_51933 = (function (){var G__51946 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51946) : cljs.core.deref.call(null,G__51946));
})();var inst_51934 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_51933,index_path);var inst_51935 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51934,inst_51930__$1);var state_51942__$1 = (function (){var statearr_51947 = state_51942;(statearr_51947[(7)] = inst_51930__$1);
(statearr_51947[(8)] = inst_51932);
return statearr_51947;
})();if(inst_51935)
{var statearr_51948_51959 = state_51942__$1;(statearr_51948_51959[(1)] = (3));
} else
{var statearr_51949_51960 = state_51942__$1;(statearr_51949_51960[(1)] = (4));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51943 === (1)))
{var inst_51928 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$1138,true], 0));var state_51942__$1 = state_51942;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51942__$1,(2),inst_51928);
} else
{return null;
}
}
}
}
}
});})(c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_51953 = [null,null,null,null,null,null,null,null,null];(statearr_51953[(0)] = state_machine__5805__auto__);
(statearr_51953[(1)] = (1));
return statearr_51953;
});
var state_machine__5805__auto____1 = (function (state_51942){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_51942);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e51954){if((e51954 instanceof Object))
{var ex__5808__auto__ = e51954;var statearr_51955_51961 = state_51942;(statearr_51955_51961[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51942);
return cljs.core.constant$keyword$1120;
} else
{throw e51954;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__51962 = state_51942;
state_51942 = G__51962;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_51942){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_51942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5821__auto__ = (function (){var statearr_51956 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_51956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_51956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5819__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1156], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1159], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__51966 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51966) : cljs.core.deref.call(null,G__51966));
})(),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1165,x,cljs.core.constant$keyword$1166,y,cljs.core.constant$keyword$1167,(0),cljs.core.constant$keyword$1168,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1162,hit.properties.id,cljs.core.constant$keyword$1164,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){var G__51967 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"Point",cljs.core.constant$keyword$1169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));var G__51968 = hit.geometry;return gju.pointInPolygon(G__51967,G__51968);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3637__auto__ = hits;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
