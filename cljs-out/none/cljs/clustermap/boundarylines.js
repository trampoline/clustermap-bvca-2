// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__50750){var vec__50751 = p__50750;var z = cljs.core.nth.call(null,vec__50751,(0),null);var t = cljs.core.nth.call(null,vec__50751,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
*/
clustermap.boundarylines.fetch_boundarylines = (function fetch_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundaryline_ids,tolerance){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (state_50962){var state_val_50963 = (state_50962[(1)]);if((state_val_50963 === (7)))
{var inst_50958 = (state_50962[(2)]);var state_50962__$1 = state_50962;var statearr_50964_51014 = state_50962__$1;(statearr_50964_51014[(2)] = inst_50958);
(statearr_50964_51014[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (20)))
{var inst_50931 = (state_50962[(7)]);var inst_50936 = [inst_50931,tolerance];var inst_50937 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50936,null));var inst_50938 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_50937);var state_50962__$1 = state_50962;var statearr_50965_51015 = state_50962__$1;(statearr_50965_51015[(2)] = inst_50938);
(statearr_50965_51015[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (1)))
{var state_50962__$1 = state_50962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50962__$1,(2),comm);
} else
{if((state_val_50963 === (24)))
{var state_50962__$1 = state_50962;var statearr_50966_51016 = state_50962__$1;(statearr_50966_51016[(2)] = null);
(statearr_50966_51016[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (4)))
{var inst_50960 = (state_50962[(2)]);var state_50962__$1 = (function (){var statearr_50967 = state_50962;(statearr_50967[(8)] = inst_50960);
return statearr_50967;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50962__$1,true);
} else
{if((state_val_50963 === (15)))
{var state_50962__$1 = state_50962;var statearr_50971_51017 = state_50962__$1;(statearr_50971_51017[(2)] = null);
(statearr_50971_51017[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (21)))
{var state_50962__$1 = state_50962;var statearr_50972_51018 = state_50962__$1;(statearr_50972_51018[(2)] = null);
(statearr_50972_51018[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (13)))
{var inst_50891 = (state_50962[(9)]);var inst_50890 = (state_50962[(10)]);var inst_50893 = (state_50962[(11)]);var inst_50892 = (state_50962[(12)]);var inst_50917 = (state_50962[(2)]);var inst_50918 = (inst_50893 + (1));var tmp50968 = inst_50891;var tmp50969 = inst_50890;var tmp50970 = inst_50892;var inst_50890__$1 = tmp50969;var inst_50891__$1 = tmp50968;var inst_50892__$1 = tmp50970;var inst_50893__$1 = inst_50918;var state_50962__$1 = (function (){var statearr_50973 = state_50962;(statearr_50973[(9)] = inst_50891__$1);
(statearr_50973[(10)] = inst_50890__$1);
(statearr_50973[(11)] = inst_50893__$1);
(statearr_50973[(13)] = inst_50917);
(statearr_50973[(12)] = inst_50892__$1);
return statearr_50973;
})();var statearr_50974_51019 = state_50962__$1;(statearr_50974_51019[(2)] = null);
(statearr_50974_51019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (22)))
{var inst_50941 = (state_50962[(14)]);var inst_50921 = (state_50962[(15)]);var inst_50891 = (state_50962[(9)]);var inst_50893 = (state_50962[(11)]);var inst_50934 = (state_50962[(16)]);var inst_50892 = (state_50962[(12)]);var inst_50930 = (state_50962[(17)]);var inst_50931 = (state_50962[(7)]);var inst_50884 = (state_50962[(18)]);var inst_50941__$1 = (state_50962[(2)]);var inst_50942 = (function (){var i__50888 = inst_50893;var temp__4126__auto__ = inst_50921;var seq__50885 = inst_50921;var bls = inst_50884;var boundaryline_id = inst_50931;var general_cache_path = inst_50934;var bl = inst_50930;var collection_cache_path = inst_50941__$1;var count__50887 = inst_50892;var chunk__50886 = inst_50891;return ((function (i__50888,temp__4126__auto__,seq__50885,bls,boundaryline_id,general_cache_path,bl,collection_cache_path,count__50887,chunk__50886,inst_50941,inst_50921,inst_50891,inst_50893,inst_50934,inst_50892,inst_50930,inst_50931,inst_50884,inst_50941__$1,state_val_50963,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(i__50888,temp__4126__auto__,seq__50885,bls,boundaryline_id,general_cache_path,bl,collection_cache_path,count__50887,chunk__50886,inst_50941,inst_50921,inst_50891,inst_50893,inst_50934,inst_50892,inst_50930,inst_50931,inst_50884,inst_50941__$1,state_val_50963,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_50943 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_50934,inst_50942);var state_50962__$1 = (function (){var statearr_50975 = state_50962;(statearr_50975[(14)] = inst_50941__$1);
(statearr_50975[(19)] = inst_50943);
return statearr_50975;
})();if(cljs.core.truth_(inst_50941__$1))
{var statearr_50976_51020 = state_50962__$1;(statearr_50976_51020[(1)] = (23));
} else
{var statearr_50977_51021 = state_50962__$1;(statearr_50977_51021[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (6)))
{var inst_50921 = (state_50962[(15)]);var inst_50890 = (state_50962[(10)]);var inst_50921__$1 = cljs.core.seq.call(null,inst_50890);var state_50962__$1 = (function (){var statearr_50978 = state_50962;(statearr_50978[(15)] = inst_50921__$1);
return statearr_50978;
})();if(inst_50921__$1)
{var statearr_50979_51022 = state_50962__$1;(statearr_50979_51022[(1)] = (14));
} else
{var statearr_50980_51023 = state_50962__$1;(statearr_50980_51023[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (25)))
{var inst_50921 = (state_50962[(15)]);var inst_50949 = (state_50962[(2)]);var inst_50950 = cljs.core.next.call(null,inst_50921);var inst_50890 = inst_50950;var inst_50891 = null;var inst_50892 = (0);var inst_50893 = (0);var state_50962__$1 = (function (){var statearr_50981 = state_50962;(statearr_50981[(9)] = inst_50891);
(statearr_50981[(20)] = inst_50949);
(statearr_50981[(10)] = inst_50890);
(statearr_50981[(11)] = inst_50893);
(statearr_50981[(12)] = inst_50892);
return statearr_50981;
})();var statearr_50982_51024 = state_50962__$1;(statearr_50982_51024[(2)] = null);
(statearr_50982_51024[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (17)))
{var inst_50921 = (state_50962[(15)]);var inst_50925 = cljs.core.chunk_first.call(null,inst_50921);var inst_50926 = cljs.core.chunk_rest.call(null,inst_50921);var inst_50927 = cljs.core.count.call(null,inst_50925);var inst_50890 = inst_50926;var inst_50891 = inst_50925;var inst_50892 = inst_50927;var inst_50893 = (0);var state_50962__$1 = (function (){var statearr_50983 = state_50962;(statearr_50983[(9)] = inst_50891);
(statearr_50983[(10)] = inst_50890);
(statearr_50983[(11)] = inst_50893);
(statearr_50983[(12)] = inst_50892);
return statearr_50983;
})();var statearr_50984_51025 = state_50962__$1;(statearr_50984_51025[(2)] = null);
(statearr_50984_51025[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (3)))
{var inst_50893 = (state_50962[(11)]);var inst_50892 = (state_50962[(12)]);var inst_50895 = (inst_50893 < inst_50892);var inst_50896 = inst_50895;var state_50962__$1 = state_50962;if(cljs.core.truth_(inst_50896))
{var statearr_50985_51026 = state_50962__$1;(statearr_50985_51026[(1)] = (5));
} else
{var statearr_50986_51027 = state_50962__$1;(statearr_50986_51027[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (12)))
{var state_50962__$1 = state_50962;var statearr_50987_51028 = state_50962__$1;(statearr_50987_51028[(2)] = null);
(statearr_50987_51028[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (2)))
{var inst_50884 = (state_50962[(18)]);var inst_50884__$1 = (state_50962[(2)]);var inst_50889 = cljs.core.seq.call(null,inst_50884__$1);var inst_50890 = inst_50889;var inst_50891 = null;var inst_50892 = (0);var inst_50893 = (0);var state_50962__$1 = (function (){var statearr_50988 = state_50962;(statearr_50988[(9)] = inst_50891);
(statearr_50988[(10)] = inst_50890);
(statearr_50988[(11)] = inst_50893);
(statearr_50988[(12)] = inst_50892);
(statearr_50988[(18)] = inst_50884__$1);
return statearr_50988;
})();var statearr_50989_51029 = state_50962__$1;(statearr_50989_51029[(2)] = null);
(statearr_50989_51029[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (23)))
{var inst_50941 = (state_50962[(14)]);var inst_50921 = (state_50962[(15)]);var inst_50891 = (state_50962[(9)]);var inst_50893 = (state_50962[(11)]);var inst_50934 = (state_50962[(16)]);var inst_50892 = (state_50962[(12)]);var inst_50930 = (state_50962[(17)]);var inst_50931 = (state_50962[(7)]);var inst_50884 = (state_50962[(18)]);var inst_50945 = (function (){var i__50888 = inst_50893;var temp__4126__auto__ = inst_50921;var seq__50885 = inst_50921;var bls = inst_50884;var boundaryline_id = inst_50931;var general_cache_path = inst_50934;var bl = inst_50930;var collection_cache_path = inst_50941;var count__50887 = inst_50892;var chunk__50886 = inst_50891;return ((function (i__50888,temp__4126__auto__,seq__50885,bls,boundaryline_id,general_cache_path,bl,collection_cache_path,count__50887,chunk__50886,inst_50941,inst_50921,inst_50891,inst_50893,inst_50934,inst_50892,inst_50930,inst_50931,inst_50884,state_val_50963,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(i__50888,temp__4126__auto__,seq__50885,bls,boundaryline_id,general_cache_path,bl,collection_cache_path,count__50887,chunk__50886,inst_50941,inst_50921,inst_50891,inst_50893,inst_50934,inst_50892,inst_50930,inst_50931,inst_50884,state_val_50963,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_50946 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_50941,inst_50945);var state_50962__$1 = state_50962;var statearr_50990_51030 = state_50962__$1;(statearr_50990_51030[(2)] = inst_50946);
(statearr_50990_51030[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (19)))
{var inst_50953 = (state_50962[(2)]);var state_50962__$1 = state_50962;var statearr_50991_51031 = state_50962__$1;(statearr_50991_51031[(2)] = inst_50953);
(statearr_50991_51031[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (11)))
{var inst_50898 = (state_50962[(21)]);var inst_50899 = (state_50962[(22)]);var inst_50902 = (state_50962[(23)]);var inst_50891 = (state_50962[(9)]);var inst_50890 = (state_50962[(10)]);var inst_50893 = (state_50962[(11)]);var inst_50892 = (state_50962[(12)]);var inst_50884 = (state_50962[(18)]);var inst_50909 = (state_50962[(24)]);var inst_50913 = (function (){var collection_cache_path = inst_50909;var general_cache_path = inst_50902;var boundaryline_id = inst_50899;var bl = inst_50898;var seq__50885 = inst_50890;var chunk__50886 = inst_50891;var count__50887 = inst_50892;var i__50888 = inst_50893;var bls = inst_50884;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__50885,chunk__50886,count__50887,i__50888,bls,inst_50898,inst_50899,inst_50902,inst_50891,inst_50890,inst_50893,inst_50892,inst_50884,inst_50909,state_val_50963,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__50885,chunk__50886,count__50887,i__50888,bls,inst_50898,inst_50899,inst_50902,inst_50891,inst_50890,inst_50893,inst_50892,inst_50884,inst_50909,state_val_50963,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_50914 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_50909,inst_50913);var state_50962__$1 = state_50962;var statearr_50992_51032 = state_50962__$1;(statearr_50992_51032[(2)] = inst_50914);
(statearr_50992_51032[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (9)))
{var state_50962__$1 = state_50962;var statearr_50993_51033 = state_50962__$1;(statearr_50993_51033[(2)] = null);
(statearr_50993_51033[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (5)))
{var inst_50898 = (state_50962[(21)]);var inst_50899 = (state_50962[(22)]);var inst_50891 = (state_50962[(9)]);var inst_50893 = (state_50962[(11)]);var inst_50898__$1 = cljs.core._nth.call(null,inst_50891,inst_50893);var inst_50899__$1 = (inst_50898__$1["id"]);var inst_50900 = [inst_50899__$1,tolerance];var inst_50901 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50900,null));var inst_50902 = cljs.core.concat.call(null,boundarylines_path__$1,inst_50901);var state_50962__$1 = (function (){var statearr_50994 = state_50962;(statearr_50994[(21)] = inst_50898__$1);
(statearr_50994[(22)] = inst_50899__$1);
(statearr_50994[(23)] = inst_50902);
return statearr_50994;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_50995_51034 = state_50962__$1;(statearr_50995_51034[(1)] = (8));
} else
{var statearr_50996_51035 = state_50962__$1;(statearr_50996_51035[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (14)))
{var inst_50921 = (state_50962[(15)]);var inst_50923 = cljs.core.chunked_seq_QMARK_.call(null,inst_50921);var state_50962__$1 = state_50962;if(inst_50923)
{var statearr_50997_51036 = state_50962__$1;(statearr_50997_51036[(1)] = (17));
} else
{var statearr_50998_51037 = state_50962__$1;(statearr_50998_51037[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (16)))
{var inst_50956 = (state_50962[(2)]);var state_50962__$1 = state_50962;var statearr_50999_51038 = state_50962__$1;(statearr_50999_51038[(2)] = inst_50956);
(statearr_50999_51038[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (10)))
{var inst_50898 = (state_50962[(21)]);var inst_50899 = (state_50962[(22)]);var inst_50902 = (state_50962[(23)]);var inst_50891 = (state_50962[(9)]);var inst_50890 = (state_50962[(10)]);var inst_50893 = (state_50962[(11)]);var inst_50892 = (state_50962[(12)]);var inst_50884 = (state_50962[(18)]);var inst_50909 = (state_50962[(24)]);var inst_50909__$1 = (state_50962[(2)]);var inst_50910 = (function (){var collection_cache_path = inst_50909__$1;var general_cache_path = inst_50902;var boundaryline_id = inst_50899;var bl = inst_50898;var seq__50885 = inst_50890;var chunk__50886 = inst_50891;var count__50887 = inst_50892;var i__50888 = inst_50893;var bls = inst_50884;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__50885,chunk__50886,count__50887,i__50888,bls,inst_50898,inst_50899,inst_50902,inst_50891,inst_50890,inst_50893,inst_50892,inst_50884,inst_50909,inst_50909__$1,state_val_50963,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__50885,chunk__50886,count__50887,i__50888,bls,inst_50898,inst_50899,inst_50902,inst_50891,inst_50890,inst_50893,inst_50892,inst_50884,inst_50909,inst_50909__$1,state_val_50963,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_50911 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_50902,inst_50910);var state_50962__$1 = (function (){var statearr_51000 = state_50962;(statearr_51000[(25)] = inst_50911);
(statearr_51000[(24)] = inst_50909__$1);
return statearr_51000;
})();if(cljs.core.truth_(inst_50909__$1))
{var statearr_51001_51039 = state_50962__$1;(statearr_51001_51039[(1)] = (11));
} else
{var statearr_51002_51040 = state_50962__$1;(statearr_51002_51040[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (18)))
{var inst_50921 = (state_50962[(15)]);var inst_50930 = (state_50962[(17)]);var inst_50931 = (state_50962[(7)]);var inst_50930__$1 = cljs.core.first.call(null,inst_50921);var inst_50931__$1 = (inst_50930__$1["id"]);var inst_50932 = [inst_50931__$1,tolerance];var inst_50933 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50932,null));var inst_50934 = cljs.core.concat.call(null,boundarylines_path__$1,inst_50933);var state_50962__$1 = (function (){var statearr_51003 = state_50962;(statearr_51003[(16)] = inst_50934);
(statearr_51003[(17)] = inst_50930__$1);
(statearr_51003[(7)] = inst_50931__$1);
return statearr_51003;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_51004_51041 = state_50962__$1;(statearr_51004_51041[(1)] = (20));
} else
{var statearr_51005_51042 = state_50962__$1;(statearr_51005_51042[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50963 === (8)))
{var inst_50899 = (state_50962[(22)]);var inst_50904 = [inst_50899,tolerance];var inst_50905 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50904,null));var inst_50906 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_50905);var state_50962__$1 = state_50962;var statearr_51006_51043 = state_50962__$1;(statearr_51006_51043[(2)] = inst_50906);
(statearr_51006_51043[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var state_machine__5679__auto____0 = (function (){var statearr_51010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51010[(0)] = state_machine__5679__auto__);
(statearr_51010[(1)] = (1));
return statearr_51010;
});
var state_machine__5679__auto____1 = (function (state_50962){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50962);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51011){if((e51011 instanceof Object))
{var ex__5682__auto__ = e51011;var statearr_51012_51044 = state_50962;(statearr_51012_51044[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51045 = state_50962;
state_50962 = G__51045;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50962){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var state__5695__auto__ = (function (){var statearr_51013 = f__5694__auto__.call(null);(statearr_51013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
);
return c__5693__auto__;
});
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
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundarylines = (function() { 
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__51046){var map__51051 = p__51046;var map__51051__$1 = ((cljs.core.seq_QMARK_.call(null,map__51051))?cljs.core.apply.call(null,cljs.core.hash_map,map__51051):map__51051);var min_zoom = cljs.core.get.call(null,map__51051__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51051,map__51051__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.fetch_from_index.call(null,collection_index,blid)], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51051,map__51051__$1,min_zoom))
,boundaryline_ids));
} else
{var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51051,map__51051__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51051,map__51051__$1,min_zoom))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51051,map__51051__$1,min_zoom){
return (function (p__51052){var vec__51053 = p__51052;var blid = cljs.core.nth.call(null,vec__51053,(0),null);var vec__51054 = cljs.core.nth.call(null,vec__51053,(1),null);var tol = cljs.core.nth.call(null,vec__51054,(0),null);var bl = cljs.core.nth.call(null,vec__51054,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51051,map__51051__$1,min_zoom))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,boundaryline_ids,i_tol):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
}
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,var_args){
var p__51046 = null;if (arguments.length > 5) {
  p__51046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__51046);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__51055){
var app_state = cljs.core.first(arglist__51055);
arglist__51055 = cljs.core.next(arglist__51055);
var boundarylines_path = cljs.core.first(arglist__51055);
arglist__51055 = cljs.core.next(arglist__51055);
var collection_id = cljs.core.first(arglist__51055);
arglist__51055 = cljs.core.next(arglist__51055);
var boundaryline_ids = cljs.core.first(arglist__51055);
arglist__51055 = cljs.core.next(arglist__51055);
var zoom = cljs.core.first(arglist__51055);
var p__51046 = cljs.core.rest(arglist__51055);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__51046);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__51060_51064 = cljs.core.seq.call(null,keys);var chunk__51061_51065 = null;var count__51062_51066 = (0);var i__51063_51067 = (0);while(true){
if((i__51063_51067 < count__51062_51066))
{var k_51068 = cljs.core._nth.call(null,chunk__51061_51065,i__51063_51067);var obj_51069 = (js_index[k_51068]);var geom_51070 = (obj_51069["geojson"]);var feature_51071 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_51069["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_51069["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_51069["compact_name"])], null)], null));var __51072__$1 = (feature_51071["geometry"] = geom_51070);var __51073__$2 = ((feature_51071["properties"])["index_object"] = obj_51069);features.push(feature_51071);
{
var G__51074 = seq__51060_51064;
var G__51075 = chunk__51061_51065;
var G__51076 = count__51062_51066;
var G__51077 = (i__51063_51067 + (1));
seq__51060_51064 = G__51074;
chunk__51061_51065 = G__51075;
count__51062_51066 = G__51076;
i__51063_51067 = G__51077;
continue;
}
} else
{var temp__4126__auto___51078 = cljs.core.seq.call(null,seq__51060_51064);if(temp__4126__auto___51078)
{var seq__51060_51079__$1 = temp__4126__auto___51078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51060_51079__$1))
{var c__4299__auto___51080 = cljs.core.chunk_first.call(null,seq__51060_51079__$1);{
var G__51081 = cljs.core.chunk_rest.call(null,seq__51060_51079__$1);
var G__51082 = c__4299__auto___51080;
var G__51083 = cljs.core.count.call(null,c__4299__auto___51080);
var G__51084 = (0);
seq__51060_51064 = G__51081;
chunk__51061_51065 = G__51082;
count__51062_51066 = G__51083;
i__51063_51067 = G__51084;
continue;
}
} else
{var k_51085 = cljs.core.first.call(null,seq__51060_51079__$1);var obj_51086 = (js_index[k_51085]);var geom_51087 = (obj_51086["geojson"]);var feature_51088 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_51086["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_51086["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_51086["compact_name"])], null)], null));var __51089__$1 = (feature_51088["geometry"] = geom_51087);var __51090__$2 = ((feature_51088["properties"])["index_object"] = obj_51086);features.push(feature_51088);
{
var G__51091 = cljs.core.next.call(null,seq__51060_51079__$1);
var G__51092 = null;
var G__51093 = (0);
var G__51094 = (0);
seq__51060_51064 = G__51091;
chunk__51061_51065 = G__51092;
count__51062_51066 = G__51093;
i__51063_51067 = G__51094;
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
return (function (state_51137){var state_val_51138 = (state_51137[(1)]);if((state_val_51138 === (5)))
{var inst_51135 = (state_51137[(2)]);var state_51137__$1 = state_51137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51137__$1,inst_51135);
} else
{if((state_val_51138 === (4)))
{var state_51137__$1 = state_51137;var statearr_51139_51151 = state_51137__$1;(statearr_51139_51151[(2)] = null);
(statearr_51139_51151[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51138 === (3)))
{var inst_51125 = (state_51137[(7)]);var inst_51132 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_51125);var state_51137__$1 = state_51137;var statearr_51140_51152 = state_51137__$1;(statearr_51140_51152[(2)] = inst_51132);
(statearr_51140_51152[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51138 === (2)))
{var inst_51125 = (state_51137[(7)]);var inst_51125__$1 = (state_51137[(2)]);var inst_51126 = (function (){var bl_coll_index = inst_51125__$1;return ((function (bl_coll_index,inst_51125,inst_51125__$1,state_val_51138,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_51125,inst_51125__$1,state_val_51138,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_51127 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_51126);var inst_51128 = cljs.core.deref.call(null,app_state);var inst_51129 = cljs.core.get_in.call(null,inst_51128,index_path);var inst_51130 = cljs.core._EQ_.call(null,inst_51129,inst_51125__$1);var state_51137__$1 = (function (){var statearr_51141 = state_51137;(statearr_51141[(7)] = inst_51125__$1);
(statearr_51141[(8)] = inst_51127);
return statearr_51141;
})();if(inst_51130)
{var statearr_51142_51153 = state_51137__$1;(statearr_51142_51153[(1)] = (3));
} else
{var statearr_51143_51154 = state_51137__$1;(statearr_51143_51154[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51138 === (1)))
{var inst_51123 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_51137__$1 = state_51137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51137__$1,(2),inst_51123);
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
var state_machine__5679__auto____0 = (function (){var statearr_51147 = [null,null,null,null,null,null,null,null,null];(statearr_51147[(0)] = state_machine__5679__auto__);
(statearr_51147[(1)] = (1));
return statearr_51147;
});
var state_machine__5679__auto____1 = (function (state_51137){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51137);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51148){if((e51148 instanceof Object))
{var ex__5682__auto__ = e51148;var statearr_51149_51155 = state_51137;(statearr_51149_51155[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51156 = state_51137;
state_51137 = G__51156;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51137){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_51150 = f__5694__auto__.call(null);(statearr_51150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51150;
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

//# sourceMappingURL=boundarylines.js.map