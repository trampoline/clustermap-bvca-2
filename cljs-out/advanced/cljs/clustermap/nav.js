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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$326,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$326,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__21988 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__21989 = null;var count__21990 = 0;var i__21991 = 0;while(true){
if((i__21991 < count__21990))
{var vec__21992 = chunk__21989.cljs$core$IIndexed$_nth$arity$2(null,i__21991);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21992,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21992,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__21994 = seq__21988;
var G__21995 = chunk__21989;
var G__21996 = count__21990;
var G__21997 = (i__21991 + 1);
seq__21988 = G__21994;
chunk__21989 = G__21995;
count__21990 = G__21996;
i__21991 = G__21997;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21988);if(temp__4092__auto__)
{var seq__21988__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21988__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21988__$1);{
var G__21998 = cljs.core.chunk_rest(seq__21988__$1);
var G__21999 = c__4148__auto__;
var G__22000 = cljs.core.count(c__4148__auto__);
var G__22001 = 0;
seq__21988 = G__21998;
chunk__21989 = G__21999;
count__21990 = G__22000;
i__21991 = G__22001;
continue;
}
} else
{var vec__21993 = cljs.core.first(seq__21988__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21993,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21993,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22002 = cljs.core.next(seq__21988__$1);
var G__22003 = null;
var G__22004 = 0;
var G__22005 = 0;
seq__21988 = G__22002;
chunk__21989 = G__22003;
count__21990 = G__22004;
i__21991 = G__22005;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22012 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22013 = null;var count__22014 = 0;var i__22015 = 0;while(true){
if((i__22015 < count__22014))
{var vec__22016 = chunk__22013.cljs$core$IIndexed$_nth$arity$2(null,i__22015);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$326,((function (seq__22012,chunk__22013,count__22014,i__22015,vec__22016,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,v], null));
});})(seq__22012,chunk__22013,count__22014,i__22015,vec__22016,v,_))
);
{
var G__22018 = seq__22012;
var G__22019 = chunk__22013;
var G__22020 = count__22014;
var G__22021 = (i__22015 + 1);
seq__22012 = G__22018;
chunk__22013 = G__22019;
count__22014 = G__22020;
i__22015 = G__22021;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22012);if(temp__4092__auto__)
{var seq__22012__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22012__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22012__$1);{
var G__22022 = cljs.core.chunk_rest(seq__22012__$1);
var G__22023 = c__4148__auto__;
var G__22024 = cljs.core.count(c__4148__auto__);
var G__22025 = 0;
seq__22012 = G__22022;
chunk__22013 = G__22023;
count__22014 = G__22024;
i__22015 = G__22025;
continue;
}
} else
{var vec__22017 = cljs.core.first(seq__22012__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22017,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22017,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$326,((function (seq__22012,chunk__22013,count__22014,i__22015,vec__22017,v,_,seq__22012__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,v], null));
});})(seq__22012,chunk__22013,count__22014,i__22015,vec__22017,v,_,seq__22012__$1,temp__4092__auto__))
);
{
var G__22026 = cljs.core.next(seq__22012__$1);
var G__22027 = null;
var G__22028 = 0;
var G__22029 = 0;
seq__22012 = G__22026;
chunk__22013 = G__22027;
count__22014 = G__22028;
i__22015 = G__22029;
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
