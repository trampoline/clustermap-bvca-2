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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1056,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1056,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__39784_39790 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__39785_39791 = null;var count__39786_39792 = (0);var i__39787_39793 = (0);while(true){
if((i__39787_39793 < count__39786_39792))
{var vec__39788_39794 = chunk__39785_39791.cljs$core$IIndexed$_nth$arity$2(null,i__39787_39793);var v_39795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39788_39794,(0),null);var body_class_39796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39788_39794,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_39795,view))
{domina.add_class_BANG_(body,body_class_39796);
} else
{domina.remove_class_BANG_(body,body_class_39796);
}
{
var G__39797 = seq__39784_39790;
var G__39798 = chunk__39785_39791;
var G__39799 = count__39786_39792;
var G__39800 = (i__39787_39793 + (1));
seq__39784_39790 = G__39797;
chunk__39785_39791 = G__39798;
count__39786_39792 = G__39799;
i__39787_39793 = G__39800;
continue;
}
} else
{var temp__4126__auto___39801 = cljs.core.seq(seq__39784_39790);if(temp__4126__auto___39801)
{var seq__39784_39802__$1 = temp__4126__auto___39801;if(cljs.core.chunked_seq_QMARK_(seq__39784_39802__$1))
{var c__4299__auto___39803 = cljs.core.chunk_first(seq__39784_39802__$1);{
var G__39804 = cljs.core.chunk_rest(seq__39784_39802__$1);
var G__39805 = c__4299__auto___39803;
var G__39806 = cljs.core.count(c__4299__auto___39803);
var G__39807 = (0);
seq__39784_39790 = G__39804;
chunk__39785_39791 = G__39805;
count__39786_39792 = G__39806;
i__39787_39793 = G__39807;
continue;
}
} else
{var vec__39789_39808 = cljs.core.first(seq__39784_39802__$1);var v_39809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39789_39808,(0),null);var body_class_39810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39789_39808,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_39809,view))
{domina.add_class_BANG_(body,body_class_39810);
} else
{domina.remove_class_BANG_(body,body_class_39810);
}
{
var G__39811 = cljs.core.next(seq__39784_39802__$1);
var G__39812 = null;
var G__39813 = (0);
var G__39814 = (0);
seq__39784_39790 = G__39811;
chunk__39785_39791 = G__39812;
count__39786_39792 = G__39813;
i__39787_39793 = G__39814;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__39821 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__39822 = null;var count__39823 = (0);var i__39824 = (0);while(true){
if((i__39824 < count__39823))
{var vec__39825 = chunk__39822.cljs$core$IIndexed$_nth$arity$2(null,i__39824);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39825,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39825,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1056,((function (seq__39821,chunk__39822,count__39823,i__39824,vec__39825,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1057,v], null));
});})(seq__39821,chunk__39822,count__39823,i__39824,vec__39825,v,_))
);
{
var G__39827 = seq__39821;
var G__39828 = chunk__39822;
var G__39829 = count__39823;
var G__39830 = (i__39824 + (1));
seq__39821 = G__39827;
chunk__39822 = G__39828;
count__39823 = G__39829;
i__39824 = G__39830;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39821);if(temp__4126__auto__)
{var seq__39821__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39821__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__39821__$1);{
var G__39831 = cljs.core.chunk_rest(seq__39821__$1);
var G__39832 = c__4299__auto__;
var G__39833 = cljs.core.count(c__4299__auto__);
var G__39834 = (0);
seq__39821 = G__39831;
chunk__39822 = G__39832;
count__39823 = G__39833;
i__39824 = G__39834;
continue;
}
} else
{var vec__39826 = cljs.core.first(seq__39821__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39826,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39826,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1056,((function (seq__39821,chunk__39822,count__39823,i__39824,vec__39826,v,_,seq__39821__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1057,v], null));
});})(seq__39821,chunk__39822,count__39823,i__39824,vec__39826,v,_,seq__39821__$1,temp__4126__auto__))
);
{
var G__39835 = cljs.core.next(seq__39821__$1);
var G__39836 = null;
var G__39837 = (0);
var G__39838 = (0);
seq__39821 = G__39835;
chunk__39822 = G__39836;
count__39823 = G__39837;
i__39824 = G__39838;
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
