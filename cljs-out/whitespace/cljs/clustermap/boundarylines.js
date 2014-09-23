// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__12611){var vec__12612 = p__12611;var z = cljs.core.nth.call(null,vec__12612,(0),null);var t = cljs.core.nth.call(null,vec__12612,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__12617 = cljs.core.seq.call(null,boundarylines);var chunk__12618 = null;var count__12619 = (0);var i__12620 = (0);while(true){
if((i__12620 < count__12619))
{var bl = cljs.core._nth.call(null,chunk__12618,i__12620);var boundaryline_id_12621 = (bl["id"]);var tolerance_12622 = (bl["tolerance"]);var general_cache_path_12623 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12621,tolerance_12622], null));var collection_cache_path_12624 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12621,tolerance_12622], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12623,((function (seq__12617,chunk__12618,count__12619,i__12620,boundaryline_id_12621,tolerance_12622,general_cache_path_12623,collection_cache_path_12624,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12617,chunk__12618,count__12619,i__12620,boundaryline_id_12621,tolerance_12622,general_cache_path_12623,collection_cache_path_12624,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12624))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12624,((function (seq__12617,chunk__12618,count__12619,i__12620,boundaryline_id_12621,tolerance_12622,general_cache_path_12623,collection_cache_path_12624,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12617,chunk__12618,count__12619,i__12620,boundaryline_id_12621,tolerance_12622,general_cache_path_12623,collection_cache_path_12624,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12625 = seq__12617;
var G__12626 = chunk__12618;
var G__12627 = count__12619;
var G__12628 = (i__12620 + (1));
seq__12617 = G__12625;
chunk__12618 = G__12626;
count__12619 = G__12627;
i__12620 = G__12628;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12617);if(temp__4126__auto__)
{var seq__12617__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12617__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__12617__$1);{
var G__12629 = cljs.core.chunk_rest.call(null,seq__12617__$1);
var G__12630 = c__4314__auto__;
var G__12631 = cljs.core.count.call(null,c__4314__auto__);
var G__12632 = (0);
seq__12617 = G__12629;
chunk__12618 = G__12630;
count__12619 = G__12631;
i__12620 = G__12632;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__12617__$1);var boundaryline_id_12633 = (bl["id"]);var tolerance_12634 = (bl["tolerance"]);var general_cache_path_12635 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12633,tolerance_12634], null));var collection_cache_path_12636 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12633,tolerance_12634], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12635,((function (seq__12617,chunk__12618,count__12619,i__12620,boundaryline_id_12633,tolerance_12634,general_cache_path_12635,collection_cache_path_12636,bl,seq__12617__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12617,chunk__12618,count__12619,i__12620,boundaryline_id_12633,tolerance_12634,general_cache_path_12635,collection_cache_path_12636,bl,seq__12617__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12636))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12636,((function (seq__12617,chunk__12618,count__12619,i__12620,boundaryline_id_12633,tolerance_12634,general_cache_path_12635,collection_cache_path_12636,bl,seq__12617__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12617,chunk__12618,count__12619,i__12620,boundaryline_id_12633,tolerance_12634,general_cache_path_12635,collection_cache_path_12636,bl,seq__12617__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12637 = cljs.core.next.call(null,seq__12617__$1);
var G__12638 = null;
var G__12639 = (0);
var G__12640 = (0);
seq__12617 = G__12637;
chunk__12618 = G__12638;
count__12619 = G__12639;
i__12620 = G__12640;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12641){var map__12657 = p__12641;var map__12657__$1 = ((cljs.core.seq_QMARK_.call(null,map__12657))?cljs.core.apply.call(null,cljs.core.hash_map,map__12657):map__12657);var bounds = cljs.core.get.call(null,map__12657__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__12657__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__12657,map__12657__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__12657,map__12657__$1,bounds,boundaryline_ids){
return (function (state_12662){var state_val_12663 = (state_12662[(1)]);if((state_val_12663 === (2)))
{var inst_12659 = (state_12662[(2)]);var inst_12660 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_12659);var state_12662__$1 = (function (){var statearr_12664 = state_12662;(statearr_12664[(7)] = inst_12660);
return statearr_12664;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12662__$1,true);
} else
{if((state_val_12663 === (1)))
{var state_12662__$1 = state_12662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12662__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__12657,map__12657__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__12657,map__12657__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12668 = [null,null,null,null,null,null,null,null];(statearr_12668[(0)] = state_machine__5694__auto__);
(statearr_12668[(1)] = (1));
return statearr_12668;
});
var state_machine__5694__auto____1 = (function (state_12662){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12662);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12669){if((e12669 instanceof Object))
{var ex__5697__auto__ = e12669;var statearr_12670_12672 = state_12662;(statearr_12670_12672[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12662);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12669;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12673 = state_12662;
state_12662 = G__12673;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12662){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__12657,map__12657__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_12671 = f__5709__auto__.call(null);(statearr_12671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_12671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__12657,map__12657__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__12641 = null;if (arguments.length > 5) {
  p__12641 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12641);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__12674){
var app_state = cljs.core.first(arglist__12674);
arglist__12674 = cljs.core.next(arglist__12674);
var boundarylines_path = cljs.core.first(arglist__12674);
arglist__12674 = cljs.core.next(arglist__12674);
var collection_boundarylines_path = cljs.core.first(arglist__12674);
arglist__12674 = cljs.core.next(arglist__12674);
var collection_id = cljs.core.first(arglist__12674);
arglist__12674 = cljs.core.next(arglist__12674);
var tolerance = cljs.core.first(arglist__12674);
var p__12641 = cljs.core.rest(arglist__12674);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12641);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__12675){var map__12680 = p__12675;var map__12680__$1 = ((cljs.core.seq_QMARK_.call(null,map__12680))?cljs.core.apply.call(null,cljs.core.hash_map,map__12680):map__12680);var boundaryline_ids = cljs.core.get.call(null,map__12680__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12680,map__12680__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12680,map__12680__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12680,map__12680__$1,boundaryline_ids){
return (function (p__12681){var vec__12682 = p__12681;var blid = cljs.core.nth.call(null,vec__12682,(0),null);var vec__12683 = cljs.core.nth.call(null,vec__12682,(1),null);var tol = cljs.core.nth.call(null,vec__12683,(0),null);var bl = cljs.core.nth.call(null,vec__12683,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12680,map__12680__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__12675 = null;if (arguments.length > 5) {
  p__12675 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__12675);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__12684){
var app_state = cljs.core.first(arglist__12684);
arglist__12684 = cljs.core.next(arglist__12684);
var boundarylines_path = cljs.core.first(arglist__12684);
arglist__12684 = cljs.core.next(arglist__12684);
var collection_id = cljs.core.first(arglist__12684);
arglist__12684 = cljs.core.next(arglist__12684);
var bounds = cljs.core.first(arglist__12684);
arglist__12684 = cljs.core.next(arglist__12684);
var zoom = cljs.core.first(arglist__12684);
var p__12675 = cljs.core.rest(arglist__12684);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__12675);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12689_12693 = cljs.core.seq.call(null,keys);var chunk__12690_12694 = null;var count__12691_12695 = (0);var i__12692_12696 = (0);while(true){
if((i__12692_12696 < count__12691_12695))
{var k_12697 = cljs.core._nth.call(null,chunk__12690_12694,i__12692_12696);var obj_12698 = (js_index[k_12697]);var geom_12699 = (obj_12698["geojson"]);var feature_12700 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12698["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12698["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12698["compact_name"])], null)], null));var __12701__$1 = (feature_12700["geometry"] = geom_12699);var __12702__$2 = ((feature_12700["properties"])["index_object"] = obj_12698);features.push(feature_12700);
{
var G__12703 = seq__12689_12693;
var G__12704 = chunk__12690_12694;
var G__12705 = count__12691_12695;
var G__12706 = (i__12692_12696 + (1));
seq__12689_12693 = G__12703;
chunk__12690_12694 = G__12704;
count__12691_12695 = G__12705;
i__12692_12696 = G__12706;
continue;
}
} else
{var temp__4126__auto___12707 = cljs.core.seq.call(null,seq__12689_12693);if(temp__4126__auto___12707)
{var seq__12689_12708__$1 = temp__4126__auto___12707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12689_12708__$1))
{var c__4314__auto___12709 = cljs.core.chunk_first.call(null,seq__12689_12708__$1);{
var G__12710 = cljs.core.chunk_rest.call(null,seq__12689_12708__$1);
var G__12711 = c__4314__auto___12709;
var G__12712 = cljs.core.count.call(null,c__4314__auto___12709);
var G__12713 = (0);
seq__12689_12693 = G__12710;
chunk__12690_12694 = G__12711;
count__12691_12695 = G__12712;
i__12692_12696 = G__12713;
continue;
}
} else
{var k_12714 = cljs.core.first.call(null,seq__12689_12708__$1);var obj_12715 = (js_index[k_12714]);var geom_12716 = (obj_12715["geojson"]);var feature_12717 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12715["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12715["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12715["compact_name"])], null)], null));var __12718__$1 = (feature_12717["geometry"] = geom_12716);var __12719__$2 = ((feature_12717["properties"])["index_object"] = obj_12715);features.push(feature_12717);
{
var G__12720 = cljs.core.next.call(null,seq__12689_12708__$1);
var G__12721 = null;
var G__12722 = (0);
var G__12723 = (0);
seq__12689_12693 = G__12720;
chunk__12690_12694 = G__12721;
count__12691_12695 = G__12722;
i__12692_12696 = G__12723;
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
return (function (state_12766){var state_val_12767 = (state_12766[(1)]);if((state_val_12767 === (5)))
{var inst_12764 = (state_12766[(2)]);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12766__$1,inst_12764);
} else
{if((state_val_12767 === (4)))
{var state_12766__$1 = state_12766;var statearr_12768_12780 = state_12766__$1;(statearr_12768_12780[(2)] = null);
(statearr_12768_12780[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (3)))
{var inst_12754 = (state_12766[(7)]);var inst_12761 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_12754);var state_12766__$1 = state_12766;var statearr_12769_12781 = state_12766__$1;(statearr_12769_12781[(2)] = inst_12761);
(statearr_12769_12781[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (2)))
{var inst_12754 = (state_12766[(7)]);var inst_12754__$1 = (state_12766[(2)]);var inst_12755 = (function (){var bl_coll_index = inst_12754__$1;return ((function (bl_coll_index,inst_12754,inst_12754__$1,state_val_12767,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_12754,inst_12754__$1,state_val_12767,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_12756 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_12755);var inst_12757 = cljs.core.deref.call(null,app_state);var inst_12758 = cljs.core.get_in.call(null,inst_12757,index_path);var inst_12759 = cljs.core._EQ_.call(null,inst_12758,inst_12754__$1);var state_12766__$1 = (function (){var statearr_12770 = state_12766;(statearr_12770[(7)] = inst_12754__$1);
(statearr_12770[(8)] = inst_12756);
return statearr_12770;
})();if(inst_12759)
{var statearr_12771_12782 = state_12766__$1;(statearr_12771_12782[(1)] = (3));
} else
{var statearr_12772_12783 = state_12766__$1;(statearr_12772_12783[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (1)))
{var inst_12752 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12766__$1,(2),inst_12752);
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
var state_machine__5694__auto____0 = (function (){var statearr_12776 = [null,null,null,null,null,null,null,null,null];(statearr_12776[(0)] = state_machine__5694__auto__);
(statearr_12776[(1)] = (1));
return statearr_12776;
});
var state_machine__5694__auto____1 = (function (state_12766){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12766);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12777){if((e12777 instanceof Object))
{var ex__5697__auto__ = e12777;var statearr_12778_12784 = state_12766;(statearr_12778_12784[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12766);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12785 = state_12766;
state_12766 = G__12785;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12766){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_12779 = f__5709__auto__.call(null);(statearr_12779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_12779;
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
