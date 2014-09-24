// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__50411){var vec__50412 = p__50411;var z = cljs.core.nth.call(null,vec__50412,(0),null);var t = cljs.core.nth.call(null,vec__50412,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3558__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__50417 = cljs.core.seq.call(null,boundarylines);var chunk__50418 = null;var count__50419 = (0);var i__50420 = (0);while(true){
if((i__50420 < count__50419))
{var bl = cljs.core._nth.call(null,chunk__50418,i__50420);var boundaryline_id_50421 = (bl["id"]);var tolerance_50422 = (bl["tolerance"]);var general_cache_path_50423 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_50421,tolerance_50422], null));var collection_cache_path_50424 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_50421,tolerance_50422], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_50423,((function (seq__50417,chunk__50418,count__50419,i__50420,boundaryline_id_50421,tolerance_50422,general_cache_path_50423,collection_cache_path_50424,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__50417,chunk__50418,count__50419,i__50420,boundaryline_id_50421,tolerance_50422,general_cache_path_50423,collection_cache_path_50424,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_50424))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_50424,((function (seq__50417,chunk__50418,count__50419,i__50420,boundaryline_id_50421,tolerance_50422,general_cache_path_50423,collection_cache_path_50424,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__50417,chunk__50418,count__50419,i__50420,boundaryline_id_50421,tolerance_50422,general_cache_path_50423,collection_cache_path_50424,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__50425 = seq__50417;
var G__50426 = chunk__50418;
var G__50427 = count__50419;
var G__50428 = (i__50420 + (1));
seq__50417 = G__50425;
chunk__50418 = G__50426;
count__50419 = G__50427;
i__50420 = G__50428;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50417);if(temp__4126__auto__)
{var seq__50417__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50417__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__50417__$1);{
var G__50429 = cljs.core.chunk_rest.call(null,seq__50417__$1);
var G__50430 = c__4314__auto__;
var G__50431 = cljs.core.count.call(null,c__4314__auto__);
var G__50432 = (0);
seq__50417 = G__50429;
chunk__50418 = G__50430;
count__50419 = G__50431;
i__50420 = G__50432;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__50417__$1);var boundaryline_id_50433 = (bl["id"]);var tolerance_50434 = (bl["tolerance"]);var general_cache_path_50435 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_50433,tolerance_50434], null));var collection_cache_path_50436 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_50433,tolerance_50434], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_50435,((function (seq__50417,chunk__50418,count__50419,i__50420,boundaryline_id_50433,tolerance_50434,general_cache_path_50435,collection_cache_path_50436,bl,seq__50417__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__50417,chunk__50418,count__50419,i__50420,boundaryline_id_50433,tolerance_50434,general_cache_path_50435,collection_cache_path_50436,bl,seq__50417__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_50436))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_50436,((function (seq__50417,chunk__50418,count__50419,i__50420,boundaryline_id_50433,tolerance_50434,general_cache_path_50435,collection_cache_path_50436,bl,seq__50417__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__50417,chunk__50418,count__50419,i__50420,boundaryline_id_50433,tolerance_50434,general_cache_path_50435,collection_cache_path_50436,bl,seq__50417__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__50437 = cljs.core.next.call(null,seq__50417__$1);
var G__50438 = null;
var G__50439 = (0);
var G__50440 = (0);
seq__50417 = G__50437;
chunk__50418 = G__50438;
count__50419 = G__50439;
i__50420 = G__50440;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__50441){var map__50457 = p__50441;var map__50457__$1 = ((cljs.core.seq_QMARK_.call(null,map__50457))?cljs.core.apply.call(null,cljs.core.hash_map,map__50457):map__50457);var bounds = cljs.core.get.call(null,map__50457__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__50457__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__50457,map__50457__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__50457,map__50457__$1,bounds,boundaryline_ids){
return (function (state_50462){var state_val_50463 = (state_50462[(1)]);if((state_val_50463 === (2)))
{var inst_50459 = (state_50462[(2)]);var inst_50460 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_50459);var state_50462__$1 = (function (){var statearr_50464 = state_50462;(statearr_50464[(7)] = inst_50460);
return statearr_50464;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50462__$1,true);
} else
{if((state_val_50463 === (1)))
{var state_50462__$1 = state_50462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50462__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__50457,map__50457__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__50457,map__50457__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50468 = [null,null,null,null,null,null,null,null];(statearr_50468[(0)] = state_machine__5694__auto__);
(statearr_50468[(1)] = (1));
return statearr_50468;
});
var state_machine__5694__auto____1 = (function (state_50462){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_50462);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50469){if((e50469 instanceof Object))
{var ex__5697__auto__ = e50469;var statearr_50470_50472 = state_50462;(statearr_50470_50472[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50469;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50473 = state_50462;
state_50462 = G__50473;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50462){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__50457,map__50457__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_50471 = f__5709__auto__.call(null);(statearr_50471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_50471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__50457,map__50457__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__50441 = null;if (arguments.length > 5) {
  p__50441 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__50441);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__50474){
var app_state = cljs.core.first(arglist__50474);
arglist__50474 = cljs.core.next(arglist__50474);
var boundarylines_path = cljs.core.first(arglist__50474);
arglist__50474 = cljs.core.next(arglist__50474);
var collection_boundarylines_path = cljs.core.first(arglist__50474);
arglist__50474 = cljs.core.next(arglist__50474);
var collection_id = cljs.core.first(arglist__50474);
arglist__50474 = cljs.core.next(arglist__50474);
var tolerance = cljs.core.first(arglist__50474);
var p__50441 = cljs.core.rest(arglist__50474);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__50441);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3546__auto__ = default_bl;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3558__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__50475){var map__50480 = p__50475;var map__50480__$1 = ((cljs.core.seq_QMARK_.call(null,map__50480))?cljs.core.apply.call(null,cljs.core.hash_map,map__50480):map__50480);var boundaryline_ids = cljs.core.get.call(null,map__50480__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__50480,map__50480__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__50480,map__50480__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__50480,map__50480__$1,boundaryline_ids){
return (function (p__50481){var vec__50482 = p__50481;var blid = cljs.core.nth.call(null,vec__50482,(0),null);var vec__50483 = cljs.core.nth.call(null,vec__50482,(1),null);var tol = cljs.core.nth.call(null,vec__50483,(0),null);var bl = cljs.core.nth.call(null,vec__50483,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__50480,map__50480__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__50475 = null;if (arguments.length > 5) {
  p__50475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__50475);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__50484){
var app_state = cljs.core.first(arglist__50484);
arglist__50484 = cljs.core.next(arglist__50484);
var boundarylines_path = cljs.core.first(arglist__50484);
arglist__50484 = cljs.core.next(arglist__50484);
var collection_id = cljs.core.first(arglist__50484);
arglist__50484 = cljs.core.next(arglist__50484);
var bounds = cljs.core.first(arglist__50484);
arglist__50484 = cljs.core.next(arglist__50484);
var zoom = cljs.core.first(arglist__50484);
var p__50475 = cljs.core.rest(arglist__50484);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__50475);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__50489_50493 = cljs.core.seq.call(null,keys);var chunk__50490_50494 = null;var count__50491_50495 = (0);var i__50492_50496 = (0);while(true){
if((i__50492_50496 < count__50491_50495))
{var k_50497 = cljs.core._nth.call(null,chunk__50490_50494,i__50492_50496);var obj_50498 = (js_index[k_50497]);var geom_50499 = (obj_50498["geojson"]);var feature_50500 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_50498["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_50498["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_50498["compact_name"])], null)], null));var __50501__$1 = (feature_50500["geometry"] = geom_50499);var __50502__$2 = ((feature_50500["properties"])["index_object"] = obj_50498);features.push(feature_50500);
{
var G__50503 = seq__50489_50493;
var G__50504 = chunk__50490_50494;
var G__50505 = count__50491_50495;
var G__50506 = (i__50492_50496 + (1));
seq__50489_50493 = G__50503;
chunk__50490_50494 = G__50504;
count__50491_50495 = G__50505;
i__50492_50496 = G__50506;
continue;
}
} else
{var temp__4126__auto___50507 = cljs.core.seq.call(null,seq__50489_50493);if(temp__4126__auto___50507)
{var seq__50489_50508__$1 = temp__4126__auto___50507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50489_50508__$1))
{var c__4314__auto___50509 = cljs.core.chunk_first.call(null,seq__50489_50508__$1);{
var G__50510 = cljs.core.chunk_rest.call(null,seq__50489_50508__$1);
var G__50511 = c__4314__auto___50509;
var G__50512 = cljs.core.count.call(null,c__4314__auto___50509);
var G__50513 = (0);
seq__50489_50493 = G__50510;
chunk__50490_50494 = G__50511;
count__50491_50495 = G__50512;
i__50492_50496 = G__50513;
continue;
}
} else
{var k_50514 = cljs.core.first.call(null,seq__50489_50508__$1);var obj_50515 = (js_index[k_50514]);var geom_50516 = (obj_50515["geojson"]);var feature_50517 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_50515["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_50515["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_50515["compact_name"])], null)], null));var __50518__$1 = (feature_50517["geometry"] = geom_50516);var __50519__$2 = ((feature_50517["properties"])["index_object"] = obj_50515);features.push(feature_50517);
{
var G__50520 = cljs.core.next.call(null,seq__50489_50508__$1);
var G__50521 = null;
var G__50522 = (0);
var G__50523 = (0);
seq__50489_50493 = G__50520;
chunk__50490_50494 = G__50521;
count__50491_50495 = G__50522;
i__50492_50496 = G__50523;
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
{var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_50566){var state_val_50567 = (state_50566[(1)]);if((state_val_50567 === (5)))
{var inst_50564 = (state_50566[(2)]);var state_50566__$1 = state_50566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50566__$1,inst_50564);
} else
{if((state_val_50567 === (4)))
{var state_50566__$1 = state_50566;var statearr_50568_50580 = state_50566__$1;(statearr_50568_50580[(2)] = null);
(statearr_50568_50580[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50567 === (3)))
{var inst_50554 = (state_50566[(7)]);var inst_50561 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_50554);var state_50566__$1 = state_50566;var statearr_50569_50581 = state_50566__$1;(statearr_50569_50581[(2)] = inst_50561);
(statearr_50569_50581[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50567 === (2)))
{var inst_50554 = (state_50566[(7)]);var inst_50554__$1 = (state_50566[(2)]);var inst_50555 = (function (){var bl_coll_index = inst_50554__$1;return ((function (bl_coll_index,inst_50554,inst_50554__$1,state_val_50567,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_50554,inst_50554__$1,state_val_50567,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_50556 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_50555);var inst_50557 = cljs.core.deref.call(null,app_state);var inst_50558 = cljs.core.get_in.call(null,inst_50557,index_path);var inst_50559 = cljs.core._EQ_.call(null,inst_50558,inst_50554__$1);var state_50566__$1 = (function (){var statearr_50570 = state_50566;(statearr_50570[(8)] = inst_50556);
(statearr_50570[(7)] = inst_50554__$1);
return statearr_50570;
})();if(inst_50559)
{var statearr_50571_50582 = state_50566__$1;(statearr_50571_50582[(1)] = (3));
} else
{var statearr_50572_50583 = state_50566__$1;(statearr_50572_50583[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50567 === (1)))
{var inst_50552 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_50566__$1 = state_50566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50566__$1,(2),inst_50552);
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
var state_machine__5694__auto____0 = (function (){var statearr_50576 = [null,null,null,null,null,null,null,null,null];(statearr_50576[(0)] = state_machine__5694__auto__);
(statearr_50576[(1)] = (1));
return statearr_50576;
});
var state_machine__5694__auto____1 = (function (state_50566){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_50566);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50577){if((e50577 instanceof Object))
{var ex__5697__auto__ = e50577;var statearr_50578_50584 = state_50566;(statearr_50578_50584[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50566);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50577;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50585 = state_50566;
state_50566 = G__50585;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50566){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_50579 = f__5709__auto__.call(null);(statearr_50579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_50579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5708__auto__;
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
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});

//# sourceMappingURL=boundarylines.js.map