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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1310,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1310,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__58614_58620 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__58615_58621 = null;var count__58616_58622 = (0);var i__58617_58623 = (0);while(true){
if((i__58617_58623 < count__58616_58622))
{var vec__58618_58624 = chunk__58615_58621.cljs$core$IIndexed$_nth$arity$2(null,i__58617_58623);var v_58625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58618_58624,(0),null);var body_class_58626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58618_58624,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_58625,view))
{domina.add_class_BANG_(body,body_class_58626);
} else
{domina.remove_class_BANG_(body,body_class_58626);
}
{
var G__58627 = seq__58614_58620;
var G__58628 = chunk__58615_58621;
var G__58629 = count__58616_58622;
var G__58630 = (i__58617_58623 + (1));
seq__58614_58620 = G__58627;
chunk__58615_58621 = G__58628;
count__58616_58622 = G__58629;
i__58617_58623 = G__58630;
continue;
}
} else
{var temp__4126__auto___58631 = cljs.core.seq(seq__58614_58620);if(temp__4126__auto___58631)
{var seq__58614_58632__$1 = temp__4126__auto___58631;if(cljs.core.chunked_seq_QMARK_(seq__58614_58632__$1))
{var c__4406__auto___58633 = cljs.core.chunk_first(seq__58614_58632__$1);{
var G__58634 = cljs.core.chunk_rest(seq__58614_58632__$1);
var G__58635 = c__4406__auto___58633;
var G__58636 = cljs.core.count(c__4406__auto___58633);
var G__58637 = (0);
seq__58614_58620 = G__58634;
chunk__58615_58621 = G__58635;
count__58616_58622 = G__58636;
i__58617_58623 = G__58637;
continue;
}
} else
{var vec__58619_58638 = cljs.core.first(seq__58614_58632__$1);var v_58639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58619_58638,(0),null);var body_class_58640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58619_58638,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_58639,view))
{domina.add_class_BANG_(body,body_class_58640);
} else
{domina.remove_class_BANG_(body,body_class_58640);
}
{
var G__58641 = cljs.core.next(seq__58614_58632__$1);
var G__58642 = null;
var G__58643 = (0);
var G__58644 = (0);
seq__58614_58620 = G__58641;
chunk__58615_58621 = G__58642;
count__58616_58622 = G__58643;
i__58617_58623 = G__58644;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__58651 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__58652 = null;var count__58653 = (0);var i__58654 = (0);while(true){
if((i__58654 < count__58653))
{var vec__58655 = chunk__58652.cljs$core$IIndexed$_nth$arity$2(null,i__58654);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58655,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58655,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1310,((function (seq__58651,chunk__58652,count__58653,i__58654,vec__58655,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1311,v], null));
});})(seq__58651,chunk__58652,count__58653,i__58654,vec__58655,v,_))
);
{
var G__58657 = seq__58651;
var G__58658 = chunk__58652;
var G__58659 = count__58653;
var G__58660 = (i__58654 + (1));
seq__58651 = G__58657;
chunk__58652 = G__58658;
count__58653 = G__58659;
i__58654 = G__58660;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__58651);if(temp__4126__auto__)
{var seq__58651__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__58651__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__58651__$1);{
var G__58661 = cljs.core.chunk_rest(seq__58651__$1);
var G__58662 = c__4406__auto__;
var G__58663 = cljs.core.count(c__4406__auto__);
var G__58664 = (0);
seq__58651 = G__58661;
chunk__58652 = G__58662;
count__58653 = G__58663;
i__58654 = G__58664;
continue;
}
} else
{var vec__58656 = cljs.core.first(seq__58651__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58656,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58656,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1310,((function (seq__58651,chunk__58652,count__58653,i__58654,vec__58656,v,_,seq__58651__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1311,v], null));
});})(seq__58651,chunk__58652,count__58653,i__58654,vec__58656,v,_,seq__58651__$1,temp__4126__auto__))
);
{
var G__58665 = cljs.core.next(seq__58651__$1);
var G__58666 = null;
var G__58667 = (0);
var G__58668 = (0);
seq__58651 = G__58665;
chunk__58652 = G__58666;
count__58653 = G__58667;
i__58654 = G__58668;
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
