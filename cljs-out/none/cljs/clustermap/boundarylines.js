// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__61055){var vec__61056 = p__61055;var z = cljs.core.nth.call(null,vec__61056,(0),null);var t = cljs.core.nth.call(null,vec__61056,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__61061 = cljs.core.seq.call(null,boundarylines);var chunk__61062 = null;var count__61063 = (0);var i__61064 = (0);while(true){
if((i__61064 < count__61063))
{var bl = cljs.core._nth.call(null,chunk__61062,i__61064);var boundaryline_id_61065 = (bl["id"]);var tolerance_61066 = (bl["tolerance"]);var general_cache_path_61067 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_61065,tolerance_61066], null));var collection_cache_path_61068 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_61065,tolerance_61066], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_61067,((function (seq__61061,chunk__61062,count__61063,i__61064,boundaryline_id_61065,tolerance_61066,general_cache_path_61067,collection_cache_path_61068,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__61061,chunk__61062,count__61063,i__61064,boundaryline_id_61065,tolerance_61066,general_cache_path_61067,collection_cache_path_61068,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_61068))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_61068,((function (seq__61061,chunk__61062,count__61063,i__61064,boundaryline_id_61065,tolerance_61066,general_cache_path_61067,collection_cache_path_61068,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__61061,chunk__61062,count__61063,i__61064,boundaryline_id_61065,tolerance_61066,general_cache_path_61067,collection_cache_path_61068,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__61069 = seq__61061;
var G__61070 = chunk__61062;
var G__61071 = count__61063;
var G__61072 = (i__61064 + (1));
seq__61061 = G__61069;
chunk__61062 = G__61070;
count__61063 = G__61071;
i__61064 = G__61072;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__61061);if(temp__4126__auto__)
{var seq__61061__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__61061__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__61061__$1);{
var G__61073 = cljs.core.chunk_rest.call(null,seq__61061__$1);
var G__61074 = c__4314__auto__;
var G__61075 = cljs.core.count.call(null,c__4314__auto__);
var G__61076 = (0);
seq__61061 = G__61073;
chunk__61062 = G__61074;
count__61063 = G__61075;
i__61064 = G__61076;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__61061__$1);var boundaryline_id_61077 = (bl["id"]);var tolerance_61078 = (bl["tolerance"]);var general_cache_path_61079 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_61077,tolerance_61078], null));var collection_cache_path_61080 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_61077,tolerance_61078], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_61079,((function (seq__61061,chunk__61062,count__61063,i__61064,boundaryline_id_61077,tolerance_61078,general_cache_path_61079,collection_cache_path_61080,bl,seq__61061__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__61061,chunk__61062,count__61063,i__61064,boundaryline_id_61077,tolerance_61078,general_cache_path_61079,collection_cache_path_61080,bl,seq__61061__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_61080))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_61080,((function (seq__61061,chunk__61062,count__61063,i__61064,boundaryline_id_61077,tolerance_61078,general_cache_path_61079,collection_cache_path_61080,bl,seq__61061__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__61061,chunk__61062,count__61063,i__61064,boundaryline_id_61077,tolerance_61078,general_cache_path_61079,collection_cache_path_61080,bl,seq__61061__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__61081 = cljs.core.next.call(null,seq__61061__$1);
var G__61082 = null;
var G__61083 = (0);
var G__61084 = (0);
seq__61061 = G__61081;
chunk__61062 = G__61082;
count__61063 = G__61083;
i__61064 = G__61084;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__61085){var map__61101 = p__61085;var map__61101__$1 = ((cljs.core.seq_QMARK_.call(null,map__61101))?cljs.core.apply.call(null,cljs.core.hash_map,map__61101):map__61101);var bounds = cljs.core.get.call(null,map__61101__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__61101__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__61101,map__61101__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__61101,map__61101__$1,bounds,boundaryline_ids){
return (function (state_61106){var state_val_61107 = (state_61106[(1)]);if((state_val_61107 === (2)))
{var inst_61103 = (state_61106[(2)]);var inst_61104 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_61103);var state_61106__$1 = (function (){var statearr_61108 = state_61106;(statearr_61108[(7)] = inst_61104);
return statearr_61108;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61106__$1,true);
} else
{if((state_val_61107 === (1)))
{var state_61106__$1 = state_61106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61106__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__61101,map__61101__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__61101,map__61101__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_61112 = [null,null,null,null,null,null,null,null];(statearr_61112[(0)] = state_machine__5694__auto__);
(statearr_61112[(1)] = (1));
return statearr_61112;
});
var state_machine__5694__auto____1 = (function (state_61106){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_61106);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61113){if((e61113 instanceof Object))
{var ex__5697__auto__ = e61113;var statearr_61114_61116 = state_61106;(statearr_61114_61116[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61106);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61117 = state_61106;
state_61106 = G__61117;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_61106){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_61106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__61101,map__61101__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_61115 = f__5709__auto__.call(null);(statearr_61115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_61115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__61101,map__61101__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__61085 = null;if (arguments.length > 5) {
  p__61085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__61085);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__61118){
var app_state = cljs.core.first(arglist__61118);
arglist__61118 = cljs.core.next(arglist__61118);
var boundarylines_path = cljs.core.first(arglist__61118);
arglist__61118 = cljs.core.next(arglist__61118);
var collection_boundarylines_path = cljs.core.first(arglist__61118);
arglist__61118 = cljs.core.next(arglist__61118);
var collection_id = cljs.core.first(arglist__61118);
arglist__61118 = cljs.core.next(arglist__61118);
var tolerance = cljs.core.first(arglist__61118);
var p__61085 = cljs.core.rest(arglist__61118);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__61085);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__61119){var map__61124 = p__61119;var map__61124__$1 = ((cljs.core.seq_QMARK_.call(null,map__61124))?cljs.core.apply.call(null,cljs.core.hash_map,map__61124):map__61124);var boundaryline_ids = cljs.core.get.call(null,map__61124__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__61124,map__61124__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__61124,map__61124__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__61124,map__61124__$1,boundaryline_ids){
return (function (p__61125){var vec__61126 = p__61125;var blid = cljs.core.nth.call(null,vec__61126,(0),null);var vec__61127 = cljs.core.nth.call(null,vec__61126,(1),null);var tol = cljs.core.nth.call(null,vec__61127,(0),null);var bl = cljs.core.nth.call(null,vec__61127,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__61124,map__61124__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__61119 = null;if (arguments.length > 5) {
  p__61119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__61119);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__61128){
var app_state = cljs.core.first(arglist__61128);
arglist__61128 = cljs.core.next(arglist__61128);
var boundarylines_path = cljs.core.first(arglist__61128);
arglist__61128 = cljs.core.next(arglist__61128);
var collection_id = cljs.core.first(arglist__61128);
arglist__61128 = cljs.core.next(arglist__61128);
var bounds = cljs.core.first(arglist__61128);
arglist__61128 = cljs.core.next(arglist__61128);
var zoom = cljs.core.first(arglist__61128);
var p__61119 = cljs.core.rest(arglist__61128);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__61119);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__61133_61137 = cljs.core.seq.call(null,keys);var chunk__61134_61138 = null;var count__61135_61139 = (0);var i__61136_61140 = (0);while(true){
if((i__61136_61140 < count__61135_61139))
{var k_61141 = cljs.core._nth.call(null,chunk__61134_61138,i__61136_61140);var obj_61142 = (js_index[k_61141]);var geom_61143 = (obj_61142["geojson"]);var feature_61144 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_61142["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_61142["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_61142["compact_name"])], null)], null));var __61145__$1 = (feature_61144["geometry"] = geom_61143);var __61146__$2 = ((feature_61144["properties"])["index_object"] = obj_61142);features.push(feature_61144);
{
var G__61147 = seq__61133_61137;
var G__61148 = chunk__61134_61138;
var G__61149 = count__61135_61139;
var G__61150 = (i__61136_61140 + (1));
seq__61133_61137 = G__61147;
chunk__61134_61138 = G__61148;
count__61135_61139 = G__61149;
i__61136_61140 = G__61150;
continue;
}
} else
{var temp__4126__auto___61151 = cljs.core.seq.call(null,seq__61133_61137);if(temp__4126__auto___61151)
{var seq__61133_61152__$1 = temp__4126__auto___61151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__61133_61152__$1))
{var c__4314__auto___61153 = cljs.core.chunk_first.call(null,seq__61133_61152__$1);{
var G__61154 = cljs.core.chunk_rest.call(null,seq__61133_61152__$1);
var G__61155 = c__4314__auto___61153;
var G__61156 = cljs.core.count.call(null,c__4314__auto___61153);
var G__61157 = (0);
seq__61133_61137 = G__61154;
chunk__61134_61138 = G__61155;
count__61135_61139 = G__61156;
i__61136_61140 = G__61157;
continue;
}
} else
{var k_61158 = cljs.core.first.call(null,seq__61133_61152__$1);var obj_61159 = (js_index[k_61158]);var geom_61160 = (obj_61159["geojson"]);var feature_61161 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_61159["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_61159["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_61159["compact_name"])], null)], null));var __61162__$1 = (feature_61161["geometry"] = geom_61160);var __61163__$2 = ((feature_61161["properties"])["index_object"] = obj_61159);features.push(feature_61161);
{
var G__61164 = cljs.core.next.call(null,seq__61133_61152__$1);
var G__61165 = null;
var G__61166 = (0);
var G__61167 = (0);
seq__61133_61137 = G__61164;
chunk__61134_61138 = G__61165;
count__61135_61139 = G__61166;
i__61136_61140 = G__61167;
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
return (function (state_61210){var state_val_61211 = (state_61210[(1)]);if((state_val_61211 === (5)))
{var inst_61208 = (state_61210[(2)]);var state_61210__$1 = state_61210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61210__$1,inst_61208);
} else
{if((state_val_61211 === (4)))
{var state_61210__$1 = state_61210;var statearr_61212_61224 = state_61210__$1;(statearr_61212_61224[(2)] = null);
(statearr_61212_61224[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61211 === (3)))
{var inst_61198 = (state_61210[(7)]);var inst_61205 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_61198);var state_61210__$1 = state_61210;var statearr_61213_61225 = state_61210__$1;(statearr_61213_61225[(2)] = inst_61205);
(statearr_61213_61225[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61211 === (2)))
{var inst_61198 = (state_61210[(7)]);var inst_61198__$1 = (state_61210[(2)]);var inst_61199 = (function (){var bl_coll_index = inst_61198__$1;return ((function (bl_coll_index,inst_61198,inst_61198__$1,state_val_61211,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_61198,inst_61198__$1,state_val_61211,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_61200 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_61199);var inst_61201 = cljs.core.deref.call(null,app_state);var inst_61202 = cljs.core.get_in.call(null,inst_61201,index_path);var inst_61203 = cljs.core._EQ_.call(null,inst_61202,inst_61198__$1);var state_61210__$1 = (function (){var statearr_61214 = state_61210;(statearr_61214[(8)] = inst_61200);
(statearr_61214[(7)] = inst_61198__$1);
return statearr_61214;
})();if(inst_61203)
{var statearr_61215_61226 = state_61210__$1;(statearr_61215_61226[(1)] = (3));
} else
{var statearr_61216_61227 = state_61210__$1;(statearr_61216_61227[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61211 === (1)))
{var inst_61196 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_61210__$1 = state_61210;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61210__$1,(2),inst_61196);
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
var state_machine__5694__auto____0 = (function (){var statearr_61220 = [null,null,null,null,null,null,null,null,null];(statearr_61220[(0)] = state_machine__5694__auto__);
(statearr_61220[(1)] = (1));
return statearr_61220;
});
var state_machine__5694__auto____1 = (function (state_61210){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_61210);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61221){if((e61221 instanceof Object))
{var ex__5697__auto__ = e61221;var statearr_61222_61228 = state_61210;(statearr_61222_61228[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61210);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61221;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61229 = state_61210;
state_61210 = G__61229;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_61210){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_61210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_61223 = f__5709__auto__.call(null);(statearr_61223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_61223;
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