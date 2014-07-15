// Compiled by ClojureScript 0.0-2261
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
var seq__24776_24782 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24777_24783 = null;var count__24778_24784 = (0);var i__24779_24785 = (0);while(true){
if((i__24779_24785 < count__24778_24784))
{var vec__24780_24786 = cljs.core._nth.call(null,chunk__24777_24783,i__24779_24785);var v_24787 = cljs.core.nth.call(null,vec__24780_24786,(0),null);var body_class_24788 = cljs.core.nth.call(null,vec__24780_24786,(1),null);if(cljs.core._EQ_.call(null,v_24787,view))
{domina.add_class_BANG_.call(null,body,body_class_24788);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24788);
}
{
var G__24789 = seq__24776_24782;
var G__24790 = chunk__24777_24783;
var G__24791 = count__24778_24784;
var G__24792 = (i__24779_24785 + (1));
seq__24776_24782 = G__24789;
chunk__24777_24783 = G__24790;
count__24778_24784 = G__24791;
i__24779_24785 = G__24792;
continue;
}
} else
{var temp__4126__auto___24793 = cljs.core.seq.call(null,seq__24776_24782);if(temp__4126__auto___24793)
{var seq__24776_24794__$1 = temp__4126__auto___24793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24776_24794__$1))
{var c__4299__auto___24795 = cljs.core.chunk_first.call(null,seq__24776_24794__$1);{
var G__24796 = cljs.core.chunk_rest.call(null,seq__24776_24794__$1);
var G__24797 = c__4299__auto___24795;
var G__24798 = cljs.core.count.call(null,c__4299__auto___24795);
var G__24799 = (0);
seq__24776_24782 = G__24796;
chunk__24777_24783 = G__24797;
count__24778_24784 = G__24798;
i__24779_24785 = G__24799;
continue;
}
} else
{var vec__24781_24800 = cljs.core.first.call(null,seq__24776_24794__$1);var v_24801 = cljs.core.nth.call(null,vec__24781_24800,(0),null);var body_class_24802 = cljs.core.nth.call(null,vec__24781_24800,(1),null);if(cljs.core._EQ_.call(null,v_24801,view))
{domina.add_class_BANG_.call(null,body,body_class_24802);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24802);
}
{
var G__24803 = cljs.core.next.call(null,seq__24776_24794__$1);
var G__24804 = null;
var G__24805 = (0);
var G__24806 = (0);
seq__24776_24782 = G__24803;
chunk__24777_24783 = G__24804;
count__24778_24784 = G__24805;
i__24779_24785 = G__24806;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__24813 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24814 = null;var count__24815 = (0);var i__24816 = (0);while(true){
if((i__24816 < count__24815))
{var vec__24817 = cljs.core._nth.call(null,chunk__24814,i__24816);var v = cljs.core.nth.call(null,vec__24817,(0),null);var _ = cljs.core.nth.call(null,vec__24817,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__24813,chunk__24814,count__24815,i__24816,vec__24817,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__24813,chunk__24814,count__24815,i__24816,vec__24817,v,_))
);
{
var G__24819 = seq__24813;
var G__24820 = chunk__24814;
var G__24821 = count__24815;
var G__24822 = (i__24816 + (1));
seq__24813 = G__24819;
chunk__24814 = G__24820;
count__24815 = G__24821;
i__24816 = G__24822;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24813);if(temp__4126__auto__)
{var seq__24813__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24813__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__24813__$1);{
var G__24823 = cljs.core.chunk_rest.call(null,seq__24813__$1);
var G__24824 = c__4299__auto__;
var G__24825 = cljs.core.count.call(null,c__4299__auto__);
var G__24826 = (0);
seq__24813 = G__24823;
chunk__24814 = G__24824;
count__24815 = G__24825;
i__24816 = G__24826;
continue;
}
} else
{var vec__24818 = cljs.core.first.call(null,seq__24813__$1);var v = cljs.core.nth.call(null,vec__24818,(0),null);var _ = cljs.core.nth.call(null,vec__24818,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__24813,chunk__24814,count__24815,i__24816,vec__24818,v,_,seq__24813__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__24813,chunk__24814,count__24815,i__24816,vec__24818,v,_,seq__24813__$1,temp__4126__auto__))
);
{
var G__24827 = cljs.core.next.call(null,seq__24813__$1);
var G__24828 = null;
var G__24829 = (0);
var G__24830 = (0);
seq__24813 = G__24827;
chunk__24814 = G__24828;
count__24815 = G__24829;
i__24816 = G__24830;
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
