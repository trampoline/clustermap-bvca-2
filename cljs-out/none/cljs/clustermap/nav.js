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
var seq__62072_62078 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__62073_62079 = null;var count__62074_62080 = (0);var i__62075_62081 = (0);while(true){
if((i__62075_62081 < count__62074_62080))
{var vec__62076_62082 = cljs.core._nth.call(null,chunk__62073_62079,i__62075_62081);var v_62083 = cljs.core.nth.call(null,vec__62076_62082,(0),null);var body_class_62084 = cljs.core.nth.call(null,vec__62076_62082,(1),null);if(cljs.core._EQ_.call(null,v_62083,view))
{domina.add_class_BANG_.call(null,body,body_class_62084);
} else
{domina.remove_class_BANG_.call(null,body,body_class_62084);
}
{
var G__62085 = seq__62072_62078;
var G__62086 = chunk__62073_62079;
var G__62087 = count__62074_62080;
var G__62088 = (i__62075_62081 + (1));
seq__62072_62078 = G__62085;
chunk__62073_62079 = G__62086;
count__62074_62080 = G__62087;
i__62075_62081 = G__62088;
continue;
}
} else
{var temp__4126__auto___62089 = cljs.core.seq.call(null,seq__62072_62078);if(temp__4126__auto___62089)
{var seq__62072_62090__$1 = temp__4126__auto___62089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__62072_62090__$1))
{var c__4314__auto___62091 = cljs.core.chunk_first.call(null,seq__62072_62090__$1);{
var G__62092 = cljs.core.chunk_rest.call(null,seq__62072_62090__$1);
var G__62093 = c__4314__auto___62091;
var G__62094 = cljs.core.count.call(null,c__4314__auto___62091);
var G__62095 = (0);
seq__62072_62078 = G__62092;
chunk__62073_62079 = G__62093;
count__62074_62080 = G__62094;
i__62075_62081 = G__62095;
continue;
}
} else
{var vec__62077_62096 = cljs.core.first.call(null,seq__62072_62090__$1);var v_62097 = cljs.core.nth.call(null,vec__62077_62096,(0),null);var body_class_62098 = cljs.core.nth.call(null,vec__62077_62096,(1),null);if(cljs.core._EQ_.call(null,v_62097,view))
{domina.add_class_BANG_.call(null,body,body_class_62098);
} else
{domina.remove_class_BANG_.call(null,body,body_class_62098);
}
{
var G__62099 = cljs.core.next.call(null,seq__62072_62090__$1);
var G__62100 = null;
var G__62101 = (0);
var G__62102 = (0);
seq__62072_62078 = G__62099;
chunk__62073_62079 = G__62100;
count__62074_62080 = G__62101;
i__62075_62081 = G__62102;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__62109 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__62110 = null;var count__62111 = (0);var i__62112 = (0);while(true){
if((i__62112 < count__62111))
{var vec__62113 = cljs.core._nth.call(null,chunk__62110,i__62112);var v = cljs.core.nth.call(null,vec__62113,(0),null);var _ = cljs.core.nth.call(null,vec__62113,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__62109,chunk__62110,count__62111,i__62112,vec__62113,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__62109,chunk__62110,count__62111,i__62112,vec__62113,v,_))
);
{
var G__62115 = seq__62109;
var G__62116 = chunk__62110;
var G__62117 = count__62111;
var G__62118 = (i__62112 + (1));
seq__62109 = G__62115;
chunk__62110 = G__62116;
count__62111 = G__62117;
i__62112 = G__62118;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__62109);if(temp__4126__auto__)
{var seq__62109__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__62109__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__62109__$1);{
var G__62119 = cljs.core.chunk_rest.call(null,seq__62109__$1);
var G__62120 = c__4314__auto__;
var G__62121 = cljs.core.count.call(null,c__4314__auto__);
var G__62122 = (0);
seq__62109 = G__62119;
chunk__62110 = G__62120;
count__62111 = G__62121;
i__62112 = G__62122;
continue;
}
} else
{var vec__62114 = cljs.core.first.call(null,seq__62109__$1);var v = cljs.core.nth.call(null,vec__62114,(0),null);var _ = cljs.core.nth.call(null,vec__62114,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__62109,chunk__62110,count__62111,i__62112,vec__62114,v,_,seq__62109__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__62109,chunk__62110,count__62111,i__62112,vec__62114,v,_,seq__62109__$1,temp__4126__auto__))
);
{
var G__62123 = cljs.core.next.call(null,seq__62109__$1);
var G__62124 = null;
var G__62125 = (0);
var G__62126 = (0);
seq__62109 = G__62123;
chunk__62110 = G__62124;
count__62111 = G__62125;
i__62112 = G__62126;
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