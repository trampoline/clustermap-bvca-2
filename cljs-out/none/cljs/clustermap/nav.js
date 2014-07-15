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
var seq__47046_47052 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__47047_47053 = null;var count__47048_47054 = (0);var i__47049_47055 = (0);while(true){
if((i__47049_47055 < count__47048_47054))
{var vec__47050_47056 = cljs.core._nth.call(null,chunk__47047_47053,i__47049_47055);var v_47057 = cljs.core.nth.call(null,vec__47050_47056,(0),null);var body_class_47058 = cljs.core.nth.call(null,vec__47050_47056,(1),null);if(cljs.core._EQ_.call(null,v_47057,view))
{domina.add_class_BANG_.call(null,body,body_class_47058);
} else
{domina.remove_class_BANG_.call(null,body,body_class_47058);
}
{
var G__47059 = seq__47046_47052;
var G__47060 = chunk__47047_47053;
var G__47061 = count__47048_47054;
var G__47062 = (i__47049_47055 + (1));
seq__47046_47052 = G__47059;
chunk__47047_47053 = G__47060;
count__47048_47054 = G__47061;
i__47049_47055 = G__47062;
continue;
}
} else
{var temp__4126__auto___47063 = cljs.core.seq.call(null,seq__47046_47052);if(temp__4126__auto___47063)
{var seq__47046_47064__$1 = temp__4126__auto___47063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47046_47064__$1))
{var c__4299__auto___47065 = cljs.core.chunk_first.call(null,seq__47046_47064__$1);{
var G__47066 = cljs.core.chunk_rest.call(null,seq__47046_47064__$1);
var G__47067 = c__4299__auto___47065;
var G__47068 = cljs.core.count.call(null,c__4299__auto___47065);
var G__47069 = (0);
seq__47046_47052 = G__47066;
chunk__47047_47053 = G__47067;
count__47048_47054 = G__47068;
i__47049_47055 = G__47069;
continue;
}
} else
{var vec__47051_47070 = cljs.core.first.call(null,seq__47046_47064__$1);var v_47071 = cljs.core.nth.call(null,vec__47051_47070,(0),null);var body_class_47072 = cljs.core.nth.call(null,vec__47051_47070,(1),null);if(cljs.core._EQ_.call(null,v_47071,view))
{domina.add_class_BANG_.call(null,body,body_class_47072);
} else
{domina.remove_class_BANG_.call(null,body,body_class_47072);
}
{
var G__47073 = cljs.core.next.call(null,seq__47046_47064__$1);
var G__47074 = null;
var G__47075 = (0);
var G__47076 = (0);
seq__47046_47052 = G__47073;
chunk__47047_47053 = G__47074;
count__47048_47054 = G__47075;
i__47049_47055 = G__47076;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__47083 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__47084 = null;var count__47085 = (0);var i__47086 = (0);while(true){
if((i__47086 < count__47085))
{var vec__47087 = cljs.core._nth.call(null,chunk__47084,i__47086);var v = cljs.core.nth.call(null,vec__47087,(0),null);var _ = cljs.core.nth.call(null,vec__47087,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__47083,chunk__47084,count__47085,i__47086,vec__47087,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__47083,chunk__47084,count__47085,i__47086,vec__47087,v,_))
);
{
var G__47089 = seq__47083;
var G__47090 = chunk__47084;
var G__47091 = count__47085;
var G__47092 = (i__47086 + (1));
seq__47083 = G__47089;
chunk__47084 = G__47090;
count__47085 = G__47091;
i__47086 = G__47092;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__47083);if(temp__4126__auto__)
{var seq__47083__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47083__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__47083__$1);{
var G__47093 = cljs.core.chunk_rest.call(null,seq__47083__$1);
var G__47094 = c__4299__auto__;
var G__47095 = cljs.core.count.call(null,c__4299__auto__);
var G__47096 = (0);
seq__47083 = G__47093;
chunk__47084 = G__47094;
count__47085 = G__47095;
i__47086 = G__47096;
continue;
}
} else
{var vec__47088 = cljs.core.first.call(null,seq__47083__$1);var v = cljs.core.nth.call(null,vec__47088,(0),null);var _ = cljs.core.nth.call(null,vec__47088,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__47083,chunk__47084,count__47085,i__47086,vec__47088,v,_,seq__47083__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__47083,chunk__47084,count__47085,i__47086,vec__47088,v,_,seq__47083__$1,temp__4126__auto__))
);
{
var G__47097 = cljs.core.next.call(null,seq__47083__$1);
var G__47098 = null;
var G__47099 = (0);
var G__47100 = (0);
seq__47083 = G__47097;
chunk__47084 = G__47098;
count__47085 = G__47099;
i__47086 = G__47100;
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