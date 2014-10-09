// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__52602){var vec__52603 = p__52602;var z = cljs.core.nth.call(null,vec__52603,(0),null);var t = cljs.core.nth.call(null,vec__52603,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__52608 = cljs.core.seq.call(null,boundarylines);var chunk__52609 = null;var count__52610 = (0);var i__52611 = (0);while(true){
if((i__52611 < count__52610))
{var bl = cljs.core._nth.call(null,chunk__52609,i__52611);var boundaryline_id_52612 = (bl["id"]);var tolerance_52613 = (bl["tolerance"]);var general_cache_path_52614 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_52612,tolerance_52613], null));var collection_cache_path_52615 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_52612,tolerance_52613], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_52614,((function (seq__52608,chunk__52609,count__52610,i__52611,boundaryline_id_52612,tolerance_52613,general_cache_path_52614,collection_cache_path_52615,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__52608,chunk__52609,count__52610,i__52611,boundaryline_id_52612,tolerance_52613,general_cache_path_52614,collection_cache_path_52615,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_52615))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_52615,((function (seq__52608,chunk__52609,count__52610,i__52611,boundaryline_id_52612,tolerance_52613,general_cache_path_52614,collection_cache_path_52615,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__52608,chunk__52609,count__52610,i__52611,boundaryline_id_52612,tolerance_52613,general_cache_path_52614,collection_cache_path_52615,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__52616 = seq__52608;
var G__52617 = chunk__52609;
var G__52618 = count__52610;
var G__52619 = (i__52611 + (1));
seq__52608 = G__52616;
chunk__52609 = G__52617;
count__52610 = G__52618;
i__52611 = G__52619;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52608);if(temp__4126__auto__)
{var seq__52608__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52608__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__52608__$1);{
var G__52620 = cljs.core.chunk_rest.call(null,seq__52608__$1);
var G__52621 = c__4314__auto__;
var G__52622 = cljs.core.count.call(null,c__4314__auto__);
var G__52623 = (0);
seq__52608 = G__52620;
chunk__52609 = G__52621;
count__52610 = G__52622;
i__52611 = G__52623;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__52608__$1);var boundaryline_id_52624 = (bl["id"]);var tolerance_52625 = (bl["tolerance"]);var general_cache_path_52626 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_52624,tolerance_52625], null));var collection_cache_path_52627 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_52624,tolerance_52625], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_52626,((function (seq__52608,chunk__52609,count__52610,i__52611,boundaryline_id_52624,tolerance_52625,general_cache_path_52626,collection_cache_path_52627,bl,seq__52608__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__52608,chunk__52609,count__52610,i__52611,boundaryline_id_52624,tolerance_52625,general_cache_path_52626,collection_cache_path_52627,bl,seq__52608__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_52627))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_52627,((function (seq__52608,chunk__52609,count__52610,i__52611,boundaryline_id_52624,tolerance_52625,general_cache_path_52626,collection_cache_path_52627,bl,seq__52608__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__52608,chunk__52609,count__52610,i__52611,boundaryline_id_52624,tolerance_52625,general_cache_path_52626,collection_cache_path_52627,bl,seq__52608__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__52628 = cljs.core.next.call(null,seq__52608__$1);
var G__52629 = null;
var G__52630 = (0);
var G__52631 = (0);
seq__52608 = G__52628;
chunk__52609 = G__52629;
count__52610 = G__52630;
i__52611 = G__52631;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__52632){var map__52648 = p__52632;var map__52648__$1 = ((cljs.core.seq_QMARK_.call(null,map__52648))?cljs.core.apply.call(null,cljs.core.hash_map,map__52648):map__52648);var bounds = cljs.core.get.call(null,map__52648__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__52648__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__52648,map__52648__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__52648,map__52648__$1,bounds,boundaryline_ids){
return (function (state_52653){var state_val_52654 = (state_52653[(1)]);if((state_val_52654 === (2)))
{var inst_52650 = (state_52653[(2)]);var inst_52651 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_52650);var state_52653__$1 = (function (){var statearr_52655 = state_52653;(statearr_52655[(7)] = inst_52651);
return statearr_52655;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52653__$1,true);
} else
{if((state_val_52654 === (1)))
{var state_52653__$1 = state_52653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52653__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__52648,map__52648__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__52648,map__52648__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_52659 = [null,null,null,null,null,null,null,null];(statearr_52659[(0)] = state_machine__5694__auto__);
(statearr_52659[(1)] = (1));
return statearr_52659;
});
var state_machine__5694__auto____1 = (function (state_52653){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_52653);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e52660){if((e52660 instanceof Object))
{var ex__5697__auto__ = e52660;var statearr_52661_52663 = state_52653;(statearr_52661_52663[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e52660;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52664 = state_52653;
state_52653 = G__52664;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_52653){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_52653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__52648,map__52648__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_52662 = f__5709__auto__.call(null);(statearr_52662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_52662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__52648,map__52648__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__52632 = null;if (arguments.length > 5) {
  p__52632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__52632);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__52665){
var app_state = cljs.core.first(arglist__52665);
arglist__52665 = cljs.core.next(arglist__52665);
var boundarylines_path = cljs.core.first(arglist__52665);
arglist__52665 = cljs.core.next(arglist__52665);
var collection_boundarylines_path = cljs.core.first(arglist__52665);
arglist__52665 = cljs.core.next(arglist__52665);
var collection_id = cljs.core.first(arglist__52665);
arglist__52665 = cljs.core.next(arglist__52665);
var tolerance = cljs.core.first(arglist__52665);
var p__52632 = cljs.core.rest(arglist__52665);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__52632);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__52666){var map__52671 = p__52666;var map__52671__$1 = ((cljs.core.seq_QMARK_.call(null,map__52671))?cljs.core.apply.call(null,cljs.core.hash_map,map__52671):map__52671);var boundaryline_ids = cljs.core.get.call(null,map__52671__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__52671,map__52671__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__52671,map__52671__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__52671,map__52671__$1,boundaryline_ids){
return (function (p__52672){var vec__52673 = p__52672;var blid = cljs.core.nth.call(null,vec__52673,(0),null);var vec__52674 = cljs.core.nth.call(null,vec__52673,(1),null);var tol = cljs.core.nth.call(null,vec__52674,(0),null);var bl = cljs.core.nth.call(null,vec__52674,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__52671,map__52671__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__52666 = null;if (arguments.length > 5) {
  p__52666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__52666);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__52675){
var app_state = cljs.core.first(arglist__52675);
arglist__52675 = cljs.core.next(arglist__52675);
var boundarylines_path = cljs.core.first(arglist__52675);
arglist__52675 = cljs.core.next(arglist__52675);
var collection_id = cljs.core.first(arglist__52675);
arglist__52675 = cljs.core.next(arglist__52675);
var bounds = cljs.core.first(arglist__52675);
arglist__52675 = cljs.core.next(arglist__52675);
var zoom = cljs.core.first(arglist__52675);
var p__52666 = cljs.core.rest(arglist__52675);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__52666);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__52680_52684 = cljs.core.seq.call(null,keys);var chunk__52681_52685 = null;var count__52682_52686 = (0);var i__52683_52687 = (0);while(true){
if((i__52683_52687 < count__52682_52686))
{var k_52688 = cljs.core._nth.call(null,chunk__52681_52685,i__52683_52687);var obj_52689 = (js_index[k_52688]);var geom_52690 = (obj_52689["geojson"]);var feature_52691 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_52689["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_52689["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_52689["compact_name"])], null)], null));var __52692__$1 = (feature_52691["geometry"] = geom_52690);var __52693__$2 = ((feature_52691["properties"])["index_object"] = obj_52689);features.push(feature_52691);
{
var G__52694 = seq__52680_52684;
var G__52695 = chunk__52681_52685;
var G__52696 = count__52682_52686;
var G__52697 = (i__52683_52687 + (1));
seq__52680_52684 = G__52694;
chunk__52681_52685 = G__52695;
count__52682_52686 = G__52696;
i__52683_52687 = G__52697;
continue;
}
} else
{var temp__4126__auto___52698 = cljs.core.seq.call(null,seq__52680_52684);if(temp__4126__auto___52698)
{var seq__52680_52699__$1 = temp__4126__auto___52698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52680_52699__$1))
{var c__4314__auto___52700 = cljs.core.chunk_first.call(null,seq__52680_52699__$1);{
var G__52701 = cljs.core.chunk_rest.call(null,seq__52680_52699__$1);
var G__52702 = c__4314__auto___52700;
var G__52703 = cljs.core.count.call(null,c__4314__auto___52700);
var G__52704 = (0);
seq__52680_52684 = G__52701;
chunk__52681_52685 = G__52702;
count__52682_52686 = G__52703;
i__52683_52687 = G__52704;
continue;
}
} else
{var k_52705 = cljs.core.first.call(null,seq__52680_52699__$1);var obj_52706 = (js_index[k_52705]);var geom_52707 = (obj_52706["geojson"]);var feature_52708 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_52706["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_52706["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_52706["compact_name"])], null)], null));var __52709__$1 = (feature_52708["geometry"] = geom_52707);var __52710__$2 = ((feature_52708["properties"])["index_object"] = obj_52706);features.push(feature_52708);
{
var G__52711 = cljs.core.next.call(null,seq__52680_52699__$1);
var G__52712 = null;
var G__52713 = (0);
var G__52714 = (0);
seq__52680_52684 = G__52711;
chunk__52681_52685 = G__52712;
count__52682_52686 = G__52713;
i__52683_52687 = G__52714;
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
return (function (state_52757){var state_val_52758 = (state_52757[(1)]);if((state_val_52758 === (5)))
{var inst_52755 = (state_52757[(2)]);var state_52757__$1 = state_52757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52757__$1,inst_52755);
} else
{if((state_val_52758 === (4)))
{var state_52757__$1 = state_52757;var statearr_52759_52771 = state_52757__$1;(statearr_52759_52771[(2)] = null);
(statearr_52759_52771[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52758 === (3)))
{var inst_52745 = (state_52757[(7)]);var inst_52752 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_52745);var state_52757__$1 = state_52757;var statearr_52760_52772 = state_52757__$1;(statearr_52760_52772[(2)] = inst_52752);
(statearr_52760_52772[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52758 === (2)))
{var inst_52745 = (state_52757[(7)]);var inst_52745__$1 = (state_52757[(2)]);var inst_52746 = (function (){var bl_coll_index = inst_52745__$1;return ((function (bl_coll_index,inst_52745,inst_52745__$1,state_val_52758,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_52745,inst_52745__$1,state_val_52758,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_52747 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_52746);var inst_52748 = cljs.core.deref.call(null,app_state);var inst_52749 = cljs.core.get_in.call(null,inst_52748,index_path);var inst_52750 = cljs.core._EQ_.call(null,inst_52749,inst_52745__$1);var state_52757__$1 = (function (){var statearr_52761 = state_52757;(statearr_52761[(7)] = inst_52745__$1);
(statearr_52761[(8)] = inst_52747);
return statearr_52761;
})();if(inst_52750)
{var statearr_52762_52773 = state_52757__$1;(statearr_52762_52773[(1)] = (3));
} else
{var statearr_52763_52774 = state_52757__$1;(statearr_52763_52774[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52758 === (1)))
{var inst_52743 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_52757__$1 = state_52757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52757__$1,(2),inst_52743);
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
var state_machine__5694__auto____0 = (function (){var statearr_52767 = [null,null,null,null,null,null,null,null,null];(statearr_52767[(0)] = state_machine__5694__auto__);
(statearr_52767[(1)] = (1));
return statearr_52767;
});
var state_machine__5694__auto____1 = (function (state_52757){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_52757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e52768){if((e52768 instanceof Object))
{var ex__5697__auto__ = e52768;var statearr_52769_52775 = state_52757;(statearr_52769_52775[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e52768;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52776 = state_52757;
state_52757 = G__52776;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_52757){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_52757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_52770 = f__5709__auto__.call(null);(statearr_52770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_52770;
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