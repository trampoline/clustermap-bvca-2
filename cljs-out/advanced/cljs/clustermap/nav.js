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
var seq__22965_22971 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22966_22972 = null;var count__22967_22973 = 0;var i__22968_22974 = 0;while(true){
if((i__22968_22974 < count__22967_22973))
{var vec__22969_22975 = chunk__22966_22972.cljs$core$IIndexed$_nth$arity$2(null,i__22968_22974);var v_22976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_22975,0,null);var body_class_22977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_22975,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22976,view))
{domina.add_class_BANG_(body,body_class_22977);
} else
{domina.remove_class_BANG_(body,body_class_22977);
}
{
var G__22978 = seq__22965_22971;
var G__22979 = chunk__22966_22972;
var G__22980 = count__22967_22973;
var G__22981 = (i__22968_22974 + 1);
seq__22965_22971 = G__22978;
chunk__22966_22972 = G__22979;
count__22967_22973 = G__22980;
i__22968_22974 = G__22981;
continue;
}
} else
{var temp__4092__auto___22982 = cljs.core.seq(seq__22965_22971);if(temp__4092__auto___22982)
{var seq__22965_22983__$1 = temp__4092__auto___22982;if(cljs.core.chunked_seq_QMARK_(seq__22965_22983__$1))
{var c__4148__auto___22984 = cljs.core.chunk_first(seq__22965_22983__$1);{
var G__22985 = cljs.core.chunk_rest(seq__22965_22983__$1);
var G__22986 = c__4148__auto___22984;
var G__22987 = cljs.core.count(c__4148__auto___22984);
var G__22988 = 0;
seq__22965_22971 = G__22985;
chunk__22966_22972 = G__22986;
count__22967_22973 = G__22987;
i__22968_22974 = G__22988;
continue;
}
} else
{var vec__22970_22989 = cljs.core.first(seq__22965_22983__$1);var v_22990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970_22989,0,null);var body_class_22991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970_22989,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22990,view))
{domina.add_class_BANG_(body,body_class_22991);
} else
{domina.remove_class_BANG_(body,body_class_22991);
}
{
var G__22992 = cljs.core.next(seq__22965_22983__$1);
var G__22993 = null;
var G__22994 = 0;
var G__22995 = 0;
seq__22965_22971 = G__22992;
chunk__22966_22972 = G__22993;
count__22967_22973 = G__22994;
i__22968_22974 = G__22995;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23002 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23003 = null;var count__23004 = 0;var i__23005 = 0;while(true){
if((i__23005 < count__23004))
{var vec__23006 = chunk__23003.cljs$core$IIndexed$_nth$arity$2(null,i__23005);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$393,((function (seq__23002,chunk__23003,count__23004,i__23005,vec__23006,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,v], null));
});})(seq__23002,chunk__23003,count__23004,i__23005,vec__23006,v,_))
);
{
var G__23008 = seq__23002;
var G__23009 = chunk__23003;
var G__23010 = count__23004;
var G__23011 = (i__23005 + 1);
seq__23002 = G__23008;
chunk__23003 = G__23009;
count__23004 = G__23010;
i__23005 = G__23011;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23002);if(temp__4092__auto__)
{var seq__23002__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23002__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23002__$1);{
var G__23012 = cljs.core.chunk_rest(seq__23002__$1);
var G__23013 = c__4148__auto__;
var G__23014 = cljs.core.count(c__4148__auto__);
var G__23015 = 0;
seq__23002 = G__23012;
chunk__23003 = G__23013;
count__23004 = G__23014;
i__23005 = G__23015;
continue;
}
} else
{var vec__23007 = cljs.core.first(seq__23002__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23007,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23007,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$393,((function (seq__23002,chunk__23003,count__23004,i__23005,vec__23007,v,_,seq__23002__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,v], null));
});})(seq__23002,chunk__23003,count__23004,i__23005,vec__23007,v,_,seq__23002__$1,temp__4092__auto__))
);
{
var G__23016 = cljs.core.next(seq__23002__$1);
var G__23017 = null;
var G__23018 = 0;
var G__23019 = 0;
seq__23002 = G__23016;
chunk__23003 = G__23017;
count__23004 = G__23018;
i__23005 = G__23019;
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
