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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$343,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$343,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22216 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22217 = null;var count__22218 = 0;var i__22219 = 0;while(true){
if((i__22219 < count__22218))
{var vec__22220 = chunk__22217.cljs$core$IIndexed$_nth$arity$2(null,i__22219);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22220,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22220,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22222 = seq__22216;
var G__22223 = chunk__22217;
var G__22224 = count__22218;
var G__22225 = (i__22219 + 1);
seq__22216 = G__22222;
chunk__22217 = G__22223;
count__22218 = G__22224;
i__22219 = G__22225;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22216);if(temp__4092__auto__)
{var seq__22216__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22216__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22216__$1);{
var G__22226 = cljs.core.chunk_rest(seq__22216__$1);
var G__22227 = c__4148__auto__;
var G__22228 = cljs.core.count(c__4148__auto__);
var G__22229 = 0;
seq__22216 = G__22226;
chunk__22217 = G__22227;
count__22218 = G__22228;
i__22219 = G__22229;
continue;
}
} else
{var vec__22221 = cljs.core.first(seq__22216__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22230 = cljs.core.next(seq__22216__$1);
var G__22231 = null;
var G__22232 = 0;
var G__22233 = 0;
seq__22216 = G__22230;
chunk__22217 = G__22231;
count__22218 = G__22232;
i__22219 = G__22233;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22240 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22241 = null;var count__22242 = 0;var i__22243 = 0;while(true){
if((i__22243 < count__22242))
{var vec__22244 = chunk__22241.cljs$core$IIndexed$_nth$arity$2(null,i__22243);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22244,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22244,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$343,((function (seq__22240,chunk__22241,count__22242,i__22243,vec__22244,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,v], null));
});})(seq__22240,chunk__22241,count__22242,i__22243,vec__22244,v,_))
);
{
var G__22246 = seq__22240;
var G__22247 = chunk__22241;
var G__22248 = count__22242;
var G__22249 = (i__22243 + 1);
seq__22240 = G__22246;
chunk__22241 = G__22247;
count__22242 = G__22248;
i__22243 = G__22249;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22240);if(temp__4092__auto__)
{var seq__22240__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22240__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22240__$1);{
var G__22250 = cljs.core.chunk_rest(seq__22240__$1);
var G__22251 = c__4148__auto__;
var G__22252 = cljs.core.count(c__4148__auto__);
var G__22253 = 0;
seq__22240 = G__22250;
chunk__22241 = G__22251;
count__22242 = G__22252;
i__22243 = G__22253;
continue;
}
} else
{var vec__22245 = cljs.core.first(seq__22240__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22245,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22245,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$343,((function (seq__22240,chunk__22241,count__22242,i__22243,vec__22245,v,_,seq__22240__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,v], null));
});})(seq__22240,chunk__22241,count__22242,i__22243,vec__22245,v,_,seq__22240__$1,temp__4092__auto__))
);
{
var G__22254 = cljs.core.next(seq__22240__$1);
var G__22255 = null;
var G__22256 = 0;
var G__22257 = 0;
seq__22240 = G__22254;
chunk__22241 = G__22255;
count__22242 = G__22256;
i__22243 = G__22257;
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
