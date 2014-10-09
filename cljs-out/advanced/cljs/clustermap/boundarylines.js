// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some((function (p__46135){var vec__46136 = p__46135;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46136,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46136,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__46141 = cljs.core.seq(boundarylines);var chunk__46142 = null;var count__46143 = (0);var i__46144 = (0);while(true){
if((i__46144 < count__46143))
{var bl = chunk__46142.cljs$core$IIndexed$_nth$arity$2(null,i__46144);var boundaryline_id_46145 = (bl["id"]);var tolerance_46146 = (bl["tolerance"]);var general_cache_path_46147 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_46145,tolerance_46146], null));var collection_cache_path_46148 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_46145,tolerance_46146], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_46147,((function (seq__46141,chunk__46142,count__46143,i__46144,boundaryline_id_46145,tolerance_46146,general_cache_path_46147,collection_cache_path_46148,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__46141,chunk__46142,count__46143,i__46144,boundaryline_id_46145,tolerance_46146,general_cache_path_46147,collection_cache_path_46148,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_46148))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_46148,((function (seq__46141,chunk__46142,count__46143,i__46144,boundaryline_id_46145,tolerance_46146,general_cache_path_46147,collection_cache_path_46148,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__46141,chunk__46142,count__46143,i__46144,boundaryline_id_46145,tolerance_46146,general_cache_path_46147,collection_cache_path_46148,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__46149 = seq__46141;
var G__46150 = chunk__46142;
var G__46151 = count__46143;
var G__46152 = (i__46144 + (1));
seq__46141 = G__46149;
chunk__46142 = G__46150;
count__46143 = G__46151;
i__46144 = G__46152;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46141);if(temp__4126__auto__)
{var seq__46141__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46141__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__46141__$1);{
var G__46153 = cljs.core.chunk_rest(seq__46141__$1);
var G__46154 = c__4314__auto__;
var G__46155 = cljs.core.count(c__4314__auto__);
var G__46156 = (0);
seq__46141 = G__46153;
chunk__46142 = G__46154;
count__46143 = G__46155;
i__46144 = G__46156;
continue;
}
} else
{var bl = cljs.core.first(seq__46141__$1);var boundaryline_id_46157 = (bl["id"]);var tolerance_46158 = (bl["tolerance"]);var general_cache_path_46159 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_46157,tolerance_46158], null));var collection_cache_path_46160 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_46157,tolerance_46158], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_46159,((function (seq__46141,chunk__46142,count__46143,i__46144,boundaryline_id_46157,tolerance_46158,general_cache_path_46159,collection_cache_path_46160,bl,seq__46141__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__46141,chunk__46142,count__46143,i__46144,boundaryline_id_46157,tolerance_46158,general_cache_path_46159,collection_cache_path_46160,bl,seq__46141__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_46160))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_46160,((function (seq__46141,chunk__46142,count__46143,i__46144,boundaryline_id_46157,tolerance_46158,general_cache_path_46159,collection_cache_path_46160,bl,seq__46141__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__46141,chunk__46142,count__46143,i__46144,boundaryline_id_46157,tolerance_46158,general_cache_path_46159,collection_cache_path_46160,bl,seq__46141__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__46161 = cljs.core.next(seq__46141__$1);
var G__46162 = null;
var G__46163 = (0);
var G__46164 = (0);
seq__46141 = G__46161;
chunk__46142 = G__46162;
count__46143 = G__46163;
i__46144 = G__46164;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__46165){var map__46181 = p__46165;var map__46181__$1 = ((cljs.core.seq_QMARK_(map__46181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46181):map__46181);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46181__$1,cljs.core.constant$keyword$1114);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46181__$1,cljs.core.constant$keyword$1113);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$1113,boundaryline_ids,cljs.core.constant$keyword$1110,true], 0));var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,map__46181,map__46181__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__46181,map__46181__$1,bounds,boundaryline_ids){
return (function (state_46186){var state_val_46187 = (state_46186[(1)]);if((state_val_46187 === (2)))
{var inst_46183 = (state_46186[(2)]);var inst_46184 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_46183);var state_46186__$1 = (function (){var statearr_46188 = state_46186;(statearr_46188[(7)] = inst_46184);
return statearr_46188;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_46186__$1,true);
} else
{if((state_val_46187 === (1)))
{var state_46186__$1 = state_46186;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46186__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__46181,map__46181__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__46181,map__46181__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46192 = [null,null,null,null,null,null,null,null];(statearr_46192[(0)] = state_machine__5694__auto__);
(statearr_46192[(1)] = (1));
return statearr_46192;
});
var state_machine__5694__auto____1 = (function (state_46186){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46186);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46193){if((e46193 instanceof Object))
{var ex__5697__auto__ = e46193;var statearr_46194_46196 = state_46186;(statearr_46194_46196[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46186);
return cljs.core.constant$keyword$1094;
} else
{throw e46193;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__46197 = state_46186;
state_46186 = G__46197;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46186){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__46181,map__46181__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_46195 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_46195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,map__46181,map__46181__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__46165 = null;if (arguments.length > 5) {
  p__46165 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__46165);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__46198){
var app_state = cljs.core.first(arglist__46198);
arglist__46198 = cljs.core.next(arglist__46198);
var boundarylines_path = cljs.core.first(arglist__46198);
arglist__46198 = cljs.core.next(arglist__46198);
var collection_boundarylines_path = cljs.core.first(arglist__46198);
arglist__46198 = cljs.core.next(arglist__46198);
var collection_id = cljs.core.first(arglist__46198);
arglist__46198 = cljs.core.next(arglist__46198);
var tolerance = cljs.core.first(arglist__46198);
var p__46165 = cljs.core.rest(arglist__46198);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__46165);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__46199){var map__46204 = p__46199;var map__46204__$1 = ((cljs.core.seq_QMARK_(map__46204))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46204):map__46204);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46204__$1,cljs.core.constant$keyword$1113);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1131], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1133], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__46204,map__46204__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__46204,map__46204__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__46204,map__46204__$1,boundaryline_ids){
return (function (p__46205){var vec__46206 = p__46205;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46206,(0),null);var vec__46207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46206,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46207,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46207,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__46204,map__46204__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$1113,required,cljs.core.constant$keyword$1114,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__46199 = null;if (arguments.length > 5) {
  p__46199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__46199);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__46208){
var app_state = cljs.core.first(arglist__46208);
arglist__46208 = cljs.core.next(arglist__46208);
var boundarylines_path = cljs.core.first(arglist__46208);
arglist__46208 = cljs.core.next(arglist__46208);
var collection_id = cljs.core.first(arglist__46208);
arglist__46208 = cljs.core.next(arglist__46208);
var bounds = cljs.core.first(arglist__46208);
arglist__46208 = cljs.core.next(arglist__46208);
var zoom = cljs.core.first(arglist__46208);
var p__46199 = cljs.core.rest(arglist__46208);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__46199);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1135,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__46213_46217 = cljs.core.seq(keys);var chunk__46214_46218 = null;var count__46215_46219 = (0);var i__46216_46220 = (0);while(true){
if((i__46216_46220 < count__46215_46219))
{var k_46221 = chunk__46214_46218.cljs$core$IIndexed$_nth$arity$2(null,i__46216_46220);var obj_46222 = (js_index[k_46221]);var geom_46223 = (obj_46222["geojson"]);var feature_46224 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,"Feature",cljs.core.constant$keyword$1136,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1137,(obj_46222["id"]),cljs.core.constant$keyword$1138,(obj_46222["id"]),cljs.core.constant$keyword$1139,(obj_46222["compact_name"])], null)], null));var __46225__$1 = (feature_46224["geometry"] = geom_46223);var __46226__$2 = ((feature_46224["properties"])["index_object"] = obj_46222);features.push(feature_46224);
{
var G__46227 = seq__46213_46217;
var G__46228 = chunk__46214_46218;
var G__46229 = count__46215_46219;
var G__46230 = (i__46216_46220 + (1));
seq__46213_46217 = G__46227;
chunk__46214_46218 = G__46228;
count__46215_46219 = G__46229;
i__46216_46220 = G__46230;
continue;
}
} else
{var temp__4126__auto___46231 = cljs.core.seq(seq__46213_46217);if(temp__4126__auto___46231)
{var seq__46213_46232__$1 = temp__4126__auto___46231;if(cljs.core.chunked_seq_QMARK_(seq__46213_46232__$1))
{var c__4314__auto___46233 = cljs.core.chunk_first(seq__46213_46232__$1);{
var G__46234 = cljs.core.chunk_rest(seq__46213_46232__$1);
var G__46235 = c__4314__auto___46233;
var G__46236 = cljs.core.count(c__4314__auto___46233);
var G__46237 = (0);
seq__46213_46217 = G__46234;
chunk__46214_46218 = G__46235;
count__46215_46219 = G__46236;
i__46216_46220 = G__46237;
continue;
}
} else
{var k_46238 = cljs.core.first(seq__46213_46232__$1);var obj_46239 = (js_index[k_46238]);var geom_46240 = (obj_46239["geojson"]);var feature_46241 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,"Feature",cljs.core.constant$keyword$1136,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1137,(obj_46239["id"]),cljs.core.constant$keyword$1138,(obj_46239["id"]),cljs.core.constant$keyword$1139,(obj_46239["compact_name"])], null)], null));var __46242__$1 = (feature_46241["geometry"] = geom_46240);var __46243__$2 = ((feature_46241["properties"])["index_object"] = obj_46239);features.push(feature_46241);
{
var G__46244 = cljs.core.next(seq__46213_46232__$1);
var G__46245 = null;
var G__46246 = (0);
var G__46247 = (0);
seq__46213_46217 = G__46244;
chunk__46214_46218 = G__46245;
count__46215_46219 = G__46246;
i__46216_46220 = G__46247;
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
return (function (state_46290){var state_val_46291 = (state_46290[(1)]);if((state_val_46291 === (5)))
{var inst_46288 = (state_46290[(2)]);var state_46290__$1 = state_46290;return cljs.core.async.impl.ioc_helpers.return_chan(state_46290__$1,inst_46288);
} else
{if((state_val_46291 === (4)))
{var state_46290__$1 = state_46290;var statearr_46292_46304 = state_46290__$1;(statearr_46292_46304[(2)] = null);
(statearr_46292_46304[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46291 === (3)))
{var inst_46278 = (state_46290[(7)]);var inst_46285 = clustermap.boundarylines.rtree_index(rtree,inst_46278);var state_46290__$1 = state_46290;var statearr_46293_46305 = state_46290__$1;(statearr_46293_46305[(2)] = inst_46285);
(statearr_46293_46305[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46291 === (2)))
{var inst_46278 = (state_46290[(7)]);var inst_46278__$1 = (state_46290[(2)]);var inst_46279 = (function (){var bl_coll_index = inst_46278__$1;return ((function (bl_coll_index,inst_46278,inst_46278__$1,state_val_46291,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_46278,inst_46278__$1,state_val_46291,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_46280 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_46279);var inst_46281 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));var inst_46282 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_46281,index_path);var inst_46283 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46282,inst_46278__$1);var state_46290__$1 = (function (){var statearr_46294 = state_46290;(statearr_46294[(8)] = inst_46280);
(statearr_46294[(7)] = inst_46278__$1);
return statearr_46294;
})();if(inst_46283)
{var statearr_46295_46306 = state_46290__$1;(statearr_46295_46306[(1)] = (3));
} else
{var statearr_46296_46307 = state_46290__$1;(statearr_46296_46307[(1)] = (4));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46291 === (1)))
{var inst_46276 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$1110,true], 0));var state_46290__$1 = state_46290;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46290__$1,(2),inst_46276);
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
var state_machine__5694__auto____0 = (function (){var statearr_46300 = [null,null,null,null,null,null,null,null,null];(statearr_46300[(0)] = state_machine__5694__auto__);
(statearr_46300[(1)] = (1));
return statearr_46300;
});
var state_machine__5694__auto____1 = (function (state_46290){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46290);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46301){if((e46301 instanceof Object))
{var ex__5697__auto__ = e46301;var statearr_46302_46308 = state_46290;(statearr_46302_46308[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46290);
return cljs.core.constant$keyword$1094;
} else
{throw e46301;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__46309 = state_46290;
state_46290 = G__46309;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46290){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_46303 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_46303;
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
