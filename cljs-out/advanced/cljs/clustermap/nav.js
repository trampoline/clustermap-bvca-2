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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$330,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$330,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22018 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22019 = null;var count__22020 = 0;var i__22021 = 0;while(true){
if((i__22021 < count__22020))
{var vec__22022 = chunk__22019.cljs$core$IIndexed$_nth$arity$2(null,i__22021);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22022,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22022,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22024 = seq__22018;
var G__22025 = chunk__22019;
var G__22026 = count__22020;
var G__22027 = (i__22021 + 1);
seq__22018 = G__22024;
chunk__22019 = G__22025;
count__22020 = G__22026;
i__22021 = G__22027;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22018);if(temp__4092__auto__)
{var seq__22018__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22018__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22018__$1);{
var G__22028 = cljs.core.chunk_rest(seq__22018__$1);
var G__22029 = c__4148__auto__;
var G__22030 = cljs.core.count(c__4148__auto__);
var G__22031 = 0;
seq__22018 = G__22028;
chunk__22019 = G__22029;
count__22020 = G__22030;
i__22021 = G__22031;
continue;
}
} else
{var vec__22023 = cljs.core.first(seq__22018__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22032 = cljs.core.next(seq__22018__$1);
var G__22033 = null;
var G__22034 = 0;
var G__22035 = 0;
seq__22018 = G__22032;
chunk__22019 = G__22033;
count__22020 = G__22034;
i__22021 = G__22035;
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
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22042 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22043 = null;var count__22044 = 0;var i__22045 = 0;while(true){
if((i__22045 < count__22044))
{var vec__22046 = chunk__22043.cljs$core$IIndexed$_nth$arity$2(null,i__22045);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$330,((function (seq__22042,chunk__22043,count__22044,i__22045,vec__22046,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,v], null));
});})(seq__22042,chunk__22043,count__22044,i__22045,vec__22046,v,_))
);
{
var G__22048 = seq__22042;
var G__22049 = chunk__22043;
var G__22050 = count__22044;
var G__22051 = (i__22045 + 1);
seq__22042 = G__22048;
chunk__22043 = G__22049;
count__22044 = G__22050;
i__22045 = G__22051;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22042);if(temp__4092__auto__)
{var seq__22042__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22042__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22042__$1);{
var G__22052 = cljs.core.chunk_rest(seq__22042__$1);
var G__22053 = c__4148__auto__;
var G__22054 = cljs.core.count(c__4148__auto__);
var G__22055 = 0;
seq__22042 = G__22052;
chunk__22043 = G__22053;
count__22044 = G__22054;
i__22045 = G__22055;
continue;
}
} else
{var vec__22047 = cljs.core.first(seq__22042__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22047,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22047,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$330,((function (seq__22042,chunk__22043,count__22044,i__22045,vec__22047,v,_,seq__22042__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,v], null));
});})(seq__22042,chunk__22043,count__22044,i__22045,vec__22047,v,_,seq__22042__$1,temp__4092__auto__))
);
{
var G__22056 = cljs.core.next(seq__22042__$1);
var G__22057 = null;
var G__22058 = 0;
var G__22059 = 0;
seq__22042 = G__22056;
chunk__22043 = G__22057;
count__22044 = G__22058;
i__22045 = G__22059;
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
