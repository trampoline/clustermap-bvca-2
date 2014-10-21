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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1280,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1280,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__45223_45229 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__45224_45230 = null;var count__45225_45231 = (0);var i__45226_45232 = (0);while(true){
if((i__45226_45232 < count__45225_45231))
{var vec__45227_45233 = chunk__45224_45230.cljs$core$IIndexed$_nth$arity$2(null,i__45226_45232);var v_45234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45227_45233,(0),null);var body_class_45235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45227_45233,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_45234,view))
{domina.add_class_BANG_(body,body_class_45235);
} else
{domina.remove_class_BANG_(body,body_class_45235);
}
{
var G__45236 = seq__45223_45229;
var G__45237 = chunk__45224_45230;
var G__45238 = count__45225_45231;
var G__45239 = (i__45226_45232 + (1));
seq__45223_45229 = G__45236;
chunk__45224_45230 = G__45237;
count__45225_45231 = G__45238;
i__45226_45232 = G__45239;
continue;
}
} else
{var temp__4126__auto___45240 = cljs.core.seq(seq__45223_45229);if(temp__4126__auto___45240)
{var seq__45223_45241__$1 = temp__4126__auto___45240;if(cljs.core.chunked_seq_QMARK_(seq__45223_45241__$1))
{var c__4314__auto___45242 = cljs.core.chunk_first(seq__45223_45241__$1);{
var G__45243 = cljs.core.chunk_rest(seq__45223_45241__$1);
var G__45244 = c__4314__auto___45242;
var G__45245 = cljs.core.count(c__4314__auto___45242);
var G__45246 = (0);
seq__45223_45229 = G__45243;
chunk__45224_45230 = G__45244;
count__45225_45231 = G__45245;
i__45226_45232 = G__45246;
continue;
}
} else
{var vec__45228_45247 = cljs.core.first(seq__45223_45241__$1);var v_45248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228_45247,(0),null);var body_class_45249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228_45247,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_45248,view))
{domina.add_class_BANG_(body,body_class_45249);
} else
{domina.remove_class_BANG_(body,body_class_45249);
}
{
var G__45250 = cljs.core.next(seq__45223_45241__$1);
var G__45251 = null;
var G__45252 = (0);
var G__45253 = (0);
seq__45223_45229 = G__45250;
chunk__45224_45230 = G__45251;
count__45225_45231 = G__45252;
i__45226_45232 = G__45253;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__45260 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__45261 = null;var count__45262 = (0);var i__45263 = (0);while(true){
if((i__45263 < count__45262))
{var vec__45264 = chunk__45261.cljs$core$IIndexed$_nth$arity$2(null,i__45263);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45264,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45264,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1280,((function (seq__45260,chunk__45261,count__45262,i__45263,vec__45264,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,v], null));
});})(seq__45260,chunk__45261,count__45262,i__45263,vec__45264,v,_))
);
{
var G__45266 = seq__45260;
var G__45267 = chunk__45261;
var G__45268 = count__45262;
var G__45269 = (i__45263 + (1));
seq__45260 = G__45266;
chunk__45261 = G__45267;
count__45262 = G__45268;
i__45263 = G__45269;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45260);if(temp__4126__auto__)
{var seq__45260__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45260__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45260__$1);{
var G__45270 = cljs.core.chunk_rest(seq__45260__$1);
var G__45271 = c__4314__auto__;
var G__45272 = cljs.core.count(c__4314__auto__);
var G__45273 = (0);
seq__45260 = G__45270;
chunk__45261 = G__45271;
count__45262 = G__45272;
i__45263 = G__45273;
continue;
}
} else
{var vec__45265 = cljs.core.first(seq__45260__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45265,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45265,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1280,((function (seq__45260,chunk__45261,count__45262,i__45263,vec__45265,v,_,seq__45260__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,v], null));
});})(seq__45260,chunk__45261,count__45262,i__45263,vec__45265,v,_,seq__45260__$1,temp__4126__auto__))
);
{
var G__45274 = cljs.core.next(seq__45260__$1);
var G__45275 = null;
var G__45276 = (0);
var G__45277 = (0);
seq__45260 = G__45274;
chunk__45261 = G__45275;
count__45262 = G__45276;
i__45263 = G__45277;
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
