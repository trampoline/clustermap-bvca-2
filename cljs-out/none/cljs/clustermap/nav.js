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
var seq__12585_12591 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12586_12592 = null;var count__12587_12593 = 0;var i__12588_12594 = 0;while(true){
if((i__12588_12594 < count__12587_12593))
{var vec__12589_12595 = cljs.core._nth.call(null,chunk__12586_12592,i__12588_12594);var v_12596 = cljs.core.nth.call(null,vec__12589_12595,0,null);var body_class_12597 = cljs.core.nth.call(null,vec__12589_12595,1,null);if(cljs.core._EQ_.call(null,v_12596,view))
{domina.add_class_BANG_.call(null,body,body_class_12597);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12597);
}
{
var G__12598 = seq__12585_12591;
var G__12599 = chunk__12586_12592;
var G__12600 = count__12587_12593;
var G__12601 = (i__12588_12594 + 1);
seq__12585_12591 = G__12598;
chunk__12586_12592 = G__12599;
count__12587_12593 = G__12600;
i__12588_12594 = G__12601;
continue;
}
} else
{var temp__4092__auto___12602 = cljs.core.seq.call(null,seq__12585_12591);if(temp__4092__auto___12602)
{var seq__12585_12603__$1 = temp__4092__auto___12602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12585_12603__$1))
{var c__4148__auto___12604 = cljs.core.chunk_first.call(null,seq__12585_12603__$1);{
var G__12605 = cljs.core.chunk_rest.call(null,seq__12585_12603__$1);
var G__12606 = c__4148__auto___12604;
var G__12607 = cljs.core.count.call(null,c__4148__auto___12604);
var G__12608 = 0;
seq__12585_12591 = G__12605;
chunk__12586_12592 = G__12606;
count__12587_12593 = G__12607;
i__12588_12594 = G__12608;
continue;
}
} else
{var vec__12590_12609 = cljs.core.first.call(null,seq__12585_12603__$1);var v_12610 = cljs.core.nth.call(null,vec__12590_12609,0,null);var body_class_12611 = cljs.core.nth.call(null,vec__12590_12609,1,null);if(cljs.core._EQ_.call(null,v_12610,view))
{domina.add_class_BANG_.call(null,body,body_class_12611);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12611);
}
{
var G__12612 = cljs.core.next.call(null,seq__12585_12603__$1);
var G__12613 = null;
var G__12614 = 0;
var G__12615 = 0;
seq__12585_12591 = G__12612;
chunk__12586_12592 = G__12613;
count__12587_12593 = G__12614;
i__12588_12594 = G__12615;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12622 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12623 = null;var count__12624 = 0;var i__12625 = 0;while(true){
if((i__12625 < count__12624))
{var vec__12626 = cljs.core._nth.call(null,chunk__12623,i__12625);var v = cljs.core.nth.call(null,vec__12626,0,null);var _ = cljs.core.nth.call(null,vec__12626,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12622,chunk__12623,count__12624,i__12625,vec__12626,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12622,chunk__12623,count__12624,i__12625,vec__12626,v,_))
);
{
var G__12628 = seq__12622;
var G__12629 = chunk__12623;
var G__12630 = count__12624;
var G__12631 = (i__12625 + 1);
seq__12622 = G__12628;
chunk__12623 = G__12629;
count__12624 = G__12630;
i__12625 = G__12631;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12622);if(temp__4092__auto__)
{var seq__12622__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12622__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12622__$1);{
var G__12632 = cljs.core.chunk_rest.call(null,seq__12622__$1);
var G__12633 = c__4148__auto__;
var G__12634 = cljs.core.count.call(null,c__4148__auto__);
var G__12635 = 0;
seq__12622 = G__12632;
chunk__12623 = G__12633;
count__12624 = G__12634;
i__12625 = G__12635;
continue;
}
} else
{var vec__12627 = cljs.core.first.call(null,seq__12622__$1);var v = cljs.core.nth.call(null,vec__12627,0,null);var _ = cljs.core.nth.call(null,vec__12627,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12622,chunk__12623,count__12624,i__12625,vec__12627,v,_,seq__12622__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12622,chunk__12623,count__12624,i__12625,vec__12627,v,_,seq__12622__$1,temp__4092__auto__))
);
{
var G__12636 = cljs.core.next.call(null,seq__12622__$1);
var G__12637 = null;
var G__12638 = 0;
var G__12639 = 0;
seq__12622 = G__12636;
chunk__12623 = G__12637;
count__12624 = G__12638;
i__12625 = G__12639;
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