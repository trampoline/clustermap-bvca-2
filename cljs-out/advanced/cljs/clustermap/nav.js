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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$393,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$393,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22961_22967 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22962_22968 = null;var count__22963_22969 = 0;var i__22964_22970 = 0;while(true){
if((i__22964_22970 < count__22963_22969))
{var vec__22965_22971 = chunk__22962_22968.cljs$core$IIndexed$_nth$arity$2(null,i__22964_22970);var v_22972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22965_22971,0,null);var body_class_22973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22965_22971,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22972,view))
{domina.add_class_BANG_(body,body_class_22973);
} else
{domina.remove_class_BANG_(body,body_class_22973);
}
{
var G__22974 = seq__22961_22967;
var G__22975 = chunk__22962_22968;
var G__22976 = count__22963_22969;
var G__22977 = (i__22964_22970 + 1);
seq__22961_22967 = G__22974;
chunk__22962_22968 = G__22975;
count__22963_22969 = G__22976;
i__22964_22970 = G__22977;
continue;
}
} else
{var temp__4092__auto___22978 = cljs.core.seq(seq__22961_22967);if(temp__4092__auto___22978)
{var seq__22961_22979__$1 = temp__4092__auto___22978;if(cljs.core.chunked_seq_QMARK_(seq__22961_22979__$1))
{var c__4148__auto___22980 = cljs.core.chunk_first(seq__22961_22979__$1);{
var G__22981 = cljs.core.chunk_rest(seq__22961_22979__$1);
var G__22982 = c__4148__auto___22980;
var G__22983 = cljs.core.count(c__4148__auto___22980);
var G__22984 = 0;
seq__22961_22967 = G__22981;
chunk__22962_22968 = G__22982;
count__22963_22969 = G__22983;
i__22964_22970 = G__22984;
continue;
}
} else
{var vec__22966_22985 = cljs.core.first(seq__22961_22979__$1);var v_22986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_22985,0,null);var body_class_22987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_22985,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22986,view))
{domina.add_class_BANG_(body,body_class_22987);
} else
{domina.remove_class_BANG_(body,body_class_22987);
}
{
var G__22988 = cljs.core.next(seq__22961_22979__$1);
var G__22989 = null;
var G__22990 = 0;
var G__22991 = 0;
seq__22961_22967 = G__22988;
chunk__22962_22968 = G__22989;
count__22963_22969 = G__22990;
i__22964_22970 = G__22991;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22998 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22999 = null;var count__23000 = 0;var i__23001 = 0;while(true){
if((i__23001 < count__23000))
{var vec__23002 = chunk__22999.cljs$core$IIndexed$_nth$arity$2(null,i__23001);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23002,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23002,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$393,((function (seq__22998,chunk__22999,count__23000,i__23001,vec__23002,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,v], null));
});})(seq__22998,chunk__22999,count__23000,i__23001,vec__23002,v,_))
);
{
var G__23004 = seq__22998;
var G__23005 = chunk__22999;
var G__23006 = count__23000;
var G__23007 = (i__23001 + 1);
seq__22998 = G__23004;
chunk__22999 = G__23005;
count__23000 = G__23006;
i__23001 = G__23007;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22998);if(temp__4092__auto__)
{var seq__22998__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22998__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22998__$1);{
var G__23008 = cljs.core.chunk_rest(seq__22998__$1);
var G__23009 = c__4148__auto__;
var G__23010 = cljs.core.count(c__4148__auto__);
var G__23011 = 0;
seq__22998 = G__23008;
chunk__22999 = G__23009;
count__23000 = G__23010;
i__23001 = G__23011;
continue;
}
} else
{var vec__23003 = cljs.core.first(seq__22998__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$393,((function (seq__22998,chunk__22999,count__23000,i__23001,vec__23003,v,_,seq__22998__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,v], null));
});})(seq__22998,chunk__22999,count__23000,i__23001,vec__23003,v,_,seq__22998__$1,temp__4092__auto__))
);
{
var G__23012 = cljs.core.next(seq__22998__$1);
var G__23013 = null;
var G__23014 = 0;
var G__23015 = 0;
seq__22998 = G__23012;
chunk__22999 = G__23013;
count__23000 = G__23014;
i__23001 = G__23015;
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
