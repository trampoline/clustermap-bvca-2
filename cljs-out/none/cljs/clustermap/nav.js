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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
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
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__12426_12432 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12427_12433 = null;var count__12428_12434 = 0;var i__12429_12435 = 0;while(true){
if((i__12429_12435 < count__12428_12434))
{var vec__12430_12436 = cljs.core._nth.call(null,chunk__12427_12433,i__12429_12435);var v_12437 = cljs.core.nth.call(null,vec__12430_12436,0,null);var body_class_12438 = cljs.core.nth.call(null,vec__12430_12436,1,null);if(cljs.core._EQ_.call(null,v_12437,view))
{domina.add_class_BANG_.call(null,body,body_class_12438);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12438);
}
{
var G__12439 = seq__12426_12432;
var G__12440 = chunk__12427_12433;
var G__12441 = count__12428_12434;
var G__12442 = (i__12429_12435 + 1);
seq__12426_12432 = G__12439;
chunk__12427_12433 = G__12440;
count__12428_12434 = G__12441;
i__12429_12435 = G__12442;
continue;
}
} else
{var temp__4092__auto___12443 = cljs.core.seq.call(null,seq__12426_12432);if(temp__4092__auto___12443)
{var seq__12426_12444__$1 = temp__4092__auto___12443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12426_12444__$1))
{var c__4148__auto___12445 = cljs.core.chunk_first.call(null,seq__12426_12444__$1);{
var G__12446 = cljs.core.chunk_rest.call(null,seq__12426_12444__$1);
var G__12447 = c__4148__auto___12445;
var G__12448 = cljs.core.count.call(null,c__4148__auto___12445);
var G__12449 = 0;
seq__12426_12432 = G__12446;
chunk__12427_12433 = G__12447;
count__12428_12434 = G__12448;
i__12429_12435 = G__12449;
continue;
}
} else
{var vec__12431_12450 = cljs.core.first.call(null,seq__12426_12444__$1);var v_12451 = cljs.core.nth.call(null,vec__12431_12450,0,null);var body_class_12452 = cljs.core.nth.call(null,vec__12431_12450,1,null);if(cljs.core._EQ_.call(null,v_12451,view))
{domina.add_class_BANG_.call(null,body,body_class_12452);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12452);
}
{
var G__12453 = cljs.core.next.call(null,seq__12426_12444__$1);
var G__12454 = null;
var G__12455 = 0;
var G__12456 = 0;
seq__12426_12432 = G__12453;
chunk__12427_12433 = G__12454;
count__12428_12434 = G__12455;
i__12429_12435 = G__12456;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12463 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12464 = null;var count__12465 = 0;var i__12466 = 0;while(true){
if((i__12466 < count__12465))
{var vec__12467 = cljs.core._nth.call(null,chunk__12464,i__12466);var v = cljs.core.nth.call(null,vec__12467,0,null);var _ = cljs.core.nth.call(null,vec__12467,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12463,chunk__12464,count__12465,i__12466,vec__12467,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12463,chunk__12464,count__12465,i__12466,vec__12467,v,_))
);
{
var G__12469 = seq__12463;
var G__12470 = chunk__12464;
var G__12471 = count__12465;
var G__12472 = (i__12466 + 1);
seq__12463 = G__12469;
chunk__12464 = G__12470;
count__12465 = G__12471;
i__12466 = G__12472;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12463);if(temp__4092__auto__)
{var seq__12463__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12463__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12463__$1);{
var G__12473 = cljs.core.chunk_rest.call(null,seq__12463__$1);
var G__12474 = c__4148__auto__;
var G__12475 = cljs.core.count.call(null,c__4148__auto__);
var G__12476 = 0;
seq__12463 = G__12473;
chunk__12464 = G__12474;
count__12465 = G__12475;
i__12466 = G__12476;
continue;
}
} else
{var vec__12468 = cljs.core.first.call(null,seq__12463__$1);var v = cljs.core.nth.call(null,vec__12468,0,null);var _ = cljs.core.nth.call(null,vec__12468,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12463,chunk__12464,count__12465,i__12466,vec__12468,v,_,seq__12463__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12463,chunk__12464,count__12465,i__12466,vec__12468,v,_,seq__12463__$1,temp__4092__auto__))
);
{
var G__12477 = cljs.core.next.call(null,seq__12463__$1);
var G__12478 = null;
var G__12479 = 0;
var G__12480 = 0;
seq__12463 = G__12477;
chunk__12464 = G__12478;
count__12465 = G__12479;
i__12466 = G__12480;
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