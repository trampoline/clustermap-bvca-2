// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('domina.xpath');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$808,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$808,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.cljs$core$IFn$_invoke$arity$1("body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.cljs$core$IFn$_invoke$arity$1(target_selector);var ul = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target_li,"..");var active_li = domina.css.sel.cljs$core$IFn$_invoke$arity$2(ul,"> .active");domina.remove_class_BANG_(active_li,"active");
domina.add_class_BANG_(target_li,"active");
var seq__35394_35400 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__35395_35401 = null;var count__35396_35402 = 0;var i__35397_35403 = 0;while(true){
if((i__35397_35403 < count__35396_35402))
{var vec__35398_35404 = chunk__35395_35401.cljs$core$IIndexed$_nth$arity$2(null,i__35397_35403);var v_35405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35398_35404,0,null);var body_class_35406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35398_35404,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_35405,view))
{domina.add_class_BANG_(body,body_class_35406);
} else
{domina.remove_class_BANG_(body,body_class_35406);
}
{
var G__35407 = seq__35394_35400;
var G__35408 = chunk__35395_35401;
var G__35409 = count__35396_35402;
var G__35410 = (i__35397_35403 + 1);
seq__35394_35400 = G__35407;
chunk__35395_35401 = G__35408;
count__35396_35402 = G__35409;
i__35397_35403 = G__35410;
continue;
}
} else
{var temp__4126__auto___35411 = cljs.core.seq(seq__35394_35400);if(temp__4126__auto___35411)
{var seq__35394_35412__$1 = temp__4126__auto___35411;if(cljs.core.chunked_seq_QMARK_(seq__35394_35412__$1))
{var c__4295__auto___35413 = cljs.core.chunk_first(seq__35394_35412__$1);{
var G__35414 = cljs.core.chunk_rest(seq__35394_35412__$1);
var G__35415 = c__4295__auto___35413;
var G__35416 = cljs.core.count(c__4295__auto___35413);
var G__35417 = 0;
seq__35394_35400 = G__35414;
chunk__35395_35401 = G__35415;
count__35396_35402 = G__35416;
i__35397_35403 = G__35417;
continue;
}
} else
{var vec__35399_35418 = cljs.core.first(seq__35394_35412__$1);var v_35419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399_35418,0,null);var body_class_35420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399_35418,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_35419,view))
{domina.add_class_BANG_(body,body_class_35420);
} else
{domina.remove_class_BANG_(body,body_class_35420);
}
{
var G__35421 = cljs.core.next(seq__35394_35412__$1);
var G__35422 = null;
var G__35423 = 0;
var G__35424 = 0;
seq__35394_35400 = G__35421;
chunk__35395_35401 = G__35422;
count__35396_35402 = G__35423;
i__35397_35403 = G__35424;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__35431 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__35432 = null;var count__35433 = 0;var i__35434 = 0;while(true){
if((i__35434 < count__35433))
{var vec__35435 = chunk__35432.cljs$core$IIndexed$_nth$arity$2(null,i__35434);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35435,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35435,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$808,((function (seq__35431,chunk__35432,count__35433,i__35434,vec__35435,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793,v], null));
});})(seq__35431,chunk__35432,count__35433,i__35434,vec__35435,v,_))
);
{
var G__35437 = seq__35431;
var G__35438 = chunk__35432;
var G__35439 = count__35433;
var G__35440 = (i__35434 + 1);
seq__35431 = G__35437;
chunk__35432 = G__35438;
count__35433 = G__35439;
i__35434 = G__35440;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__35431);if(temp__4126__auto__)
{var seq__35431__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__35431__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__35431__$1);{
var G__35441 = cljs.core.chunk_rest(seq__35431__$1);
var G__35442 = c__4295__auto__;
var G__35443 = cljs.core.count(c__4295__auto__);
var G__35444 = 0;
seq__35431 = G__35441;
chunk__35432 = G__35442;
count__35433 = G__35443;
i__35434 = G__35444;
continue;
}
} else
{var vec__35436 = cljs.core.first(seq__35431__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35436,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35436,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$808,((function (seq__35431,chunk__35432,count__35433,i__35434,vec__35436,v,_,seq__35431__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793,v], null));
});})(seq__35431,chunk__35432,count__35433,i__35434,vec__35436,v,_,seq__35431__$1,temp__4126__auto__))
);
{
var G__35445 = cljs.core.next(seq__35431__$1);
var G__35446 = null;
var G__35447 = 0;
var G__35448 = 0;
seq__35431 = G__35445;
chunk__35432 = G__35446;
count__35433 = G__35447;
i__35434 = G__35448;
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
