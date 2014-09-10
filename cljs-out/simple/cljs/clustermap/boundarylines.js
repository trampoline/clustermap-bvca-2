// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3541__auto__ = cljs.core.some.call(null,(function (p__25056){var vec__25057 = p__25056;var z = cljs.core.nth.call(null,vec__25057,(0),null);var t = cljs.core.nth.call(null,vec__25057,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = z;if(cljs.core.truth_(and__3529__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__25062 = cljs.core.seq.call(null,boundarylines);var chunk__25063 = null;var count__25064 = (0);var i__25065 = (0);while(true){
if((i__25065 < count__25064))
{var bl = cljs.core._nth.call(null,chunk__25063,i__25065);var boundaryline_id_25066 = (bl["id"]);var tolerance_25067 = (bl["tolerance"]);var general_cache_path_25068 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25066,tolerance_25067], null));var collection_cache_path_25069 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25066,tolerance_25067], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_25068,((function (seq__25062,chunk__25063,count__25064,i__25065,boundaryline_id_25066,tolerance_25067,general_cache_path_25068,collection_cache_path_25069,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25062,chunk__25063,count__25064,i__25065,boundaryline_id_25066,tolerance_25067,general_cache_path_25068,collection_cache_path_25069,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_25069))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_25069,((function (seq__25062,chunk__25063,count__25064,i__25065,boundaryline_id_25066,tolerance_25067,general_cache_path_25068,collection_cache_path_25069,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25062,chunk__25063,count__25064,i__25065,boundaryline_id_25066,tolerance_25067,general_cache_path_25068,collection_cache_path_25069,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__25070 = seq__25062;
var G__25071 = chunk__25063;
var G__25072 = count__25064;
var G__25073 = (i__25065 + (1));
seq__25062 = G__25070;
chunk__25063 = G__25071;
count__25064 = G__25072;
i__25065 = G__25073;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25062);if(temp__4126__auto__)
{var seq__25062__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25062__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__25062__$1);{
var G__25074 = cljs.core.chunk_rest.call(null,seq__25062__$1);
var G__25075 = c__4297__auto__;
var G__25076 = cljs.core.count.call(null,c__4297__auto__);
var G__25077 = (0);
seq__25062 = G__25074;
chunk__25063 = G__25075;
count__25064 = G__25076;
i__25065 = G__25077;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__25062__$1);var boundaryline_id_25078 = (bl["id"]);var tolerance_25079 = (bl["tolerance"]);var general_cache_path_25080 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25078,tolerance_25079], null));var collection_cache_path_25081 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_25078,tolerance_25079], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_25080,((function (seq__25062,chunk__25063,count__25064,i__25065,boundaryline_id_25078,tolerance_25079,general_cache_path_25080,collection_cache_path_25081,bl,seq__25062__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25062,chunk__25063,count__25064,i__25065,boundaryline_id_25078,tolerance_25079,general_cache_path_25080,collection_cache_path_25081,bl,seq__25062__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_25081))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_25081,((function (seq__25062,chunk__25063,count__25064,i__25065,boundaryline_id_25078,tolerance_25079,general_cache_path_25080,collection_cache_path_25081,bl,seq__25062__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__25062,chunk__25063,count__25064,i__25065,boundaryline_id_25078,tolerance_25079,general_cache_path_25080,collection_cache_path_25081,bl,seq__25062__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__25082 = cljs.core.next.call(null,seq__25062__$1);
var G__25083 = null;
var G__25084 = (0);
var G__25085 = (0);
seq__25062 = G__25082;
chunk__25063 = G__25083;
count__25064 = G__25084;
i__25065 = G__25085;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25086){var map__25102 = p__25086;var map__25102__$1 = ((cljs.core.seq_QMARK_.call(null,map__25102))?cljs.core.apply.call(null,cljs.core.hash_map,map__25102):map__25102);var bounds = cljs.core.get.call(null,map__25102__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__25102__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,comm,map__25102,map__25102__$1,bounds,boundaryline_ids){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,comm,map__25102,map__25102__$1,bounds,boundaryline_ids){
return (function (state_25107){var state_val_25108 = (state_25107[(1)]);if((state_val_25108 === (2)))
{var inst_25104 = (state_25107[(2)]);var inst_25105 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_25104);var state_25107__$1 = (function (){var statearr_25109 = state_25107;(statearr_25109[(7)] = inst_25105);
return statearr_25109;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25107__$1,true);
} else
{if((state_val_25108 === (1)))
{var state_25107__$1 = state_25107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25107__$1,(2),comm);
} else
{return null;
}
}
});})(c__5691__auto__,comm,map__25102,map__25102__$1,bounds,boundaryline_ids))
;return ((function (switch__5676__auto__,c__5691__auto__,comm,map__25102,map__25102__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_25113 = [null,null,null,null,null,null,null,null];(statearr_25113[(0)] = state_machine__5677__auto__);
(statearr_25113[(1)] = (1));
return statearr_25113;
});
var state_machine__5677__auto____1 = (function (state_25107){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25107);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25114){if((e25114 instanceof Object))
{var ex__5680__auto__ = e25114;var statearr_25115_25117 = state_25107;(statearr_25115_25117[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25107);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25118 = state_25107;
state_25107 = G__25118;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25107){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,comm,map__25102,map__25102__$1,bounds,boundaryline_ids))
})();var state__5693__auto__ = (function (){var statearr_25116 = f__5692__auto__.call(null);(statearr_25116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_25116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,comm,map__25102,map__25102__$1,bounds,boundaryline_ids))
);
return c__5691__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__25086 = null;if (arguments.length > 5) {
  p__25086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25086);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__25119){
var app_state = cljs.core.first(arglist__25119);
arglist__25119 = cljs.core.next(arglist__25119);
var boundarylines_path = cljs.core.first(arglist__25119);
arglist__25119 = cljs.core.next(arglist__25119);
var collection_boundarylines_path = cljs.core.first(arglist__25119);
arglist__25119 = cljs.core.next(arglist__25119);
var collection_id = cljs.core.first(arglist__25119);
arglist__25119 = cljs.core.next(arglist__25119);
var tolerance = cljs.core.first(arglist__25119);
var p__25086 = cljs.core.rest(arglist__25119);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__25086);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__25120){var map__25125 = p__25120;var map__25125__$1 = ((cljs.core.seq_QMARK_.call(null,map__25125))?cljs.core.apply.call(null,cljs.core.hash_map,map__25125):map__25125);var boundaryline_ids = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__25125,map__25125__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__25125,map__25125__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__25125,map__25125__$1,boundaryline_ids){
return (function (p__25126){var vec__25127 = p__25126;var blid = cljs.core.nth.call(null,vec__25127,(0),null);var vec__25128 = cljs.core.nth.call(null,vec__25127,(1),null);var tol = cljs.core.nth.call(null,vec__25128,(0),null);var bl = cljs.core.nth.call(null,vec__25128,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__25125,map__25125__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__25120 = null;if (arguments.length > 5) {
  p__25120 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__25120);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__25129){
var app_state = cljs.core.first(arglist__25129);
arglist__25129 = cljs.core.next(arglist__25129);
var boundarylines_path = cljs.core.first(arglist__25129);
arglist__25129 = cljs.core.next(arglist__25129);
var collection_id = cljs.core.first(arglist__25129);
arglist__25129 = cljs.core.next(arglist__25129);
var bounds = cljs.core.first(arglist__25129);
arglist__25129 = cljs.core.next(arglist__25129);
var zoom = cljs.core.first(arglist__25129);
var p__25120 = cljs.core.rest(arglist__25129);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__25120);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__25134_25138 = cljs.core.seq.call(null,keys);var chunk__25135_25139 = null;var count__25136_25140 = (0);var i__25137_25141 = (0);while(true){
if((i__25137_25141 < count__25136_25140))
{var k_25142 = cljs.core._nth.call(null,chunk__25135_25139,i__25137_25141);var obj_25143 = (js_index[k_25142]);var geom_25144 = (obj_25143["geojson"]);var feature_25145 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25143["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25143["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25143["compact_name"])], null)], null));var __25146__$1 = (feature_25145["geometry"] = geom_25144);var __25147__$2 = ((feature_25145["properties"])["index_object"] = obj_25143);features.push(feature_25145);
{
var G__25148 = seq__25134_25138;
var G__25149 = chunk__25135_25139;
var G__25150 = count__25136_25140;
var G__25151 = (i__25137_25141 + (1));
seq__25134_25138 = G__25148;
chunk__25135_25139 = G__25149;
count__25136_25140 = G__25150;
i__25137_25141 = G__25151;
continue;
}
} else
{var temp__4126__auto___25152 = cljs.core.seq.call(null,seq__25134_25138);if(temp__4126__auto___25152)
{var seq__25134_25153__$1 = temp__4126__auto___25152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25134_25153__$1))
{var c__4297__auto___25154 = cljs.core.chunk_first.call(null,seq__25134_25153__$1);{
var G__25155 = cljs.core.chunk_rest.call(null,seq__25134_25153__$1);
var G__25156 = c__4297__auto___25154;
var G__25157 = cljs.core.count.call(null,c__4297__auto___25154);
var G__25158 = (0);
seq__25134_25138 = G__25155;
chunk__25135_25139 = G__25156;
count__25136_25140 = G__25157;
i__25137_25141 = G__25158;
continue;
}
} else
{var k_25159 = cljs.core.first.call(null,seq__25134_25153__$1);var obj_25160 = (js_index[k_25159]);var geom_25161 = (obj_25160["geojson"]);var feature_25162 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25160["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25160["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25160["compact_name"])], null)], null));var __25163__$1 = (feature_25162["geometry"] = geom_25161);var __25164__$2 = ((feature_25162["properties"])["index_object"] = obj_25160);features.push(feature_25162);
{
var G__25165 = cljs.core.next.call(null,seq__25134_25153__$1);
var G__25166 = null;
var G__25167 = (0);
var G__25168 = (0);
seq__25134_25138 = G__25165;
chunk__25135_25139 = G__25166;
count__25136_25140 = G__25167;
i__25137_25141 = G__25168;
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
return (function (state_25211){var state_val_25212 = (state_25211[(1)]);if((state_val_25212 === (5)))
{var inst_25209 = (state_25211[(2)]);var state_25211__$1 = state_25211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25211__$1,inst_25209);
} else
{if((state_val_25212 === (4)))
{var state_25211__$1 = state_25211;var statearr_25213_25225 = state_25211__$1;(statearr_25213_25225[(2)] = null);
(statearr_25213_25225[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25212 === (3)))
{var inst_25199 = (state_25211[(7)]);var inst_25206 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_25199);var state_25211__$1 = state_25211;var statearr_25214_25226 = state_25211__$1;(statearr_25214_25226[(2)] = inst_25206);
(statearr_25214_25226[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25212 === (2)))
{var inst_25199 = (state_25211[(7)]);var inst_25199__$1 = (state_25211[(2)]);var inst_25200 = (function (){var bl_coll_index = inst_25199__$1;return ((function (bl_coll_index,inst_25199,inst_25199__$1,state_val_25212,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_25199,inst_25199__$1,state_val_25212,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_25201 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_25200);var inst_25202 = cljs.core.deref.call(null,app_state);var inst_25203 = cljs.core.get_in.call(null,inst_25202,index_path);var inst_25204 = cljs.core._EQ_.call(null,inst_25203,inst_25199__$1);var state_25211__$1 = (function (){var statearr_25215 = state_25211;(statearr_25215[(7)] = inst_25199__$1);
(statearr_25215[(8)] = inst_25201);
return statearr_25215;
})();if(inst_25204)
{var statearr_25216_25227 = state_25211__$1;(statearr_25216_25227[(1)] = (3));
} else
{var statearr_25217_25228 = state_25211__$1;(statearr_25217_25228[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25212 === (1)))
{var inst_25197 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_25211__$1 = state_25211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25211__$1,(2),inst_25197);
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
var state_machine__5677__auto____0 = (function (){var statearr_25221 = [null,null,null,null,null,null,null,null,null];(statearr_25221[(0)] = state_machine__5677__auto__);
(statearr_25221[(1)] = (1));
return statearr_25221;
});
var state_machine__5677__auto____1 = (function (state_25211){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25211);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25222){if((e25222 instanceof Object))
{var ex__5680__auto__ = e25222;var statearr_25223_25229 = state_25211;(statearr_25223_25229[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25211);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25230 = state_25211;
state_25211 = G__25230;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25211){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5693__auto__ = (function (){var statearr_25224 = f__5692__auto__.call(null);(statearr_25224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_25224;
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
