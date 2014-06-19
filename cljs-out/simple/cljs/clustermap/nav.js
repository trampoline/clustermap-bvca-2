// Compiled by ClojureScript 0.0-2227
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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
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
var seq__13118_13124 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13119_13125 = null;var count__13120_13126 = 0;var i__13121_13127 = 0;while(true){
if((i__13121_13127 < count__13120_13126))
{var vec__13122_13128 = cljs.core._nth.call(null,chunk__13119_13125,i__13121_13127);var v_13129 = cljs.core.nth.call(null,vec__13122_13128,0,null);var body_class_13130 = cljs.core.nth.call(null,vec__13122_13128,1,null);if(cljs.core._EQ_.call(null,v_13129,view))
{domina.add_class_BANG_.call(null,body,body_class_13130);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13130);
}
{
var G__13131 = seq__13118_13124;
var G__13132 = chunk__13119_13125;
var G__13133 = count__13120_13126;
var G__13134 = (i__13121_13127 + 1);
seq__13118_13124 = G__13131;
chunk__13119_13125 = G__13132;
count__13120_13126 = G__13133;
i__13121_13127 = G__13134;
continue;
}
} else
{var temp__4126__auto___13135 = cljs.core.seq.call(null,seq__13118_13124);if(temp__4126__auto___13135)
{var seq__13118_13136__$1 = temp__4126__auto___13135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13118_13136__$1))
{var c__4295__auto___13137 = cljs.core.chunk_first.call(null,seq__13118_13136__$1);{
var G__13138 = cljs.core.chunk_rest.call(null,seq__13118_13136__$1);
var G__13139 = c__4295__auto___13137;
var G__13140 = cljs.core.count.call(null,c__4295__auto___13137);
var G__13141 = 0;
seq__13118_13124 = G__13138;
chunk__13119_13125 = G__13139;
count__13120_13126 = G__13140;
i__13121_13127 = G__13141;
continue;
}
} else
{var vec__13123_13142 = cljs.core.first.call(null,seq__13118_13136__$1);var v_13143 = cljs.core.nth.call(null,vec__13123_13142,0,null);var body_class_13144 = cljs.core.nth.call(null,vec__13123_13142,1,null);if(cljs.core._EQ_.call(null,v_13143,view))
{domina.add_class_BANG_.call(null,body,body_class_13144);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13144);
}
{
var G__13145 = cljs.core.next.call(null,seq__13118_13136__$1);
var G__13146 = null;
var G__13147 = 0;
var G__13148 = 0;
seq__13118_13124 = G__13145;
chunk__13119_13125 = G__13146;
count__13120_13126 = G__13147;
i__13121_13127 = G__13148;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13155 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13156 = null;var count__13157 = 0;var i__13158 = 0;while(true){
if((i__13158 < count__13157))
{var vec__13159 = cljs.core._nth.call(null,chunk__13156,i__13158);var v = cljs.core.nth.call(null,vec__13159,0,null);var _ = cljs.core.nth.call(null,vec__13159,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__13155,chunk__13156,count__13157,i__13158,vec__13159,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__13155,chunk__13156,count__13157,i__13158,vec__13159,v,_))
);
{
var G__13161 = seq__13155;
var G__13162 = chunk__13156;
var G__13163 = count__13157;
var G__13164 = (i__13158 + 1);
seq__13155 = G__13161;
chunk__13156 = G__13162;
count__13157 = G__13163;
i__13158 = G__13164;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13155);if(temp__4126__auto__)
{var seq__13155__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13155__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__13155__$1);{
var G__13165 = cljs.core.chunk_rest.call(null,seq__13155__$1);
var G__13166 = c__4295__auto__;
var G__13167 = cljs.core.count.call(null,c__4295__auto__);
var G__13168 = 0;
seq__13155 = G__13165;
chunk__13156 = G__13166;
count__13157 = G__13167;
i__13158 = G__13168;
continue;
}
} else
{var vec__13160 = cljs.core.first.call(null,seq__13155__$1);var v = cljs.core.nth.call(null,vec__13160,0,null);var _ = cljs.core.nth.call(null,vec__13160,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__13155,chunk__13156,count__13157,i__13158,vec__13160,v,_,seq__13155__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__13155,chunk__13156,count__13157,i__13158,vec__13160,v,_,seq__13155__$1,temp__4126__auto__))
);
{
var G__13169 = cljs.core.next.call(null,seq__13155__$1);
var G__13170 = null;
var G__13171 = 0;
var G__13172 = 0;
seq__13155 = G__13169;
chunk__13156 = G__13170;
count__13157 = G__13171;
i__13158 = G__13172;
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
