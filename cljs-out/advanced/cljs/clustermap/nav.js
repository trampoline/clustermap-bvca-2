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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1072,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1072,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__38909_38915 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__38910_38916 = null;var count__38911_38917 = (0);var i__38912_38918 = (0);while(true){
if((i__38912_38918 < count__38911_38917))
{var vec__38913_38919 = chunk__38910_38916.cljs$core$IIndexed$_nth$arity$2(null,i__38912_38918);var v_38920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38913_38919,(0),null);var body_class_38921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38913_38919,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_38920,view))
{domina.add_class_BANG_(body,body_class_38921);
} else
{domina.remove_class_BANG_(body,body_class_38921);
}
{
var G__38922 = seq__38909_38915;
var G__38923 = chunk__38910_38916;
var G__38924 = count__38911_38917;
var G__38925 = (i__38912_38918 + (1));
seq__38909_38915 = G__38922;
chunk__38910_38916 = G__38923;
count__38911_38917 = G__38924;
i__38912_38918 = G__38925;
continue;
}
} else
{var temp__4126__auto___38926 = cljs.core.seq(seq__38909_38915);if(temp__4126__auto___38926)
{var seq__38909_38927__$1 = temp__4126__auto___38926;if(cljs.core.chunked_seq_QMARK_(seq__38909_38927__$1))
{var c__4297__auto___38928 = cljs.core.chunk_first(seq__38909_38927__$1);{
var G__38929 = cljs.core.chunk_rest(seq__38909_38927__$1);
var G__38930 = c__4297__auto___38928;
var G__38931 = cljs.core.count(c__4297__auto___38928);
var G__38932 = (0);
seq__38909_38915 = G__38929;
chunk__38910_38916 = G__38930;
count__38911_38917 = G__38931;
i__38912_38918 = G__38932;
continue;
}
} else
{var vec__38914_38933 = cljs.core.first(seq__38909_38927__$1);var v_38934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38914_38933,(0),null);var body_class_38935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38914_38933,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_38934,view))
{domina.add_class_BANG_(body,body_class_38935);
} else
{domina.remove_class_BANG_(body,body_class_38935);
}
{
var G__38936 = cljs.core.next(seq__38909_38927__$1);
var G__38937 = null;
var G__38938 = (0);
var G__38939 = (0);
seq__38909_38915 = G__38936;
chunk__38910_38916 = G__38937;
count__38911_38917 = G__38938;
i__38912_38918 = G__38939;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__38946 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__38947 = null;var count__38948 = (0);var i__38949 = (0);while(true){
if((i__38949 < count__38948))
{var vec__38950 = chunk__38947.cljs$core$IIndexed$_nth$arity$2(null,i__38949);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38950,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38950,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1072,((function (seq__38946,chunk__38947,count__38948,i__38949,vec__38950,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,v], null));
});})(seq__38946,chunk__38947,count__38948,i__38949,vec__38950,v,_))
);
{
var G__38952 = seq__38946;
var G__38953 = chunk__38947;
var G__38954 = count__38948;
var G__38955 = (i__38949 + (1));
seq__38946 = G__38952;
chunk__38947 = G__38953;
count__38948 = G__38954;
i__38949 = G__38955;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38946);if(temp__4126__auto__)
{var seq__38946__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38946__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__38946__$1);{
var G__38956 = cljs.core.chunk_rest(seq__38946__$1);
var G__38957 = c__4297__auto__;
var G__38958 = cljs.core.count(c__4297__auto__);
var G__38959 = (0);
seq__38946 = G__38956;
chunk__38947 = G__38957;
count__38948 = G__38958;
i__38949 = G__38959;
continue;
}
} else
{var vec__38951 = cljs.core.first(seq__38946__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38951,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38951,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1072,((function (seq__38946,chunk__38947,count__38948,i__38949,vec__38951,v,_,seq__38946__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,v], null));
});})(seq__38946,chunk__38947,count__38948,i__38949,vec__38951,v,_,seq__38946__$1,temp__4126__auto__))
);
{
var G__38960 = cljs.core.next(seq__38946__$1);
var G__38961 = null;
var G__38962 = (0);
var G__38963 = (0);
seq__38946 = G__38960;
chunk__38947 = G__38961;
count__38948 = G__38962;
i__38949 = G__38963;
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
