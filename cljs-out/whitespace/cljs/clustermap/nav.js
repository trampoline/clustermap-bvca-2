// Compiled by ClojureScript 0.0-2268
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
var seq__14546_14552 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14547_14553 = null;var count__14548_14554 = (0);var i__14549_14555 = (0);while(true){
if((i__14549_14555 < count__14548_14554))
{var vec__14550_14556 = cljs.core._nth.call(null,chunk__14547_14553,i__14549_14555);var v_14557 = cljs.core.nth.call(null,vec__14550_14556,(0),null);var body_class_14558 = cljs.core.nth.call(null,vec__14550_14556,(1),null);if(cljs.core._EQ_.call(null,v_14557,view))
{domina.add_class_BANG_.call(null,body,body_class_14558);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14558);
}
{
var G__14559 = seq__14546_14552;
var G__14560 = chunk__14547_14553;
var G__14561 = count__14548_14554;
var G__14562 = (i__14549_14555 + (1));
seq__14546_14552 = G__14559;
chunk__14547_14553 = G__14560;
count__14548_14554 = G__14561;
i__14549_14555 = G__14562;
continue;
}
} else
{var temp__4126__auto___14563 = cljs.core.seq.call(null,seq__14546_14552);if(temp__4126__auto___14563)
{var seq__14546_14564__$1 = temp__4126__auto___14563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14546_14564__$1))
{var c__4299__auto___14565 = cljs.core.chunk_first.call(null,seq__14546_14564__$1);{
var G__14566 = cljs.core.chunk_rest.call(null,seq__14546_14564__$1);
var G__14567 = c__4299__auto___14565;
var G__14568 = cljs.core.count.call(null,c__4299__auto___14565);
var G__14569 = (0);
seq__14546_14552 = G__14566;
chunk__14547_14553 = G__14567;
count__14548_14554 = G__14568;
i__14549_14555 = G__14569;
continue;
}
} else
{var vec__14551_14570 = cljs.core.first.call(null,seq__14546_14564__$1);var v_14571 = cljs.core.nth.call(null,vec__14551_14570,(0),null);var body_class_14572 = cljs.core.nth.call(null,vec__14551_14570,(1),null);if(cljs.core._EQ_.call(null,v_14571,view))
{domina.add_class_BANG_.call(null,body,body_class_14572);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14572);
}
{
var G__14573 = cljs.core.next.call(null,seq__14546_14564__$1);
var G__14574 = null;
var G__14575 = (0);
var G__14576 = (0);
seq__14546_14552 = G__14573;
chunk__14547_14553 = G__14574;
count__14548_14554 = G__14575;
i__14549_14555 = G__14576;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14583 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14584 = null;var count__14585 = (0);var i__14586 = (0);while(true){
if((i__14586 < count__14585))
{var vec__14587 = cljs.core._nth.call(null,chunk__14584,i__14586);var v = cljs.core.nth.call(null,vec__14587,(0),null);var _ = cljs.core.nth.call(null,vec__14587,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14583,chunk__14584,count__14585,i__14586,vec__14587,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14583,chunk__14584,count__14585,i__14586,vec__14587,v,_))
);
{
var G__14589 = seq__14583;
var G__14590 = chunk__14584;
var G__14591 = count__14585;
var G__14592 = (i__14586 + (1));
seq__14583 = G__14589;
chunk__14584 = G__14590;
count__14585 = G__14591;
i__14586 = G__14592;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14583);if(temp__4126__auto__)
{var seq__14583__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14583__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14583__$1);{
var G__14593 = cljs.core.chunk_rest.call(null,seq__14583__$1);
var G__14594 = c__4299__auto__;
var G__14595 = cljs.core.count.call(null,c__4299__auto__);
var G__14596 = (0);
seq__14583 = G__14593;
chunk__14584 = G__14594;
count__14585 = G__14595;
i__14586 = G__14596;
continue;
}
} else
{var vec__14588 = cljs.core.first.call(null,seq__14583__$1);var v = cljs.core.nth.call(null,vec__14588,(0),null);var _ = cljs.core.nth.call(null,vec__14588,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14583,chunk__14584,count__14585,i__14586,vec__14588,v,_,seq__14583__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14583,chunk__14584,count__14585,i__14586,vec__14588,v,_,seq__14583__$1,temp__4126__auto__))
);
{
var G__14597 = cljs.core.next.call(null,seq__14583__$1);
var G__14598 = null;
var G__14599 = (0);
var G__14600 = (0);
seq__14583 = G__14597;
chunk__14584 = G__14598;
count__14585 = G__14599;
i__14586 = G__14600;
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
