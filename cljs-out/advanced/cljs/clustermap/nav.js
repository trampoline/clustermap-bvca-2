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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1047,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1047,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__37688_37694 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__37689_37695 = null;var count__37690_37696 = (0);var i__37691_37697 = (0);while(true){
if((i__37691_37697 < count__37690_37696))
{var vec__37692_37698 = chunk__37689_37695.cljs$core$IIndexed$_nth$arity$2(null,i__37691_37697);var v_37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37692_37698,(0),null);var body_class_37700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37692_37698,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_37699,view))
{domina.add_class_BANG_(body,body_class_37700);
} else
{domina.remove_class_BANG_(body,body_class_37700);
}
{
var G__37701 = seq__37688_37694;
var G__37702 = chunk__37689_37695;
var G__37703 = count__37690_37696;
var G__37704 = (i__37691_37697 + (1));
seq__37688_37694 = G__37701;
chunk__37689_37695 = G__37702;
count__37690_37696 = G__37703;
i__37691_37697 = G__37704;
continue;
}
} else
{var temp__4126__auto___37705 = cljs.core.seq(seq__37688_37694);if(temp__4126__auto___37705)
{var seq__37688_37706__$1 = temp__4126__auto___37705;if(cljs.core.chunked_seq_QMARK_(seq__37688_37706__$1))
{var c__4299__auto___37707 = cljs.core.chunk_first(seq__37688_37706__$1);{
var G__37708 = cljs.core.chunk_rest(seq__37688_37706__$1);
var G__37709 = c__4299__auto___37707;
var G__37710 = cljs.core.count(c__4299__auto___37707);
var G__37711 = (0);
seq__37688_37694 = G__37708;
chunk__37689_37695 = G__37709;
count__37690_37696 = G__37710;
i__37691_37697 = G__37711;
continue;
}
} else
{var vec__37693_37712 = cljs.core.first(seq__37688_37706__$1);var v_37713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37693_37712,(0),null);var body_class_37714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37693_37712,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_37713,view))
{domina.add_class_BANG_(body,body_class_37714);
} else
{domina.remove_class_BANG_(body,body_class_37714);
}
{
var G__37715 = cljs.core.next(seq__37688_37706__$1);
var G__37716 = null;
var G__37717 = (0);
var G__37718 = (0);
seq__37688_37694 = G__37715;
chunk__37689_37695 = G__37716;
count__37690_37696 = G__37717;
i__37691_37697 = G__37718;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__37725 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__37726 = null;var count__37727 = (0);var i__37728 = (0);while(true){
if((i__37728 < count__37727))
{var vec__37729 = chunk__37726.cljs$core$IIndexed$_nth$arity$2(null,i__37728);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1047,((function (seq__37725,chunk__37726,count__37727,i__37728,vec__37729,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,v], null));
});})(seq__37725,chunk__37726,count__37727,i__37728,vec__37729,v,_))
);
{
var G__37731 = seq__37725;
var G__37732 = chunk__37726;
var G__37733 = count__37727;
var G__37734 = (i__37728 + (1));
seq__37725 = G__37731;
chunk__37726 = G__37732;
count__37727 = G__37733;
i__37728 = G__37734;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37725);if(temp__4126__auto__)
{var seq__37725__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37725__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37725__$1);{
var G__37735 = cljs.core.chunk_rest(seq__37725__$1);
var G__37736 = c__4299__auto__;
var G__37737 = cljs.core.count(c__4299__auto__);
var G__37738 = (0);
seq__37725 = G__37735;
chunk__37726 = G__37736;
count__37727 = G__37737;
i__37728 = G__37738;
continue;
}
} else
{var vec__37730 = cljs.core.first(seq__37725__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37730,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37730,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1047,((function (seq__37725,chunk__37726,count__37727,i__37728,vec__37730,v,_,seq__37725__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,v], null));
});})(seq__37725,chunk__37726,count__37727,i__37728,vec__37730,v,_,seq__37725__$1,temp__4126__auto__))
);
{
var G__37739 = cljs.core.next(seq__37725__$1);
var G__37740 = null;
var G__37741 = (0);
var G__37742 = (0);
seq__37725 = G__37739;
chunk__37726 = G__37740;
count__37727 = G__37741;
i__37728 = G__37742;
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
