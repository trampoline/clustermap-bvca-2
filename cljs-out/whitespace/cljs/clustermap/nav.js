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
var seq__46496_46502 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__46497_46503 = null;var count__46498_46504 = 0;var i__46499_46505 = 0;while(true){
if((i__46499_46505 < count__46498_46504))
{var vec__46500_46506 = cljs.core._nth.call(null,chunk__46497_46503,i__46499_46505);var v_46507 = cljs.core.nth.call(null,vec__46500_46506,0,null);var body_class_46508 = cljs.core.nth.call(null,vec__46500_46506,1,null);if(cljs.core._EQ_.call(null,v_46507,view))
{domina.add_class_BANG_.call(null,body,body_class_46508);
} else
{domina.remove_class_BANG_.call(null,body,body_class_46508);
}
{
var G__46509 = seq__46496_46502;
var G__46510 = chunk__46497_46503;
var G__46511 = count__46498_46504;
var G__46512 = (i__46499_46505 + 1);
seq__46496_46502 = G__46509;
chunk__46497_46503 = G__46510;
count__46498_46504 = G__46511;
i__46499_46505 = G__46512;
continue;
}
} else
{var temp__4126__auto___46513 = cljs.core.seq.call(null,seq__46496_46502);if(temp__4126__auto___46513)
{var seq__46496_46514__$1 = temp__4126__auto___46513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46496_46514__$1))
{var c__4295__auto___46515 = cljs.core.chunk_first.call(null,seq__46496_46514__$1);{
var G__46516 = cljs.core.chunk_rest.call(null,seq__46496_46514__$1);
var G__46517 = c__4295__auto___46515;
var G__46518 = cljs.core.count.call(null,c__4295__auto___46515);
var G__46519 = 0;
seq__46496_46502 = G__46516;
chunk__46497_46503 = G__46517;
count__46498_46504 = G__46518;
i__46499_46505 = G__46519;
continue;
}
} else
{var vec__46501_46520 = cljs.core.first.call(null,seq__46496_46514__$1);var v_46521 = cljs.core.nth.call(null,vec__46501_46520,0,null);var body_class_46522 = cljs.core.nth.call(null,vec__46501_46520,1,null);if(cljs.core._EQ_.call(null,v_46521,view))
{domina.add_class_BANG_.call(null,body,body_class_46522);
} else
{domina.remove_class_BANG_.call(null,body,body_class_46522);
}
{
var G__46523 = cljs.core.next.call(null,seq__46496_46514__$1);
var G__46524 = null;
var G__46525 = 0;
var G__46526 = 0;
seq__46496_46502 = G__46523;
chunk__46497_46503 = G__46524;
count__46498_46504 = G__46525;
i__46499_46505 = G__46526;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__46533 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__46534 = null;var count__46535 = 0;var i__46536 = 0;while(true){
if((i__46536 < count__46535))
{var vec__46537 = cljs.core._nth.call(null,chunk__46534,i__46536);var v = cljs.core.nth.call(null,vec__46537,0,null);var _ = cljs.core.nth.call(null,vec__46537,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46533,chunk__46534,count__46535,i__46536,vec__46537,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__46533,chunk__46534,count__46535,i__46536,vec__46537,v,_))
);
{
var G__46539 = seq__46533;
var G__46540 = chunk__46534;
var G__46541 = count__46535;
var G__46542 = (i__46536 + 1);
seq__46533 = G__46539;
chunk__46534 = G__46540;
count__46535 = G__46541;
i__46536 = G__46542;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__46533);if(temp__4126__auto__)
{var seq__46533__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46533__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__46533__$1);{
var G__46543 = cljs.core.chunk_rest.call(null,seq__46533__$1);
var G__46544 = c__4295__auto__;
var G__46545 = cljs.core.count.call(null,c__4295__auto__);
var G__46546 = 0;
seq__46533 = G__46543;
chunk__46534 = G__46544;
count__46535 = G__46545;
i__46536 = G__46546;
continue;
}
} else
{var vec__46538 = cljs.core.first.call(null,seq__46533__$1);var v = cljs.core.nth.call(null,vec__46538,0,null);var _ = cljs.core.nth.call(null,vec__46538,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46533,chunk__46534,count__46535,i__46536,vec__46538,v,_,seq__46533__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__46533,chunk__46534,count__46535,i__46536,vec__46538,v,_,seq__46533__$1,temp__4126__auto__))
);
{
var G__46547 = cljs.core.next.call(null,seq__46533__$1);
var G__46548 = null;
var G__46549 = 0;
var G__46550 = 0;
seq__46533 = G__46547;
chunk__46534 = G__46548;
count__46535 = G__46549;
i__46536 = G__46550;
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
