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
var seq__46498_46504 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__46499_46505 = null;var count__46500_46506 = 0;var i__46501_46507 = 0;while(true){
if((i__46501_46507 < count__46500_46506))
{var vec__46502_46508 = cljs.core._nth.call(null,chunk__46499_46505,i__46501_46507);var v_46509 = cljs.core.nth.call(null,vec__46502_46508,0,null);var body_class_46510 = cljs.core.nth.call(null,vec__46502_46508,1,null);if(cljs.core._EQ_.call(null,v_46509,view))
{domina.add_class_BANG_.call(null,body,body_class_46510);
} else
{domina.remove_class_BANG_.call(null,body,body_class_46510);
}
{
var G__46511 = seq__46498_46504;
var G__46512 = chunk__46499_46505;
var G__46513 = count__46500_46506;
var G__46514 = (i__46501_46507 + 1);
seq__46498_46504 = G__46511;
chunk__46499_46505 = G__46512;
count__46500_46506 = G__46513;
i__46501_46507 = G__46514;
continue;
}
} else
{var temp__4126__auto___46515 = cljs.core.seq.call(null,seq__46498_46504);if(temp__4126__auto___46515)
{var seq__46498_46516__$1 = temp__4126__auto___46515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46498_46516__$1))
{var c__4297__auto___46517 = cljs.core.chunk_first.call(null,seq__46498_46516__$1);{
var G__46518 = cljs.core.chunk_rest.call(null,seq__46498_46516__$1);
var G__46519 = c__4297__auto___46517;
var G__46520 = cljs.core.count.call(null,c__4297__auto___46517);
var G__46521 = 0;
seq__46498_46504 = G__46518;
chunk__46499_46505 = G__46519;
count__46500_46506 = G__46520;
i__46501_46507 = G__46521;
continue;
}
} else
{var vec__46503_46522 = cljs.core.first.call(null,seq__46498_46516__$1);var v_46523 = cljs.core.nth.call(null,vec__46503_46522,0,null);var body_class_46524 = cljs.core.nth.call(null,vec__46503_46522,1,null);if(cljs.core._EQ_.call(null,v_46523,view))
{domina.add_class_BANG_.call(null,body,body_class_46524);
} else
{domina.remove_class_BANG_.call(null,body,body_class_46524);
}
{
var G__46525 = cljs.core.next.call(null,seq__46498_46516__$1);
var G__46526 = null;
var G__46527 = 0;
var G__46528 = 0;
seq__46498_46504 = G__46525;
chunk__46499_46505 = G__46526;
count__46500_46506 = G__46527;
i__46501_46507 = G__46528;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__46535 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__46536 = null;var count__46537 = 0;var i__46538 = 0;while(true){
if((i__46538 < count__46537))
{var vec__46539 = cljs.core._nth.call(null,chunk__46536,i__46538);var v = cljs.core.nth.call(null,vec__46539,0,null);var _ = cljs.core.nth.call(null,vec__46539,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46535,chunk__46536,count__46537,i__46538,vec__46539,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__46535,chunk__46536,count__46537,i__46538,vec__46539,v,_))
);
{
var G__46541 = seq__46535;
var G__46542 = chunk__46536;
var G__46543 = count__46537;
var G__46544 = (i__46538 + 1);
seq__46535 = G__46541;
chunk__46536 = G__46542;
count__46537 = G__46543;
i__46538 = G__46544;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__46535);if(temp__4126__auto__)
{var seq__46535__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46535__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__46535__$1);{
var G__46545 = cljs.core.chunk_rest.call(null,seq__46535__$1);
var G__46546 = c__4297__auto__;
var G__46547 = cljs.core.count.call(null,c__4297__auto__);
var G__46548 = 0;
seq__46535 = G__46545;
chunk__46536 = G__46546;
count__46537 = G__46547;
i__46538 = G__46548;
continue;
}
} else
{var vec__46540 = cljs.core.first.call(null,seq__46535__$1);var v = cljs.core.nth.call(null,vec__46540,0,null);var _ = cljs.core.nth.call(null,vec__46540,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46535,chunk__46536,count__46537,i__46538,vec__46540,v,_,seq__46535__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__46535,chunk__46536,count__46537,i__46538,vec__46540,v,_,seq__46535__$1,temp__4126__auto__))
);
{
var G__46549 = cljs.core.next.call(null,seq__46535__$1);
var G__46550 = null;
var G__46551 = 0;
var G__46552 = 0;
seq__46535 = G__46549;
chunk__46536 = G__46550;
count__46537 = G__46551;
i__46538 = G__46552;
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

//# sourceMappingURL=nav.js.map