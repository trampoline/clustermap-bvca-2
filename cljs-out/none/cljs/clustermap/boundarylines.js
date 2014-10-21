// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3637__auto__ = cljs.core.some.call(null,(function (p__76999){var vec__77000 = p__76999;var z = cljs.core.nth.call(null,vec__77000,(0),null);var t = cljs.core.nth.call(null,vec__77000,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = z;if(cljs.core.truth_(and__3625__auto__))
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
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3637__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
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
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__77005 = cljs.core.seq.call(null,boundarylines);var chunk__77006 = null;var count__77007 = (0);var i__77008 = (0);while(true){
if((i__77008 < count__77007))
{var bl = cljs.core._nth.call(null,chunk__77006,i__77008);var boundaryline_id_77009 = (bl["id"]);var tolerance_77010 = (bl["tolerance"]);var general_cache_path_77011 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_77009,tolerance_77010], null));var collection_cache_path_77012 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_77009,tolerance_77010], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_77011,((function (seq__77005,chunk__77006,count__77007,i__77008,boundaryline_id_77009,tolerance_77010,general_cache_path_77011,collection_cache_path_77012,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__77005,chunk__77006,count__77007,i__77008,boundaryline_id_77009,tolerance_77010,general_cache_path_77011,collection_cache_path_77012,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_77012))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_77012,((function (seq__77005,chunk__77006,count__77007,i__77008,boundaryline_id_77009,tolerance_77010,general_cache_path_77011,collection_cache_path_77012,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__77005,chunk__77006,count__77007,i__77008,boundaryline_id_77009,tolerance_77010,general_cache_path_77011,collection_cache_path_77012,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__77013 = seq__77005;
var G__77014 = chunk__77006;
var G__77015 = count__77007;
var G__77016 = (i__77008 + (1));
seq__77005 = G__77013;
chunk__77006 = G__77014;
count__77007 = G__77015;
i__77008 = G__77016;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__77005);if(temp__4126__auto__)
{var seq__77005__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__77005__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__77005__$1);{
var G__77017 = cljs.core.chunk_rest.call(null,seq__77005__$1);
var G__77018 = c__4406__auto__;
var G__77019 = cljs.core.count.call(null,c__4406__auto__);
var G__77020 = (0);
seq__77005 = G__77017;
chunk__77006 = G__77018;
count__77007 = G__77019;
i__77008 = G__77020;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__77005__$1);var boundaryline_id_77021 = (bl["id"]);var tolerance_77022 = (bl["tolerance"]);var general_cache_path_77023 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_77021,tolerance_77022], null));var collection_cache_path_77024 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_77021,tolerance_77022], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_77023,((function (seq__77005,chunk__77006,count__77007,i__77008,boundaryline_id_77021,tolerance_77022,general_cache_path_77023,collection_cache_path_77024,bl,seq__77005__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__77005,chunk__77006,count__77007,i__77008,boundaryline_id_77021,tolerance_77022,general_cache_path_77023,collection_cache_path_77024,bl,seq__77005__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_77024))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_77024,((function (seq__77005,chunk__77006,count__77007,i__77008,boundaryline_id_77021,tolerance_77022,general_cache_path_77023,collection_cache_path_77024,bl,seq__77005__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__77005,chunk__77006,count__77007,i__77008,boundaryline_id_77021,tolerance_77022,general_cache_path_77023,collection_cache_path_77024,bl,seq__77005__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__77025 = cljs.core.next.call(null,seq__77005__$1);
var G__77026 = null;
var G__77027 = (0);
var G__77028 = (0);
seq__77005 = G__77025;
chunk__77006 = G__77026;
count__77007 = G__77027;
i__77008 = G__77028;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__77029){var map__77045 = p__77029;var map__77045__$1 = ((cljs.core.seq_QMARK_.call(null,map__77045))?cljs.core.apply.call(null,cljs.core.hash_map,map__77045):map__77045);var bounds = cljs.core.get.call(null,map__77045__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__77045__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,comm,map__77045,map__77045__$1,bounds,boundaryline_ids){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,comm,map__77045,map__77045__$1,bounds,boundaryline_ids){
return (function (state_77050){var state_val_77051 = (state_77050[(1)]);if((state_val_77051 === (2)))
{var inst_77047 = (state_77050[(2)]);var inst_77048 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_77047);var state_77050__$1 = (function (){var statearr_77052 = state_77050;(statearr_77052[(7)] = inst_77048);
return statearr_77052;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77050__$1,true);
} else
{if((state_val_77051 === (1)))
{var state_77050__$1 = state_77050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77050__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto__,comm,map__77045,map__77045__$1,bounds,boundaryline_ids))
;return ((function (switch__5804__auto__,c__5819__auto__,comm,map__77045,map__77045__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_77056 = [null,null,null,null,null,null,null,null];(statearr_77056[(0)] = state_machine__5805__auto__);
(statearr_77056[(1)] = (1));
return statearr_77056;
});
var state_machine__5805__auto____1 = (function (state_77050){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_77050);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e77057){if((e77057 instanceof Object))
{var ex__5808__auto__ = e77057;var statearr_77058_77060 = state_77050;(statearr_77058_77060[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77050);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e77057;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77061 = state_77050;
state_77050 = G__77061;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_77050){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_77050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,comm,map__77045,map__77045__$1,bounds,boundaryline_ids))
})();var state__5821__auto__ = (function (){var statearr_77059 = f__5820__auto__.call(null);(statearr_77059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_77059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,comm,map__77045,map__77045__$1,bounds,boundaryline_ids))
);
return c__5819__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__77029 = null;if (arguments.length > 5) {
  p__77029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__77029);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__77062){
var app_state = cljs.core.first(arglist__77062);
arglist__77062 = cljs.core.next(arglist__77062);
var boundarylines_path = cljs.core.first(arglist__77062);
arglist__77062 = cljs.core.next(arglist__77062);
var collection_boundarylines_path = cljs.core.first(arglist__77062);
arglist__77062 = cljs.core.next(arglist__77062);
var collection_id = cljs.core.first(arglist__77062);
arglist__77062 = cljs.core.next(arglist__77062);
var tolerance = cljs.core.first(arglist__77062);
var p__77029 = cljs.core.rest(arglist__77062);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__77029);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3625__auto__ = default_bl;if(cljs.core.truth_(and__3625__auto__))
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3637__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__77063){var map__77068 = p__77063;var map__77068__$1 = ((cljs.core.seq_QMARK_.call(null,map__77068))?cljs.core.apply.call(null,cljs.core.hash_map,map__77068):map__77068);var boundaryline_ids = cljs.core.get.call(null,map__77068__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__77068,map__77068__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__77068,map__77068__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__77068,map__77068__$1,boundaryline_ids){
return (function (p__77069){var vec__77070 = p__77069;var blid = cljs.core.nth.call(null,vec__77070,(0),null);var vec__77071 = cljs.core.nth.call(null,vec__77070,(1),null);var tol = cljs.core.nth.call(null,vec__77071,(0),null);var bl = cljs.core.nth.call(null,vec__77071,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__77068,map__77068__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__77063 = null;if (arguments.length > 5) {
  p__77063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__77063);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__77072){
var app_state = cljs.core.first(arglist__77072);
arglist__77072 = cljs.core.next(arglist__77072);
var boundarylines_path = cljs.core.first(arglist__77072);
arglist__77072 = cljs.core.next(arglist__77072);
var collection_id = cljs.core.first(arglist__77072);
arglist__77072 = cljs.core.next(arglist__77072);
var bounds = cljs.core.first(arglist__77072);
arglist__77072 = cljs.core.next(arglist__77072);
var zoom = cljs.core.first(arglist__77072);
var p__77063 = cljs.core.rest(arglist__77072);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__77063);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__77077_77081 = cljs.core.seq.call(null,keys);var chunk__77078_77082 = null;var count__77079_77083 = (0);var i__77080_77084 = (0);while(true){
if((i__77080_77084 < count__77079_77083))
{var k_77085 = cljs.core._nth.call(null,chunk__77078_77082,i__77080_77084);var obj_77086 = (js_index[k_77085]);var geom_77087 = (obj_77086["geojson"]);var feature_77088 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_77086["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_77086["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_77086["compact_name"])], null)], null));var __77089__$1 = (feature_77088["geometry"] = geom_77087);var __77090__$2 = ((feature_77088["properties"])["index_object"] = obj_77086);features.push(feature_77088);
{
var G__77091 = seq__77077_77081;
var G__77092 = chunk__77078_77082;
var G__77093 = count__77079_77083;
var G__77094 = (i__77080_77084 + (1));
seq__77077_77081 = G__77091;
chunk__77078_77082 = G__77092;
count__77079_77083 = G__77093;
i__77080_77084 = G__77094;
continue;
}
} else
{var temp__4126__auto___77095 = cljs.core.seq.call(null,seq__77077_77081);if(temp__4126__auto___77095)
{var seq__77077_77096__$1 = temp__4126__auto___77095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__77077_77096__$1))
{var c__4406__auto___77097 = cljs.core.chunk_first.call(null,seq__77077_77096__$1);{
var G__77098 = cljs.core.chunk_rest.call(null,seq__77077_77096__$1);
var G__77099 = c__4406__auto___77097;
var G__77100 = cljs.core.count.call(null,c__4406__auto___77097);
var G__77101 = (0);
seq__77077_77081 = G__77098;
chunk__77078_77082 = G__77099;
count__77079_77083 = G__77100;
i__77080_77084 = G__77101;
continue;
}
} else
{var k_77102 = cljs.core.first.call(null,seq__77077_77096__$1);var obj_77103 = (js_index[k_77102]);var geom_77104 = (obj_77103["geojson"]);var feature_77105 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_77103["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_77103["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_77103["compact_name"])], null)], null));var __77106__$1 = (feature_77105["geometry"] = geom_77104);var __77107__$2 = ((feature_77105["properties"])["index_object"] = obj_77103);features.push(feature_77105);
{
var G__77108 = cljs.core.next.call(null,seq__77077_77096__$1);
var G__77109 = null;
var G__77110 = (0);
var G__77111 = (0);
seq__77077_77081 = G__77108;
chunk__77078_77082 = G__77109;
count__77079_77083 = G__77110;
i__77080_77084 = G__77111;
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
{var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_77154){var state_val_77155 = (state_77154[(1)]);if((state_val_77155 === (5)))
{var inst_77152 = (state_77154[(2)]);var state_77154__$1 = state_77154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77154__$1,inst_77152);
} else
{if((state_val_77155 === (4)))
{var state_77154__$1 = state_77154;var statearr_77156_77168 = state_77154__$1;(statearr_77156_77168[(2)] = null);
(statearr_77156_77168[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77155 === (3)))
{var inst_77142 = (state_77154[(7)]);var inst_77149 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_77142);var state_77154__$1 = state_77154;var statearr_77157_77169 = state_77154__$1;(statearr_77157_77169[(2)] = inst_77149);
(statearr_77157_77169[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77155 === (2)))
{var inst_77142 = (state_77154[(7)]);var inst_77142__$1 = (state_77154[(2)]);var inst_77143 = (function (){var bl_coll_index = inst_77142__$1;return ((function (bl_coll_index,inst_77142,inst_77142__$1,state_val_77155,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_77142,inst_77142__$1,state_val_77155,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_77144 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_77143);var inst_77145 = cljs.core.deref.call(null,app_state);var inst_77146 = cljs.core.get_in.call(null,inst_77145,index_path);var inst_77147 = cljs.core._EQ_.call(null,inst_77146,inst_77142__$1);var state_77154__$1 = (function (){var statearr_77158 = state_77154;(statearr_77158[(7)] = inst_77142__$1);
(statearr_77158[(8)] = inst_77144);
return statearr_77158;
})();if(inst_77147)
{var statearr_77159_77170 = state_77154__$1;(statearr_77159_77170[(1)] = (3));
} else
{var statearr_77160_77171 = state_77154__$1;(statearr_77160_77171[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77155 === (1)))
{var inst_77140 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_77154__$1 = state_77154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77154__$1,(2),inst_77140);
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
var state_machine__5805__auto____0 = (function (){var statearr_77164 = [null,null,null,null,null,null,null,null,null];(statearr_77164[(0)] = state_machine__5805__auto__);
(statearr_77164[(1)] = (1));
return statearr_77164;
});
var state_machine__5805__auto____1 = (function (state_77154){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_77154);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e77165){if((e77165 instanceof Object))
{var ex__5808__auto__ = e77165;var statearr_77166_77172 = state_77154;(statearr_77166_77172[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77154);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e77165;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77173 = state_77154;
state_77154 = G__77173;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_77154){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_77154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5821__auto__ = (function (){var statearr_77167 = f__5820__auto__.call(null);(statearr_77167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_77167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5819__auto__;
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
,(function (){var or__3637__auto__ = hits;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});

//# sourceMappingURL=boundarylines.js.map