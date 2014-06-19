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
var seq__46528_46534 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__46529_46535 = null;var count__46530_46536 = 0;var i__46531_46537 = 0;while(true){
if((i__46531_46537 < count__46530_46536))
{var vec__46532_46538 = cljs.core._nth.call(null,chunk__46529_46535,i__46531_46537);var v_46539 = cljs.core.nth.call(null,vec__46532_46538,0,null);var body_class_46540 = cljs.core.nth.call(null,vec__46532_46538,1,null);if(cljs.core._EQ_.call(null,v_46539,view))
{domina.add_class_BANG_.call(null,body,body_class_46540);
} else
{domina.remove_class_BANG_.call(null,body,body_class_46540);
}
{
var G__46541 = seq__46528_46534;
var G__46542 = chunk__46529_46535;
var G__46543 = count__46530_46536;
var G__46544 = (i__46531_46537 + 1);
seq__46528_46534 = G__46541;
chunk__46529_46535 = G__46542;
count__46530_46536 = G__46543;
i__46531_46537 = G__46544;
continue;
}
} else
{var temp__4126__auto___46545 = cljs.core.seq.call(null,seq__46528_46534);if(temp__4126__auto___46545)
{var seq__46528_46546__$1 = temp__4126__auto___46545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46528_46546__$1))
{var c__4295__auto___46547 = cljs.core.chunk_first.call(null,seq__46528_46546__$1);{
var G__46548 = cljs.core.chunk_rest.call(null,seq__46528_46546__$1);
var G__46549 = c__4295__auto___46547;
var G__46550 = cljs.core.count.call(null,c__4295__auto___46547);
var G__46551 = 0;
seq__46528_46534 = G__46548;
chunk__46529_46535 = G__46549;
count__46530_46536 = G__46550;
i__46531_46537 = G__46551;
continue;
}
} else
{var vec__46533_46552 = cljs.core.first.call(null,seq__46528_46546__$1);var v_46553 = cljs.core.nth.call(null,vec__46533_46552,0,null);var body_class_46554 = cljs.core.nth.call(null,vec__46533_46552,1,null);if(cljs.core._EQ_.call(null,v_46553,view))
{domina.add_class_BANG_.call(null,body,body_class_46554);
} else
{domina.remove_class_BANG_.call(null,body,body_class_46554);
}
{
var G__46555 = cljs.core.next.call(null,seq__46528_46546__$1);
var G__46556 = null;
var G__46557 = 0;
var G__46558 = 0;
seq__46528_46534 = G__46555;
chunk__46529_46535 = G__46556;
count__46530_46536 = G__46557;
i__46531_46537 = G__46558;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__46565 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__46566 = null;var count__46567 = 0;var i__46568 = 0;while(true){
if((i__46568 < count__46567))
{var vec__46569 = cljs.core._nth.call(null,chunk__46566,i__46568);var v = cljs.core.nth.call(null,vec__46569,0,null);var _ = cljs.core.nth.call(null,vec__46569,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46565,chunk__46566,count__46567,i__46568,vec__46569,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__46565,chunk__46566,count__46567,i__46568,vec__46569,v,_))
);
{
var G__46571 = seq__46565;
var G__46572 = chunk__46566;
var G__46573 = count__46567;
var G__46574 = (i__46568 + 1);
seq__46565 = G__46571;
chunk__46566 = G__46572;
count__46567 = G__46573;
i__46568 = G__46574;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__46565);if(temp__4126__auto__)
{var seq__46565__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46565__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__46565__$1);{
var G__46575 = cljs.core.chunk_rest.call(null,seq__46565__$1);
var G__46576 = c__4295__auto__;
var G__46577 = cljs.core.count.call(null,c__4295__auto__);
var G__46578 = 0;
seq__46565 = G__46575;
chunk__46566 = G__46576;
count__46567 = G__46577;
i__46568 = G__46578;
continue;
}
} else
{var vec__46570 = cljs.core.first.call(null,seq__46565__$1);var v = cljs.core.nth.call(null,vec__46570,0,null);var _ = cljs.core.nth.call(null,vec__46570,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46565,chunk__46566,count__46567,i__46568,vec__46570,v,_,seq__46565__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__46565,chunk__46566,count__46567,i__46568,vec__46570,v,_,seq__46565__$1,temp__4126__auto__))
);
{
var G__46579 = cljs.core.next.call(null,seq__46565__$1);
var G__46580 = null;
var G__46581 = 0;
var G__46582 = 0;
seq__46565 = G__46579;
chunk__46566 = G__46580;
count__46567 = G__46581;
i__46568 = G__46582;
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
