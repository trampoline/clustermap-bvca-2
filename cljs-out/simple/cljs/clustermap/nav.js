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
var seq__26301_26307 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26302_26308 = null;var count__26303_26309 = (0);var i__26304_26310 = (0);while(true){
if((i__26304_26310 < count__26303_26309))
{var vec__26305_26311 = cljs.core._nth.call(null,chunk__26302_26308,i__26304_26310);var v_26312 = cljs.core.nth.call(null,vec__26305_26311,(0),null);var body_class_26313 = cljs.core.nth.call(null,vec__26305_26311,(1),null);if(cljs.core._EQ_.call(null,v_26312,view))
{domina.add_class_BANG_.call(null,body,body_class_26313);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26313);
}
{
var G__26314 = seq__26301_26307;
var G__26315 = chunk__26302_26308;
var G__26316 = count__26303_26309;
var G__26317 = (i__26304_26310 + (1));
seq__26301_26307 = G__26314;
chunk__26302_26308 = G__26315;
count__26303_26309 = G__26316;
i__26304_26310 = G__26317;
continue;
}
} else
{var temp__4126__auto___26318 = cljs.core.seq.call(null,seq__26301_26307);if(temp__4126__auto___26318)
{var seq__26301_26319__$1 = temp__4126__auto___26318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26301_26319__$1))
{var c__4299__auto___26320 = cljs.core.chunk_first.call(null,seq__26301_26319__$1);{
var G__26321 = cljs.core.chunk_rest.call(null,seq__26301_26319__$1);
var G__26322 = c__4299__auto___26320;
var G__26323 = cljs.core.count.call(null,c__4299__auto___26320);
var G__26324 = (0);
seq__26301_26307 = G__26321;
chunk__26302_26308 = G__26322;
count__26303_26309 = G__26323;
i__26304_26310 = G__26324;
continue;
}
} else
{var vec__26306_26325 = cljs.core.first.call(null,seq__26301_26319__$1);var v_26326 = cljs.core.nth.call(null,vec__26306_26325,(0),null);var body_class_26327 = cljs.core.nth.call(null,vec__26306_26325,(1),null);if(cljs.core._EQ_.call(null,v_26326,view))
{domina.add_class_BANG_.call(null,body,body_class_26327);
} else
{domina.remove_class_BANG_.call(null,body,body_class_26327);
}
{
var G__26328 = cljs.core.next.call(null,seq__26301_26319__$1);
var G__26329 = null;
var G__26330 = (0);
var G__26331 = (0);
seq__26301_26307 = G__26328;
chunk__26302_26308 = G__26329;
count__26303_26309 = G__26330;
i__26304_26310 = G__26331;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__26338 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__26339 = null;var count__26340 = (0);var i__26341 = (0);while(true){
if((i__26341 < count__26340))
{var vec__26342 = cljs.core._nth.call(null,chunk__26339,i__26341);var v = cljs.core.nth.call(null,vec__26342,(0),null);var _ = cljs.core.nth.call(null,vec__26342,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26338,chunk__26339,count__26340,i__26341,vec__26342,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26338,chunk__26339,count__26340,i__26341,vec__26342,v,_))
);
{
var G__26344 = seq__26338;
var G__26345 = chunk__26339;
var G__26346 = count__26340;
var G__26347 = (i__26341 + (1));
seq__26338 = G__26344;
chunk__26339 = G__26345;
count__26340 = G__26346;
i__26341 = G__26347;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26338);if(temp__4126__auto__)
{var seq__26338__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26338__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__26338__$1);{
var G__26348 = cljs.core.chunk_rest.call(null,seq__26338__$1);
var G__26349 = c__4299__auto__;
var G__26350 = cljs.core.count.call(null,c__4299__auto__);
var G__26351 = (0);
seq__26338 = G__26348;
chunk__26339 = G__26349;
count__26340 = G__26350;
i__26341 = G__26351;
continue;
}
} else
{var vec__26343 = cljs.core.first.call(null,seq__26338__$1);var v = cljs.core.nth.call(null,vec__26343,(0),null);var _ = cljs.core.nth.call(null,vec__26343,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__26338,chunk__26339,count__26340,i__26341,vec__26343,v,_,seq__26338__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__26338,chunk__26339,count__26340,i__26341,vec__26343,v,_,seq__26338__$1,temp__4126__auto__))
);
{
var G__26352 = cljs.core.next.call(null,seq__26338__$1);
var G__26353 = null;
var G__26354 = (0);
var G__26355 = (0);
seq__26338 = G__26352;
chunk__26339 = G__26353;
count__26340 = G__26354;
i__26341 = G__26355;
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
