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
var seq__27484_27490 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__27485_27491 = null;var count__27486_27492 = (0);var i__27487_27493 = (0);while(true){
if((i__27487_27493 < count__27486_27492))
{var vec__27488_27494 = cljs.core._nth.call(null,chunk__27485_27491,i__27487_27493);var v_27495 = cljs.core.nth.call(null,vec__27488_27494,(0),null);var body_class_27496 = cljs.core.nth.call(null,vec__27488_27494,(1),null);if(cljs.core._EQ_.call(null,v_27495,view))
{domina.add_class_BANG_.call(null,body,body_class_27496);
} else
{domina.remove_class_BANG_.call(null,body,body_class_27496);
}
{
var G__27497 = seq__27484_27490;
var G__27498 = chunk__27485_27491;
var G__27499 = count__27486_27492;
var G__27500 = (i__27487_27493 + (1));
seq__27484_27490 = G__27497;
chunk__27485_27491 = G__27498;
count__27486_27492 = G__27499;
i__27487_27493 = G__27500;
continue;
}
} else
{var temp__4126__auto___27501 = cljs.core.seq.call(null,seq__27484_27490);if(temp__4126__auto___27501)
{var seq__27484_27502__$1 = temp__4126__auto___27501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27484_27502__$1))
{var c__4314__auto___27503 = cljs.core.chunk_first.call(null,seq__27484_27502__$1);{
var G__27504 = cljs.core.chunk_rest.call(null,seq__27484_27502__$1);
var G__27505 = c__4314__auto___27503;
var G__27506 = cljs.core.count.call(null,c__4314__auto___27503);
var G__27507 = (0);
seq__27484_27490 = G__27504;
chunk__27485_27491 = G__27505;
count__27486_27492 = G__27506;
i__27487_27493 = G__27507;
continue;
}
} else
{var vec__27489_27508 = cljs.core.first.call(null,seq__27484_27502__$1);var v_27509 = cljs.core.nth.call(null,vec__27489_27508,(0),null);var body_class_27510 = cljs.core.nth.call(null,vec__27489_27508,(1),null);if(cljs.core._EQ_.call(null,v_27509,view))
{domina.add_class_BANG_.call(null,body,body_class_27510);
} else
{domina.remove_class_BANG_.call(null,body,body_class_27510);
}
{
var G__27511 = cljs.core.next.call(null,seq__27484_27502__$1);
var G__27512 = null;
var G__27513 = (0);
var G__27514 = (0);
seq__27484_27490 = G__27511;
chunk__27485_27491 = G__27512;
count__27486_27492 = G__27513;
i__27487_27493 = G__27514;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__27521 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__27522 = null;var count__27523 = (0);var i__27524 = (0);while(true){
if((i__27524 < count__27523))
{var vec__27525 = cljs.core._nth.call(null,chunk__27522,i__27524);var v = cljs.core.nth.call(null,vec__27525,(0),null);var _ = cljs.core.nth.call(null,vec__27525,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__27521,chunk__27522,count__27523,i__27524,vec__27525,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__27521,chunk__27522,count__27523,i__27524,vec__27525,v,_))
);
{
var G__27527 = seq__27521;
var G__27528 = chunk__27522;
var G__27529 = count__27523;
var G__27530 = (i__27524 + (1));
seq__27521 = G__27527;
chunk__27522 = G__27528;
count__27523 = G__27529;
i__27524 = G__27530;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27521);if(temp__4126__auto__)
{var seq__27521__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27521__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__27521__$1);{
var G__27531 = cljs.core.chunk_rest.call(null,seq__27521__$1);
var G__27532 = c__4314__auto__;
var G__27533 = cljs.core.count.call(null,c__4314__auto__);
var G__27534 = (0);
seq__27521 = G__27531;
chunk__27522 = G__27532;
count__27523 = G__27533;
i__27524 = G__27534;
continue;
}
} else
{var vec__27526 = cljs.core.first.call(null,seq__27521__$1);var v = cljs.core.nth.call(null,vec__27526,(0),null);var _ = cljs.core.nth.call(null,vec__27526,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__27521,chunk__27522,count__27523,i__27524,vec__27526,v,_,seq__27521__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__27521,chunk__27522,count__27523,i__27524,vec__27526,v,_,seq__27521__$1,temp__4126__auto__))
);
{
var G__27535 = cljs.core.next.call(null,seq__27521__$1);
var G__27536 = null;
var G__27537 = (0);
var G__27538 = (0);
seq__27521 = G__27535;
chunk__27522 = G__27536;
count__27523 = G__27537;
i__27524 = G__27538;
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
