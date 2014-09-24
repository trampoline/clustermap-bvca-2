// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some((function (p__37820){var vec__37821 = p__37820;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37821,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37821,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
{return (zoom <= z);
} else
{return and__3546__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3558__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__37826 = cljs.core.seq(boundarylines);var chunk__37827 = null;var count__37828 = (0);var i__37829 = (0);while(true){
if((i__37829 < count__37828))
{var bl = chunk__37827.cljs$core$IIndexed$_nth$arity$2(null,i__37829);var boundaryline_id_37830 = (bl["id"]);var tolerance_37831 = (bl["tolerance"]);var general_cache_path_37832 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37830,tolerance_37831], null));var collection_cache_path_37833 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37830,tolerance_37831], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37832,((function (seq__37826,chunk__37827,count__37828,i__37829,boundaryline_id_37830,tolerance_37831,general_cache_path_37832,collection_cache_path_37833,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37826,chunk__37827,count__37828,i__37829,boundaryline_id_37830,tolerance_37831,general_cache_path_37832,collection_cache_path_37833,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37833))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37833,((function (seq__37826,chunk__37827,count__37828,i__37829,boundaryline_id_37830,tolerance_37831,general_cache_path_37832,collection_cache_path_37833,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37826,chunk__37827,count__37828,i__37829,boundaryline_id_37830,tolerance_37831,general_cache_path_37832,collection_cache_path_37833,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37834 = seq__37826;
var G__37835 = chunk__37827;
var G__37836 = count__37828;
var G__37837 = (i__37829 + (1));
seq__37826 = G__37834;
chunk__37827 = G__37835;
count__37828 = G__37836;
i__37829 = G__37837;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37826);if(temp__4126__auto__)
{var seq__37826__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37826__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__37826__$1);{
var G__37838 = cljs.core.chunk_rest(seq__37826__$1);
var G__37839 = c__4314__auto__;
var G__37840 = cljs.core.count(c__4314__auto__);
var G__37841 = (0);
seq__37826 = G__37838;
chunk__37827 = G__37839;
count__37828 = G__37840;
i__37829 = G__37841;
continue;
}
} else
{var bl = cljs.core.first(seq__37826__$1);var boundaryline_id_37842 = (bl["id"]);var tolerance_37843 = (bl["tolerance"]);var general_cache_path_37844 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37842,tolerance_37843], null));var collection_cache_path_37845 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37842,tolerance_37843], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37844,((function (seq__37826,chunk__37827,count__37828,i__37829,boundaryline_id_37842,tolerance_37843,general_cache_path_37844,collection_cache_path_37845,bl,seq__37826__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37826,chunk__37827,count__37828,i__37829,boundaryline_id_37842,tolerance_37843,general_cache_path_37844,collection_cache_path_37845,bl,seq__37826__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37845))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37845,((function (seq__37826,chunk__37827,count__37828,i__37829,boundaryline_id_37842,tolerance_37843,general_cache_path_37844,collection_cache_path_37845,bl,seq__37826__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37826,chunk__37827,count__37828,i__37829,boundaryline_id_37842,tolerance_37843,general_cache_path_37844,collection_cache_path_37845,bl,seq__37826__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37846 = cljs.core.next(seq__37826__$1);
var G__37847 = null;
var G__37848 = (0);
var G__37849 = (0);
seq__37826 = G__37846;
chunk__37827 = G__37847;
count__37828 = G__37848;
i__37829 = G__37849;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37850){var map__37866 = p__37850;var map__37866__$1 = ((cljs.core.seq_QMARK_(map__37866))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37866):map__37866);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37866__$1,cljs.core.constant$keyword$864);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37866__$1,cljs.core.constant$keyword$863);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$863,boundaryline_ids,cljs.core.constant$keyword$860,true], 0));var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,map__37866,map__37866__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__37866,map__37866__$1,bounds,boundaryline_ids){
return (function (state_37871){var state_val_37872 = (state_37871[(1)]);if((state_val_37872 === (2)))
{var inst_37868 = (state_37871[(2)]);var inst_37869 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_37868);var state_37871__$1 = (function (){var statearr_37873 = state_37871;(statearr_37873[(7)] = inst_37869);
return statearr_37873;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37871__$1,true);
} else
{if((state_val_37872 === (1)))
{var state_37871__$1 = state_37871;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37871__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__37866,map__37866__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__37866,map__37866__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37877 = [null,null,null,null,null,null,null,null];(statearr_37877[(0)] = state_machine__5694__auto__);
(statearr_37877[(1)] = (1));
return statearr_37877;
});
var state_machine__5694__auto____1 = (function (state_37871){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37871);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37878){if((e37878 instanceof Object))
{var ex__5697__auto__ = e37878;var statearr_37879_37881 = state_37871;(statearr_37879_37881[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37871);
return cljs.core.constant$keyword$844;
} else
{throw e37878;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__37882 = state_37871;
state_37871 = G__37882;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37871){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__37866,map__37866__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_37880 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,map__37866,map__37866__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__37850 = null;if (arguments.length > 5) {
  p__37850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37850);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__37883){
var app_state = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var boundarylines_path = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var collection_boundarylines_path = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var collection_id = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var tolerance = cljs.core.first(arglist__37883);
var p__37850 = cljs.core.rest(arglist__37883);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37850);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name(boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3546__auto__ = default_bl;if(cljs.core.truth_(and__3546__auto__))
{return default_tol;
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3558__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__37884){var map__37889 = p__37884;var map__37889__$1 = ((cljs.core.seq_QMARK_(map__37889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37889):map__37889);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37889__$1,cljs.core.constant$keyword$863);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$876], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$877], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$878], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$877], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37889,map__37889__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37889,map__37889__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37889,map__37889__$1,boundaryline_ids){
return (function (p__37890){var vec__37891 = p__37890;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(0),null);var vec__37892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37892,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37892,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37889,map__37889__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$863,required,cljs.core.constant$keyword$864,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__37884 = null;if (arguments.length > 5) {
  p__37884 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__37884);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__37893){
var app_state = cljs.core.first(arglist__37893);
arglist__37893 = cljs.core.next(arglist__37893);
var boundarylines_path = cljs.core.first(arglist__37893);
arglist__37893 = cljs.core.next(arglist__37893);
var collection_id = cljs.core.first(arglist__37893);
arglist__37893 = cljs.core.next(arglist__37893);
var bounds = cljs.core.first(arglist__37893);
arglist__37893 = cljs.core.next(arglist__37893);
var zoom = cljs.core.first(arglist__37893);
var p__37884 = cljs.core.rest(arglist__37893);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__37884);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$876], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$879], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$880,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__37898_37902 = cljs.core.seq(keys);var chunk__37899_37903 = null;var count__37900_37904 = (0);var i__37901_37905 = (0);while(true){
if((i__37901_37905 < count__37900_37904))
{var k_37906 = chunk__37899_37903.cljs$core$IIndexed$_nth$arity$2(null,i__37901_37905);var obj_37907 = (js_index[k_37906]);var geom_37908 = (obj_37907["geojson"]);var feature_37909 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$880,"Feature",cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$882,(obj_37907["id"]),cljs.core.constant$keyword$883,(obj_37907["id"]),cljs.core.constant$keyword$884,(obj_37907["compact_name"])], null)], null));var __37910__$1 = (feature_37909["geometry"] = geom_37908);var __37911__$2 = ((feature_37909["properties"])["index_object"] = obj_37907);features.push(feature_37909);
{
var G__37912 = seq__37898_37902;
var G__37913 = chunk__37899_37903;
var G__37914 = count__37900_37904;
var G__37915 = (i__37901_37905 + (1));
seq__37898_37902 = G__37912;
chunk__37899_37903 = G__37913;
count__37900_37904 = G__37914;
i__37901_37905 = G__37915;
continue;
}
} else
{var temp__4126__auto___37916 = cljs.core.seq(seq__37898_37902);if(temp__4126__auto___37916)
{var seq__37898_37917__$1 = temp__4126__auto___37916;if(cljs.core.chunked_seq_QMARK_(seq__37898_37917__$1))
{var c__4314__auto___37918 = cljs.core.chunk_first(seq__37898_37917__$1);{
var G__37919 = cljs.core.chunk_rest(seq__37898_37917__$1);
var G__37920 = c__4314__auto___37918;
var G__37921 = cljs.core.count(c__4314__auto___37918);
var G__37922 = (0);
seq__37898_37902 = G__37919;
chunk__37899_37903 = G__37920;
count__37900_37904 = G__37921;
i__37901_37905 = G__37922;
continue;
}
} else
{var k_37923 = cljs.core.first(seq__37898_37917__$1);var obj_37924 = (js_index[k_37923]);var geom_37925 = (obj_37924["geojson"]);var feature_37926 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$880,"Feature",cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$882,(obj_37924["id"]),cljs.core.constant$keyword$883,(obj_37924["id"]),cljs.core.constant$keyword$884,(obj_37924["compact_name"])], null)], null));var __37927__$1 = (feature_37926["geometry"] = geom_37925);var __37928__$2 = ((feature_37926["properties"])["index_object"] = obj_37924);features.push(feature_37926);
{
var G__37929 = cljs.core.next(seq__37898_37917__$1);
var G__37930 = null;
var G__37931 = (0);
var G__37932 = (0);
seq__37898_37902 = G__37929;
chunk__37899_37903 = G__37930;
count__37900_37904 = G__37931;
i__37901_37905 = G__37932;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$876], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$878], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_37975){var state_val_37976 = (state_37975[(1)]);if((state_val_37976 === (5)))
{var inst_37973 = (state_37975[(2)]);var state_37975__$1 = state_37975;return cljs.core.async.impl.ioc_helpers.return_chan(state_37975__$1,inst_37973);
} else
{if((state_val_37976 === (4)))
{var state_37975__$1 = state_37975;var statearr_37977_37989 = state_37975__$1;(statearr_37977_37989[(2)] = null);
(statearr_37977_37989[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37976 === (3)))
{var inst_37963 = (state_37975[(7)]);var inst_37970 = clustermap.boundarylines.rtree_index(rtree,inst_37963);var state_37975__$1 = state_37975;var statearr_37978_37990 = state_37975__$1;(statearr_37978_37990[(2)] = inst_37970);
(statearr_37978_37990[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_37976 === (2)))
{var inst_37963 = (state_37975[(7)]);var inst_37963__$1 = (state_37975[(2)]);var inst_37964 = (function (){var bl_coll_index = inst_37963__$1;return ((function (bl_coll_index,inst_37963,inst_37963__$1,state_val_37976,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_37963,inst_37963__$1,state_val_37976,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_37965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_37964);var inst_37966 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));var inst_37967 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37966,index_path);var inst_37968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37967,inst_37963__$1);var state_37975__$1 = (function (){var statearr_37979 = state_37975;(statearr_37979[(8)] = inst_37965);
(statearr_37979[(7)] = inst_37963__$1);
return statearr_37979;
})();if(inst_37968)
{var statearr_37980_37991 = state_37975__$1;(statearr_37980_37991[(1)] = (3));
} else
{var statearr_37981_37992 = state_37975__$1;(statearr_37981_37992[(1)] = (4));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_37976 === (1)))
{var inst_37961 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$860,true], 0));var state_37975__$1 = state_37975;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37975__$1,(2),inst_37961);
} else
{return null;
}
}
}
}
}
});})(c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37985 = [null,null,null,null,null,null,null,null,null];(statearr_37985[(0)] = state_machine__5694__auto__);
(statearr_37985[(1)] = (1));
return statearr_37985;
});
var state_machine__5694__auto____1 = (function (state_37975){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37975);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37986){if((e37986 instanceof Object))
{var ex__5697__auto__ = e37986;var statearr_37987_37993 = state_37975;(statearr_37987_37993[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37975);
return cljs.core.constant$keyword$844;
} else
{throw e37986;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__37994 = state_37975;
state_37975 = G__37994;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37975){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_37988 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5708__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$876], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$879], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$885,x,cljs.core.constant$keyword$886,y,cljs.core.constant$keyword$887,(0),cljs.core.constant$keyword$888,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$882,hit.properties.id,cljs.core.constant$keyword$884,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$880,"Point",cljs.core.constant$keyword$889,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
