// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__12664){var vec__12665 = p__12664;var z = cljs.core.nth.call(null,vec__12665,(0),null);var t = cljs.core.nth.call(null,vec__12665,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__12670 = cljs.core.seq.call(null,boundarylines);var chunk__12671 = null;var count__12672 = (0);var i__12673 = (0);while(true){
if((i__12673 < count__12672))
{var bl = cljs.core._nth.call(null,chunk__12671,i__12673);var boundaryline_id_12674 = (bl["id"]);var tolerance_12675 = (bl["tolerance"]);var general_cache_path_12676 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12674,tolerance_12675], null));var collection_cache_path_12677 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12674,tolerance_12675], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12676,((function (seq__12670,chunk__12671,count__12672,i__12673,boundaryline_id_12674,tolerance_12675,general_cache_path_12676,collection_cache_path_12677,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12670,chunk__12671,count__12672,i__12673,boundaryline_id_12674,tolerance_12675,general_cache_path_12676,collection_cache_path_12677,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12677))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12677,((function (seq__12670,chunk__12671,count__12672,i__12673,boundaryline_id_12674,tolerance_12675,general_cache_path_12676,collection_cache_path_12677,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12670,chunk__12671,count__12672,i__12673,boundaryline_id_12674,tolerance_12675,general_cache_path_12676,collection_cache_path_12677,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12678 = seq__12670;
var G__12679 = chunk__12671;
var G__12680 = count__12672;
var G__12681 = (i__12673 + (1));
seq__12670 = G__12678;
chunk__12671 = G__12679;
count__12672 = G__12680;
i__12673 = G__12681;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12670);if(temp__4126__auto__)
{var seq__12670__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12670__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12670__$1);{
var G__12682 = cljs.core.chunk_rest.call(null,seq__12670__$1);
var G__12683 = c__4299__auto__;
var G__12684 = cljs.core.count.call(null,c__4299__auto__);
var G__12685 = (0);
seq__12670 = G__12682;
chunk__12671 = G__12683;
count__12672 = G__12684;
i__12673 = G__12685;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__12670__$1);var boundaryline_id_12686 = (bl["id"]);var tolerance_12687 = (bl["tolerance"]);var general_cache_path_12688 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12686,tolerance_12687], null));var collection_cache_path_12689 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12686,tolerance_12687], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12688,((function (seq__12670,chunk__12671,count__12672,i__12673,boundaryline_id_12686,tolerance_12687,general_cache_path_12688,collection_cache_path_12689,bl,seq__12670__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12670,chunk__12671,count__12672,i__12673,boundaryline_id_12686,tolerance_12687,general_cache_path_12688,collection_cache_path_12689,bl,seq__12670__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12689))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12689,((function (seq__12670,chunk__12671,count__12672,i__12673,boundaryline_id_12686,tolerance_12687,general_cache_path_12688,collection_cache_path_12689,bl,seq__12670__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12670,chunk__12671,count__12672,i__12673,boundaryline_id_12686,tolerance_12687,general_cache_path_12688,collection_cache_path_12689,bl,seq__12670__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12690 = cljs.core.next.call(null,seq__12670__$1);
var G__12691 = null;
var G__12692 = (0);
var G__12693 = (0);
seq__12670 = G__12690;
chunk__12671 = G__12691;
count__12672 = G__12692;
i__12673 = G__12693;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12694){var map__12710 = p__12694;var map__12710__$1 = ((cljs.core.seq_QMARK_.call(null,map__12710))?cljs.core.apply.call(null,cljs.core.hash_map,map__12710):map__12710);var bounds = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,map__12710,map__12710__$1,bounds,boundaryline_ids){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,map__12710,map__12710__$1,bounds,boundaryline_ids){
return (function (state_12715){var state_val_12716 = (state_12715[(1)]);if((state_val_12716 === (2)))
{var inst_12712 = (state_12715[(2)]);var inst_12713 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_12712);var state_12715__$1 = (function (){var statearr_12717 = state_12715;(statearr_12717[(7)] = inst_12713);
return statearr_12717;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12715__$1,true);
} else
{if((state_val_12716 === (1)))
{var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12715__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,map__12710,map__12710__$1,bounds,boundaryline_ids))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,map__12710,map__12710__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12721 = [null,null,null,null,null,null,null,null];(statearr_12721[(0)] = state_machine__5679__auto__);
(statearr_12721[(1)] = (1));
return statearr_12721;
});
var state_machine__5679__auto____1 = (function (state_12715){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12715);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12722){if((e12722 instanceof Object))
{var ex__5682__auto__ = e12722;var statearr_12723_12725 = state_12715;(statearr_12723_12725[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12726 = state_12715;
state_12715 = G__12726;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12715){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,map__12710,map__12710__$1,bounds,boundaryline_ids))
})();var state__5695__auto__ = (function (){var statearr_12724 = f__5694__auto__.call(null);(statearr_12724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_12724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,map__12710,map__12710__$1,bounds,boundaryline_ids))
);
return c__5693__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__12694 = null;if (arguments.length > 5) {
  p__12694 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12694);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__12727){
var app_state = cljs.core.first(arglist__12727);
arglist__12727 = cljs.core.next(arglist__12727);
var boundarylines_path = cljs.core.first(arglist__12727);
arglist__12727 = cljs.core.next(arglist__12727);
var collection_boundarylines_path = cljs.core.first(arglist__12727);
arglist__12727 = cljs.core.next(arglist__12727);
var collection_id = cljs.core.first(arglist__12727);
arglist__12727 = cljs.core.next(arglist__12727);
var tolerance = cljs.core.first(arglist__12727);
var p__12694 = cljs.core.rest(arglist__12727);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12694);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__12728){var map__12733 = p__12728;var map__12733__$1 = ((cljs.core.seq_QMARK_.call(null,map__12733))?cljs.core.apply.call(null,cljs.core.hash_map,map__12733):map__12733);var boundaryline_ids = cljs.core.get.call(null,map__12733__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12733,map__12733__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12733,map__12733__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12733,map__12733__$1,boundaryline_ids){
return (function (p__12734){var vec__12735 = p__12734;var blid = cljs.core.nth.call(null,vec__12735,(0),null);var vec__12736 = cljs.core.nth.call(null,vec__12735,(1),null);var tol = cljs.core.nth.call(null,vec__12736,(0),null);var bl = cljs.core.nth.call(null,vec__12736,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12733,map__12733__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__12728 = null;if (arguments.length > 5) {
  p__12728 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__12728);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__12737){
var app_state = cljs.core.first(arglist__12737);
arglist__12737 = cljs.core.next(arglist__12737);
var boundarylines_path = cljs.core.first(arglist__12737);
arglist__12737 = cljs.core.next(arglist__12737);
var collection_id = cljs.core.first(arglist__12737);
arglist__12737 = cljs.core.next(arglist__12737);
var bounds = cljs.core.first(arglist__12737);
arglist__12737 = cljs.core.next(arglist__12737);
var zoom = cljs.core.first(arglist__12737);
var p__12728 = cljs.core.rest(arglist__12737);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__12728);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12742_12746 = cljs.core.seq.call(null,keys);var chunk__12743_12747 = null;var count__12744_12748 = (0);var i__12745_12749 = (0);while(true){
if((i__12745_12749 < count__12744_12748))
{var k_12750 = cljs.core._nth.call(null,chunk__12743_12747,i__12745_12749);var obj_12751 = (js_index[k_12750]);var geom_12752 = (obj_12751["geojson"]);var feature_12753 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12751["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12751["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12751["compact_name"])], null)], null));var __12754__$1 = (feature_12753["geometry"] = geom_12752);var __12755__$2 = ((feature_12753["properties"])["index_object"] = obj_12751);features.push(feature_12753);
{
var G__12756 = seq__12742_12746;
var G__12757 = chunk__12743_12747;
var G__12758 = count__12744_12748;
var G__12759 = (i__12745_12749 + (1));
seq__12742_12746 = G__12756;
chunk__12743_12747 = G__12757;
count__12744_12748 = G__12758;
i__12745_12749 = G__12759;
continue;
}
} else
{var temp__4126__auto___12760 = cljs.core.seq.call(null,seq__12742_12746);if(temp__4126__auto___12760)
{var seq__12742_12761__$1 = temp__4126__auto___12760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12742_12761__$1))
{var c__4299__auto___12762 = cljs.core.chunk_first.call(null,seq__12742_12761__$1);{
var G__12763 = cljs.core.chunk_rest.call(null,seq__12742_12761__$1);
var G__12764 = c__4299__auto___12762;
var G__12765 = cljs.core.count.call(null,c__4299__auto___12762);
var G__12766 = (0);
seq__12742_12746 = G__12763;
chunk__12743_12747 = G__12764;
count__12744_12748 = G__12765;
i__12745_12749 = G__12766;
continue;
}
} else
{var k_12767 = cljs.core.first.call(null,seq__12742_12761__$1);var obj_12768 = (js_index[k_12767]);var geom_12769 = (obj_12768["geojson"]);var feature_12770 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12768["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12768["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12768["compact_name"])], null)], null));var __12771__$1 = (feature_12770["geometry"] = geom_12769);var __12772__$2 = ((feature_12770["properties"])["index_object"] = obj_12768);features.push(feature_12770);
{
var G__12773 = cljs.core.next.call(null,seq__12742_12761__$1);
var G__12774 = null;
var G__12775 = (0);
var G__12776 = (0);
seq__12742_12746 = G__12773;
chunk__12743_12747 = G__12774;
count__12744_12748 = G__12775;
i__12745_12749 = G__12776;
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
return (function (state_12819){var state_val_12820 = (state_12819[(1)]);if((state_val_12820 === (5)))
{var inst_12817 = (state_12819[(2)]);var state_12819__$1 = state_12819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12819__$1,inst_12817);
} else
{if((state_val_12820 === (4)))
{var state_12819__$1 = state_12819;var statearr_12821_12833 = state_12819__$1;(statearr_12821_12833[(2)] = null);
(statearr_12821_12833[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (3)))
{var inst_12807 = (state_12819[(7)]);var inst_12814 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_12807);var state_12819__$1 = state_12819;var statearr_12822_12834 = state_12819__$1;(statearr_12822_12834[(2)] = inst_12814);
(statearr_12822_12834[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (2)))
{var inst_12807 = (state_12819[(7)]);var inst_12807__$1 = (state_12819[(2)]);var inst_12808 = (function (){var bl_coll_index = inst_12807__$1;return ((function (bl_coll_index,inst_12807,inst_12807__$1,state_val_12820,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_12807,inst_12807__$1,state_val_12820,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_12809 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_12808);var inst_12810 = cljs.core.deref.call(null,app_state);var inst_12811 = cljs.core.get_in.call(null,inst_12810,index_path);var inst_12812 = cljs.core._EQ_.call(null,inst_12811,inst_12807__$1);var state_12819__$1 = (function (){var statearr_12823 = state_12819;(statearr_12823[(8)] = inst_12809);
(statearr_12823[(7)] = inst_12807__$1);
return statearr_12823;
})();if(inst_12812)
{var statearr_12824_12835 = state_12819__$1;(statearr_12824_12835[(1)] = (3));
} else
{var statearr_12825_12836 = state_12819__$1;(statearr_12825_12836[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (1)))
{var inst_12805 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12819__$1 = state_12819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12819__$1,(2),inst_12805);
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
var state_machine__5679__auto____0 = (function (){var statearr_12829 = [null,null,null,null,null,null,null,null,null];(statearr_12829[(0)] = state_machine__5679__auto__);
(statearr_12829[(1)] = (1));
return statearr_12829;
});
var state_machine__5679__auto____1 = (function (state_12819){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12819);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12830){if((e12830 instanceof Object))
{var ex__5682__auto__ = e12830;var statearr_12831_12837 = state_12819;(statearr_12831_12837[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12838 = state_12819;
state_12819 = G__12838;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12819){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_12832 = f__5694__auto__.call(null);(statearr_12832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_12832;
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
