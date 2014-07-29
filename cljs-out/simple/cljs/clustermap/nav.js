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
var seq__26369_26375 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26370_26376 = null;var count__26371_26377 = (0);var i__26372_26378 = (0);while(true){
if((i__26372_26378 < count__26371_26377))
{var vec__26373_26379 = cljs.core._nth.call(null,chunk__26370_26376,i__26372_26378);var v_26380 = cljs.core.nth.call(null,vec__26373_26379,(0),null);var body_class_26381 = cljs.core.nth.call(null,vec__26373_26379,(1),null);if(cljs.core._EQ_.call(null,v_26380,view))
{domina.add_class_BANG_.call(null,body,body_class_26381);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26381);
}
{
var G__26382 = seq__26369_26375;
var G__26383 = chunk__26370_26376;
var G__26384 = count__26371_26377;
var G__26385 = (i__26372_26378 + (1));
seq__26369_26375 = G__26382;
chunk__26370_26376 = G__26383;
count__26371_26377 = G__26384;
i__26372_26378 = G__26385;
continue;
}
} else
{var temp__4126__auto___26386 = cljs.core.seq.call(null,seq__26369_26375);if(temp__4126__auto___26386)
{var seq__26369_26387__$1 = temp__4126__auto___26386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26369_26387__$1))
{var c__4299__auto___26388 = cljs.core.chunk_first.call(null,seq__26369_26387__$1);{
var G__26389 = cljs.core.chunk_rest.call(null,seq__26369_26387__$1);
var G__26390 = c__4299__auto___26388;
var G__26391 = cljs.core.count.call(null,c__4299__auto___26388);
var G__26392 = (0);
seq__26369_26375 = G__26389;
chunk__26370_26376 = G__26390;
count__26371_26377 = G__26391;
i__26372_26378 = G__26392;
continue;
}
} else
{var vec__26374_26393 = cljs.core.first.call(null,seq__26369_26387__$1);var v_26394 = cljs.core.nth.call(null,vec__26374_26393,(0),null);var body_class_26395 = cljs.core.nth.call(null,vec__26374_26393,(1),null);if(cljs.core._EQ_.call(null,v_26394,view))
{domina.add_class_BANG_.call(null,body,body_class_26395);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26395);
}
{
var G__26396 = cljs.core.next.call(null,seq__26369_26387__$1);
var G__26397 = null;
var G__26398 = (0);
var G__26399 = (0);
seq__26369_26375 = G__26396;
chunk__26370_26376 = G__26397;
count__26371_26377 = G__26398;
i__26372_26378 = G__26399;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__26406 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26407 = null;var count__26408 = (0);var i__26409 = (0);while(true){
if((i__26409 < count__26408))
{var vec__26410 = cljs.core._nth.call(null,chunk__26407,i__26409);var v = cljs.core.nth.call(null,vec__26410,(0),null);var _ = cljs.core.nth.call(null,vec__26410,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26406,chunk__26407,count__26408,i__26409,vec__26410,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26406,chunk__26407,count__26408,i__26409,vec__26410,v,_))
);
{
var G__26412 = seq__26406;
var G__26413 = chunk__26407;
var G__26414 = count__26408;
var G__26415 = (i__26409 + (1));
seq__26406 = G__26412;
chunk__26407 = G__26413;
count__26408 = G__26414;
i__26409 = G__26415;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26406);if(temp__4126__auto__)
{var seq__26406__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26406__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__26406__$1);{
var G__26416 = cljs.core.chunk_rest.call(null,seq__26406__$1);
var G__26417 = c__4299__auto__;
var G__26418 = cljs.core.count.call(null,c__4299__auto__);
var G__26419 = (0);
seq__26406 = G__26416;
chunk__26407 = G__26417;
count__26408 = G__26418;
i__26409 = G__26419;
continue;
}
} else
{var vec__26411 = cljs.core.first.call(null,seq__26406__$1);var v = cljs.core.nth.call(null,vec__26411,(0),null);var _ = cljs.core.nth.call(null,vec__26411,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26406,chunk__26407,count__26408,i__26409,vec__26411,v,_,seq__26406__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26406,chunk__26407,count__26408,i__26409,vec__26411,v,_,seq__26406__$1,temp__4126__auto__))
);
{
var G__26420 = cljs.core.next.call(null,seq__26406__$1);
var G__26421 = null;
var G__26422 = (0);
var G__26423 = (0);
seq__26406 = G__26420;
chunk__26407 = G__26421;
count__26408 = G__26422;
i__26409 = G__26423;
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
