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
var seq__17951_17957 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17952_17958 = null;var count__17953_17959 = (0);var i__17954_17960 = (0);while(true){
if((i__17954_17960 < count__17953_17959))
{var vec__17955_17961 = cljs.core._nth.call(null,chunk__17952_17958,i__17954_17960);var v_17962 = cljs.core.nth.call(null,vec__17955_17961,(0),null);var body_class_17963 = cljs.core.nth.call(null,vec__17955_17961,(1),null);if(cljs.core._EQ_.call(null,v_17962,view))
{domina.add_class_BANG_.call(null,body,body_class_17963);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17963);
}
{
var G__17964 = seq__17951_17957;
var G__17965 = chunk__17952_17958;
var G__17966 = count__17953_17959;
var G__17967 = (i__17954_17960 + (1));
seq__17951_17957 = G__17964;
chunk__17952_17958 = G__17965;
count__17953_17959 = G__17966;
i__17954_17960 = G__17967;
continue;
}
} else
{var temp__4126__auto___17968 = cljs.core.seq.call(null,seq__17951_17957);if(temp__4126__auto___17968)
{var seq__17951_17969__$1 = temp__4126__auto___17968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17951_17969__$1))
{var c__4314__auto___17970 = cljs.core.chunk_first.call(null,seq__17951_17969__$1);{
var G__17971 = cljs.core.chunk_rest.call(null,seq__17951_17969__$1);
var G__17972 = c__4314__auto___17970;
var G__17973 = cljs.core.count.call(null,c__4314__auto___17970);
var G__17974 = (0);
seq__17951_17957 = G__17971;
chunk__17952_17958 = G__17972;
count__17953_17959 = G__17973;
i__17954_17960 = G__17974;
continue;
}
} else
{var vec__17956_17975 = cljs.core.first.call(null,seq__17951_17969__$1);var v_17976 = cljs.core.nth.call(null,vec__17956_17975,(0),null);var body_class_17977 = cljs.core.nth.call(null,vec__17956_17975,(1),null);if(cljs.core._EQ_.call(null,v_17976,view))
{domina.add_class_BANG_.call(null,body,body_class_17977);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17977);
}
{
var G__17978 = cljs.core.next.call(null,seq__17951_17969__$1);
var G__17979 = null;
var G__17980 = (0);
var G__17981 = (0);
seq__17951_17957 = G__17978;
chunk__17952_17958 = G__17979;
count__17953_17959 = G__17980;
i__17954_17960 = G__17981;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__17988 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17989 = null;var count__17990 = (0);var i__17991 = (0);while(true){
if((i__17991 < count__17990))
{var vec__17992 = cljs.core._nth.call(null,chunk__17989,i__17991);var v = cljs.core.nth.call(null,vec__17992,(0),null);var _ = cljs.core.nth.call(null,vec__17992,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17988,chunk__17989,count__17990,i__17991,vec__17992,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17988,chunk__17989,count__17990,i__17991,vec__17992,v,_))
);
{
var G__17994 = seq__17988;
var G__17995 = chunk__17989;
var G__17996 = count__17990;
var G__17997 = (i__17991 + (1));
seq__17988 = G__17994;
chunk__17989 = G__17995;
count__17990 = G__17996;
i__17991 = G__17997;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17988);if(temp__4126__auto__)
{var seq__17988__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17988__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__17988__$1);{
var G__17998 = cljs.core.chunk_rest.call(null,seq__17988__$1);
var G__17999 = c__4314__auto__;
var G__18000 = cljs.core.count.call(null,c__4314__auto__);
var G__18001 = (0);
seq__17988 = G__17998;
chunk__17989 = G__17999;
count__17990 = G__18000;
i__17991 = G__18001;
continue;
}
} else
{var vec__17993 = cljs.core.first.call(null,seq__17988__$1);var v = cljs.core.nth.call(null,vec__17993,(0),null);var _ = cljs.core.nth.call(null,vec__17993,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17988,chunk__17989,count__17990,i__17991,vec__17993,v,_,seq__17988__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17988,chunk__17989,count__17990,i__17991,vec__17993,v,_,seq__17988__$1,temp__4126__auto__))
);
{
var G__18002 = cljs.core.next.call(null,seq__17988__$1);
var G__18003 = null;
var G__18004 = (0);
var G__18005 = (0);
seq__17988 = G__18002;
chunk__17989 = G__18003;
count__17990 = G__18004;
i__17991 = G__18005;
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
