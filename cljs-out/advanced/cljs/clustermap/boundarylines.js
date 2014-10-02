// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some((function (p__38853){var vec__38854 = p__38853;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38854,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38854,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__38859 = cljs.core.seq(boundarylines);var chunk__38860 = null;var count__38861 = (0);var i__38862 = (0);while(true){
if((i__38862 < count__38861))
{var bl = chunk__38860.cljs$core$IIndexed$_nth$arity$2(null,i__38862);var boundaryline_id_38863 = (bl["id"]);var tolerance_38864 = (bl["tolerance"]);var general_cache_path_38865 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_38863,tolerance_38864], null));var collection_cache_path_38866 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_38863,tolerance_38864], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_38865,((function (seq__38859,chunk__38860,count__38861,i__38862,boundaryline_id_38863,tolerance_38864,general_cache_path_38865,collection_cache_path_38866,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__38859,chunk__38860,count__38861,i__38862,boundaryline_id_38863,tolerance_38864,general_cache_path_38865,collection_cache_path_38866,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_38866))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_38866,((function (seq__38859,chunk__38860,count__38861,i__38862,boundaryline_id_38863,tolerance_38864,general_cache_path_38865,collection_cache_path_38866,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__38859,chunk__38860,count__38861,i__38862,boundaryline_id_38863,tolerance_38864,general_cache_path_38865,collection_cache_path_38866,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__38867 = seq__38859;
var G__38868 = chunk__38860;
var G__38869 = count__38861;
var G__38870 = (i__38862 + (1));
seq__38859 = G__38867;
chunk__38860 = G__38868;
count__38861 = G__38869;
i__38862 = G__38870;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38859);if(temp__4126__auto__)
{var seq__38859__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38859__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__38859__$1);{
var G__38871 = cljs.core.chunk_rest(seq__38859__$1);
var G__38872 = c__4314__auto__;
var G__38873 = cljs.core.count(c__4314__auto__);
var G__38874 = (0);
seq__38859 = G__38871;
chunk__38860 = G__38872;
count__38861 = G__38873;
i__38862 = G__38874;
continue;
}
} else
{var bl = cljs.core.first(seq__38859__$1);var boundaryline_id_38875 = (bl["id"]);var tolerance_38876 = (bl["tolerance"]);var general_cache_path_38877 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_38875,tolerance_38876], null));var collection_cache_path_38878 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_38875,tolerance_38876], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_38877,((function (seq__38859,chunk__38860,count__38861,i__38862,boundaryline_id_38875,tolerance_38876,general_cache_path_38877,collection_cache_path_38878,bl,seq__38859__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__38859,chunk__38860,count__38861,i__38862,boundaryline_id_38875,tolerance_38876,general_cache_path_38877,collection_cache_path_38878,bl,seq__38859__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_38878))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_38878,((function (seq__38859,chunk__38860,count__38861,i__38862,boundaryline_id_38875,tolerance_38876,general_cache_path_38877,collection_cache_path_38878,bl,seq__38859__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__38859,chunk__38860,count__38861,i__38862,boundaryline_id_38875,tolerance_38876,general_cache_path_38877,collection_cache_path_38878,bl,seq__38859__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__38879 = cljs.core.next(seq__38859__$1);
var G__38880 = null;
var G__38881 = (0);
var G__38882 = (0);
seq__38859 = G__38879;
chunk__38860 = G__38880;
count__38861 = G__38881;
i__38862 = G__38882;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__38883){var map__38899 = p__38883;var map__38899__$1 = ((cljs.core.seq_QMARK_(map__38899))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38899):map__38899);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38899__$1,cljs.core.constant$keyword$900);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38899__$1,cljs.core.constant$keyword$899);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$899,boundaryline_ids,cljs.core.constant$keyword$896,true], 0));var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,map__38899,map__38899__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__38899,map__38899__$1,bounds,boundaryline_ids){
return (function (state_38904){var state_val_38905 = (state_38904[(1)]);if((state_val_38905 === (2)))
{var inst_38901 = (state_38904[(2)]);var inst_38902 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_38901);var state_38904__$1 = (function (){var statearr_38906 = state_38904;(statearr_38906[(7)] = inst_38902);
return statearr_38906;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38904__$1,true);
} else
{if((state_val_38905 === (1)))
{var state_38904__$1 = state_38904;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38904__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__38899,map__38899__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__38899,map__38899__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38910 = [null,null,null,null,null,null,null,null];(statearr_38910[(0)] = state_machine__5694__auto__);
(statearr_38910[(1)] = (1));
return statearr_38910;
});
var state_machine__5694__auto____1 = (function (state_38904){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_38904);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38911){if((e38911 instanceof Object))
{var ex__5697__auto__ = e38911;var statearr_38912_38914 = state_38904;(statearr_38912_38914[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38904);
return cljs.core.constant$keyword$880;
} else
{throw e38911;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__38915 = state_38904;
state_38904 = G__38915;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38904){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__38899,map__38899__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_38913 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_38913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,map__38899,map__38899__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__38883 = null;if (arguments.length > 5) {
  p__38883 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__38883);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__38916){
var app_state = cljs.core.first(arglist__38916);
arglist__38916 = cljs.core.next(arglist__38916);
var boundarylines_path = cljs.core.first(arglist__38916);
arglist__38916 = cljs.core.next(arglist__38916);
var collection_boundarylines_path = cljs.core.first(arglist__38916);
arglist__38916 = cljs.core.next(arglist__38916);
var collection_id = cljs.core.first(arglist__38916);
arglist__38916 = cljs.core.next(arglist__38916);
var tolerance = cljs.core.first(arglist__38916);
var p__38883 = cljs.core.rest(arglist__38916);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__38883);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__38917){var map__38922 = p__38917;var map__38922__$1 = ((cljs.core.seq_QMARK_(map__38922))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38922):map__38922);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38922__$1,cljs.core.constant$keyword$899);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$908], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$909], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$910], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$909], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__38922,map__38922__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__38922,map__38922__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__38922,map__38922__$1,boundaryline_ids){
return (function (p__38923){var vec__38924 = p__38923;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38924,(0),null);var vec__38925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38924,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38925,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38925,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__38922,map__38922__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$899,required,cljs.core.constant$keyword$900,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__38917 = null;if (arguments.length > 5) {
  p__38917 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__38917);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__38926){
var app_state = cljs.core.first(arglist__38926);
arglist__38926 = cljs.core.next(arglist__38926);
var boundarylines_path = cljs.core.first(arglist__38926);
arglist__38926 = cljs.core.next(arglist__38926);
var collection_id = cljs.core.first(arglist__38926);
arglist__38926 = cljs.core.next(arglist__38926);
var bounds = cljs.core.first(arglist__38926);
arglist__38926 = cljs.core.next(arglist__38926);
var zoom = cljs.core.first(arglist__38926);
var p__38917 = cljs.core.rest(arglist__38926);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__38917);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$908], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$911], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$912,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__38931_38935 = cljs.core.seq(keys);var chunk__38932_38936 = null;var count__38933_38937 = (0);var i__38934_38938 = (0);while(true){
if((i__38934_38938 < count__38933_38937))
{var k_38939 = chunk__38932_38936.cljs$core$IIndexed$_nth$arity$2(null,i__38934_38938);var obj_38940 = (js_index[k_38939]);var geom_38941 = (obj_38940["geojson"]);var feature_38942 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$912,"Feature",cljs.core.constant$keyword$913,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$914,(obj_38940["id"]),cljs.core.constant$keyword$915,(obj_38940["id"]),cljs.core.constant$keyword$916,(obj_38940["compact_name"])], null)], null));var __38943__$1 = (feature_38942["geometry"] = geom_38941);var __38944__$2 = ((feature_38942["properties"])["index_object"] = obj_38940);features.push(feature_38942);
{
var G__38945 = seq__38931_38935;
var G__38946 = chunk__38932_38936;
var G__38947 = count__38933_38937;
var G__38948 = (i__38934_38938 + (1));
seq__38931_38935 = G__38945;
chunk__38932_38936 = G__38946;
count__38933_38937 = G__38947;
i__38934_38938 = G__38948;
continue;
}
} else
{var temp__4126__auto___38949 = cljs.core.seq(seq__38931_38935);if(temp__4126__auto___38949)
{var seq__38931_38950__$1 = temp__4126__auto___38949;if(cljs.core.chunked_seq_QMARK_(seq__38931_38950__$1))
{var c__4314__auto___38951 = cljs.core.chunk_first(seq__38931_38950__$1);{
var G__38952 = cljs.core.chunk_rest(seq__38931_38950__$1);
var G__38953 = c__4314__auto___38951;
var G__38954 = cljs.core.count(c__4314__auto___38951);
var G__38955 = (0);
seq__38931_38935 = G__38952;
chunk__38932_38936 = G__38953;
count__38933_38937 = G__38954;
i__38934_38938 = G__38955;
continue;
}
} else
{var k_38956 = cljs.core.first(seq__38931_38950__$1);var obj_38957 = (js_index[k_38956]);var geom_38958 = (obj_38957["geojson"]);var feature_38959 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$912,"Feature",cljs.core.constant$keyword$913,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$914,(obj_38957["id"]),cljs.core.constant$keyword$915,(obj_38957["id"]),cljs.core.constant$keyword$916,(obj_38957["compact_name"])], null)], null));var __38960__$1 = (feature_38959["geometry"] = geom_38958);var __38961__$2 = ((feature_38959["properties"])["index_object"] = obj_38957);features.push(feature_38959);
{
var G__38962 = cljs.core.next(seq__38931_38950__$1);
var G__38963 = null;
var G__38964 = (0);
var G__38965 = (0);
seq__38931_38935 = G__38962;
chunk__38932_38936 = G__38963;
count__38933_38937 = G__38964;
i__38934_38938 = G__38965;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$908], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$910], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_39008){var state_val_39009 = (state_39008[(1)]);if((state_val_39009 === (5)))
{var inst_39006 = (state_39008[(2)]);var state_39008__$1 = state_39008;return cljs.core.async.impl.ioc_helpers.return_chan(state_39008__$1,inst_39006);
} else
{if((state_val_39009 === (4)))
{var state_39008__$1 = state_39008;var statearr_39010_39022 = state_39008__$1;(statearr_39010_39022[(2)] = null);
(statearr_39010_39022[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_39009 === (3)))
{var inst_38996 = (state_39008[(7)]);var inst_39003 = clustermap.boundarylines.rtree_index(rtree,inst_38996);var state_39008__$1 = state_39008;var statearr_39011_39023 = state_39008__$1;(statearr_39011_39023[(2)] = inst_39003);
(statearr_39011_39023[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_39009 === (2)))
{var inst_38996 = (state_39008[(7)]);var inst_38996__$1 = (state_39008[(2)]);var inst_38997 = (function (){var bl_coll_index = inst_38996__$1;return ((function (bl_coll_index,inst_38996,inst_38996__$1,state_val_39009,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_38996,inst_38996__$1,state_val_39009,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_38998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_38997);var inst_38999 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));var inst_39000 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_38999,index_path);var inst_39001 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39000,inst_38996__$1);var state_39008__$1 = (function (){var statearr_39012 = state_39008;(statearr_39012[(7)] = inst_38996__$1);
(statearr_39012[(8)] = inst_38998);
return statearr_39012;
})();if(inst_39001)
{var statearr_39013_39024 = state_39008__$1;(statearr_39013_39024[(1)] = (3));
} else
{var statearr_39014_39025 = state_39008__$1;(statearr_39014_39025[(1)] = (4));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_39009 === (1)))
{var inst_38994 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$896,true], 0));var state_39008__$1 = state_39008;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39008__$1,(2),inst_38994);
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
var state_machine__5694__auto____0 = (function (){var statearr_39018 = [null,null,null,null,null,null,null,null,null];(statearr_39018[(0)] = state_machine__5694__auto__);
(statearr_39018[(1)] = (1));
return statearr_39018;
});
var state_machine__5694__auto____1 = (function (state_39008){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39008);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39019){if((e39019 instanceof Object))
{var ex__5697__auto__ = e39019;var statearr_39020_39026 = state_39008;(statearr_39020_39026[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39008);
return cljs.core.constant$keyword$880;
} else
{throw e39019;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__39027 = state_39008;
state_39008 = G__39027;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39008){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_39021 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39021;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$908], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$911], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$917,x,cljs.core.constant$keyword$918,y,cljs.core.constant$keyword$919,(0),cljs.core.constant$keyword$920,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$914,hit.properties.id,cljs.core.constant$keyword$916,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$912,"Point",cljs.core.constant$keyword$921,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
