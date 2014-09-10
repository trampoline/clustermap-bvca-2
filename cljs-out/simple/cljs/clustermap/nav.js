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
var seq__26581_26587 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26582_26588 = null;var count__26583_26589 = (0);var i__26584_26590 = (0);while(true){
if((i__26584_26590 < count__26583_26589))
{var vec__26585_26591 = cljs.core._nth.call(null,chunk__26582_26588,i__26584_26590);var v_26592 = cljs.core.nth.call(null,vec__26585_26591,(0),null);var body_class_26593 = cljs.core.nth.call(null,vec__26585_26591,(1),null);if(cljs.core._EQ_.call(null,v_26592,view))
{domina.add_class_BANG_.call(null,body,body_class_26593);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26593);
}
{
var G__26594 = seq__26581_26587;
var G__26595 = chunk__26582_26588;
var G__26596 = count__26583_26589;
var G__26597 = (i__26584_26590 + (1));
seq__26581_26587 = G__26594;
chunk__26582_26588 = G__26595;
count__26583_26589 = G__26596;
i__26584_26590 = G__26597;
continue;
}
} else
{var temp__4126__auto___26598 = cljs.core.seq.call(null,seq__26581_26587);if(temp__4126__auto___26598)
{var seq__26581_26599__$1 = temp__4126__auto___26598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26581_26599__$1))
{var c__4297__auto___26600 = cljs.core.chunk_first.call(null,seq__26581_26599__$1);{
var G__26601 = cljs.core.chunk_rest.call(null,seq__26581_26599__$1);
var G__26602 = c__4297__auto___26600;
var G__26603 = cljs.core.count.call(null,c__4297__auto___26600);
var G__26604 = (0);
seq__26581_26587 = G__26601;
chunk__26582_26588 = G__26602;
count__26583_26589 = G__26603;
i__26584_26590 = G__26604;
continue;
}
} else
{var vec__26586_26605 = cljs.core.first.call(null,seq__26581_26599__$1);var v_26606 = cljs.core.nth.call(null,vec__26586_26605,(0),null);var body_class_26607 = cljs.core.nth.call(null,vec__26586_26605,(1),null);if(cljs.core._EQ_.call(null,v_26606,view))
{domina.add_class_BANG_.call(null,body,body_class_26607);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26607);
}
{
var G__26608 = cljs.core.next.call(null,seq__26581_26599__$1);
var G__26609 = null;
var G__26610 = (0);
var G__26611 = (0);
seq__26581_26587 = G__26608;
chunk__26582_26588 = G__26609;
count__26583_26589 = G__26610;
i__26584_26590 = G__26611;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__26618 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26619 = null;var count__26620 = (0);var i__26621 = (0);while(true){
if((i__26621 < count__26620))
{var vec__26622 = cljs.core._nth.call(null,chunk__26619,i__26621);var v = cljs.core.nth.call(null,vec__26622,(0),null);var _ = cljs.core.nth.call(null,vec__26622,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26618,chunk__26619,count__26620,i__26621,vec__26622,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26618,chunk__26619,count__26620,i__26621,vec__26622,v,_))
);
{
var G__26624 = seq__26618;
var G__26625 = chunk__26619;
var G__26626 = count__26620;
var G__26627 = (i__26621 + (1));
seq__26618 = G__26624;
chunk__26619 = G__26625;
count__26620 = G__26626;
i__26621 = G__26627;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26618);if(temp__4126__auto__)
{var seq__26618__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26618__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__26618__$1);{
var G__26628 = cljs.core.chunk_rest.call(null,seq__26618__$1);
var G__26629 = c__4297__auto__;
var G__26630 = cljs.core.count.call(null,c__4297__auto__);
var G__26631 = (0);
seq__26618 = G__26628;
chunk__26619 = G__26629;
count__26620 = G__26630;
i__26621 = G__26631;
continue;
}
} else
{var vec__26623 = cljs.core.first.call(null,seq__26618__$1);var v = cljs.core.nth.call(null,vec__26623,(0),null);var _ = cljs.core.nth.call(null,vec__26623,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26618,chunk__26619,count__26620,i__26621,vec__26623,v,_,seq__26618__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26618,chunk__26619,count__26620,i__26621,vec__26623,v,_,seq__26618__$1,temp__4126__auto__))
);
{
var G__26632 = cljs.core.next.call(null,seq__26618__$1);
var G__26633 = null;
var G__26634 = (0);
var G__26635 = (0);
seq__26618 = G__26632;
chunk__26619 = G__26633;
count__26620 = G__26634;
i__26621 = G__26635;
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
