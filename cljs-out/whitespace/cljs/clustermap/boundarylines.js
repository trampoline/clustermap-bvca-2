// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3541__auto__ = cljs.core.some.call(null,(function (p__12728){var vec__12729 = p__12728;var z = cljs.core.nth.call(null,vec__12729,(0),null);var t = cljs.core.nth.call(null,vec__12729,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = z;if(cljs.core.truth_(and__3529__auto__))
{return (zoom <= z);
} else
{return and__3529__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3541__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3541__auto____$1))
{return or__3541__auto____$1;
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__12734 = cljs.core.seq.call(null,boundarylines);var chunk__12735 = null;var count__12736 = (0);var i__12737 = (0);while(true){
if((i__12737 < count__12736))
{var bl = cljs.core._nth.call(null,chunk__12735,i__12737);var boundaryline_id_12738 = (bl["id"]);var tolerance_12739 = (bl["tolerance"]);var general_cache_path_12740 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12738,tolerance_12739], null));var collection_cache_path_12741 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12738,tolerance_12739], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12740,((function (seq__12734,chunk__12735,count__12736,i__12737,boundaryline_id_12738,tolerance_12739,general_cache_path_12740,collection_cache_path_12741,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12734,chunk__12735,count__12736,i__12737,boundaryline_id_12738,tolerance_12739,general_cache_path_12740,collection_cache_path_12741,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12741))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12741,((function (seq__12734,chunk__12735,count__12736,i__12737,boundaryline_id_12738,tolerance_12739,general_cache_path_12740,collection_cache_path_12741,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12734,chunk__12735,count__12736,i__12737,boundaryline_id_12738,tolerance_12739,general_cache_path_12740,collection_cache_path_12741,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12742 = seq__12734;
var G__12743 = chunk__12735;
var G__12744 = count__12736;
var G__12745 = (i__12737 + (1));
seq__12734 = G__12742;
chunk__12735 = G__12743;
count__12736 = G__12744;
i__12737 = G__12745;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12734);if(temp__4126__auto__)
{var seq__12734__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12734__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__12734__$1);{
var G__12746 = cljs.core.chunk_rest.call(null,seq__12734__$1);
var G__12747 = c__4297__auto__;
var G__12748 = cljs.core.count.call(null,c__4297__auto__);
var G__12749 = (0);
seq__12734 = G__12746;
chunk__12735 = G__12747;
count__12736 = G__12748;
i__12737 = G__12749;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__12734__$1);var boundaryline_id_12750 = (bl["id"]);var tolerance_12751 = (bl["tolerance"]);var general_cache_path_12752 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12750,tolerance_12751], null));var collection_cache_path_12753 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12750,tolerance_12751], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12752,((function (seq__12734,chunk__12735,count__12736,i__12737,boundaryline_id_12750,tolerance_12751,general_cache_path_12752,collection_cache_path_12753,bl,seq__12734__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12734,chunk__12735,count__12736,i__12737,boundaryline_id_12750,tolerance_12751,general_cache_path_12752,collection_cache_path_12753,bl,seq__12734__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12753))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12753,((function (seq__12734,chunk__12735,count__12736,i__12737,boundaryline_id_12750,tolerance_12751,general_cache_path_12752,collection_cache_path_12753,bl,seq__12734__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12734,chunk__12735,count__12736,i__12737,boundaryline_id_12750,tolerance_12751,general_cache_path_12752,collection_cache_path_12753,bl,seq__12734__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12754 = cljs.core.next.call(null,seq__12734__$1);
var G__12755 = null;
var G__12756 = (0);
var G__12757 = (0);
seq__12734 = G__12754;
chunk__12735 = G__12755;
count__12736 = G__12756;
i__12737 = G__12757;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12758){var map__12774 = p__12758;var map__12774__$1 = ((cljs.core.seq_QMARK_.call(null,map__12774))?cljs.core.apply.call(null,cljs.core.hash_map,map__12774):map__12774);var bounds = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,comm,map__12774,map__12774__$1,bounds,boundaryline_ids){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,comm,map__12774,map__12774__$1,bounds,boundaryline_ids){
return (function (state_12779){var state_val_12780 = (state_12779[(1)]);if((state_val_12780 === (2)))
{var inst_12776 = (state_12779[(2)]);var inst_12777 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_12776);var state_12779__$1 = (function (){var statearr_12781 = state_12779;(statearr_12781[(7)] = inst_12777);
return statearr_12781;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12779__$1,true);
} else
{if((state_val_12780 === (1)))
{var state_12779__$1 = state_12779;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12779__$1,(2),comm);
} else
{return null;
}
}
});})(c__5691__auto__,comm,map__12774,map__12774__$1,bounds,boundaryline_ids))
;return ((function (switch__5676__auto__,c__5691__auto__,comm,map__12774,map__12774__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_12785 = [null,null,null,null,null,null,null,null];(statearr_12785[(0)] = state_machine__5677__auto__);
(statearr_12785[(1)] = (1));
return statearr_12785;
});
var state_machine__5677__auto____1 = (function (state_12779){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_12779);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e12786){if((e12786 instanceof Object))
{var ex__5680__auto__ = e12786;var statearr_12787_12789 = state_12779;(statearr_12787_12789[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12779);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12790 = state_12779;
state_12779 = G__12790;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_12779){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_12779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,comm,map__12774,map__12774__$1,bounds,boundaryline_ids))
})();var state__5693__auto__ = (function (){var statearr_12788 = f__5692__auto__.call(null);(statearr_12788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_12788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,comm,map__12774,map__12774__$1,bounds,boundaryline_ids))
);
return c__5691__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__12758 = null;if (arguments.length > 5) {
  p__12758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12758);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__12791){
var app_state = cljs.core.first(arglist__12791);
arglist__12791 = cljs.core.next(arglist__12791);
var boundarylines_path = cljs.core.first(arglist__12791);
arglist__12791 = cljs.core.next(arglist__12791);
var collection_boundarylines_path = cljs.core.first(arglist__12791);
arglist__12791 = cljs.core.next(arglist__12791);
var collection_id = cljs.core.first(arglist__12791);
arglist__12791 = cljs.core.next(arglist__12791);
var tolerance = cljs.core.first(arglist__12791);
var p__12758 = cljs.core.rest(arglist__12791);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12758);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3529__auto__ = default_bl;if(cljs.core.truth_(and__3529__auto__))
{return default_tol;
} else
{return and__3529__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3541__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__12792){var map__12797 = p__12792;var map__12797__$1 = ((cljs.core.seq_QMARK_.call(null,map__12797))?cljs.core.apply.call(null,cljs.core.hash_map,map__12797):map__12797);var boundaryline_ids = cljs.core.get.call(null,map__12797__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12797,map__12797__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12797,map__12797__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12797,map__12797__$1,boundaryline_ids){
return (function (p__12798){var vec__12799 = p__12798;var blid = cljs.core.nth.call(null,vec__12799,(0),null);var vec__12800 = cljs.core.nth.call(null,vec__12799,(1),null);var tol = cljs.core.nth.call(null,vec__12800,(0),null);var bl = cljs.core.nth.call(null,vec__12800,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12797,map__12797__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__12792 = null;if (arguments.length > 5) {
  p__12792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__12792);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__12801){
var app_state = cljs.core.first(arglist__12801);
arglist__12801 = cljs.core.next(arglist__12801);
var boundarylines_path = cljs.core.first(arglist__12801);
arglist__12801 = cljs.core.next(arglist__12801);
var collection_id = cljs.core.first(arglist__12801);
arglist__12801 = cljs.core.next(arglist__12801);
var bounds = cljs.core.first(arglist__12801);
arglist__12801 = cljs.core.next(arglist__12801);
var zoom = cljs.core.first(arglist__12801);
var p__12792 = cljs.core.rest(arglist__12801);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__12792);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12806_12810 = cljs.core.seq.call(null,keys);var chunk__12807_12811 = null;var count__12808_12812 = (0);var i__12809_12813 = (0);while(true){
if((i__12809_12813 < count__12808_12812))
{var k_12814 = cljs.core._nth.call(null,chunk__12807_12811,i__12809_12813);var obj_12815 = (js_index[k_12814]);var geom_12816 = (obj_12815["geojson"]);var feature_12817 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12815["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12815["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12815["compact_name"])], null)], null));var __12818__$1 = (feature_12817["geometry"] = geom_12816);var __12819__$2 = ((feature_12817["properties"])["index_object"] = obj_12815);features.push(feature_12817);
{
var G__12820 = seq__12806_12810;
var G__12821 = chunk__12807_12811;
var G__12822 = count__12808_12812;
var G__12823 = (i__12809_12813 + (1));
seq__12806_12810 = G__12820;
chunk__12807_12811 = G__12821;
count__12808_12812 = G__12822;
i__12809_12813 = G__12823;
continue;
}
} else
{var temp__4126__auto___12824 = cljs.core.seq.call(null,seq__12806_12810);if(temp__4126__auto___12824)
{var seq__12806_12825__$1 = temp__4126__auto___12824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12806_12825__$1))
{var c__4297__auto___12826 = cljs.core.chunk_first.call(null,seq__12806_12825__$1);{
var G__12827 = cljs.core.chunk_rest.call(null,seq__12806_12825__$1);
var G__12828 = c__4297__auto___12826;
var G__12829 = cljs.core.count.call(null,c__4297__auto___12826);
var G__12830 = (0);
seq__12806_12810 = G__12827;
chunk__12807_12811 = G__12828;
count__12808_12812 = G__12829;
i__12809_12813 = G__12830;
continue;
}
} else
{var k_12831 = cljs.core.first.call(null,seq__12806_12825__$1);var obj_12832 = (js_index[k_12831]);var geom_12833 = (obj_12832["geojson"]);var feature_12834 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12832["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12832["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12832["compact_name"])], null)], null));var __12835__$1 = (feature_12834["geometry"] = geom_12833);var __12836__$2 = ((feature_12834["properties"])["index_object"] = obj_12832);features.push(feature_12834);
{
var G__12837 = cljs.core.next.call(null,seq__12806_12825__$1);
var G__12838 = null;
var G__12839 = (0);
var G__12840 = (0);
seq__12806_12810 = G__12837;
chunk__12807_12811 = G__12838;
count__12808_12812 = G__12839;
i__12809_12813 = G__12840;
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
{var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_12883){var state_val_12884 = (state_12883[(1)]);if((state_val_12884 === (5)))
{var inst_12881 = (state_12883[(2)]);var state_12883__$1 = state_12883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12883__$1,inst_12881);
} else
{if((state_val_12884 === (4)))
{var state_12883__$1 = state_12883;var statearr_12885_12897 = state_12883__$1;(statearr_12885_12897[(2)] = null);
(statearr_12885_12897[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (3)))
{var inst_12871 = (state_12883[(7)]);var inst_12878 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_12871);var state_12883__$1 = state_12883;var statearr_12886_12898 = state_12883__$1;(statearr_12886_12898[(2)] = inst_12878);
(statearr_12886_12898[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (2)))
{var inst_12871 = (state_12883[(7)]);var inst_12871__$1 = (state_12883[(2)]);var inst_12872 = (function (){var bl_coll_index = inst_12871__$1;return ((function (bl_coll_index,inst_12871,inst_12871__$1,state_val_12884,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_12871,inst_12871__$1,state_val_12884,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_12873 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_12872);var inst_12874 = cljs.core.deref.call(null,app_state);var inst_12875 = cljs.core.get_in.call(null,inst_12874,index_path);var inst_12876 = cljs.core._EQ_.call(null,inst_12875,inst_12871__$1);var state_12883__$1 = (function (){var statearr_12887 = state_12883;(statearr_12887[(8)] = inst_12873);
(statearr_12887[(7)] = inst_12871__$1);
return statearr_12887;
})();if(inst_12876)
{var statearr_12888_12899 = state_12883__$1;(statearr_12888_12899[(1)] = (3));
} else
{var statearr_12889_12900 = state_12883__$1;(statearr_12889_12900[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (1)))
{var inst_12869 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12883__$1 = state_12883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12883__$1,(2),inst_12869);
} else
{return null;
}
}
}
}
}
});})(c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5676__auto__,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_12893 = [null,null,null,null,null,null,null,null,null];(statearr_12893[(0)] = state_machine__5677__auto__);
(statearr_12893[(1)] = (1));
return statearr_12893;
});
var state_machine__5677__auto____1 = (function (state_12883){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_12883);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e12894){if((e12894 instanceof Object))
{var ex__5680__auto__ = e12894;var statearr_12895_12901 = state_12883;(statearr_12895_12901[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12902 = state_12883;
state_12883 = G__12902;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_12883){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_12883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5693__auto__ = (function (){var statearr_12896 = f__5692__auto__.call(null);(statearr_12896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_12896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5691__auto__;
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
,(function (){var or__3541__auto__ = hits;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
