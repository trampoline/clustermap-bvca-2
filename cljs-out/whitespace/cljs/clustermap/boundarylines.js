// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__12890){var vec__12891 = p__12890;var z = cljs.core.nth.call(null,vec__12891,(0),null);var t = cljs.core.nth.call(null,vec__12891,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
return (function (state_13102){var state_val_13103 = (state_13102[(1)]);if((state_val_13103 === (7)))
{var inst_13098 = (state_13102[(2)]);var state_13102__$1 = state_13102;var statearr_13104_13154 = state_13102__$1;(statearr_13104_13154[(2)] = inst_13098);
(statearr_13104_13154[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (20)))
{var inst_13071 = (state_13102[(7)]);var inst_13076 = [inst_13071,tolerance];var inst_13077 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13076,null));var inst_13078 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_13077);var state_13102__$1 = state_13102;var statearr_13105_13155 = state_13102__$1;(statearr_13105_13155[(2)] = inst_13078);
(statearr_13105_13155[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (1)))
{var state_13102__$1 = state_13102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13102__$1,(2),comm);
} else
{if((state_val_13103 === (24)))
{var state_13102__$1 = state_13102;var statearr_13106_13156 = state_13102__$1;(statearr_13106_13156[(2)] = null);
(statearr_13106_13156[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (4)))
{var inst_13100 = (state_13102[(2)]);var state_13102__$1 = (function (){var statearr_13107 = state_13102;(statearr_13107[(8)] = inst_13100);
return statearr_13107;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13102__$1,true);
} else
{if((state_val_13103 === (15)))
{var state_13102__$1 = state_13102;var statearr_13111_13157 = state_13102__$1;(statearr_13111_13157[(2)] = null);
(statearr_13111_13157[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (21)))
{var state_13102__$1 = state_13102;var statearr_13112_13158 = state_13102__$1;(statearr_13112_13158[(2)] = null);
(statearr_13112_13158[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (13)))
{var inst_13031 = (state_13102[(9)]);var inst_13033 = (state_13102[(10)]);var inst_13032 = (state_13102[(11)]);var inst_13030 = (state_13102[(12)]);var inst_13057 = (state_13102[(2)]);var inst_13058 = (inst_13033 + (1));var tmp13108 = inst_13031;var tmp13109 = inst_13032;var tmp13110 = inst_13030;var inst_13030__$1 = tmp13110;var inst_13031__$1 = tmp13108;var inst_13032__$1 = tmp13109;var inst_13033__$1 = inst_13058;var state_13102__$1 = (function (){var statearr_13113 = state_13102;(statearr_13113[(9)] = inst_13031__$1);
(statearr_13113[(13)] = inst_13057);
(statearr_13113[(10)] = inst_13033__$1);
(statearr_13113[(11)] = inst_13032__$1);
(statearr_13113[(12)] = inst_13030__$1);
return statearr_13113;
})();var statearr_13114_13159 = state_13102__$1;(statearr_13114_13159[(2)] = null);
(statearr_13114_13159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (22)))
{var inst_13031 = (state_13102[(9)]);var inst_13074 = (state_13102[(14)]);var inst_13071 = (state_13102[(7)]);var inst_13033 = (state_13102[(10)]);var inst_13032 = (state_13102[(11)]);var inst_13081 = (state_13102[(15)]);var inst_13061 = (state_13102[(16)]);var inst_13024 = (state_13102[(17)]);var inst_13070 = (state_13102[(18)]);var inst_13081__$1 = (state_13102[(2)]);var inst_13082 = (function (){var chunk__13026 = inst_13031;var temp__4126__auto__ = inst_13061;var bls = inst_13024;var boundaryline_id = inst_13071;var general_cache_path = inst_13074;var bl = inst_13070;var count__13027 = inst_13032;var i__13028 = inst_13033;var collection_cache_path = inst_13081__$1;var seq__13025 = inst_13061;return ((function (chunk__13026,temp__4126__auto__,bls,boundaryline_id,general_cache_path,bl,count__13027,i__13028,collection_cache_path,seq__13025,inst_13031,inst_13074,inst_13071,inst_13033,inst_13032,inst_13081,inst_13061,inst_13024,inst_13070,inst_13081__$1,state_val_13103,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(chunk__13026,temp__4126__auto__,bls,boundaryline_id,general_cache_path,bl,count__13027,i__13028,collection_cache_path,seq__13025,inst_13031,inst_13074,inst_13071,inst_13033,inst_13032,inst_13081,inst_13061,inst_13024,inst_13070,inst_13081__$1,state_val_13103,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_13083 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_13074,inst_13082);var state_13102__$1 = (function (){var statearr_13115 = state_13102;(statearr_13115[(19)] = inst_13083);
(statearr_13115[(15)] = inst_13081__$1);
return statearr_13115;
})();if(cljs.core.truth_(inst_13081__$1))
{var statearr_13116_13160 = state_13102__$1;(statearr_13116_13160[(1)] = (23));
} else
{var statearr_13117_13161 = state_13102__$1;(statearr_13117_13161[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (6)))
{var inst_13061 = (state_13102[(16)]);var inst_13030 = (state_13102[(12)]);var inst_13061__$1 = cljs.core.seq.call(null,inst_13030);var state_13102__$1 = (function (){var statearr_13118 = state_13102;(statearr_13118[(16)] = inst_13061__$1);
return statearr_13118;
})();if(inst_13061__$1)
{var statearr_13119_13162 = state_13102__$1;(statearr_13119_13162[(1)] = (14));
} else
{var statearr_13120_13163 = state_13102__$1;(statearr_13120_13163[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (25)))
{var inst_13061 = (state_13102[(16)]);var inst_13089 = (state_13102[(2)]);var inst_13090 = cljs.core.next.call(null,inst_13061);var inst_13030 = inst_13090;var inst_13031 = null;var inst_13032 = (0);var inst_13033 = (0);var state_13102__$1 = (function (){var statearr_13121 = state_13102;(statearr_13121[(20)] = inst_13089);
(statearr_13121[(9)] = inst_13031);
(statearr_13121[(10)] = inst_13033);
(statearr_13121[(11)] = inst_13032);
(statearr_13121[(12)] = inst_13030);
return statearr_13121;
})();var statearr_13122_13164 = state_13102__$1;(statearr_13122_13164[(2)] = null);
(statearr_13122_13164[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (17)))
{var inst_13061 = (state_13102[(16)]);var inst_13065 = cljs.core.chunk_first.call(null,inst_13061);var inst_13066 = cljs.core.chunk_rest.call(null,inst_13061);var inst_13067 = cljs.core.count.call(null,inst_13065);var inst_13030 = inst_13066;var inst_13031 = inst_13065;var inst_13032 = inst_13067;var inst_13033 = (0);var state_13102__$1 = (function (){var statearr_13123 = state_13102;(statearr_13123[(9)] = inst_13031);
(statearr_13123[(10)] = inst_13033);
(statearr_13123[(11)] = inst_13032);
(statearr_13123[(12)] = inst_13030);
return statearr_13123;
})();var statearr_13124_13165 = state_13102__$1;(statearr_13124_13165[(2)] = null);
(statearr_13124_13165[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (3)))
{var inst_13033 = (state_13102[(10)]);var inst_13032 = (state_13102[(11)]);var inst_13035 = (inst_13033 < inst_13032);var inst_13036 = inst_13035;var state_13102__$1 = state_13102;if(cljs.core.truth_(inst_13036))
{var statearr_13125_13166 = state_13102__$1;(statearr_13125_13166[(1)] = (5));
} else
{var statearr_13126_13167 = state_13102__$1;(statearr_13126_13167[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (12)))
{var state_13102__$1 = state_13102;var statearr_13127_13168 = state_13102__$1;(statearr_13127_13168[(2)] = null);
(statearr_13127_13168[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (2)))
{var inst_13024 = (state_13102[(17)]);var inst_13024__$1 = (state_13102[(2)]);var inst_13029 = cljs.core.seq.call(null,inst_13024__$1);var inst_13030 = inst_13029;var inst_13031 = null;var inst_13032 = (0);var inst_13033 = (0);var state_13102__$1 = (function (){var statearr_13128 = state_13102;(statearr_13128[(9)] = inst_13031);
(statearr_13128[(10)] = inst_13033);
(statearr_13128[(11)] = inst_13032);
(statearr_13128[(12)] = inst_13030);
(statearr_13128[(17)] = inst_13024__$1);
return statearr_13128;
})();var statearr_13129_13169 = state_13102__$1;(statearr_13129_13169[(2)] = null);
(statearr_13129_13169[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (23)))
{var inst_13031 = (state_13102[(9)]);var inst_13074 = (state_13102[(14)]);var inst_13071 = (state_13102[(7)]);var inst_13033 = (state_13102[(10)]);var inst_13032 = (state_13102[(11)]);var inst_13081 = (state_13102[(15)]);var inst_13061 = (state_13102[(16)]);var inst_13024 = (state_13102[(17)]);var inst_13070 = (state_13102[(18)]);var inst_13085 = (function (){var chunk__13026 = inst_13031;var temp__4126__auto__ = inst_13061;var bls = inst_13024;var boundaryline_id = inst_13071;var general_cache_path = inst_13074;var bl = inst_13070;var count__13027 = inst_13032;var i__13028 = inst_13033;var collection_cache_path = inst_13081;var seq__13025 = inst_13061;return ((function (chunk__13026,temp__4126__auto__,bls,boundaryline_id,general_cache_path,bl,count__13027,i__13028,collection_cache_path,seq__13025,inst_13031,inst_13074,inst_13071,inst_13033,inst_13032,inst_13081,inst_13061,inst_13024,inst_13070,state_val_13103,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(chunk__13026,temp__4126__auto__,bls,boundaryline_id,general_cache_path,bl,count__13027,i__13028,collection_cache_path,seq__13025,inst_13031,inst_13074,inst_13071,inst_13033,inst_13032,inst_13081,inst_13061,inst_13024,inst_13070,state_val_13103,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_13086 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_13081,inst_13085);var state_13102__$1 = state_13102;var statearr_13130_13170 = state_13102__$1;(statearr_13130_13170[(2)] = inst_13086);
(statearr_13130_13170[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (19)))
{var inst_13093 = (state_13102[(2)]);var state_13102__$1 = state_13102;var statearr_13131_13171 = state_13102__$1;(statearr_13131_13171[(2)] = inst_13093);
(statearr_13131_13171[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (11)))
{var inst_13042 = (state_13102[(21)]);var inst_13038 = (state_13102[(22)]);var inst_13049 = (state_13102[(23)]);var inst_13031 = (state_13102[(9)]);var inst_13033 = (state_13102[(10)]);var inst_13032 = (state_13102[(11)]);var inst_13030 = (state_13102[(12)]);var inst_13039 = (state_13102[(24)]);var inst_13024 = (state_13102[(17)]);var inst_13053 = (function (){var collection_cache_path = inst_13049;var general_cache_path = inst_13042;var boundaryline_id = inst_13039;var bl = inst_13038;var seq__13025 = inst_13030;var chunk__13026 = inst_13031;var count__13027 = inst_13032;var i__13028 = inst_13033;var bls = inst_13024;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__13025,chunk__13026,count__13027,i__13028,bls,inst_13042,inst_13038,inst_13049,inst_13031,inst_13033,inst_13032,inst_13030,inst_13039,inst_13024,state_val_13103,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__13025,chunk__13026,count__13027,i__13028,bls,inst_13042,inst_13038,inst_13049,inst_13031,inst_13033,inst_13032,inst_13030,inst_13039,inst_13024,state_val_13103,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_13054 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_13049,inst_13053);var state_13102__$1 = state_13102;var statearr_13132_13172 = state_13102__$1;(statearr_13132_13172[(2)] = inst_13054);
(statearr_13132_13172[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (9)))
{var state_13102__$1 = state_13102;var statearr_13133_13173 = state_13102__$1;(statearr_13133_13173[(2)] = null);
(statearr_13133_13173[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (5)))
{var inst_13038 = (state_13102[(22)]);var inst_13031 = (state_13102[(9)]);var inst_13033 = (state_13102[(10)]);var inst_13039 = (state_13102[(24)]);var inst_13038__$1 = cljs.core._nth.call(null,inst_13031,inst_13033);var inst_13039__$1 = (inst_13038__$1["id"]);var inst_13040 = [inst_13039__$1,tolerance];var inst_13041 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13040,null));var inst_13042 = cljs.core.concat.call(null,boundarylines_path__$1,inst_13041);var state_13102__$1 = (function (){var statearr_13134 = state_13102;(statearr_13134[(21)] = inst_13042);
(statearr_13134[(22)] = inst_13038__$1);
(statearr_13134[(24)] = inst_13039__$1);
return statearr_13134;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_13135_13174 = state_13102__$1;(statearr_13135_13174[(1)] = (8));
} else
{var statearr_13136_13175 = state_13102__$1;(statearr_13136_13175[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (14)))
{var inst_13061 = (state_13102[(16)]);var inst_13063 = cljs.core.chunked_seq_QMARK_.call(null,inst_13061);var state_13102__$1 = state_13102;if(inst_13063)
{var statearr_13137_13176 = state_13102__$1;(statearr_13137_13176[(1)] = (17));
} else
{var statearr_13138_13177 = state_13102__$1;(statearr_13138_13177[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (16)))
{var inst_13096 = (state_13102[(2)]);var state_13102__$1 = state_13102;var statearr_13139_13178 = state_13102__$1;(statearr_13139_13178[(2)] = inst_13096);
(statearr_13139_13178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (10)))
{var inst_13042 = (state_13102[(21)]);var inst_13038 = (state_13102[(22)]);var inst_13049 = (state_13102[(23)]);var inst_13031 = (state_13102[(9)]);var inst_13033 = (state_13102[(10)]);var inst_13032 = (state_13102[(11)]);var inst_13030 = (state_13102[(12)]);var inst_13039 = (state_13102[(24)]);var inst_13024 = (state_13102[(17)]);var inst_13049__$1 = (state_13102[(2)]);var inst_13050 = (function (){var collection_cache_path = inst_13049__$1;var general_cache_path = inst_13042;var boundaryline_id = inst_13039;var bl = inst_13038;var seq__13025 = inst_13030;var chunk__13026 = inst_13031;var count__13027 = inst_13032;var i__13028 = inst_13033;var bls = inst_13024;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__13025,chunk__13026,count__13027,i__13028,bls,inst_13042,inst_13038,inst_13049,inst_13031,inst_13033,inst_13032,inst_13030,inst_13039,inst_13024,inst_13049__$1,state_val_13103,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__13025,chunk__13026,count__13027,i__13028,bls,inst_13042,inst_13038,inst_13049,inst_13031,inst_13033,inst_13032,inst_13030,inst_13039,inst_13024,inst_13049__$1,state_val_13103,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_13051 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_13042,inst_13050);var state_13102__$1 = (function (){var statearr_13140 = state_13102;(statearr_13140[(25)] = inst_13051);
(statearr_13140[(23)] = inst_13049__$1);
return statearr_13140;
})();if(cljs.core.truth_(inst_13049__$1))
{var statearr_13141_13179 = state_13102__$1;(statearr_13141_13179[(1)] = (11));
} else
{var statearr_13142_13180 = state_13102__$1;(statearr_13142_13180[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (18)))
{var inst_13071 = (state_13102[(7)]);var inst_13061 = (state_13102[(16)]);var inst_13070 = (state_13102[(18)]);var inst_13070__$1 = cljs.core.first.call(null,inst_13061);var inst_13071__$1 = (inst_13070__$1["id"]);var inst_13072 = [inst_13071__$1,tolerance];var inst_13073 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13072,null));var inst_13074 = cljs.core.concat.call(null,boundarylines_path__$1,inst_13073);var state_13102__$1 = (function (){var statearr_13143 = state_13102;(statearr_13143[(14)] = inst_13074);
(statearr_13143[(7)] = inst_13071__$1);
(statearr_13143[(18)] = inst_13070__$1);
return statearr_13143;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_13144_13181 = state_13102__$1;(statearr_13144_13181[(1)] = (20));
} else
{var statearr_13145_13182 = state_13102__$1;(statearr_13145_13182[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (8)))
{var inst_13039 = (state_13102[(24)]);var inst_13044 = [inst_13039,tolerance];var inst_13045 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13044,null));var inst_13046 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_13045);var state_13102__$1 = state_13102;var statearr_13146_13183 = state_13102__$1;(statearr_13146_13183[(2)] = inst_13046);
(statearr_13146_13183[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_13150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13150[(0)] = state_machine__5679__auto__);
(statearr_13150[(1)] = (1));
return statearr_13150;
});
var state_machine__5679__auto____1 = (function (state_13102){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_13102);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e13151){if((e13151 instanceof Object))
{var ex__5682__auto__ = e13151;var statearr_13152_13184 = state_13102;(statearr_13152_13184[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13185 = state_13102;
state_13102 = G__13185;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_13102){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_13102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var state__5695__auto__ = (function (){var statearr_13153 = f__5694__auto__.call(null);(statearr_13153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_13153;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__13186){var map__13191 = p__13186;var map__13191__$1 = ((cljs.core.seq_QMARK_.call(null,map__13191))?cljs.core.apply.call(null,cljs.core.hash_map,map__13191):map__13191);var min_zoom = cljs.core.get.call(null,map__13191__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13191,map__13191__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.fetch_from_index.call(null,collection_index,blid)], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13191,map__13191__$1,min_zoom))
,boundaryline_ids));
} else
{var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13191,map__13191__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13191,map__13191__$1,min_zoom))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13191,map__13191__$1,min_zoom){
return (function (p__13192){var vec__13193 = p__13192;var blid = cljs.core.nth.call(null,vec__13193,(0),null);var vec__13194 = cljs.core.nth.call(null,vec__13193,(1),null);var tol = cljs.core.nth.call(null,vec__13194,(0),null);var bl = cljs.core.nth.call(null,vec__13194,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13191,map__13191__$1,min_zoom))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,boundaryline_ids,i_tol):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
}
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,var_args){
var p__13186 = null;if (arguments.length > 5) {
  p__13186 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__13186);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__13195){
var app_state = cljs.core.first(arglist__13195);
arglist__13195 = cljs.core.next(arglist__13195);
var boundarylines_path = cljs.core.first(arglist__13195);
arglist__13195 = cljs.core.next(arglist__13195);
var collection_id = cljs.core.first(arglist__13195);
arglist__13195 = cljs.core.next(arglist__13195);
var boundaryline_ids = cljs.core.first(arglist__13195);
arglist__13195 = cljs.core.next(arglist__13195);
var zoom = cljs.core.first(arglist__13195);
var p__13186 = cljs.core.rest(arglist__13195);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__13186);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__13200_13204 = cljs.core.seq.call(null,keys);var chunk__13201_13205 = null;var count__13202_13206 = (0);var i__13203_13207 = (0);while(true){
if((i__13203_13207 < count__13202_13206))
{var k_13208 = cljs.core._nth.call(null,chunk__13201_13205,i__13203_13207);var obj_13209 = (js_index[k_13208]);var geom_13210 = (obj_13209["geojson"]);var feature_13211 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13209["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13209["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13209["compact_name"])], null)], null));var __13212__$1 = (feature_13211["geometry"] = geom_13210);var __13213__$2 = ((feature_13211["properties"])["index_object"] = obj_13209);features.push(feature_13211);
{
var G__13214 = seq__13200_13204;
var G__13215 = chunk__13201_13205;
var G__13216 = count__13202_13206;
var G__13217 = (i__13203_13207 + (1));
seq__13200_13204 = G__13214;
chunk__13201_13205 = G__13215;
count__13202_13206 = G__13216;
i__13203_13207 = G__13217;
continue;
}
} else
{var temp__4126__auto___13218 = cljs.core.seq.call(null,seq__13200_13204);if(temp__4126__auto___13218)
{var seq__13200_13219__$1 = temp__4126__auto___13218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13200_13219__$1))
{var c__4299__auto___13220 = cljs.core.chunk_first.call(null,seq__13200_13219__$1);{
var G__13221 = cljs.core.chunk_rest.call(null,seq__13200_13219__$1);
var G__13222 = c__4299__auto___13220;
var G__13223 = cljs.core.count.call(null,c__4299__auto___13220);
var G__13224 = (0);
seq__13200_13204 = G__13221;
chunk__13201_13205 = G__13222;
count__13202_13206 = G__13223;
i__13203_13207 = G__13224;
continue;
}
} else
{var k_13225 = cljs.core.first.call(null,seq__13200_13219__$1);var obj_13226 = (js_index[k_13225]);var geom_13227 = (obj_13226["geojson"]);var feature_13228 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13226["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13226["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13226["compact_name"])], null)], null));var __13229__$1 = (feature_13228["geometry"] = geom_13227);var __13230__$2 = ((feature_13228["properties"])["index_object"] = obj_13226);features.push(feature_13228);
{
var G__13231 = cljs.core.next.call(null,seq__13200_13219__$1);
var G__13232 = null;
var G__13233 = (0);
var G__13234 = (0);
seq__13200_13204 = G__13231;
chunk__13201_13205 = G__13232;
count__13202_13206 = G__13233;
i__13203_13207 = G__13234;
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
return (function (state_13277){var state_val_13278 = (state_13277[(1)]);if((state_val_13278 === (5)))
{var inst_13275 = (state_13277[(2)]);var state_13277__$1 = state_13277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13277__$1,inst_13275);
} else
{if((state_val_13278 === (4)))
{var state_13277__$1 = state_13277;var statearr_13279_13291 = state_13277__$1;(statearr_13279_13291[(2)] = null);
(statearr_13279_13291[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13278 === (3)))
{var inst_13265 = (state_13277[(7)]);var inst_13272 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_13265);var state_13277__$1 = state_13277;var statearr_13280_13292 = state_13277__$1;(statearr_13280_13292[(2)] = inst_13272);
(statearr_13280_13292[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13278 === (2)))
{var inst_13265 = (state_13277[(7)]);var inst_13265__$1 = (state_13277[(2)]);var inst_13266 = (function (){var bl_coll_index = inst_13265__$1;return ((function (bl_coll_index,inst_13265,inst_13265__$1,state_val_13278,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_13265,inst_13265__$1,state_val_13278,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_13267 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_13266);var inst_13268 = cljs.core.deref.call(null,app_state);var inst_13269 = cljs.core.get_in.call(null,inst_13268,index_path);var inst_13270 = cljs.core._EQ_.call(null,inst_13269,inst_13265__$1);var state_13277__$1 = (function (){var statearr_13281 = state_13277;(statearr_13281[(8)] = inst_13267);
(statearr_13281[(7)] = inst_13265__$1);
return statearr_13281;
})();if(inst_13270)
{var statearr_13282_13293 = state_13277__$1;(statearr_13282_13293[(1)] = (3));
} else
{var statearr_13283_13294 = state_13277__$1;(statearr_13283_13294[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13278 === (1)))
{var inst_13263 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_13277__$1 = state_13277;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13277__$1,(2),inst_13263);
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
var state_machine__5679__auto____0 = (function (){var statearr_13287 = [null,null,null,null,null,null,null,null,null];(statearr_13287[(0)] = state_machine__5679__auto__);
(statearr_13287[(1)] = (1));
return statearr_13287;
});
var state_machine__5679__auto____1 = (function (state_13277){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_13277);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e13288){if((e13288 instanceof Object))
{var ex__5682__auto__ = e13288;var statearr_13289_13295 = state_13277;(statearr_13289_13295[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13277);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13296 = state_13277;
state_13277 = G__13296;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_13277){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_13277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_13290 = f__5694__auto__.call(null);(statearr_13290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_13290;
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
