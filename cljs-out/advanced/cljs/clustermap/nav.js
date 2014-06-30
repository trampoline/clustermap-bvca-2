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
var seq__35372_35378 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__35373_35379 = null;var count__35374_35380 = 0;var i__35375_35381 = 0;while(true){
if((i__35375_35381 < count__35374_35380))
{var vec__35376_35382 = chunk__35373_35379.cljs$core$IIndexed$_nth$arity$2(null,i__35375_35381);var v_35383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35376_35382,0,null);var body_class_35384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35376_35382,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_35383,view))
{domina.add_class_BANG_(body,body_class_35384);
} else
{domina.remove_class_BANG_(body,body_class_35384);
}
{
var G__35385 = seq__35372_35378;
var G__35386 = chunk__35373_35379;
var G__35387 = count__35374_35380;
var G__35388 = (i__35375_35381 + 1);
seq__35372_35378 = G__35385;
chunk__35373_35379 = G__35386;
count__35374_35380 = G__35387;
i__35375_35381 = G__35388;
continue;
}
} else
{var temp__4126__auto___35389 = cljs.core.seq(seq__35372_35378);if(temp__4126__auto___35389)
{var seq__35372_35390__$1 = temp__4126__auto___35389;if(cljs.core.chunked_seq_QMARK_(seq__35372_35390__$1))
{var c__4297__auto___35391 = cljs.core.chunk_first(seq__35372_35390__$1);{
var G__35392 = cljs.core.chunk_rest(seq__35372_35390__$1);
var G__35393 = c__4297__auto___35391;
var G__35394 = cljs.core.count(c__4297__auto___35391);
var G__35395 = 0;
seq__35372_35378 = G__35392;
chunk__35373_35379 = G__35393;
count__35374_35380 = G__35394;
i__35375_35381 = G__35395;
continue;
}
} else
{var vec__35377_35396 = cljs.core.first(seq__35372_35390__$1);var v_35397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377_35396,0,null);var body_class_35398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377_35396,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_35397,view))
{domina.add_class_BANG_(body,body_class_35398);
} else
{domina.remove_class_BANG_(body,body_class_35398);
}
{
var G__35399 = cljs.core.next(seq__35372_35390__$1);
var G__35400 = null;
var G__35401 = 0;
var G__35402 = 0;
seq__35372_35378 = G__35399;
chunk__35373_35379 = G__35400;
count__35374_35380 = G__35401;
i__35375_35381 = G__35402;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__35409 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__35410 = null;var count__35411 = 0;var i__35412 = 0;while(true){
if((i__35412 < count__35411))
{var vec__35413 = chunk__35410.cljs$core$IIndexed$_nth$arity$2(null,i__35412);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35413,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35413,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$810,((function (seq__35409,chunk__35410,count__35411,i__35412,vec__35413,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$811,v], null));
});})(seq__35409,chunk__35410,count__35411,i__35412,vec__35413,v,_))
);
{
var G__35415 = seq__35409;
var G__35416 = chunk__35410;
var G__35417 = count__35411;
var G__35418 = (i__35412 + 1);
seq__35409 = G__35415;
chunk__35410 = G__35416;
count__35411 = G__35417;
i__35412 = G__35418;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__35409);if(temp__4126__auto__)
{var seq__35409__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__35409__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__35409__$1);{
var G__35419 = cljs.core.chunk_rest(seq__35409__$1);
var G__35420 = c__4297__auto__;
var G__35421 = cljs.core.count(c__4297__auto__);
var G__35422 = 0;
seq__35409 = G__35419;
chunk__35410 = G__35420;
count__35411 = G__35421;
i__35412 = G__35422;
continue;
}
} else
{var vec__35414 = cljs.core.first(seq__35409__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35414,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35414,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$810,((function (seq__35409,chunk__35410,count__35411,i__35412,vec__35414,v,_,seq__35409__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$811,v], null));
});})(seq__35409,chunk__35410,count__35411,i__35412,vec__35414,v,_,seq__35409__$1,temp__4126__auto__))
);
{
var G__35423 = cljs.core.next(seq__35409__$1);
var G__35424 = null;
var G__35425 = 0;
var G__35426 = 0;
seq__35409 = G__35423;
chunk__35410 = G__35424;
count__35411 = G__35425;
i__35412 = G__35426;
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
