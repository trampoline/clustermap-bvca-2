// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__25504){var vec__25505 = p__25504;var z = cljs.core.nth.call(null,vec__25505,(0),null);var t = cljs.core.nth.call(null,vec__25505,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
return (function (state_25716){var state_val_25717 = (state_25716[(1)]);if((state_val_25717 === (7)))
{var inst_25712 = (state_25716[(2)]);var state_25716__$1 = state_25716;var statearr_25718_25768 = state_25716__$1;(statearr_25718_25768[(2)] = inst_25712);
(statearr_25718_25768[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (20)))
{var inst_25685 = (state_25716[(7)]);var inst_25690 = [inst_25685,tolerance];var inst_25691 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25690,null));var inst_25692 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_25691);var state_25716__$1 = state_25716;var statearr_25719_25769 = state_25716__$1;(statearr_25719_25769[(2)] = inst_25692);
(statearr_25719_25769[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (1)))
{var state_25716__$1 = state_25716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25716__$1,(2),comm);
} else
{if((state_val_25717 === (24)))
{var state_25716__$1 = state_25716;var statearr_25720_25770 = state_25716__$1;(statearr_25720_25770[(2)] = null);
(statearr_25720_25770[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (4)))
{var inst_25714 = (state_25716[(2)]);var state_25716__$1 = (function (){var statearr_25721 = state_25716;(statearr_25721[(8)] = inst_25714);
return statearr_25721;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25716__$1,true);
} else
{if((state_val_25717 === (15)))
{var state_25716__$1 = state_25716;var statearr_25725_25771 = state_25716__$1;(statearr_25725_25771[(2)] = null);
(statearr_25725_25771[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (21)))
{var state_25716__$1 = state_25716;var statearr_25726_25772 = state_25716__$1;(statearr_25726_25772[(2)] = null);
(statearr_25726_25772[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (13)))
{var inst_25647 = (state_25716[(9)]);var inst_25644 = (state_25716[(10)]);var inst_25646 = (state_25716[(11)]);var inst_25645 = (state_25716[(12)]);var inst_25671 = (state_25716[(2)]);var inst_25672 = (inst_25647 + (1));var tmp25722 = inst_25644;var tmp25723 = inst_25646;var tmp25724 = inst_25645;var inst_25644__$1 = tmp25722;var inst_25645__$1 = tmp25724;var inst_25646__$1 = tmp25723;var inst_25647__$1 = inst_25672;var state_25716__$1 = (function (){var statearr_25727 = state_25716;(statearr_25727[(9)] = inst_25647__$1);
(statearr_25727[(10)] = inst_25644__$1);
(statearr_25727[(11)] = inst_25646__$1);
(statearr_25727[(12)] = inst_25645__$1);
(statearr_25727[(13)] = inst_25671);
return statearr_25727;
})();var statearr_25728_25773 = state_25716__$1;(statearr_25728_25773[(2)] = null);
(statearr_25728_25773[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (22)))
{var inst_25647 = (state_25716[(9)]);var inst_25685 = (state_25716[(7)]);var inst_25684 = (state_25716[(14)]);var inst_25675 = (state_25716[(15)]);var inst_25646 = (state_25716[(11)]);var inst_25645 = (state_25716[(12)]);var inst_25688 = (state_25716[(16)]);var inst_25638 = (state_25716[(17)]);var inst_25695 = (state_25716[(18)]);var inst_25695__$1 = (state_25716[(2)]);var inst_25696 = (function (){var temp__4126__auto__ = inst_25675;var seq__25639 = inst_25675;var bls = inst_25638;var boundaryline_id = inst_25685;var general_cache_path = inst_25688;var count__25641 = inst_25646;var bl = inst_25684;var collection_cache_path = inst_25695__$1;var chunk__25640 = inst_25645;var i__25642 = inst_25647;return ((function (temp__4126__auto__,seq__25639,bls,boundaryline_id,general_cache_path,count__25641,bl,collection_cache_path,chunk__25640,i__25642,inst_25647,inst_25685,inst_25684,inst_25675,inst_25646,inst_25645,inst_25688,inst_25638,inst_25695,inst_25695__$1,state_val_25717,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(temp__4126__auto__,seq__25639,bls,boundaryline_id,general_cache_path,count__25641,bl,collection_cache_path,chunk__25640,i__25642,inst_25647,inst_25685,inst_25684,inst_25675,inst_25646,inst_25645,inst_25688,inst_25638,inst_25695,inst_25695__$1,state_val_25717,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_25697 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_25688,inst_25696);var state_25716__$1 = (function (){var statearr_25729 = state_25716;(statearr_25729[(19)] = inst_25697);
(statearr_25729[(18)] = inst_25695__$1);
return statearr_25729;
})();if(cljs.core.truth_(inst_25695__$1))
{var statearr_25730_25774 = state_25716__$1;(statearr_25730_25774[(1)] = (23));
} else
{var statearr_25731_25775 = state_25716__$1;(statearr_25731_25775[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (6)))
{var inst_25675 = (state_25716[(15)]);var inst_25644 = (state_25716[(10)]);var inst_25675__$1 = cljs.core.seq.call(null,inst_25644);var state_25716__$1 = (function (){var statearr_25732 = state_25716;(statearr_25732[(15)] = inst_25675__$1);
return statearr_25732;
})();if(inst_25675__$1)
{var statearr_25733_25776 = state_25716__$1;(statearr_25733_25776[(1)] = (14));
} else
{var statearr_25734_25777 = state_25716__$1;(statearr_25734_25777[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (25)))
{var inst_25675 = (state_25716[(15)]);var inst_25703 = (state_25716[(2)]);var inst_25704 = cljs.core.next.call(null,inst_25675);var inst_25644 = inst_25704;var inst_25645 = null;var inst_25646 = (0);var inst_25647 = (0);var state_25716__$1 = (function (){var statearr_25735 = state_25716;(statearr_25735[(9)] = inst_25647);
(statearr_25735[(10)] = inst_25644);
(statearr_25735[(11)] = inst_25646);
(statearr_25735[(20)] = inst_25703);
(statearr_25735[(12)] = inst_25645);
return statearr_25735;
})();var statearr_25736_25778 = state_25716__$1;(statearr_25736_25778[(2)] = null);
(statearr_25736_25778[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (17)))
{var inst_25675 = (state_25716[(15)]);var inst_25679 = cljs.core.chunk_first.call(null,inst_25675);var inst_25680 = cljs.core.chunk_rest.call(null,inst_25675);var inst_25681 = cljs.core.count.call(null,inst_25679);var inst_25644 = inst_25680;var inst_25645 = inst_25679;var inst_25646 = inst_25681;var inst_25647 = (0);var state_25716__$1 = (function (){var statearr_25737 = state_25716;(statearr_25737[(9)] = inst_25647);
(statearr_25737[(10)] = inst_25644);
(statearr_25737[(11)] = inst_25646);
(statearr_25737[(12)] = inst_25645);
return statearr_25737;
})();var statearr_25738_25779 = state_25716__$1;(statearr_25738_25779[(2)] = null);
(statearr_25738_25779[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (3)))
{var inst_25647 = (state_25716[(9)]);var inst_25646 = (state_25716[(11)]);var inst_25649 = (inst_25647 < inst_25646);var inst_25650 = inst_25649;var state_25716__$1 = state_25716;if(cljs.core.truth_(inst_25650))
{var statearr_25739_25780 = state_25716__$1;(statearr_25739_25780[(1)] = (5));
} else
{var statearr_25740_25781 = state_25716__$1;(statearr_25740_25781[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (12)))
{var state_25716__$1 = state_25716;var statearr_25741_25782 = state_25716__$1;(statearr_25741_25782[(2)] = null);
(statearr_25741_25782[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (2)))
{var inst_25638 = (state_25716[(17)]);var inst_25638__$1 = (state_25716[(2)]);var inst_25643 = cljs.core.seq.call(null,inst_25638__$1);var inst_25644 = inst_25643;var inst_25645 = null;var inst_25646 = (0);var inst_25647 = (0);var state_25716__$1 = (function (){var statearr_25742 = state_25716;(statearr_25742[(9)] = inst_25647);
(statearr_25742[(10)] = inst_25644);
(statearr_25742[(11)] = inst_25646);
(statearr_25742[(12)] = inst_25645);
(statearr_25742[(17)] = inst_25638__$1);
return statearr_25742;
})();var statearr_25743_25783 = state_25716__$1;(statearr_25743_25783[(2)] = null);
(statearr_25743_25783[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (23)))
{var inst_25647 = (state_25716[(9)]);var inst_25685 = (state_25716[(7)]);var inst_25684 = (state_25716[(14)]);var inst_25675 = (state_25716[(15)]);var inst_25646 = (state_25716[(11)]);var inst_25645 = (state_25716[(12)]);var inst_25688 = (state_25716[(16)]);var inst_25638 = (state_25716[(17)]);var inst_25695 = (state_25716[(18)]);var inst_25699 = (function (){var temp__4126__auto__ = inst_25675;var seq__25639 = inst_25675;var bls = inst_25638;var boundaryline_id = inst_25685;var general_cache_path = inst_25688;var count__25641 = inst_25646;var bl = inst_25684;var collection_cache_path = inst_25695;var chunk__25640 = inst_25645;var i__25642 = inst_25647;return ((function (temp__4126__auto__,seq__25639,bls,boundaryline_id,general_cache_path,count__25641,bl,collection_cache_path,chunk__25640,i__25642,inst_25647,inst_25685,inst_25684,inst_25675,inst_25646,inst_25645,inst_25688,inst_25638,inst_25695,state_val_25717,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(temp__4126__auto__,seq__25639,bls,boundaryline_id,general_cache_path,count__25641,bl,collection_cache_path,chunk__25640,i__25642,inst_25647,inst_25685,inst_25684,inst_25675,inst_25646,inst_25645,inst_25688,inst_25638,inst_25695,state_val_25717,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_25700 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_25695,inst_25699);var state_25716__$1 = state_25716;var statearr_25744_25784 = state_25716__$1;(statearr_25744_25784[(2)] = inst_25700);
(statearr_25744_25784[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (19)))
{var inst_25707 = (state_25716[(2)]);var state_25716__$1 = state_25716;var statearr_25745_25785 = state_25716__$1;(statearr_25745_25785[(2)] = inst_25707);
(statearr_25745_25785[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (11)))
{var inst_25653 = (state_25716[(21)]);var inst_25647 = (state_25716[(9)]);var inst_25663 = (state_25716[(22)]);var inst_25644 = (state_25716[(10)]);var inst_25652 = (state_25716[(23)]);var inst_25646 = (state_25716[(11)]);var inst_25645 = (state_25716[(12)]);var inst_25638 = (state_25716[(17)]);var inst_25656 = (state_25716[(24)]);var inst_25667 = (function (){var collection_cache_path = inst_25663;var general_cache_path = inst_25656;var boundaryline_id = inst_25653;var bl = inst_25652;var seq__25639 = inst_25644;var chunk__25640 = inst_25645;var count__25641 = inst_25646;var i__25642 = inst_25647;var bls = inst_25638;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__25639,chunk__25640,count__25641,i__25642,bls,inst_25653,inst_25647,inst_25663,inst_25644,inst_25652,inst_25646,inst_25645,inst_25638,inst_25656,state_val_25717,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__25639,chunk__25640,count__25641,i__25642,bls,inst_25653,inst_25647,inst_25663,inst_25644,inst_25652,inst_25646,inst_25645,inst_25638,inst_25656,state_val_25717,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_25668 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_25663,inst_25667);var state_25716__$1 = state_25716;var statearr_25746_25786 = state_25716__$1;(statearr_25746_25786[(2)] = inst_25668);
(statearr_25746_25786[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (9)))
{var state_25716__$1 = state_25716;var statearr_25747_25787 = state_25716__$1;(statearr_25747_25787[(2)] = null);
(statearr_25747_25787[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (5)))
{var inst_25653 = (state_25716[(21)]);var inst_25647 = (state_25716[(9)]);var inst_25652 = (state_25716[(23)]);var inst_25645 = (state_25716[(12)]);var inst_25652__$1 = cljs.core._nth.call(null,inst_25645,inst_25647);var inst_25653__$1 = (inst_25652__$1["id"]);var inst_25654 = [inst_25653__$1,tolerance];var inst_25655 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25654,null));var inst_25656 = cljs.core.concat.call(null,boundarylines_path__$1,inst_25655);var state_25716__$1 = (function (){var statearr_25748 = state_25716;(statearr_25748[(21)] = inst_25653__$1);
(statearr_25748[(23)] = inst_25652__$1);
(statearr_25748[(24)] = inst_25656);
return statearr_25748;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_25749_25788 = state_25716__$1;(statearr_25749_25788[(1)] = (8));
} else
{var statearr_25750_25789 = state_25716__$1;(statearr_25750_25789[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (14)))
{var inst_25675 = (state_25716[(15)]);var inst_25677 = cljs.core.chunked_seq_QMARK_.call(null,inst_25675);var state_25716__$1 = state_25716;if(inst_25677)
{var statearr_25751_25790 = state_25716__$1;(statearr_25751_25790[(1)] = (17));
} else
{var statearr_25752_25791 = state_25716__$1;(statearr_25752_25791[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (16)))
{var inst_25710 = (state_25716[(2)]);var state_25716__$1 = state_25716;var statearr_25753_25792 = state_25716__$1;(statearr_25753_25792[(2)] = inst_25710);
(statearr_25753_25792[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (10)))
{var inst_25653 = (state_25716[(21)]);var inst_25647 = (state_25716[(9)]);var inst_25663 = (state_25716[(22)]);var inst_25644 = (state_25716[(10)]);var inst_25652 = (state_25716[(23)]);var inst_25646 = (state_25716[(11)]);var inst_25645 = (state_25716[(12)]);var inst_25638 = (state_25716[(17)]);var inst_25656 = (state_25716[(24)]);var inst_25663__$1 = (state_25716[(2)]);var inst_25664 = (function (){var collection_cache_path = inst_25663__$1;var general_cache_path = inst_25656;var boundaryline_id = inst_25653;var bl = inst_25652;var seq__25639 = inst_25644;var chunk__25640 = inst_25645;var count__25641 = inst_25646;var i__25642 = inst_25647;var bls = inst_25638;return ((function (collection_cache_path,general_cache_path,boundaryline_id,bl,seq__25639,chunk__25640,count__25641,i__25642,bls,inst_25653,inst_25647,inst_25663,inst_25644,inst_25652,inst_25646,inst_25645,inst_25638,inst_25656,inst_25663__$1,state_val_25717,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm){
return (function (old){return bl;
});
;})(collection_cache_path,general_cache_path,boundaryline_id,bl,seq__25639,chunk__25640,count__25641,i__25642,bls,inst_25653,inst_25647,inst_25663,inst_25644,inst_25652,inst_25646,inst_25645,inst_25638,inst_25656,inst_25663__$1,state_val_25717,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var inst_25665 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,inst_25656,inst_25664);var state_25716__$1 = (function (){var statearr_25754 = state_25716;(statearr_25754[(22)] = inst_25663__$1);
(statearr_25754[(25)] = inst_25665);
return statearr_25754;
})();if(cljs.core.truth_(inst_25663__$1))
{var statearr_25755_25793 = state_25716__$1;(statearr_25755_25793[(1)] = (11));
} else
{var statearr_25756_25794 = state_25716__$1;(statearr_25756_25794[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (18)))
{var inst_25685 = (state_25716[(7)]);var inst_25684 = (state_25716[(14)]);var inst_25675 = (state_25716[(15)]);var inst_25684__$1 = cljs.core.first.call(null,inst_25675);var inst_25685__$1 = (inst_25684__$1["id"]);var inst_25686 = [inst_25685__$1,tolerance];var inst_25687 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25686,null));var inst_25688 = cljs.core.concat.call(null,boundarylines_path__$1,inst_25687);var state_25716__$1 = (function (){var statearr_25757 = state_25716;(statearr_25757[(7)] = inst_25685__$1);
(statearr_25757[(14)] = inst_25684__$1);
(statearr_25757[(16)] = inst_25688);
return statearr_25757;
})();if(cljs.core.truth_(collection_boundarylines_path__$1))
{var statearr_25758_25795 = state_25716__$1;(statearr_25758_25795[(1)] = (20));
} else
{var statearr_25759_25796 = state_25716__$1;(statearr_25759_25796[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25717 === (8)))
{var inst_25653 = (state_25716[(21)]);var inst_25658 = [inst_25653,tolerance];var inst_25659 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25658,null));var inst_25660 = cljs.core.concat.call(null,collection_boundarylines_path__$1,inst_25659);var state_25716__$1 = state_25716;var statearr_25760_25797 = state_25716__$1;(statearr_25760_25797[(2)] = inst_25660);
(statearr_25760_25797[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_25764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25764[(0)] = state_machine__5679__auto__);
(statearr_25764[(1)] = (1));
return statearr_25764;
});
var state_machine__5679__auto____1 = (function (state_25716){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25716);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25765){if((e25765 instanceof Object))
{var ex__5682__auto__ = e25765;var statearr_25766_25798 = state_25716;(statearr_25766_25798[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25716);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25799 = state_25716;
state_25716 = G__25799;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25716){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,collection_boundarylines_path__$1,comm))
})();var state__5695__auto__ = (function (){var statearr_25767 = f__5694__auto__.call(null);(statearr_25767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_25767;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__25800){var map__25805 = p__25800;var map__25805__$1 = ((cljs.core.seq_QMARK_.call(null,map__25805))?cljs.core.apply.call(null,cljs.core.hash_map,map__25805):map__25805);var min_zoom = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25805,map__25805__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.fetch_from_index.call(null,collection_index,blid)], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25805,map__25805__$1,min_zoom))
,boundaryline_ids));
} else
{var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25805,map__25805__$1,min_zoom){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25805,map__25805__$1,min_zoom))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25805,map__25805__$1,min_zoom){
return (function (p__25806){var vec__25807 = p__25806;var blid = cljs.core.nth.call(null,vec__25807,(0),null);var vec__25808 = cljs.core.nth.call(null,vec__25807,(1),null);var tol = cljs.core.nth.call(null,vec__25808,(0),null);var bl = cljs.core.nth.call(null,vec__25808,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(general_cache_path,general_cache,collection_cache_path,collection_cache,i_tol,best_versions,boundarylines_path__$1,all_collections_path,collection_path,collection_index_path,collection_index,map__25805,map__25805__$1,min_zoom))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,boundaryline_ids,i_tol):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
}
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,var_args){
var p__25800 = null;if (arguments.length > 5) {
  p__25800 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__25800);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__25809){
var app_state = cljs.core.first(arglist__25809);
arglist__25809 = cljs.core.next(arglist__25809);
var boundarylines_path = cljs.core.first(arglist__25809);
arglist__25809 = cljs.core.next(arglist__25809);
var collection_id = cljs.core.first(arglist__25809);
arglist__25809 = cljs.core.next(arglist__25809);
var boundaryline_ids = cljs.core.first(arglist__25809);
arglist__25809 = cljs.core.next(arglist__25809);
var zoom = cljs.core.first(arglist__25809);
var p__25800 = cljs.core.rest(arglist__25809);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,boundaryline_ids,zoom,p__25800);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__25814_25818 = cljs.core.seq.call(null,keys);var chunk__25815_25819 = null;var count__25816_25820 = (0);var i__25817_25821 = (0);while(true){
if((i__25817_25821 < count__25816_25820))
{var k_25822 = cljs.core._nth.call(null,chunk__25815_25819,i__25817_25821);var obj_25823 = (js_index[k_25822]);var geom_25824 = (obj_25823["geojson"]);var feature_25825 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25823["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25823["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25823["compact_name"])], null)], null));var __25826__$1 = (feature_25825["geometry"] = geom_25824);var __25827__$2 = ((feature_25825["properties"])["index_object"] = obj_25823);features.push(feature_25825);
{
var G__25828 = seq__25814_25818;
var G__25829 = chunk__25815_25819;
var G__25830 = count__25816_25820;
var G__25831 = (i__25817_25821 + (1));
seq__25814_25818 = G__25828;
chunk__25815_25819 = G__25829;
count__25816_25820 = G__25830;
i__25817_25821 = G__25831;
continue;
}
} else
{var temp__4126__auto___25832 = cljs.core.seq.call(null,seq__25814_25818);if(temp__4126__auto___25832)
{var seq__25814_25833__$1 = temp__4126__auto___25832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25814_25833__$1))
{var c__4299__auto___25834 = cljs.core.chunk_first.call(null,seq__25814_25833__$1);{
var G__25835 = cljs.core.chunk_rest.call(null,seq__25814_25833__$1);
var G__25836 = c__4299__auto___25834;
var G__25837 = cljs.core.count.call(null,c__4299__auto___25834);
var G__25838 = (0);
seq__25814_25818 = G__25835;
chunk__25815_25819 = G__25836;
count__25816_25820 = G__25837;
i__25817_25821 = G__25838;
continue;
}
} else
{var k_25839 = cljs.core.first.call(null,seq__25814_25833__$1);var obj_25840 = (js_index[k_25839]);var geom_25841 = (obj_25840["geojson"]);var feature_25842 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_25840["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_25840["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_25840["compact_name"])], null)], null));var __25843__$1 = (feature_25842["geometry"] = geom_25841);var __25844__$2 = ((feature_25842["properties"])["index_object"] = obj_25840);features.push(feature_25842);
{
var G__25845 = cljs.core.next.call(null,seq__25814_25833__$1);
var G__25846 = null;
var G__25847 = (0);
var G__25848 = (0);
seq__25814_25818 = G__25845;
chunk__25815_25819 = G__25846;
count__25816_25820 = G__25847;
i__25817_25821 = G__25848;
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
return (function (state_25891){var state_val_25892 = (state_25891[(1)]);if((state_val_25892 === (5)))
{var inst_25889 = (state_25891[(2)]);var state_25891__$1 = state_25891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25891__$1,inst_25889);
} else
{if((state_val_25892 === (4)))
{var state_25891__$1 = state_25891;var statearr_25893_25905 = state_25891__$1;(statearr_25893_25905[(2)] = null);
(statearr_25893_25905[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (3)))
{var inst_25879 = (state_25891[(7)]);var inst_25886 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_25879);var state_25891__$1 = state_25891;var statearr_25894_25906 = state_25891__$1;(statearr_25894_25906[(2)] = inst_25886);
(statearr_25894_25906[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (2)))
{var inst_25879 = (state_25891[(7)]);var inst_25879__$1 = (state_25891[(2)]);var inst_25880 = (function (){var bl_coll_index = inst_25879__$1;return ((function (bl_coll_index,inst_25879,inst_25879__$1,state_val_25892,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_25879,inst_25879__$1,state_val_25892,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_25881 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_25880);var inst_25882 = cljs.core.deref.call(null,app_state);var inst_25883 = cljs.core.get_in.call(null,inst_25882,index_path);var inst_25884 = cljs.core._EQ_.call(null,inst_25883,inst_25879__$1);var state_25891__$1 = (function (){var statearr_25895 = state_25891;(statearr_25895[(8)] = inst_25881);
(statearr_25895[(7)] = inst_25879__$1);
return statearr_25895;
})();if(inst_25884)
{var statearr_25896_25907 = state_25891__$1;(statearr_25896_25907[(1)] = (3));
} else
{var statearr_25897_25908 = state_25891__$1;(statearr_25897_25908[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (1)))
{var inst_25877 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_25891__$1 = state_25891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25891__$1,(2),inst_25877);
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
var state_machine__5679__auto____0 = (function (){var statearr_25901 = [null,null,null,null,null,null,null,null,null];(statearr_25901[(0)] = state_machine__5679__auto__);
(statearr_25901[(1)] = (1));
return statearr_25901;
});
var state_machine__5679__auto____1 = (function (state_25891){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25902){if((e25902 instanceof Object))
{var ex__5682__auto__ = e25902;var statearr_25903_25909 = state_25891;(statearr_25903_25909[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25910 = state_25891;
state_25891 = G__25910;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25891){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_25904 = f__5694__auto__.call(null);(statearr_25904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_25904;
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
