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
var seq__27914_27920 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__27915_27921 = null;var count__27916_27922 = (0);var i__27917_27923 = (0);while(true){
if((i__27917_27923 < count__27916_27922))
{var vec__27918_27924 = cljs.core._nth.call(null,chunk__27915_27921,i__27917_27923);var v_27925 = cljs.core.nth.call(null,vec__27918_27924,(0),null);var body_class_27926 = cljs.core.nth.call(null,vec__27918_27924,(1),null);if(cljs.core._EQ_.call(null,v_27925,view))
{domina.add_class_BANG_.call(null,body,body_class_27926);
} else
{domina.remove_class_BANG_.call(null,body,body_class_27926);
}
{
var G__27927 = seq__27914_27920;
var G__27928 = chunk__27915_27921;
var G__27929 = count__27916_27922;
var G__27930 = (i__27917_27923 + (1));
seq__27914_27920 = G__27927;
chunk__27915_27921 = G__27928;
count__27916_27922 = G__27929;
i__27917_27923 = G__27930;
continue;
}
} else
{var temp__4126__auto___27931 = cljs.core.seq.call(null,seq__27914_27920);if(temp__4126__auto___27931)
{var seq__27914_27932__$1 = temp__4126__auto___27931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27914_27932__$1))
{var c__4314__auto___27933 = cljs.core.chunk_first.call(null,seq__27914_27932__$1);{
var G__27934 = cljs.core.chunk_rest.call(null,seq__27914_27932__$1);
var G__27935 = c__4314__auto___27933;
var G__27936 = cljs.core.count.call(null,c__4314__auto___27933);
var G__27937 = (0);
seq__27914_27920 = G__27934;
chunk__27915_27921 = G__27935;
count__27916_27922 = G__27936;
i__27917_27923 = G__27937;
continue;
}
} else
{var vec__27919_27938 = cljs.core.first.call(null,seq__27914_27932__$1);var v_27939 = cljs.core.nth.call(null,vec__27919_27938,(0),null);var body_class_27940 = cljs.core.nth.call(null,vec__27919_27938,(1),null);if(cljs.core._EQ_.call(null,v_27939,view))
{domina.add_class_BANG_.call(null,body,body_class_27940);
} else
{domina.remove_class_BANG_.call(null,body,body_class_27940);
}
{
var G__27941 = cljs.core.next.call(null,seq__27914_27932__$1);
var G__27942 = null;
var G__27943 = (0);
var G__27944 = (0);
seq__27914_27920 = G__27941;
chunk__27915_27921 = G__27942;
count__27916_27922 = G__27943;
i__27917_27923 = G__27944;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__27951 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__27952 = null;var count__27953 = (0);var i__27954 = (0);while(true){
if((i__27954 < count__27953))
{var vec__27955 = cljs.core._nth.call(null,chunk__27952,i__27954);var v = cljs.core.nth.call(null,vec__27955,(0),null);var _ = cljs.core.nth.call(null,vec__27955,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__27951,chunk__27952,count__27953,i__27954,vec__27955,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__27951,chunk__27952,count__27953,i__27954,vec__27955,v,_))
);
{
var G__27957 = seq__27951;
var G__27958 = chunk__27952;
var G__27959 = count__27953;
var G__27960 = (i__27954 + (1));
seq__27951 = G__27957;
chunk__27952 = G__27958;
count__27953 = G__27959;
i__27954 = G__27960;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27951);if(temp__4126__auto__)
{var seq__27951__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27951__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__27951__$1);{
var G__27961 = cljs.core.chunk_rest.call(null,seq__27951__$1);
var G__27962 = c__4314__auto__;
var G__27963 = cljs.core.count.call(null,c__4314__auto__);
var G__27964 = (0);
seq__27951 = G__27961;
chunk__27952 = G__27962;
count__27953 = G__27963;
i__27954 = G__27964;
continue;
}
} else
{var vec__27956 = cljs.core.first.call(null,seq__27951__$1);var v = cljs.core.nth.call(null,vec__27956,(0),null);var _ = cljs.core.nth.call(null,vec__27956,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__27951,chunk__27952,count__27953,i__27954,vec__27956,v,_,seq__27951__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__27951,chunk__27952,count__27953,i__27954,vec__27956,v,_,seq__27951__$1,temp__4126__auto__))
);
{
var G__27965 = cljs.core.next.call(null,seq__27951__$1);
var G__27966 = null;
var G__27967 = (0);
var G__27968 = (0);
seq__27951 = G__27965;
chunk__27952 = G__27966;
count__27953 = G__27967;
i__27954 = G__27968;
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
