// Compiled by ClojureScript 0.0-2356
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
var seq__83503_83509 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__83504_83510 = null;var count__83505_83511 = (0);var i__83506_83512 = (0);while(true){
if((i__83506_83512 < count__83505_83511))
{var vec__83507_83513 = cljs.core._nth.call(null,chunk__83504_83510,i__83506_83512);var v_83514 = cljs.core.nth.call(null,vec__83507_83513,(0),null);var body_class_83515 = cljs.core.nth.call(null,vec__83507_83513,(1),null);if(cljs.core._EQ_.call(null,v_83514,view))
{domina.add_class_BANG_.call(null,body,body_class_83515);
} else
{domina.remove_class_BANG_.call(null,body,body_class_83515);
}
{
var G__83516 = seq__83503_83509;
var G__83517 = chunk__83504_83510;
var G__83518 = count__83505_83511;
var G__83519 = (i__83506_83512 + (1));
seq__83503_83509 = G__83516;
chunk__83504_83510 = G__83517;
count__83505_83511 = G__83518;
i__83506_83512 = G__83519;
continue;
}
} else
{var temp__4126__auto___83520 = cljs.core.seq.call(null,seq__83503_83509);if(temp__4126__auto___83520)
{var seq__83503_83521__$1 = temp__4126__auto___83520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__83503_83521__$1))
{var c__4406__auto___83522 = cljs.core.chunk_first.call(null,seq__83503_83521__$1);{
var G__83523 = cljs.core.chunk_rest.call(null,seq__83503_83521__$1);
var G__83524 = c__4406__auto___83522;
var G__83525 = cljs.core.count.call(null,c__4406__auto___83522);
var G__83526 = (0);
seq__83503_83509 = G__83523;
chunk__83504_83510 = G__83524;
count__83505_83511 = G__83525;
i__83506_83512 = G__83526;
continue;
}
} else
{var vec__83508_83527 = cljs.core.first.call(null,seq__83503_83521__$1);var v_83528 = cljs.core.nth.call(null,vec__83508_83527,(0),null);var body_class_83529 = cljs.core.nth.call(null,vec__83508_83527,(1),null);if(cljs.core._EQ_.call(null,v_83528,view))
{domina.add_class_BANG_.call(null,body,body_class_83529);
} else
{domina.remove_class_BANG_.call(null,body,body_class_83529);
}
{
var G__83530 = cljs.core.next.call(null,seq__83503_83521__$1);
var G__83531 = null;
var G__83532 = (0);
var G__83533 = (0);
seq__83503_83509 = G__83530;
chunk__83504_83510 = G__83531;
count__83505_83511 = G__83532;
i__83506_83512 = G__83533;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__83540 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__83541 = null;var count__83542 = (0);var i__83543 = (0);while(true){
if((i__83543 < count__83542))
{var vec__83544 = cljs.core._nth.call(null,chunk__83541,i__83543);var v = cljs.core.nth.call(null,vec__83544,(0),null);var _ = cljs.core.nth.call(null,vec__83544,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__83540,chunk__83541,count__83542,i__83543,vec__83544,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__83540,chunk__83541,count__83542,i__83543,vec__83544,v,_))
);
{
var G__83546 = seq__83540;
var G__83547 = chunk__83541;
var G__83548 = count__83542;
var G__83549 = (i__83543 + (1));
seq__83540 = G__83546;
chunk__83541 = G__83547;
count__83542 = G__83548;
i__83543 = G__83549;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__83540);if(temp__4126__auto__)
{var seq__83540__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__83540__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__83540__$1);{
var G__83550 = cljs.core.chunk_rest.call(null,seq__83540__$1);
var G__83551 = c__4406__auto__;
var G__83552 = cljs.core.count.call(null,c__4406__auto__);
var G__83553 = (0);
seq__83540 = G__83550;
chunk__83541 = G__83551;
count__83542 = G__83552;
i__83543 = G__83553;
continue;
}
} else
{var vec__83545 = cljs.core.first.call(null,seq__83540__$1);var v = cljs.core.nth.call(null,vec__83545,(0),null);var _ = cljs.core.nth.call(null,vec__83545,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__83540,chunk__83541,count__83542,i__83543,vec__83545,v,_,seq__83540__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__83540,chunk__83541,count__83542,i__83543,vec__83545,v,_,seq__83540__$1,temp__4126__auto__))
);
{
var G__83554 = cljs.core.next.call(null,seq__83540__$1);
var G__83555 = null;
var G__83556 = (0);
var G__83557 = (0);
seq__83540 = G__83554;
chunk__83541 = G__83555;
count__83542 = G__83556;
i__83543 = G__83557;
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