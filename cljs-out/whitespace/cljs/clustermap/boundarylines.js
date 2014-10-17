// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__16253){var vec__16254 = p__16253;var z = cljs.core.nth.call(null,vec__16254,(0),null);var t = cljs.core.nth.call(null,vec__16254,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__16259 = cljs.core.seq.call(null,boundarylines);var chunk__16260 = null;var count__16261 = (0);var i__16262 = (0);while(true){
if((i__16262 < count__16261))
{var bl = cljs.core._nth.call(null,chunk__16260,i__16262);var boundaryline_id_16263 = (bl["id"]);var tolerance_16264 = (bl["tolerance"]);var general_cache_path_16265 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_16263,tolerance_16264], null));var collection_cache_path_16266 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_16263,tolerance_16264], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_16265,((function (seq__16259,chunk__16260,count__16261,i__16262,boundaryline_id_16263,tolerance_16264,general_cache_path_16265,collection_cache_path_16266,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__16259,chunk__16260,count__16261,i__16262,boundaryline_id_16263,tolerance_16264,general_cache_path_16265,collection_cache_path_16266,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_16266))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_16266,((function (seq__16259,chunk__16260,count__16261,i__16262,boundaryline_id_16263,tolerance_16264,general_cache_path_16265,collection_cache_path_16266,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__16259,chunk__16260,count__16261,i__16262,boundaryline_id_16263,tolerance_16264,general_cache_path_16265,collection_cache_path_16266,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__16267 = seq__16259;
var G__16268 = chunk__16260;
var G__16269 = count__16261;
var G__16270 = (i__16262 + (1));
seq__16259 = G__16267;
chunk__16260 = G__16268;
count__16261 = G__16269;
i__16262 = G__16270;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16259);if(temp__4126__auto__)
{var seq__16259__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16259__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__16259__$1);{
var G__16271 = cljs.core.chunk_rest.call(null,seq__16259__$1);
var G__16272 = c__4314__auto__;
var G__16273 = cljs.core.count.call(null,c__4314__auto__);
var G__16274 = (0);
seq__16259 = G__16271;
chunk__16260 = G__16272;
count__16261 = G__16273;
i__16262 = G__16274;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__16259__$1);var boundaryline_id_16275 = (bl["id"]);var tolerance_16276 = (bl["tolerance"]);var general_cache_path_16277 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_16275,tolerance_16276], null));var collection_cache_path_16278 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_16275,tolerance_16276], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_16277,((function (seq__16259,chunk__16260,count__16261,i__16262,boundaryline_id_16275,tolerance_16276,general_cache_path_16277,collection_cache_path_16278,bl,seq__16259__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__16259,chunk__16260,count__16261,i__16262,boundaryline_id_16275,tolerance_16276,general_cache_path_16277,collection_cache_path_16278,bl,seq__16259__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_16278))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_16278,((function (seq__16259,chunk__16260,count__16261,i__16262,boundaryline_id_16275,tolerance_16276,general_cache_path_16277,collection_cache_path_16278,bl,seq__16259__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__16259,chunk__16260,count__16261,i__16262,boundaryline_id_16275,tolerance_16276,general_cache_path_16277,collection_cache_path_16278,bl,seq__16259__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__16279 = cljs.core.next.call(null,seq__16259__$1);
var G__16280 = null;
var G__16281 = (0);
var G__16282 = (0);
seq__16259 = G__16279;
chunk__16260 = G__16280;
count__16261 = G__16281;
i__16262 = G__16282;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__16283){var map__16299 = p__16283;var map__16299__$1 = ((cljs.core.seq_QMARK_.call(null,map__16299))?cljs.core.apply.call(null,cljs.core.hash_map,map__16299):map__16299);var bounds = cljs.core.get.call(null,map__16299__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__16299__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__16299,map__16299__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__16299,map__16299__$1,bounds,boundaryline_ids){
return (function (state_16304){var state_val_16305 = (state_16304[(1)]);if((state_val_16305 === (2)))
{var inst_16301 = (state_16304[(2)]);var inst_16302 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_16301);var state_16304__$1 = (function (){var statearr_16306 = state_16304;(statearr_16306[(7)] = inst_16302);
return statearr_16306;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16304__$1,true);
} else
{if((state_val_16305 === (1)))
{var state_16304__$1 = state_16304;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16304__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__16299,map__16299__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__16299,map__16299__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16310 = [null,null,null,null,null,null,null,null];(statearr_16310[(0)] = state_machine__5694__auto__);
(statearr_16310[(1)] = (1));
return statearr_16310;
});
var state_machine__5694__auto____1 = (function (state_16304){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16304);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16311){if((e16311 instanceof Object))
{var ex__5697__auto__ = e16311;var statearr_16312_16314 = state_16304;(statearr_16312_16314[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16304);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16311;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16315 = state_16304;
state_16304 = G__16315;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16304){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__16299,map__16299__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_16313 = f__5709__auto__.call(null);(statearr_16313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__16299,map__16299__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__16283 = null;if (arguments.length > 5) {
  p__16283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__16283);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__16316){
var app_state = cljs.core.first(arglist__16316);
arglist__16316 = cljs.core.next(arglist__16316);
var boundarylines_path = cljs.core.first(arglist__16316);
arglist__16316 = cljs.core.next(arglist__16316);
var collection_boundarylines_path = cljs.core.first(arglist__16316);
arglist__16316 = cljs.core.next(arglist__16316);
var collection_id = cljs.core.first(arglist__16316);
arglist__16316 = cljs.core.next(arglist__16316);
var tolerance = cljs.core.first(arglist__16316);
var p__16283 = cljs.core.rest(arglist__16316);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__16283);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__16317){var map__16322 = p__16317;var map__16322__$1 = ((cljs.core.seq_QMARK_.call(null,map__16322))?cljs.core.apply.call(null,cljs.core.hash_map,map__16322):map__16322);var boundaryline_ids = cljs.core.get.call(null,map__16322__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__16322,map__16322__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__16322,map__16322__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__16322,map__16322__$1,boundaryline_ids){
return (function (p__16323){var vec__16324 = p__16323;var blid = cljs.core.nth.call(null,vec__16324,(0),null);var vec__16325 = cljs.core.nth.call(null,vec__16324,(1),null);var tol = cljs.core.nth.call(null,vec__16325,(0),null);var bl = cljs.core.nth.call(null,vec__16325,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__16322,map__16322__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__16317 = null;if (arguments.length > 5) {
  p__16317 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__16317);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__16326){
var app_state = cljs.core.first(arglist__16326);
arglist__16326 = cljs.core.next(arglist__16326);
var boundarylines_path = cljs.core.first(arglist__16326);
arglist__16326 = cljs.core.next(arglist__16326);
var collection_id = cljs.core.first(arglist__16326);
arglist__16326 = cljs.core.next(arglist__16326);
var bounds = cljs.core.first(arglist__16326);
arglist__16326 = cljs.core.next(arglist__16326);
var zoom = cljs.core.first(arglist__16326);
var p__16317 = cljs.core.rest(arglist__16326);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__16317);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__16331_16335 = cljs.core.seq.call(null,keys);var chunk__16332_16336 = null;var count__16333_16337 = (0);var i__16334_16338 = (0);while(true){
if((i__16334_16338 < count__16333_16337))
{var k_16339 = cljs.core._nth.call(null,chunk__16332_16336,i__16334_16338);var obj_16340 = (js_index[k_16339]);var geom_16341 = (obj_16340["geojson"]);var feature_16342 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_16340["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_16340["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_16340["compact_name"])], null)], null));var __16343__$1 = (feature_16342["geometry"] = geom_16341);var __16344__$2 = ((feature_16342["properties"])["index_object"] = obj_16340);features.push(feature_16342);
{
var G__16345 = seq__16331_16335;
var G__16346 = chunk__16332_16336;
var G__16347 = count__16333_16337;
var G__16348 = (i__16334_16338 + (1));
seq__16331_16335 = G__16345;
chunk__16332_16336 = G__16346;
count__16333_16337 = G__16347;
i__16334_16338 = G__16348;
continue;
}
} else
{var temp__4126__auto___16349 = cljs.core.seq.call(null,seq__16331_16335);if(temp__4126__auto___16349)
{var seq__16331_16350__$1 = temp__4126__auto___16349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16331_16350__$1))
{var c__4314__auto___16351 = cljs.core.chunk_first.call(null,seq__16331_16350__$1);{
var G__16352 = cljs.core.chunk_rest.call(null,seq__16331_16350__$1);
var G__16353 = c__4314__auto___16351;
var G__16354 = cljs.core.count.call(null,c__4314__auto___16351);
var G__16355 = (0);
seq__16331_16335 = G__16352;
chunk__16332_16336 = G__16353;
count__16333_16337 = G__16354;
i__16334_16338 = G__16355;
continue;
}
} else
{var k_16356 = cljs.core.first.call(null,seq__16331_16350__$1);var obj_16357 = (js_index[k_16356]);var geom_16358 = (obj_16357["geojson"]);var feature_16359 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_16357["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_16357["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_16357["compact_name"])], null)], null));var __16360__$1 = (feature_16359["geometry"] = geom_16358);var __16361__$2 = ((feature_16359["properties"])["index_object"] = obj_16357);features.push(feature_16359);
{
var G__16362 = cljs.core.next.call(null,seq__16331_16350__$1);
var G__16363 = null;
var G__16364 = (0);
var G__16365 = (0);
seq__16331_16335 = G__16362;
chunk__16332_16336 = G__16363;
count__16333_16337 = G__16364;
i__16334_16338 = G__16365;
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
return (function (state_16408){var state_val_16409 = (state_16408[(1)]);if((state_val_16409 === (5)))
{var inst_16406 = (state_16408[(2)]);var state_16408__$1 = state_16408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16408__$1,inst_16406);
} else
{if((state_val_16409 === (4)))
{var state_16408__$1 = state_16408;var statearr_16410_16422 = state_16408__$1;(statearr_16410_16422[(2)] = null);
(statearr_16410_16422[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16409 === (3)))
{var inst_16396 = (state_16408[(7)]);var inst_16403 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_16396);var state_16408__$1 = state_16408;var statearr_16411_16423 = state_16408__$1;(statearr_16411_16423[(2)] = inst_16403);
(statearr_16411_16423[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16409 === (2)))
{var inst_16396 = (state_16408[(7)]);var inst_16396__$1 = (state_16408[(2)]);var inst_16397 = (function (){var bl_coll_index = inst_16396__$1;return ((function (bl_coll_index,inst_16396,inst_16396__$1,state_val_16409,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_16396,inst_16396__$1,state_val_16409,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_16398 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_16397);var inst_16399 = cljs.core.deref.call(null,app_state);var inst_16400 = cljs.core.get_in.call(null,inst_16399,index_path);var inst_16401 = cljs.core._EQ_.call(null,inst_16400,inst_16396__$1);var state_16408__$1 = (function (){var statearr_16412 = state_16408;(statearr_16412[(7)] = inst_16396__$1);
(statearr_16412[(8)] = inst_16398);
return statearr_16412;
})();if(inst_16401)
{var statearr_16413_16424 = state_16408__$1;(statearr_16413_16424[(1)] = (3));
} else
{var statearr_16414_16425 = state_16408__$1;(statearr_16414_16425[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16409 === (1)))
{var inst_16394 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_16408__$1 = state_16408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16408__$1,(2),inst_16394);
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
var state_machine__5694__auto____0 = (function (){var statearr_16418 = [null,null,null,null,null,null,null,null,null];(statearr_16418[(0)] = state_machine__5694__auto__);
(statearr_16418[(1)] = (1));
return statearr_16418;
});
var state_machine__5694__auto____1 = (function (state_16408){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16408);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16419){if((e16419 instanceof Object))
{var ex__5697__auto__ = e16419;var statearr_16420_16426 = state_16408;(statearr_16420_16426[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16419;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16427 = state_16408;
state_16408 = G__16427;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16408){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_16421 = f__5709__auto__.call(null);(statearr_16421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16421;
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
