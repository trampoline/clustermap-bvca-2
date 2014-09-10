// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3541__auto__ = cljs.core.some.call(null,(function (p__49712){var vec__49713 = p__49712;var z = cljs.core.nth.call(null,vec__49713,(0),null);var t = cljs.core.nth.call(null,vec__49713,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = z;if(cljs.core.truth_(and__3529__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__49718 = cljs.core.seq.call(null,boundarylines);var chunk__49719 = null;var count__49720 = (0);var i__49721 = (0);while(true){
if((i__49721 < count__49720))
{var bl = cljs.core._nth.call(null,chunk__49719,i__49721);var boundaryline_id_49722 = (bl["id"]);var tolerance_49723 = (bl["tolerance"]);var general_cache_path_49724 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49722,tolerance_49723], null));var collection_cache_path_49725 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49722,tolerance_49723], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_49724,((function (seq__49718,chunk__49719,count__49720,i__49721,boundaryline_id_49722,tolerance_49723,general_cache_path_49724,collection_cache_path_49725,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49718,chunk__49719,count__49720,i__49721,boundaryline_id_49722,tolerance_49723,general_cache_path_49724,collection_cache_path_49725,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_49725))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_49725,((function (seq__49718,chunk__49719,count__49720,i__49721,boundaryline_id_49722,tolerance_49723,general_cache_path_49724,collection_cache_path_49725,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49718,chunk__49719,count__49720,i__49721,boundaryline_id_49722,tolerance_49723,general_cache_path_49724,collection_cache_path_49725,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__49726 = seq__49718;
var G__49727 = chunk__49719;
var G__49728 = count__49720;
var G__49729 = (i__49721 + (1));
seq__49718 = G__49726;
chunk__49719 = G__49727;
count__49720 = G__49728;
i__49721 = G__49729;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49718);if(temp__4126__auto__)
{var seq__49718__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49718__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__49718__$1);{
var G__49730 = cljs.core.chunk_rest.call(null,seq__49718__$1);
var G__49731 = c__4297__auto__;
var G__49732 = cljs.core.count.call(null,c__4297__auto__);
var G__49733 = (0);
seq__49718 = G__49730;
chunk__49719 = G__49731;
count__49720 = G__49732;
i__49721 = G__49733;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__49718__$1);var boundaryline_id_49734 = (bl["id"]);var tolerance_49735 = (bl["tolerance"]);var general_cache_path_49736 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49734,tolerance_49735], null));var collection_cache_path_49737 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49734,tolerance_49735], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_49736,((function (seq__49718,chunk__49719,count__49720,i__49721,boundaryline_id_49734,tolerance_49735,general_cache_path_49736,collection_cache_path_49737,bl,seq__49718__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49718,chunk__49719,count__49720,i__49721,boundaryline_id_49734,tolerance_49735,general_cache_path_49736,collection_cache_path_49737,bl,seq__49718__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_49737))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_49737,((function (seq__49718,chunk__49719,count__49720,i__49721,boundaryline_id_49734,tolerance_49735,general_cache_path_49736,collection_cache_path_49737,bl,seq__49718__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49718,chunk__49719,count__49720,i__49721,boundaryline_id_49734,tolerance_49735,general_cache_path_49736,collection_cache_path_49737,bl,seq__49718__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__49738 = cljs.core.next.call(null,seq__49718__$1);
var G__49739 = null;
var G__49740 = (0);
var G__49741 = (0);
seq__49718 = G__49738;
chunk__49719 = G__49739;
count__49720 = G__49740;
i__49721 = G__49741;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49742){var map__49758 = p__49742;var map__49758__$1 = ((cljs.core.seq_QMARK_.call(null,map__49758))?cljs.core.apply.call(null,cljs.core.hash_map,map__49758):map__49758);var bounds = cljs.core.get.call(null,map__49758__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__49758__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,comm,map__49758,map__49758__$1,bounds,boundaryline_ids){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,comm,map__49758,map__49758__$1,bounds,boundaryline_ids){
return (function (state_49763){var state_val_49764 = (state_49763[(1)]);if((state_val_49764 === (2)))
{var inst_49760 = (state_49763[(2)]);var inst_49761 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_49760);var state_49763__$1 = (function (){var statearr_49765 = state_49763;(statearr_49765[(7)] = inst_49761);
return statearr_49765;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49763__$1,true);
} else
{if((state_val_49764 === (1)))
{var state_49763__$1 = state_49763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49763__$1,(2),comm);
} else
{return null;
}
}
});})(c__5691__auto__,comm,map__49758,map__49758__$1,bounds,boundaryline_ids))
;return ((function (switch__5676__auto__,c__5691__auto__,comm,map__49758,map__49758__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_49769 = [null,null,null,null,null,null,null,null];(statearr_49769[(0)] = state_machine__5677__auto__);
(statearr_49769[(1)] = (1));
return statearr_49769;
});
var state_machine__5677__auto____1 = (function (state_49763){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49763);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49770){if((e49770 instanceof Object))
{var ex__5680__auto__ = e49770;var statearr_49771_49773 = state_49763;(statearr_49771_49773[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49763);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49774 = state_49763;
state_49763 = G__49774;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49763){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,comm,map__49758,map__49758__$1,bounds,boundaryline_ids))
})();var state__5693__auto__ = (function (){var statearr_49772 = f__5692__auto__.call(null);(statearr_49772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_49772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,comm,map__49758,map__49758__$1,bounds,boundaryline_ids))
);
return c__5691__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__49742 = null;if (arguments.length > 5) {
  p__49742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49742);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__49775){
var app_state = cljs.core.first(arglist__49775);
arglist__49775 = cljs.core.next(arglist__49775);
var boundarylines_path = cljs.core.first(arglist__49775);
arglist__49775 = cljs.core.next(arglist__49775);
var collection_boundarylines_path = cljs.core.first(arglist__49775);
arglist__49775 = cljs.core.next(arglist__49775);
var collection_id = cljs.core.first(arglist__49775);
arglist__49775 = cljs.core.next(arglist__49775);
var tolerance = cljs.core.first(arglist__49775);
var p__49742 = cljs.core.rest(arglist__49775);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49742);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__49776){var map__49781 = p__49776;var map__49781__$1 = ((cljs.core.seq_QMARK_.call(null,map__49781))?cljs.core.apply.call(null,cljs.core.hash_map,map__49781):map__49781);var boundaryline_ids = cljs.core.get.call(null,map__49781__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__49781,map__49781__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__49781,map__49781__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__49781,map__49781__$1,boundaryline_ids){
return (function (p__49782){var vec__49783 = p__49782;var blid = cljs.core.nth.call(null,vec__49783,(0),null);var vec__49784 = cljs.core.nth.call(null,vec__49783,(1),null);var tol = cljs.core.nth.call(null,vec__49784,(0),null);var bl = cljs.core.nth.call(null,vec__49784,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__49781,map__49781__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__49776 = null;if (arguments.length > 5) {
  p__49776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__49776);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__49785){
var app_state = cljs.core.first(arglist__49785);
arglist__49785 = cljs.core.next(arglist__49785);
var boundarylines_path = cljs.core.first(arglist__49785);
arglist__49785 = cljs.core.next(arglist__49785);
var collection_id = cljs.core.first(arglist__49785);
arglist__49785 = cljs.core.next(arglist__49785);
var bounds = cljs.core.first(arglist__49785);
arglist__49785 = cljs.core.next(arglist__49785);
var zoom = cljs.core.first(arglist__49785);
var p__49776 = cljs.core.rest(arglist__49785);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__49776);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__49790_49794 = cljs.core.seq.call(null,keys);var chunk__49791_49795 = null;var count__49792_49796 = (0);var i__49793_49797 = (0);while(true){
if((i__49793_49797 < count__49792_49796))
{var k_49798 = cljs.core._nth.call(null,chunk__49791_49795,i__49793_49797);var obj_49799 = (js_index[k_49798]);var geom_49800 = (obj_49799["geojson"]);var feature_49801 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_49799["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_49799["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_49799["compact_name"])], null)], null));var __49802__$1 = (feature_49801["geometry"] = geom_49800);var __49803__$2 = ((feature_49801["properties"])["index_object"] = obj_49799);features.push(feature_49801);
{
var G__49804 = seq__49790_49794;
var G__49805 = chunk__49791_49795;
var G__49806 = count__49792_49796;
var G__49807 = (i__49793_49797 + (1));
seq__49790_49794 = G__49804;
chunk__49791_49795 = G__49805;
count__49792_49796 = G__49806;
i__49793_49797 = G__49807;
continue;
}
} else
{var temp__4126__auto___49808 = cljs.core.seq.call(null,seq__49790_49794);if(temp__4126__auto___49808)
{var seq__49790_49809__$1 = temp__4126__auto___49808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49790_49809__$1))
{var c__4297__auto___49810 = cljs.core.chunk_first.call(null,seq__49790_49809__$1);{
var G__49811 = cljs.core.chunk_rest.call(null,seq__49790_49809__$1);
var G__49812 = c__4297__auto___49810;
var G__49813 = cljs.core.count.call(null,c__4297__auto___49810);
var G__49814 = (0);
seq__49790_49794 = G__49811;
chunk__49791_49795 = G__49812;
count__49792_49796 = G__49813;
i__49793_49797 = G__49814;
continue;
}
} else
{var k_49815 = cljs.core.first.call(null,seq__49790_49809__$1);var obj_49816 = (js_index[k_49815]);var geom_49817 = (obj_49816["geojson"]);var feature_49818 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_49816["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_49816["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_49816["compact_name"])], null)], null));var __49819__$1 = (feature_49818["geometry"] = geom_49817);var __49820__$2 = ((feature_49818["properties"])["index_object"] = obj_49816);features.push(feature_49818);
{
var G__49821 = cljs.core.next.call(null,seq__49790_49809__$1);
var G__49822 = null;
var G__49823 = (0);
var G__49824 = (0);
seq__49790_49794 = G__49821;
chunk__49791_49795 = G__49822;
count__49792_49796 = G__49823;
i__49793_49797 = G__49824;
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
return (function (state_49867){var state_val_49868 = (state_49867[(1)]);if((state_val_49868 === (5)))
{var inst_49865 = (state_49867[(2)]);var state_49867__$1 = state_49867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49867__$1,inst_49865);
} else
{if((state_val_49868 === (4)))
{var state_49867__$1 = state_49867;var statearr_49869_49881 = state_49867__$1;(statearr_49869_49881[(2)] = null);
(statearr_49869_49881[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49868 === (3)))
{var inst_49855 = (state_49867[(7)]);var inst_49862 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_49855);var state_49867__$1 = state_49867;var statearr_49870_49882 = state_49867__$1;(statearr_49870_49882[(2)] = inst_49862);
(statearr_49870_49882[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49868 === (2)))
{var inst_49855 = (state_49867[(7)]);var inst_49855__$1 = (state_49867[(2)]);var inst_49856 = (function (){var bl_coll_index = inst_49855__$1;return ((function (bl_coll_index,inst_49855,inst_49855__$1,state_val_49868,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_49855,inst_49855__$1,state_val_49868,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_49857 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_49856);var inst_49858 = cljs.core.deref.call(null,app_state);var inst_49859 = cljs.core.get_in.call(null,inst_49858,index_path);var inst_49860 = cljs.core._EQ_.call(null,inst_49859,inst_49855__$1);var state_49867__$1 = (function (){var statearr_49871 = state_49867;(statearr_49871[(8)] = inst_49857);
(statearr_49871[(7)] = inst_49855__$1);
return statearr_49871;
})();if(inst_49860)
{var statearr_49872_49883 = state_49867__$1;(statearr_49872_49883[(1)] = (3));
} else
{var statearr_49873_49884 = state_49867__$1;(statearr_49873_49884[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49868 === (1)))
{var inst_49853 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_49867__$1 = state_49867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49867__$1,(2),inst_49853);
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
var state_machine__5677__auto____0 = (function (){var statearr_49877 = [null,null,null,null,null,null,null,null,null];(statearr_49877[(0)] = state_machine__5677__auto__);
(statearr_49877[(1)] = (1));
return statearr_49877;
});
var state_machine__5677__auto____1 = (function (state_49867){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49867);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49878){if((e49878 instanceof Object))
{var ex__5680__auto__ = e49878;var statearr_49879_49885 = state_49867;(statearr_49879_49885[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49886 = state_49867;
state_49867 = G__49886;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49867){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5693__auto__ = (function (){var statearr_49880 = f__5692__auto__.call(null);(statearr_49880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_49880;
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

//# sourceMappingURL=boundarylines.js.map