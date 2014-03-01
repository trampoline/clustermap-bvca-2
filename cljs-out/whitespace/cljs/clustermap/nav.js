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
var seq__34541_34547 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__34542_34548 = null;var count__34543_34549 = 0;var i__34544_34550 = 0;while(true){
if((i__34544_34550 < count__34543_34549))
{var vec__34545_34551 = cljs.core._nth.call(null,chunk__34542_34548,i__34544_34550);var v_34552 = cljs.core.nth.call(null,vec__34545_34551,0,null);var body_class_34553 = cljs.core.nth.call(null,vec__34545_34551,1,null);if(cljs.core._EQ_.call(null,v_34552,view))
{domina.add_class_BANG_.call(null,body,body_class_34553);
} else
{domina.remove_class_BANG_.call(null,body,body_class_34553);
}
{
var G__34554 = seq__34541_34547;
var G__34555 = chunk__34542_34548;
var G__34556 = count__34543_34549;
var G__34557 = (i__34544_34550 + 1);
seq__34541_34547 = G__34554;
chunk__34542_34548 = G__34555;
count__34543_34549 = G__34556;
i__34544_34550 = G__34557;
continue;
}
} else
{var temp__4092__auto___34558 = cljs.core.seq.call(null,seq__34541_34547);if(temp__4092__auto___34558)
{var seq__34541_34559__$1 = temp__4092__auto___34558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34541_34559__$1))
{var c__4148__auto___34560 = cljs.core.chunk_first.call(null,seq__34541_34559__$1);{
var G__34561 = cljs.core.chunk_rest.call(null,seq__34541_34559__$1);
var G__34562 = c__4148__auto___34560;
var G__34563 = cljs.core.count.call(null,c__4148__auto___34560);
var G__34564 = 0;
seq__34541_34547 = G__34561;
chunk__34542_34548 = G__34562;
count__34543_34549 = G__34563;
i__34544_34550 = G__34564;
continue;
}
} else
{var vec__34546_34565 = cljs.core.first.call(null,seq__34541_34559__$1);var v_34566 = cljs.core.nth.call(null,vec__34546_34565,0,null);var body_class_34567 = cljs.core.nth.call(null,vec__34546_34565,1,null);if(cljs.core._EQ_.call(null,v_34566,view))
{domina.add_class_BANG_.call(null,body,body_class_34567);
} else
{domina.remove_class_BANG_.call(null,body,body_class_34567);
}
{
var G__34568 = cljs.core.next.call(null,seq__34541_34559__$1);
var G__34569 = null;
var G__34570 = 0;
var G__34571 = 0;
seq__34541_34547 = G__34568;
chunk__34542_34548 = G__34569;
count__34543_34549 = G__34570;
i__34544_34550 = G__34571;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__34578 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__34579 = null;var count__34580 = 0;var i__34581 = 0;while(true){
if((i__34581 < count__34580))
{var vec__34582 = cljs.core._nth.call(null,chunk__34579,i__34581);var v = cljs.core.nth.call(null,vec__34582,0,null);var _ = cljs.core.nth.call(null,vec__34582,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__34578,chunk__34579,count__34580,i__34581,vec__34582,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__34578,chunk__34579,count__34580,i__34581,vec__34582,v,_))
);
{
var G__34584 = seq__34578;
var G__34585 = chunk__34579;
var G__34586 = count__34580;
var G__34587 = (i__34581 + 1);
seq__34578 = G__34584;
chunk__34579 = G__34585;
count__34580 = G__34586;
i__34581 = G__34587;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34578);if(temp__4092__auto__)
{var seq__34578__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34578__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34578__$1);{
var G__34588 = cljs.core.chunk_rest.call(null,seq__34578__$1);
var G__34589 = c__4148__auto__;
var G__34590 = cljs.core.count.call(null,c__4148__auto__);
var G__34591 = 0;
seq__34578 = G__34588;
chunk__34579 = G__34589;
count__34580 = G__34590;
i__34581 = G__34591;
continue;
}
} else
{var vec__34583 = cljs.core.first.call(null,seq__34578__$1);var v = cljs.core.nth.call(null,vec__34583,0,null);var _ = cljs.core.nth.call(null,vec__34583,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__34578,chunk__34579,count__34580,i__34581,vec__34583,v,_,seq__34578__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__34578,chunk__34579,count__34580,i__34581,vec__34583,v,_,seq__34578__$1,temp__4092__auto__))
);
{
var G__34592 = cljs.core.next.call(null,seq__34578__$1);
var G__34593 = null;
var G__34594 = 0;
var G__34595 = 0;
seq__34578 = G__34592;
chunk__34579 = G__34593;
count__34580 = G__34594;
i__34581 = G__34595;
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
