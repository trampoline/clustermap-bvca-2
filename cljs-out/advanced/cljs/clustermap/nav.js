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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$374,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$374,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22443_22449 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22444_22450 = null;var count__22445_22451 = 0;var i__22446_22452 = 0;while(true){
if((i__22446_22452 < count__22445_22451))
{var vec__22447_22453 = chunk__22444_22450.cljs$core$IIndexed$_nth$arity$2(null,i__22446_22452);var v_22454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22447_22453,0,null);var body_class_22455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22447_22453,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22454,view))
{domina.add_class_BANG_(body,body_class_22455);
} else
{domina.remove_class_BANG_(body,body_class_22455);
}
{
var G__22456 = seq__22443_22449;
var G__22457 = chunk__22444_22450;
var G__22458 = count__22445_22451;
var G__22459 = (i__22446_22452 + 1);
seq__22443_22449 = G__22456;
chunk__22444_22450 = G__22457;
count__22445_22451 = G__22458;
i__22446_22452 = G__22459;
continue;
}
} else
{var temp__4092__auto___22460 = cljs.core.seq(seq__22443_22449);if(temp__4092__auto___22460)
{var seq__22443_22461__$1 = temp__4092__auto___22460;if(cljs.core.chunked_seq_QMARK_(seq__22443_22461__$1))
{var c__4148__auto___22462 = cljs.core.chunk_first(seq__22443_22461__$1);{
var G__22463 = cljs.core.chunk_rest(seq__22443_22461__$1);
var G__22464 = c__4148__auto___22462;
var G__22465 = cljs.core.count(c__4148__auto___22462);
var G__22466 = 0;
seq__22443_22449 = G__22463;
chunk__22444_22450 = G__22464;
count__22445_22451 = G__22465;
i__22446_22452 = G__22466;
continue;
}
} else
{var vec__22448_22467 = cljs.core.first(seq__22443_22461__$1);var v_22468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448_22467,0,null);var body_class_22469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448_22467,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22468,view))
{domina.add_class_BANG_(body,body_class_22469);
} else
{domina.remove_class_BANG_(body,body_class_22469);
}
{
var G__22470 = cljs.core.next(seq__22443_22461__$1);
var G__22471 = null;
var G__22472 = 0;
var G__22473 = 0;
seq__22443_22449 = G__22470;
chunk__22444_22450 = G__22471;
count__22445_22451 = G__22472;
i__22446_22452 = G__22473;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22480 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22481 = null;var count__22482 = 0;var i__22483 = 0;while(true){
if((i__22483 < count__22482))
{var vec__22484 = chunk__22481.cljs$core$IIndexed$_nth$arity$2(null,i__22483);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$374,((function (seq__22480,chunk__22481,count__22482,i__22483,vec__22484,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,v], null));
});})(seq__22480,chunk__22481,count__22482,i__22483,vec__22484,v,_))
);
{
var G__22486 = seq__22480;
var G__22487 = chunk__22481;
var G__22488 = count__22482;
var G__22489 = (i__22483 + 1);
seq__22480 = G__22486;
chunk__22481 = G__22487;
count__22482 = G__22488;
i__22483 = G__22489;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22480);if(temp__4092__auto__)
{var seq__22480__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22480__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22480__$1);{
var G__22490 = cljs.core.chunk_rest(seq__22480__$1);
var G__22491 = c__4148__auto__;
var G__22492 = cljs.core.count(c__4148__auto__);
var G__22493 = 0;
seq__22480 = G__22490;
chunk__22481 = G__22491;
count__22482 = G__22492;
i__22483 = G__22493;
continue;
}
} else
{var vec__22485 = cljs.core.first(seq__22480__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22485,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22485,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$374,((function (seq__22480,chunk__22481,count__22482,i__22483,vec__22485,v,_,seq__22480__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,v], null));
});})(seq__22480,chunk__22481,count__22482,i__22483,vec__22485,v,_,seq__22480__$1,temp__4092__auto__))
);
{
var G__22494 = cljs.core.next(seq__22480__$1);
var G__22495 = null;
var G__22496 = 0;
var G__22497 = 0;
seq__22480 = G__22494;
chunk__22481 = G__22495;
count__22482 = G__22496;
i__22483 = G__22497;
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
