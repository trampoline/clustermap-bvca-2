// Compiled by ClojureScript 0.0-2356
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
var seq__13885_13891 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13886_13892 = null;var count__13887_13893 = (0);var i__13888_13894 = (0);while(true){
if((i__13888_13894 < count__13887_13893))
{var vec__13889_13895 = cljs.core._nth.call(null,chunk__13886_13892,i__13888_13894);var v_13896 = cljs.core.nth.call(null,vec__13889_13895,(0),null);var body_class_13897 = cljs.core.nth.call(null,vec__13889_13895,(1),null);if(cljs.core._EQ_.call(null,v_13896,view))
{domina.add_class_BANG_.call(null,body,body_class_13897);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13897);
}
{
var G__13898 = seq__13885_13891;
var G__13899 = chunk__13886_13892;
var G__13900 = count__13887_13893;
var G__13901 = (i__13888_13894 + (1));
seq__13885_13891 = G__13898;
chunk__13886_13892 = G__13899;
count__13887_13893 = G__13900;
i__13888_13894 = G__13901;
continue;
}
} else
{var temp__4126__auto___13902 = cljs.core.seq.call(null,seq__13885_13891);if(temp__4126__auto___13902)
{var seq__13885_13903__$1 = temp__4126__auto___13902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13885_13903__$1))
{var c__4408__auto___13904 = cljs.core.chunk_first.call(null,seq__13885_13903__$1);{
var G__13905 = cljs.core.chunk_rest.call(null,seq__13885_13903__$1);
var G__13906 = c__4408__auto___13904;
var G__13907 = cljs.core.count.call(null,c__4408__auto___13904);
var G__13908 = (0);
seq__13885_13891 = G__13905;
chunk__13886_13892 = G__13906;
count__13887_13893 = G__13907;
i__13888_13894 = G__13908;
continue;
}
} else
{var vec__13890_13909 = cljs.core.first.call(null,seq__13885_13903__$1);var v_13910 = cljs.core.nth.call(null,vec__13890_13909,(0),null);var body_class_13911 = cljs.core.nth.call(null,vec__13890_13909,(1),null);if(cljs.core._EQ_.call(null,v_13910,view))
{domina.add_class_BANG_.call(null,body,body_class_13911);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13911);
}
{
var G__13912 = cljs.core.next.call(null,seq__13885_13903__$1);
var G__13913 = null;
var G__13914 = (0);
var G__13915 = (0);
seq__13885_13891 = G__13912;
chunk__13886_13892 = G__13913;
count__13887_13893 = G__13914;
i__13888_13894 = G__13915;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13922 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13923 = null;var count__13924 = (0);var i__13925 = (0);while(true){
if((i__13925 < count__13924))
{var vec__13926 = cljs.core._nth.call(null,chunk__13923,i__13925);var v = cljs.core.nth.call(null,vec__13926,(0),null);var _ = cljs.core.nth.call(null,vec__13926,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13922,chunk__13923,count__13924,i__13925,vec__13926,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13922,chunk__13923,count__13924,i__13925,vec__13926,v,_))
);
{
var G__13928 = seq__13922;
var G__13929 = chunk__13923;
var G__13930 = count__13924;
var G__13931 = (i__13925 + (1));
seq__13922 = G__13928;
chunk__13923 = G__13929;
count__13924 = G__13930;
i__13925 = G__13931;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13922);if(temp__4126__auto__)
{var seq__13922__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13922__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__13922__$1);{
var G__13932 = cljs.core.chunk_rest.call(null,seq__13922__$1);
var G__13933 = c__4408__auto__;
var G__13934 = cljs.core.count.call(null,c__4408__auto__);
var G__13935 = (0);
seq__13922 = G__13932;
chunk__13923 = G__13933;
count__13924 = G__13934;
i__13925 = G__13935;
continue;
}
} else
{var vec__13927 = cljs.core.first.call(null,seq__13922__$1);var v = cljs.core.nth.call(null,vec__13927,(0),null);var _ = cljs.core.nth.call(null,vec__13927,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13922,chunk__13923,count__13924,i__13925,vec__13927,v,_,seq__13922__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13922,chunk__13923,count__13924,i__13925,vec__13927,v,_,seq__13922__$1,temp__4126__auto__))
);
{
var G__13936 = cljs.core.next.call(null,seq__13922__$1);
var G__13937 = null;
var G__13938 = (0);
var G__13939 = (0);
seq__13922 = G__13936;
chunk__13923 = G__13937;
count__13924 = G__13938;
i__13925 = G__13939;
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
