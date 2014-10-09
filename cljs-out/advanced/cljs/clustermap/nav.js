// Compiled by ClojureScript 0.0-2322
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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1278,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1278,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

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
var seq__47383_47389 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__47384_47390 = null;var count__47385_47391 = (0);var i__47386_47392 = (0);while(true){
if((i__47386_47392 < count__47385_47391))
{var vec__47387_47393 = chunk__47384_47390.cljs$core$IIndexed$_nth$arity$2(null,i__47386_47392);var v_47394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387_47393,(0),null);var body_class_47395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387_47393,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_47394,view))
{domina.add_class_BANG_(body,body_class_47395);
} else
{domina.remove_class_BANG_(body,body_class_47395);
}
{
var G__47396 = seq__47383_47389;
var G__47397 = chunk__47384_47390;
var G__47398 = count__47385_47391;
var G__47399 = (i__47386_47392 + (1));
seq__47383_47389 = G__47396;
chunk__47384_47390 = G__47397;
count__47385_47391 = G__47398;
i__47386_47392 = G__47399;
continue;
}
} else
{var temp__4126__auto___47400 = cljs.core.seq(seq__47383_47389);if(temp__4126__auto___47400)
{var seq__47383_47401__$1 = temp__4126__auto___47400;if(cljs.core.chunked_seq_QMARK_(seq__47383_47401__$1))
{var c__4314__auto___47402 = cljs.core.chunk_first(seq__47383_47401__$1);{
var G__47403 = cljs.core.chunk_rest(seq__47383_47401__$1);
var G__47404 = c__4314__auto___47402;
var G__47405 = cljs.core.count(c__4314__auto___47402);
var G__47406 = (0);
seq__47383_47389 = G__47403;
chunk__47384_47390 = G__47404;
count__47385_47391 = G__47405;
i__47386_47392 = G__47406;
continue;
}
} else
{var vec__47388_47407 = cljs.core.first(seq__47383_47401__$1);var v_47408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47388_47407,(0),null);var body_class_47409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47388_47407,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_47408,view))
{domina.add_class_BANG_(body,body_class_47409);
} else
{domina.remove_class_BANG_(body,body_class_47409);
}
{
var G__47410 = cljs.core.next(seq__47383_47401__$1);
var G__47411 = null;
var G__47412 = (0);
var G__47413 = (0);
seq__47383_47389 = G__47410;
chunk__47384_47390 = G__47411;
count__47385_47391 = G__47412;
i__47386_47392 = G__47413;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__47420 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__47421 = null;var count__47422 = (0);var i__47423 = (0);while(true){
if((i__47423 < count__47422))
{var vec__47424 = chunk__47421.cljs$core$IIndexed$_nth$arity$2(null,i__47423);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1278,((function (seq__47420,chunk__47421,count__47422,i__47423,vec__47424,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1279,v], null));
});})(seq__47420,chunk__47421,count__47422,i__47423,vec__47424,v,_))
);
{
var G__47426 = seq__47420;
var G__47427 = chunk__47421;
var G__47428 = count__47422;
var G__47429 = (i__47423 + (1));
seq__47420 = G__47426;
chunk__47421 = G__47427;
count__47422 = G__47428;
i__47423 = G__47429;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__47420);if(temp__4126__auto__)
{var seq__47420__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__47420__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__47420__$1);{
var G__47430 = cljs.core.chunk_rest(seq__47420__$1);
var G__47431 = c__4314__auto__;
var G__47432 = cljs.core.count(c__4314__auto__);
var G__47433 = (0);
seq__47420 = G__47430;
chunk__47421 = G__47431;
count__47422 = G__47432;
i__47423 = G__47433;
continue;
}
} else
{var vec__47425 = cljs.core.first(seq__47420__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47425,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47425,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1278,((function (seq__47420,chunk__47421,count__47422,i__47423,vec__47425,v,_,seq__47420__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1279,v], null));
});})(seq__47420,chunk__47421,count__47422,i__47423,vec__47425,v,_,seq__47420__$1,temp__4126__auto__))
);
{
var G__47434 = cljs.core.next(seq__47420__$1);
var G__47435 = null;
var G__47436 = (0);
var G__47437 = (0);
seq__47420 = G__47434;
chunk__47421 = G__47435;
count__47422 = G__47436;
i__47423 = G__47437;
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
