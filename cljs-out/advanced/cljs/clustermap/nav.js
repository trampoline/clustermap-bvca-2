// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$460,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$460,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
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
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.cljs$core$IFn$_invoke$arity$1("body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.cljs$core$IFn$_invoke$arity$1(target_selector);var ul = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target_li,"..");var active_li = domina.css.sel.cljs$core$IFn$_invoke$arity$2(ul,"> .active");domina.remove_class_BANG_(active_li,"active");
domina.add_class_BANG_(target_li,"active");
var seq__23688_23694 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23689_23695 = null;var count__23690_23696 = 0;var i__23691_23697 = 0;while(true){
if((i__23691_23697 < count__23690_23696))
{var vec__23692_23698 = chunk__23689_23695.cljs$core$IIndexed$_nth$arity$2(null,i__23691_23697);var v_23699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23692_23698,0,null);var body_class_23700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23692_23698,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23699,view))
{domina.add_class_BANG_(body,body_class_23700);
} else
{domina.remove_class_BANG_(body,body_class_23700);
}
{
var G__23701 = seq__23688_23694;
var G__23702 = chunk__23689_23695;
var G__23703 = count__23690_23696;
var G__23704 = (i__23691_23697 + 1);
seq__23688_23694 = G__23701;
chunk__23689_23695 = G__23702;
count__23690_23696 = G__23703;
i__23691_23697 = G__23704;
continue;
}
} else
{var temp__4092__auto___23705 = cljs.core.seq(seq__23688_23694);if(temp__4092__auto___23705)
{var seq__23688_23706__$1 = temp__4092__auto___23705;if(cljs.core.chunked_seq_QMARK_(seq__23688_23706__$1))
{var c__4148__auto___23707 = cljs.core.chunk_first(seq__23688_23706__$1);{
var G__23708 = cljs.core.chunk_rest(seq__23688_23706__$1);
var G__23709 = c__4148__auto___23707;
var G__23710 = cljs.core.count(c__4148__auto___23707);
var G__23711 = 0;
seq__23688_23694 = G__23708;
chunk__23689_23695 = G__23709;
count__23690_23696 = G__23710;
i__23691_23697 = G__23711;
continue;
}
} else
{var vec__23693_23712 = cljs.core.first(seq__23688_23706__$1);var v_23713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23693_23712,0,null);var body_class_23714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23693_23712,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23713,view))
{domina.add_class_BANG_(body,body_class_23714);
} else
{domina.remove_class_BANG_(body,body_class_23714);
}
{
var G__23715 = cljs.core.next(seq__23688_23706__$1);
var G__23716 = null;
var G__23717 = 0;
var G__23718 = 0;
seq__23688_23694 = G__23715;
chunk__23689_23695 = G__23716;
count__23690_23696 = G__23717;
i__23691_23697 = G__23718;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23725 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23726 = null;var count__23727 = 0;var i__23728 = 0;while(true){
if((i__23728 < count__23727))
{var vec__23729 = chunk__23726.cljs$core$IIndexed$_nth$arity$2(null,i__23728);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23729,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23729,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$460,((function (seq__23725,chunk__23726,count__23727,i__23728,vec__23729,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$344,v], null));
});})(seq__23725,chunk__23726,count__23727,i__23728,vec__23729,v,_))
);
{
var G__23731 = seq__23725;
var G__23732 = chunk__23726;
var G__23733 = count__23727;
var G__23734 = (i__23728 + 1);
seq__23725 = G__23731;
chunk__23726 = G__23732;
count__23727 = G__23733;
i__23728 = G__23734;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23725);if(temp__4092__auto__)
{var seq__23725__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23725__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23725__$1);{
var G__23735 = cljs.core.chunk_rest(seq__23725__$1);
var G__23736 = c__4148__auto__;
var G__23737 = cljs.core.count(c__4148__auto__);
var G__23738 = 0;
seq__23725 = G__23735;
chunk__23726 = G__23736;
count__23727 = G__23737;
i__23728 = G__23738;
continue;
}
} else
{var vec__23730 = cljs.core.first(seq__23725__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23730,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23730,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$460,((function (seq__23725,chunk__23726,count__23727,i__23728,vec__23730,v,_,seq__23725__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$344,v], null));
});})(seq__23725,chunk__23726,count__23727,i__23728,vec__23730,v,_,seq__23725__$1,temp__4092__auto__))
);
{
var G__23739 = cljs.core.next(seq__23725__$1);
var G__23740 = null;
var G__23741 = 0;
var G__23742 = 0;
seq__23725 = G__23739;
chunk__23726 = G__23740;
count__23727 = G__23741;
i__23728 = G__23742;
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
