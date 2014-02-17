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
var seq__12466_12472 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12467_12473 = null;var count__12468_12474 = 0;var i__12469_12475 = 0;while(true){
if((i__12469_12475 < count__12468_12474))
{var vec__12470_12476 = cljs.core._nth.call(null,chunk__12467_12473,i__12469_12475);var v_12477 = cljs.core.nth.call(null,vec__12470_12476,0,null);var body_class_12478 = cljs.core.nth.call(null,vec__12470_12476,1,null);if(cljs.core._EQ_.call(null,v_12477,view))
{domina.add_class_BANG_.call(null,body,body_class_12478);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12478);
}
{
var G__12479 = seq__12466_12472;
var G__12480 = chunk__12467_12473;
var G__12481 = count__12468_12474;
var G__12482 = (i__12469_12475 + 1);
seq__12466_12472 = G__12479;
chunk__12467_12473 = G__12480;
count__12468_12474 = G__12481;
i__12469_12475 = G__12482;
continue;
}
} else
{var temp__4092__auto___12483 = cljs.core.seq.call(null,seq__12466_12472);if(temp__4092__auto___12483)
{var seq__12466_12484__$1 = temp__4092__auto___12483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12466_12484__$1))
{var c__4148__auto___12485 = cljs.core.chunk_first.call(null,seq__12466_12484__$1);{
var G__12486 = cljs.core.chunk_rest.call(null,seq__12466_12484__$1);
var G__12487 = c__4148__auto___12485;
var G__12488 = cljs.core.count.call(null,c__4148__auto___12485);
var G__12489 = 0;
seq__12466_12472 = G__12486;
chunk__12467_12473 = G__12487;
count__12468_12474 = G__12488;
i__12469_12475 = G__12489;
continue;
}
} else
{var vec__12471_12490 = cljs.core.first.call(null,seq__12466_12484__$1);var v_12491 = cljs.core.nth.call(null,vec__12471_12490,0,null);var body_class_12492 = cljs.core.nth.call(null,vec__12471_12490,1,null);if(cljs.core._EQ_.call(null,v_12491,view))
{domina.add_class_BANG_.call(null,body,body_class_12492);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12492);
}
{
var G__12493 = cljs.core.next.call(null,seq__12466_12484__$1);
var G__12494 = null;
var G__12495 = 0;
var G__12496 = 0;
seq__12466_12472 = G__12493;
chunk__12467_12473 = G__12494;
count__12468_12474 = G__12495;
i__12469_12475 = G__12496;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12503 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12504 = null;var count__12505 = 0;var i__12506 = 0;while(true){
if((i__12506 < count__12505))
{var vec__12507 = cljs.core._nth.call(null,chunk__12504,i__12506);var v = cljs.core.nth.call(null,vec__12507,0,null);var _ = cljs.core.nth.call(null,vec__12507,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12503,chunk__12504,count__12505,i__12506,vec__12507,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12503,chunk__12504,count__12505,i__12506,vec__12507,v,_))
);
{
var G__12509 = seq__12503;
var G__12510 = chunk__12504;
var G__12511 = count__12505;
var G__12512 = (i__12506 + 1);
seq__12503 = G__12509;
chunk__12504 = G__12510;
count__12505 = G__12511;
i__12506 = G__12512;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12503);if(temp__4092__auto__)
{var seq__12503__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12503__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12503__$1);{
var G__12513 = cljs.core.chunk_rest.call(null,seq__12503__$1);
var G__12514 = c__4148__auto__;
var G__12515 = cljs.core.count.call(null,c__4148__auto__);
var G__12516 = 0;
seq__12503 = G__12513;
chunk__12504 = G__12514;
count__12505 = G__12515;
i__12506 = G__12516;
continue;
}
} else
{var vec__12508 = cljs.core.first.call(null,seq__12503__$1);var v = cljs.core.nth.call(null,vec__12508,0,null);var _ = cljs.core.nth.call(null,vec__12508,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12503,chunk__12504,count__12505,i__12506,vec__12508,v,_,seq__12503__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12503,chunk__12504,count__12505,i__12506,vec__12508,v,_,seq__12503__$1,temp__4092__auto__))
);
{
var G__12517 = cljs.core.next.call(null,seq__12503__$1);
var G__12518 = null;
var G__12519 = 0;
var G__12520 = 0;
seq__12503 = G__12517;
chunk__12504 = G__12518;
count__12505 = G__12519;
i__12506 = G__12520;
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