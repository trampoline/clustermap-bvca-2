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
var seq__13126_13132 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13127_13133 = null;var count__13128_13134 = 0;var i__13129_13135 = 0;while(true){
if((i__13129_13135 < count__13128_13134))
{var vec__13130_13136 = cljs.core._nth.call(null,chunk__13127_13133,i__13129_13135);var v_13137 = cljs.core.nth.call(null,vec__13130_13136,0,null);var body_class_13138 = cljs.core.nth.call(null,vec__13130_13136,1,null);if(cljs.core._EQ_.call(null,v_13137,view))
{domina.add_class_BANG_.call(null,body,body_class_13138);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13138);
}
{
var G__13139 = seq__13126_13132;
var G__13140 = chunk__13127_13133;
var G__13141 = count__13128_13134;
var G__13142 = (i__13129_13135 + 1);
seq__13126_13132 = G__13139;
chunk__13127_13133 = G__13140;
count__13128_13134 = G__13141;
i__13129_13135 = G__13142;
continue;
}
} else
{var temp__4126__auto___13143 = cljs.core.seq.call(null,seq__13126_13132);if(temp__4126__auto___13143)
{var seq__13126_13144__$1 = temp__4126__auto___13143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13126_13144__$1))
{var c__4295__auto___13145 = cljs.core.chunk_first.call(null,seq__13126_13144__$1);{
var G__13146 = cljs.core.chunk_rest.call(null,seq__13126_13144__$1);
var G__13147 = c__4295__auto___13145;
var G__13148 = cljs.core.count.call(null,c__4295__auto___13145);
var G__13149 = 0;
seq__13126_13132 = G__13146;
chunk__13127_13133 = G__13147;
count__13128_13134 = G__13148;
i__13129_13135 = G__13149;
continue;
}
} else
{var vec__13131_13150 = cljs.core.first.call(null,seq__13126_13144__$1);var v_13151 = cljs.core.nth.call(null,vec__13131_13150,0,null);var body_class_13152 = cljs.core.nth.call(null,vec__13131_13150,1,null);if(cljs.core._EQ_.call(null,v_13151,view))
{domina.add_class_BANG_.call(null,body,body_class_13152);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13152);
}
{
var G__13153 = cljs.core.next.call(null,seq__13126_13144__$1);
var G__13154 = null;
var G__13155 = 0;
var G__13156 = 0;
seq__13126_13132 = G__13153;
chunk__13127_13133 = G__13154;
count__13128_13134 = G__13155;
i__13129_13135 = G__13156;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13163 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13164 = null;var count__13165 = 0;var i__13166 = 0;while(true){
if((i__13166 < count__13165))
{var vec__13167 = cljs.core._nth.call(null,chunk__13164,i__13166);var v = cljs.core.nth.call(null,vec__13167,0,null);var _ = cljs.core.nth.call(null,vec__13167,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__13163,chunk__13164,count__13165,i__13166,vec__13167,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__13163,chunk__13164,count__13165,i__13166,vec__13167,v,_))
);
{
var G__13169 = seq__13163;
var G__13170 = chunk__13164;
var G__13171 = count__13165;
var G__13172 = (i__13166 + 1);
seq__13163 = G__13169;
chunk__13164 = G__13170;
count__13165 = G__13171;
i__13166 = G__13172;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13163);if(temp__4126__auto__)
{var seq__13163__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13163__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__13163__$1);{
var G__13173 = cljs.core.chunk_rest.call(null,seq__13163__$1);
var G__13174 = c__4295__auto__;
var G__13175 = cljs.core.count.call(null,c__4295__auto__);
var G__13176 = 0;
seq__13163 = G__13173;
chunk__13164 = G__13174;
count__13165 = G__13175;
i__13166 = G__13176;
continue;
}
} else
{var vec__13168 = cljs.core.first.call(null,seq__13163__$1);var v = cljs.core.nth.call(null,vec__13168,0,null);var _ = cljs.core.nth.call(null,vec__13168,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__13163,chunk__13164,count__13165,i__13166,vec__13168,v,_,seq__13163__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__13163,chunk__13164,count__13165,i__13166,vec__13168,v,_,seq__13163__$1,temp__4126__auto__))
);
{
var G__13177 = cljs.core.next.call(null,seq__13163__$1);
var G__13178 = null;
var G__13179 = 0;
var G__13180 = 0;
seq__13163 = G__13177;
chunk__13164 = G__13178;
count__13165 = G__13179;
i__13166 = G__13180;
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
