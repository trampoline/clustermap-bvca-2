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
var seq__25888_25894 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__25889_25895 = null;var count__25890_25896 = (0);var i__25891_25897 = (0);while(true){
if((i__25891_25897 < count__25890_25896))
{var vec__25892_25898 = cljs.core._nth.call(null,chunk__25889_25895,i__25891_25897);var v_25899 = cljs.core.nth.call(null,vec__25892_25898,(0),null);var body_class_25900 = cljs.core.nth.call(null,vec__25892_25898,(1),null);if(cljs.core._EQ_.call(null,v_25899,view))
{domina.add_class_BANG_.call(null,body,body_class_25900);
} else
{domina.remove_class_BANG_.call(null,body,body_class_25900);
}
{
var G__25901 = seq__25888_25894;
var G__25902 = chunk__25889_25895;
var G__25903 = count__25890_25896;
var G__25904 = (i__25891_25897 + (1));
seq__25888_25894 = G__25901;
chunk__25889_25895 = G__25902;
count__25890_25896 = G__25903;
i__25891_25897 = G__25904;
continue;
}
} else
{var temp__4126__auto___25905 = cljs.core.seq.call(null,seq__25888_25894);if(temp__4126__auto___25905)
{var seq__25888_25906__$1 = temp__4126__auto___25905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25888_25906__$1))
{var c__4299__auto___25907 = cljs.core.chunk_first.call(null,seq__25888_25906__$1);{
var G__25908 = cljs.core.chunk_rest.call(null,seq__25888_25906__$1);
var G__25909 = c__4299__auto___25907;
var G__25910 = cljs.core.count.call(null,c__4299__auto___25907);
var G__25911 = (0);
seq__25888_25894 = G__25908;
chunk__25889_25895 = G__25909;
count__25890_25896 = G__25910;
i__25891_25897 = G__25911;
continue;
}
} else
{var vec__25893_25912 = cljs.core.first.call(null,seq__25888_25906__$1);var v_25913 = cljs.core.nth.call(null,vec__25893_25912,(0),null);var body_class_25914 = cljs.core.nth.call(null,vec__25893_25912,(1),null);if(cljs.core._EQ_.call(null,v_25913,view))
{domina.add_class_BANG_.call(null,body,body_class_25914);
} else
{domina.remove_class_BANG_.call(null,body,body_class_25914);
}
{
var G__25915 = cljs.core.next.call(null,seq__25888_25906__$1);
var G__25916 = null;
var G__25917 = (0);
var G__25918 = (0);
seq__25888_25894 = G__25915;
chunk__25889_25895 = G__25916;
count__25890_25896 = G__25917;
i__25891_25897 = G__25918;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__25925 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__25926 = null;var count__25927 = (0);var i__25928 = (0);while(true){
if((i__25928 < count__25927))
{var vec__25929 = cljs.core._nth.call(null,chunk__25926,i__25928);var v = cljs.core.nth.call(null,vec__25929,(0),null);var _ = cljs.core.nth.call(null,vec__25929,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__25925,chunk__25926,count__25927,i__25928,vec__25929,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__25925,chunk__25926,count__25927,i__25928,vec__25929,v,_))
);
{
var G__25931 = seq__25925;
var G__25932 = chunk__25926;
var G__25933 = count__25927;
var G__25934 = (i__25928 + (1));
seq__25925 = G__25931;
chunk__25926 = G__25932;
count__25927 = G__25933;
i__25928 = G__25934;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25925);if(temp__4126__auto__)
{var seq__25925__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25925__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__25925__$1);{
var G__25935 = cljs.core.chunk_rest.call(null,seq__25925__$1);
var G__25936 = c__4299__auto__;
var G__25937 = cljs.core.count.call(null,c__4299__auto__);
var G__25938 = (0);
seq__25925 = G__25935;
chunk__25926 = G__25936;
count__25927 = G__25937;
i__25928 = G__25938;
continue;
}
} else
{var vec__25930 = cljs.core.first.call(null,seq__25925__$1);var v = cljs.core.nth.call(null,vec__25930,(0),null);var _ = cljs.core.nth.call(null,vec__25930,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__25925,chunk__25926,count__25927,i__25928,vec__25930,v,_,seq__25925__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__25925,chunk__25926,count__25927,i__25928,vec__25930,v,_,seq__25925__$1,temp__4126__auto__))
);
{
var G__25939 = cljs.core.next.call(null,seq__25925__$1);
var G__25940 = null;
var G__25941 = (0);
var G__25942 = (0);
seq__25925 = G__25939;
chunk__25926 = G__25940;
count__25927 = G__25941;
i__25928 = G__25942;
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
