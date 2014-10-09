// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__12948){var vec__12949 = p__12948;var z = cljs.core.nth.call(null,vec__12949,(0),null);var t = cljs.core.nth.call(null,vec__12949,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__12954 = cljs.core.seq.call(null,boundarylines);var chunk__12955 = null;var count__12956 = (0);var i__12957 = (0);while(true){
if((i__12957 < count__12956))
{var bl = cljs.core._nth.call(null,chunk__12955,i__12957);var boundaryline_id_12958 = (bl["id"]);var tolerance_12959 = (bl["tolerance"]);var general_cache_path_12960 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12958,tolerance_12959], null));var collection_cache_path_12961 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12958,tolerance_12959], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12960,((function (seq__12954,chunk__12955,count__12956,i__12957,boundaryline_id_12958,tolerance_12959,general_cache_path_12960,collection_cache_path_12961,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12954,chunk__12955,count__12956,i__12957,boundaryline_id_12958,tolerance_12959,general_cache_path_12960,collection_cache_path_12961,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12961))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12961,((function (seq__12954,chunk__12955,count__12956,i__12957,boundaryline_id_12958,tolerance_12959,general_cache_path_12960,collection_cache_path_12961,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12954,chunk__12955,count__12956,i__12957,boundaryline_id_12958,tolerance_12959,general_cache_path_12960,collection_cache_path_12961,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12962 = seq__12954;
var G__12963 = chunk__12955;
var G__12964 = count__12956;
var G__12965 = (i__12957 + (1));
seq__12954 = G__12962;
chunk__12955 = G__12963;
count__12956 = G__12964;
i__12957 = G__12965;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12954);if(temp__4126__auto__)
{var seq__12954__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12954__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__12954__$1);{
var G__12966 = cljs.core.chunk_rest.call(null,seq__12954__$1);
var G__12967 = c__4314__auto__;
var G__12968 = cljs.core.count.call(null,c__4314__auto__);
var G__12969 = (0);
seq__12954 = G__12966;
chunk__12955 = G__12967;
count__12956 = G__12968;
i__12957 = G__12969;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__12954__$1);var boundaryline_id_12970 = (bl["id"]);var tolerance_12971 = (bl["tolerance"]);var general_cache_path_12972 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12970,tolerance_12971], null));var collection_cache_path_12973 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12970,tolerance_12971], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12972,((function (seq__12954,chunk__12955,count__12956,i__12957,boundaryline_id_12970,tolerance_12971,general_cache_path_12972,collection_cache_path_12973,bl,seq__12954__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12954,chunk__12955,count__12956,i__12957,boundaryline_id_12970,tolerance_12971,general_cache_path_12972,collection_cache_path_12973,bl,seq__12954__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12973))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12973,((function (seq__12954,chunk__12955,count__12956,i__12957,boundaryline_id_12970,tolerance_12971,general_cache_path_12972,collection_cache_path_12973,bl,seq__12954__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12954,chunk__12955,count__12956,i__12957,boundaryline_id_12970,tolerance_12971,general_cache_path_12972,collection_cache_path_12973,bl,seq__12954__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12974 = cljs.core.next.call(null,seq__12954__$1);
var G__12975 = null;
var G__12976 = (0);
var G__12977 = (0);
seq__12954 = G__12974;
chunk__12955 = G__12975;
count__12956 = G__12976;
i__12957 = G__12977;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12978){var map__12994 = p__12978;var map__12994__$1 = ((cljs.core.seq_QMARK_.call(null,map__12994))?cljs.core.apply.call(null,cljs.core.hash_map,map__12994):map__12994);var bounds = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__12994,map__12994__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__12994,map__12994__$1,bounds,boundaryline_ids){
return (function (state_12999){var state_val_13000 = (state_12999[(1)]);if((state_val_13000 === (2)))
{var inst_12996 = (state_12999[(2)]);var inst_12997 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_12996);var state_12999__$1 = (function (){var statearr_13001 = state_12999;(statearr_13001[(7)] = inst_12997);
return statearr_13001;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12999__$1,true);
} else
{if((state_val_13000 === (1)))
{var state_12999__$1 = state_12999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12999__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__12994,map__12994__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__12994,map__12994__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_13005 = [null,null,null,null,null,null,null,null];(statearr_13005[(0)] = state_machine__5694__auto__);
(statearr_13005[(1)] = (1));
return statearr_13005;
});
var state_machine__5694__auto____1 = (function (state_12999){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12999);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e13006){if((e13006 instanceof Object))
{var ex__5697__auto__ = e13006;var statearr_13007_13009 = state_12999;(statearr_13007_13009[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12999);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13006;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13010 = state_12999;
state_12999 = G__13010;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12999){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__12994,map__12994__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_13008 = f__5709__auto__.call(null);(statearr_13008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_13008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__12994,map__12994__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__12978 = null;if (arguments.length > 5) {
  p__12978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12978);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__13011){
var app_state = cljs.core.first(arglist__13011);
arglist__13011 = cljs.core.next(arglist__13011);
var boundarylines_path = cljs.core.first(arglist__13011);
arglist__13011 = cljs.core.next(arglist__13011);
var collection_boundarylines_path = cljs.core.first(arglist__13011);
arglist__13011 = cljs.core.next(arglist__13011);
var collection_id = cljs.core.first(arglist__13011);
arglist__13011 = cljs.core.next(arglist__13011);
var tolerance = cljs.core.first(arglist__13011);
var p__12978 = cljs.core.rest(arglist__13011);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12978);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__13012){var map__13017 = p__13012;var map__13017__$1 = ((cljs.core.seq_QMARK_.call(null,map__13017))?cljs.core.apply.call(null,cljs.core.hash_map,map__13017):map__13017);var boundaryline_ids = cljs.core.get.call(null,map__13017__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__13017,map__13017__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__13017,map__13017__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__13017,map__13017__$1,boundaryline_ids){
return (function (p__13018){var vec__13019 = p__13018;var blid = cljs.core.nth.call(null,vec__13019,(0),null);var vec__13020 = cljs.core.nth.call(null,vec__13019,(1),null);var tol = cljs.core.nth.call(null,vec__13020,(0),null);var bl = cljs.core.nth.call(null,vec__13020,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__13017,map__13017__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__13012 = null;if (arguments.length > 5) {
  p__13012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__13012);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__13021){
var app_state = cljs.core.first(arglist__13021);
arglist__13021 = cljs.core.next(arglist__13021);
var boundarylines_path = cljs.core.first(arglist__13021);
arglist__13021 = cljs.core.next(arglist__13021);
var collection_id = cljs.core.first(arglist__13021);
arglist__13021 = cljs.core.next(arglist__13021);
var bounds = cljs.core.first(arglist__13021);
arglist__13021 = cljs.core.next(arglist__13021);
var zoom = cljs.core.first(arglist__13021);
var p__13012 = cljs.core.rest(arglist__13021);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__13012);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__13026_13030 = cljs.core.seq.call(null,keys);var chunk__13027_13031 = null;var count__13028_13032 = (0);var i__13029_13033 = (0);while(true){
if((i__13029_13033 < count__13028_13032))
{var k_13034 = cljs.core._nth.call(null,chunk__13027_13031,i__13029_13033);var obj_13035 = (js_index[k_13034]);var geom_13036 = (obj_13035["geojson"]);var feature_13037 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13035["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13035["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13035["compact_name"])], null)], null));var __13038__$1 = (feature_13037["geometry"] = geom_13036);var __13039__$2 = ((feature_13037["properties"])["index_object"] = obj_13035);features.push(feature_13037);
{
var G__13040 = seq__13026_13030;
var G__13041 = chunk__13027_13031;
var G__13042 = count__13028_13032;
var G__13043 = (i__13029_13033 + (1));
seq__13026_13030 = G__13040;
chunk__13027_13031 = G__13041;
count__13028_13032 = G__13042;
i__13029_13033 = G__13043;
continue;
}
} else
{var temp__4126__auto___13044 = cljs.core.seq.call(null,seq__13026_13030);if(temp__4126__auto___13044)
{var seq__13026_13045__$1 = temp__4126__auto___13044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13026_13045__$1))
{var c__4314__auto___13046 = cljs.core.chunk_first.call(null,seq__13026_13045__$1);{
var G__13047 = cljs.core.chunk_rest.call(null,seq__13026_13045__$1);
var G__13048 = c__4314__auto___13046;
var G__13049 = cljs.core.count.call(null,c__4314__auto___13046);
var G__13050 = (0);
seq__13026_13030 = G__13047;
chunk__13027_13031 = G__13048;
count__13028_13032 = G__13049;
i__13029_13033 = G__13050;
continue;
}
} else
{var k_13051 = cljs.core.first.call(null,seq__13026_13045__$1);var obj_13052 = (js_index[k_13051]);var geom_13053 = (obj_13052["geojson"]);var feature_13054 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13052["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13052["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13052["compact_name"])], null)], null));var __13055__$1 = (feature_13054["geometry"] = geom_13053);var __13056__$2 = ((feature_13054["properties"])["index_object"] = obj_13052);features.push(feature_13054);
{
var G__13057 = cljs.core.next.call(null,seq__13026_13045__$1);
var G__13058 = null;
var G__13059 = (0);
var G__13060 = (0);
seq__13026_13030 = G__13057;
chunk__13027_13031 = G__13058;
count__13028_13032 = G__13059;
i__13029_13033 = G__13060;
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
return (function (state_13103){var state_val_13104 = (state_13103[(1)]);if((state_val_13104 === (5)))
{var inst_13101 = (state_13103[(2)]);var state_13103__$1 = state_13103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13103__$1,inst_13101);
} else
{if((state_val_13104 === (4)))
{var state_13103__$1 = state_13103;var statearr_13105_13117 = state_13103__$1;(statearr_13105_13117[(2)] = null);
(statearr_13105_13117[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13104 === (3)))
{var inst_13091 = (state_13103[(7)]);var inst_13098 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_13091);var state_13103__$1 = state_13103;var statearr_13106_13118 = state_13103__$1;(statearr_13106_13118[(2)] = inst_13098);
(statearr_13106_13118[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13104 === (2)))
{var inst_13091 = (state_13103[(7)]);var inst_13091__$1 = (state_13103[(2)]);var inst_13092 = (function (){var bl_coll_index = inst_13091__$1;return ((function (bl_coll_index,inst_13091,inst_13091__$1,state_val_13104,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_13091,inst_13091__$1,state_val_13104,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_13093 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_13092);var inst_13094 = cljs.core.deref.call(null,app_state);var inst_13095 = cljs.core.get_in.call(null,inst_13094,index_path);var inst_13096 = cljs.core._EQ_.call(null,inst_13095,inst_13091__$1);var state_13103__$1 = (function (){var statearr_13107 = state_13103;(statearr_13107[(7)] = inst_13091__$1);
(statearr_13107[(8)] = inst_13093);
return statearr_13107;
})();if(inst_13096)
{var statearr_13108_13119 = state_13103__$1;(statearr_13108_13119[(1)] = (3));
} else
{var statearr_13109_13120 = state_13103__$1;(statearr_13109_13120[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13104 === (1)))
{var inst_13089 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_13103__$1 = state_13103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13103__$1,(2),inst_13089);
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
var state_machine__5694__auto____0 = (function (){var statearr_13113 = [null,null,null,null,null,null,null,null,null];(statearr_13113[(0)] = state_machine__5694__auto__);
(statearr_13113[(1)] = (1));
return statearr_13113;
});
var state_machine__5694__auto____1 = (function (state_13103){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_13103);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e13114){if((e13114 instanceof Object))
{var ex__5697__auto__ = e13114;var statearr_13115_13121 = state_13103;(statearr_13115_13121[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13114;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13122 = state_13103;
state_13103 = G__13122;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_13103){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_13103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_13116 = f__5709__auto__.call(null);(statearr_13116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_13116;
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
