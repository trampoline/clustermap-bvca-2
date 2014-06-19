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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$810,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$810,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__35370_35376 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__35371_35377 = null;var count__35372_35378 = 0;var i__35373_35379 = 0;while(true){
if((i__35373_35379 < count__35372_35378))
{var vec__35374_35380 = chunk__35371_35377.cljs$core$IIndexed$_nth$arity$2(null,i__35373_35379);var v_35381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35374_35380,0,null);var body_class_35382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35374_35380,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_35381,view))
{domina.add_class_BANG_(body,body_class_35382);
} else
{domina.remove_class_BANG_(body,body_class_35382);
}
{
var G__35383 = seq__35370_35376;
var G__35384 = chunk__35371_35377;
var G__35385 = count__35372_35378;
var G__35386 = (i__35373_35379 + 1);
seq__35370_35376 = G__35383;
chunk__35371_35377 = G__35384;
count__35372_35378 = G__35385;
i__35373_35379 = G__35386;
continue;
}
} else
{var temp__4126__auto___35387 = cljs.core.seq(seq__35370_35376);if(temp__4126__auto___35387)
{var seq__35370_35388__$1 = temp__4126__auto___35387;if(cljs.core.chunked_seq_QMARK_(seq__35370_35388__$1))
{var c__4295__auto___35389 = cljs.core.chunk_first(seq__35370_35388__$1);{
var G__35390 = cljs.core.chunk_rest(seq__35370_35388__$1);
var G__35391 = c__4295__auto___35389;
var G__35392 = cljs.core.count(c__4295__auto___35389);
var G__35393 = 0;
seq__35370_35376 = G__35390;
chunk__35371_35377 = G__35391;
count__35372_35378 = G__35392;
i__35373_35379 = G__35393;
continue;
}
} else
{var vec__35375_35394 = cljs.core.first(seq__35370_35388__$1);var v_35395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375_35394,0,null);var body_class_35396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375_35394,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_35395,view))
{domina.add_class_BANG_(body,body_class_35396);
} else
{domina.remove_class_BANG_(body,body_class_35396);
}
{
var G__35397 = cljs.core.next(seq__35370_35388__$1);
var G__35398 = null;
var G__35399 = 0;
var G__35400 = 0;
seq__35370_35376 = G__35397;
chunk__35371_35377 = G__35398;
count__35372_35378 = G__35399;
i__35373_35379 = G__35400;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__35407 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__35408 = null;var count__35409 = 0;var i__35410 = 0;while(true){
if((i__35410 < count__35409))
{var vec__35411 = chunk__35408.cljs$core$IIndexed$_nth$arity$2(null,i__35410);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35411,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35411,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$810,((function (seq__35407,chunk__35408,count__35409,i__35410,vec__35411,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$811,v], null));
});})(seq__35407,chunk__35408,count__35409,i__35410,vec__35411,v,_))
);
{
var G__35413 = seq__35407;
var G__35414 = chunk__35408;
var G__35415 = count__35409;
var G__35416 = (i__35410 + 1);
seq__35407 = G__35413;
chunk__35408 = G__35414;
count__35409 = G__35415;
i__35410 = G__35416;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__35407);if(temp__4126__auto__)
{var seq__35407__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__35407__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__35407__$1);{
var G__35417 = cljs.core.chunk_rest(seq__35407__$1);
var G__35418 = c__4295__auto__;
var G__35419 = cljs.core.count(c__4295__auto__);
var G__35420 = 0;
seq__35407 = G__35417;
chunk__35408 = G__35418;
count__35409 = G__35419;
i__35410 = G__35420;
continue;
}
} else
{var vec__35412 = cljs.core.first(seq__35407__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$810,((function (seq__35407,chunk__35408,count__35409,i__35410,vec__35412,v,_,seq__35407__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$811,v], null));
});})(seq__35407,chunk__35408,count__35409,i__35410,vec__35412,v,_,seq__35407__$1,temp__4126__auto__))
);
{
var G__35421 = cljs.core.next(seq__35407__$1);
var G__35422 = null;
var G__35423 = 0;
var G__35424 = 0;
seq__35407 = G__35421;
chunk__35408 = G__35422;
count__35409 = G__35423;
i__35410 = G__35424;
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
