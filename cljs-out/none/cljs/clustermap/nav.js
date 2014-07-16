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
var seq__49578_49584 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__49579_49585 = null;var count__49580_49586 = (0);var i__49581_49587 = (0);while(true){
if((i__49581_49587 < count__49580_49586))
{var vec__49582_49588 = cljs.core._nth.call(null,chunk__49579_49585,i__49581_49587);var v_49589 = cljs.core.nth.call(null,vec__49582_49588,(0),null);var body_class_49590 = cljs.core.nth.call(null,vec__49582_49588,(1),null);if(cljs.core._EQ_.call(null,v_49589,view))
{domina.add_class_BANG_.call(null,body,body_class_49590);
} else
{domina.remove_class_BANG_.call(null,body,body_class_49590);
}
{
var G__49591 = seq__49578_49584;
var G__49592 = chunk__49579_49585;
var G__49593 = count__49580_49586;
var G__49594 = (i__49581_49587 + (1));
seq__49578_49584 = G__49591;
chunk__49579_49585 = G__49592;
count__49580_49586 = G__49593;
i__49581_49587 = G__49594;
continue;
}
} else
{var temp__4126__auto___49595 = cljs.core.seq.call(null,seq__49578_49584);if(temp__4126__auto___49595)
{var seq__49578_49596__$1 = temp__4126__auto___49595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49578_49596__$1))
{var c__4299__auto___49597 = cljs.core.chunk_first.call(null,seq__49578_49596__$1);{
var G__49598 = cljs.core.chunk_rest.call(null,seq__49578_49596__$1);
var G__49599 = c__4299__auto___49597;
var G__49600 = cljs.core.count.call(null,c__4299__auto___49597);
var G__49601 = (0);
seq__49578_49584 = G__49598;
chunk__49579_49585 = G__49599;
count__49580_49586 = G__49600;
i__49581_49587 = G__49601;
continue;
}
} else
{var vec__49583_49602 = cljs.core.first.call(null,seq__49578_49596__$1);var v_49603 = cljs.core.nth.call(null,vec__49583_49602,(0),null);var body_class_49604 = cljs.core.nth.call(null,vec__49583_49602,(1),null);if(cljs.core._EQ_.call(null,v_49603,view))
{domina.add_class_BANG_.call(null,body,body_class_49604);
} else
{domina.remove_class_BANG_.call(null,body,body_class_49604);
}
{
var G__49605 = cljs.core.next.call(null,seq__49578_49596__$1);
var G__49606 = null;
var G__49607 = (0);
var G__49608 = (0);
seq__49578_49584 = G__49605;
chunk__49579_49585 = G__49606;
count__49580_49586 = G__49607;
i__49581_49587 = G__49608;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__49615 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__49616 = null;var count__49617 = (0);var i__49618 = (0);while(true){
if((i__49618 < count__49617))
{var vec__49619 = cljs.core._nth.call(null,chunk__49616,i__49618);var v = cljs.core.nth.call(null,vec__49619,(0),null);var _ = cljs.core.nth.call(null,vec__49619,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__49615,chunk__49616,count__49617,i__49618,vec__49619,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__49615,chunk__49616,count__49617,i__49618,vec__49619,v,_))
);
{
var G__49621 = seq__49615;
var G__49622 = chunk__49616;
var G__49623 = count__49617;
var G__49624 = (i__49618 + (1));
seq__49615 = G__49621;
chunk__49616 = G__49622;
count__49617 = G__49623;
i__49618 = G__49624;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49615);if(temp__4126__auto__)
{var seq__49615__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49615__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__49615__$1);{
var G__49625 = cljs.core.chunk_rest.call(null,seq__49615__$1);
var G__49626 = c__4299__auto__;
var G__49627 = cljs.core.count.call(null,c__4299__auto__);
var G__49628 = (0);
seq__49615 = G__49625;
chunk__49616 = G__49626;
count__49617 = G__49627;
i__49618 = G__49628;
continue;
}
} else
{var vec__49620 = cljs.core.first.call(null,seq__49615__$1);var v = cljs.core.nth.call(null,vec__49620,(0),null);var _ = cljs.core.nth.call(null,vec__49620,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__49615,chunk__49616,count__49617,i__49618,vec__49620,v,_,seq__49615__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__49615,chunk__49616,count__49617,i__49618,vec__49620,v,_,seq__49615__$1,temp__4126__auto__))
);
{
var G__49629 = cljs.core.next.call(null,seq__49615__$1);
var G__49630 = null;
var G__49631 = (0);
var G__49632 = (0);
seq__49615 = G__49629;
chunk__49616 = G__49630;
count__49617 = G__49631;
i__49618 = G__49632;
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