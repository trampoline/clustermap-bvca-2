// Compiled by ClojureScript 0.0-2261
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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
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
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.call(null,"body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__49342_49348 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__49343_49349 = null;var count__49344_49350 = (0);var i__49345_49351 = (0);while(true){
if((i__49345_49351 < count__49344_49350))
{var vec__49346_49352 = cljs.core._nth.call(null,chunk__49343_49349,i__49345_49351);var v_49353 = cljs.core.nth.call(null,vec__49346_49352,(0),null);var body_class_49354 = cljs.core.nth.call(null,vec__49346_49352,(1),null);if(cljs.core._EQ_.call(null,v_49353,view))
{domina.add_class_BANG_.call(null,body,body_class_49354);
} else
{domina.remove_class_BANG_.call(null,body,body_class_49354);
}
{
var G__49355 = seq__49342_49348;
var G__49356 = chunk__49343_49349;
var G__49357 = count__49344_49350;
var G__49358 = (i__49345_49351 + (1));
seq__49342_49348 = G__49355;
chunk__49343_49349 = G__49356;
count__49344_49350 = G__49357;
i__49345_49351 = G__49358;
continue;
}
} else
{var temp__4126__auto___49359 = cljs.core.seq.call(null,seq__49342_49348);if(temp__4126__auto___49359)
{var seq__49342_49360__$1 = temp__4126__auto___49359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49342_49360__$1))
{var c__4299__auto___49361 = cljs.core.chunk_first.call(null,seq__49342_49360__$1);{
var G__49362 = cljs.core.chunk_rest.call(null,seq__49342_49360__$1);
var G__49363 = c__4299__auto___49361;
var G__49364 = cljs.core.count.call(null,c__4299__auto___49361);
var G__49365 = (0);
seq__49342_49348 = G__49362;
chunk__49343_49349 = G__49363;
count__49344_49350 = G__49364;
i__49345_49351 = G__49365;
continue;
}
} else
{var vec__49347_49366 = cljs.core.first.call(null,seq__49342_49360__$1);var v_49367 = cljs.core.nth.call(null,vec__49347_49366,(0),null);var body_class_49368 = cljs.core.nth.call(null,vec__49347_49366,(1),null);if(cljs.core._EQ_.call(null,v_49367,view))
{domina.add_class_BANG_.call(null,body,body_class_49368);
} else
{domina.remove_class_BANG_.call(null,body,body_class_49368);
}
{
var G__49369 = cljs.core.next.call(null,seq__49342_49360__$1);
var G__49370 = null;
var G__49371 = (0);
var G__49372 = (0);
seq__49342_49348 = G__49369;
chunk__49343_49349 = G__49370;
count__49344_49350 = G__49371;
i__49345_49351 = G__49372;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__49379 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__49380 = null;var count__49381 = (0);var i__49382 = (0);while(true){
if((i__49382 < count__49381))
{var vec__49383 = cljs.core._nth.call(null,chunk__49380,i__49382);var v = cljs.core.nth.call(null,vec__49383,(0),null);var _ = cljs.core.nth.call(null,vec__49383,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__49379,chunk__49380,count__49381,i__49382,vec__49383,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__49379,chunk__49380,count__49381,i__49382,vec__49383,v,_))
);
{
var G__49385 = seq__49379;
var G__49386 = chunk__49380;
var G__49387 = count__49381;
var G__49388 = (i__49382 + (1));
seq__49379 = G__49385;
chunk__49380 = G__49386;
count__49381 = G__49387;
i__49382 = G__49388;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49379);if(temp__4126__auto__)
{var seq__49379__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49379__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__49379__$1);{
var G__49389 = cljs.core.chunk_rest.call(null,seq__49379__$1);
var G__49390 = c__4299__auto__;
var G__49391 = cljs.core.count.call(null,c__4299__auto__);
var G__49392 = (0);
seq__49379 = G__49389;
chunk__49380 = G__49390;
count__49381 = G__49391;
i__49382 = G__49392;
continue;
}
} else
{var vec__49384 = cljs.core.first.call(null,seq__49379__$1);var v = cljs.core.nth.call(null,vec__49384,(0),null);var _ = cljs.core.nth.call(null,vec__49384,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__49379,chunk__49380,count__49381,i__49382,vec__49384,v,_,seq__49379__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__49379,chunk__49380,count__49381,i__49382,vec__49384,v,_,seq__49379__$1,temp__4126__auto__))
);
{
var G__49393 = cljs.core.next.call(null,seq__49379__$1);
var G__49394 = null;
var G__49395 = (0);
var G__49396 = (0);
seq__49379 = G__49393;
chunk__49380 = G__49394;
count__49381 = G__49395;
i__49382 = G__49396;
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
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});

//# sourceMappingURL=nav.js.map