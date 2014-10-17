// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some((function (p__46112){var vec__46113 = p__46112;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46113,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46113,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__46118 = cljs.core.seq(boundarylines);var chunk__46119 = null;var count__46120 = (0);var i__46121 = (0);while(true){
if((i__46121 < count__46120))
{var bl = chunk__46119.cljs$core$IIndexed$_nth$arity$2(null,i__46121);var boundaryline_id_46122 = (bl["id"]);var tolerance_46123 = (bl["tolerance"]);var general_cache_path_46124 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_46122,tolerance_46123], null));var collection_cache_path_46125 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_46122,tolerance_46123], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_46124,((function (seq__46118,chunk__46119,count__46120,i__46121,boundaryline_id_46122,tolerance_46123,general_cache_path_46124,collection_cache_path_46125,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__46118,chunk__46119,count__46120,i__46121,boundaryline_id_46122,tolerance_46123,general_cache_path_46124,collection_cache_path_46125,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_46125))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_46125,((function (seq__46118,chunk__46119,count__46120,i__46121,boundaryline_id_46122,tolerance_46123,general_cache_path_46124,collection_cache_path_46125,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__46118,chunk__46119,count__46120,i__46121,boundaryline_id_46122,tolerance_46123,general_cache_path_46124,collection_cache_path_46125,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__46126 = seq__46118;
var G__46127 = chunk__46119;
var G__46128 = count__46120;
var G__46129 = (i__46121 + (1));
seq__46118 = G__46126;
chunk__46119 = G__46127;
count__46120 = G__46128;
i__46121 = G__46129;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46118);if(temp__4126__auto__)
{var seq__46118__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46118__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__46118__$1);{
var G__46130 = cljs.core.chunk_rest(seq__46118__$1);
var G__46131 = c__4314__auto__;
var G__46132 = cljs.core.count(c__4314__auto__);
var G__46133 = (0);
seq__46118 = G__46130;
chunk__46119 = G__46131;
count__46120 = G__46132;
i__46121 = G__46133;
continue;
}
} else
{var bl = cljs.core.first(seq__46118__$1);var boundaryline_id_46134 = (bl["id"]);var tolerance_46135 = (bl["tolerance"]);var general_cache_path_46136 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_46134,tolerance_46135], null));var collection_cache_path_46137 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_46134,tolerance_46135], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_46136,((function (seq__46118,chunk__46119,count__46120,i__46121,boundaryline_id_46134,tolerance_46135,general_cache_path_46136,collection_cache_path_46137,bl,seq__46118__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__46118,chunk__46119,count__46120,i__46121,boundaryline_id_46134,tolerance_46135,general_cache_path_46136,collection_cache_path_46137,bl,seq__46118__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_46137))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_46137,((function (seq__46118,chunk__46119,count__46120,i__46121,boundaryline_id_46134,tolerance_46135,general_cache_path_46136,collection_cache_path_46137,bl,seq__46118__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__46118,chunk__46119,count__46120,i__46121,boundaryline_id_46134,tolerance_46135,general_cache_path_46136,collection_cache_path_46137,bl,seq__46118__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__46138 = cljs.core.next(seq__46118__$1);
var G__46139 = null;
var G__46140 = (0);
var G__46141 = (0);
seq__46118 = G__46138;
chunk__46119 = G__46139;
count__46120 = G__46140;
i__46121 = G__46141;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__46142){var map__46158 = p__46142;var map__46158__$1 = ((cljs.core.seq_QMARK_(map__46158))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46158):map__46158);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46158__$1,cljs.core.constant$keyword$1114);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46158__$1,cljs.core.constant$keyword$1113);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$1113,boundaryline_ids,cljs.core.constant$keyword$1110,true], 0));var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,map__46158,map__46158__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__46158,map__46158__$1,bounds,boundaryline_ids){
return (function (state_46163){var state_val_46164 = (state_46163[(1)]);if((state_val_46164 === (2)))
{var inst_46160 = (state_46163[(2)]);var inst_46161 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_46160);var state_46163__$1 = (function (){var statearr_46165 = state_46163;(statearr_46165[(7)] = inst_46161);
return statearr_46165;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_46163__$1,true);
} else
{if((state_val_46164 === (1)))
{var state_46163__$1 = state_46163;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46163__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__46158,map__46158__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__46158,map__46158__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46169 = [null,null,null,null,null,null,null,null];(statearr_46169[(0)] = state_machine__5694__auto__);
(statearr_46169[(1)] = (1));
return statearr_46169;
});
var state_machine__5694__auto____1 = (function (state_46163){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46163);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46170){if((e46170 instanceof Object))
{var ex__5697__auto__ = e46170;var statearr_46171_46173 = state_46163;(statearr_46171_46173[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46163);
return cljs.core.constant$keyword$1094;
} else
{throw e46170;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__46174 = state_46163;
state_46163 = G__46174;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46163){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__46158,map__46158__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_46172 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_46172;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,map__46158,map__46158__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__46142 = null;if (arguments.length > 5) {
  p__46142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__46142);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__46175){
var app_state = cljs.core.first(arglist__46175);
arglist__46175 = cljs.core.next(arglist__46175);
var boundarylines_path = cljs.core.first(arglist__46175);
arglist__46175 = cljs.core.next(arglist__46175);
var collection_boundarylines_path = cljs.core.first(arglist__46175);
arglist__46175 = cljs.core.next(arglist__46175);
var collection_id = cljs.core.first(arglist__46175);
arglist__46175 = cljs.core.next(arglist__46175);
var tolerance = cljs.core.first(arglist__46175);
var p__46142 = cljs.core.rest(arglist__46175);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__46142);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__46176){var map__46181 = p__46176;var map__46181__$1 = ((cljs.core.seq_QMARK_(map__46181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46181):map__46181);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46181__$1,cljs.core.constant$keyword$1113);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1131], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1133], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__46181,map__46181__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__46181,map__46181__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__46181,map__46181__$1,boundaryline_ids){
return (function (p__46182){var vec__46183 = p__46182;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46183,(0),null);var vec__46184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46183,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46184,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46184,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__46181,map__46181__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$1113,required,cljs.core.constant$keyword$1114,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__46176 = null;if (arguments.length > 5) {
  p__46176 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__46176);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__46185){
var app_state = cljs.core.first(arglist__46185);
arglist__46185 = cljs.core.next(arglist__46185);
var boundarylines_path = cljs.core.first(arglist__46185);
arglist__46185 = cljs.core.next(arglist__46185);
var collection_id = cljs.core.first(arglist__46185);
arglist__46185 = cljs.core.next(arglist__46185);
var bounds = cljs.core.first(arglist__46185);
arglist__46185 = cljs.core.next(arglist__46185);
var zoom = cljs.core.first(arglist__46185);
var p__46176 = cljs.core.rest(arglist__46185);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__46176);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1131], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1134], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1135,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__46190_46194 = cljs.core.seq(keys);var chunk__46191_46195 = null;var count__46192_46196 = (0);var i__46193_46197 = (0);while(true){
if((i__46193_46197 < count__46192_46196))
{var k_46198 = chunk__46191_46195.cljs$core$IIndexed$_nth$arity$2(null,i__46193_46197);var obj_46199 = (js_index[k_46198]);var geom_46200 = (obj_46199["geojson"]);var feature_46201 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,"Feature",cljs.core.constant$keyword$1136,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1137,(obj_46199["id"]),cljs.core.constant$keyword$1138,(obj_46199["id"]),cljs.core.constant$keyword$1139,(obj_46199["compact_name"])], null)], null));var __46202__$1 = (feature_46201["geometry"] = geom_46200);var __46203__$2 = ((feature_46201["properties"])["index_object"] = obj_46199);features.push(feature_46201);
{
var G__46204 = seq__46190_46194;
var G__46205 = chunk__46191_46195;
var G__46206 = count__46192_46196;
var G__46207 = (i__46193_46197 + (1));
seq__46190_46194 = G__46204;
chunk__46191_46195 = G__46205;
count__46192_46196 = G__46206;
i__46193_46197 = G__46207;
continue;
}
} else
{var temp__4126__auto___46208 = cljs.core.seq(seq__46190_46194);if(temp__4126__auto___46208)
{var seq__46190_46209__$1 = temp__4126__auto___46208;if(cljs.core.chunked_seq_QMARK_(seq__46190_46209__$1))
{var c__4314__auto___46210 = cljs.core.chunk_first(seq__46190_46209__$1);{
var G__46211 = cljs.core.chunk_rest(seq__46190_46209__$1);
var G__46212 = c__4314__auto___46210;
var G__46213 = cljs.core.count(c__4314__auto___46210);
var G__46214 = (0);
seq__46190_46194 = G__46211;
chunk__46191_46195 = G__46212;
count__46192_46196 = G__46213;
i__46193_46197 = G__46214;
continue;
}
} else
{var k_46215 = cljs.core.first(seq__46190_46209__$1);var obj_46216 = (js_index[k_46215]);var geom_46217 = (obj_46216["geojson"]);var feature_46218 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,"Feature",cljs.core.constant$keyword$1136,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1137,(obj_46216["id"]),cljs.core.constant$keyword$1138,(obj_46216["id"]),cljs.core.constant$keyword$1139,(obj_46216["compact_name"])], null)], null));var __46219__$1 = (feature_46218["geometry"] = geom_46217);var __46220__$2 = ((feature_46218["properties"])["index_object"] = obj_46216);features.push(feature_46218);
{
var G__46221 = cljs.core.next(seq__46190_46209__$1);
var G__46222 = null;
var G__46223 = (0);
var G__46224 = (0);
seq__46190_46194 = G__46221;
chunk__46191_46195 = G__46222;
count__46192_46196 = G__46223;
i__46193_46197 = G__46224;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1131], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1133], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_46267){var state_val_46268 = (state_46267[(1)]);if((state_val_46268 === (5)))
{var inst_46265 = (state_46267[(2)]);var state_46267__$1 = state_46267;return cljs.core.async.impl.ioc_helpers.return_chan(state_46267__$1,inst_46265);
} else
{if((state_val_46268 === (4)))
{var state_46267__$1 = state_46267;var statearr_46269_46281 = state_46267__$1;(statearr_46269_46281[(2)] = null);
(statearr_46269_46281[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46268 === (3)))
{var inst_46255 = (state_46267[(7)]);var inst_46262 = clustermap.boundarylines.rtree_index(rtree,inst_46255);var state_46267__$1 = state_46267;var statearr_46270_46282 = state_46267__$1;(statearr_46270_46282[(2)] = inst_46262);
(statearr_46270_46282[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46268 === (2)))
{var inst_46255 = (state_46267[(7)]);var inst_46255__$1 = (state_46267[(2)]);var inst_46256 = (function (){var bl_coll_index = inst_46255__$1;return ((function (bl_coll_index,inst_46255,inst_46255__$1,state_val_46268,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_46255,inst_46255__$1,state_val_46268,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_46257 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_46256);var inst_46258 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));var inst_46259 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_46258,index_path);var inst_46260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46259,inst_46255__$1);var state_46267__$1 = (function (){var statearr_46271 = state_46267;(statearr_46271[(8)] = inst_46257);
(statearr_46271[(7)] = inst_46255__$1);
return statearr_46271;
})();if(inst_46260)
{var statearr_46272_46283 = state_46267__$1;(statearr_46272_46283[(1)] = (3));
} else
{var statearr_46273_46284 = state_46267__$1;(statearr_46273_46284[(1)] = (4));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46268 === (1)))
{var inst_46253 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$1110,true], 0));var state_46267__$1 = state_46267;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46267__$1,(2),inst_46253);
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
var state_machine__5694__auto____0 = (function (){var statearr_46277 = [null,null,null,null,null,null,null,null,null];(statearr_46277[(0)] = state_machine__5694__auto__);
(statearr_46277[(1)] = (1));
return statearr_46277;
});
var state_machine__5694__auto____1 = (function (state_46267){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46267);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46278){if((e46278 instanceof Object))
{var ex__5697__auto__ = e46278;var statearr_46279_46285 = state_46267;(statearr_46279_46285[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46267);
return cljs.core.constant$keyword$1094;
} else
{throw e46278;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__46286 = state_46267;
state_46267 = G__46286;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46267){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_46280 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_46280;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1131], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1134], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1140,x,cljs.core.constant$keyword$1141,y,cljs.core.constant$keyword$1142,(0),cljs.core.constant$keyword$1143,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,hit.properties.id,cljs.core.constant$keyword$1139,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,"Point",cljs.core.constant$keyword$1144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
