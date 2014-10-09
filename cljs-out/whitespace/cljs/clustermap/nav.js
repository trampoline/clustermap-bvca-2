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
var seq__14701_14707 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14702_14708 = null;var count__14703_14709 = (0);var i__14704_14710 = (0);while(true){
if((i__14704_14710 < count__14703_14709))
{var vec__14705_14711 = cljs.core._nth.call(null,chunk__14702_14708,i__14704_14710);var v_14712 = cljs.core.nth.call(null,vec__14705_14711,(0),null);var body_class_14713 = cljs.core.nth.call(null,vec__14705_14711,(1),null);if(cljs.core._EQ_.call(null,v_14712,view))
{domina.add_class_BANG_.call(null,body,body_class_14713);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14713);
}
{
var G__14714 = seq__14701_14707;
var G__14715 = chunk__14702_14708;
var G__14716 = count__14703_14709;
var G__14717 = (i__14704_14710 + (1));
seq__14701_14707 = G__14714;
chunk__14702_14708 = G__14715;
count__14703_14709 = G__14716;
i__14704_14710 = G__14717;
continue;
}
} else
{var temp__4126__auto___14718 = cljs.core.seq.call(null,seq__14701_14707);if(temp__4126__auto___14718)
{var seq__14701_14719__$1 = temp__4126__auto___14718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14701_14719__$1))
{var c__4314__auto___14720 = cljs.core.chunk_first.call(null,seq__14701_14719__$1);{
var G__14721 = cljs.core.chunk_rest.call(null,seq__14701_14719__$1);
var G__14722 = c__4314__auto___14720;
var G__14723 = cljs.core.count.call(null,c__4314__auto___14720);
var G__14724 = (0);
seq__14701_14707 = G__14721;
chunk__14702_14708 = G__14722;
count__14703_14709 = G__14723;
i__14704_14710 = G__14724;
continue;
}
} else
{var vec__14706_14725 = cljs.core.first.call(null,seq__14701_14719__$1);var v_14726 = cljs.core.nth.call(null,vec__14706_14725,(0),null);var body_class_14727 = cljs.core.nth.call(null,vec__14706_14725,(1),null);if(cljs.core._EQ_.call(null,v_14726,view))
{domina.add_class_BANG_.call(null,body,body_class_14727);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14727);
}
{
var G__14728 = cljs.core.next.call(null,seq__14701_14719__$1);
var G__14729 = null;
var G__14730 = (0);
var G__14731 = (0);
seq__14701_14707 = G__14728;
chunk__14702_14708 = G__14729;
count__14703_14709 = G__14730;
i__14704_14710 = G__14731;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14738 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14739 = null;var count__14740 = (0);var i__14741 = (0);while(true){
if((i__14741 < count__14740))
{var vec__14742 = cljs.core._nth.call(null,chunk__14739,i__14741);var v = cljs.core.nth.call(null,vec__14742,(0),null);var _ = cljs.core.nth.call(null,vec__14742,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14738,chunk__14739,count__14740,i__14741,vec__14742,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14738,chunk__14739,count__14740,i__14741,vec__14742,v,_))
);
{
var G__14744 = seq__14738;
var G__14745 = chunk__14739;
var G__14746 = count__14740;
var G__14747 = (i__14741 + (1));
seq__14738 = G__14744;
chunk__14739 = G__14745;
count__14740 = G__14746;
i__14741 = G__14747;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14738);if(temp__4126__auto__)
{var seq__14738__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14738__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__14738__$1);{
var G__14748 = cljs.core.chunk_rest.call(null,seq__14738__$1);
var G__14749 = c__4314__auto__;
var G__14750 = cljs.core.count.call(null,c__4314__auto__);
var G__14751 = (0);
seq__14738 = G__14748;
chunk__14739 = G__14749;
count__14740 = G__14750;
i__14741 = G__14751;
continue;
}
} else
{var vec__14743 = cljs.core.first.call(null,seq__14738__$1);var v = cljs.core.nth.call(null,vec__14743,(0),null);var _ = cljs.core.nth.call(null,vec__14743,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14738,chunk__14739,count__14740,i__14741,vec__14743,v,_,seq__14738__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14738,chunk__14739,count__14740,i__14741,vec__14743,v,_,seq__14738__$1,temp__4126__auto__))
);
{
var G__14752 = cljs.core.next.call(null,seq__14738__$1);
var G__14753 = null;
var G__14754 = (0);
var G__14755 = (0);
seq__14738 = G__14752;
chunk__14739 = G__14753;
count__14740 = G__14754;
i__14741 = G__14755;
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
