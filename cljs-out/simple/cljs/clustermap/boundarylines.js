// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__25512){var vec__25513 = p__25512;var z = cljs.core.nth.call(null,vec__25513,(0),null);var t = cljs.core.nth.call(null,vec__25513,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
return (function (state_25724){var state_val_25725 = (state_25724[(1)]);if((state_val_25725 === (7)))
{var inst_25720 = (state_25724[(2)]);var state_25724__$1 = state_25724;var statearr_25726_25776 = state_25724__$1;(statearr_25726_25776[(2)] = inst_25720);
(statearr_25726_25776[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (20)))
{var inst_25693 = (state_25724[(7)]);var inst_25698 = [inst_25693,tolerance];var inst_25699 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25698,null));var inst_25700 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_25699);var state_25724__$1 = state_25724;var statearr_25727_25777 = state_25724__$1;(statearr_25727_25777[(2)] = inst_25700);
(statearr_25727_25777[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (1)))
{var state_25724__$1 = state_25724;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25724__$1,(2),comm);
} else
{if((state_val_25725 === (24)))
{var state_25724__$1 = state_25724;var statearr_25728_25778 = state_25724__$1;(statearr_25728_25778[(2)] = null);
(statearr_25728_25778[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (4)))
{var inst_25722 = (state_25724[(2)]);var state_25724__$1 = (function (){var statearr_25729 = state_25724;(statearr_25729[(8)] = inst_25722);
return statearr_25729;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25724__$1,true);
} else
{if((state_val_25725 === (15)))
{var state_25724__$1 = state_25724;var statearr_25733_25779 = state_25724__$1;(statearr_25733_25779[(2)] = null);
(statearr_25733_25779[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (21)))
{var state_25724__$1 = state_25724;var statearr_25734_25780 = state_25724__$1;(statearr_25734_25780[(2)] = null);
(statearr_25734_25780[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (13)))
{var inst_25653 = (state_25724[(9)]);var inst_25652 = (state_25724[(10)]);var inst_25655 = (state_25724[(11)]);var inst_25654 = (state_25724[(12)]);var inst_25679 = (state_25724[(2)]);var inst_25680 = (inst_25655 + (1));var tmp25730 = inst_25653;var tmp25731 = inst_25652;var tmp25732 = inst_25654;var inst_25652__$1 = tmp25731;var inst_25653__$1 = tmp25730;var inst_25654__$1 = tmp25732;var inst_25655__$1 = inst_25680;var state_25724__$1 = (function (){var statearr_25735 = state_25724;(statearr_25735[(9)] = inst_25653__$1);
(statearr_25735[(13)] = inst_25679);
(statearr_25735[(10)] = inst_25652__$1);
(statearr_25735[(11)] = inst_25655__$1);
(statearr_25735[(12)] = inst_25654__$1);
return statearr_25735;
})();var statearr_25736_25781 = state_25724__$1;(statearr_25736_25781[(2)] = null);
(statearr_25736_25781[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (22)))
{var inst_25693 = (state_25724[(7)]);var inst_25653 = (state_25724[(9)]);var inst_25692 = (state_25724[(14)]);var inst_25655 = (state_25724[(11)]);var inst_25646 = (state_25724[(15)]);var inst_25703 = (state_25724[(16)]);var inst_25654 = (state_25724[(12)]);var inst_25696 = (state_25724[(17)]);var inst_25683 = (state_25724[(18)]);var inst_25703__$1 = (state_25724[(2)]);var inst_25704 = (function (){var i__25650 = inst_25655;var seq__25647 = inst_25683;var temp__4126__auto__ = inst_25683;var bls = inst_25646;var boundaryline_id = inst_25693;var general_cache_path = inst_25696;var bl = inst_25692;var count__25649 = inst_25654;var collection_cache_path = inst_25703__$1;var chunk__25648 = inst_25653;return ((function (i__25650,seq__25647,temp__4126__auto__,bls,boundaryline_id,general_cache_path,bl,count__25649,collection_cache_path,chunk__25648,inst_25693,inst_25653,inst_25692,inst_25655,inst_25646,inst_25703,inst_25654,inst_25696,inst_25683,inst_25703__$1,state_val_25725,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(i__25650,seq__25647,temp__4126__auto__,bls,boundaryline_id,general_cache_path,bl,count__25649,collection_cache_path,chunk__25648,inst_25693,inst_25653,inst_25692,inst_25655,inst_25646,inst_25703,inst_25654,inst_25696,inst_25683,inst_25703__$1,state_val_25725,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_25705 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_25696,inst_25704);var state_25724__$1 = (function (){var statearr_25737 = state_25724;(statearr_25737[(19)] = inst_25705);
(statearr_25737[(16)] = inst_25703__$1);
return statearr_25737;
})();if(cljs.core.truth_(inst_25703__$1))
{var statearr_25738_25782 = state_25724__$1;(statearr_25738_25782[(1)] = (23));
} else
{var statearr_25739_25783 = state_25724__$1;(statearr_25739_25783[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (6)))
{var inst_25652 = (state_25724[(10)]);var inst_25683 = (state_25724[(18)]);var inst_25683__$1 = cljs.core.seq.call(null,inst_25652);var state_25724__$1 = (function (){var statearr_25740 = state_25724;(statearr_25740[(18)] = inst_25683__$1);
return statearr_25740;
})();if(inst_25683__$1)
{var statearr_25741_25784 = state_25724__$1;(statearr_25741_25784[(1)] = (14));
} else
{var statearr_25742_25785 = state_25724__$1;(statearr_25742_25785[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (25)))
{var inst_25683 = (state_25724[(18)]);var inst_25711 = (state_25724[(2)]);var inst_25712 = cljs.core.next.call(null,inst_25683);var inst_25652 = inst_25712;var inst_25653 = null;var inst_25654 = (0);var inst_25655 = (0);var state_25724__$1 = (function (){var statearr_25743 = state_25724;(statearr_25743[(9)] = inst_25653);
(statearr_25743[(20)] = inst_25711);
(statearr_25743[(10)] = inst_25652);
(statearr_25743[(11)] = inst_25655);
(statearr_25743[(12)] = inst_25654);
return statearr_25743;
})();var statearr_25744_25786 = state_25724__$1;(statearr_25744_25786[(2)] = null);
(statearr_25744_25786[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (17)))
{var inst_25683 = (state_25724[(18)]);var inst_25687 = cljs.core.chunk_first.call(null,inst_25683);var inst_25688 = cljs.core.chunk_rest.call(null,inst_25683);var inst_25689 = cljs.core.count.call(null,inst_25687);var inst_25652 = inst_25688;var inst_25653 = inst_25687;var inst_25654 = inst_25689;var inst_25655 = (0);var state_25724__$1 = (function (){var statearr_25745 = state_25724;(statearr_25745[(9)] = inst_25653);
(statearr_25745[(10)] = inst_25652);
(statearr_25745[(11)] = inst_25655);
(statearr_25745[(12)] = inst_25654);
return statearr_25745;
})();var statearr_25746_25787 = state_25724__$1;(statearr_25746_25787[(2)] = null);
(statearr_25746_25787[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (3)))
{var inst_25655 = (state_25724[(11)]);var inst_25654 = (state_25724[(12)]);var inst_25657 = (inst_25655 < inst_25654);var inst_25658 = inst_25657;var state_25724__$1 = state_25724;if(cljs.core.truth_(inst_25658))
{var statearr_25747_25788 = state_25724__$1;(statearr_25747_25788[(1)] = (5));
} else
{var statearr_25748_25789 = state_25724__$1;(statearr_25748_25789[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (12)))
{var state_25724__$1 = state_25724;var statearr_25749_25790 = state_25724__$1;(statearr_25749_25790[(2)] = null);
(statearr_25749_25790[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (2)))
{var inst_25646 = (state_25724[(15)]);var inst_25646__$1 = (state_25724[(2)]);var inst_25651 = cljs.core.seq.call(null,inst_25646__$1);var inst_25652 = inst_25651;var inst_25653 = null;var inst_25654 = (0);var inst_25655 = (0);var state_25724__$1 = (function (){var statearr_25750 = state_25724;(statearr_25750[(9)] = inst_25653);
(statearr_25750[(10)] = inst_25652);
(statearr_25750[(11)] = inst_25655);
(statearr_25750[(15)] = inst_25646__$1);
(statearr_25750[(12)] = inst_25654);
return statearr_25750;
})();var statearr_25751_25791 = state_25724__$1;(statearr_25751_25791[(2)] = null);
(statearr_25751_25791[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (23)))
{var inst_25693 = (state_25724[(7)]);var inst_25653 = (state_25724[(9)]);var inst_25692 = (state_25724[(14)]);var inst_25655 = (state_25724[(11)]);var inst_25646 = (state_25724[(15)]);var inst_25703 = (state_25724[(16)]);var inst_25654 = (state_25724[(12)]);var inst_25696 = (state_25724[(17)]);var inst_25683 = (state_25724[(18)]);var inst_25707 = (function (){var i__25650 = inst_25655;var seq__25647 = inst_25683;var temp__4126__auto__ = inst_25683;var bls = inst_25646;var boundaryline_id = inst_25693;var general_cache_path = inst_25696;var bl = inst_25692;var count__25649 = inst_25654;var collection_cache_path = inst_25703;var chunk__25648 = inst_25653;return ((function (i__25650,seq__25647,temp__4126__auto__,bls,boundaryline_id,general_cache_path,bl,count__25649,collection_cache_path,chunk__25648,inst_25693,inst_25653,inst_25692,inst_25655,inst_25646,inst_25703,inst_25654,inst_25696,inst_25683,state_val_25725,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(i__25650,seq__25647,temp__4126__auto__,bls,boundaryline_id,general_cache_path,bl,count__25649,collection_cache_path,chunk__25648,inst_25693,inst_25653,inst_25692,inst_25655,inst_25646,inst_25703,inst_25654,inst_25696,inst_25683,state_val_25725,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_25708 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_25703,inst_25707);var state_25724__$1 = state_25724;var statearr_25752_25792 = state_25724__$1;(statearr_25752_25792[(2)] = inst_25708);
(statearr_25752_25792[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (19)))
{var inst_25715 = (state_25724[(2)]);var state_25724__$1 = state_25724;var statearr_25753_25793 = state_25724__$1;(statearr_25753_25793[(2)] = inst_25715);
(statearr_25753_25793[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (11)))
{var inst_25653 = (state_25724[(9)]);var inst_25664 = (state_25724[(21)]);var inst_25652 = (state_25724[(10)]);var inst_25660 = (state_25724[(22)]);var inst_25661 = (state_25724[(23)]);var inst_25655 = (state_25724[(11)]);var inst_25646 = (state_25724[(15)]);var inst_25654 = (state_25724[(12)]);var inst_25671 = (state_25724[(24)]);var inst_25675 = (function (){var collection_cache_path = inst_25671;var general_cache_path = inst_25664;var boundaryline_id = inst_25661;var bl = inst_25660;var seq__25647 = inst_25652;var chunk__25648 = inst_25653;var count__25649 = inst_25654;var i__25650 = inst_25655;var bls = inst_25646;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__25647,chunk__25648,count__25649,i__25650,bls,inst_25653,inst_25664,inst_25652,inst_25660,inst_25661,inst_25655,inst_25646,inst_25654,inst_25671,state_val_25725,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__25647,chunk__25648,count__25649,i__25650,bls,inst_25653,inst_25664,inst_25652,inst_25660,inst_25661,inst_25655,inst_25646,inst_25654,inst_25671,state_val_25725,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_25676 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_25671,inst_25675);var state_25724__$1 = state_25724;var statearr_25754_25794 = state_25724__$1;(statearr_25754_25794[(2)] = inst_25676);
(statearr_25754_25794[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (9)))
{var state_25724__$1 = state_25724;var statearr_25755_25795 = state_25724__$1;(statearr_25755_25795[(2)] = null);
(statearr_25755_25795[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (5)))
{var inst_25653 = (state_25724[(9)]);var inst_25660 = (state_25724[(22)]);var inst_25661 = (state_25724[(23)]);var inst_25655 = (state_25724[(11)]);var inst_25660__$1 = cljs.core._nth.call(null,inst_25653,inst_25655);var inst_25661__$1 = (inst_25660__$1["id"]);var inst_25662 = [inst_25661__$1,tolerance];var inst_25663 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25662,null));var inst_25664 = cljs.core.concat.call(null,boundarylines_path__$1,inst_25663);var state_25724__$1 = (function (){var statearr_25756 = state_25724;(statearr_25756[(21)] = inst_25664);
(statearr_25756[(22)] = inst_25660__$1);
(statearr_25756[(23)] = inst_25661__$1);
return statearr_25756;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_25757_25796 = state_25724__$1;(statearr_25757_25796[(1)] = (8));
} else
{var statearr_25758_25797 = state_25724__$1;(statearr_25758_25797[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (14)))
{var inst_25683 = (state_25724[(18)]);var inst_25685 = cljs.core.chunked_seq_QMARK_.call(null,inst_25683);var state_25724__$1 = state_25724;if(inst_25685)
{var statearr_25759_25798 = state_25724__$1;(statearr_25759_25798[(1)] = (17));
} else
{var statearr_25760_25799 = state_25724__$1;(statearr_25760_25799[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (16)))
{var inst_25718 = (state_25724[(2)]);var state_25724__$1 = state_25724;var statearr_25761_25800 = state_25724__$1;(statearr_25761_25800[(2)] = inst_25718);
(statearr_25761_25800[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (10)))
{var inst_25653 = (state_25724[(9)]);var inst_25664 = (state_25724[(21)]);var inst_25652 = (state_25724[(10)]);var inst_25660 = (state_25724[(22)]);var inst_25661 = (state_25724[(23)]);var inst_25655 = (state_25724[(11)]);var inst_25646 = (state_25724[(15)]);var inst_25654 = (state_25724[(12)]);var inst_25671 = (state_25724[(24)]);var inst_25671__$1 = (state_25724[(2)]);var inst_25672 = (function (){var collection_cache_path = inst_25671__$1;var general_cache_path = inst_25664;var boundaryline_id = inst_25661;var bl = inst_25660;var seq__25647 = inst_25652;var chunk__25648 = inst_25653;var count__25649 = inst_25654;var i__25650 = inst_25655;var bls = inst_25646;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__25647,chunk__25648,count__25649,i__25650,bls,inst_25653,inst_25664,inst_25652,inst_25660,inst_25661,inst_25655,inst_25646,inst_25654,inst_25671,inst_25671__$1,state_val_25725,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__25647,chunk__25648,count__25649,i__25650,bls,inst_25653,inst_25664,inst_25652,inst_25660,inst_25661,inst_25655,inst_25646,inst_25654,inst_25671,inst_25671__$1,state_val_25725,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_25673 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_25664,inst_25672);var state_25724__$1 = (function (){var statearr_25762 = state_25724;(statearr_25762[(25)] = inst_25673);
(statearr_25762[(24)] = inst_25671__$1);
return statearr_25762;
})();if(cljs.core.truth_(inst_25671__$1))
{var statearr_25763_25801 = state_25724__$1;(statearr_25763_25801[(1)] = (11));
} else
{var statearr_25764_25802 = state_25724__$1;(statearr_25764_25802[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (18)))
{var inst_25693 = (state_25724[(7)]);var inst_25692 = (state_25724[(14)]);var inst_25683 = (state_25724[(18)]);var inst_25692__$1 = cljs.core.first.call(null,inst_25683);var inst_25693__$1 = (inst_25692__$1["id"]);var inst_25694 = [inst_25693__$1,tolerance];var inst_25695 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25694,null));var inst_25696 = cljs.core.concat.call(null,boundarylines_path__$1,inst_25695);var state_25724__$1 = (function (){var statearr_25765 = state_25724;(statearr_25765[(7)] = inst_25693__$1);
(statearr_25765[(14)] = inst_25692__$1);
(statearr_25765[(17)] = inst_25696);
return statearr_25765;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_25766_25803 = state_25724__$1;(statearr_25766_25803[(1)] = (20));
} else
{var statearr_25767_25804 = state_25724__$1;(statearr_25767_25804[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25725 === (8)))
{var inst_25661 = (state_25724[(23)]);var inst_25666 = [inst_25661,tolerance];var inst_25667 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25666,null));var inst_25668 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_25667);var state_25724__$1 = state_25724;var statearr_25768_25805 = state_25724__$1;(statearr_25768_25805[(2)] = inst_25668);
(statearr_25768_25805[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_25772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25772[(0)] = state_machine__5679__auto__);
(statearr_25772[(1)] = (1));
return statearr_25772;
});
var state_machine__5679__auto____1 = (function (state_25724){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25724);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25773){if((e25773 instanceof Object))
{var ex__5682__auto__ = e25773;var statearr_25774_25806 = state_25724;(statearr_25774_25806[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25724);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25807 = state_25724;
state_25724 = G__25807;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25724){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var state__5695__auto__ = (function (){var statearr_25775 = f__5694__auto__.call(null);(statearr_25775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_25775;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__25808){var map__25813 = p__25808;var map__25813__$1 = ((cljs.core.seq_QMARK_.call(null,map__25813))?cljs.core.apply.call(null,cljs.core.hash_map,map__25813):map__25813);var min_zoom = cljs.core.get.call(null,map__25813__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25813,map__25813__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.fetch_from_index.call(null,collection_index,blid)], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25813,map__25813__$1,min_zoom))
,boundaryline_ids));
} else
{var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25813,map__25813__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25813,map__25813__$1,min_zoom))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25813,map__25813__$1,min_zoom){
return (function (p__25814){var vec__25815 = p__25814;var blid = cljs.core.nth.call(null,vec__25815,(0),null);var vec__25816 = cljs.core.nth.call(null,vec__25815,(1),null);var tol = cljs.core.nth.call(null,vec__25816,(0),null);var bl = cljs.core.nth.call(null,vec__25816,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25813,map__25813__$1,min_zoom))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,boundaryline_ids,i_tol):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
}
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,var_args){
var p__25808 = null;if (arguments.length > 5) {
  p__25808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__25808);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__25817){
var app_state = cljs.core.first(arglist__25817);
arglist__25817 = cljs.core.next(arglist__25817);
var boundarylines_path = cljs.core.first(arglist__25817);
arglist__25817 = cljs.core.next(arglist__25817);
var collection_id = cljs.core.first(arglist__25817);
arglist__25817 = cljs.core.next(arglist__25817);
var boundaryline_ids = cljs.core.first(arglist__25817);
arglist__25817 = cljs.core.next(arglist__25817);
var zoom = cljs.core.first(arglist__25817);
var p__25808 = cljs.core.rest(arglist__25817);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__25808);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__25822_25826 = cljs.core.seq.call(null,keys);var chunk__25823_25827 = null;var count__25824_25828 = (0);var i__25825_25829 = (0);while(true){
if((i__25825_25829 < count__25824_25828))
{var k_25830 = cljs.core._nth.call(null,chunk__25823_25827,i__25825_25829);var obj_25831 = (js_index[k_25830]);var geom_25832 = (obj_25831["geojson"]);var feature_25833 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25831["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25831["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25831["compact_name"])], null)], null));var __25834__$1 = (feature_25833["geometry"] = geom_25832);var __25835__$2 = ((feature_25833["properties"])["index_object"] = obj_25831);features.push(feature_25833);
{
var G__25836 = seq__25822_25826;
var G__25837 = chunk__25823_25827;
var G__25838 = count__25824_25828;
var G__25839 = (i__25825_25829 + (1));
seq__25822_25826 = G__25836;
chunk__25823_25827 = G__25837;
count__25824_25828 = G__25838;
i__25825_25829 = G__25839;
continue;
}
} else
{var temp__4126__auto___25840 = cljs.core.seq.call(null,seq__25822_25826);if(temp__4126__auto___25840)
{var seq__25822_25841__$1 = temp__4126__auto___25840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25822_25841__$1))
{var c__4299__auto___25842 = cljs.core.chunk_first.call(null,seq__25822_25841__$1);{
var G__25843 = cljs.core.chunk_rest.call(null,seq__25822_25841__$1);
var G__25844 = c__4299__auto___25842;
var G__25845 = cljs.core.count.call(null,c__4299__auto___25842);
var G__25846 = (0);
seq__25822_25826 = G__25843;
chunk__25823_25827 = G__25844;
count__25824_25828 = G__25845;
i__25825_25829 = G__25846;
continue;
}
} else
{var k_25847 = cljs.core.first.call(null,seq__25822_25841__$1);var obj_25848 = (js_index[k_25847]);var geom_25849 = (obj_25848["geojson"]);var feature_25850 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25848["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25848["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25848["compact_name"])], null)], null));var __25851__$1 = (feature_25850["geometry"] = geom_25849);var __25852__$2 = ((feature_25850["properties"])["index_object"] = obj_25848);features.push(feature_25850);
{
var G__25853 = cljs.core.next.call(null,seq__25822_25841__$1);
var G__25854 = null;
var G__25855 = (0);
var G__25856 = (0);
seq__25822_25826 = G__25853;
chunk__25823_25827 = G__25854;
count__25824_25828 = G__25855;
i__25825_25829 = G__25856;
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
return (function (state_25899){var state_val_25900 = (state_25899[(1)]);if((state_val_25900 === (5)))
{var inst_25897 = (state_25899[(2)]);var state_25899__$1 = state_25899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25899__$1,inst_25897);
} else
{if((state_val_25900 === (4)))
{var state_25899__$1 = state_25899;var statearr_25901_25913 = state_25899__$1;(statearr_25901_25913[(2)] = null);
(statearr_25901_25913[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25900 === (3)))
{var inst_25887 = (state_25899[(7)]);var inst_25894 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_25887);var state_25899__$1 = state_25899;var statearr_25902_25914 = state_25899__$1;(statearr_25902_25914[(2)] = inst_25894);
(statearr_25902_25914[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25900 === (2)))
{var inst_25887 = (state_25899[(7)]);var inst_25887__$1 = (state_25899[(2)]);var inst_25888 = (function (){var bl_coll_index = inst_25887__$1;return ((function (bl_coll_index,inst_25887,inst_25887__$1,state_val_25900,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_25887,inst_25887__$1,state_val_25900,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_25889 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_25888);var inst_25890 = cljs.core.deref.call(null,app_state);var inst_25891 = cljs.core.get_in.call(null,inst_25890,index_path);var inst_25892 = cljs.core._EQ_.call(null,inst_25891,inst_25887__$1);var state_25899__$1 = (function (){var statearr_25903 = state_25899;(statearr_25903[(7)] = inst_25887__$1);
(statearr_25903[(8)] = inst_25889);
return statearr_25903;
})();if(inst_25892)
{var statearr_25904_25915 = state_25899__$1;(statearr_25904_25915[(1)] = (3));
} else
{var statearr_25905_25916 = state_25899__$1;(statearr_25905_25916[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25900 === (1)))
{var inst_25885 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_25899__$1 = state_25899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25899__$1,(2),inst_25885);
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
var state_machine__5679__auto____0 = (function (){var statearr_25909 = [null,null,null,null,null,null,null,null,null];(statearr_25909[(0)] = state_machine__5679__auto__);
(statearr_25909[(1)] = (1));
return statearr_25909;
});
var state_machine__5679__auto____1 = (function (state_25899){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25899);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25910){if((e25910 instanceof Object))
{var ex__5682__auto__ = e25910;var statearr_25911_25917 = state_25899;(statearr_25911_25917[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25918 = state_25899;
state_25899 = G__25918;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25899){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_25912 = f__5694__auto__.call(null);(statearr_25912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_25912;
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
