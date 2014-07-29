// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__24919){var vec__24920 = p__24919;var z = cljs.core.nth.call(null,vec__24920,(0),null);var t = cljs.core.nth.call(null,vec__24920,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3543__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__24925 = cljs.core.seq.call(null,boundarylines);var chunk__24926 = null;var count__24927 = (0);var i__24928 = (0);while(true){
if((i__24928 < count__24927))
{var bl = cljs.core._nth.call(null,chunk__24926,i__24928);var boundaryline_id_24929 = (bl["id"]);var tolerance_24930 = (bl["tolerance"]);var general_cache_path_24931 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_24929,tolerance_24930], null));var collection_cache_path_24932 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_24929,tolerance_24930], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_24931,((function (seq__24925,chunk__24926,count__24927,i__24928,boundaryline_id_24929,tolerance_24930,general_cache_path_24931,collection_cache_path_24932,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__24925,chunk__24926,count__24927,i__24928,boundaryline_id_24929,tolerance_24930,general_cache_path_24931,collection_cache_path_24932,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_24932))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_24932,((function (seq__24925,chunk__24926,count__24927,i__24928,boundaryline_id_24929,tolerance_24930,general_cache_path_24931,collection_cache_path_24932,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__24925,chunk__24926,count__24927,i__24928,boundaryline_id_24929,tolerance_24930,general_cache_path_24931,collection_cache_path_24932,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__24933 = seq__24925;
var G__24934 = chunk__24926;
var G__24935 = count__24927;
var G__24936 = (i__24928 + (1));
seq__24925 = G__24933;
chunk__24926 = G__24934;
count__24927 = G__24935;
i__24928 = G__24936;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24925);if(temp__4126__auto__)
{var seq__24925__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24925__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__24925__$1);{
var G__24937 = cljs.core.chunk_rest.call(null,seq__24925__$1);
var G__24938 = c__4299__auto__;
var G__24939 = cljs.core.count.call(null,c__4299__auto__);
var G__24940 = (0);
seq__24925 = G__24937;
chunk__24926 = G__24938;
count__24927 = G__24939;
i__24928 = G__24940;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__24925__$1);var boundaryline_id_24941 = (bl["id"]);var tolerance_24942 = (bl["tolerance"]);var general_cache_path_24943 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_24941,tolerance_24942], null));var collection_cache_path_24944 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_24941,tolerance_24942], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_24943,((function (seq__24925,chunk__24926,count__24927,i__24928,boundaryline_id_24941,tolerance_24942,general_cache_path_24943,collection_cache_path_24944,bl,seq__24925__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__24925,chunk__24926,count__24927,i__24928,boundaryline_id_24941,tolerance_24942,general_cache_path_24943,collection_cache_path_24944,bl,seq__24925__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_24944))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_24944,((function (seq__24925,chunk__24926,count__24927,i__24928,boundaryline_id_24941,tolerance_24942,general_cache_path_24943,collection_cache_path_24944,bl,seq__24925__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__24925,chunk__24926,count__24927,i__24928,boundaryline_id_24941,tolerance_24942,general_cache_path_24943,collection_cache_path_24944,bl,seq__24925__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__24945 = cljs.core.next.call(null,seq__24925__$1);
var G__24946 = null;
var G__24947 = (0);
var G__24948 = (0);
seq__24925 = G__24945;
chunk__24926 = G__24946;
count__24927 = G__24947;
i__24928 = G__24948;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__24949){var map__24965 = p__24949;var map__24965__$1 = ((cljs.core.seq_QMARK_.call(null,map__24965))?cljs.core.apply.call(null,cljs.core.hash_map,map__24965):map__24965);var bounds = cljs.core.get.call(null,map__24965__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24965__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,map__24965,map__24965__$1,bounds,boundaryline_ids){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,map__24965,map__24965__$1,bounds,boundaryline_ids){
return (function (state_24970){var state_val_24971 = (state_24970[(1)]);if((state_val_24971 === (2)))
{var inst_24967 = (state_24970[(2)]);var inst_24968 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_24967);var state_24970__$1 = (function (){var statearr_24972 = state_24970;(statearr_24972[(7)] = inst_24968);
return statearr_24972;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24970__$1,true);
} else
{if((state_val_24971 === (1)))
{var state_24970__$1 = state_24970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24970__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,map__24965,map__24965__$1,bounds,boundaryline_ids))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,map__24965,map__24965__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_24976 = [null,null,null,null,null,null,null,null];(statearr_24976[(0)] = state_machine__5679__auto__);
(statearr_24976[(1)] = (1));
return statearr_24976;
});
var state_machine__5679__auto____1 = (function (state_24970){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_24970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e24977){if((e24977 instanceof Object))
{var ex__5682__auto__ = e24977;var statearr_24978_24980 = state_24970;(statearr_24978_24980[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24981 = state_24970;
state_24970 = G__24981;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_24970){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_24970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,map__24965,map__24965__$1,bounds,boundaryline_ids))
})();var state__5695__auto__ = (function (){var statearr_24979 = f__5694__auto__.call(null);(statearr_24979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_24979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,map__24965,map__24965__$1,bounds,boundaryline_ids))
);
return c__5693__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__24949 = null;if (arguments.length > 5) {
  p__24949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__24949);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__24982){
var app_state = cljs.core.first(arglist__24982);
arglist__24982 = cljs.core.next(arglist__24982);
var boundarylines_path = cljs.core.first(arglist__24982);
arglist__24982 = cljs.core.next(arglist__24982);
var collection_boundarylines_path = cljs.core.first(arglist__24982);
arglist__24982 = cljs.core.next(arglist__24982);
var collection_id = cljs.core.first(arglist__24982);
arglist__24982 = cljs.core.next(arglist__24982);
var tolerance = cljs.core.first(arglist__24982);
var p__24949 = cljs.core.rest(arglist__24982);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__24949);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3531__auto__ = default_bl;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__24983){var map__24988 = p__24983;var map__24988__$1 = ((cljs.core.seq_QMARK_.call(null,map__24988))?cljs.core.apply.call(null,cljs.core.hash_map,map__24988):map__24988);var boundaryline_ids = cljs.core.get.call(null,map__24988__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24988,map__24988__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24988,map__24988__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24988,map__24988__$1,boundaryline_ids){
return (function (p__24989){var vec__24990 = p__24989;var blid = cljs.core.nth.call(null,vec__24990,(0),null);var vec__24991 = cljs.core.nth.call(null,vec__24990,(1),null);var tol = cljs.core.nth.call(null,vec__24991,(0),null);var bl = cljs.core.nth.call(null,vec__24991,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24988,map__24988__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__24983 = null;if (arguments.length > 5) {
  p__24983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__24983);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__24992){
var app_state = cljs.core.first(arglist__24992);
arglist__24992 = cljs.core.next(arglist__24992);
var boundarylines_path = cljs.core.first(arglist__24992);
arglist__24992 = cljs.core.next(arglist__24992);
var collection_id = cljs.core.first(arglist__24992);
arglist__24992 = cljs.core.next(arglist__24992);
var bounds = cljs.core.first(arglist__24992);
arglist__24992 = cljs.core.next(arglist__24992);
var zoom = cljs.core.first(arglist__24992);
var p__24983 = cljs.core.rest(arglist__24992);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__24983);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24997_25001 = cljs.core.seq.call(null,keys);var chunk__24998_25002 = null;var count__24999_25003 = (0);var i__25000_25004 = (0);while(true){
if((i__25000_25004 < count__24999_25003))
{var k_25005 = cljs.core._nth.call(null,chunk__24998_25002,i__25000_25004);var obj_25006 = (js_index[k_25005]);var geom_25007 = (obj_25006["geojson"]);var feature_25008 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25006["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25006["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25006["compact_name"])], null)], null));var __25009__$1 = (feature_25008["geometry"] = geom_25007);var __25010__$2 = ((feature_25008["properties"])["index_object"] = obj_25006);features.push(feature_25008);
{
var G__25011 = seq__24997_25001;
var G__25012 = chunk__24998_25002;
var G__25013 = count__24999_25003;
var G__25014 = (i__25000_25004 + (1));
seq__24997_25001 = G__25011;
chunk__24998_25002 = G__25012;
count__24999_25003 = G__25013;
i__25000_25004 = G__25014;
continue;
}
} else
{var temp__4126__auto___25015 = cljs.core.seq.call(null,seq__24997_25001);if(temp__4126__auto___25015)
{var seq__24997_25016__$1 = temp__4126__auto___25015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24997_25016__$1))
{var c__4299__auto___25017 = cljs.core.chunk_first.call(null,seq__24997_25016__$1);{
var G__25018 = cljs.core.chunk_rest.call(null,seq__24997_25016__$1);
var G__25019 = c__4299__auto___25017;
var G__25020 = cljs.core.count.call(null,c__4299__auto___25017);
var G__25021 = (0);
seq__24997_25001 = G__25018;
chunk__24998_25002 = G__25019;
count__24999_25003 = G__25020;
i__25000_25004 = G__25021;
continue;
}
} else
{var k_25022 = cljs.core.first.call(null,seq__24997_25016__$1);var obj_25023 = (js_index[k_25022]);var geom_25024 = (obj_25023["geojson"]);var feature_25025 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25023["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25023["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25023["compact_name"])], null)], null));var __25026__$1 = (feature_25025["geometry"] = geom_25024);var __25027__$2 = ((feature_25025["properties"])["index_object"] = obj_25023);features.push(feature_25025);
{
var G__25028 = cljs.core.next.call(null,seq__24997_25016__$1);
var G__25029 = null;
var G__25030 = (0);
var G__25031 = (0);
seq__24997_25001 = G__25028;
chunk__24998_25002 = G__25029;
count__24999_25003 = G__25030;
i__25000_25004 = G__25031;
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
{var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_25074){var state_val_25075 = (state_25074[(1)]);if((state_val_25075 === (5)))
{var inst_25072 = (state_25074[(2)]);var state_25074__$1 = state_25074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25074__$1,inst_25072);
} else
{if((state_val_25075 === (4)))
{var state_25074__$1 = state_25074;var statearr_25076_25088 = state_25074__$1;(statearr_25076_25088[(2)] = null);
(statearr_25076_25088[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (3)))
{var inst_25062 = (state_25074[(7)]);var inst_25069 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_25062);var state_25074__$1 = state_25074;var statearr_25077_25089 = state_25074__$1;(statearr_25077_25089[(2)] = inst_25069);
(statearr_25077_25089[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (2)))
{var inst_25062 = (state_25074[(7)]);var inst_25062__$1 = (state_25074[(2)]);var inst_25063 = (function (){var bl_coll_index = inst_25062__$1;return ((function (bl_coll_index,inst_25062,inst_25062__$1,state_val_25075,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_25062,inst_25062__$1,state_val_25075,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_25064 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_25063);var inst_25065 = cljs.core.deref.call(null,app_state);var inst_25066 = cljs.core.get_in.call(null,inst_25065,index_path);var inst_25067 = cljs.core._EQ_.call(null,inst_25066,inst_25062__$1);var state_25074__$1 = (function (){var statearr_25078 = state_25074;(statearr_25078[(8)] = inst_25064);
(statearr_25078[(7)] = inst_25062__$1);
return statearr_25078;
})();if(inst_25067)
{var statearr_25079_25090 = state_25074__$1;(statearr_25079_25090[(1)] = (3));
} else
{var statearr_25080_25091 = state_25074__$1;(statearr_25080_25091[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (1)))
{var inst_25060 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_25074__$1 = state_25074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25074__$1,(2),inst_25060);
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
var state_machine__5679__auto____0 = (function (){var statearr_25084 = [null,null,null,null,null,null,null,null,null];(statearr_25084[(0)] = state_machine__5679__auto__);
(statearr_25084[(1)] = (1));
return statearr_25084;
});
var state_machine__5679__auto____1 = (function (state_25074){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25074);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25085){if((e25085 instanceof Object))
{var ex__5682__auto__ = e25085;var statearr_25086_25092 = state_25074;(statearr_25086_25092[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25093 = state_25074;
state_25074 = G__25093;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25074){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_25087 = f__5694__auto__.call(null);(statearr_25087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_25087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
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
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
