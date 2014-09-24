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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1138,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1138,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__39261_39267 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__39262_39268 = null;var count__39263_39269 = (0);var i__39264_39270 = (0);while(true){
if((i__39264_39270 < count__39263_39269))
{var vec__39265_39271 = chunk__39262_39268.cljs$core$IIndexed$_nth$arity$2(null,i__39264_39270);var v_39272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39265_39271,(0),null);var body_class_39273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39265_39271,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_39272,view))
{domina.add_class_BANG_(body,body_class_39273);
} else
{domina.remove_class_BANG_(body,body_class_39273);
}
{
var G__39274 = seq__39261_39267;
var G__39275 = chunk__39262_39268;
var G__39276 = count__39263_39269;
var G__39277 = (i__39264_39270 + (1));
seq__39261_39267 = G__39274;
chunk__39262_39268 = G__39275;
count__39263_39269 = G__39276;
i__39264_39270 = G__39277;
continue;
}
} else
{var temp__4126__auto___39278 = cljs.core.seq(seq__39261_39267);if(temp__4126__auto___39278)
{var seq__39261_39279__$1 = temp__4126__auto___39278;if(cljs.core.chunked_seq_QMARK_(seq__39261_39279__$1))
{var c__4314__auto___39280 = cljs.core.chunk_first(seq__39261_39279__$1);{
var G__39281 = cljs.core.chunk_rest(seq__39261_39279__$1);
var G__39282 = c__4314__auto___39280;
var G__39283 = cljs.core.count(c__4314__auto___39280);
var G__39284 = (0);
seq__39261_39267 = G__39281;
chunk__39262_39268 = G__39282;
count__39263_39269 = G__39283;
i__39264_39270 = G__39284;
continue;
}
} else
{var vec__39266_39285 = cljs.core.first(seq__39261_39279__$1);var v_39286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39266_39285,(0),null);var body_class_39287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39266_39285,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_39286,view))
{domina.add_class_BANG_(body,body_class_39287);
} else
{domina.remove_class_BANG_(body,body_class_39287);
}
{
var G__39288 = cljs.core.next(seq__39261_39279__$1);
var G__39289 = null;
var G__39290 = (0);
var G__39291 = (0);
seq__39261_39267 = G__39288;
chunk__39262_39268 = G__39289;
count__39263_39269 = G__39290;
i__39264_39270 = G__39291;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__39298 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__39299 = null;var count__39300 = (0);var i__39301 = (0);while(true){
if((i__39301 < count__39300))
{var vec__39302 = chunk__39299.cljs$core$IIndexed$_nth$arity$2(null,i__39301);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39302,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39302,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1138,((function (seq__39298,chunk__39299,count__39300,i__39301,vec__39302,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1139,v], null));
});})(seq__39298,chunk__39299,count__39300,i__39301,vec__39302,v,_))
);
{
var G__39304 = seq__39298;
var G__39305 = chunk__39299;
var G__39306 = count__39300;
var G__39307 = (i__39301 + (1));
seq__39298 = G__39304;
chunk__39299 = G__39305;
count__39300 = G__39306;
i__39301 = G__39307;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39298);if(temp__4126__auto__)
{var seq__39298__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39298__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__39298__$1);{
var G__39308 = cljs.core.chunk_rest(seq__39298__$1);
var G__39309 = c__4314__auto__;
var G__39310 = cljs.core.count(c__4314__auto__);
var G__39311 = (0);
seq__39298 = G__39308;
chunk__39299 = G__39309;
count__39300 = G__39310;
i__39301 = G__39311;
continue;
}
} else
{var vec__39303 = cljs.core.first(seq__39298__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39303,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39303,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1138,((function (seq__39298,chunk__39299,count__39300,i__39301,vec__39303,v,_,seq__39298__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1139,v], null));
});})(seq__39298,chunk__39299,count__39300,i__39301,vec__39303,v,_,seq__39298__$1,temp__4126__auto__))
);
{
var G__39312 = cljs.core.next(seq__39298__$1);
var G__39313 = null;
var G__39314 = (0);
var G__39315 = (0);
seq__39298 = G__39312;
chunk__39299 = G__39313;
count__39300 = G__39314;
i__39301 = G__39315;
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
