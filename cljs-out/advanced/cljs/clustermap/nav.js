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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$337,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$337,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22006 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22007 = null;var count__22008 = 0;var i__22009 = 0;while(true){
if((i__22009 < count__22008))
{var vec__22010 = chunk__22007.cljs$core$IIndexed$_nth$arity$2(null,i__22009);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22010,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22010,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22012 = seq__22006;
var G__22013 = chunk__22007;
var G__22014 = count__22008;
var G__22015 = (i__22009 + 1);
seq__22006 = G__22012;
chunk__22007 = G__22013;
count__22008 = G__22014;
i__22009 = G__22015;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22006);if(temp__4092__auto__)
{var seq__22006__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22006__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22006__$1);{
var G__22016 = cljs.core.chunk_rest(seq__22006__$1);
var G__22017 = c__4148__auto__;
var G__22018 = cljs.core.count(c__4148__auto__);
var G__22019 = 0;
seq__22006 = G__22016;
chunk__22007 = G__22017;
count__22008 = G__22018;
i__22009 = G__22019;
continue;
}
} else
{var vec__22011 = cljs.core.first(seq__22006__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22020 = cljs.core.next(seq__22006__$1);
var G__22021 = null;
var G__22022 = 0;
var G__22023 = 0;
seq__22006 = G__22020;
chunk__22007 = G__22021;
count__22008 = G__22022;
i__22009 = G__22023;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22030 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22031 = null;var count__22032 = 0;var i__22033 = 0;while(true){
if((i__22033 < count__22032))
{var vec__22034 = chunk__22031.cljs$core$IIndexed$_nth$arity$2(null,i__22033);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22034,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22034,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$337,((function (seq__22030,chunk__22031,count__22032,i__22033,vec__22034,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,v], null));
});})(seq__22030,chunk__22031,count__22032,i__22033,vec__22034,v,_))
);
{
var G__22036 = seq__22030;
var G__22037 = chunk__22031;
var G__22038 = count__22032;
var G__22039 = (i__22033 + 1);
seq__22030 = G__22036;
chunk__22031 = G__22037;
count__22032 = G__22038;
i__22033 = G__22039;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22030);if(temp__4092__auto__)
{var seq__22030__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22030__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22030__$1);{
var G__22040 = cljs.core.chunk_rest(seq__22030__$1);
var G__22041 = c__4148__auto__;
var G__22042 = cljs.core.count(c__4148__auto__);
var G__22043 = 0;
seq__22030 = G__22040;
chunk__22031 = G__22041;
count__22032 = G__22042;
i__22033 = G__22043;
continue;
}
} else
{var vec__22035 = cljs.core.first(seq__22030__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22035,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22035,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$337,((function (seq__22030,chunk__22031,count__22032,i__22033,vec__22035,v,_,seq__22030__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,v], null));
});})(seq__22030,chunk__22031,count__22032,i__22033,vec__22035,v,_,seq__22030__$1,temp__4092__auto__))
);
{
var G__22044 = cljs.core.next(seq__22030__$1);
var G__22045 = null;
var G__22046 = 0;
var G__22047 = 0;
seq__22030 = G__22044;
chunk__22031 = G__22045;
count__22032 = G__22046;
i__22033 = G__22047;
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
