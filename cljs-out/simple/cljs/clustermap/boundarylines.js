// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__25229){var vec__25230 = p__25229;var z = cljs.core.nth.call(null,vec__25230,(0),null);var t = cljs.core.nth.call(null,vec__25230,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__25235 = cljs.core.seq.call(null,boundarylines);var chunk__25236 = null;var count__25237 = (0);var i__25238 = (0);while(true){
if((i__25238 < count__25237))
{var bl = cljs.core._nth.call(null,chunk__25236,i__25238);var boundaryline_id_25239 = (bl["id"]);var tolerance_25240 = (bl["tolerance"]);var general_cache_path_25241 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25239,tolerance_25240], null));var collection_cache_path_25242 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25239,tolerance_25240], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_25241,((function (seq__25235,chunk__25236,count__25237,i__25238,boundaryline_id_25239,tolerance_25240,general_cache_path_25241,collection_cache_path_25242,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25235,chunk__25236,count__25237,i__25238,boundaryline_id_25239,tolerance_25240,general_cache_path_25241,collection_cache_path_25242,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_25242))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_25242,((function (seq__25235,chunk__25236,count__25237,i__25238,boundaryline_id_25239,tolerance_25240,general_cache_path_25241,collection_cache_path_25242,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25235,chunk__25236,count__25237,i__25238,boundaryline_id_25239,tolerance_25240,general_cache_path_25241,collection_cache_path_25242,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__25243 = seq__25235;
var G__25244 = chunk__25236;
var G__25245 = count__25237;
var G__25246 = (i__25238 + (1));
seq__25235 = G__25243;
chunk__25236 = G__25244;
count__25237 = G__25245;
i__25238 = G__25246;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25235);if(temp__4126__auto__)
{var seq__25235__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25235__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__25235__$1);{
var G__25247 = cljs.core.chunk_rest.call(null,seq__25235__$1);
var G__25248 = c__4314__auto__;
var G__25249 = cljs.core.count.call(null,c__4314__auto__);
var G__25250 = (0);
seq__25235 = G__25247;
chunk__25236 = G__25248;
count__25237 = G__25249;
i__25238 = G__25250;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__25235__$1);var boundaryline_id_25251 = (bl["id"]);var tolerance_25252 = (bl["tolerance"]);var general_cache_path_25253 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25251,tolerance_25252], null));var collection_cache_path_25254 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25251,tolerance_25252], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_25253,((function (seq__25235,chunk__25236,count__25237,i__25238,boundaryline_id_25251,tolerance_25252,general_cache_path_25253,collection_cache_path_25254,bl,seq__25235__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25235,chunk__25236,count__25237,i__25238,boundaryline_id_25251,tolerance_25252,general_cache_path_25253,collection_cache_path_25254,bl,seq__25235__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_25254))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_25254,((function (seq__25235,chunk__25236,count__25237,i__25238,boundaryline_id_25251,tolerance_25252,general_cache_path_25253,collection_cache_path_25254,bl,seq__25235__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25235,chunk__25236,count__25237,i__25238,boundaryline_id_25251,tolerance_25252,general_cache_path_25253,collection_cache_path_25254,bl,seq__25235__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__25255 = cljs.core.next.call(null,seq__25235__$1);
var G__25256 = null;
var G__25257 = (0);
var G__25258 = (0);
seq__25235 = G__25255;
chunk__25236 = G__25256;
count__25237 = G__25257;
i__25238 = G__25258;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25259){var map__25275 = p__25259;var map__25275__$1 = ((cljs.core.seq_QMARK_.call(null,map__25275))?cljs.core.apply.call(null,cljs.core.hash_map,map__25275):map__25275);var bounds = cljs.core.get.call(null,map__25275__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__25275__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__25275,map__25275__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__25275,map__25275__$1,bounds,boundaryline_ids){
return (function (state_25280){var state_val_25281 = (state_25280[(1)]);if((state_val_25281 === (2)))
{var inst_25277 = (state_25280[(2)]);var inst_25278 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_25277);var state_25280__$1 = (function (){var statearr_25282 = state_25280;(statearr_25282[(7)] = inst_25278);
return statearr_25282;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25280__$1,true);
} else
{if((state_val_25281 === (1)))
{var state_25280__$1 = state_25280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25280__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__25275,map__25275__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__25275,map__25275__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_25286 = [null,null,null,null,null,null,null,null];(statearr_25286[(0)] = state_machine__5694__auto__);
(statearr_25286[(1)] = (1));
return statearr_25286;
});
var state_machine__5694__auto____1 = (function (state_25280){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_25280);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e25287){if((e25287 instanceof Object))
{var ex__5697__auto__ = e25287;var statearr_25288_25290 = state_25280;(statearr_25288_25290[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25287;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25291 = state_25280;
state_25280 = G__25291;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_25280){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_25280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__25275,map__25275__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_25289 = f__5709__auto__.call(null);(statearr_25289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_25289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__25275,map__25275__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__25259 = null;if (arguments.length > 5) {
  p__25259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25259);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__25292){
var app_state = cljs.core.first(arglist__25292);
arglist__25292 = cljs.core.next(arglist__25292);
var boundarylines_path = cljs.core.first(arglist__25292);
arglist__25292 = cljs.core.next(arglist__25292);
var collection_boundarylines_path = cljs.core.first(arglist__25292);
arglist__25292 = cljs.core.next(arglist__25292);
var collection_id = cljs.core.first(arglist__25292);
arglist__25292 = cljs.core.next(arglist__25292);
var tolerance = cljs.core.first(arglist__25292);
var p__25259 = cljs.core.rest(arglist__25292);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25259);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__25293){var map__25298 = p__25293;var map__25298__$1 = ((cljs.core.seq_QMARK_.call(null,map__25298))?cljs.core.apply.call(null,cljs.core.hash_map,map__25298):map__25298);var boundaryline_ids = cljs.core.get.call(null,map__25298__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__25298,map__25298__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__25298,map__25298__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__25298,map__25298__$1,boundaryline_ids){
return (function (p__25299){var vec__25300 = p__25299;var blid = cljs.core.nth.call(null,vec__25300,(0),null);var vec__25301 = cljs.core.nth.call(null,vec__25300,(1),null);var tol = cljs.core.nth.call(null,vec__25301,(0),null);var bl = cljs.core.nth.call(null,vec__25301,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__25298,map__25298__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__25293 = null;if (arguments.length > 5) {
  p__25293 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__25293);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__25302){
var app_state = cljs.core.first(arglist__25302);
arglist__25302 = cljs.core.next(arglist__25302);
var boundarylines_path = cljs.core.first(arglist__25302);
arglist__25302 = cljs.core.next(arglist__25302);
var collection_id = cljs.core.first(arglist__25302);
arglist__25302 = cljs.core.next(arglist__25302);
var bounds = cljs.core.first(arglist__25302);
arglist__25302 = cljs.core.next(arglist__25302);
var zoom = cljs.core.first(arglist__25302);
var p__25293 = cljs.core.rest(arglist__25302);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__25293);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__25307_25311 = cljs.core.seq.call(null,keys);var chunk__25308_25312 = null;var count__25309_25313 = (0);var i__25310_25314 = (0);while(true){
if((i__25310_25314 < count__25309_25313))
{var k_25315 = cljs.core._nth.call(null,chunk__25308_25312,i__25310_25314);var obj_25316 = (js_index[k_25315]);var geom_25317 = (obj_25316["geojson"]);var feature_25318 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25316["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25316["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25316["compact_name"])], null)], null));var __25319__$1 = (feature_25318["geometry"] = geom_25317);var __25320__$2 = ((feature_25318["properties"])["index_object"] = obj_25316);features.push(feature_25318);
{
var G__25321 = seq__25307_25311;
var G__25322 = chunk__25308_25312;
var G__25323 = count__25309_25313;
var G__25324 = (i__25310_25314 + (1));
seq__25307_25311 = G__25321;
chunk__25308_25312 = G__25322;
count__25309_25313 = G__25323;
i__25310_25314 = G__25324;
continue;
}
} else
{var temp__4126__auto___25325 = cljs.core.seq.call(null,seq__25307_25311);if(temp__4126__auto___25325)
{var seq__25307_25326__$1 = temp__4126__auto___25325;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25307_25326__$1))
{var c__4314__auto___25327 = cljs.core.chunk_first.call(null,seq__25307_25326__$1);{
var G__25328 = cljs.core.chunk_rest.call(null,seq__25307_25326__$1);
var G__25329 = c__4314__auto___25327;
var G__25330 = cljs.core.count.call(null,c__4314__auto___25327);
var G__25331 = (0);
seq__25307_25311 = G__25328;
chunk__25308_25312 = G__25329;
count__25309_25313 = G__25330;
i__25310_25314 = G__25331;
continue;
}
} else
{var k_25332 = cljs.core.first.call(null,seq__25307_25326__$1);var obj_25333 = (js_index[k_25332]);var geom_25334 = (obj_25333["geojson"]);var feature_25335 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25333["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25333["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25333["compact_name"])], null)], null));var __25336__$1 = (feature_25335["geometry"] = geom_25334);var __25337__$2 = ((feature_25335["properties"])["index_object"] = obj_25333);features.push(feature_25335);
{
var G__25338 = cljs.core.next.call(null,seq__25307_25326__$1);
var G__25339 = null;
var G__25340 = (0);
var G__25341 = (0);
seq__25307_25311 = G__25338;
chunk__25308_25312 = G__25339;
count__25309_25313 = G__25340;
i__25310_25314 = G__25341;
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
return (function (state_25384){var state_val_25385 = (state_25384[(1)]);if((state_val_25385 === (5)))
{var inst_25382 = (state_25384[(2)]);var state_25384__$1 = state_25384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25384__$1,inst_25382);
} else
{if((state_val_25385 === (4)))
{var state_25384__$1 = state_25384;var statearr_25386_25398 = state_25384__$1;(statearr_25386_25398[(2)] = null);
(statearr_25386_25398[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25385 === (3)))
{var inst_25372 = (state_25384[(7)]);var inst_25379 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_25372);var state_25384__$1 = state_25384;var statearr_25387_25399 = state_25384__$1;(statearr_25387_25399[(2)] = inst_25379);
(statearr_25387_25399[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25385 === (2)))
{var inst_25372 = (state_25384[(7)]);var inst_25372__$1 = (state_25384[(2)]);var inst_25373 = (function (){var bl_coll_index = inst_25372__$1;return ((function (bl_coll_index,inst_25372,inst_25372__$1,state_val_25385,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_25372,inst_25372__$1,state_val_25385,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_25374 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_25373);var inst_25375 = cljs.core.deref.call(null,app_state);var inst_25376 = cljs.core.get_in.call(null,inst_25375,index_path);var inst_25377 = cljs.core._EQ_.call(null,inst_25376,inst_25372__$1);var state_25384__$1 = (function (){var statearr_25388 = state_25384;(statearr_25388[(8)] = inst_25374);
(statearr_25388[(7)] = inst_25372__$1);
return statearr_25388;
})();if(inst_25377)
{var statearr_25389_25400 = state_25384__$1;(statearr_25389_25400[(1)] = (3));
} else
{var statearr_25390_25401 = state_25384__$1;(statearr_25390_25401[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25385 === (1)))
{var inst_25370 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_25384__$1 = state_25384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25384__$1,(2),inst_25370);
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
var state_machine__5694__auto____0 = (function (){var statearr_25394 = [null,null,null,null,null,null,null,null,null];(statearr_25394[(0)] = state_machine__5694__auto__);
(statearr_25394[(1)] = (1));
return statearr_25394;
});
var state_machine__5694__auto____1 = (function (state_25384){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_25384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e25395){if((e25395 instanceof Object))
{var ex__5697__auto__ = e25395;var statearr_25396_25402 = state_25384;(statearr_25396_25402[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25384);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25395;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25403 = state_25384;
state_25384 = G__25403;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_25384){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_25384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_25397 = f__5709__auto__.call(null);(statearr_25397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_25397;
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
