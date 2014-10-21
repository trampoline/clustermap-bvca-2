// Compiled by ClojureScript 0.0-2356
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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1310,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1310,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__57435_57441 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__57436_57442 = null;var count__57437_57443 = (0);var i__57438_57444 = (0);while(true){
if((i__57438_57444 < count__57437_57443))
{var vec__57439_57445 = chunk__57436_57442.cljs$core$IIndexed$_nth$arity$2(null,i__57438_57444);var v_57446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57439_57445,(0),null);var body_class_57447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57439_57445,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_57446,view))
{domina.add_class_BANG_(body,body_class_57447);
} else
{domina.remove_class_BANG_(body,body_class_57447);
}
{
var G__57448 = seq__57435_57441;
var G__57449 = chunk__57436_57442;
var G__57450 = count__57437_57443;
var G__57451 = (i__57438_57444 + (1));
seq__57435_57441 = G__57448;
chunk__57436_57442 = G__57449;
count__57437_57443 = G__57450;
i__57438_57444 = G__57451;
continue;
}
} else
{var temp__4126__auto___57452 = cljs.core.seq(seq__57435_57441);if(temp__4126__auto___57452)
{var seq__57435_57453__$1 = temp__4126__auto___57452;if(cljs.core.chunked_seq_QMARK_(seq__57435_57453__$1))
{var c__4406__auto___57454 = cljs.core.chunk_first(seq__57435_57453__$1);{
var G__57455 = cljs.core.chunk_rest(seq__57435_57453__$1);
var G__57456 = c__4406__auto___57454;
var G__57457 = cljs.core.count(c__4406__auto___57454);
var G__57458 = (0);
seq__57435_57441 = G__57455;
chunk__57436_57442 = G__57456;
count__57437_57443 = G__57457;
i__57438_57444 = G__57458;
continue;
}
} else
{var vec__57440_57459 = cljs.core.first(seq__57435_57453__$1);var v_57460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57440_57459,(0),null);var body_class_57461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57440_57459,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_57460,view))
{domina.add_class_BANG_(body,body_class_57461);
} else
{domina.remove_class_BANG_(body,body_class_57461);
}
{
var G__57462 = cljs.core.next(seq__57435_57453__$1);
var G__57463 = null;
var G__57464 = (0);
var G__57465 = (0);
seq__57435_57441 = G__57462;
chunk__57436_57442 = G__57463;
count__57437_57443 = G__57464;
i__57438_57444 = G__57465;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__57472 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__57473 = null;var count__57474 = (0);var i__57475 = (0);while(true){
if((i__57475 < count__57474))
{var vec__57476 = chunk__57473.cljs$core$IIndexed$_nth$arity$2(null,i__57475);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57476,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57476,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1310,((function (seq__57472,chunk__57473,count__57474,i__57475,vec__57476,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1311,v], null));
});})(seq__57472,chunk__57473,count__57474,i__57475,vec__57476,v,_))
);
{
var G__57478 = seq__57472;
var G__57479 = chunk__57473;
var G__57480 = count__57474;
var G__57481 = (i__57475 + (1));
seq__57472 = G__57478;
chunk__57473 = G__57479;
count__57474 = G__57480;
i__57475 = G__57481;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__57472);if(temp__4126__auto__)
{var seq__57472__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__57472__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__57472__$1);{
var G__57482 = cljs.core.chunk_rest(seq__57472__$1);
var G__57483 = c__4406__auto__;
var G__57484 = cljs.core.count(c__4406__auto__);
var G__57485 = (0);
seq__57472 = G__57482;
chunk__57473 = G__57483;
count__57474 = G__57484;
i__57475 = G__57485;
continue;
}
} else
{var vec__57477 = cljs.core.first(seq__57472__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57477,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57477,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1310,((function (seq__57472,chunk__57473,count__57474,i__57475,vec__57477,v,_,seq__57472__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1311,v], null));
});})(seq__57472,chunk__57473,count__57474,i__57475,vec__57477,v,_,seq__57472__$1,temp__4126__auto__))
);
{
var G__57486 = cljs.core.next(seq__57472__$1);
var G__57487 = null;
var G__57488 = (0);
var G__57489 = (0);
seq__57472 = G__57486;
chunk__57473 = G__57487;
count__57474 = G__57488;
i__57475 = G__57489;
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
