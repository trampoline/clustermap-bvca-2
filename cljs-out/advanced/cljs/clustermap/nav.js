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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$361,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$361,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22315_22321 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22316_22322 = null;var count__22317_22323 = 0;var i__22318_22324 = 0;while(true){
if((i__22318_22324 < count__22317_22323))
{var vec__22319_22325 = chunk__22316_22322.cljs$core$IIndexed$_nth$arity$2(null,i__22318_22324);var v_22326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22319_22325,0,null);var body_class_22327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22319_22325,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22326,view))
{domina.add_class_BANG_(body,body_class_22327);
} else
{domina.remove_class_BANG_(body,body_class_22327);
}
{
var G__22328 = seq__22315_22321;
var G__22329 = chunk__22316_22322;
var G__22330 = count__22317_22323;
var G__22331 = (i__22318_22324 + 1);
seq__22315_22321 = G__22328;
chunk__22316_22322 = G__22329;
count__22317_22323 = G__22330;
i__22318_22324 = G__22331;
continue;
}
} else
{var temp__4092__auto___22332 = cljs.core.seq(seq__22315_22321);if(temp__4092__auto___22332)
{var seq__22315_22333__$1 = temp__4092__auto___22332;if(cljs.core.chunked_seq_QMARK_(seq__22315_22333__$1))
{var c__4148__auto___22334 = cljs.core.chunk_first(seq__22315_22333__$1);{
var G__22335 = cljs.core.chunk_rest(seq__22315_22333__$1);
var G__22336 = c__4148__auto___22334;
var G__22337 = cljs.core.count(c__4148__auto___22334);
var G__22338 = 0;
seq__22315_22321 = G__22335;
chunk__22316_22322 = G__22336;
count__22317_22323 = G__22337;
i__22318_22324 = G__22338;
continue;
}
} else
{var vec__22320_22339 = cljs.core.first(seq__22315_22333__$1);var v_22340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22320_22339,0,null);var body_class_22341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22320_22339,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22340,view))
{domina.add_class_BANG_(body,body_class_22341);
} else
{domina.remove_class_BANG_(body,body_class_22341);
}
{
var G__22342 = cljs.core.next(seq__22315_22333__$1);
var G__22343 = null;
var G__22344 = 0;
var G__22345 = 0;
seq__22315_22321 = G__22342;
chunk__22316_22322 = G__22343;
count__22317_22323 = G__22344;
i__22318_22324 = G__22345;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22352 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22353 = null;var count__22354 = 0;var i__22355 = 0;while(true){
if((i__22355 < count__22354))
{var vec__22356 = chunk__22353.cljs$core$IIndexed$_nth$arity$2(null,i__22355);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22356,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22356,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$361,((function (seq__22352,chunk__22353,count__22354,i__22355,vec__22356,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,v], null));
});})(seq__22352,chunk__22353,count__22354,i__22355,vec__22356,v,_))
);
{
var G__22358 = seq__22352;
var G__22359 = chunk__22353;
var G__22360 = count__22354;
var G__22361 = (i__22355 + 1);
seq__22352 = G__22358;
chunk__22353 = G__22359;
count__22354 = G__22360;
i__22355 = G__22361;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22352);if(temp__4092__auto__)
{var seq__22352__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22352__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22352__$1);{
var G__22362 = cljs.core.chunk_rest(seq__22352__$1);
var G__22363 = c__4148__auto__;
var G__22364 = cljs.core.count(c__4148__auto__);
var G__22365 = 0;
seq__22352 = G__22362;
chunk__22353 = G__22363;
count__22354 = G__22364;
i__22355 = G__22365;
continue;
}
} else
{var vec__22357 = cljs.core.first(seq__22352__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22357,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22357,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$361,((function (seq__22352,chunk__22353,count__22354,i__22355,vec__22357,v,_,seq__22352__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,v], null));
});})(seq__22352,chunk__22353,count__22354,i__22355,vec__22357,v,_,seq__22352__$1,temp__4092__auto__))
);
{
var G__22366 = cljs.core.next(seq__22352__$1);
var G__22367 = null;
var G__22368 = 0;
var G__22369 = 0;
seq__22352 = G__22366;
chunk__22353 = G__22367;
count__22354 = G__22368;
i__22355 = G__22369;
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
