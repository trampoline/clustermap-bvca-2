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
var seq__13888_13894 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13889_13895 = null;var count__13890_13896 = (0);var i__13891_13897 = (0);while(true){
if((i__13891_13897 < count__13890_13896))
{var vec__13892_13898 = cljs.core._nth.call(null,chunk__13889_13895,i__13891_13897);var v_13899 = cljs.core.nth.call(null,vec__13892_13898,(0),null);var body_class_13900 = cljs.core.nth.call(null,vec__13892_13898,(1),null);if(cljs.core._EQ_.call(null,v_13899,view))
{domina.add_class_BANG_.call(null,body,body_class_13900);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13900);
}
{
var G__13901 = seq__13888_13894;
var G__13902 = chunk__13889_13895;
var G__13903 = count__13890_13896;
var G__13904 = (i__13891_13897 + (1));
seq__13888_13894 = G__13901;
chunk__13889_13895 = G__13902;
count__13890_13896 = G__13903;
i__13891_13897 = G__13904;
continue;
}
} else
{var temp__4126__auto___13905 = cljs.core.seq.call(null,seq__13888_13894);if(temp__4126__auto___13905)
{var seq__13888_13906__$1 = temp__4126__auto___13905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13888_13906__$1))
{var c__4408__auto___13907 = cljs.core.chunk_first.call(null,seq__13888_13906__$1);{
var G__13908 = cljs.core.chunk_rest.call(null,seq__13888_13906__$1);
var G__13909 = c__4408__auto___13907;
var G__13910 = cljs.core.count.call(null,c__4408__auto___13907);
var G__13911 = (0);
seq__13888_13894 = G__13908;
chunk__13889_13895 = G__13909;
count__13890_13896 = G__13910;
i__13891_13897 = G__13911;
continue;
}
} else
{var vec__13893_13912 = cljs.core.first.call(null,seq__13888_13906__$1);var v_13913 = cljs.core.nth.call(null,vec__13893_13912,(0),null);var body_class_13914 = cljs.core.nth.call(null,vec__13893_13912,(1),null);if(cljs.core._EQ_.call(null,v_13913,view))
{domina.add_class_BANG_.call(null,body,body_class_13914);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13914);
}
{
var G__13915 = cljs.core.next.call(null,seq__13888_13906__$1);
var G__13916 = null;
var G__13917 = (0);
var G__13918 = (0);
seq__13888_13894 = G__13915;
chunk__13889_13895 = G__13916;
count__13890_13896 = G__13917;
i__13891_13897 = G__13918;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13925 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13926 = null;var count__13927 = (0);var i__13928 = (0);while(true){
if((i__13928 < count__13927))
{var vec__13929 = cljs.core._nth.call(null,chunk__13926,i__13928);var v = cljs.core.nth.call(null,vec__13929,(0),null);var _ = cljs.core.nth.call(null,vec__13929,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13925,chunk__13926,count__13927,i__13928,vec__13929,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13925,chunk__13926,count__13927,i__13928,vec__13929,v,_))
);
{
var G__13931 = seq__13925;
var G__13932 = chunk__13926;
var G__13933 = count__13927;
var G__13934 = (i__13928 + (1));
seq__13925 = G__13931;
chunk__13926 = G__13932;
count__13927 = G__13933;
i__13928 = G__13934;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13925);if(temp__4126__auto__)
{var seq__13925__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13925__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__13925__$1);{
var G__13935 = cljs.core.chunk_rest.call(null,seq__13925__$1);
var G__13936 = c__4408__auto__;
var G__13937 = cljs.core.count.call(null,c__4408__auto__);
var G__13938 = (0);
seq__13925 = G__13935;
chunk__13926 = G__13936;
count__13927 = G__13937;
i__13928 = G__13938;
continue;
}
} else
{var vec__13930 = cljs.core.first.call(null,seq__13925__$1);var v = cljs.core.nth.call(null,vec__13930,(0),null);var _ = cljs.core.nth.call(null,vec__13930,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13925,chunk__13926,count__13927,i__13928,vec__13930,v,_,seq__13925__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13925,chunk__13926,count__13927,i__13928,vec__13930,v,_,seq__13925__$1,temp__4126__auto__))
);
{
var G__13939 = cljs.core.next.call(null,seq__13925__$1);
var G__13940 = null;
var G__13941 = (0);
var G__13942 = (0);
seq__13925 = G__13939;
chunk__13926 = G__13940;
count__13927 = G__13941;
i__13928 = G__13942;
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
clustermap.nav.show_methodology_modal = (function show_methodology_modal(){return jayq.core.$.call(null,"#page-methodology").modal();
});
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
clustermap.nav.handle_view_switches.call(null,comm);
return clustermap.nav.show_methodology_modal.call(null);
});
