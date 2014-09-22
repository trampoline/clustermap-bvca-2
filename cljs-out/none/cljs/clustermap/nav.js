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
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

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
var seq__14330_14336 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14331_14337 = null;var count__14332_14338 = (0);var i__14333_14339 = (0);while(true){
if((i__14333_14339 < count__14332_14338))
{var vec__14334_14340 = cljs.core._nth.call(null,chunk__14331_14337,i__14333_14339);var v_14341 = cljs.core.nth.call(null,vec__14334_14340,(0),null);var body_class_14342 = cljs.core.nth.call(null,vec__14334_14340,(1),null);if(cljs.core._EQ_.call(null,v_14341,view))
{domina.add_class_BANG_.call(null,body,body_class_14342);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14342);
}
{
var G__14343 = seq__14330_14336;
var G__14344 = chunk__14331_14337;
var G__14345 = count__14332_14338;
var G__14346 = (i__14333_14339 + (1));
seq__14330_14336 = G__14343;
chunk__14331_14337 = G__14344;
count__14332_14338 = G__14345;
i__14333_14339 = G__14346;
continue;
}
} else
{var temp__4126__auto___14347 = cljs.core.seq.call(null,seq__14330_14336);if(temp__4126__auto___14347)
{var seq__14330_14348__$1 = temp__4126__auto___14347;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14330_14348__$1))
{var c__4314__auto___14349 = cljs.core.chunk_first.call(null,seq__14330_14348__$1);{
var G__14350 = cljs.core.chunk_rest.call(null,seq__14330_14348__$1);
var G__14351 = c__4314__auto___14349;
var G__14352 = cljs.core.count.call(null,c__4314__auto___14349);
var G__14353 = (0);
seq__14330_14336 = G__14350;
chunk__14331_14337 = G__14351;
count__14332_14338 = G__14352;
i__14333_14339 = G__14353;
continue;
}
} else
{var vec__14335_14354 = cljs.core.first.call(null,seq__14330_14348__$1);var v_14355 = cljs.core.nth.call(null,vec__14335_14354,(0),null);var body_class_14356 = cljs.core.nth.call(null,vec__14335_14354,(1),null);if(cljs.core._EQ_.call(null,v_14355,view))
{domina.add_class_BANG_.call(null,body,body_class_14356);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14356);
}
{
var G__14357 = cljs.core.next.call(null,seq__14330_14348__$1);
var G__14358 = null;
var G__14359 = (0);
var G__14360 = (0);
seq__14330_14336 = G__14357;
chunk__14331_14337 = G__14358;
count__14332_14338 = G__14359;
i__14333_14339 = G__14360;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14367 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14368 = null;var count__14369 = (0);var i__14370 = (0);while(true){
if((i__14370 < count__14369))
{var vec__14371 = cljs.core._nth.call(null,chunk__14368,i__14370);var v = cljs.core.nth.call(null,vec__14371,(0),null);var _ = cljs.core.nth.call(null,vec__14371,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14367,chunk__14368,count__14369,i__14370,vec__14371,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14367,chunk__14368,count__14369,i__14370,vec__14371,v,_))
);
{
var G__14373 = seq__14367;
var G__14374 = chunk__14368;
var G__14375 = count__14369;
var G__14376 = (i__14370 + (1));
seq__14367 = G__14373;
chunk__14368 = G__14374;
count__14369 = G__14375;
i__14370 = G__14376;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14367);if(temp__4126__auto__)
{var seq__14367__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14367__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__14367__$1);{
var G__14377 = cljs.core.chunk_rest.call(null,seq__14367__$1);
var G__14378 = c__4314__auto__;
var G__14379 = cljs.core.count.call(null,c__4314__auto__);
var G__14380 = (0);
seq__14367 = G__14377;
chunk__14368 = G__14378;
count__14369 = G__14379;
i__14370 = G__14380;
continue;
}
} else
{var vec__14372 = cljs.core.first.call(null,seq__14367__$1);var v = cljs.core.nth.call(null,vec__14372,(0),null);var _ = cljs.core.nth.call(null,vec__14372,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14367,chunk__14368,count__14369,i__14370,vec__14372,v,_,seq__14367__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14367,chunk__14368,count__14369,i__14370,vec__14372,v,_,seq__14367__$1,temp__4126__auto__))
);
{
var G__14381 = cljs.core.next.call(null,seq__14367__$1);
var G__14382 = null;
var G__14383 = (0);
var G__14384 = (0);
seq__14367 = G__14381;
chunk__14368 = G__14382;
count__14369 = G__14383;
i__14370 = G__14384;
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