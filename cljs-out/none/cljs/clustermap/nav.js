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
var seq__53480_53486 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__53481_53487 = null;var count__53482_53488 = (0);var i__53483_53489 = (0);while(true){
if((i__53483_53489 < count__53482_53488))
{var vec__53484_53490 = cljs.core._nth.call(null,chunk__53481_53487,i__53483_53489);var v_53491 = cljs.core.nth.call(null,vec__53484_53490,(0),null);var body_class_53492 = cljs.core.nth.call(null,vec__53484_53490,(1),null);if(cljs.core._EQ_.call(null,v_53491,view))
{domina.add_class_BANG_.call(null,body,body_class_53492);
} else
{domina.remove_class_BANG_.call(null,body,body_class_53492);
}
{
var G__53493 = seq__53480_53486;
var G__53494 = chunk__53481_53487;
var G__53495 = count__53482_53488;
var G__53496 = (i__53483_53489 + (1));
seq__53480_53486 = G__53493;
chunk__53481_53487 = G__53494;
count__53482_53488 = G__53495;
i__53483_53489 = G__53496;
continue;
}
} else
{var temp__4126__auto___53497 = cljs.core.seq.call(null,seq__53480_53486);if(temp__4126__auto___53497)
{var seq__53480_53498__$1 = temp__4126__auto___53497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53480_53498__$1))
{var c__4314__auto___53499 = cljs.core.chunk_first.call(null,seq__53480_53498__$1);{
var G__53500 = cljs.core.chunk_rest.call(null,seq__53480_53498__$1);
var G__53501 = c__4314__auto___53499;
var G__53502 = cljs.core.count.call(null,c__4314__auto___53499);
var G__53503 = (0);
seq__53480_53486 = G__53500;
chunk__53481_53487 = G__53501;
count__53482_53488 = G__53502;
i__53483_53489 = G__53503;
continue;
}
} else
{var vec__53485_53504 = cljs.core.first.call(null,seq__53480_53498__$1);var v_53505 = cljs.core.nth.call(null,vec__53485_53504,(0),null);var body_class_53506 = cljs.core.nth.call(null,vec__53485_53504,(1),null);if(cljs.core._EQ_.call(null,v_53505,view))
{domina.add_class_BANG_.call(null,body,body_class_53506);
} else
{domina.remove_class_BANG_.call(null,body,body_class_53506);
}
{
var G__53507 = cljs.core.next.call(null,seq__53480_53498__$1);
var G__53508 = null;
var G__53509 = (0);
var G__53510 = (0);
seq__53480_53486 = G__53507;
chunk__53481_53487 = G__53508;
count__53482_53488 = G__53509;
i__53483_53489 = G__53510;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__53517 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__53518 = null;var count__53519 = (0);var i__53520 = (0);while(true){
if((i__53520 < count__53519))
{var vec__53521 = cljs.core._nth.call(null,chunk__53518,i__53520);var v = cljs.core.nth.call(null,vec__53521,(0),null);var _ = cljs.core.nth.call(null,vec__53521,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__53517,chunk__53518,count__53519,i__53520,vec__53521,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__53517,chunk__53518,count__53519,i__53520,vec__53521,v,_))
);
{
var G__53523 = seq__53517;
var G__53524 = chunk__53518;
var G__53525 = count__53519;
var G__53526 = (i__53520 + (1));
seq__53517 = G__53523;
chunk__53518 = G__53524;
count__53519 = G__53525;
i__53520 = G__53526;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__53517);if(temp__4126__auto__)
{var seq__53517__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53517__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__53517__$1);{
var G__53527 = cljs.core.chunk_rest.call(null,seq__53517__$1);
var G__53528 = c__4314__auto__;
var G__53529 = cljs.core.count.call(null,c__4314__auto__);
var G__53530 = (0);
seq__53517 = G__53527;
chunk__53518 = G__53528;
count__53519 = G__53529;
i__53520 = G__53530;
continue;
}
} else
{var vec__53522 = cljs.core.first.call(null,seq__53517__$1);var v = cljs.core.nth.call(null,vec__53522,(0),null);var _ = cljs.core.nth.call(null,vec__53522,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__53517,chunk__53518,count__53519,i__53520,vec__53522,v,_,seq__53517__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__53517,chunk__53518,count__53519,i__53520,vec__53522,v,_,seq__53517__$1,temp__4126__auto__))
);
{
var G__53531 = cljs.core.next.call(null,seq__53517__$1);
var G__53532 = null;
var G__53533 = (0);
var G__53534 = (0);
seq__53517 = G__53531;
chunk__53518 = G__53532;
count__53519 = G__53533;
i__53520 = G__53534;
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