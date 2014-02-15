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
var seq__12430_12436 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12431_12437 = null;var count__12432_12438 = 0;var i__12433_12439 = 0;while(true){
if((i__12433_12439 < count__12432_12438))
{var vec__12434_12440 = cljs.core._nth.call(null,chunk__12431_12437,i__12433_12439);var v_12441 = cljs.core.nth.call(null,vec__12434_12440,0,null);var body_class_12442 = cljs.core.nth.call(null,vec__12434_12440,1,null);if(cljs.core._EQ_.call(null,v_12441,view))
{domina.add_class_BANG_.call(null,body,body_class_12442);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12442);
}
{
var G__12443 = seq__12430_12436;
var G__12444 = chunk__12431_12437;
var G__12445 = count__12432_12438;
var G__12446 = (i__12433_12439 + 1);
seq__12430_12436 = G__12443;
chunk__12431_12437 = G__12444;
count__12432_12438 = G__12445;
i__12433_12439 = G__12446;
continue;
}
} else
{var temp__4092__auto___12447 = cljs.core.seq.call(null,seq__12430_12436);if(temp__4092__auto___12447)
{var seq__12430_12448__$1 = temp__4092__auto___12447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12430_12448__$1))
{var c__4148__auto___12449 = cljs.core.chunk_first.call(null,seq__12430_12448__$1);{
var G__12450 = cljs.core.chunk_rest.call(null,seq__12430_12448__$1);
var G__12451 = c__4148__auto___12449;
var G__12452 = cljs.core.count.call(null,c__4148__auto___12449);
var G__12453 = 0;
seq__12430_12436 = G__12450;
chunk__12431_12437 = G__12451;
count__12432_12438 = G__12452;
i__12433_12439 = G__12453;
continue;
}
} else
{var vec__12435_12454 = cljs.core.first.call(null,seq__12430_12448__$1);var v_12455 = cljs.core.nth.call(null,vec__12435_12454,0,null);var body_class_12456 = cljs.core.nth.call(null,vec__12435_12454,1,null);if(cljs.core._EQ_.call(null,v_12455,view))
{domina.add_class_BANG_.call(null,body,body_class_12456);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12456);
}
{
var G__12457 = cljs.core.next.call(null,seq__12430_12448__$1);
var G__12458 = null;
var G__12459 = 0;
var G__12460 = 0;
seq__12430_12436 = G__12457;
chunk__12431_12437 = G__12458;
count__12432_12438 = G__12459;
i__12433_12439 = G__12460;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12467 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12468 = null;var count__12469 = 0;var i__12470 = 0;while(true){
if((i__12470 < count__12469))
{var vec__12471 = cljs.core._nth.call(null,chunk__12468,i__12470);var v = cljs.core.nth.call(null,vec__12471,0,null);var _ = cljs.core.nth.call(null,vec__12471,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12467,chunk__12468,count__12469,i__12470,vec__12471,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12467,chunk__12468,count__12469,i__12470,vec__12471,v,_))
);
{
var G__12473 = seq__12467;
var G__12474 = chunk__12468;
var G__12475 = count__12469;
var G__12476 = (i__12470 + 1);
seq__12467 = G__12473;
chunk__12468 = G__12474;
count__12469 = G__12475;
i__12470 = G__12476;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12467);if(temp__4092__auto__)
{var seq__12467__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12467__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12467__$1);{
var G__12477 = cljs.core.chunk_rest.call(null,seq__12467__$1);
var G__12478 = c__4148__auto__;
var G__12479 = cljs.core.count.call(null,c__4148__auto__);
var G__12480 = 0;
seq__12467 = G__12477;
chunk__12468 = G__12478;
count__12469 = G__12479;
i__12470 = G__12480;
continue;
}
} else
{var vec__12472 = cljs.core.first.call(null,seq__12467__$1);var v = cljs.core.nth.call(null,vec__12472,0,null);var _ = cljs.core.nth.call(null,vec__12472,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12467,chunk__12468,count__12469,i__12470,vec__12472,v,_,seq__12467__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12467,chunk__12468,count__12469,i__12470,vec__12472,v,_,seq__12467__$1,temp__4092__auto__))
);
{
var G__12481 = cljs.core.next.call(null,seq__12467__$1);
var G__12482 = null;
var G__12483 = 0;
var G__12484 = 0;
seq__12467 = G__12481;
chunk__12468 = G__12482;
count__12469 = G__12483;
i__12470 = G__12484;
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