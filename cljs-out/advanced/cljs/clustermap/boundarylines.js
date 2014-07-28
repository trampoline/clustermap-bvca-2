// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__38131){var vec__38132 = p__38131;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
return (function (state_38343){var state_val_38344 = (state_38343[(1)]);if((state_val_38344 === (7)))
{var inst_38339 = (state_38343[(2)]);var state_38343__$1 = state_38343;var statearr_38345_38395 = state_38343__$1;(statearr_38345_38395[(2)] = inst_38339);
(statearr_38345_38395[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (20)))
{var inst_38312 = (state_38343[(7)]);var inst_38317 = [inst_38312,tolerance];var inst_38318 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38317,null));var inst_38319 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,inst_38318);var state_38343__$1 = state_38343;var statearr_38346_38396 = state_38343__$1;(statearr_38346_38396[(2)] = inst_38319);
(statearr_38346_38396[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (1)))
{var state_38343__$1 = state_38343;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38343__$1,(2),comm);
} else
{if((state_val_38344 === (24)))
{var state_38343__$1 = state_38343;var statearr_38347_38397 = state_38343__$1;(statearr_38347_38397[(2)] = null);
(statearr_38347_38397[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (4)))
{var inst_38341 = (state_38343[(2)]);var state_38343__$1 = (function (){var statearr_38348 = state_38343;(statearr_38348[(8)] = inst_38341);
return statearr_38348;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38343__$1,true);
} else
{if((state_val_38344 === (15)))
{var state_38343__$1 = state_38343;var statearr_38352_38398 = state_38343__$1;(statearr_38352_38398[(2)] = null);
(statearr_38352_38398[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (21)))
{var state_38343__$1 = state_38343;var statearr_38353_38399 = state_38343__$1;(statearr_38353_38399[(2)] = null);
(statearr_38353_38399[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (13)))
{var inst_38274 = (state_38343[(9)]);var inst_38273 = (state_38343[(10)]);var inst_38271 = (state_38343[(11)]);var inst_38272 = (state_38343[(12)]);var inst_38298 = (state_38343[(2)]);var inst_38299 = (inst_38274 + (1));var tmp38349 = inst_38273;var tmp38350 = inst_38271;var tmp38351 = inst_38272;var inst_38271__$1 = tmp38350;var inst_38272__$1 = tmp38351;var inst_38273__$1 = tmp38349;var inst_38274__$1 = inst_38299;var state_38343__$1 = (function (){var statearr_38354 = state_38343;(statearr_38354[(9)] = inst_38274__$1);
(statearr_38354[(13)] = inst_38298);
(statearr_38354[(10)] = inst_38273__$1);
(statearr_38354[(11)] = inst_38271__$1);
(statearr_38354[(12)] = inst_38272__$1);
return statearr_38354;
})();var statearr_38355_38400 = state_38343__$1;(statearr_38355_38400[(2)] = null);
(statearr_38355_38400[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (22)))
{var inst_38274 = (state_38343[(9)]);var inst_38273 = (state_38343[(10)]);var inst_38302 = (state_38343[(14)]);var inst_38265 = (state_38343[(15)]);var inst_38272 = (state_38343[(12)]);var inst_38312 = (state_38343[(7)]);var inst_38315 = (state_38343[(16)]);var inst_38322 = (state_38343[(17)]);var inst_38311 = (state_38343[(18)]);var inst_38322__$1 = (state_38343[(2)]);var inst_38323 = (function (){var chunk__38267 = inst_38272;var temp__4126__auto__ = inst_38302;var count__38268 = inst_38273;var bls = inst_38265;var i__38269 = inst_38274;var boundaryline_id = inst_38312;var general_cache_path = inst_38315;var bl = inst_38311;var collection_cache_path = inst_38322__$1;var seq__38266 = inst_38302;return ((function (chunk__38267,temp__4126__auto__,count__38268,bls,i__38269,boundaryline_id,general_cache_path,bl,collection_cache_path,seq__38266,inst_38274,inst_38273,inst_38302,inst_38265,inst_38272,inst_38312,inst_38315,inst_38322,inst_38311,inst_38322__$1,state_val_38344,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(chunk__38267,temp__4126__auto__,count__38268,bls,i__38269,boundaryline_id,general_cache_path,bl,collection_cache_path,seq__38266,inst_38274,inst_38273,inst_38302,inst_38265,inst_38272,inst_38312,inst_38315,inst_38322,inst_38311,inst_38322__$1,state_val_38344,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_38324 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,inst_38315,inst_38323);var state_38343__$1 = (function (){var statearr_38356 = state_38343;(statearr_38356[(19)] = inst_38324);
(statearr_38356[(17)] = inst_38322__$1);
return statearr_38356;
})();if(cljs.core.truth_(inst_38322__$1))
{var statearr_38357_38401 = state_38343__$1;(statearr_38357_38401[(1)] = (23));
} else
{var statearr_38358_38402 = state_38343__$1;(statearr_38358_38402[(1)] = (24));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (6)))
{var inst_38302 = (state_38343[(14)]);var inst_38271 = (state_38343[(11)]);var inst_38302__$1 = cljs.core.seq(inst_38271);var state_38343__$1 = (function (){var statearr_38359 = state_38343;(statearr_38359[(14)] = inst_38302__$1);
return statearr_38359;
})();if(inst_38302__$1)
{var statearr_38360_38403 = state_38343__$1;(statearr_38360_38403[(1)] = (14));
} else
{var statearr_38361_38404 = state_38343__$1;(statearr_38361_38404[(1)] = (15));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (25)))
{var inst_38302 = (state_38343[(14)]);var inst_38330 = (state_38343[(2)]);var inst_38331 = cljs.core.next(inst_38302);var inst_38271 = inst_38331;var inst_38272 = null;var inst_38273 = (0);var inst_38274 = (0);var state_38343__$1 = (function (){var statearr_38362 = state_38343;(statearr_38362[(9)] = inst_38274);
(statearr_38362[(10)] = inst_38273);
(statearr_38362[(11)] = inst_38271);
(statearr_38362[(12)] = inst_38272);
(statearr_38362[(20)] = inst_38330);
return statearr_38362;
})();var statearr_38363_38405 = state_38343__$1;(statearr_38363_38405[(2)] = null);
(statearr_38363_38405[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (17)))
{var inst_38302 = (state_38343[(14)]);var inst_38306 = cljs.core.chunk_first(inst_38302);var inst_38307 = cljs.core.chunk_rest(inst_38302);var inst_38308 = cljs.core.count(inst_38306);var inst_38271 = inst_38307;var inst_38272 = inst_38306;var inst_38273 = inst_38308;var inst_38274 = (0);var state_38343__$1 = (function (){var statearr_38364 = state_38343;(statearr_38364[(9)] = inst_38274);
(statearr_38364[(10)] = inst_38273);
(statearr_38364[(11)] = inst_38271);
(statearr_38364[(12)] = inst_38272);
return statearr_38364;
})();var statearr_38365_38406 = state_38343__$1;(statearr_38365_38406[(2)] = null);
(statearr_38365_38406[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (3)))
{var inst_38274 = (state_38343[(9)]);var inst_38273 = (state_38343[(10)]);var inst_38276 = (inst_38274 < inst_38273);var inst_38277 = inst_38276;var state_38343__$1 = state_38343;if(cljs.core.truth_(inst_38277))
{var statearr_38366_38407 = state_38343__$1;(statearr_38366_38407[(1)] = (5));
} else
{var statearr_38367_38408 = state_38343__$1;(statearr_38367_38408[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (12)))
{var state_38343__$1 = state_38343;var statearr_38368_38409 = state_38343__$1;(statearr_38368_38409[(2)] = null);
(statearr_38368_38409[(1)] = (13));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (2)))
{var inst_38265 = (state_38343[(15)]);var inst_38265__$1 = (state_38343[(2)]);var inst_38270 = cljs.core.seq(inst_38265__$1);var inst_38271 = inst_38270;var inst_38272 = null;var inst_38273 = (0);var inst_38274 = (0);var state_38343__$1 = (function (){var statearr_38369 = state_38343;(statearr_38369[(9)] = inst_38274);
(statearr_38369[(10)] = inst_38273);
(statearr_38369[(11)] = inst_38271);
(statearr_38369[(15)] = inst_38265__$1);
(statearr_38369[(12)] = inst_38272);
return statearr_38369;
})();var statearr_38370_38410 = state_38343__$1;(statearr_38370_38410[(2)] = null);
(statearr_38370_38410[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (23)))
{var inst_38274 = (state_38343[(9)]);var inst_38273 = (state_38343[(10)]);var inst_38302 = (state_38343[(14)]);var inst_38265 = (state_38343[(15)]);var inst_38272 = (state_38343[(12)]);var inst_38312 = (state_38343[(7)]);var inst_38315 = (state_38343[(16)]);var inst_38322 = (state_38343[(17)]);var inst_38311 = (state_38343[(18)]);var inst_38326 = (function (){var chunk__38267 = inst_38272;var temp__4126__auto__ = inst_38302;var count__38268 = inst_38273;var bls = inst_38265;var i__38269 = inst_38274;var boundaryline_id = inst_38312;var general_cache_path = inst_38315;var bl = inst_38311;var collection_cache_path = inst_38322;var seq__38266 = inst_38302;return ((function (chunk__38267,temp__4126__auto__,count__38268,bls,i__38269,boundaryline_id,general_cache_path,bl,collection_cache_path,seq__38266,inst_38274,inst_38273,inst_38302,inst_38265,inst_38272,inst_38312,inst_38315,inst_38322,inst_38311,state_val_38344,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(chunk__38267,temp__4126__auto__,count__38268,bls,i__38269,boundaryline_id,general_cache_path,bl,collection_cache_path,seq__38266,inst_38274,inst_38273,inst_38302,inst_38265,inst_38272,inst_38312,inst_38315,inst_38322,inst_38311,state_val_38344,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_38327 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,inst_38322,inst_38326);var state_38343__$1 = state_38343;var statearr_38371_38411 = state_38343__$1;(statearr_38371_38411[(2)] = inst_38327);
(statearr_38371_38411[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (19)))
{var inst_38334 = (state_38343[(2)]);var state_38343__$1 = state_38343;var statearr_38372_38412 = state_38343__$1;(statearr_38372_38412[(2)] = inst_38334);
(statearr_38372_38412[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (11)))
{var inst_38274 = (state_38343[(9)]);var inst_38280 = (state_38343[(21)]);var inst_38273 = (state_38343[(10)]);var inst_38271 = (state_38343[(11)]);var inst_38265 = (state_38343[(15)]);var inst_38272 = (state_38343[(12)]);var inst_38279 = (state_38343[(22)]);var inst_38290 = (state_38343[(23)]);var inst_38283 = (state_38343[(24)]);var inst_38294 = (function (){var collection_cache_path = inst_38290;var general_cache_path = inst_38283;var boundaryline_id = inst_38280;var bl = inst_38279;var seq__38266 = inst_38271;var chunk__38267 = inst_38272;var count__38268 = inst_38273;var i__38269 = inst_38274;var bls = inst_38265;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__38266,chunk__38267,count__38268,i__38269,bls,inst_38274,inst_38280,inst_38273,inst_38271,inst_38265,inst_38272,inst_38279,inst_38290,inst_38283,state_val_38344,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__38266,chunk__38267,count__38268,i__38269,bls,inst_38274,inst_38280,inst_38273,inst_38271,inst_38265,inst_38272,inst_38279,inst_38290,inst_38283,state_val_38344,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_38295 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,inst_38290,inst_38294);var state_38343__$1 = state_38343;var statearr_38373_38413 = state_38343__$1;(statearr_38373_38413[(2)] = inst_38295);
(statearr_38373_38413[(1)] = (13));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (9)))
{var state_38343__$1 = state_38343;var statearr_38374_38414 = state_38343__$1;(statearr_38374_38414[(2)] = null);
(statearr_38374_38414[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (5)))
{var inst_38274 = (state_38343[(9)]);var inst_38280 = (state_38343[(21)]);var inst_38272 = (state_38343[(12)]);var inst_38279 = (state_38343[(22)]);var inst_38279__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38272,inst_38274);var inst_38280__$1 = (inst_38279__$1["id"]);var inst_38281 = [inst_38280__$1,tolerance];var inst_38282 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38281,null));var inst_38283 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,inst_38282);var state_38343__$1 = (function (){var statearr_38375 = state_38343;(statearr_38375[(21)] = inst_38280__$1);
(statearr_38375[(22)] = inst_38279__$1);
(statearr_38375[(24)] = inst_38283);
return statearr_38375;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_38376_38415 = state_38343__$1;(statearr_38376_38415[(1)] = (8));
} else
{var statearr_38377_38416 = state_38343__$1;(statearr_38377_38416[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (14)))
{var inst_38302 = (state_38343[(14)]);var inst_38304 = cljs.core.chunked_seq_QMARK_(inst_38302);var state_38343__$1 = state_38343;if(inst_38304)
{var statearr_38378_38417 = state_38343__$1;(statearr_38378_38417[(1)] = (17));
} else
{var statearr_38379_38418 = state_38343__$1;(statearr_38379_38418[(1)] = (18));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (16)))
{var inst_38337 = (state_38343[(2)]);var state_38343__$1 = state_38343;var statearr_38380_38419 = state_38343__$1;(statearr_38380_38419[(2)] = inst_38337);
(statearr_38380_38419[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (10)))
{var inst_38274 = (state_38343[(9)]);var inst_38280 = (state_38343[(21)]);var inst_38273 = (state_38343[(10)]);var inst_38271 = (state_38343[(11)]);var inst_38265 = (state_38343[(15)]);var inst_38272 = (state_38343[(12)]);var inst_38279 = (state_38343[(22)]);var inst_38290 = (state_38343[(23)]);var inst_38283 = (state_38343[(24)]);var inst_38290__$1 = (state_38343[(2)]);var inst_38291 = (function (){var collection_cache_path = inst_38290__$1;var general_cache_path = inst_38283;var boundaryline_id = inst_38280;var bl = inst_38279;var seq__38266 = inst_38271;var chunk__38267 = inst_38272;var count__38268 = inst_38273;var i__38269 = inst_38274;var bls = inst_38265;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__38266,chunk__38267,count__38268,i__38269,bls,inst_38274,inst_38280,inst_38273,inst_38271,inst_38265,inst_38272,inst_38279,inst_38290,inst_38283,inst_38290__$1,state_val_38344,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__38266,chunk__38267,count__38268,i__38269,bls,inst_38274,inst_38280,inst_38273,inst_38271,inst_38265,inst_38272,inst_38279,inst_38290,inst_38283,inst_38290__$1,state_val_38344,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_38292 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,inst_38283,inst_38291);var state_38343__$1 = (function (){var statearr_38381 = state_38343;(statearr_38381[(25)] = inst_38292);
(statearr_38381[(23)] = inst_38290__$1);
return statearr_38381;
})();if(cljs.core.truth_(inst_38290__$1))
{var statearr_38382_38420 = state_38343__$1;(statearr_38382_38420[(1)] = (11));
} else
{var statearr_38383_38421 = state_38343__$1;(statearr_38383_38421[(1)] = (12));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (18)))
{var inst_38302 = (state_38343[(14)]);var inst_38312 = (state_38343[(7)]);var inst_38311 = (state_38343[(18)]);var inst_38311__$1 = cljs.core.first(inst_38302);var inst_38312__$1 = (inst_38311__$1["id"]);var inst_38313 = [inst_38312__$1,tolerance];var inst_38314 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38313,null));var inst_38315 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,inst_38314);var state_38343__$1 = (function (){var statearr_38384 = state_38343;(statearr_38384[(7)] = inst_38312__$1);
(statearr_38384[(16)] = inst_38315);
(statearr_38384[(18)] = inst_38311__$1);
return statearr_38384;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_38385_38422 = state_38343__$1;(statearr_38385_38422[(1)] = (20));
} else
{var statearr_38386_38423 = state_38343__$1;(statearr_38386_38423[(1)] = (21));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38344 === (8)))
{var inst_38280 = (state_38343[(21)]);var inst_38285 = [inst_38280,tolerance];var inst_38286 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38285,null));var inst_38287 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,inst_38286);var state_38343__$1 = state_38343;var statearr_38387_38424 = state_38343__$1;(statearr_38387_38424[(2)] = inst_38287);
(statearr_38387_38424[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_38391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38391[(0)] = state_machine__5679__auto__);
(statearr_38391[(1)] = (1));
return statearr_38391;
});
var state_machine__5679__auto____1 = (function (state_38343){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38343);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38392){if((e38392 instanceof Object))
{var ex__5682__auto__ = e38392;var statearr_38393_38425 = state_38343;(statearr_38393_38425[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38343);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e38392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__38426 = state_38343;
state_38343 = G__38426;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38343){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var state__5695__auto__ = (function (){var statearr_38394 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_38394;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__38427){var map__38432 = p__38427;var map__38432__$1 = ((cljs.core.seq_QMARK_(map__38432))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38432):map__38432);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38432__$1,cljs.core.constant$keyword$801);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$802], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$803], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38432,map__38432__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.fetch_from_index(collection_index,blid)], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38432,map__38432__$1,min_zoom))
,boundaryline_ids));
} else
{var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$804], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$804], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38432,map__38432__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38432,map__38432__$1,min_zoom))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter(((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38432,map__38432__$1,min_zoom){
return (function (p__38433){var vec__38434 = p__38433;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(0),null);var vec__38435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38435,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38435,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__38432,map__38432__$1,min_zoom))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines(app_state,general_cache_path,collection_cache_path,boundaryline_ids,i_tol):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
}
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,var_args){
var p__38427 = null;if (arguments.length > 5) {
  p__38427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__38427);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__38436){
var app_state = cljs.core.first(arglist__38436);
arglist__38436 = cljs.core.next(arglist__38436);
var boundarylines_path = cljs.core.first(arglist__38436);
arglist__38436 = cljs.core.next(arglist__38436);
var collection_id = cljs.core.first(arglist__38436);
arglist__38436 = cljs.core.next(arglist__38436);
var boundaryline_ids = cljs.core.first(arglist__38436);
arglist__38436 = cljs.core.next(arglist__38436);
var zoom = cljs.core.first(arglist__38436);
var p__38427 = cljs.core.rest(arglist__38436);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__38427);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$802], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$805], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$806,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__38441_38445 = cljs.core.seq(keys);var chunk__38442_38446 = null;var count__38443_38447 = (0);var i__38444_38448 = (0);while(true){
if((i__38444_38448 < count__38443_38447))
{var k_38449 = chunk__38442_38446.cljs$core$IIndexed$_nth$arity$2(null,i__38444_38448);var obj_38450 = (js_index[k_38449]);var geom_38451 = (obj_38450["geojson"]);var feature_38452 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$806,"Feature",cljs.core.constant$keyword$807,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$808,(obj_38450["id"]),cljs.core.constant$keyword$809,(obj_38450["id"]),cljs.core.constant$keyword$810,(obj_38450["compact_name"])], null)], null));var __38453__$1 = (feature_38452["geometry"] = geom_38451);var __38454__$2 = ((feature_38452["properties"])["index_object"] = obj_38450);features.push(feature_38452);
{
var G__38455 = seq__38441_38445;
var G__38456 = chunk__38442_38446;
var G__38457 = count__38443_38447;
var G__38458 = (i__38444_38448 + (1));
seq__38441_38445 = G__38455;
chunk__38442_38446 = G__38456;
count__38443_38447 = G__38457;
i__38444_38448 = G__38458;
continue;
}
} else
{var temp__4126__auto___38459 = cljs.core.seq(seq__38441_38445);if(temp__4126__auto___38459)
{var seq__38441_38460__$1 = temp__4126__auto___38459;if(cljs.core.chunked_seq_QMARK_(seq__38441_38460__$1))
{var c__4299__auto___38461 = cljs.core.chunk_first(seq__38441_38460__$1);{
var G__38462 = cljs.core.chunk_rest(seq__38441_38460__$1);
var G__38463 = c__4299__auto___38461;
var G__38464 = cljs.core.count(c__4299__auto___38461);
var G__38465 = (0);
seq__38441_38445 = G__38462;
chunk__38442_38446 = G__38463;
count__38443_38447 = G__38464;
i__38444_38448 = G__38465;
continue;
}
} else
{var k_38466 = cljs.core.first(seq__38441_38460__$1);var obj_38467 = (js_index[k_38466]);var geom_38468 = (obj_38467["geojson"]);var feature_38469 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$806,"Feature",cljs.core.constant$keyword$807,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$808,(obj_38467["id"]),cljs.core.constant$keyword$809,(obj_38467["id"]),cljs.core.constant$keyword$810,(obj_38467["compact_name"])], null)], null));var __38470__$1 = (feature_38469["geometry"] = geom_38468);var __38471__$2 = ((feature_38469["properties"])["index_object"] = obj_38467);features.push(feature_38469);
{
var G__38472 = cljs.core.next(seq__38441_38460__$1);
var G__38473 = null;
var G__38474 = (0);
var G__38475 = (0);
seq__38441_38445 = G__38472;
chunk__38442_38446 = G__38473;
count__38443_38447 = G__38474;
i__38444_38448 = G__38475;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$802], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$803], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_38518){var state_val_38519 = (state_38518[(1)]);if((state_val_38519 === (5)))
{var inst_38516 = (state_38518[(2)]);var state_38518__$1 = state_38518;return cljs.core.async.impl.ioc_helpers.return_chan(state_38518__$1,inst_38516);
} else
{if((state_val_38519 === (4)))
{var state_38518__$1 = state_38518;var statearr_38520_38532 = state_38518__$1;(statearr_38520_38532[(2)] = null);
(statearr_38520_38532[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38519 === (3)))
{var inst_38506 = (state_38518[(7)]);var inst_38513 = clustermap.boundarylines.rtree_index(rtree,inst_38506);var state_38518__$1 = state_38518;var statearr_38521_38533 = state_38518__$1;(statearr_38521_38533[(2)] = inst_38513);
(statearr_38521_38533[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38519 === (2)))
{var inst_38506 = (state_38518[(7)]);var inst_38506__$1 = (state_38518[(2)]);var inst_38507 = (function (){var bl_coll_index = inst_38506__$1;return ((function (bl_coll_index,inst_38506,inst_38506__$1,state_val_38519,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_38506,inst_38506__$1,state_val_38519,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_38508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_38507);var inst_38509 = cljs.core.deref(app_state);var inst_38510 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_38509,index_path);var inst_38511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38510,inst_38506__$1);var state_38518__$1 = (function (){var statearr_38522 = state_38518;(statearr_38522[(7)] = inst_38506__$1);
(statearr_38522[(8)] = inst_38508);
return statearr_38522;
})();if(inst_38511)
{var statearr_38523_38534 = state_38518__$1;(statearr_38523_38534[(1)] = (3));
} else
{var statearr_38524_38535 = state_38518__$1;(statearr_38524_38535[(1)] = (4));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38519 === (1)))
{var inst_38504 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$789,true], 0));var state_38518__$1 = state_38518;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38518__$1,(2),inst_38504);
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
var state_machine__5679__auto____0 = (function (){var statearr_38528 = [null,null,null,null,null,null,null,null,null];(statearr_38528[(0)] = state_machine__5679__auto__);
(statearr_38528[(1)] = (1));
return statearr_38528;
});
var state_machine__5679__auto____1 = (function (state_38518){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38518);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38529){if((e38529 instanceof Object))
{var ex__5682__auto__ = e38529;var statearr_38530_38536 = state_38518;(statearr_38530_38536[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38518);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e38529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__38537 = state_38518;
state_38518 = G__38537;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38518){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_38531 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_38531;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$802], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$805], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$811,x,cljs.core.constant$keyword$812,y,cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$814,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$808,hit.properties.id,cljs.core.constant$keyword$810,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$806,"Point",cljs.core.constant$keyword$815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
