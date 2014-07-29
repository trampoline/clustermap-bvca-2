// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__37140){var vec__37141 = p__37140;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37141,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37141,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__37146 = cljs.core.seq(boundarylines);var chunk__37147 = null;var count__37148 = (0);var i__37149 = (0);while(true){
if((i__37149 < count__37148))
{var bl = chunk__37147.cljs$core$IIndexed$_nth$arity$2(null,i__37149);var boundaryline_id_37150 = (bl["id"]);var tolerance_37151 = (bl["tolerance"]);var general_cache_path_37152 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37150,tolerance_37151], null));var collection_cache_path_37153 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37150,tolerance_37151], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37152,((function (seq__37146,chunk__37147,count__37148,i__37149,boundaryline_id_37150,tolerance_37151,general_cache_path_37152,collection_cache_path_37153,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37146,chunk__37147,count__37148,i__37149,boundaryline_id_37150,tolerance_37151,general_cache_path_37152,collection_cache_path_37153,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37153))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37153,((function (seq__37146,chunk__37147,count__37148,i__37149,boundaryline_id_37150,tolerance_37151,general_cache_path_37152,collection_cache_path_37153,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37146,chunk__37147,count__37148,i__37149,boundaryline_id_37150,tolerance_37151,general_cache_path_37152,collection_cache_path_37153,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37154 = seq__37146;
var G__37155 = chunk__37147;
var G__37156 = count__37148;
var G__37157 = (i__37149 + (1));
seq__37146 = G__37154;
chunk__37147 = G__37155;
count__37148 = G__37156;
i__37149 = G__37157;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37146);if(temp__4126__auto__)
{var seq__37146__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37146__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37146__$1);{
var G__37158 = cljs.core.chunk_rest(seq__37146__$1);
var G__37159 = c__4299__auto__;
var G__37160 = cljs.core.count(c__4299__auto__);
var G__37161 = (0);
seq__37146 = G__37158;
chunk__37147 = G__37159;
count__37148 = G__37160;
i__37149 = G__37161;
continue;
}
} else
{var bl = cljs.core.first(seq__37146__$1);var boundaryline_id_37162 = (bl["id"]);var tolerance_37163 = (bl["tolerance"]);var general_cache_path_37164 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37162,tolerance_37163], null));var collection_cache_path_37165 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37162,tolerance_37163], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37164,((function (seq__37146,chunk__37147,count__37148,i__37149,boundaryline_id_37162,tolerance_37163,general_cache_path_37164,collection_cache_path_37165,bl,seq__37146__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37146,chunk__37147,count__37148,i__37149,boundaryline_id_37162,tolerance_37163,general_cache_path_37164,collection_cache_path_37165,bl,seq__37146__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37165))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37165,((function (seq__37146,chunk__37147,count__37148,i__37149,boundaryline_id_37162,tolerance_37163,general_cache_path_37164,collection_cache_path_37165,bl,seq__37146__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37146,chunk__37147,count__37148,i__37149,boundaryline_id_37162,tolerance_37163,general_cache_path_37164,collection_cache_path_37165,bl,seq__37146__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37166 = cljs.core.next(seq__37146__$1);
var G__37167 = null;
var G__37168 = (0);
var G__37169 = (0);
seq__37146 = G__37166;
chunk__37147 = G__37167;
count__37148 = G__37168;
i__37149 = G__37169;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37170){var map__37186 = p__37170;var map__37186__$1 = ((cljs.core.seq_QMARK_(map__37186))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37186):map__37186);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,cljs.core.constant$keyword$797);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,cljs.core.constant$keyword$796);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$796,boundaryline_ids,cljs.core.constant$keyword$793,true], 0));var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,comm,map__37186,map__37186__$1,bounds,boundaryline_ids){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,map__37186,map__37186__$1,bounds,boundaryline_ids){
return (function (state_37191){var state_val_37192 = (state_37191[(1)]);if((state_val_37192 === (2)))
{var inst_37188 = (state_37191[(2)]);var inst_37189 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_37188);var state_37191__$1 = (function (){var statearr_37193 = state_37191;(statearr_37193[(7)] = inst_37189);
return statearr_37193;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37191__$1,true);
} else
{if((state_val_37192 === (1)))
{var state_37191__$1 = state_37191;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37191__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,map__37186,map__37186__$1,bounds,boundaryline_ids))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,map__37186,map__37186__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37197 = [null,null,null,null,null,null,null,null];(statearr_37197[(0)] = state_machine__5679__auto__);
(statearr_37197[(1)] = (1));
return statearr_37197;
});
var state_machine__5679__auto____1 = (function (state_37191){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37191);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37198){if((e37198 instanceof Object))
{var ex__5682__auto__ = e37198;var statearr_37199_37201 = state_37191;(statearr_37199_37201[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37191);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e37198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__37202 = state_37191;
state_37191 = G__37202;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37191){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,map__37186,map__37186__$1,bounds,boundaryline_ids))
})();var state__5695__auto__ = (function (){var statearr_37200 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,comm,map__37186,map__37186__$1,bounds,boundaryline_ids))
);
return c__5693__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__37170 = null;if (arguments.length > 5) {
  p__37170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37170);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__37203){
var app_state = cljs.core.first(arglist__37203);
arglist__37203 = cljs.core.next(arglist__37203);
var boundarylines_path = cljs.core.first(arglist__37203);
arglist__37203 = cljs.core.next(arglist__37203);
var collection_boundarylines_path = cljs.core.first(arglist__37203);
arglist__37203 = cljs.core.next(arglist__37203);
var collection_id = cljs.core.first(arglist__37203);
arglist__37203 = cljs.core.next(arglist__37203);
var tolerance = cljs.core.first(arglist__37203);
var p__37170 = cljs.core.rest(arglist__37203);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37170);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__37204){var map__37209 = p__37204;var map__37209__$1 = ((cljs.core.seq_QMARK_(map__37209))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37209):map__37209);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37209__$1,cljs.core.constant$keyword$796);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$806], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$807], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$808], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$807], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37209,map__37209__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37209,map__37209__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37209,map__37209__$1,boundaryline_ids){
return (function (p__37210){var vec__37211 = p__37210;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37211,(0),null);var vec__37212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37211,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37212,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37212,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37209,map__37209__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$796,required,cljs.core.constant$keyword$797,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__37204 = null;if (arguments.length > 5) {
  p__37204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__37204);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__37213){
var app_state = cljs.core.first(arglist__37213);
arglist__37213 = cljs.core.next(arglist__37213);
var boundarylines_path = cljs.core.first(arglist__37213);
arglist__37213 = cljs.core.next(arglist__37213);
var collection_id = cljs.core.first(arglist__37213);
arglist__37213 = cljs.core.next(arglist__37213);
var bounds = cljs.core.first(arglist__37213);
arglist__37213 = cljs.core.next(arglist__37213);
var zoom = cljs.core.first(arglist__37213);
var p__37204 = cljs.core.rest(arglist__37213);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__37204);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$806], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$809], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$810,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__37218_37222 = cljs.core.seq(keys);var chunk__37219_37223 = null;var count__37220_37224 = (0);var i__37221_37225 = (0);while(true){
if((i__37221_37225 < count__37220_37224))
{var k_37226 = chunk__37219_37223.cljs$core$IIndexed$_nth$arity$2(null,i__37221_37225);var obj_37227 = (js_index[k_37226]);var geom_37228 = (obj_37227["geojson"]);var feature_37229 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$810,"Feature",cljs.core.constant$keyword$811,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$812,(obj_37227["id"]),cljs.core.constant$keyword$813,(obj_37227["id"]),cljs.core.constant$keyword$814,(obj_37227["compact_name"])], null)], null));var __37230__$1 = (feature_37229["geometry"] = geom_37228);var __37231__$2 = ((feature_37229["properties"])["index_object"] = obj_37227);features.push(feature_37229);
{
var G__37232 = seq__37218_37222;
var G__37233 = chunk__37219_37223;
var G__37234 = count__37220_37224;
var G__37235 = (i__37221_37225 + (1));
seq__37218_37222 = G__37232;
chunk__37219_37223 = G__37233;
count__37220_37224 = G__37234;
i__37221_37225 = G__37235;
continue;
}
} else
{var temp__4126__auto___37236 = cljs.core.seq(seq__37218_37222);if(temp__4126__auto___37236)
{var seq__37218_37237__$1 = temp__4126__auto___37236;if(cljs.core.chunked_seq_QMARK_(seq__37218_37237__$1))
{var c__4299__auto___37238 = cljs.core.chunk_first(seq__37218_37237__$1);{
var G__37239 = cljs.core.chunk_rest(seq__37218_37237__$1);
var G__37240 = c__4299__auto___37238;
var G__37241 = cljs.core.count(c__4299__auto___37238);
var G__37242 = (0);
seq__37218_37222 = G__37239;
chunk__37219_37223 = G__37240;
count__37220_37224 = G__37241;
i__37221_37225 = G__37242;
continue;
}
} else
{var k_37243 = cljs.core.first(seq__37218_37237__$1);var obj_37244 = (js_index[k_37243]);var geom_37245 = (obj_37244["geojson"]);var feature_37246 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$810,"Feature",cljs.core.constant$keyword$811,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$812,(obj_37244["id"]),cljs.core.constant$keyword$813,(obj_37244["id"]),cljs.core.constant$keyword$814,(obj_37244["compact_name"])], null)], null));var __37247__$1 = (feature_37246["geometry"] = geom_37245);var __37248__$2 = ((feature_37246["properties"])["index_object"] = obj_37244);features.push(feature_37246);
{
var G__37249 = cljs.core.next(seq__37218_37237__$1);
var G__37250 = null;
var G__37251 = (0);
var G__37252 = (0);
seq__37218_37222 = G__37249;
chunk__37219_37223 = G__37250;
count__37220_37224 = G__37251;
i__37221_37225 = G__37252;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$806], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$808], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_37295){var state_val_37296 = (state_37295[(1)]);if((state_val_37296 === (5)))
{var inst_37293 = (state_37295[(2)]);var state_37295__$1 = state_37295;return cljs.core.async.impl.ioc_helpers.return_chan(state_37295__$1,inst_37293);
} else
{if((state_val_37296 === (4)))
{var state_37295__$1 = state_37295;var statearr_37297_37309 = state_37295__$1;(statearr_37297_37309[(2)] = null);
(statearr_37297_37309[(1)] = (5));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37296 === (3)))
{var inst_37283 = (state_37295[(7)]);var inst_37290 = clustermap.boundarylines.rtree_index(rtree,inst_37283);var state_37295__$1 = state_37295;var statearr_37298_37310 = state_37295__$1;(statearr_37298_37310[(2)] = inst_37290);
(statearr_37298_37310[(1)] = (5));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37296 === (2)))
{var inst_37283 = (state_37295[(7)]);var inst_37283__$1 = (state_37295[(2)]);var inst_37284 = (function (){var bl_coll_index = inst_37283__$1;return ((function (bl_coll_index,inst_37283,inst_37283__$1,state_val_37296,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_37283,inst_37283__$1,state_val_37296,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_37285 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_37284);var inst_37286 = cljs.core.deref(app_state);var inst_37287 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37286,index_path);var inst_37288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37287,inst_37283__$1);var state_37295__$1 = (function (){var statearr_37299 = state_37295;(statearr_37299[(7)] = inst_37283__$1);
(statearr_37299[(8)] = inst_37285);
return statearr_37299;
})();if(inst_37288)
{var statearr_37300_37311 = state_37295__$1;(statearr_37300_37311[(1)] = (3));
} else
{var statearr_37301_37312 = state_37295__$1;(statearr_37301_37312[(1)] = (4));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_37296 === (1)))
{var inst_37281 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$793,true], 0));var state_37295__$1 = state_37295;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37295__$1,(2),inst_37281);
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
var state_machine__5679__auto____0 = (function (){var statearr_37305 = [null,null,null,null,null,null,null,null,null];(statearr_37305[(0)] = state_machine__5679__auto__);
(statearr_37305[(1)] = (1));
return statearr_37305;
});
var state_machine__5679__auto____1 = (function (state_37295){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37295);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37306){if((e37306 instanceof Object))
{var ex__5682__auto__ = e37306;var statearr_37307_37313 = state_37295;(statearr_37307_37313[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37295);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e37306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__37314 = state_37295;
state_37295 = G__37314;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37295){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_37308 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37308;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$806], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$809], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$815,x,cljs.core.constant$keyword$816,y,cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$818,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$812,hit.properties.id,cljs.core.constant$keyword$814,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$810,"Point",cljs.core.constant$keyword$819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
