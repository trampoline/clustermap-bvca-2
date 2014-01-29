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
clustermap.nav.select_view = (function select_view(view){if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.cljs$core$IFn$_invoke$arity$1("body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.cljs$core$IFn$_invoke$arity$1(target_selector);var ul = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target_li,"..");var active_li = domina.css.sel.cljs$core$IFn$_invoke$arity$2(ul,"> .active");domina.remove_class_BANG_(active_li,"active");
domina.add_class_BANG_(target_li,"active");
var seq__21979_21985 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__21980_21986 = null;var count__21981_21987 = 0;var i__21982_21988 = 0;while(true){
if((i__21982_21988 < count__21981_21987))
{var vec__21983_21989 = chunk__21980_21986.cljs$core$IIndexed$_nth$arity$2(null,i__21982_21988);var v_21990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21983_21989,0,null);var body_class_21991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21983_21989,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_21990,view))
{domina.add_class_BANG_(body,body_class_21991);
} else
{domina.remove_class_BANG_(body,body_class_21991);
}
{
var G__21992 = seq__21979_21985;
var G__21993 = chunk__21980_21986;
var G__21994 = count__21981_21987;
var G__21995 = (i__21982_21988 + 1);
seq__21979_21985 = G__21992;
chunk__21980_21986 = G__21993;
count__21981_21987 = G__21994;
i__21982_21988 = G__21995;
continue;
}
} else
{var temp__4092__auto___21996 = cljs.core.seq(seq__21979_21985);if(temp__4092__auto___21996)
{var seq__21979_21997__$1 = temp__4092__auto___21996;if(cljs.core.chunked_seq_QMARK_(seq__21979_21997__$1))
{var c__4148__auto___21998 = cljs.core.chunk_first(seq__21979_21997__$1);{
var G__21999 = cljs.core.chunk_rest(seq__21979_21997__$1);
var G__22000 = c__4148__auto___21998;
var G__22001 = cljs.core.count(c__4148__auto___21998);
var G__22002 = 0;
seq__21979_21985 = G__21999;
chunk__21980_21986 = G__22000;
count__21981_21987 = G__22001;
i__21982_21988 = G__22002;
continue;
}
} else
{var vec__21984_22003 = cljs.core.first(seq__21979_21997__$1);var v_22004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21984_22003,0,null);var body_class_22005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21984_22003,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22004,view))
{domina.add_class_BANG_(body,body_class_22005);
} else
{domina.remove_class_BANG_(body,body_class_22005);
}
{
var G__22006 = cljs.core.next(seq__21979_21997__$1);
var G__22007 = null;
var G__22008 = 0;
var G__22009 = 0;
seq__21979_21985 = G__22006;
chunk__21980_21986 = G__22007;
count__21981_21987 = G__22008;
i__21982_21988 = G__22009;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(window).trigger("resize");
});
clustermap.nav.handle_view_switches = (function handle_view_switches(){var seq__22016 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22017 = null;var count__22018 = 0;var i__22019 = 0;while(true){
if((i__22019 < count__22018))
{var vec__22020 = chunk__22017.cljs$core$IIndexed$_nth$arity$2(null,i__22019);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22020,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22020,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$326,((function (seq__22016,chunk__22017,count__22018,i__22019,vec__22020,v,_){
return (function (e){domina.events.prevent_default(e);
return clustermap.nav.select_view(v);
});})(seq__22016,chunk__22017,count__22018,i__22019,vec__22020,v,_))
);
{
var G__22022 = seq__22016;
var G__22023 = chunk__22017;
var G__22024 = count__22018;
var G__22025 = (i__22019 + 1);
seq__22016 = G__22022;
chunk__22017 = G__22023;
count__22018 = G__22024;
i__22019 = G__22025;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22016);if(temp__4092__auto__)
{var seq__22016__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22016__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22016__$1);{
var G__22026 = cljs.core.chunk_rest(seq__22016__$1);
var G__22027 = c__4148__auto__;
var G__22028 = cljs.core.count(c__4148__auto__);
var G__22029 = 0;
seq__22016 = G__22026;
chunk__22017 = G__22027;
count__22018 = G__22028;
i__22019 = G__22029;
continue;
}
} else
{var vec__22021 = cljs.core.first(seq__22016__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$326,((function (seq__22016,chunk__22017,count__22018,i__22019,vec__22021,v,_,seq__22016__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return clustermap.nav.select_view(v);
});})(seq__22016,chunk__22017,count__22018,i__22019,vec__22021,v,_,seq__22016__$1,temp__4092__auto__))
);
{
var G__22030 = cljs.core.next(seq__22016__$1);
var G__22031 = null;
var G__22032 = 0;
var G__22033 = 0;
seq__22016 = G__22030;
chunk__22017 = G__22031;
count__22018 = G__22032;
i__22019 = G__22033;
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
clustermap.nav.init = (function init(){clustermap.nav.init_bootstrap_tooltips();
clustermap.nav.handle_toggle_nav_search();
clustermap.nav.handle_hide_show_map_report();
return clustermap.nav.handle_view_switches();
});
