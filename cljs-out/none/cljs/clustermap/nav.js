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
var seq__54340_54346 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__54341_54347 = null;var count__54342_54348 = (0);var i__54343_54349 = (0);while(true){
if((i__54343_54349 < count__54342_54348))
{var vec__54344_54350 = cljs.core._nth.call(null,chunk__54341_54347,i__54343_54349);var v_54351 = cljs.core.nth.call(null,vec__54344_54350,(0),null);var body_class_54352 = cljs.core.nth.call(null,vec__54344_54350,(1),null);if(cljs.core._EQ_.call(null,v_54351,view))
{domina.add_class_BANG_.call(null,body,body_class_54352);
} else
{domina.remove_class_BANG_.call(null,body,body_class_54352);
}
{
var G__54353 = seq__54340_54346;
var G__54354 = chunk__54341_54347;
var G__54355 = count__54342_54348;
var G__54356 = (i__54343_54349 + (1));
seq__54340_54346 = G__54353;
chunk__54341_54347 = G__54354;
count__54342_54348 = G__54355;
i__54343_54349 = G__54356;
continue;
}
} else
{var temp__4126__auto___54357 = cljs.core.seq.call(null,seq__54340_54346);if(temp__4126__auto___54357)
{var seq__54340_54358__$1 = temp__4126__auto___54357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54340_54358__$1))
{var c__4314__auto___54359 = cljs.core.chunk_first.call(null,seq__54340_54358__$1);{
var G__54360 = cljs.core.chunk_rest.call(null,seq__54340_54358__$1);
var G__54361 = c__4314__auto___54359;
var G__54362 = cljs.core.count.call(null,c__4314__auto___54359);
var G__54363 = (0);
seq__54340_54346 = G__54360;
chunk__54341_54347 = G__54361;
count__54342_54348 = G__54362;
i__54343_54349 = G__54363;
continue;
}
} else
{var vec__54345_54364 = cljs.core.first.call(null,seq__54340_54358__$1);var v_54365 = cljs.core.nth.call(null,vec__54345_54364,(0),null);var body_class_54366 = cljs.core.nth.call(null,vec__54345_54364,(1),null);if(cljs.core._EQ_.call(null,v_54365,view))
{domina.add_class_BANG_.call(null,body,body_class_54366);
} else
{domina.remove_class_BANG_.call(null,body,body_class_54366);
}
{
var G__54367 = cljs.core.next.call(null,seq__54340_54358__$1);
var G__54368 = null;
var G__54369 = (0);
var G__54370 = (0);
seq__54340_54346 = G__54367;
chunk__54341_54347 = G__54368;
count__54342_54348 = G__54369;
i__54343_54349 = G__54370;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__54377 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__54378 = null;var count__54379 = (0);var i__54380 = (0);while(true){
if((i__54380 < count__54379))
{var vec__54381 = cljs.core._nth.call(null,chunk__54378,i__54380);var v = cljs.core.nth.call(null,vec__54381,(0),null);var _ = cljs.core.nth.call(null,vec__54381,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__54377,chunk__54378,count__54379,i__54380,vec__54381,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__54377,chunk__54378,count__54379,i__54380,vec__54381,v,_))
);
{
var G__54383 = seq__54377;
var G__54384 = chunk__54378;
var G__54385 = count__54379;
var G__54386 = (i__54380 + (1));
seq__54377 = G__54383;
chunk__54378 = G__54384;
count__54379 = G__54385;
i__54380 = G__54386;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54377);if(temp__4126__auto__)
{var seq__54377__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54377__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__54377__$1);{
var G__54387 = cljs.core.chunk_rest.call(null,seq__54377__$1);
var G__54388 = c__4314__auto__;
var G__54389 = cljs.core.count.call(null,c__4314__auto__);
var G__54390 = (0);
seq__54377 = G__54387;
chunk__54378 = G__54388;
count__54379 = G__54389;
i__54380 = G__54390;
continue;
}
} else
{var vec__54382 = cljs.core.first.call(null,seq__54377__$1);var v = cljs.core.nth.call(null,vec__54382,(0),null);var _ = cljs.core.nth.call(null,vec__54382,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__54377,chunk__54378,count__54379,i__54380,vec__54382,v,_,seq__54377__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__54377,chunk__54378,count__54379,i__54380,vec__54382,v,_,seq__54377__$1,temp__4126__auto__))
);
{
var G__54391 = cljs.core.next.call(null,seq__54377__$1);
var G__54392 = null;
var G__54393 = (0);
var G__54394 = (0);
seq__54377 = G__54391;
chunk__54378 = G__54392;
count__54379 = G__54393;
i__54380 = G__54394;
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