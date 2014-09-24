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
var seq__26670_26676 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26671_26677 = null;var count__26672_26678 = (0);var i__26673_26679 = (0);while(true){
if((i__26673_26679 < count__26672_26678))
{var vec__26674_26680 = cljs.core._nth.call(null,chunk__26671_26677,i__26673_26679);var v_26681 = cljs.core.nth.call(null,vec__26674_26680,(0),null);var body_class_26682 = cljs.core.nth.call(null,vec__26674_26680,(1),null);if(cljs.core._EQ_.call(null,v_26681,view))
{domina.add_class_BANG_.call(null,body,body_class_26682);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26682);
}
{
var G__26683 = seq__26670_26676;
var G__26684 = chunk__26671_26677;
var G__26685 = count__26672_26678;
var G__26686 = (i__26673_26679 + (1));
seq__26670_26676 = G__26683;
chunk__26671_26677 = G__26684;
count__26672_26678 = G__26685;
i__26673_26679 = G__26686;
continue;
}
} else
{var temp__4126__auto___26687 = cljs.core.seq.call(null,seq__26670_26676);if(temp__4126__auto___26687)
{var seq__26670_26688__$1 = temp__4126__auto___26687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26670_26688__$1))
{var c__4314__auto___26689 = cljs.core.chunk_first.call(null,seq__26670_26688__$1);{
var G__26690 = cljs.core.chunk_rest.call(null,seq__26670_26688__$1);
var G__26691 = c__4314__auto___26689;
var G__26692 = cljs.core.count.call(null,c__4314__auto___26689);
var G__26693 = (0);
seq__26670_26676 = G__26690;
chunk__26671_26677 = G__26691;
count__26672_26678 = G__26692;
i__26673_26679 = G__26693;
continue;
}
} else
{var vec__26675_26694 = cljs.core.first.call(null,seq__26670_26688__$1);var v_26695 = cljs.core.nth.call(null,vec__26675_26694,(0),null);var body_class_26696 = cljs.core.nth.call(null,vec__26675_26694,(1),null);if(cljs.core._EQ_.call(null,v_26695,view))
{domina.add_class_BANG_.call(null,body,body_class_26696);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26696);
}
{
var G__26697 = cljs.core.next.call(null,seq__26670_26688__$1);
var G__26698 = null;
var G__26699 = (0);
var G__26700 = (0);
seq__26670_26676 = G__26697;
chunk__26671_26677 = G__26698;
count__26672_26678 = G__26699;
i__26673_26679 = G__26700;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__26707 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26708 = null;var count__26709 = (0);var i__26710 = (0);while(true){
if((i__26710 < count__26709))
{var vec__26711 = cljs.core._nth.call(null,chunk__26708,i__26710);var v = cljs.core.nth.call(null,vec__26711,(0),null);var _ = cljs.core.nth.call(null,vec__26711,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26707,chunk__26708,count__26709,i__26710,vec__26711,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26707,chunk__26708,count__26709,i__26710,vec__26711,v,_))
);
{
var G__26713 = seq__26707;
var G__26714 = chunk__26708;
var G__26715 = count__26709;
var G__26716 = (i__26710 + (1));
seq__26707 = G__26713;
chunk__26708 = G__26714;
count__26709 = G__26715;
i__26710 = G__26716;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26707);if(temp__4126__auto__)
{var seq__26707__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26707__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__26707__$1);{
var G__26717 = cljs.core.chunk_rest.call(null,seq__26707__$1);
var G__26718 = c__4314__auto__;
var G__26719 = cljs.core.count.call(null,c__4314__auto__);
var G__26720 = (0);
seq__26707 = G__26717;
chunk__26708 = G__26718;
count__26709 = G__26719;
i__26710 = G__26720;
continue;
}
} else
{var vec__26712 = cljs.core.first.call(null,seq__26707__$1);var v = cljs.core.nth.call(null,vec__26712,(0),null);var _ = cljs.core.nth.call(null,vec__26712,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26707,chunk__26708,count__26709,i__26710,vec__26712,v,_,seq__26707__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26707,chunk__26708,count__26709,i__26710,vec__26712,v,_,seq__26707__$1,temp__4126__auto__))
);
{
var G__26721 = cljs.core.next.call(null,seq__26707__$1);
var G__26722 = null;
var G__26723 = (0);
var G__26724 = (0);
seq__26707 = G__26721;
chunk__26708 = G__26722;
count__26709 = G__26723;
i__26710 = G__26724;
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
