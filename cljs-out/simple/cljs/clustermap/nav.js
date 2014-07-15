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
var seq__24532_24538 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24533_24539 = null;var count__24534_24540 = (0);var i__24535_24541 = (0);while(true){
if((i__24535_24541 < count__24534_24540))
{var vec__24536_24542 = cljs.core._nth.call(null,chunk__24533_24539,i__24535_24541);var v_24543 = cljs.core.nth.call(null,vec__24536_24542,(0),null);var body_class_24544 = cljs.core.nth.call(null,vec__24536_24542,(1),null);if(cljs.core._EQ_.call(null,v_24543,view))
{domina.add_class_BANG_.call(null,body,body_class_24544);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24544);
}
{
var G__24545 = seq__24532_24538;
var G__24546 = chunk__24533_24539;
var G__24547 = count__24534_24540;
var G__24548 = (i__24535_24541 + (1));
seq__24532_24538 = G__24545;
chunk__24533_24539 = G__24546;
count__24534_24540 = G__24547;
i__24535_24541 = G__24548;
continue;
}
} else
{var temp__4126__auto___24549 = cljs.core.seq.call(null,seq__24532_24538);if(temp__4126__auto___24549)
{var seq__24532_24550__$1 = temp__4126__auto___24549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24532_24550__$1))
{var c__4299__auto___24551 = cljs.core.chunk_first.call(null,seq__24532_24550__$1);{
var G__24552 = cljs.core.chunk_rest.call(null,seq__24532_24550__$1);
var G__24553 = c__4299__auto___24551;
var G__24554 = cljs.core.count.call(null,c__4299__auto___24551);
var G__24555 = (0);
seq__24532_24538 = G__24552;
chunk__24533_24539 = G__24553;
count__24534_24540 = G__24554;
i__24535_24541 = G__24555;
continue;
}
} else
{var vec__24537_24556 = cljs.core.first.call(null,seq__24532_24550__$1);var v_24557 = cljs.core.nth.call(null,vec__24537_24556,(0),null);var body_class_24558 = cljs.core.nth.call(null,vec__24537_24556,(1),null);if(cljs.core._EQ_.call(null,v_24557,view))
{domina.add_class_BANG_.call(null,body,body_class_24558);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24558);
}
{
var G__24559 = cljs.core.next.call(null,seq__24532_24550__$1);
var G__24560 = null;
var G__24561 = (0);
var G__24562 = (0);
seq__24532_24538 = G__24559;
chunk__24533_24539 = G__24560;
count__24534_24540 = G__24561;
i__24535_24541 = G__24562;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__24569 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24570 = null;var count__24571 = (0);var i__24572 = (0);while(true){
if((i__24572 < count__24571))
{var vec__24573 = cljs.core._nth.call(null,chunk__24570,i__24572);var v = cljs.core.nth.call(null,vec__24573,(0),null);var _ = cljs.core.nth.call(null,vec__24573,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__24569,chunk__24570,count__24571,i__24572,vec__24573,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__24569,chunk__24570,count__24571,i__24572,vec__24573,v,_))
);
{
var G__24575 = seq__24569;
var G__24576 = chunk__24570;
var G__24577 = count__24571;
var G__24578 = (i__24572 + (1));
seq__24569 = G__24575;
chunk__24570 = G__24576;
count__24571 = G__24577;
i__24572 = G__24578;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24569);if(temp__4126__auto__)
{var seq__24569__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24569__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__24569__$1);{
var G__24579 = cljs.core.chunk_rest.call(null,seq__24569__$1);
var G__24580 = c__4299__auto__;
var G__24581 = cljs.core.count.call(null,c__4299__auto__);
var G__24582 = (0);
seq__24569 = G__24579;
chunk__24570 = G__24580;
count__24571 = G__24581;
i__24572 = G__24582;
continue;
}
} else
{var vec__24574 = cljs.core.first.call(null,seq__24569__$1);var v = cljs.core.nth.call(null,vec__24574,(0),null);var _ = cljs.core.nth.call(null,vec__24574,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__24569,chunk__24570,count__24571,i__24572,vec__24574,v,_,seq__24569__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__24569,chunk__24570,count__24571,i__24572,vec__24574,v,_,seq__24569__$1,temp__4126__auto__))
);
{
var G__24583 = cljs.core.next.call(null,seq__24569__$1);
var G__24584 = null;
var G__24585 = (0);
var G__24586 = (0);
seq__24569 = G__24583;
chunk__24570 = G__24584;
count__24571 = G__24585;
i__24572 = G__24586;
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
