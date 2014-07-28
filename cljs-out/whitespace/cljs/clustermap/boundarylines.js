// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__12893){var vec__12894 = p__12893;var z = cljs.core.nth.call(null,vec__12894,(0),null);var t = cljs.core.nth.call(null,vec__12894,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
return (function (state_13105){var state_val_13106 = (state_13105[(1)]);if((state_val_13106 === (7)))
{var inst_13101 = (state_13105[(2)]);var state_13105__$1 = state_13105;var statearr_13107_13157 = state_13105__$1;(statearr_13107_13157[(2)] = inst_13101);
(statearr_13107_13157[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (20)))
{var inst_13074 = (state_13105[(7)]);var inst_13079 = [inst_13074,tolerance];var inst_13080 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13079,null));var inst_13081 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_13080);var state_13105__$1 = state_13105;var statearr_13108_13158 = state_13105__$1;(statearr_13108_13158[(2)] = inst_13081);
(statearr_13108_13158[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (1)))
{var state_13105__$1 = state_13105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13105__$1,(2),comm);
} else
{if((state_val_13106 === (24)))
{var state_13105__$1 = state_13105;var statearr_13109_13159 = state_13105__$1;(statearr_13109_13159[(2)] = null);
(statearr_13109_13159[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (4)))
{var inst_13103 = (state_13105[(2)]);var state_13105__$1 = (function (){var statearr_13110 = state_13105;(statearr_13110[(8)] = inst_13103);
return statearr_13110;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13105__$1,true);
} else
{if((state_val_13106 === (15)))
{var state_13105__$1 = state_13105;var statearr_13114_13160 = state_13105__$1;(statearr_13114_13160[(2)] = null);
(statearr_13114_13160[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (21)))
{var state_13105__$1 = state_13105;var statearr_13115_13161 = state_13105__$1;(statearr_13115_13161[(2)] = null);
(statearr_13115_13161[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (13)))
{var inst_13033 = (state_13105[(9)]);var inst_13036 = (state_13105[(10)]);var inst_13035 = (state_13105[(11)]);var inst_13034 = (state_13105[(12)]);var inst_13060 = (state_13105[(2)]);var inst_13061 = (inst_13036 + (1));var tmp13111 = inst_13033;var tmp13112 = inst_13035;var tmp13113 = inst_13034;var inst_13033__$1 = tmp13111;var inst_13034__$1 = tmp13113;var inst_13035__$1 = tmp13112;var inst_13036__$1 = inst_13061;var state_13105__$1 = (function (){var statearr_13116 = state_13105;(statearr_13116[(13)] = inst_13060);
(statearr_13116[(9)] = inst_13033__$1);
(statearr_13116[(10)] = inst_13036__$1);
(statearr_13116[(11)] = inst_13035__$1);
(statearr_13116[(12)] = inst_13034__$1);
return statearr_13116;
})();var statearr_13117_13162 = state_13105__$1;(statearr_13117_13162[(2)] = null);
(statearr_13117_13162[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (22)))
{var inst_13027 = (state_13105[(14)]);var inst_13064 = (state_13105[(15)]);var inst_13074 = (state_13105[(7)]);var inst_13036 = (state_13105[(10)]);var inst_13077 = (state_13105[(16)]);var inst_13084 = (state_13105[(17)]);var inst_13073 = (state_13105[(18)]);var inst_13035 = (state_13105[(11)]);var inst_13034 = (state_13105[(12)]);var inst_13084__$1 = (state_13105[(2)]);var inst_13085 = (function (){var count__13030 = inst_13035;var seq__13028 = inst_13064;var temp__4126__auto__ = inst_13064;var chunk__13029 = inst_13034;var i__13031 = inst_13036;var bls = inst_13027;var boundaryline_id = inst_13074;var general_cache_path = inst_13077;var bl = inst_13073;var collection_cache_path = inst_13084__$1;return ((function (count__13030,seq__13028,temp__4126__auto__,chunk__13029,i__13031,bls,boundaryline_id,general_cache_path,bl,collection_cache_path,inst_13027,inst_13064,inst_13074,inst_13036,inst_13077,inst_13084,inst_13073,inst_13035,inst_13034,inst_13084__$1,state_val_13106,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(count__13030,seq__13028,temp__4126__auto__,chunk__13029,i__13031,bls,boundaryline_id,general_cache_path,bl,collection_cache_path,inst_13027,inst_13064,inst_13074,inst_13036,inst_13077,inst_13084,inst_13073,inst_13035,inst_13034,inst_13084__$1,state_val_13106,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_13086 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_13077,inst_13085);var state_13105__$1 = (function (){var statearr_13118 = state_13105;(statearr_13118[(19)] = inst_13086);
(statearr_13118[(17)] = inst_13084__$1);
return statearr_13118;
})();if(cljs.core.truth_(inst_13084__$1))
{var statearr_13119_13163 = state_13105__$1;(statearr_13119_13163[(1)] = (23));
} else
{var statearr_13120_13164 = state_13105__$1;(statearr_13120_13164[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (6)))
{var inst_13064 = (state_13105[(15)]);var inst_13033 = (state_13105[(9)]);var inst_13064__$1 = cljs.core.seq.call(null,inst_13033);var state_13105__$1 = (function (){var statearr_13121 = state_13105;(statearr_13121[(15)] = inst_13064__$1);
return statearr_13121;
})();if(inst_13064__$1)
{var statearr_13122_13165 = state_13105__$1;(statearr_13122_13165[(1)] = (14));
} else
{var statearr_13123_13166 = state_13105__$1;(statearr_13123_13166[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (25)))
{var inst_13064 = (state_13105[(15)]);var inst_13092 = (state_13105[(2)]);var inst_13093 = cljs.core.next.call(null,inst_13064);var inst_13033 = inst_13093;var inst_13034 = null;var inst_13035 = (0);var inst_13036 = (0);var state_13105__$1 = (function (){var statearr_13124 = state_13105;(statearr_13124[(9)] = inst_13033);
(statearr_13124[(10)] = inst_13036);
(statearr_13124[(20)] = inst_13092);
(statearr_13124[(11)] = inst_13035);
(statearr_13124[(12)] = inst_13034);
return statearr_13124;
})();var statearr_13125_13167 = state_13105__$1;(statearr_13125_13167[(2)] = null);
(statearr_13125_13167[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (17)))
{var inst_13064 = (state_13105[(15)]);var inst_13068 = cljs.core.chunk_first.call(null,inst_13064);var inst_13069 = cljs.core.chunk_rest.call(null,inst_13064);var inst_13070 = cljs.core.count.call(null,inst_13068);var inst_13033 = inst_13069;var inst_13034 = inst_13068;var inst_13035 = inst_13070;var inst_13036 = (0);var state_13105__$1 = (function (){var statearr_13126 = state_13105;(statearr_13126[(9)] = inst_13033);
(statearr_13126[(10)] = inst_13036);
(statearr_13126[(11)] = inst_13035);
(statearr_13126[(12)] = inst_13034);
return statearr_13126;
})();var statearr_13127_13168 = state_13105__$1;(statearr_13127_13168[(2)] = null);
(statearr_13127_13168[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (3)))
{var inst_13036 = (state_13105[(10)]);var inst_13035 = (state_13105[(11)]);var inst_13038 = (inst_13036 < inst_13035);var inst_13039 = inst_13038;var state_13105__$1 = state_13105;if(cljs.core.truth_(inst_13039))
{var statearr_13128_13169 = state_13105__$1;(statearr_13128_13169[(1)] = (5));
} else
{var statearr_13129_13170 = state_13105__$1;(statearr_13129_13170[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (12)))
{var state_13105__$1 = state_13105;var statearr_13130_13171 = state_13105__$1;(statearr_13130_13171[(2)] = null);
(statearr_13130_13171[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (2)))
{var inst_13027 = (state_13105[(14)]);var inst_13027__$1 = (state_13105[(2)]);var inst_13032 = cljs.core.seq.call(null,inst_13027__$1);var inst_13033 = inst_13032;var inst_13034 = null;var inst_13035 = (0);var inst_13036 = (0);var state_13105__$1 = (function (){var statearr_13131 = state_13105;(statearr_13131[(14)] = inst_13027__$1);
(statearr_13131[(9)] = inst_13033);
(statearr_13131[(10)] = inst_13036);
(statearr_13131[(11)] = inst_13035);
(statearr_13131[(12)] = inst_13034);
return statearr_13131;
})();var statearr_13132_13172 = state_13105__$1;(statearr_13132_13172[(2)] = null);
(statearr_13132_13172[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (23)))
{var inst_13027 = (state_13105[(14)]);var inst_13064 = (state_13105[(15)]);var inst_13074 = (state_13105[(7)]);var inst_13036 = (state_13105[(10)]);var inst_13077 = (state_13105[(16)]);var inst_13084 = (state_13105[(17)]);var inst_13073 = (state_13105[(18)]);var inst_13035 = (state_13105[(11)]);var inst_13034 = (state_13105[(12)]);var inst_13088 = (function (){var count__13030 = inst_13035;var seq__13028 = inst_13064;var temp__4126__auto__ = inst_13064;var chunk__13029 = inst_13034;var i__13031 = inst_13036;var bls = inst_13027;var boundaryline_id = inst_13074;var general_cache_path = inst_13077;var bl = inst_13073;var collection_cache_path = inst_13084;return ((function (count__13030,seq__13028,temp__4126__auto__,chunk__13029,i__13031,bls,boundaryline_id,general_cache_path,bl,collection_cache_path,inst_13027,inst_13064,inst_13074,inst_13036,inst_13077,inst_13084,inst_13073,inst_13035,inst_13034,state_val_13106,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(count__13030,seq__13028,temp__4126__auto__,chunk__13029,i__13031,bls,boundaryline_id,general_cache_path,bl,collection_cache_path,inst_13027,inst_13064,inst_13074,inst_13036,inst_13077,inst_13084,inst_13073,inst_13035,inst_13034,state_val_13106,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_13089 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_13084,inst_13088);var state_13105__$1 = state_13105;var statearr_13133_13173 = state_13105__$1;(statearr_13133_13173[(2)] = inst_13089);
(statearr_13133_13173[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (19)))
{var inst_13096 = (state_13105[(2)]);var state_13105__$1 = state_13105;var statearr_13134_13174 = state_13105__$1;(statearr_13134_13174[(2)] = inst_13096);
(statearr_13134_13174[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (11)))
{var inst_13041 = (state_13105[(21)]);var inst_13042 = (state_13105[(22)]);var inst_13052 = (state_13105[(23)]);var inst_13027 = (state_13105[(14)]);var inst_13033 = (state_13105[(9)]);var inst_13036 = (state_13105[(10)]);var inst_13045 = (state_13105[(24)]);var inst_13035 = (state_13105[(11)]);var inst_13034 = (state_13105[(12)]);var inst_13056 = (function (){var collection_cache_path = inst_13052;var general_cache_path = inst_13045;var boundaryline_id = inst_13042;var bl = inst_13041;var seq__13028 = inst_13033;var chunk__13029 = inst_13034;var count__13030 = inst_13035;var i__13031 = inst_13036;var bls = inst_13027;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__13028,chunk__13029,count__13030,i__13031,bls,inst_13041,inst_13042,inst_13052,inst_13027,inst_13033,inst_13036,inst_13045,inst_13035,inst_13034,state_val_13106,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__13028,chunk__13029,count__13030,i__13031,bls,inst_13041,inst_13042,inst_13052,inst_13027,inst_13033,inst_13036,inst_13045,inst_13035,inst_13034,state_val_13106,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_13057 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_13052,inst_13056);var state_13105__$1 = state_13105;var statearr_13135_13175 = state_13105__$1;(statearr_13135_13175[(2)] = inst_13057);
(statearr_13135_13175[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (9)))
{var state_13105__$1 = state_13105;var statearr_13136_13176 = state_13105__$1;(statearr_13136_13176[(2)] = null);
(statearr_13136_13176[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (5)))
{var inst_13041 = (state_13105[(21)]);var inst_13042 = (state_13105[(22)]);var inst_13036 = (state_13105[(10)]);var inst_13034 = (state_13105[(12)]);var inst_13041__$1 = cljs.core._nth.call(null,inst_13034,inst_13036);var inst_13042__$1 = (inst_13041__$1["id"]);var inst_13043 = [inst_13042__$1,tolerance];var inst_13044 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13043,null));var inst_13045 = cljs.core.concat.call(null,boundarylines_path__$1,inst_13044);var state_13105__$1 = (function (){var statearr_13137 = state_13105;(statearr_13137[(21)] = inst_13041__$1);
(statearr_13137[(22)] = inst_13042__$1);
(statearr_13137[(24)] = inst_13045);
return statearr_13137;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_13138_13177 = state_13105__$1;(statearr_13138_13177[(1)] = (8));
} else
{var statearr_13139_13178 = state_13105__$1;(statearr_13139_13178[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (14)))
{var inst_13064 = (state_13105[(15)]);var inst_13066 = cljs.core.chunked_seq_QMARK_.call(null,inst_13064);var state_13105__$1 = state_13105;if(inst_13066)
{var statearr_13140_13179 = state_13105__$1;(statearr_13140_13179[(1)] = (17));
} else
{var statearr_13141_13180 = state_13105__$1;(statearr_13141_13180[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (16)))
{var inst_13099 = (state_13105[(2)]);var state_13105__$1 = state_13105;var statearr_13142_13181 = state_13105__$1;(statearr_13142_13181[(2)] = inst_13099);
(statearr_13142_13181[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (10)))
{var inst_13041 = (state_13105[(21)]);var inst_13042 = (state_13105[(22)]);var inst_13052 = (state_13105[(23)]);var inst_13027 = (state_13105[(14)]);var inst_13033 = (state_13105[(9)]);var inst_13036 = (state_13105[(10)]);var inst_13045 = (state_13105[(24)]);var inst_13035 = (state_13105[(11)]);var inst_13034 = (state_13105[(12)]);var inst_13052__$1 = (state_13105[(2)]);var inst_13053 = (function (){var collection_cache_path = inst_13052__$1;var general_cache_path = inst_13045;var boundaryline_id = inst_13042;var bl = inst_13041;var seq__13028 = inst_13033;var chunk__13029 = inst_13034;var count__13030 = inst_13035;var i__13031 = inst_13036;var bls = inst_13027;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__13028,chunk__13029,count__13030,i__13031,bls,inst_13041,inst_13042,inst_13052,inst_13027,inst_13033,inst_13036,inst_13045,inst_13035,inst_13034,inst_13052__$1,state_val_13106,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__13028,chunk__13029,count__13030,i__13031,bls,inst_13041,inst_13042,inst_13052,inst_13027,inst_13033,inst_13036,inst_13045,inst_13035,inst_13034,inst_13052__$1,state_val_13106,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_13054 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_13045,inst_13053);var state_13105__$1 = (function (){var statearr_13143 = state_13105;(statearr_13143[(23)] = inst_13052__$1);
(statearr_13143[(25)] = inst_13054);
return statearr_13143;
})();if(cljs.core.truth_(inst_13052__$1))
{var statearr_13144_13182 = state_13105__$1;(statearr_13144_13182[(1)] = (11));
} else
{var statearr_13145_13183 = state_13105__$1;(statearr_13145_13183[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (18)))
{var inst_13064 = (state_13105[(15)]);var inst_13074 = (state_13105[(7)]);var inst_13073 = (state_13105[(18)]);var inst_13073__$1 = cljs.core.first.call(null,inst_13064);var inst_13074__$1 = (inst_13073__$1["id"]);var inst_13075 = [inst_13074__$1,tolerance];var inst_13076 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13075,null));var inst_13077 = cljs.core.concat.call(null,boundarylines_path__$1,inst_13076);var state_13105__$1 = (function (){var statearr_13146 = state_13105;(statearr_13146[(7)] = inst_13074__$1);
(statearr_13146[(16)] = inst_13077);
(statearr_13146[(18)] = inst_13073__$1);
return statearr_13146;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_13147_13184 = state_13105__$1;(statearr_13147_13184[(1)] = (20));
} else
{var statearr_13148_13185 = state_13105__$1;(statearr_13148_13185[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (8)))
{var inst_13042 = (state_13105[(22)]);var inst_13047 = [inst_13042,tolerance];var inst_13048 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13047,null));var inst_13049 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_13048);var state_13105__$1 = state_13105;var statearr_13149_13186 = state_13105__$1;(statearr_13149_13186[(2)] = inst_13049);
(statearr_13149_13186[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_13153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13153[(0)] = state_machine__5679__auto__);
(statearr_13153[(1)] = (1));
return statearr_13153;
});
var state_machine__5679__auto____1 = (function (state_13105){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_13105);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e13154){if((e13154 instanceof Object))
{var ex__5682__auto__ = e13154;var statearr_13155_13187 = state_13105;(statearr_13155_13187[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13188 = state_13105;
state_13105 = G__13188;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_13105){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_13105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var state__5695__auto__ = (function (){var statearr_13156 = f__5694__auto__.call(null);(statearr_13156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_13156;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__13189){var map__13194 = p__13189;var map__13194__$1 = ((cljs.core.seq_QMARK_.call(null,map__13194))?cljs.core.apply.call(null,cljs.core.hash_map,map__13194):map__13194);var min_zoom = cljs.core.get.call(null,map__13194__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13194,map__13194__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.fetch_from_index.call(null,collection_index,blid)], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13194,map__13194__$1,min_zoom))
,boundaryline_ids));
} else
{var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13194,map__13194__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13194,map__13194__$1,min_zoom))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13194,map__13194__$1,min_zoom){
return (function (p__13195){var vec__13196 = p__13195;var blid = cljs.core.nth.call(null,vec__13196,(0),null);var vec__13197 = cljs.core.nth.call(null,vec__13196,(1),null);var tol = cljs.core.nth.call(null,vec__13197,(0),null);var bl = cljs.core.nth.call(null,vec__13197,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__13194,map__13194__$1,min_zoom))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,boundaryline_ids,i_tol):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
}
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,var_args){
var p__13189 = null;if (arguments.length > 5) {
  p__13189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__13189);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__13198){
var app_state = cljs.core.first(arglist__13198);
arglist__13198 = cljs.core.next(arglist__13198);
var boundarylines_path = cljs.core.first(arglist__13198);
arglist__13198 = cljs.core.next(arglist__13198);
var collection_id = cljs.core.first(arglist__13198);
arglist__13198 = cljs.core.next(arglist__13198);
var boundaryline_ids = cljs.core.first(arglist__13198);
arglist__13198 = cljs.core.next(arglist__13198);
var zoom = cljs.core.first(arglist__13198);
var p__13189 = cljs.core.rest(arglist__13198);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__13189);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__13203_13207 = cljs.core.seq.call(null,keys);var chunk__13204_13208 = null;var count__13205_13209 = (0);var i__13206_13210 = (0);while(true){
if((i__13206_13210 < count__13205_13209))
{var k_13211 = cljs.core._nth.call(null,chunk__13204_13208,i__13206_13210);var obj_13212 = (js_index[k_13211]);var geom_13213 = (obj_13212["geojson"]);var feature_13214 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13212["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13212["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13212["compact_name"])], null)], null));var __13215__$1 = (feature_13214["geometry"] = geom_13213);var __13216__$2 = ((feature_13214["properties"])["index_object"] = obj_13212);features.push(feature_13214);
{
var G__13217 = seq__13203_13207;
var G__13218 = chunk__13204_13208;
var G__13219 = count__13205_13209;
var G__13220 = (i__13206_13210 + (1));
seq__13203_13207 = G__13217;
chunk__13204_13208 = G__13218;
count__13205_13209 = G__13219;
i__13206_13210 = G__13220;
continue;
}
} else
{var temp__4126__auto___13221 = cljs.core.seq.call(null,seq__13203_13207);if(temp__4126__auto___13221)
{var seq__13203_13222__$1 = temp__4126__auto___13221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13203_13222__$1))
{var c__4299__auto___13223 = cljs.core.chunk_first.call(null,seq__13203_13222__$1);{
var G__13224 = cljs.core.chunk_rest.call(null,seq__13203_13222__$1);
var G__13225 = c__4299__auto___13223;
var G__13226 = cljs.core.count.call(null,c__4299__auto___13223);
var G__13227 = (0);
seq__13203_13207 = G__13224;
chunk__13204_13208 = G__13225;
count__13205_13209 = G__13226;
i__13206_13210 = G__13227;
continue;
}
} else
{var k_13228 = cljs.core.first.call(null,seq__13203_13222__$1);var obj_13229 = (js_index[k_13228]);var geom_13230 = (obj_13229["geojson"]);var feature_13231 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13229["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13229["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13229["compact_name"])], null)], null));var __13232__$1 = (feature_13231["geometry"] = geom_13230);var __13233__$2 = ((feature_13231["properties"])["index_object"] = obj_13229);features.push(feature_13231);
{
var G__13234 = cljs.core.next.call(null,seq__13203_13222__$1);
var G__13235 = null;
var G__13236 = (0);
var G__13237 = (0);
seq__13203_13207 = G__13234;
chunk__13204_13208 = G__13235;
count__13205_13209 = G__13236;
i__13206_13210 = G__13237;
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
return (function (state_13280){var state_val_13281 = (state_13280[(1)]);if((state_val_13281 === (5)))
{var inst_13278 = (state_13280[(2)]);var state_13280__$1 = state_13280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13280__$1,inst_13278);
} else
{if((state_val_13281 === (4)))
{var state_13280__$1 = state_13280;var statearr_13282_13294 = state_13280__$1;(statearr_13282_13294[(2)] = null);
(statearr_13282_13294[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13281 === (3)))
{var inst_13268 = (state_13280[(7)]);var inst_13275 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_13268);var state_13280__$1 = state_13280;var statearr_13283_13295 = state_13280__$1;(statearr_13283_13295[(2)] = inst_13275);
(statearr_13283_13295[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13281 === (2)))
{var inst_13268 = (state_13280[(7)]);var inst_13268__$1 = (state_13280[(2)]);var inst_13269 = (function (){var bl_coll_index = inst_13268__$1;return ((function (bl_coll_index,inst_13268,inst_13268__$1,state_val_13281,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_13268,inst_13268__$1,state_val_13281,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_13270 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_13269);var inst_13271 = cljs.core.deref.call(null,app_state);var inst_13272 = cljs.core.get_in.call(null,inst_13271,index_path);var inst_13273 = cljs.core._EQ_.call(null,inst_13272,inst_13268__$1);var state_13280__$1 = (function (){var statearr_13284 = state_13280;(statearr_13284[(8)] = inst_13270);
(statearr_13284[(7)] = inst_13268__$1);
return statearr_13284;
})();if(inst_13273)
{var statearr_13285_13296 = state_13280__$1;(statearr_13285_13296[(1)] = (3));
} else
{var statearr_13286_13297 = state_13280__$1;(statearr_13286_13297[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13281 === (1)))
{var inst_13266 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_13280__$1 = state_13280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13280__$1,(2),inst_13266);
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
var state_machine__5679__auto____0 = (function (){var statearr_13290 = [null,null,null,null,null,null,null,null,null];(statearr_13290[(0)] = state_machine__5679__auto__);
(statearr_13290[(1)] = (1));
return statearr_13290;
});
var state_machine__5679__auto____1 = (function (state_13280){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_13280);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e13291){if((e13291 instanceof Object))
{var ex__5682__auto__ = e13291;var statearr_13292_13298 = state_13280;(statearr_13292_13298[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13299 = state_13280;
state_13280 = G__13299;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_13280){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_13280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_13293 = f__5694__auto__.call(null);(statearr_13293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_13293;
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
