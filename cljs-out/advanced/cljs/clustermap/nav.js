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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$147,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$147,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__12033 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__12034 = null;var count__12035 = 0;var i__12036 = 0;while(true){
if((i__12036 < count__12035))
{var vec__12037 = chunk__12034.cljs$core$IIndexed$_nth$arity$2(null,i__12036);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12037,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12037,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__12039 = seq__12033;
var G__12040 = chunk__12034;
var G__12041 = count__12035;
var G__12042 = (i__12036 + 1);
seq__12033 = G__12039;
chunk__12034 = G__12040;
count__12035 = G__12041;
i__12036 = G__12042;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12033);if(temp__4092__auto__)
{var seq__12033__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12033__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__12033__$1);{
var G__12043 = cljs.core.chunk_rest(seq__12033__$1);
var G__12044 = c__4148__auto__;
var G__12045 = cljs.core.count(c__4148__auto__);
var G__12046 = 0;
seq__12033 = G__12043;
chunk__12034 = G__12044;
count__12035 = G__12045;
i__12036 = G__12046;
continue;
}
} else
{var vec__12038 = cljs.core.first(seq__12033__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__12047 = cljs.core.next(seq__12033__$1);
var G__12048 = null;
var G__12049 = 0;
var G__12050 = 0;
seq__12033 = G__12047;
chunk__12034 = G__12048;
count__12035 = G__12049;
i__12036 = G__12050;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12057 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__12058 = null;var count__12059 = 0;var i__12060 = 0;while(true){
if((i__12060 < count__12059))
{var vec__12061 = chunk__12058.cljs$core$IIndexed$_nth$arity$2(null,i__12060);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12061,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12061,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$147,((function (seq__12057,chunk__12058,count__12059,i__12060,vec__12061,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,v], null));
});})(seq__12057,chunk__12058,count__12059,i__12060,vec__12061,v,_))
);
{
var G__12063 = seq__12057;
var G__12064 = chunk__12058;
var G__12065 = count__12059;
var G__12066 = (i__12060 + 1);
seq__12057 = G__12063;
chunk__12058 = G__12064;
count__12059 = G__12065;
i__12060 = G__12066;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12057);if(temp__4092__auto__)
{var seq__12057__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12057__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__12057__$1);{
var G__12067 = cljs.core.chunk_rest(seq__12057__$1);
var G__12068 = c__4148__auto__;
var G__12069 = cljs.core.count(c__4148__auto__);
var G__12070 = 0;
seq__12057 = G__12067;
chunk__12058 = G__12068;
count__12059 = G__12069;
i__12060 = G__12070;
continue;
}
} else
{var vec__12062 = cljs.core.first(seq__12057__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12062,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12062,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$147,((function (seq__12057,chunk__12058,count__12059,i__12060,vec__12062,v,_,seq__12057__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,v], null));
});})(seq__12057,chunk__12058,count__12059,i__12060,vec__12062,v,_,seq__12057__$1,temp__4092__auto__))
);
{
var G__12071 = cljs.core.next(seq__12057__$1);
var G__12072 = null;
var G__12073 = 0;
var G__12074 = 0;
seq__12057 = G__12071;
chunk__12058 = G__12072;
count__12059 = G__12073;
i__12060 = G__12074;
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
