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
var seq__12438_12444 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12439_12445 = null;var count__12440_12446 = 0;var i__12441_12447 = 0;while(true){
if((i__12441_12447 < count__12440_12446))
{var vec__12442_12448 = cljs.core._nth.call(null,chunk__12439_12445,i__12441_12447);var v_12449 = cljs.core.nth.call(null,vec__12442_12448,0,null);var body_class_12450 = cljs.core.nth.call(null,vec__12442_12448,1,null);if(cljs.core._EQ_.call(null,v_12449,view))
{domina.add_class_BANG_.call(null,body,body_class_12450);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12450);
}
{
var G__12451 = seq__12438_12444;
var G__12452 = chunk__12439_12445;
var G__12453 = count__12440_12446;
var G__12454 = (i__12441_12447 + 1);
seq__12438_12444 = G__12451;
chunk__12439_12445 = G__12452;
count__12440_12446 = G__12453;
i__12441_12447 = G__12454;
continue;
}
} else
{var temp__4092__auto___12455 = cljs.core.seq.call(null,seq__12438_12444);if(temp__4092__auto___12455)
{var seq__12438_12456__$1 = temp__4092__auto___12455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12438_12456__$1))
{var c__4148__auto___12457 = cljs.core.chunk_first.call(null,seq__12438_12456__$1);{
var G__12458 = cljs.core.chunk_rest.call(null,seq__12438_12456__$1);
var G__12459 = c__4148__auto___12457;
var G__12460 = cljs.core.count.call(null,c__4148__auto___12457);
var G__12461 = 0;
seq__12438_12444 = G__12458;
chunk__12439_12445 = G__12459;
count__12440_12446 = G__12460;
i__12441_12447 = G__12461;
continue;
}
} else
{var vec__12443_12462 = cljs.core.first.call(null,seq__12438_12456__$1);var v_12463 = cljs.core.nth.call(null,vec__12443_12462,0,null);var body_class_12464 = cljs.core.nth.call(null,vec__12443_12462,1,null);if(cljs.core._EQ_.call(null,v_12463,view))
{domina.add_class_BANG_.call(null,body,body_class_12464);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12464);
}
{
var G__12465 = cljs.core.next.call(null,seq__12438_12456__$1);
var G__12466 = null;
var G__12467 = 0;
var G__12468 = 0;
seq__12438_12444 = G__12465;
chunk__12439_12445 = G__12466;
count__12440_12446 = G__12467;
i__12441_12447 = G__12468;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12475 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12476 = null;var count__12477 = 0;var i__12478 = 0;while(true){
if((i__12478 < count__12477))
{var vec__12479 = cljs.core._nth.call(null,chunk__12476,i__12478);var v = cljs.core.nth.call(null,vec__12479,0,null);var _ = cljs.core.nth.call(null,vec__12479,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12475,chunk__12476,count__12477,i__12478,vec__12479,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12475,chunk__12476,count__12477,i__12478,vec__12479,v,_))
);
{
var G__12481 = seq__12475;
var G__12482 = chunk__12476;
var G__12483 = count__12477;
var G__12484 = (i__12478 + 1);
seq__12475 = G__12481;
chunk__12476 = G__12482;
count__12477 = G__12483;
i__12478 = G__12484;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12475);if(temp__4092__auto__)
{var seq__12475__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12475__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12475__$1);{
var G__12485 = cljs.core.chunk_rest.call(null,seq__12475__$1);
var G__12486 = c__4148__auto__;
var G__12487 = cljs.core.count.call(null,c__4148__auto__);
var G__12488 = 0;
seq__12475 = G__12485;
chunk__12476 = G__12486;
count__12477 = G__12487;
i__12478 = G__12488;
continue;
}
} else
{var vec__12480 = cljs.core.first.call(null,seq__12475__$1);var v = cljs.core.nth.call(null,vec__12480,0,null);var _ = cljs.core.nth.call(null,vec__12480,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12475,chunk__12476,count__12477,i__12478,vec__12480,v,_,seq__12475__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12475,chunk__12476,count__12477,i__12478,vec__12480,v,_,seq__12475__$1,temp__4092__auto__))
);
{
var G__12489 = cljs.core.next.call(null,seq__12475__$1);
var G__12490 = null;
var G__12491 = 0;
var G__12492 = 0;
seq__12475 = G__12489;
chunk__12476 = G__12490;
count__12477 = G__12491;
i__12478 = G__12492;
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