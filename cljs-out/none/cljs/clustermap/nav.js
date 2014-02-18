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
var seq__12540_12546 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12541_12547 = null;var count__12542_12548 = 0;var i__12543_12549 = 0;while(true){
if((i__12543_12549 < count__12542_12548))
{var vec__12544_12550 = cljs.core._nth.call(null,chunk__12541_12547,i__12543_12549);var v_12551 = cljs.core.nth.call(null,vec__12544_12550,0,null);var body_class_12552 = cljs.core.nth.call(null,vec__12544_12550,1,null);if(cljs.core._EQ_.call(null,v_12551,view))
{domina.add_class_BANG_.call(null,body,body_class_12552);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12552);
}
{
var G__12553 = seq__12540_12546;
var G__12554 = chunk__12541_12547;
var G__12555 = count__12542_12548;
var G__12556 = (i__12543_12549 + 1);
seq__12540_12546 = G__12553;
chunk__12541_12547 = G__12554;
count__12542_12548 = G__12555;
i__12543_12549 = G__12556;
continue;
}
} else
{var temp__4092__auto___12557 = cljs.core.seq.call(null,seq__12540_12546);if(temp__4092__auto___12557)
{var seq__12540_12558__$1 = temp__4092__auto___12557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12540_12558__$1))
{var c__4148__auto___12559 = cljs.core.chunk_first.call(null,seq__12540_12558__$1);{
var G__12560 = cljs.core.chunk_rest.call(null,seq__12540_12558__$1);
var G__12561 = c__4148__auto___12559;
var G__12562 = cljs.core.count.call(null,c__4148__auto___12559);
var G__12563 = 0;
seq__12540_12546 = G__12560;
chunk__12541_12547 = G__12561;
count__12542_12548 = G__12562;
i__12543_12549 = G__12563;
continue;
}
} else
{var vec__12545_12564 = cljs.core.first.call(null,seq__12540_12558__$1);var v_12565 = cljs.core.nth.call(null,vec__12545_12564,0,null);var body_class_12566 = cljs.core.nth.call(null,vec__12545_12564,1,null);if(cljs.core._EQ_.call(null,v_12565,view))
{domina.add_class_BANG_.call(null,body,body_class_12566);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12566);
}
{
var G__12567 = cljs.core.next.call(null,seq__12540_12558__$1);
var G__12568 = null;
var G__12569 = 0;
var G__12570 = 0;
seq__12540_12546 = G__12567;
chunk__12541_12547 = G__12568;
count__12542_12548 = G__12569;
i__12543_12549 = G__12570;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12577 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12578 = null;var count__12579 = 0;var i__12580 = 0;while(true){
if((i__12580 < count__12579))
{var vec__12581 = cljs.core._nth.call(null,chunk__12578,i__12580);var v = cljs.core.nth.call(null,vec__12581,0,null);var _ = cljs.core.nth.call(null,vec__12581,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12577,chunk__12578,count__12579,i__12580,vec__12581,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12577,chunk__12578,count__12579,i__12580,vec__12581,v,_))
);
{
var G__12583 = seq__12577;
var G__12584 = chunk__12578;
var G__12585 = count__12579;
var G__12586 = (i__12580 + 1);
seq__12577 = G__12583;
chunk__12578 = G__12584;
count__12579 = G__12585;
i__12580 = G__12586;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12577);if(temp__4092__auto__)
{var seq__12577__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12577__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12577__$1);{
var G__12587 = cljs.core.chunk_rest.call(null,seq__12577__$1);
var G__12588 = c__4148__auto__;
var G__12589 = cljs.core.count.call(null,c__4148__auto__);
var G__12590 = 0;
seq__12577 = G__12587;
chunk__12578 = G__12588;
count__12579 = G__12589;
i__12580 = G__12590;
continue;
}
} else
{var vec__12582 = cljs.core.first.call(null,seq__12577__$1);var v = cljs.core.nth.call(null,vec__12582,0,null);var _ = cljs.core.nth.call(null,vec__12582,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12577,chunk__12578,count__12579,i__12580,vec__12582,v,_,seq__12577__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12577,chunk__12578,count__12579,i__12580,vec__12582,v,_,seq__12577__$1,temp__4092__auto__))
);
{
var G__12591 = cljs.core.next.call(null,seq__12577__$1);
var G__12592 = null;
var G__12593 = 0;
var G__12594 = 0;
seq__12577 = G__12591;
chunk__12578 = G__12592;
count__12579 = G__12593;
i__12580 = G__12594;
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