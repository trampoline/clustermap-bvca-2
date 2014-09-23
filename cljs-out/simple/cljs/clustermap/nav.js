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
var seq__26622_26628 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26623_26629 = null;var count__26624_26630 = (0);var i__26625_26631 = (0);while(true){
if((i__26625_26631 < count__26624_26630))
{var vec__26626_26632 = cljs.core._nth.call(null,chunk__26623_26629,i__26625_26631);var v_26633 = cljs.core.nth.call(null,vec__26626_26632,(0),null);var body_class_26634 = cljs.core.nth.call(null,vec__26626_26632,(1),null);if(cljs.core._EQ_.call(null,v_26633,view))
{domina.add_class_BANG_.call(null,body,body_class_26634);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26634);
}
{
var G__26635 = seq__26622_26628;
var G__26636 = chunk__26623_26629;
var G__26637 = count__26624_26630;
var G__26638 = (i__26625_26631 + (1));
seq__26622_26628 = G__26635;
chunk__26623_26629 = G__26636;
count__26624_26630 = G__26637;
i__26625_26631 = G__26638;
continue;
}
} else
{var temp__4126__auto___26639 = cljs.core.seq.call(null,seq__26622_26628);if(temp__4126__auto___26639)
{var seq__26622_26640__$1 = temp__4126__auto___26639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26622_26640__$1))
{var c__4314__auto___26641 = cljs.core.chunk_first.call(null,seq__26622_26640__$1);{
var G__26642 = cljs.core.chunk_rest.call(null,seq__26622_26640__$1);
var G__26643 = c__4314__auto___26641;
var G__26644 = cljs.core.count.call(null,c__4314__auto___26641);
var G__26645 = (0);
seq__26622_26628 = G__26642;
chunk__26623_26629 = G__26643;
count__26624_26630 = G__26644;
i__26625_26631 = G__26645;
continue;
}
} else
{var vec__26627_26646 = cljs.core.first.call(null,seq__26622_26640__$1);var v_26647 = cljs.core.nth.call(null,vec__26627_26646,(0),null);var body_class_26648 = cljs.core.nth.call(null,vec__26627_26646,(1),null);if(cljs.core._EQ_.call(null,v_26647,view))
{domina.add_class_BANG_.call(null,body,body_class_26648);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26648);
}
{
var G__26649 = cljs.core.next.call(null,seq__26622_26640__$1);
var G__26650 = null;
var G__26651 = (0);
var G__26652 = (0);
seq__26622_26628 = G__26649;
chunk__26623_26629 = G__26650;
count__26624_26630 = G__26651;
i__26625_26631 = G__26652;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__26659 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26660 = null;var count__26661 = (0);var i__26662 = (0);while(true){
if((i__26662 < count__26661))
{var vec__26663 = cljs.core._nth.call(null,chunk__26660,i__26662);var v = cljs.core.nth.call(null,vec__26663,(0),null);var _ = cljs.core.nth.call(null,vec__26663,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26659,chunk__26660,count__26661,i__26662,vec__26663,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26659,chunk__26660,count__26661,i__26662,vec__26663,v,_))
);
{
var G__26665 = seq__26659;
var G__26666 = chunk__26660;
var G__26667 = count__26661;
var G__26668 = (i__26662 + (1));
seq__26659 = G__26665;
chunk__26660 = G__26666;
count__26661 = G__26667;
i__26662 = G__26668;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26659);if(temp__4126__auto__)
{var seq__26659__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26659__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__26659__$1);{
var G__26669 = cljs.core.chunk_rest.call(null,seq__26659__$1);
var G__26670 = c__4314__auto__;
var G__26671 = cljs.core.count.call(null,c__4314__auto__);
var G__26672 = (0);
seq__26659 = G__26669;
chunk__26660 = G__26670;
count__26661 = G__26671;
i__26662 = G__26672;
continue;
}
} else
{var vec__26664 = cljs.core.first.call(null,seq__26659__$1);var v = cljs.core.nth.call(null,vec__26664,(0),null);var _ = cljs.core.nth.call(null,vec__26664,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26659,chunk__26660,count__26661,i__26662,vec__26664,v,_,seq__26659__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26659,chunk__26660,count__26661,i__26662,vec__26664,v,_,seq__26659__$1,temp__4126__auto__))
);
{
var G__26673 = cljs.core.next.call(null,seq__26659__$1);
var G__26674 = null;
var G__26675 = (0);
var G__26676 = (0);
seq__26659 = G__26673;
chunk__26660 = G__26674;
count__26661 = G__26675;
i__26662 = G__26676;
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
