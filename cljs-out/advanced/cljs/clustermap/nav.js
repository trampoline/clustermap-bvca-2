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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1186,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1186,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

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
var seq__40482_40488 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__40483_40489 = null;var count__40484_40490 = (0);var i__40485_40491 = (0);while(true){
if((i__40485_40491 < count__40484_40490))
{var vec__40486_40492 = chunk__40483_40489.cljs$core$IIndexed$_nth$arity$2(null,i__40485_40491);var v_40493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486_40492,(0),null);var body_class_40494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486_40492,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_40493,view))
{domina.add_class_BANG_(body,body_class_40494);
} else
{domina.remove_class_BANG_(body,body_class_40494);
}
{
var G__40495 = seq__40482_40488;
var G__40496 = chunk__40483_40489;
var G__40497 = count__40484_40490;
var G__40498 = (i__40485_40491 + (1));
seq__40482_40488 = G__40495;
chunk__40483_40489 = G__40496;
count__40484_40490 = G__40497;
i__40485_40491 = G__40498;
continue;
}
} else
{var temp__4126__auto___40499 = cljs.core.seq(seq__40482_40488);if(temp__4126__auto___40499)
{var seq__40482_40500__$1 = temp__4126__auto___40499;if(cljs.core.chunked_seq_QMARK_(seq__40482_40500__$1))
{var c__4314__auto___40501 = cljs.core.chunk_first(seq__40482_40500__$1);{
var G__40502 = cljs.core.chunk_rest(seq__40482_40500__$1);
var G__40503 = c__4314__auto___40501;
var G__40504 = cljs.core.count(c__4314__auto___40501);
var G__40505 = (0);
seq__40482_40488 = G__40502;
chunk__40483_40489 = G__40503;
count__40484_40490 = G__40504;
i__40485_40491 = G__40505;
continue;
}
} else
{var vec__40487_40506 = cljs.core.first(seq__40482_40500__$1);var v_40507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40487_40506,(0),null);var body_class_40508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40487_40506,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_40507,view))
{domina.add_class_BANG_(body,body_class_40508);
} else
{domina.remove_class_BANG_(body,body_class_40508);
}
{
var G__40509 = cljs.core.next(seq__40482_40500__$1);
var G__40510 = null;
var G__40511 = (0);
var G__40512 = (0);
seq__40482_40488 = G__40509;
chunk__40483_40489 = G__40510;
count__40484_40490 = G__40511;
i__40485_40491 = G__40512;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__40519 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__40520 = null;var count__40521 = (0);var i__40522 = (0);while(true){
if((i__40522 < count__40521))
{var vec__40523 = chunk__40520.cljs$core$IIndexed$_nth$arity$2(null,i__40522);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40523,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40523,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1186,((function (seq__40519,chunk__40520,count__40521,i__40522,vec__40523,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1187,v], null));
});})(seq__40519,chunk__40520,count__40521,i__40522,vec__40523,v,_))
);
{
var G__40525 = seq__40519;
var G__40526 = chunk__40520;
var G__40527 = count__40521;
var G__40528 = (i__40522 + (1));
seq__40519 = G__40525;
chunk__40520 = G__40526;
count__40521 = G__40527;
i__40522 = G__40528;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40519);if(temp__4126__auto__)
{var seq__40519__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40519__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__40519__$1);{
var G__40529 = cljs.core.chunk_rest(seq__40519__$1);
var G__40530 = c__4314__auto__;
var G__40531 = cljs.core.count(c__4314__auto__);
var G__40532 = (0);
seq__40519 = G__40529;
chunk__40520 = G__40530;
count__40521 = G__40531;
i__40522 = G__40532;
continue;
}
} else
{var vec__40524 = cljs.core.first(seq__40519__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40524,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40524,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1186,((function (seq__40519,chunk__40520,count__40521,i__40522,vec__40524,v,_,seq__40519__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1187,v], null));
});})(seq__40519,chunk__40520,count__40521,i__40522,vec__40524,v,_,seq__40519__$1,temp__4126__auto__))
);
{
var G__40533 = cljs.core.next(seq__40519__$1);
var G__40534 = null;
var G__40535 = (0);
var G__40536 = (0);
seq__40519 = G__40533;
chunk__40520 = G__40534;
count__40521 = G__40535;
i__40522 = G__40536;
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
