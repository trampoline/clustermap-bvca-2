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
var seq__22026 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22027 = null;var count__22028 = 0;var i__22029 = 0;while(true){
if((i__22029 < count__22028))
{var vec__22030 = chunk__22027.cljs$core$IIndexed$_nth$arity$2(null,i__22029);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22030,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22030,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22032 = seq__22026;
var G__22033 = chunk__22027;
var G__22034 = count__22028;
var G__22035 = (i__22029 + 1);
seq__22026 = G__22032;
chunk__22027 = G__22033;
count__22028 = G__22034;
i__22029 = G__22035;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22026);if(temp__4092__auto__)
{var seq__22026__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22026__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22026__$1);{
var G__22036 = cljs.core.chunk_rest(seq__22026__$1);
var G__22037 = c__4148__auto__;
var G__22038 = cljs.core.count(c__4148__auto__);
var G__22039 = 0;
seq__22026 = G__22036;
chunk__22027 = G__22037;
count__22028 = G__22038;
i__22029 = G__22039;
continue;
}
} else
{var vec__22031 = cljs.core.first(seq__22026__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22031,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22031,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22040 = cljs.core.next(seq__22026__$1);
var G__22041 = null;
var G__22042 = 0;
var G__22043 = 0;
seq__22026 = G__22040;
chunk__22027 = G__22041;
count__22028 = G__22042;
i__22029 = G__22043;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22050 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22051 = null;var count__22052 = 0;var i__22053 = 0;while(true){
if((i__22053 < count__22052))
{var vec__22054 = chunk__22051.cljs$core$IIndexed$_nth$arity$2(null,i__22053);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22054,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22054,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$330,((function (seq__22050,chunk__22051,count__22052,i__22053,vec__22054,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,v], null));
});})(seq__22050,chunk__22051,count__22052,i__22053,vec__22054,v,_))
);
{
var G__22056 = seq__22050;
var G__22057 = chunk__22051;
var G__22058 = count__22052;
var G__22059 = (i__22053 + 1);
seq__22050 = G__22056;
chunk__22051 = G__22057;
count__22052 = G__22058;
i__22053 = G__22059;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22050);if(temp__4092__auto__)
{var seq__22050__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22050__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22050__$1);{
var G__22060 = cljs.core.chunk_rest(seq__22050__$1);
var G__22061 = c__4148__auto__;
var G__22062 = cljs.core.count(c__4148__auto__);
var G__22063 = 0;
seq__22050 = G__22060;
chunk__22051 = G__22061;
count__22052 = G__22062;
i__22053 = G__22063;
continue;
}
} else
{var vec__22055 = cljs.core.first(seq__22050__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$330,((function (seq__22050,chunk__22051,count__22052,i__22053,vec__22055,v,_,seq__22050__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,v], null));
});})(seq__22050,chunk__22051,count__22052,i__22053,vec__22055,v,_,seq__22050__$1,temp__4092__auto__))
);
{
var G__22064 = cljs.core.next(seq__22050__$1);
var G__22065 = null;
var G__22066 = 0;
var G__22067 = 0;
seq__22050 = G__22064;
chunk__22051 = G__22065;
count__22052 = G__22066;
i__22053 = G__22067;
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
