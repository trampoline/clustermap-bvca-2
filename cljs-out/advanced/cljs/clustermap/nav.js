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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1051,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1051,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__37823_37829 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__37824_37830 = null;var count__37825_37831 = (0);var i__37826_37832 = (0);while(true){
if((i__37826_37832 < count__37825_37831))
{var vec__37827_37833 = chunk__37824_37830.cljs$core$IIndexed$_nth$arity$2(null,i__37826_37832);var v_37834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37827_37833,(0),null);var body_class_37835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37827_37833,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_37834,view))
{domina.add_class_BANG_(body,body_class_37835);
} else
{domina.remove_class_BANG_(body,body_class_37835);
}
{
var G__37836 = seq__37823_37829;
var G__37837 = chunk__37824_37830;
var G__37838 = count__37825_37831;
var G__37839 = (i__37826_37832 + (1));
seq__37823_37829 = G__37836;
chunk__37824_37830 = G__37837;
count__37825_37831 = G__37838;
i__37826_37832 = G__37839;
continue;
}
} else
{var temp__4126__auto___37840 = cljs.core.seq(seq__37823_37829);if(temp__4126__auto___37840)
{var seq__37823_37841__$1 = temp__4126__auto___37840;if(cljs.core.chunked_seq_QMARK_(seq__37823_37841__$1))
{var c__4299__auto___37842 = cljs.core.chunk_first(seq__37823_37841__$1);{
var G__37843 = cljs.core.chunk_rest(seq__37823_37841__$1);
var G__37844 = c__4299__auto___37842;
var G__37845 = cljs.core.count(c__4299__auto___37842);
var G__37846 = (0);
seq__37823_37829 = G__37843;
chunk__37824_37830 = G__37844;
count__37825_37831 = G__37845;
i__37826_37832 = G__37846;
continue;
}
} else
{var vec__37828_37847 = cljs.core.first(seq__37823_37841__$1);var v_37848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37828_37847,(0),null);var body_class_37849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37828_37847,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_37848,view))
{domina.add_class_BANG_(body,body_class_37849);
} else
{domina.remove_class_BANG_(body,body_class_37849);
}
{
var G__37850 = cljs.core.next(seq__37823_37841__$1);
var G__37851 = null;
var G__37852 = (0);
var G__37853 = (0);
seq__37823_37829 = G__37850;
chunk__37824_37830 = G__37851;
count__37825_37831 = G__37852;
i__37826_37832 = G__37853;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__37860 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__37861 = null;var count__37862 = (0);var i__37863 = (0);while(true){
if((i__37863 < count__37862))
{var vec__37864 = chunk__37861.cljs$core$IIndexed$_nth$arity$2(null,i__37863);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37864,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37864,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1051,((function (seq__37860,chunk__37861,count__37862,i__37863,vec__37864,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1052,v], null));
});})(seq__37860,chunk__37861,count__37862,i__37863,vec__37864,v,_))
);
{
var G__37866 = seq__37860;
var G__37867 = chunk__37861;
var G__37868 = count__37862;
var G__37869 = (i__37863 + (1));
seq__37860 = G__37866;
chunk__37861 = G__37867;
count__37862 = G__37868;
i__37863 = G__37869;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37860);if(temp__4126__auto__)
{var seq__37860__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37860__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37860__$1);{
var G__37870 = cljs.core.chunk_rest(seq__37860__$1);
var G__37871 = c__4299__auto__;
var G__37872 = cljs.core.count(c__4299__auto__);
var G__37873 = (0);
seq__37860 = G__37870;
chunk__37861 = G__37871;
count__37862 = G__37872;
i__37863 = G__37873;
continue;
}
} else
{var vec__37865 = cljs.core.first(seq__37860__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37865,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37865,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1051,((function (seq__37860,chunk__37861,count__37862,i__37863,vec__37865,v,_,seq__37860__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1052,v], null));
});})(seq__37860,chunk__37861,count__37862,i__37863,vec__37865,v,_,seq__37860__$1,temp__4126__auto__))
);
{
var G__37874 = cljs.core.next(seq__37860__$1);
var G__37875 = null;
var G__37876 = (0);
var G__37877 = (0);
seq__37860 = G__37874;
chunk__37861 = G__37875;
count__37862 = G__37876;
i__37863 = G__37877;
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
