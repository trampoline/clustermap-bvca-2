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
var seq__13908_13914 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13909_13915 = null;var count__13910_13916 = (0);var i__13911_13917 = (0);while(true){
if((i__13911_13917 < count__13910_13916))
{var vec__13912_13918 = cljs.core._nth.call(null,chunk__13909_13915,i__13911_13917);var v_13919 = cljs.core.nth.call(null,vec__13912_13918,(0),null);var body_class_13920 = cljs.core.nth.call(null,vec__13912_13918,(1),null);if(cljs.core._EQ_.call(null,v_13919,view))
{domina.add_class_BANG_.call(null,body,body_class_13920);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13920);
}
{
var G__13921 = seq__13908_13914;
var G__13922 = chunk__13909_13915;
var G__13923 = count__13910_13916;
var G__13924 = (i__13911_13917 + (1));
seq__13908_13914 = G__13921;
chunk__13909_13915 = G__13922;
count__13910_13916 = G__13923;
i__13911_13917 = G__13924;
continue;
}
} else
{var temp__4126__auto___13925 = cljs.core.seq.call(null,seq__13908_13914);if(temp__4126__auto___13925)
{var seq__13908_13926__$1 = temp__4126__auto___13925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13908_13926__$1))
{var c__4299__auto___13927 = cljs.core.chunk_first.call(null,seq__13908_13926__$1);{
var G__13928 = cljs.core.chunk_rest.call(null,seq__13908_13926__$1);
var G__13929 = c__4299__auto___13927;
var G__13930 = cljs.core.count.call(null,c__4299__auto___13927);
var G__13931 = (0);
seq__13908_13914 = G__13928;
chunk__13909_13915 = G__13929;
count__13910_13916 = G__13930;
i__13911_13917 = G__13931;
continue;
}
} else
{var vec__13913_13932 = cljs.core.first.call(null,seq__13908_13926__$1);var v_13933 = cljs.core.nth.call(null,vec__13913_13932,(0),null);var body_class_13934 = cljs.core.nth.call(null,vec__13913_13932,(1),null);if(cljs.core._EQ_.call(null,v_13933,view))
{domina.add_class_BANG_.call(null,body,body_class_13934);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13934);
}
{
var G__13935 = cljs.core.next.call(null,seq__13908_13926__$1);
var G__13936 = null;
var G__13937 = (0);
var G__13938 = (0);
seq__13908_13914 = G__13935;
chunk__13909_13915 = G__13936;
count__13910_13916 = G__13937;
i__13911_13917 = G__13938;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13945 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13946 = null;var count__13947 = (0);var i__13948 = (0);while(true){
if((i__13948 < count__13947))
{var vec__13949 = cljs.core._nth.call(null,chunk__13946,i__13948);var v = cljs.core.nth.call(null,vec__13949,(0),null);var _ = cljs.core.nth.call(null,vec__13949,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13945,chunk__13946,count__13947,i__13948,vec__13949,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13945,chunk__13946,count__13947,i__13948,vec__13949,v,_))
);
{
var G__13951 = seq__13945;
var G__13952 = chunk__13946;
var G__13953 = count__13947;
var G__13954 = (i__13948 + (1));
seq__13945 = G__13951;
chunk__13946 = G__13952;
count__13947 = G__13953;
i__13948 = G__13954;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13945);if(temp__4126__auto__)
{var seq__13945__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13945__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13945__$1);{
var G__13955 = cljs.core.chunk_rest.call(null,seq__13945__$1);
var G__13956 = c__4299__auto__;
var G__13957 = cljs.core.count.call(null,c__4299__auto__);
var G__13958 = (0);
seq__13945 = G__13955;
chunk__13946 = G__13956;
count__13947 = G__13957;
i__13948 = G__13958;
continue;
}
} else
{var vec__13950 = cljs.core.first.call(null,seq__13945__$1);var v = cljs.core.nth.call(null,vec__13950,(0),null);var _ = cljs.core.nth.call(null,vec__13950,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13945,chunk__13946,count__13947,i__13948,vec__13950,v,_,seq__13945__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13945,chunk__13946,count__13947,i__13948,vec__13950,v,_,seq__13945__$1,temp__4126__auto__))
);
{
var G__13959 = cljs.core.next.call(null,seq__13945__$1);
var G__13960 = null;
var G__13961 = (0);
var G__13962 = (0);
seq__13945 = G__13959;
chunk__13946 = G__13960;
count__13947 = G__13961;
i__13948 = G__13962;
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
