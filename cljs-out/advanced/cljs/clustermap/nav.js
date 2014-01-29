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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$328,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$328,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__21966 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__21967 = null;var count__21968 = 0;var i__21969 = 0;while(true){
if((i__21969 < count__21968))
{var vec__21970 = chunk__21967.cljs$core$IIndexed$_nth$arity$2(null,i__21969);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21970,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21970,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__21972 = seq__21966;
var G__21973 = chunk__21967;
var G__21974 = count__21968;
var G__21975 = (i__21969 + 1);
seq__21966 = G__21972;
chunk__21967 = G__21973;
count__21968 = G__21974;
i__21969 = G__21975;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21966);if(temp__4092__auto__)
{var seq__21966__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21966__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21966__$1);{
var G__21976 = cljs.core.chunk_rest(seq__21966__$1);
var G__21977 = c__4148__auto__;
var G__21978 = cljs.core.count(c__4148__auto__);
var G__21979 = 0;
seq__21966 = G__21976;
chunk__21967 = G__21977;
count__21968 = G__21978;
i__21969 = G__21979;
continue;
}
} else
{var vec__21971 = cljs.core.first(seq__21966__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21971,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21971,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__21980 = cljs.core.next(seq__21966__$1);
var G__21981 = null;
var G__21982 = 0;
var G__21983 = 0;
seq__21966 = G__21980;
chunk__21967 = G__21981;
count__21968 = G__21982;
i__21969 = G__21983;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__21990 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__21991 = null;var count__21992 = 0;var i__21993 = 0;while(true){
if((i__21993 < count__21992))
{var vec__21994 = chunk__21991.cljs$core$IIndexed$_nth$arity$2(null,i__21993);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21994,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21994,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$328,((function (seq__21990,chunk__21991,count__21992,i__21993,vec__21994,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,v], null));
});})(seq__21990,chunk__21991,count__21992,i__21993,vec__21994,v,_))
);
{
var G__21996 = seq__21990;
var G__21997 = chunk__21991;
var G__21998 = count__21992;
var G__21999 = (i__21993 + 1);
seq__21990 = G__21996;
chunk__21991 = G__21997;
count__21992 = G__21998;
i__21993 = G__21999;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21990);if(temp__4092__auto__)
{var seq__21990__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21990__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21990__$1);{
var G__22000 = cljs.core.chunk_rest(seq__21990__$1);
var G__22001 = c__4148__auto__;
var G__22002 = cljs.core.count(c__4148__auto__);
var G__22003 = 0;
seq__21990 = G__22000;
chunk__21991 = G__22001;
count__21992 = G__22002;
i__21993 = G__22003;
continue;
}
} else
{var vec__21995 = cljs.core.first(seq__21990__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21995,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21995,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$328,((function (seq__21990,chunk__21991,count__21992,i__21993,vec__21995,v,_,seq__21990__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,v], null));
});})(seq__21990,chunk__21991,count__21992,i__21993,vec__21995,v,_,seq__21990__$1,temp__4092__auto__))
);
{
var G__22004 = cljs.core.next(seq__21990__$1);
var G__22005 = null;
var G__22006 = 0;
var G__22007 = 0;
seq__21990 = G__22004;
chunk__21991 = G__22005;
count__21992 = G__22006;
i__21993 = G__22007;
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
