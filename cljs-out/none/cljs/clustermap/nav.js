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
var seq__12555_12561 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12556_12562 = null;var count__12557_12563 = 0;var i__12558_12564 = 0;while(true){
if((i__12558_12564 < count__12557_12563))
{var vec__12559_12565 = cljs.core._nth.call(null,chunk__12556_12562,i__12558_12564);var v_12566 = cljs.core.nth.call(null,vec__12559_12565,0,null);var body_class_12567 = cljs.core.nth.call(null,vec__12559_12565,1,null);if(cljs.core._EQ_.call(null,v_12566,view))
{domina.add_class_BANG_.call(null,body,body_class_12567);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12567);
}
{
var G__12568 = seq__12555_12561;
var G__12569 = chunk__12556_12562;
var G__12570 = count__12557_12563;
var G__12571 = (i__12558_12564 + 1);
seq__12555_12561 = G__12568;
chunk__12556_12562 = G__12569;
count__12557_12563 = G__12570;
i__12558_12564 = G__12571;
continue;
}
} else
{var temp__4092__auto___12572 = cljs.core.seq.call(null,seq__12555_12561);if(temp__4092__auto___12572)
{var seq__12555_12573__$1 = temp__4092__auto___12572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12555_12573__$1))
{var c__4148__auto___12574 = cljs.core.chunk_first.call(null,seq__12555_12573__$1);{
var G__12575 = cljs.core.chunk_rest.call(null,seq__12555_12573__$1);
var G__12576 = c__4148__auto___12574;
var G__12577 = cljs.core.count.call(null,c__4148__auto___12574);
var G__12578 = 0;
seq__12555_12561 = G__12575;
chunk__12556_12562 = G__12576;
count__12557_12563 = G__12577;
i__12558_12564 = G__12578;
continue;
}
} else
{var vec__12560_12579 = cljs.core.first.call(null,seq__12555_12573__$1);var v_12580 = cljs.core.nth.call(null,vec__12560_12579,0,null);var body_class_12581 = cljs.core.nth.call(null,vec__12560_12579,1,null);if(cljs.core._EQ_.call(null,v_12580,view))
{domina.add_class_BANG_.call(null,body,body_class_12581);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12581);
}
{
var G__12582 = cljs.core.next.call(null,seq__12555_12573__$1);
var G__12583 = null;
var G__12584 = 0;
var G__12585 = 0;
seq__12555_12561 = G__12582;
chunk__12556_12562 = G__12583;
count__12557_12563 = G__12584;
i__12558_12564 = G__12585;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12592 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12593 = null;var count__12594 = 0;var i__12595 = 0;while(true){
if((i__12595 < count__12594))
{var vec__12596 = cljs.core._nth.call(null,chunk__12593,i__12595);var v = cljs.core.nth.call(null,vec__12596,0,null);var _ = cljs.core.nth.call(null,vec__12596,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12592,chunk__12593,count__12594,i__12595,vec__12596,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12592,chunk__12593,count__12594,i__12595,vec__12596,v,_))
);
{
var G__12598 = seq__12592;
var G__12599 = chunk__12593;
var G__12600 = count__12594;
var G__12601 = (i__12595 + 1);
seq__12592 = G__12598;
chunk__12593 = G__12599;
count__12594 = G__12600;
i__12595 = G__12601;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12592);if(temp__4092__auto__)
{var seq__12592__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12592__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12592__$1);{
var G__12602 = cljs.core.chunk_rest.call(null,seq__12592__$1);
var G__12603 = c__4148__auto__;
var G__12604 = cljs.core.count.call(null,c__4148__auto__);
var G__12605 = 0;
seq__12592 = G__12602;
chunk__12593 = G__12603;
count__12594 = G__12604;
i__12595 = G__12605;
continue;
}
} else
{var vec__12597 = cljs.core.first.call(null,seq__12592__$1);var v = cljs.core.nth.call(null,vec__12597,0,null);var _ = cljs.core.nth.call(null,vec__12597,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12592,chunk__12593,count__12594,i__12595,vec__12597,v,_,seq__12592__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12592,chunk__12593,count__12594,i__12595,vec__12597,v,_,seq__12592__$1,temp__4092__auto__))
);
{
var G__12606 = cljs.core.next.call(null,seq__12592__$1);
var G__12607 = null;
var G__12608 = 0;
var G__12609 = 0;
seq__12592 = G__12606;
chunk__12593 = G__12607;
count__12594 = G__12608;
i__12595 = G__12609;
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