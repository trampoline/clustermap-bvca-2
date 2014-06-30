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
var seq__13120_13126 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13121_13127 = null;var count__13122_13128 = 0;var i__13123_13129 = 0;while(true){
if((i__13123_13129 < count__13122_13128))
{var vec__13124_13130 = cljs.core._nth.call(null,chunk__13121_13127,i__13123_13129);var v_13131 = cljs.core.nth.call(null,vec__13124_13130,0,null);var body_class_13132 = cljs.core.nth.call(null,vec__13124_13130,1,null);if(cljs.core._EQ_.call(null,v_13131,view))
{domina.add_class_BANG_.call(null,body,body_class_13132);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13132);
}
{
var G__13133 = seq__13120_13126;
var G__13134 = chunk__13121_13127;
var G__13135 = count__13122_13128;
var G__13136 = (i__13123_13129 + 1);
seq__13120_13126 = G__13133;
chunk__13121_13127 = G__13134;
count__13122_13128 = G__13135;
i__13123_13129 = G__13136;
continue;
}
} else
{var temp__4126__auto___13137 = cljs.core.seq.call(null,seq__13120_13126);if(temp__4126__auto___13137)
{var seq__13120_13138__$1 = temp__4126__auto___13137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13120_13138__$1))
{var c__4297__auto___13139 = cljs.core.chunk_first.call(null,seq__13120_13138__$1);{
var G__13140 = cljs.core.chunk_rest.call(null,seq__13120_13138__$1);
var G__13141 = c__4297__auto___13139;
var G__13142 = cljs.core.count.call(null,c__4297__auto___13139);
var G__13143 = 0;
seq__13120_13126 = G__13140;
chunk__13121_13127 = G__13141;
count__13122_13128 = G__13142;
i__13123_13129 = G__13143;
continue;
}
} else
{var vec__13125_13144 = cljs.core.first.call(null,seq__13120_13138__$1);var v_13145 = cljs.core.nth.call(null,vec__13125_13144,0,null);var body_class_13146 = cljs.core.nth.call(null,vec__13125_13144,1,null);if(cljs.core._EQ_.call(null,v_13145,view))
{domina.add_class_BANG_.call(null,body,body_class_13146);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13146);
}
{
var G__13147 = cljs.core.next.call(null,seq__13120_13138__$1);
var G__13148 = null;
var G__13149 = 0;
var G__13150 = 0;
seq__13120_13126 = G__13147;
chunk__13121_13127 = G__13148;
count__13122_13128 = G__13149;
i__13123_13129 = G__13150;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13157 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13158 = null;var count__13159 = 0;var i__13160 = 0;while(true){
if((i__13160 < count__13159))
{var vec__13161 = cljs.core._nth.call(null,chunk__13158,i__13160);var v = cljs.core.nth.call(null,vec__13161,0,null);var _ = cljs.core.nth.call(null,vec__13161,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__13157,chunk__13158,count__13159,i__13160,vec__13161,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__13157,chunk__13158,count__13159,i__13160,vec__13161,v,_))
);
{
var G__13163 = seq__13157;
var G__13164 = chunk__13158;
var G__13165 = count__13159;
var G__13166 = (i__13160 + 1);
seq__13157 = G__13163;
chunk__13158 = G__13164;
count__13159 = G__13165;
i__13160 = G__13166;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13157);if(temp__4126__auto__)
{var seq__13157__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13157__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__13157__$1);{
var G__13167 = cljs.core.chunk_rest.call(null,seq__13157__$1);
var G__13168 = c__4297__auto__;
var G__13169 = cljs.core.count.call(null,c__4297__auto__);
var G__13170 = 0;
seq__13157 = G__13167;
chunk__13158 = G__13168;
count__13159 = G__13169;
i__13160 = G__13170;
continue;
}
} else
{var vec__13162 = cljs.core.first.call(null,seq__13157__$1);var v = cljs.core.nth.call(null,vec__13162,0,null);var _ = cljs.core.nth.call(null,vec__13162,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__13157,chunk__13158,count__13159,i__13160,vec__13162,v,_,seq__13157__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__13157,chunk__13158,count__13159,i__13160,vec__13162,v,_,seq__13157__$1,temp__4126__auto__))
);
{
var G__13171 = cljs.core.next.call(null,seq__13157__$1);
var G__13172 = null;
var G__13173 = 0;
var G__13174 = 0;
seq__13157 = G__13171;
chunk__13158 = G__13172;
count__13159 = G__13173;
i__13160 = G__13174;
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
