// Compiled by ClojureScript 0.0-2268
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
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
} else
{return null;
}
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
var seq__50675_50681 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__50676_50682 = null;var count__50677_50683 = (0);var i__50678_50684 = (0);while(true){
if((i__50678_50684 < count__50677_50683))
{var vec__50679_50685 = cljs.core._nth.call(null,chunk__50676_50682,i__50678_50684);var v_50686 = cljs.core.nth.call(null,vec__50679_50685,(0),null);var body_class_50687 = cljs.core.nth.call(null,vec__50679_50685,(1),null);if(cljs.core._EQ_.call(null,v_50686,view))
{domina.add_class_BANG_.call(null,body,body_class_50687);
} else
{domina.remove_class_BANG_.call(null,body,body_class_50687);
}
{
var G__50688 = seq__50675_50681;
var G__50689 = chunk__50676_50682;
var G__50690 = count__50677_50683;
var G__50691 = (i__50678_50684 + (1));
seq__50675_50681 = G__50688;
chunk__50676_50682 = G__50689;
count__50677_50683 = G__50690;
i__50678_50684 = G__50691;
continue;
}
} else
{var temp__4126__auto___50692 = cljs.core.seq.call(null,seq__50675_50681);if(temp__4126__auto___50692)
{var seq__50675_50693__$1 = temp__4126__auto___50692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50675_50693__$1))
{var c__4299__auto___50694 = cljs.core.chunk_first.call(null,seq__50675_50693__$1);{
var G__50695 = cljs.core.chunk_rest.call(null,seq__50675_50693__$1);
var G__50696 = c__4299__auto___50694;
var G__50697 = cljs.core.count.call(null,c__4299__auto___50694);
var G__50698 = (0);
seq__50675_50681 = G__50695;
chunk__50676_50682 = G__50696;
count__50677_50683 = G__50697;
i__50678_50684 = G__50698;
continue;
}
} else
{var vec__50680_50699 = cljs.core.first.call(null,seq__50675_50693__$1);var v_50700 = cljs.core.nth.call(null,vec__50680_50699,(0),null);var body_class_50701 = cljs.core.nth.call(null,vec__50680_50699,(1),null);if(cljs.core._EQ_.call(null,v_50700,view))
{domina.add_class_BANG_.call(null,body,body_class_50701);
} else
{domina.remove_class_BANG_.call(null,body,body_class_50701);
}
{
var G__50702 = cljs.core.next.call(null,seq__50675_50693__$1);
var G__50703 = null;
var G__50704 = (0);
var G__50705 = (0);
seq__50675_50681 = G__50702;
chunk__50676_50682 = G__50703;
count__50677_50683 = G__50704;
i__50678_50684 = G__50705;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__50712 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__50713 = null;var count__50714 = (0);var i__50715 = (0);while(true){
if((i__50715 < count__50714))
{var vec__50716 = cljs.core._nth.call(null,chunk__50713,i__50715);var v = cljs.core.nth.call(null,vec__50716,(0),null);var _ = cljs.core.nth.call(null,vec__50716,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__50712,chunk__50713,count__50714,i__50715,vec__50716,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__50712,chunk__50713,count__50714,i__50715,vec__50716,v,_))
);
{
var G__50718 = seq__50712;
var G__50719 = chunk__50713;
var G__50720 = count__50714;
var G__50721 = (i__50715 + (1));
seq__50712 = G__50718;
chunk__50713 = G__50719;
count__50714 = G__50720;
i__50715 = G__50721;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50712);if(temp__4126__auto__)
{var seq__50712__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50712__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__50712__$1);{
var G__50722 = cljs.core.chunk_rest.call(null,seq__50712__$1);
var G__50723 = c__4299__auto__;
var G__50724 = cljs.core.count.call(null,c__4299__auto__);
var G__50725 = (0);
seq__50712 = G__50722;
chunk__50713 = G__50723;
count__50714 = G__50724;
i__50715 = G__50725;
continue;
}
} else
{var vec__50717 = cljs.core.first.call(null,seq__50712__$1);var v = cljs.core.nth.call(null,vec__50717,(0),null);var _ = cljs.core.nth.call(null,vec__50717,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__50712,chunk__50713,count__50714,i__50715,vec__50717,v,_,seq__50712__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__50712,chunk__50713,count__50714,i__50715,vec__50717,v,_,seq__50712__$1,temp__4126__auto__))
);
{
var G__50726 = cljs.core.next.call(null,seq__50712__$1);
var G__50727 = null;
var G__50728 = (0);
var G__50729 = (0);
seq__50712 = G__50726;
chunk__50713 = G__50727;
count__50714 = G__50728;
i__50715 = G__50729;
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