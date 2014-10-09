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
var seq__62709_62715 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__62710_62716 = null;var count__62711_62717 = (0);var i__62712_62718 = (0);while(true){
if((i__62712_62718 < count__62711_62717))
{var vec__62713_62719 = cljs.core._nth.call(null,chunk__62710_62716,i__62712_62718);var v_62720 = cljs.core.nth.call(null,vec__62713_62719,(0),null);var body_class_62721 = cljs.core.nth.call(null,vec__62713_62719,(1),null);if(cljs.core._EQ_.call(null,v_62720,view))
{domina.add_class_BANG_.call(null,body,body_class_62721);
} else
{domina.remove_class_BANG_.call(null,body,body_class_62721);
}
{
var G__62722 = seq__62709_62715;
var G__62723 = chunk__62710_62716;
var G__62724 = count__62711_62717;
var G__62725 = (i__62712_62718 + (1));
seq__62709_62715 = G__62722;
chunk__62710_62716 = G__62723;
count__62711_62717 = G__62724;
i__62712_62718 = G__62725;
continue;
}
} else
{var temp__4126__auto___62726 = cljs.core.seq.call(null,seq__62709_62715);if(temp__4126__auto___62726)
{var seq__62709_62727__$1 = temp__4126__auto___62726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__62709_62727__$1))
{var c__4314__auto___62728 = cljs.core.chunk_first.call(null,seq__62709_62727__$1);{
var G__62729 = cljs.core.chunk_rest.call(null,seq__62709_62727__$1);
var G__62730 = c__4314__auto___62728;
var G__62731 = cljs.core.count.call(null,c__4314__auto___62728);
var G__62732 = (0);
seq__62709_62715 = G__62729;
chunk__62710_62716 = G__62730;
count__62711_62717 = G__62731;
i__62712_62718 = G__62732;
continue;
}
} else
{var vec__62714_62733 = cljs.core.first.call(null,seq__62709_62727__$1);var v_62734 = cljs.core.nth.call(null,vec__62714_62733,(0),null);var body_class_62735 = cljs.core.nth.call(null,vec__62714_62733,(1),null);if(cljs.core._EQ_.call(null,v_62734,view))
{domina.add_class_BANG_.call(null,body,body_class_62735);
} else
{domina.remove_class_BANG_.call(null,body,body_class_62735);
}
{
var G__62736 = cljs.core.next.call(null,seq__62709_62727__$1);
var G__62737 = null;
var G__62738 = (0);
var G__62739 = (0);
seq__62709_62715 = G__62736;
chunk__62710_62716 = G__62737;
count__62711_62717 = G__62738;
i__62712_62718 = G__62739;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__62746 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__62747 = null;var count__62748 = (0);var i__62749 = (0);while(true){
if((i__62749 < count__62748))
{var vec__62750 = cljs.core._nth.call(null,chunk__62747,i__62749);var v = cljs.core.nth.call(null,vec__62750,(0),null);var _ = cljs.core.nth.call(null,vec__62750,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__62746,chunk__62747,count__62748,i__62749,vec__62750,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__62746,chunk__62747,count__62748,i__62749,vec__62750,v,_))
);
{
var G__62752 = seq__62746;
var G__62753 = chunk__62747;
var G__62754 = count__62748;
var G__62755 = (i__62749 + (1));
seq__62746 = G__62752;
chunk__62747 = G__62753;
count__62748 = G__62754;
i__62749 = G__62755;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__62746);if(temp__4126__auto__)
{var seq__62746__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__62746__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__62746__$1);{
var G__62756 = cljs.core.chunk_rest.call(null,seq__62746__$1);
var G__62757 = c__4314__auto__;
var G__62758 = cljs.core.count.call(null,c__4314__auto__);
var G__62759 = (0);
seq__62746 = G__62756;
chunk__62747 = G__62757;
count__62748 = G__62758;
i__62749 = G__62759;
continue;
}
} else
{var vec__62751 = cljs.core.first.call(null,seq__62746__$1);var v = cljs.core.nth.call(null,vec__62751,(0),null);var _ = cljs.core.nth.call(null,vec__62751,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__62746,chunk__62747,count__62748,i__62749,vec__62751,v,_,seq__62746__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__62746,chunk__62747,count__62748,i__62749,vec__62751,v,_,seq__62746__$1,temp__4126__auto__))
);
{
var G__62760 = cljs.core.next.call(null,seq__62746__$1);
var G__62761 = null;
var G__62762 = (0);
var G__62763 = (0);
seq__62746 = G__62760;
chunk__62747 = G__62761;
count__62748 = G__62762;
i__62749 = G__62763;
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