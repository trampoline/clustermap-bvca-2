// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('domina.xpath');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.call(null,"body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__51756_51762 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__51757_51763 = null;var count__51758_51764 = (0);var i__51759_51765 = (0);while(true){
if((i__51759_51765 < count__51758_51764))
{var vec__51760_51766 = cljs.core._nth.call(null,chunk__51757_51763,i__51759_51765);var v_51767 = cljs.core.nth.call(null,vec__51760_51766,(0),null);var body_class_51768 = cljs.core.nth.call(null,vec__51760_51766,(1),null);if(cljs.core._EQ_.call(null,v_51767,view))
{domina.add_class_BANG_.call(null,body,body_class_51768);
} else
{domina.remove_class_BANG_.call(null,body,body_class_51768);
}
{
var G__51769 = seq__51756_51762;
var G__51770 = chunk__51757_51763;
var G__51771 = count__51758_51764;
var G__51772 = (i__51759_51765 + (1));
seq__51756_51762 = G__51769;
chunk__51757_51763 = G__51770;
count__51758_51764 = G__51771;
i__51759_51765 = G__51772;
continue;
}
} else
{var temp__4126__auto___51773 = cljs.core.seq.call(null,seq__51756_51762);if(temp__4126__auto___51773)
{var seq__51756_51774__$1 = temp__4126__auto___51773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51756_51774__$1))
{var c__4314__auto___51775 = cljs.core.chunk_first.call(null,seq__51756_51774__$1);{
var G__51776 = cljs.core.chunk_rest.call(null,seq__51756_51774__$1);
var G__51777 = c__4314__auto___51775;
var G__51778 = cljs.core.count.call(null,c__4314__auto___51775);
var G__51779 = (0);
seq__51756_51762 = G__51776;
chunk__51757_51763 = G__51777;
count__51758_51764 = G__51778;
i__51759_51765 = G__51779;
continue;
}
} else
{var vec__51761_51780 = cljs.core.first.call(null,seq__51756_51774__$1);var v_51781 = cljs.core.nth.call(null,vec__51761_51780,(0),null);var body_class_51782 = cljs.core.nth.call(null,vec__51761_51780,(1),null);if(cljs.core._EQ_.call(null,v_51781,view))
{domina.add_class_BANG_.call(null,body,body_class_51782);
} else
{domina.remove_class_BANG_.call(null,body,body_class_51782);
}
{
var G__51783 = cljs.core.next.call(null,seq__51756_51774__$1);
var G__51784 = null;
var G__51785 = (0);
var G__51786 = (0);
seq__51756_51762 = G__51783;
chunk__51757_51763 = G__51784;
count__51758_51764 = G__51785;
i__51759_51765 = G__51786;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__51793 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__51794 = null;var count__51795 = (0);var i__51796 = (0);while(true){
if((i__51796 < count__51795))
{var vec__51797 = cljs.core._nth.call(null,chunk__51794,i__51796);var v = cljs.core.nth.call(null,vec__51797,(0),null);var _ = cljs.core.nth.call(null,vec__51797,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__51793,chunk__51794,count__51795,i__51796,vec__51797,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__51793,chunk__51794,count__51795,i__51796,vec__51797,v,_))
);
{
var G__51799 = seq__51793;
var G__51800 = chunk__51794;
var G__51801 = count__51795;
var G__51802 = (i__51796 + (1));
seq__51793 = G__51799;
chunk__51794 = G__51800;
count__51795 = G__51801;
i__51796 = G__51802;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51793);if(temp__4126__auto__)
{var seq__51793__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51793__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__51793__$1);{
var G__51803 = cljs.core.chunk_rest.call(null,seq__51793__$1);
var G__51804 = c__4314__auto__;
var G__51805 = cljs.core.count.call(null,c__4314__auto__);
var G__51806 = (0);
seq__51793 = G__51803;
chunk__51794 = G__51804;
count__51795 = G__51805;
i__51796 = G__51806;
continue;
}
} else
{var vec__51798 = cljs.core.first.call(null,seq__51793__$1);var v = cljs.core.nth.call(null,vec__51798,(0),null);var _ = cljs.core.nth.call(null,vec__51798,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__51793,chunk__51794,count__51795,i__51796,vec__51798,v,_,seq__51793__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__51793,chunk__51794,count__51795,i__51796,vec__51798,v,_,seq__51793__$1,temp__4126__auto__))
);
{
var G__51807 = cljs.core.next.call(null,seq__51793__$1);
var G__51808 = null;
var G__51809 = (0);
var G__51810 = (0);
seq__51793 = G__51807;
chunk__51794 = G__51808;
count__51795 = G__51809;
i__51796 = G__51810;
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
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});

//# sourceMappingURL=nav.js.map