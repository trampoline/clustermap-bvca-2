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
var seq__14541_14547 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14542_14548 = null;var count__14543_14549 = (0);var i__14544_14550 = (0);while(true){
if((i__14544_14550 < count__14543_14549))
{var vec__14545_14551 = cljs.core._nth.call(null,chunk__14542_14548,i__14544_14550);var v_14552 = cljs.core.nth.call(null,vec__14545_14551,(0),null);var body_class_14553 = cljs.core.nth.call(null,vec__14545_14551,(1),null);if(cljs.core._EQ_.call(null,v_14552,view))
{domina.add_class_BANG_.call(null,body,body_class_14553);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14553);
}
{
var G__14554 = seq__14541_14547;
var G__14555 = chunk__14542_14548;
var G__14556 = count__14543_14549;
var G__14557 = (i__14544_14550 + (1));
seq__14541_14547 = G__14554;
chunk__14542_14548 = G__14555;
count__14543_14549 = G__14556;
i__14544_14550 = G__14557;
continue;
}
} else
{var temp__4126__auto___14558 = cljs.core.seq.call(null,seq__14541_14547);if(temp__4126__auto___14558)
{var seq__14541_14559__$1 = temp__4126__auto___14558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14541_14559__$1))
{var c__4299__auto___14560 = cljs.core.chunk_first.call(null,seq__14541_14559__$1);{
var G__14561 = cljs.core.chunk_rest.call(null,seq__14541_14559__$1);
var G__14562 = c__4299__auto___14560;
var G__14563 = cljs.core.count.call(null,c__4299__auto___14560);
var G__14564 = (0);
seq__14541_14547 = G__14561;
chunk__14542_14548 = G__14562;
count__14543_14549 = G__14563;
i__14544_14550 = G__14564;
continue;
}
} else
{var vec__14546_14565 = cljs.core.first.call(null,seq__14541_14559__$1);var v_14566 = cljs.core.nth.call(null,vec__14546_14565,(0),null);var body_class_14567 = cljs.core.nth.call(null,vec__14546_14565,(1),null);if(cljs.core._EQ_.call(null,v_14566,view))
{domina.add_class_BANG_.call(null,body,body_class_14567);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14567);
}
{
var G__14568 = cljs.core.next.call(null,seq__14541_14559__$1);
var G__14569 = null;
var G__14570 = (0);
var G__14571 = (0);
seq__14541_14547 = G__14568;
chunk__14542_14548 = G__14569;
count__14543_14549 = G__14570;
i__14544_14550 = G__14571;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14578 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14579 = null;var count__14580 = (0);var i__14581 = (0);while(true){
if((i__14581 < count__14580))
{var vec__14582 = cljs.core._nth.call(null,chunk__14579,i__14581);var v = cljs.core.nth.call(null,vec__14582,(0),null);var _ = cljs.core.nth.call(null,vec__14582,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14578,chunk__14579,count__14580,i__14581,vec__14582,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14578,chunk__14579,count__14580,i__14581,vec__14582,v,_))
);
{
var G__14584 = seq__14578;
var G__14585 = chunk__14579;
var G__14586 = count__14580;
var G__14587 = (i__14581 + (1));
seq__14578 = G__14584;
chunk__14579 = G__14585;
count__14580 = G__14586;
i__14581 = G__14587;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14578);if(temp__4126__auto__)
{var seq__14578__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14578__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14578__$1);{
var G__14588 = cljs.core.chunk_rest.call(null,seq__14578__$1);
var G__14589 = c__4299__auto__;
var G__14590 = cljs.core.count.call(null,c__4299__auto__);
var G__14591 = (0);
seq__14578 = G__14588;
chunk__14579 = G__14589;
count__14580 = G__14590;
i__14581 = G__14591;
continue;
}
} else
{var vec__14583 = cljs.core.first.call(null,seq__14578__$1);var v = cljs.core.nth.call(null,vec__14583,(0),null);var _ = cljs.core.nth.call(null,vec__14583,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14578,chunk__14579,count__14580,i__14581,vec__14583,v,_,seq__14578__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14578,chunk__14579,count__14580,i__14581,vec__14583,v,_,seq__14578__$1,temp__4126__auto__))
);
{
var G__14592 = cljs.core.next.call(null,seq__14578__$1);
var G__14593 = null;
var G__14594 = (0);
var G__14595 = (0);
seq__14578 = G__14592;
chunk__14579 = G__14593;
count__14580 = G__14594;
i__14581 = G__14595;
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
