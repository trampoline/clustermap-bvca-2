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
var seq__47534_47540 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__47535_47541 = null;var count__47536_47542 = (0);var i__47537_47543 = (0);while(true){
if((i__47537_47543 < count__47536_47542))
{var vec__47538_47544 = cljs.core._nth.call(null,chunk__47535_47541,i__47537_47543);var v_47545 = cljs.core.nth.call(null,vec__47538_47544,(0),null);var body_class_47546 = cljs.core.nth.call(null,vec__47538_47544,(1),null);if(cljs.core._EQ_.call(null,v_47545,view))
{domina.add_class_BANG_.call(null,body,body_class_47546);
} else
{domina.remove_class_BANG_.call(null,body,body_class_47546);
}
{
var G__47547 = seq__47534_47540;
var G__47548 = chunk__47535_47541;
var G__47549 = count__47536_47542;
var G__47550 = (i__47537_47543 + (1));
seq__47534_47540 = G__47547;
chunk__47535_47541 = G__47548;
count__47536_47542 = G__47549;
i__47537_47543 = G__47550;
continue;
}
} else
{var temp__4126__auto___47551 = cljs.core.seq.call(null,seq__47534_47540);if(temp__4126__auto___47551)
{var seq__47534_47552__$1 = temp__4126__auto___47551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47534_47552__$1))
{var c__4299__auto___47553 = cljs.core.chunk_first.call(null,seq__47534_47552__$1);{
var G__47554 = cljs.core.chunk_rest.call(null,seq__47534_47552__$1);
var G__47555 = c__4299__auto___47553;
var G__47556 = cljs.core.count.call(null,c__4299__auto___47553);
var G__47557 = (0);
seq__47534_47540 = G__47554;
chunk__47535_47541 = G__47555;
count__47536_47542 = G__47556;
i__47537_47543 = G__47557;
continue;
}
} else
{var vec__47539_47558 = cljs.core.first.call(null,seq__47534_47552__$1);var v_47559 = cljs.core.nth.call(null,vec__47539_47558,(0),null);var body_class_47560 = cljs.core.nth.call(null,vec__47539_47558,(1),null);if(cljs.core._EQ_.call(null,v_47559,view))
{domina.add_class_BANG_.call(null,body,body_class_47560);
} else
{domina.remove_class_BANG_.call(null,body,body_class_47560);
}
{
var G__47561 = cljs.core.next.call(null,seq__47534_47552__$1);
var G__47562 = null;
var G__47563 = (0);
var G__47564 = (0);
seq__47534_47540 = G__47561;
chunk__47535_47541 = G__47562;
count__47536_47542 = G__47563;
i__47537_47543 = G__47564;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__47571 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__47572 = null;var count__47573 = (0);var i__47574 = (0);while(true){
if((i__47574 < count__47573))
{var vec__47575 = cljs.core._nth.call(null,chunk__47572,i__47574);var v = cljs.core.nth.call(null,vec__47575,(0),null);var _ = cljs.core.nth.call(null,vec__47575,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__47571,chunk__47572,count__47573,i__47574,vec__47575,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__47571,chunk__47572,count__47573,i__47574,vec__47575,v,_))
);
{
var G__47577 = seq__47571;
var G__47578 = chunk__47572;
var G__47579 = count__47573;
var G__47580 = (i__47574 + (1));
seq__47571 = G__47577;
chunk__47572 = G__47578;
count__47573 = G__47579;
i__47574 = G__47580;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__47571);if(temp__4126__auto__)
{var seq__47571__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47571__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__47571__$1);{
var G__47581 = cljs.core.chunk_rest.call(null,seq__47571__$1);
var G__47582 = c__4299__auto__;
var G__47583 = cljs.core.count.call(null,c__4299__auto__);
var G__47584 = (0);
seq__47571 = G__47581;
chunk__47572 = G__47582;
count__47573 = G__47583;
i__47574 = G__47584;
continue;
}
} else
{var vec__47576 = cljs.core.first.call(null,seq__47571__$1);var v = cljs.core.nth.call(null,vec__47576,(0),null);var _ = cljs.core.nth.call(null,vec__47576,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__47571,chunk__47572,count__47573,i__47574,vec__47576,v,_,seq__47571__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__47571,chunk__47572,count__47573,i__47574,vec__47576,v,_,seq__47571__$1,temp__4126__auto__))
);
{
var G__47585 = cljs.core.next.call(null,seq__47571__$1);
var G__47586 = null;
var G__47587 = (0);
var G__47588 = (0);
seq__47571 = G__47585;
chunk__47572 = G__47586;
count__47573 = G__47587;
i__47574 = G__47588;
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