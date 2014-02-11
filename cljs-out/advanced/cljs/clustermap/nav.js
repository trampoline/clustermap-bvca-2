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
var seq__22267_22273 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22268_22274 = null;var count__22269_22275 = 0;var i__22270_22276 = 0;while(true){
if((i__22270_22276 < count__22269_22275))
{var vec__22271_22277 = chunk__22268_22274.cljs$core$IIndexed$_nth$arity$2(null,i__22270_22276);var v_22278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22271_22277,0,null);var body_class_22279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22271_22277,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22278,view))
{domina.add_class_BANG_(body,body_class_22279);
} else
{domina.remove_class_BANG_(body,body_class_22279);
}
{
var G__22280 = seq__22267_22273;
var G__22281 = chunk__22268_22274;
var G__22282 = count__22269_22275;
var G__22283 = (i__22270_22276 + 1);
seq__22267_22273 = G__22280;
chunk__22268_22274 = G__22281;
count__22269_22275 = G__22282;
i__22270_22276 = G__22283;
continue;
}
} else
{var temp__4092__auto___22284 = cljs.core.seq(seq__22267_22273);if(temp__4092__auto___22284)
{var seq__22267_22285__$1 = temp__4092__auto___22284;if(cljs.core.chunked_seq_QMARK_(seq__22267_22285__$1))
{var c__4148__auto___22286 = cljs.core.chunk_first(seq__22267_22285__$1);{
var G__22287 = cljs.core.chunk_rest(seq__22267_22285__$1);
var G__22288 = c__4148__auto___22286;
var G__22289 = cljs.core.count(c__4148__auto___22286);
var G__22290 = 0;
seq__22267_22273 = G__22287;
chunk__22268_22274 = G__22288;
count__22269_22275 = G__22289;
i__22270_22276 = G__22290;
continue;
}
} else
{var vec__22272_22291 = cljs.core.first(seq__22267_22285__$1);var v_22292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22272_22291,0,null);var body_class_22293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22272_22291,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22292,view))
{domina.add_class_BANG_(body,body_class_22293);
} else
{domina.remove_class_BANG_(body,body_class_22293);
}
{
var G__22294 = cljs.core.next(seq__22267_22285__$1);
var G__22295 = null;
var G__22296 = 0;
var G__22297 = 0;
seq__22267_22273 = G__22294;
chunk__22268_22274 = G__22295;
count__22269_22275 = G__22296;
i__22270_22276 = G__22297;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22304 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22305 = null;var count__22306 = 0;var i__22307 = 0;while(true){
if((i__22307 < count__22306))
{var vec__22308 = chunk__22305.cljs$core$IIndexed$_nth$arity$2(null,i__22307);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22308,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22308,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$361,((function (seq__22304,chunk__22305,count__22306,i__22307,vec__22308,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,v], null));
});})(seq__22304,chunk__22305,count__22306,i__22307,vec__22308,v,_))
);
{
var G__22310 = seq__22304;
var G__22311 = chunk__22305;
var G__22312 = count__22306;
var G__22313 = (i__22307 + 1);
seq__22304 = G__22310;
chunk__22305 = G__22311;
count__22306 = G__22312;
i__22307 = G__22313;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22304);if(temp__4092__auto__)
{var seq__22304__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22304__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22304__$1);{
var G__22314 = cljs.core.chunk_rest(seq__22304__$1);
var G__22315 = c__4148__auto__;
var G__22316 = cljs.core.count(c__4148__auto__);
var G__22317 = 0;
seq__22304 = G__22314;
chunk__22305 = G__22315;
count__22306 = G__22316;
i__22307 = G__22317;
continue;
}
} else
{var vec__22309 = cljs.core.first(seq__22304__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$361,((function (seq__22304,chunk__22305,count__22306,i__22307,vec__22309,v,_,seq__22304__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,v], null));
});})(seq__22304,chunk__22305,count__22306,i__22307,vec__22309,v,_,seq__22304__$1,temp__4092__auto__))
);
{
var G__22318 = cljs.core.next(seq__22304__$1);
var G__22319 = null;
var G__22320 = 0;
var G__22321 = 0;
seq__22304 = G__22318;
chunk__22305 = G__22319;
count__22306 = G__22320;
i__22307 = G__22321;
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
