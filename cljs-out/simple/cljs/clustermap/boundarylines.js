// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__31216){var vec__31217 = p__31216;var z = cljs.core.nth.call(null,vec__31217,(0),null);var t = cljs.core.nth.call(null,vec__31217,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__31222 = cljs.core.seq.call(null,boundarylines);var chunk__31223 = null;var count__31224 = (0);var i__31225 = (0);while(true){
if((i__31225 < count__31224))
{var bl = cljs.core._nth.call(null,chunk__31223,i__31225);var boundaryline_id_31226 = (bl["id"]);var tolerance_31227 = (bl["tolerance"]);var general_cache_path_31228 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_31226,tolerance_31227], null));var collection_cache_path_31229 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_31226,tolerance_31227], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_31228,((function (seq__31222,chunk__31223,count__31224,i__31225,boundaryline_id_31226,tolerance_31227,general_cache_path_31228,collection_cache_path_31229,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__31222,chunk__31223,count__31224,i__31225,boundaryline_id_31226,tolerance_31227,general_cache_path_31228,collection_cache_path_31229,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_31229))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_31229,((function (seq__31222,chunk__31223,count__31224,i__31225,boundaryline_id_31226,tolerance_31227,general_cache_path_31228,collection_cache_path_31229,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__31222,chunk__31223,count__31224,i__31225,boundaryline_id_31226,tolerance_31227,general_cache_path_31228,collection_cache_path_31229,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__31230 = seq__31222;
var G__31231 = chunk__31223;
var G__31232 = count__31224;
var G__31233 = (i__31225 + (1));
seq__31222 = G__31230;
chunk__31223 = G__31231;
count__31224 = G__31232;
i__31225 = G__31233;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31222);if(temp__4126__auto__)
{var seq__31222__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31222__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__31222__$1);{
var G__31234 = cljs.core.chunk_rest.call(null,seq__31222__$1);
var G__31235 = c__4314__auto__;
var G__31236 = cljs.core.count.call(null,c__4314__auto__);
var G__31237 = (0);
seq__31222 = G__31234;
chunk__31223 = G__31235;
count__31224 = G__31236;
i__31225 = G__31237;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__31222__$1);var boundaryline_id_31238 = (bl["id"]);var tolerance_31239 = (bl["tolerance"]);var general_cache_path_31240 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_31238,tolerance_31239], null));var collection_cache_path_31241 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_31238,tolerance_31239], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_31240,((function (seq__31222,chunk__31223,count__31224,i__31225,boundaryline_id_31238,tolerance_31239,general_cache_path_31240,collection_cache_path_31241,bl,seq__31222__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__31222,chunk__31223,count__31224,i__31225,boundaryline_id_31238,tolerance_31239,general_cache_path_31240,collection_cache_path_31241,bl,seq__31222__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_31241))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_31241,((function (seq__31222,chunk__31223,count__31224,i__31225,boundaryline_id_31238,tolerance_31239,general_cache_path_31240,collection_cache_path_31241,bl,seq__31222__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__31222,chunk__31223,count__31224,i__31225,boundaryline_id_31238,tolerance_31239,general_cache_path_31240,collection_cache_path_31241,bl,seq__31222__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__31242 = cljs.core.next.call(null,seq__31222__$1);
var G__31243 = null;
var G__31244 = (0);
var G__31245 = (0);
seq__31222 = G__31242;
chunk__31223 = G__31243;
count__31224 = G__31244;
i__31225 = G__31245;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__31246){var map__31262 = p__31246;var map__31262__$1 = ((cljs.core.seq_QMARK_.call(null,map__31262))?cljs.core.apply.call(null,cljs.core.hash_map,map__31262):map__31262);var bounds = cljs.core.get.call(null,map__31262__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__31262__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__31262,map__31262__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__31262,map__31262__$1,bounds,boundaryline_ids){
return (function (state_31267){var state_val_31268 = (state_31267[(1)]);if((state_val_31268 === (2)))
{var inst_31264 = (state_31267[(2)]);var inst_31265 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_31264);var state_31267__$1 = (function (){var statearr_31269 = state_31267;(statearr_31269[(7)] = inst_31265);
return statearr_31269;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31267__$1,true);
} else
{if((state_val_31268 === (1)))
{var state_31267__$1 = state_31267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31267__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__31262,map__31262__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__31262,map__31262__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31273 = [null,null,null,null,null,null,null,null];(statearr_31273[(0)] = state_machine__5694__auto__);
(statearr_31273[(1)] = (1));
return statearr_31273;
});
var state_machine__5694__auto____1 = (function (state_31267){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31267);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31274){if((e31274 instanceof Object))
{var ex__5697__auto__ = e31274;var statearr_31275_31277 = state_31267;(statearr_31275_31277[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31274;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31278 = state_31267;
state_31267 = G__31278;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31267){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__31262,map__31262__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_31276 = f__5709__auto__.call(null);(statearr_31276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_31276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__31262,map__31262__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__31246 = null;if (arguments.length > 5) {
  p__31246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__31246);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__31279){
var app_state = cljs.core.first(arglist__31279);
arglist__31279 = cljs.core.next(arglist__31279);
var boundarylines_path = cljs.core.first(arglist__31279);
arglist__31279 = cljs.core.next(arglist__31279);
var collection_boundarylines_path = cljs.core.first(arglist__31279);
arglist__31279 = cljs.core.next(arglist__31279);
var collection_id = cljs.core.first(arglist__31279);
arglist__31279 = cljs.core.next(arglist__31279);
var tolerance = cljs.core.first(arglist__31279);
var p__31246 = cljs.core.rest(arglist__31279);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__31246);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__31280){var map__31285 = p__31280;var map__31285__$1 = ((cljs.core.seq_QMARK_.call(null,map__31285))?cljs.core.apply.call(null,cljs.core.hash_map,map__31285):map__31285);var boundaryline_ids = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__31285,map__31285__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__31285,map__31285__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__31285,map__31285__$1,boundaryline_ids){
return (function (p__31286){var vec__31287 = p__31286;var blid = cljs.core.nth.call(null,vec__31287,(0),null);var vec__31288 = cljs.core.nth.call(null,vec__31287,(1),null);var tol = cljs.core.nth.call(null,vec__31288,(0),null);var bl = cljs.core.nth.call(null,vec__31288,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__31285,map__31285__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__31280 = null;if (arguments.length > 5) {
  p__31280 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__31280);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__31289){
var app_state = cljs.core.first(arglist__31289);
arglist__31289 = cljs.core.next(arglist__31289);
var boundarylines_path = cljs.core.first(arglist__31289);
arglist__31289 = cljs.core.next(arglist__31289);
var collection_id = cljs.core.first(arglist__31289);
arglist__31289 = cljs.core.next(arglist__31289);
var bounds = cljs.core.first(arglist__31289);
arglist__31289 = cljs.core.next(arglist__31289);
var zoom = cljs.core.first(arglist__31289);
var p__31280 = cljs.core.rest(arglist__31289);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__31280);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__31294_31298 = cljs.core.seq.call(null,keys);var chunk__31295_31299 = null;var count__31296_31300 = (0);var i__31297_31301 = (0);while(true){
if((i__31297_31301 < count__31296_31300))
{var k_31302 = cljs.core._nth.call(null,chunk__31295_31299,i__31297_31301);var obj_31303 = (js_index[k_31302]);var geom_31304 = (obj_31303["geojson"]);var feature_31305 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_31303["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_31303["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_31303["compact_name"])], null)], null));var __31306__$1 = (feature_31305["geometry"] = geom_31304);var __31307__$2 = ((feature_31305["properties"])["index_object"] = obj_31303);features.push(feature_31305);
{
var G__31308 = seq__31294_31298;
var G__31309 = chunk__31295_31299;
var G__31310 = count__31296_31300;
var G__31311 = (i__31297_31301 + (1));
seq__31294_31298 = G__31308;
chunk__31295_31299 = G__31309;
count__31296_31300 = G__31310;
i__31297_31301 = G__31311;
continue;
}
} else
{var temp__4126__auto___31312 = cljs.core.seq.call(null,seq__31294_31298);if(temp__4126__auto___31312)
{var seq__31294_31313__$1 = temp__4126__auto___31312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31294_31313__$1))
{var c__4314__auto___31314 = cljs.core.chunk_first.call(null,seq__31294_31313__$1);{
var G__31315 = cljs.core.chunk_rest.call(null,seq__31294_31313__$1);
var G__31316 = c__4314__auto___31314;
var G__31317 = cljs.core.count.call(null,c__4314__auto___31314);
var G__31318 = (0);
seq__31294_31298 = G__31315;
chunk__31295_31299 = G__31316;
count__31296_31300 = G__31317;
i__31297_31301 = G__31318;
continue;
}
} else
{var k_31319 = cljs.core.first.call(null,seq__31294_31313__$1);var obj_31320 = (js_index[k_31319]);var geom_31321 = (obj_31320["geojson"]);var feature_31322 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_31320["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_31320["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_31320["compact_name"])], null)], null));var __31323__$1 = (feature_31322["geometry"] = geom_31321);var __31324__$2 = ((feature_31322["properties"])["index_object"] = obj_31320);features.push(feature_31322);
{
var G__31325 = cljs.core.next.call(null,seq__31294_31313__$1);
var G__31326 = null;
var G__31327 = (0);
var G__31328 = (0);
seq__31294_31298 = G__31325;
chunk__31295_31299 = G__31326;
count__31296_31300 = G__31327;
i__31297_31301 = G__31328;
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
return (function (state_31371){var state_val_31372 = (state_31371[(1)]);if((state_val_31372 === (5)))
{var inst_31369 = (state_31371[(2)]);var state_31371__$1 = state_31371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31371__$1,inst_31369);
} else
{if((state_val_31372 === (4)))
{var state_31371__$1 = state_31371;var statearr_31373_31385 = state_31371__$1;(statearr_31373_31385[(2)] = null);
(statearr_31373_31385[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31372 === (3)))
{var inst_31359 = (state_31371[(7)]);var inst_31366 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_31359);var state_31371__$1 = state_31371;var statearr_31374_31386 = state_31371__$1;(statearr_31374_31386[(2)] = inst_31366);
(statearr_31374_31386[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31372 === (2)))
{var inst_31359 = (state_31371[(7)]);var inst_31359__$1 = (state_31371[(2)]);var inst_31360 = (function (){var bl_coll_index = inst_31359__$1;return ((function (bl_coll_index,inst_31359,inst_31359__$1,state_val_31372,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_31359,inst_31359__$1,state_val_31372,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_31361 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_31360);var inst_31362 = cljs.core.deref.call(null,app_state);var inst_31363 = cljs.core.get_in.call(null,inst_31362,index_path);var inst_31364 = cljs.core._EQ_.call(null,inst_31363,inst_31359__$1);var state_31371__$1 = (function (){var statearr_31375 = state_31371;(statearr_31375[(8)] = inst_31361);
(statearr_31375[(7)] = inst_31359__$1);
return statearr_31375;
})();if(inst_31364)
{var statearr_31376_31387 = state_31371__$1;(statearr_31376_31387[(1)] = (3));
} else
{var statearr_31377_31388 = state_31371__$1;(statearr_31377_31388[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31372 === (1)))
{var inst_31357 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_31371__$1 = state_31371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31371__$1,(2),inst_31357);
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
var state_machine__5694__auto____0 = (function (){var statearr_31381 = [null,null,null,null,null,null,null,null,null];(statearr_31381[(0)] = state_machine__5694__auto__);
(statearr_31381[(1)] = (1));
return statearr_31381;
});
var state_machine__5694__auto____1 = (function (state_31371){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31371);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31382){if((e31382 instanceof Object))
{var ex__5697__auto__ = e31382;var statearr_31383_31389 = state_31371;(statearr_31383_31389[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31390 = state_31371;
state_31371 = G__31390;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31371){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_31384 = f__5709__auto__.call(null);(statearr_31384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_31384;
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
