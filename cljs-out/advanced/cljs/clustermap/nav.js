// Compiled by ClojureScript 0.0-2268
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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1066,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1066,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{if(true)
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
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
var seq__38488_38494 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__38489_38495 = null;var count__38490_38496 = (0);var i__38491_38497 = (0);while(true){
if((i__38491_38497 < count__38490_38496))
{var vec__38492_38498 = chunk__38489_38495.cljs$core$IIndexed$_nth$arity$2(null,i__38491_38497);var v_38499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38492_38498,(0),null);var body_class_38500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38492_38498,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_38499,view))
{domina.add_class_BANG_(body,body_class_38500);
} else
{domina.remove_class_BANG_(body,body_class_38500);
}
{
var G__38501 = seq__38488_38494;
var G__38502 = chunk__38489_38495;
var G__38503 = count__38490_38496;
var G__38504 = (i__38491_38497 + (1));
seq__38488_38494 = G__38501;
chunk__38489_38495 = G__38502;
count__38490_38496 = G__38503;
i__38491_38497 = G__38504;
continue;
}
} else
{var temp__4126__auto___38505 = cljs.core.seq(seq__38488_38494);if(temp__4126__auto___38505)
{var seq__38488_38506__$1 = temp__4126__auto___38505;if(cljs.core.chunked_seq_QMARK_(seq__38488_38506__$1))
{var c__4299__auto___38507 = cljs.core.chunk_first(seq__38488_38506__$1);{
var G__38508 = cljs.core.chunk_rest(seq__38488_38506__$1);
var G__38509 = c__4299__auto___38507;
var G__38510 = cljs.core.count(c__4299__auto___38507);
var G__38511 = (0);
seq__38488_38494 = G__38508;
chunk__38489_38495 = G__38509;
count__38490_38496 = G__38510;
i__38491_38497 = G__38511;
continue;
}
} else
{var vec__38493_38512 = cljs.core.first(seq__38488_38506__$1);var v_38513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38493_38512,(0),null);var body_class_38514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38493_38512,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_38513,view))
{domina.add_class_BANG_(body,body_class_38514);
} else
{domina.remove_class_BANG_(body,body_class_38514);
}
{
var G__38515 = cljs.core.next(seq__38488_38506__$1);
var G__38516 = null;
var G__38517 = (0);
var G__38518 = (0);
seq__38488_38494 = G__38515;
chunk__38489_38495 = G__38516;
count__38490_38496 = G__38517;
i__38491_38497 = G__38518;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__38525 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__38526 = null;var count__38527 = (0);var i__38528 = (0);while(true){
if((i__38528 < count__38527))
{var vec__38529 = chunk__38526.cljs$core$IIndexed$_nth$arity$2(null,i__38528);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38529,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38529,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1066,((function (seq__38525,chunk__38526,count__38527,i__38528,vec__38529,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1067,v], null));
});})(seq__38525,chunk__38526,count__38527,i__38528,vec__38529,v,_))
);
{
var G__38531 = seq__38525;
var G__38532 = chunk__38526;
var G__38533 = count__38527;
var G__38534 = (i__38528 + (1));
seq__38525 = G__38531;
chunk__38526 = G__38532;
count__38527 = G__38533;
i__38528 = G__38534;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38525);if(temp__4126__auto__)
{var seq__38525__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38525__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__38525__$1);{
var G__38535 = cljs.core.chunk_rest(seq__38525__$1);
var G__38536 = c__4299__auto__;
var G__38537 = cljs.core.count(c__4299__auto__);
var G__38538 = (0);
seq__38525 = G__38535;
chunk__38526 = G__38536;
count__38527 = G__38537;
i__38528 = G__38538;
continue;
}
} else
{var vec__38530 = cljs.core.first(seq__38525__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38530,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38530,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1066,((function (seq__38525,chunk__38526,count__38527,i__38528,vec__38530,v,_,seq__38525__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1067,v], null));
});})(seq__38525,chunk__38526,count__38527,i__38528,vec__38530,v,_,seq__38525__$1,temp__4126__auto__))
);
{
var G__38539 = cljs.core.next(seq__38525__$1);
var G__38540 = null;
var G__38541 = (0);
var G__38542 = (0);
seq__38525 = G__38539;
chunk__38526 = G__38540;
count__38527 = G__38541;
i__38528 = G__38542;
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
