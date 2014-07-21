// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__50732){var vec__50733 = p__50732;var z = cljs.core.nth.call(null,vec__50733,(0),null);var t = cljs.core.nth.call(null,vec__50733,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
return (function (state_50944){var state_val_50945 = (state_50944[(1)]);if((state_val_50945 === (7)))
{var inst_50940 = (state_50944[(2)]);var state_50944__$1 = state_50944;var statearr_50946_50996 = state_50944__$1;(statearr_50946_50996[(2)] = inst_50940);
(statearr_50946_50996[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (20)))
{var inst_50913 = (state_50944[(7)]);var inst_50918 = [inst_50913,tolerance];var inst_50919 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50918,null));var inst_50920 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_50919);var state_50944__$1 = state_50944;var statearr_50947_50997 = state_50944__$1;(statearr_50947_50997[(2)] = inst_50920);
(statearr_50947_50997[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (1)))
{var state_50944__$1 = state_50944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50944__$1,(2),comm);
} else
{if((state_val_50945 === (24)))
{var state_50944__$1 = state_50944;var statearr_50948_50998 = state_50944__$1;(statearr_50948_50998[(2)] = null);
(statearr_50948_50998[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (4)))
{var inst_50942 = (state_50944[(2)]);var state_50944__$1 = (function (){var statearr_50949 = state_50944;(statearr_50949[(8)] = inst_50942);
return statearr_50949;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50944__$1,true);
} else
{if((state_val_50945 === (15)))
{var state_50944__$1 = state_50944;var statearr_50953_50999 = state_50944__$1;(statearr_50953_50999[(2)] = null);
(statearr_50953_50999[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (21)))
{var state_50944__$1 = state_50944;var statearr_50954_51000 = state_50944__$1;(statearr_50954_51000[(2)] = null);
(statearr_50954_51000[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (13)))
{var inst_50872 = (state_50944[(9)]);var inst_50875 = (state_50944[(10)]);var inst_50874 = (state_50944[(11)]);var inst_50873 = (state_50944[(12)]);var inst_50899 = (state_50944[(2)]);var inst_50900 = (inst_50875 + (1));var tmp50950 = inst_50872;var tmp50951 = inst_50874;var tmp50952 = inst_50873;var inst_50872__$1 = tmp50950;var inst_50873__$1 = tmp50952;var inst_50874__$1 = tmp50951;var inst_50875__$1 = inst_50900;var state_50944__$1 = (function (){var statearr_50955 = state_50944;(statearr_50955[(9)] = inst_50872__$1);
(statearr_50955[(13)] = inst_50899);
(statearr_50955[(10)] = inst_50875__$1);
(statearr_50955[(11)] = inst_50874__$1);
(statearr_50955[(12)] = inst_50873__$1);
return statearr_50955;
})();var statearr_50956_51001 = state_50944__$1;(statearr_50956_51001[(2)] = null);
(statearr_50956_51001[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (22)))
{var inst_50913 = (state_50944[(7)]);var inst_50875 = (state_50944[(10)]);var inst_50903 = (state_50944[(14)]);var inst_50912 = (state_50944[(15)]);var inst_50916 = (state_50944[(16)]);var inst_50874 = (state_50944[(11)]);var inst_50873 = (state_50944[(12)]);var inst_50866 = (state_50944[(17)]);var inst_50923 = (state_50944[(18)]);var inst_50923__$1 = (state_50944[(2)]);var inst_50924 = (function (){var temp__4126__auto__ = inst_50903;var bls = inst_50866;var chunk__50868 = inst_50873;var boundaryline_id = inst_50913;var general_cache_path = inst_50916;var seq__50867 = inst_50903;var count__50869 = inst_50874;var bl = inst_50912;var i__50870 = inst_50875;var collection_cache_path = inst_50923__$1;return ((function (temp__4126__auto__,bls,chunk__50868,boundaryline_id,general_cache_path,seq__50867,count__50869,bl,i__50870,collection_cache_path,inst_50913,inst_50875,inst_50903,inst_50912,inst_50916,inst_50874,inst_50873,inst_50866,inst_50923,inst_50923__$1,state_val_50945,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(temp__4126__auto__,bls,chunk__50868,boundaryline_id,general_cache_path,seq__50867,count__50869,bl,i__50870,collection_cache_path,inst_50913,inst_50875,inst_50903,inst_50912,inst_50916,inst_50874,inst_50873,inst_50866,inst_50923,inst_50923__$1,state_val_50945,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_50925 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_50916,inst_50924);var state_50944__$1 = (function (){var statearr_50957 = state_50944;(statearr_50957[(19)] = inst_50925);
(statearr_50957[(18)] = inst_50923__$1);
return statearr_50957;
})();if(cljs.core.truth_(inst_50923__$1))
{var statearr_50958_51002 = state_50944__$1;(statearr_50958_51002[(1)] = (23));
} else
{var statearr_50959_51003 = state_50944__$1;(statearr_50959_51003[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (6)))
{var inst_50872 = (state_50944[(9)]);var inst_50903 = (state_50944[(14)]);var inst_50903__$1 = cljs.core.seq.call(null,inst_50872);var state_50944__$1 = (function (){var statearr_50960 = state_50944;(statearr_50960[(14)] = inst_50903__$1);
return statearr_50960;
})();if(inst_50903__$1)
{var statearr_50961_51004 = state_50944__$1;(statearr_50961_51004[(1)] = (14));
} else
{var statearr_50962_51005 = state_50944__$1;(statearr_50962_51005[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (25)))
{var inst_50903 = (state_50944[(14)]);var inst_50931 = (state_50944[(2)]);var inst_50932 = cljs.core.next.call(null,inst_50903);var inst_50872 = inst_50932;var inst_50873 = null;var inst_50874 = (0);var inst_50875 = (0);var state_50944__$1 = (function (){var statearr_50963 = state_50944;(statearr_50963[(9)] = inst_50872);
(statearr_50963[(10)] = inst_50875);
(statearr_50963[(11)] = inst_50874);
(statearr_50963[(12)] = inst_50873);
(statearr_50963[(20)] = inst_50931);
return statearr_50963;
})();var statearr_50964_51006 = state_50944__$1;(statearr_50964_51006[(2)] = null);
(statearr_50964_51006[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (17)))
{var inst_50903 = (state_50944[(14)]);var inst_50907 = cljs.core.chunk_first.call(null,inst_50903);var inst_50908 = cljs.core.chunk_rest.call(null,inst_50903);var inst_50909 = cljs.core.count.call(null,inst_50907);var inst_50872 = inst_50908;var inst_50873 = inst_50907;var inst_50874 = inst_50909;var inst_50875 = (0);var state_50944__$1 = (function (){var statearr_50965 = state_50944;(statearr_50965[(9)] = inst_50872);
(statearr_50965[(10)] = inst_50875);
(statearr_50965[(11)] = inst_50874);
(statearr_50965[(12)] = inst_50873);
return statearr_50965;
})();var statearr_50966_51007 = state_50944__$1;(statearr_50966_51007[(2)] = null);
(statearr_50966_51007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (3)))
{var inst_50875 = (state_50944[(10)]);var inst_50874 = (state_50944[(11)]);var inst_50877 = (inst_50875 < inst_50874);var inst_50878 = inst_50877;var state_50944__$1 = state_50944;if(cljs.core.truth_(inst_50878))
{var statearr_50967_51008 = state_50944__$1;(statearr_50967_51008[(1)] = (5));
} else
{var statearr_50968_51009 = state_50944__$1;(statearr_50968_51009[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (12)))
{var state_50944__$1 = state_50944;var statearr_50969_51010 = state_50944__$1;(statearr_50969_51010[(2)] = null);
(statearr_50969_51010[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (2)))
{var inst_50866 = (state_50944[(17)]);var inst_50866__$1 = (state_50944[(2)]);var inst_50871 = cljs.core.seq.call(null,inst_50866__$1);var inst_50872 = inst_50871;var inst_50873 = null;var inst_50874 = (0);var inst_50875 = (0);var state_50944__$1 = (function (){var statearr_50970 = state_50944;(statearr_50970[(9)] = inst_50872);
(statearr_50970[(10)] = inst_50875);
(statearr_50970[(11)] = inst_50874);
(statearr_50970[(12)] = inst_50873);
(statearr_50970[(17)] = inst_50866__$1);
return statearr_50970;
})();var statearr_50971_51011 = state_50944__$1;(statearr_50971_51011[(2)] = null);
(statearr_50971_51011[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (23)))
{var inst_50913 = (state_50944[(7)]);var inst_50875 = (state_50944[(10)]);var inst_50903 = (state_50944[(14)]);var inst_50912 = (state_50944[(15)]);var inst_50916 = (state_50944[(16)]);var inst_50874 = (state_50944[(11)]);var inst_50873 = (state_50944[(12)]);var inst_50866 = (state_50944[(17)]);var inst_50923 = (state_50944[(18)]);var inst_50927 = (function (){var temp__4126__auto__ = inst_50903;var bls = inst_50866;var chunk__50868 = inst_50873;var boundaryline_id = inst_50913;var general_cache_path = inst_50916;var seq__50867 = inst_50903;var count__50869 = inst_50874;var bl = inst_50912;var i__50870 = inst_50875;var collection_cache_path = inst_50923;return ((function (temp__4126__auto__,bls,chunk__50868,boundaryline_id,general_cache_path,seq__50867,count__50869,bl,i__50870,collection_cache_path,inst_50913,inst_50875,inst_50903,inst_50912,inst_50916,inst_50874,inst_50873,inst_50866,inst_50923,state_val_50945,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(temp__4126__auto__,bls,chunk__50868,boundaryline_id,general_cache_path,seq__50867,count__50869,bl,i__50870,collection_cache_path,inst_50913,inst_50875,inst_50903,inst_50912,inst_50916,inst_50874,inst_50873,inst_50866,inst_50923,state_val_50945,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_50928 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_50923,inst_50927);var state_50944__$1 = state_50944;var statearr_50972_51012 = state_50944__$1;(statearr_50972_51012[(2)] = inst_50928);
(statearr_50972_51012[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (19)))
{var inst_50935 = (state_50944[(2)]);var state_50944__$1 = state_50944;var statearr_50973_51013 = state_50944__$1;(statearr_50973_51013[(2)] = inst_50935);
(statearr_50973_51013[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (11)))
{var inst_50872 = (state_50944[(9)]);var inst_50880 = (state_50944[(21)]);var inst_50875 = (state_50944[(10)]);var inst_50891 = (state_50944[(22)]);var inst_50881 = (state_50944[(23)]);var inst_50874 = (state_50944[(11)]);var inst_50873 = (state_50944[(12)]);var inst_50866 = (state_50944[(17)]);var inst_50884 = (state_50944[(24)]);var inst_50895 = (function (){var collection_cache_path = inst_50891;var general_cache_path = inst_50884;var boundaryline_id = inst_50881;var bl = inst_50880;var seq__50867 = inst_50872;var chunk__50868 = inst_50873;var count__50869 = inst_50874;var i__50870 = inst_50875;var bls = inst_50866;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__50867,chunk__50868,count__50869,i__50870,bls,inst_50872,inst_50880,inst_50875,inst_50891,inst_50881,inst_50874,inst_50873,inst_50866,inst_50884,state_val_50945,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__50867,chunk__50868,count__50869,i__50870,bls,inst_50872,inst_50880,inst_50875,inst_50891,inst_50881,inst_50874,inst_50873,inst_50866,inst_50884,state_val_50945,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_50896 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_50891,inst_50895);var state_50944__$1 = state_50944;var statearr_50974_51014 = state_50944__$1;(statearr_50974_51014[(2)] = inst_50896);
(statearr_50974_51014[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (9)))
{var state_50944__$1 = state_50944;var statearr_50975_51015 = state_50944__$1;(statearr_50975_51015[(2)] = null);
(statearr_50975_51015[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (5)))
{var inst_50880 = (state_50944[(21)]);var inst_50875 = (state_50944[(10)]);var inst_50881 = (state_50944[(23)]);var inst_50873 = (state_50944[(12)]);var inst_50880__$1 = cljs.core._nth.call(null,inst_50873,inst_50875);var inst_50881__$1 = (inst_50880__$1["id"]);var inst_50882 = [inst_50881__$1,tolerance];var inst_50883 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50882,null));var inst_50884 = cljs.core.concat.call(null,boundarylines_path__$1,inst_50883);var state_50944__$1 = (function (){var statearr_50976 = state_50944;(statearr_50976[(21)] = inst_50880__$1);
(statearr_50976[(23)] = inst_50881__$1);
(statearr_50976[(24)] = inst_50884);
return statearr_50976;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_50977_51016 = state_50944__$1;(statearr_50977_51016[(1)] = (8));
} else
{var statearr_50978_51017 = state_50944__$1;(statearr_50978_51017[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (14)))
{var inst_50903 = (state_50944[(14)]);var inst_50905 = cljs.core.chunked_seq_QMARK_.call(null,inst_50903);var state_50944__$1 = state_50944;if(inst_50905)
{var statearr_50979_51018 = state_50944__$1;(statearr_50979_51018[(1)] = (17));
} else
{var statearr_50980_51019 = state_50944__$1;(statearr_50980_51019[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (16)))
{var inst_50938 = (state_50944[(2)]);var state_50944__$1 = state_50944;var statearr_50981_51020 = state_50944__$1;(statearr_50981_51020[(2)] = inst_50938);
(statearr_50981_51020[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (10)))
{var inst_50872 = (state_50944[(9)]);var inst_50880 = (state_50944[(21)]);var inst_50875 = (state_50944[(10)]);var inst_50891 = (state_50944[(22)]);var inst_50881 = (state_50944[(23)]);var inst_50874 = (state_50944[(11)]);var inst_50873 = (state_50944[(12)]);var inst_50866 = (state_50944[(17)]);var inst_50884 = (state_50944[(24)]);var inst_50891__$1 = (state_50944[(2)]);var inst_50892 = (function (){var collection_cache_path = inst_50891__$1;var general_cache_path = inst_50884;var boundaryline_id = inst_50881;var bl = inst_50880;var seq__50867 = inst_50872;var chunk__50868 = inst_50873;var count__50869 = inst_50874;var i__50870 = inst_50875;var bls = inst_50866;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__50867,chunk__50868,count__50869,i__50870,bls,inst_50872,inst_50880,inst_50875,inst_50891,inst_50881,inst_50874,inst_50873,inst_50866,inst_50884,inst_50891__$1,state_val_50945,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__50867,chunk__50868,count__50869,i__50870,bls,inst_50872,inst_50880,inst_50875,inst_50891,inst_50881,inst_50874,inst_50873,inst_50866,inst_50884,inst_50891__$1,state_val_50945,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_50893 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_50884,inst_50892);var state_50944__$1 = (function (){var statearr_50982 = state_50944;(statearr_50982[(22)] = inst_50891__$1);
(statearr_50982[(25)] = inst_50893);
return statearr_50982;
})();if(cljs.core.truth_(inst_50891__$1))
{var statearr_50983_51021 = state_50944__$1;(statearr_50983_51021[(1)] = (11));
} else
{var statearr_50984_51022 = state_50944__$1;(statearr_50984_51022[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (18)))
{var inst_50913 = (state_50944[(7)]);var inst_50903 = (state_50944[(14)]);var inst_50912 = (state_50944[(15)]);var inst_50912__$1 = cljs.core.first.call(null,inst_50903);var inst_50913__$1 = (inst_50912__$1["id"]);var inst_50914 = [inst_50913__$1,tolerance];var inst_50915 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50914,null));var inst_50916 = cljs.core.concat.call(null,boundarylines_path__$1,inst_50915);var state_50944__$1 = (function (){var statearr_50985 = state_50944;(statearr_50985[(7)] = inst_50913__$1);
(statearr_50985[(15)] = inst_50912__$1);
(statearr_50985[(16)] = inst_50916);
return statearr_50985;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_50986_51023 = state_50944__$1;(statearr_50986_51023[(1)] = (20));
} else
{var statearr_50987_51024 = state_50944__$1;(statearr_50987_51024[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50945 === (8)))
{var inst_50881 = (state_50944[(23)]);var inst_50886 = [inst_50881,tolerance];var inst_50887 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50886,null));var inst_50888 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_50887);var state_50944__$1 = state_50944;var statearr_50988_51025 = state_50944__$1;(statearr_50988_51025[(2)] = inst_50888);
(statearr_50988_51025[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_50992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50992[(0)] = state_machine__5679__auto__);
(statearr_50992[(1)] = (1));
return statearr_50992;
});
var state_machine__5679__auto____1 = (function (state_50944){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50944);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50993){if((e50993 instanceof Object))
{var ex__5682__auto__ = e50993;var statearr_50994_51026 = state_50944;(statearr_50994_51026[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51027 = state_50944;
state_50944 = G__51027;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50944){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var state__5695__auto__ = (function (){var statearr_50995 = f__5694__auto__.call(null);(statearr_50995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_50995;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__51028){var map__51033 = p__51028;var map__51033__$1 = ((cljs.core.seq_QMARK_.call(null,map__51033))?cljs.core.apply.call(null,cljs.core.hash_map,map__51033):map__51033);var min_zoom = cljs.core.get.call(null,map__51033__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51033,map__51033__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.fetch_from_index.call(null,collection_index,blid)], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51033,map__51033__$1,min_zoom))
,boundaryline_ids));
} else
{var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51033,map__51033__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51033,map__51033__$1,min_zoom))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51033,map__51033__$1,min_zoom){
return (function (p__51034){var vec__51035 = p__51034;var blid = cljs.core.nth.call(null,vec__51035,(0),null);var vec__51036 = cljs.core.nth.call(null,vec__51035,(1),null);var tol = cljs.core.nth.call(null,vec__51036,(0),null);var bl = cljs.core.nth.call(null,vec__51036,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__51033,map__51033__$1,min_zoom))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,boundaryline_ids,i_tol):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
}
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,var_args){
var p__51028 = null;if (arguments.length > 5) {
  p__51028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__51028);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__51037){
var app_state = cljs.core.first(arglist__51037);
arglist__51037 = cljs.core.next(arglist__51037);
var boundarylines_path = cljs.core.first(arglist__51037);
arglist__51037 = cljs.core.next(arglist__51037);
var collection_id = cljs.core.first(arglist__51037);
arglist__51037 = cljs.core.next(arglist__51037);
var boundaryline_ids = cljs.core.first(arglist__51037);
arglist__51037 = cljs.core.next(arglist__51037);
var zoom = cljs.core.first(arglist__51037);
var p__51028 = cljs.core.rest(arglist__51037);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__51028);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__51042_51046 = cljs.core.seq.call(null,keys);var chunk__51043_51047 = null;var count__51044_51048 = (0);var i__51045_51049 = (0);while(true){
if((i__51045_51049 < count__51044_51048))
{var k_51050 = cljs.core._nth.call(null,chunk__51043_51047,i__51045_51049);var obj_51051 = (js_index[k_51050]);var geom_51052 = (obj_51051["geojson"]);var feature_51053 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_51051["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_51051["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_51051["compact_name"])], null)], null));var __51054__$1 = (feature_51053["geometry"] = geom_51052);var __51055__$2 = ((feature_51053["properties"])["index_object"] = obj_51051);features.push(feature_51053);
{
var G__51056 = seq__51042_51046;
var G__51057 = chunk__51043_51047;
var G__51058 = count__51044_51048;
var G__51059 = (i__51045_51049 + (1));
seq__51042_51046 = G__51056;
chunk__51043_51047 = G__51057;
count__51044_51048 = G__51058;
i__51045_51049 = G__51059;
continue;
}
} else
{var temp__4126__auto___51060 = cljs.core.seq.call(null,seq__51042_51046);if(temp__4126__auto___51060)
{var seq__51042_51061__$1 = temp__4126__auto___51060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51042_51061__$1))
{var c__4299__auto___51062 = cljs.core.chunk_first.call(null,seq__51042_51061__$1);{
var G__51063 = cljs.core.chunk_rest.call(null,seq__51042_51061__$1);
var G__51064 = c__4299__auto___51062;
var G__51065 = cljs.core.count.call(null,c__4299__auto___51062);
var G__51066 = (0);
seq__51042_51046 = G__51063;
chunk__51043_51047 = G__51064;
count__51044_51048 = G__51065;
i__51045_51049 = G__51066;
continue;
}
} else
{var k_51067 = cljs.core.first.call(null,seq__51042_51061__$1);var obj_51068 = (js_index[k_51067]);var geom_51069 = (obj_51068["geojson"]);var feature_51070 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_51068["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_51068["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_51068["compact_name"])], null)], null));var __51071__$1 = (feature_51070["geometry"] = geom_51069);var __51072__$2 = ((feature_51070["properties"])["index_object"] = obj_51068);features.push(feature_51070);
{
var G__51073 = cljs.core.next.call(null,seq__51042_51061__$1);
var G__51074 = null;
var G__51075 = (0);
var G__51076 = (0);
seq__51042_51046 = G__51073;
chunk__51043_51047 = G__51074;
count__51044_51048 = G__51075;
i__51045_51049 = G__51076;
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
return (function (state_51119){var state_val_51120 = (state_51119[(1)]);if((state_val_51120 === (5)))
{var inst_51117 = (state_51119[(2)]);var state_51119__$1 = state_51119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51119__$1,inst_51117);
} else
{if((state_val_51120 === (4)))
{var state_51119__$1 = state_51119;var statearr_51121_51133 = state_51119__$1;(statearr_51121_51133[(2)] = null);
(statearr_51121_51133[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51120 === (3)))
{var inst_51107 = (state_51119[(7)]);var inst_51114 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_51107);var state_51119__$1 = state_51119;var statearr_51122_51134 = state_51119__$1;(statearr_51122_51134[(2)] = inst_51114);
(statearr_51122_51134[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51120 === (2)))
{var inst_51107 = (state_51119[(7)]);var inst_51107__$1 = (state_51119[(2)]);var inst_51108 = (function (){var bl_coll_index = inst_51107__$1;return ((function (bl_coll_index,inst_51107,inst_51107__$1,state_val_51120,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_51107,inst_51107__$1,state_val_51120,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_51109 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_51108);var inst_51110 = cljs.core.deref.call(null,app_state);var inst_51111 = cljs.core.get_in.call(null,inst_51110,index_path);var inst_51112 = cljs.core._EQ_.call(null,inst_51111,inst_51107__$1);var state_51119__$1 = (function (){var statearr_51123 = state_51119;(statearr_51123[(7)] = inst_51107__$1);
(statearr_51123[(8)] = inst_51109);
return statearr_51123;
})();if(inst_51112)
{var statearr_51124_51135 = state_51119__$1;(statearr_51124_51135[(1)] = (3));
} else
{var statearr_51125_51136 = state_51119__$1;(statearr_51125_51136[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51120 === (1)))
{var inst_51105 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_51119__$1 = state_51119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51119__$1,(2),inst_51105);
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
var state_machine__5679__auto____0 = (function (){var statearr_51129 = [null,null,null,null,null,null,null,null,null];(statearr_51129[(0)] = state_machine__5679__auto__);
(statearr_51129[(1)] = (1));
return statearr_51129;
});
var state_machine__5679__auto____1 = (function (state_51119){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51119);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51130){if((e51130 instanceof Object))
{var ex__5682__auto__ = e51130;var statearr_51131_51137 = state_51119;(statearr_51131_51137[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51138 = state_51119;
state_51119 = G__51138;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51119){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_51132 = f__5694__auto__.call(null);(statearr_51132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51132;
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