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
var seq__17954_17960 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17955_17961 = null;var count__17956_17962 = (0);var i__17957_17963 = (0);while(true){
if((i__17957_17963 < count__17956_17962))
{var vec__17958_17964 = cljs.core._nth.call(null,chunk__17955_17961,i__17957_17963);var v_17965 = cljs.core.nth.call(null,vec__17958_17964,(0),null);var body_class_17966 = cljs.core.nth.call(null,vec__17958_17964,(1),null);if(cljs.core._EQ_.call(null,v_17965,view))
{domina.add_class_BANG_.call(null,body,body_class_17966);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17966);
}
{
var G__17967 = seq__17954_17960;
var G__17968 = chunk__17955_17961;
var G__17969 = count__17956_17962;
var G__17970 = (i__17957_17963 + (1));
seq__17954_17960 = G__17967;
chunk__17955_17961 = G__17968;
count__17956_17962 = G__17969;
i__17957_17963 = G__17970;
continue;
}
} else
{var temp__4126__auto___17971 = cljs.core.seq.call(null,seq__17954_17960);if(temp__4126__auto___17971)
{var seq__17954_17972__$1 = temp__4126__auto___17971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17954_17972__$1))
{var c__4314__auto___17973 = cljs.core.chunk_first.call(null,seq__17954_17972__$1);{
var G__17974 = cljs.core.chunk_rest.call(null,seq__17954_17972__$1);
var G__17975 = c__4314__auto___17973;
var G__17976 = cljs.core.count.call(null,c__4314__auto___17973);
var G__17977 = (0);
seq__17954_17960 = G__17974;
chunk__17955_17961 = G__17975;
count__17956_17962 = G__17976;
i__17957_17963 = G__17977;
continue;
}
} else
{var vec__17959_17978 = cljs.core.first.call(null,seq__17954_17972__$1);var v_17979 = cljs.core.nth.call(null,vec__17959_17978,(0),null);var body_class_17980 = cljs.core.nth.call(null,vec__17959_17978,(1),null);if(cljs.core._EQ_.call(null,v_17979,view))
{domina.add_class_BANG_.call(null,body,body_class_17980);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17980);
}
{
var G__17981 = cljs.core.next.call(null,seq__17954_17972__$1);
var G__17982 = null;
var G__17983 = (0);
var G__17984 = (0);
seq__17954_17960 = G__17981;
chunk__17955_17961 = G__17982;
count__17956_17962 = G__17983;
i__17957_17963 = G__17984;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__17991 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17992 = null;var count__17993 = (0);var i__17994 = (0);while(true){
if((i__17994 < count__17993))
{var vec__17995 = cljs.core._nth.call(null,chunk__17992,i__17994);var v = cljs.core.nth.call(null,vec__17995,(0),null);var _ = cljs.core.nth.call(null,vec__17995,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17991,chunk__17992,count__17993,i__17994,vec__17995,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17991,chunk__17992,count__17993,i__17994,vec__17995,v,_))
);
{
var G__17997 = seq__17991;
var G__17998 = chunk__17992;
var G__17999 = count__17993;
var G__18000 = (i__17994 + (1));
seq__17991 = G__17997;
chunk__17992 = G__17998;
count__17993 = G__17999;
i__17994 = G__18000;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17991);if(temp__4126__auto__)
{var seq__17991__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17991__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__17991__$1);{
var G__18001 = cljs.core.chunk_rest.call(null,seq__17991__$1);
var G__18002 = c__4314__auto__;
var G__18003 = cljs.core.count.call(null,c__4314__auto__);
var G__18004 = (0);
seq__17991 = G__18001;
chunk__17992 = G__18002;
count__17993 = G__18003;
i__17994 = G__18004;
continue;
}
} else
{var vec__17996 = cljs.core.first.call(null,seq__17991__$1);var v = cljs.core.nth.call(null,vec__17996,(0),null);var _ = cljs.core.nth.call(null,vec__17996,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17991,chunk__17992,count__17993,i__17994,vec__17996,v,_,seq__17991__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17991,chunk__17992,count__17993,i__17994,vec__17996,v,_,seq__17991__$1,temp__4126__auto__))
);
{
var G__18005 = cljs.core.next.call(null,seq__17991__$1);
var G__18006 = null;
var G__18007 = (0);
var G__18008 = (0);
seq__17991 = G__18005;
chunk__17992 = G__18006;
count__17993 = G__18007;
i__17994 = G__18008;
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
