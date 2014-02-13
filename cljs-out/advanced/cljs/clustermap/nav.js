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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$366,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$366,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22295_22301 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22296_22302 = null;var count__22297_22303 = 0;var i__22298_22304 = 0;while(true){
if((i__22298_22304 < count__22297_22303))
{var vec__22299_22305 = chunk__22296_22302.cljs$core$IIndexed$_nth$arity$2(null,i__22298_22304);var v_22306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299_22305,0,null);var body_class_22307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299_22305,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22306,view))
{domina.add_class_BANG_(body,body_class_22307);
} else
{domina.remove_class_BANG_(body,body_class_22307);
}
{
var G__22308 = seq__22295_22301;
var G__22309 = chunk__22296_22302;
var G__22310 = count__22297_22303;
var G__22311 = (i__22298_22304 + 1);
seq__22295_22301 = G__22308;
chunk__22296_22302 = G__22309;
count__22297_22303 = G__22310;
i__22298_22304 = G__22311;
continue;
}
} else
{var temp__4092__auto___22312 = cljs.core.seq(seq__22295_22301);if(temp__4092__auto___22312)
{var seq__22295_22313__$1 = temp__4092__auto___22312;if(cljs.core.chunked_seq_QMARK_(seq__22295_22313__$1))
{var c__4148__auto___22314 = cljs.core.chunk_first(seq__22295_22313__$1);{
var G__22315 = cljs.core.chunk_rest(seq__22295_22313__$1);
var G__22316 = c__4148__auto___22314;
var G__22317 = cljs.core.count(c__4148__auto___22314);
var G__22318 = 0;
seq__22295_22301 = G__22315;
chunk__22296_22302 = G__22316;
count__22297_22303 = G__22317;
i__22298_22304 = G__22318;
continue;
}
} else
{var vec__22300_22319 = cljs.core.first(seq__22295_22313__$1);var v_22320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22300_22319,0,null);var body_class_22321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22300_22319,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22320,view))
{domina.add_class_BANG_(body,body_class_22321);
} else
{domina.remove_class_BANG_(body,body_class_22321);
}
{
var G__22322 = cljs.core.next(seq__22295_22313__$1);
var G__22323 = null;
var G__22324 = 0;
var G__22325 = 0;
seq__22295_22301 = G__22322;
chunk__22296_22302 = G__22323;
count__22297_22303 = G__22324;
i__22298_22304 = G__22325;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22332 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22333 = null;var count__22334 = 0;var i__22335 = 0;while(true){
if((i__22335 < count__22334))
{var vec__22336 = chunk__22333.cljs$core$IIndexed$_nth$arity$2(null,i__22335);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22336,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22336,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$366,((function (seq__22332,chunk__22333,count__22334,i__22335,vec__22336,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,v], null));
});})(seq__22332,chunk__22333,count__22334,i__22335,vec__22336,v,_))
);
{
var G__22338 = seq__22332;
var G__22339 = chunk__22333;
var G__22340 = count__22334;
var G__22341 = (i__22335 + 1);
seq__22332 = G__22338;
chunk__22333 = G__22339;
count__22334 = G__22340;
i__22335 = G__22341;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22332);if(temp__4092__auto__)
{var seq__22332__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22332__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22332__$1);{
var G__22342 = cljs.core.chunk_rest(seq__22332__$1);
var G__22343 = c__4148__auto__;
var G__22344 = cljs.core.count(c__4148__auto__);
var G__22345 = 0;
seq__22332 = G__22342;
chunk__22333 = G__22343;
count__22334 = G__22344;
i__22335 = G__22345;
continue;
}
} else
{var vec__22337 = cljs.core.first(seq__22332__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22337,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22337,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$366,((function (seq__22332,chunk__22333,count__22334,i__22335,vec__22337,v,_,seq__22332__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,v], null));
});})(seq__22332,chunk__22333,count__22334,i__22335,vec__22337,v,_,seq__22332__$1,temp__4092__auto__))
);
{
var G__22346 = cljs.core.next(seq__22332__$1);
var G__22347 = null;
var G__22348 = 0;
var G__22349 = 0;
seq__22332 = G__22346;
chunk__22333 = G__22347;
count__22334 = G__22348;
i__22335 = G__22349;
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
