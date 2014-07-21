// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__38118){var vec__38119 = p__38118;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38119,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38119,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.some(avail_set,coarser);
}
}
});
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_(x))
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
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
*/
clustermap.boundarylines.fetch_boundarylines = (function fetch_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundaryline_ids,tolerance){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var comm = clustermap.api.boundaryline_set.cljs$core$IFn$_invoke$arity$variadic(boundaryline_ids,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$789,true], 0));var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (state_38330){var state_val_38331 = (state_38330[(1)]);if((state_val_38331 === (7)))
{var inst_38326 = (state_38330[(2)]);var state_38330__$1 = state_38330;var statearr_38332_38382 = state_38330__$1;(statearr_38332_38382[(2)] = inst_38326);
(statearr_38332_38382[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (20)))
{var inst_38299 = (state_38330[(7)]);var inst_38304 = [inst_38299,tolerance];var inst_38305 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38304,null));var inst_38306 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,inst_38305);var state_38330__$1 = state_38330;var statearr_38333_38383 = state_38330__$1;(statearr_38333_38383[(2)] = inst_38306);
(statearr_38333_38383[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (1)))
{var state_38330__$1 = state_38330;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38330__$1,(2),comm);
} else
{if((state_val_38331 === (24)))
{var state_38330__$1 = state_38330;var statearr_38334_38384 = state_38330__$1;(statearr_38334_38384[(2)] = null);
(statearr_38334_38384[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (4)))
{var inst_38328 = (state_38330[(2)]);var state_38330__$1 = (function (){var statearr_38335 = state_38330;(statearr_38335[(8)] = inst_38328);
return statearr_38335;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38330__$1,true);
} else
{if((state_val_38331 === (15)))
{var state_38330__$1 = state_38330;var statearr_38339_38385 = state_38330__$1;(statearr_38339_38385[(2)] = null);
(statearr_38339_38385[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (21)))
{var state_38330__$1 = state_38330;var statearr_38340_38386 = state_38330__$1;(statearr_38340_38386[(2)] = null);
(statearr_38340_38386[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (13)))
{var inst_38260 = (state_38330[(9)]);var inst_38258 = (state_38330[(10)]);var inst_38261 = (state_38330[(11)]);var inst_38259 = (state_38330[(12)]);var inst_38285 = (state_38330[(2)]);var inst_38286 = (inst_38261 + (1));var tmp38336 = inst_38260;var tmp38337 = inst_38258;var tmp38338 = inst_38259;var inst_38258__$1 = tmp38337;var inst_38259__$1 = tmp38338;var inst_38260__$1 = tmp38336;var inst_38261__$1 = inst_38286;var state_38330__$1 = (function (){var statearr_38341 = state_38330;(statearr_38341[(9)] = inst_38260__$1);
(statearr_38341[(10)] = inst_38258__$1);
(statearr_38341[(11)] = inst_38261__$1);
(statearr_38341[(12)] = inst_38259__$1);
(statearr_38341[(13)] = inst_38285);
return statearr_38341;
})();var statearr_38342_38387 = state_38330__$1;(statearr_38342_38387[(2)] = null);
(statearr_38342_38387[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (22)))
{var inst_38260 = (state_38330[(9)]);var inst_38299 = (state_38330[(7)]);var inst_38261 = (state_38330[(11)]);var inst_38298 = (state_38330[(14)]);var inst_38302 = (state_38330[(15)]);var inst_38259 = (state_38330[(12)]);var inst_38252 = (state_38330[(16)]);var inst_38289 = (state_38330[(17)]);var inst_38309 = (state_38330[(18)]);var inst_38309__$1 = (state_38330[(2)]);var inst_38310 = (function (){var chunk__38254 = inst_38259;var temp__4126__auto__ = inst_38289;var bls = inst_38252;var boundaryline_id = inst_38299;var general_cache_path = inst_38302;var count__38255 = inst_38260;var bl = inst_38298;var collection_cache_path = inst_38309__$1;var seq__38253 = inst_38289;var i__38256 = inst_38261;return ((function (chunk__38254,temp__4126__auto__,bls,boundaryline_id,general_cache_path,count__38255,bl,collection_cache_path,seq__38253,i__38256,inst_38260,inst_38299,inst_38261,inst_38298,inst_38302,inst_38259,inst_38252,inst_38289,inst_38309,inst_38309__$1,state_val_38331,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(chunk__38254,temp__4126__auto__,bls,boundaryline_id,general_cache_path,count__38255,bl,collection_cache_path,seq__38253,i__38256,inst_38260,inst_38299,inst_38261,inst_38298,inst_38302,inst_38259,inst_38252,inst_38289,inst_38309,inst_38309__$1,state_val_38331,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_38311 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,inst_38302,inst_38310);var state_38330__$1 = (function (){var statearr_38343 = state_38330;(statearr_38343[(19)] = inst_38311);
(statearr_38343[(18)] = inst_38309__$1);
return statearr_38343;
})();if(cljs.core.truth_(inst_38309__$1))
{var statearr_38344_38388 = state_38330__$1;(statearr_38344_38388[(1)] = (23));
} else
{var statearr_38345_38389 = state_38330__$1;(statearr_38345_38389[(1)] = (24));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (6)))
{var inst_38258 = (state_38330[(10)]);var inst_38289 = (state_38330[(17)]);var inst_38289__$1 = cljs.core.seq(inst_38258);var state_38330__$1 = (function (){var statearr_38346 = state_38330;(statearr_38346[(17)] = inst_38289__$1);
return statearr_38346;
})();if(inst_38289__$1)
{var statearr_38347_38390 = state_38330__$1;(statearr_38347_38390[(1)] = (14));
} else
{var statearr_38348_38391 = state_38330__$1;(statearr_38348_38391[(1)] = (15));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (25)))
{var inst_38289 = (state_38330[(17)]);var inst_38317 = (state_38330[(2)]);var inst_38318 = cljs.core.next(inst_38289);var inst_38258 = inst_38318;var inst_38259 = null;var inst_38260 = (0);var inst_38261 = (0);var state_38330__$1 = (function (){var statearr_38349 = state_38330;(statearr_38349[(9)] = inst_38260);
(statearr_38349[(10)] = inst_38258);
(statearr_38349[(11)] = inst_38261);
(statearr_38349[(12)] = inst_38259);
(statearr_38349[(20)] = inst_38317);
return statearr_38349;
})();var statearr_38350_38392 = state_38330__$1;(statearr_38350_38392[(2)] = null);
(statearr_38350_38392[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (17)))
{var inst_38289 = (state_38330[(17)]);var inst_38293 = cljs.core.chunk_first(inst_38289);var inst_38294 = cljs.core.chunk_rest(inst_38289);var inst_38295 = cljs.core.count(inst_38293);var inst_38258 = inst_38294;var inst_38259 = inst_38293;var inst_38260 = inst_38295;var inst_38261 = (0);var state_38330__$1 = (function (){var statearr_38351 = state_38330;(statearr_38351[(9)] = inst_38260);
(statearr_38351[(10)] = inst_38258);
(statearr_38351[(11)] = inst_38261);
(statearr_38351[(12)] = inst_38259);
return statearr_38351;
})();var statearr_38352_38393 = state_38330__$1;(statearr_38352_38393[(2)] = null);
(statearr_38352_38393[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (3)))
{var inst_38260 = (state_38330[(9)]);var inst_38261 = (state_38330[(11)]);var inst_38263 = (inst_38261 < inst_38260);var inst_38264 = inst_38263;var state_38330__$1 = state_38330;if(cljs.core.truth_(inst_38264))
{var statearr_38353_38394 = state_38330__$1;(statearr_38353_38394[(1)] = (5));
} else
{var statearr_38354_38395 = state_38330__$1;(statearr_38354_38395[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (12)))
{var state_38330__$1 = state_38330;var statearr_38355_38396 = state_38330__$1;(statearr_38355_38396[(2)] = null);
(statearr_38355_38396[(1)] = (13));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (2)))
{var inst_38252 = (state_38330[(16)]);var inst_38252__$1 = (state_38330[(2)]);var inst_38257 = cljs.core.seq(inst_38252__$1);var inst_38258 = inst_38257;var inst_38259 = null;var inst_38260 = (0);var inst_38261 = (0);var state_38330__$1 = (function (){var statearr_38356 = state_38330;(statearr_38356[(9)] = inst_38260);
(statearr_38356[(10)] = inst_38258);
(statearr_38356[(11)] = inst_38261);
(statearr_38356[(12)] = inst_38259);
(statearr_38356[(16)] = inst_38252__$1);
return statearr_38356;
})();var statearr_38357_38397 = state_38330__$1;(statearr_38357_38397[(2)] = null);
(statearr_38357_38397[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (23)))
{var inst_38260 = (state_38330[(9)]);var inst_38299 = (state_38330[(7)]);var inst_38261 = (state_38330[(11)]);var inst_38298 = (state_38330[(14)]);var inst_38302 = (state_38330[(15)]);var inst_38259 = (state_38330[(12)]);var inst_38252 = (state_38330[(16)]);var inst_38289 = (state_38330[(17)]);var inst_38309 = (state_38330[(18)]);var inst_38313 = (function (){var chunk__38254 = inst_38259;var temp__4126__auto__ = inst_38289;var bls = inst_38252;var boundaryline_id = inst_38299;var general_cache_path = inst_38302;var count__38255 = inst_38260;var bl = inst_38298;var collection_cache_path = inst_38309;var seq__38253 = inst_38289;var i__38256 = inst_38261;return ((function (chunk__38254,temp__4126__auto__,bls,boundaryline_id,general_cache_path,count__38255,bl,collection_cache_path,seq__38253,i__38256,inst_38260,inst_38299,inst_38261,inst_38298,inst_38302,inst_38259,inst_38252,inst_38289,inst_38309,state_val_38331,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(chunk__38254,temp__4126__auto__,bls,boundaryline_id,general_cache_path,count__38255,bl,collection_cache_path,seq__38253,i__38256,inst_38260,inst_38299,inst_38261,inst_38298,inst_38302,inst_38259,inst_38252,inst_38289,inst_38309,state_val_38331,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_38314 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,inst_38309,inst_38313);var state_38330__$1 = state_38330;var statearr_38358_38398 = state_38330__$1;(statearr_38358_38398[(2)] = inst_38314);
(statearr_38358_38398[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (19)))
{var inst_38321 = (state_38330[(2)]);var state_38330__$1 = state_38330;var statearr_38359_38399 = state_38330__$1;(statearr_38359_38399[(2)] = inst_38321);
(statearr_38359_38399[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (11)))
{var inst_38277 = (state_38330[(21)]);var inst_38260 = (state_38330[(9)]);var inst_38258 = (state_38330[(10)]);var inst_38261 = (state_38330[(11)]);var inst_38259 = (state_38330[(12)]);var inst_38252 = (state_38330[(16)]);var inst_38267 = (state_38330[(22)]);var inst_38266 = (state_38330[(23)]);var inst_38270 = (state_38330[(24)]);var inst_38281 = (function (){var collection_cache_path = inst_38277;var general_cache_path = inst_38270;var boundaryline_id = inst_38267;var bl = inst_38266;var seq__38253 = inst_38258;var chunk__38254 = inst_38259;var count__38255 = inst_38260;var i__38256 = inst_38261;var bls = inst_38252;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__38253,chunk__38254,count__38255,i__38256,bls,inst_38277,inst_38260,inst_38258,inst_38261,inst_38259,inst_38252,inst_38267,inst_38266,inst_38270,state_val_38331,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__38253,chunk__38254,count__38255,i__38256,bls,inst_38277,inst_38260,inst_38258,inst_38261,inst_38259,inst_38252,inst_38267,inst_38266,inst_38270,state_val_38331,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_38282 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,inst_38277,inst_38281);var state_38330__$1 = state_38330;var statearr_38360_38400 = state_38330__$1;(statearr_38360_38400[(2)] = inst_38282);
(statearr_38360_38400[(1)] = (13));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (9)))
{var state_38330__$1 = state_38330;var statearr_38361_38401 = state_38330__$1;(statearr_38361_38401[(2)] = null);
(statearr_38361_38401[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (5)))
{var inst_38261 = (state_38330[(11)]);var inst_38259 = (state_38330[(12)]);var inst_38267 = (state_38330[(22)]);var inst_38266 = (state_38330[(23)]);var inst_38266__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38259,inst_38261);var inst_38267__$1 = (inst_38266__$1["id"]);var inst_38268 = [inst_38267__$1,tolerance];var inst_38269 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38268,null));var inst_38270 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,inst_38269);var state_38330__$1 = (function (){var statearr_38362 = state_38330;(statearr_38362[(22)] = inst_38267__$1);
(statearr_38362[(23)] = inst_38266__$1);
(statearr_38362[(24)] = inst_38270);
return statearr_38362;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_38363_38402 = state_38330__$1;(statearr_38363_38402[(1)] = (8));
} else
{var statearr_38364_38403 = state_38330__$1;(statearr_38364_38403[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (14)))
{var inst_38289 = (state_38330[(17)]);var inst_38291 = cljs.core.chunked_seq_QMARK_(inst_38289);var state_38330__$1 = state_38330;if(inst_38291)
{var statearr_38365_38404 = state_38330__$1;(statearr_38365_38404[(1)] = (17));
} else
{var statearr_38366_38405 = state_38330__$1;(statearr_38366_38405[(1)] = (18));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (16)))
{var inst_38324 = (state_38330[(2)]);var state_38330__$1 = state_38330;var statearr_38367_38406 = state_38330__$1;(statearr_38367_38406[(2)] = inst_38324);
(statearr_38367_38406[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (10)))
{var inst_38277 = (state_38330[(21)]);var inst_38260 = (state_38330[(9)]);var inst_38258 = (state_38330[(10)]);var inst_38261 = (state_38330[(11)]);var inst_38259 = (state_38330[(12)]);var inst_38252 = (state_38330[(16)]);var inst_38267 = (state_38330[(22)]);var inst_38266 = (state_38330[(23)]);var inst_38270 = (state_38330[(24)]);var inst_38277__$1 = (state_38330[(2)]);var inst_38278 = (function (){var collection_cache_path = inst_38277__$1;var general_cache_path = inst_38270;var boundaryline_id = inst_38267;var bl = inst_38266;var seq__38253 = inst_38258;var chunk__38254 = inst_38259;var count__38255 = inst_38260;var i__38256 = inst_38261;var bls = inst_38252;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__38253,chunk__38254,count__38255,i__38256,bls,inst_38277,inst_38260,inst_38258,inst_38261,inst_38259,inst_38252,inst_38267,inst_38266,inst_38270,inst_38277__$1,state_val_38331,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__38253,chunk__38254,count__38255,i__38256,bls,inst_38277,inst_38260,inst_38258,inst_38261,inst_38259,inst_38252,inst_38267,inst_38266,inst_38270,inst_38277__$1,state_val_38331,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_38279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,inst_38270,inst_38278);var state_38330__$1 = (function (){var statearr_38368 = state_38330;(statearr_38368[(21)] = inst_38277__$1);
(statearr_38368[(25)] = inst_38279);
return statearr_38368;
})();if(cljs.core.truth_(inst_38277__$1))
{var statearr_38369_38407 = state_38330__$1;(statearr_38369_38407[(1)] = (11));
} else
{var statearr_38370_38408 = state_38330__$1;(statearr_38370_38408[(1)] = (12));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (18)))
{var inst_38299 = (state_38330[(7)]);var inst_38298 = (state_38330[(14)]);var inst_38289 = (state_38330[(17)]);var inst_38298__$1 = cljs.core.first(inst_38289);var inst_38299__$1 = (inst_38298__$1["id"]);var inst_38300 = [inst_38299__$1,tolerance];var inst_38301 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38300,null));var inst_38302 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,inst_38301);var state_38330__$1 = (function (){var statearr_38371 = state_38330;(statearr_38371[(7)] = inst_38299__$1);
(statearr_38371[(14)] = inst_38298__$1);
(statearr_38371[(15)] = inst_38302);
return statearr_38371;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_38372_38409 = state_38330__$1;(statearr_38372_38409[(1)] = (20));
} else
{var statearr_38373_38410 = state_38330__$1;(statearr_38373_38410[(1)] = (21));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38331 === (8)))
{var inst_38267 = (state_38330[(22)]);var inst_38272 = [inst_38267,tolerance];var inst_38273 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38272,null));var inst_38274 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,inst_38273);var state_38330__$1 = state_38330;var statearr_38374_38411 = state_38330__$1;(statearr_38374_38411[(2)] = inst_38274);
(statearr_38374_38411[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
;return ((function (switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38378[(0)] = state_machine__5679__auto__);
(statearr_38378[(1)] = (1));
return statearr_38378;
});
var state_machine__5679__auto____1 = (function (state_38330){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38330);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38379){if((e38379 instanceof Object))
{var ex__5682__auto__ = e38379;var statearr_38380_38412 = state_38330;(statearr_38380_38412[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38330);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e38379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__38413 = state_38330;
state_38330 = G__38413;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38330){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var state__5695__auto__ = (function (){var statearr_38381 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_38381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
);
return c__5693__auto__;
});
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name(boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3531__auto__ = default_bl;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var use_tol = clustermap.boundarylines.best_available_tolerance(zoom,cljs.core.keys(bl_versions));var use_bl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bl_versions,use_tol);if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
}
});
/**
* gets the best boundaryline versions for a zoom level... where the best are not
* immediately available, fetches it asynchronously and returns the best immediately
* available
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundarylines = (function() { 
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__38414){var map__38419 = p__38414;var map__38419__$1 = ((cljs.core.seq_QMARK_(map__38419))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38419):map__38419);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419__$1,cljs.core.constant$keyword$800);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$801], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$802], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38419,map__38419__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.fetch_from_index(collection_index,blid)], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38419,map__38419__$1,min_zoom))
,boundaryline_ids));
} else
{var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$803], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$803], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38419,map__38419__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38419,map__38419__$1,min_zoom))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter(((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38419,map__38419__$1,min_zoom){
return (function (p__38420){var vec__38421 = p__38420;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38421,(0),null);var vec__38422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38421,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38422,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38422,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38419,map__38419__$1,min_zoom))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines(app_state,general_cache_path,collection_cache_path,boundaryline_ids,i_tol):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
}
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,var_args){
var p__38414 = null;if (arguments.length > 5) {
  p__38414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__38414);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__38423){
var app_state = cljs.core.first(arglist__38423);
arglist__38423 = cljs.core.next(arglist__38423);
var boundarylines_path = cljs.core.first(arglist__38423);
arglist__38423 = cljs.core.next(arglist__38423);
var collection_id = cljs.core.first(arglist__38423);
arglist__38423 = cljs.core.next(arglist__38423);
var boundaryline_ids = cljs.core.first(arglist__38423);
arglist__38423 = cljs.core.next(arglist__38423);
var zoom = cljs.core.first(arglist__38423);
var p__38414 = cljs.core.rest(arglist__38423);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__38414);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$801], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$804], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$805,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__38428_38432 = cljs.core.seq(keys);var chunk__38429_38433 = null;var count__38430_38434 = (0);var i__38431_38435 = (0);while(true){
if((i__38431_38435 < count__38430_38434))
{var k_38436 = chunk__38429_38433.cljs$core$IIndexed$_nth$arity$2(null,i__38431_38435);var obj_38437 = (js_index[k_38436]);var geom_38438 = (obj_38437["geojson"]);var feature_38439 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,"Feature",cljs.core.constant$keyword$806,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$807,(obj_38437["id"]),cljs.core.constant$keyword$808,(obj_38437["id"]),cljs.core.constant$keyword$809,(obj_38437["compact_name"])], null)], null));var __38440__$1 = (feature_38439["geometry"] = geom_38438);var __38441__$2 = ((feature_38439["properties"])["index_object"] = obj_38437);features.push(feature_38439);
{
var G__38442 = seq__38428_38432;
var G__38443 = chunk__38429_38433;
var G__38444 = count__38430_38434;
var G__38445 = (i__38431_38435 + (1));
seq__38428_38432 = G__38442;
chunk__38429_38433 = G__38443;
count__38430_38434 = G__38444;
i__38431_38435 = G__38445;
continue;
}
} else
{var temp__4126__auto___38446 = cljs.core.seq(seq__38428_38432);if(temp__4126__auto___38446)
{var seq__38428_38447__$1 = temp__4126__auto___38446;if(cljs.core.chunked_seq_QMARK_(seq__38428_38447__$1))
{var c__4299__auto___38448 = cljs.core.chunk_first(seq__38428_38447__$1);{
var G__38449 = cljs.core.chunk_rest(seq__38428_38447__$1);
var G__38450 = c__4299__auto___38448;
var G__38451 = cljs.core.count(c__4299__auto___38448);
var G__38452 = (0);
seq__38428_38432 = G__38449;
chunk__38429_38433 = G__38450;
count__38430_38434 = G__38451;
i__38431_38435 = G__38452;
continue;
}
} else
{var k_38453 = cljs.core.first(seq__38428_38447__$1);var obj_38454 = (js_index[k_38453]);var geom_38455 = (obj_38454["geojson"]);var feature_38456 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,"Feature",cljs.core.constant$keyword$806,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$807,(obj_38454["id"]),cljs.core.constant$keyword$808,(obj_38454["id"]),cljs.core.constant$keyword$809,(obj_38454["compact_name"])], null)], null));var __38457__$1 = (feature_38456["geometry"] = geom_38455);var __38458__$2 = ((feature_38456["properties"])["index_object"] = obj_38454);features.push(feature_38456);
{
var G__38459 = cljs.core.next(seq__38428_38447__$1);
var G__38460 = null;
var G__38461 = (0);
var G__38462 = (0);
seq__38428_38432 = G__38459;
chunk__38429_38433 = G__38460;
count__38430_38434 = G__38461;
i__38431_38435 = G__38462;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$801], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$802], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_38505){var state_val_38506 = (state_38505[(1)]);if((state_val_38506 === (5)))
{var inst_38503 = (state_38505[(2)]);var state_38505__$1 = state_38505;return cljs.core.async.impl.ioc_helpers.return_chan(state_38505__$1,inst_38503);
} else
{if((state_val_38506 === (4)))
{var state_38505__$1 = state_38505;var statearr_38507_38519 = state_38505__$1;(statearr_38507_38519[(2)] = null);
(statearr_38507_38519[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38506 === (3)))
{var inst_38493 = (state_38505[(7)]);var inst_38500 = clustermap.boundarylines.rtree_index(rtree,inst_38493);var state_38505__$1 = state_38505;var statearr_38508_38520 = state_38505__$1;(statearr_38508_38520[(2)] = inst_38500);
(statearr_38508_38520[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38506 === (2)))
{var inst_38493 = (state_38505[(7)]);var inst_38493__$1 = (state_38505[(2)]);var inst_38494 = (function (){var bl_coll_index = inst_38493__$1;return ((function (bl_coll_index,inst_38493,inst_38493__$1,state_val_38506,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_38493,inst_38493__$1,state_val_38506,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_38495 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_38494);var inst_38496 = cljs.core.deref(app_state);var inst_38497 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_38496,index_path);var inst_38498 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38497,inst_38493__$1);var state_38505__$1 = (function (){var statearr_38509 = state_38505;(statearr_38509[(7)] = inst_38493__$1);
(statearr_38509[(8)] = inst_38495);
return statearr_38509;
})();if(inst_38498)
{var statearr_38510_38521 = state_38505__$1;(statearr_38510_38521[(1)] = (3));
} else
{var statearr_38511_38522 = state_38505__$1;(statearr_38511_38522[(1)] = (4));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38506 === (1)))
{var inst_38491 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$789,true], 0));var state_38505__$1 = state_38505;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38505__$1,(2),inst_38491);
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
var state_machine__5679__auto____0 = (function (){var statearr_38515 = [null,null,null,null,null,null,null,null,null];(statearr_38515[(0)] = state_machine__5679__auto__);
(statearr_38515[(1)] = (1));
return statearr_38515;
});
var state_machine__5679__auto____1 = (function (state_38505){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38505);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38516){if((e38516 instanceof Object))
{var ex__5682__auto__ = e38516;var statearr_38517_38523 = state_38505;(statearr_38517_38523[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38505);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e38516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__38524 = state_38505;
state_38505 = G__38524;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38505){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_38518 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_38518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$801], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$804], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$810,x,cljs.core.constant$keyword$811,y,cljs.core.constant$keyword$812,(0),cljs.core.constant$keyword$813,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$807,hit.properties.id,cljs.core.constant$keyword$809,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,"Point",cljs.core.constant$keyword$814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
