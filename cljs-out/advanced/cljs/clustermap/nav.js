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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1045,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1045,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{if(true)
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
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
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.cljs$core$IFn$_invoke$arity$1("body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.cljs$core$IFn$_invoke$arity$1(target_selector);var ul = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target_li,"..");var active_li = domina.css.sel.cljs$core$IFn$_invoke$arity$2(ul,"> .active");domina.remove_class_BANG_(active_li,"active");
domina.add_class_BANG_(target_li,"active");
var seq__37511_37517 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__37512_37518 = null;var count__37513_37519 = (0);var i__37514_37520 = (0);while(true){
if((i__37514_37520 < count__37513_37519))
{var vec__37515_37521 = chunk__37512_37518.cljs$core$IIndexed$_nth$arity$2(null,i__37514_37520);var v_37522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37515_37521,(0),null);var body_class_37523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37515_37521,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_37522,view))
{domina.add_class_BANG_(body,body_class_37523);
} else
{domina.remove_class_BANG_(body,body_class_37523);
}
{
var G__37524 = seq__37511_37517;
var G__37525 = chunk__37512_37518;
var G__37526 = count__37513_37519;
var G__37527 = (i__37514_37520 + (1));
seq__37511_37517 = G__37524;
chunk__37512_37518 = G__37525;
count__37513_37519 = G__37526;
i__37514_37520 = G__37527;
continue;
}
} else
{var temp__4126__auto___37528 = cljs.core.seq(seq__37511_37517);if(temp__4126__auto___37528)
{var seq__37511_37529__$1 = temp__4126__auto___37528;if(cljs.core.chunked_seq_QMARK_(seq__37511_37529__$1))
{var c__4299__auto___37530 = cljs.core.chunk_first(seq__37511_37529__$1);{
var G__37531 = cljs.core.chunk_rest(seq__37511_37529__$1);
var G__37532 = c__4299__auto___37530;
var G__37533 = cljs.core.count(c__4299__auto___37530);
var G__37534 = (0);
seq__37511_37517 = G__37531;
chunk__37512_37518 = G__37532;
count__37513_37519 = G__37533;
i__37514_37520 = G__37534;
continue;
}
} else
{var vec__37516_37535 = cljs.core.first(seq__37511_37529__$1);var v_37536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37516_37535,(0),null);var body_class_37537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37516_37535,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_37536,view))
{domina.add_class_BANG_(body,body_class_37537);
} else
{domina.remove_class_BANG_(body,body_class_37537);
}
{
var G__37538 = cljs.core.next(seq__37511_37529__$1);
var G__37539 = null;
var G__37540 = (0);
var G__37541 = (0);
seq__37511_37517 = G__37538;
chunk__37512_37518 = G__37539;
count__37513_37519 = G__37540;
i__37514_37520 = G__37541;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__37548 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__37549 = null;var count__37550 = (0);var i__37551 = (0);while(true){
if((i__37551 < count__37550))
{var vec__37552 = chunk__37549.cljs$core$IIndexed$_nth$arity$2(null,i__37551);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37552,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37552,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1045,((function (seq__37548,chunk__37549,count__37550,i__37551,vec__37552,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1046,v], null));
});})(seq__37548,chunk__37549,count__37550,i__37551,vec__37552,v,_))
);
{
var G__37554 = seq__37548;
var G__37555 = chunk__37549;
var G__37556 = count__37550;
var G__37557 = (i__37551 + (1));
seq__37548 = G__37554;
chunk__37549 = G__37555;
count__37550 = G__37556;
i__37551 = G__37557;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37548);if(temp__4126__auto__)
{var seq__37548__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37548__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37548__$1);{
var G__37558 = cljs.core.chunk_rest(seq__37548__$1);
var G__37559 = c__4299__auto__;
var G__37560 = cljs.core.count(c__4299__auto__);
var G__37561 = (0);
seq__37548 = G__37558;
chunk__37549 = G__37559;
count__37550 = G__37560;
i__37551 = G__37561;
continue;
}
} else
{var vec__37553 = cljs.core.first(seq__37548__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37553,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37553,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1045,((function (seq__37548,chunk__37549,count__37550,i__37551,vec__37553,v,_,seq__37548__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1046,v], null));
});})(seq__37548,chunk__37549,count__37550,i__37551,vec__37553,v,_,seq__37548__$1,temp__4126__auto__))
);
{
var G__37562 = cljs.core.next(seq__37548__$1);
var G__37563 = null;
var G__37564 = (0);
var G__37565 = (0);
seq__37548 = G__37562;
chunk__37549 = G__37563;
count__37550 = G__37564;
i__37551 = G__37565;
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
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips();
clustermap.nav.handle_toggle_nav_search();
clustermap.nav.handle_hide_show_map_report();
return clustermap.nav.handle_view_switches(comm);
});
