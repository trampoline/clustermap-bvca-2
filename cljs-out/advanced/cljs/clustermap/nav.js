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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1060,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1060,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__38590_38596 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__38591_38597 = null;var count__38592_38598 = (0);var i__38593_38599 = (0);while(true){
if((i__38593_38599 < count__38592_38598))
{var vec__38594_38600 = chunk__38591_38597.cljs$core$IIndexed$_nth$arity$2(null,i__38593_38599);var v_38601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38594_38600,(0),null);var body_class_38602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38594_38600,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_38601,view))
{domina.add_class_BANG_(body,body_class_38602);
} else
{domina.remove_class_BANG_(body,body_class_38602);
}
{
var G__38603 = seq__38590_38596;
var G__38604 = chunk__38591_38597;
var G__38605 = count__38592_38598;
var G__38606 = (i__38593_38599 + (1));
seq__38590_38596 = G__38603;
chunk__38591_38597 = G__38604;
count__38592_38598 = G__38605;
i__38593_38599 = G__38606;
continue;
}
} else
{var temp__4126__auto___38607 = cljs.core.seq(seq__38590_38596);if(temp__4126__auto___38607)
{var seq__38590_38608__$1 = temp__4126__auto___38607;if(cljs.core.chunked_seq_QMARK_(seq__38590_38608__$1))
{var c__4299__auto___38609 = cljs.core.chunk_first(seq__38590_38608__$1);{
var G__38610 = cljs.core.chunk_rest(seq__38590_38608__$1);
var G__38611 = c__4299__auto___38609;
var G__38612 = cljs.core.count(c__4299__auto___38609);
var G__38613 = (0);
seq__38590_38596 = G__38610;
chunk__38591_38597 = G__38611;
count__38592_38598 = G__38612;
i__38593_38599 = G__38613;
continue;
}
} else
{var vec__38595_38614 = cljs.core.first(seq__38590_38608__$1);var v_38615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38595_38614,(0),null);var body_class_38616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38595_38614,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_38615,view))
{domina.add_class_BANG_(body,body_class_38616);
} else
{domina.remove_class_BANG_(body,body_class_38616);
}
{
var G__38617 = cljs.core.next(seq__38590_38608__$1);
var G__38618 = null;
var G__38619 = (0);
var G__38620 = (0);
seq__38590_38596 = G__38617;
chunk__38591_38597 = G__38618;
count__38592_38598 = G__38619;
i__38593_38599 = G__38620;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__38627 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__38628 = null;var count__38629 = (0);var i__38630 = (0);while(true){
if((i__38630 < count__38629))
{var vec__38631 = chunk__38628.cljs$core$IIndexed$_nth$arity$2(null,i__38630);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38631,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38631,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1060,((function (seq__38627,chunk__38628,count__38629,i__38630,vec__38631,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,v], null));
});})(seq__38627,chunk__38628,count__38629,i__38630,vec__38631,v,_))
);
{
var G__38633 = seq__38627;
var G__38634 = chunk__38628;
var G__38635 = count__38629;
var G__38636 = (i__38630 + (1));
seq__38627 = G__38633;
chunk__38628 = G__38634;
count__38629 = G__38635;
i__38630 = G__38636;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38627);if(temp__4126__auto__)
{var seq__38627__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38627__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__38627__$1);{
var G__38637 = cljs.core.chunk_rest(seq__38627__$1);
var G__38638 = c__4299__auto__;
var G__38639 = cljs.core.count(c__4299__auto__);
var G__38640 = (0);
seq__38627 = G__38637;
chunk__38628 = G__38638;
count__38629 = G__38639;
i__38630 = G__38640;
continue;
}
} else
{var vec__38632 = cljs.core.first(seq__38627__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38632,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38632,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1060,((function (seq__38627,chunk__38628,count__38629,i__38630,vec__38632,v,_,seq__38627__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,v], null));
});})(seq__38627,chunk__38628,count__38629,i__38630,vec__38632,v,_,seq__38627__$1,temp__4126__auto__))
);
{
var G__38641 = cljs.core.next(seq__38627__$1);
var G__38642 = null;
var G__38643 = (0);
var G__38644 = (0);
seq__38627 = G__38641;
chunk__38628 = G__38642;
count__38629 = G__38643;
i__38630 = G__38644;
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
