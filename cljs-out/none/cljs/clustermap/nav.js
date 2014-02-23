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
var seq__12581_12587 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12582_12588 = null;var count__12583_12589 = 0;var i__12584_12590 = 0;while(true){
if((i__12584_12590 < count__12583_12589))
{var vec__12585_12591 = cljs.core._nth.call(null,chunk__12582_12588,i__12584_12590);var v_12592 = cljs.core.nth.call(null,vec__12585_12591,0,null);var body_class_12593 = cljs.core.nth.call(null,vec__12585_12591,1,null);if(cljs.core._EQ_.call(null,v_12592,view))
{domina.add_class_BANG_.call(null,body,body_class_12593);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12593);
}
{
var G__12594 = seq__12581_12587;
var G__12595 = chunk__12582_12588;
var G__12596 = count__12583_12589;
var G__12597 = (i__12584_12590 + 1);
seq__12581_12587 = G__12594;
chunk__12582_12588 = G__12595;
count__12583_12589 = G__12596;
i__12584_12590 = G__12597;
continue;
}
} else
{var temp__4092__auto___12598 = cljs.core.seq.call(null,seq__12581_12587);if(temp__4092__auto___12598)
{var seq__12581_12599__$1 = temp__4092__auto___12598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12581_12599__$1))
{var c__4148__auto___12600 = cljs.core.chunk_first.call(null,seq__12581_12599__$1);{
var G__12601 = cljs.core.chunk_rest.call(null,seq__12581_12599__$1);
var G__12602 = c__4148__auto___12600;
var G__12603 = cljs.core.count.call(null,c__4148__auto___12600);
var G__12604 = 0;
seq__12581_12587 = G__12601;
chunk__12582_12588 = G__12602;
count__12583_12589 = G__12603;
i__12584_12590 = G__12604;
continue;
}
} else
{var vec__12586_12605 = cljs.core.first.call(null,seq__12581_12599__$1);var v_12606 = cljs.core.nth.call(null,vec__12586_12605,0,null);var body_class_12607 = cljs.core.nth.call(null,vec__12586_12605,1,null);if(cljs.core._EQ_.call(null,v_12606,view))
{domina.add_class_BANG_.call(null,body,body_class_12607);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12607);
}
{
var G__12608 = cljs.core.next.call(null,seq__12581_12599__$1);
var G__12609 = null;
var G__12610 = 0;
var G__12611 = 0;
seq__12581_12587 = G__12608;
chunk__12582_12588 = G__12609;
count__12583_12589 = G__12610;
i__12584_12590 = G__12611;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12618 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12619 = null;var count__12620 = 0;var i__12621 = 0;while(true){
if((i__12621 < count__12620))
{var vec__12622 = cljs.core._nth.call(null,chunk__12619,i__12621);var v = cljs.core.nth.call(null,vec__12622,0,null);var _ = cljs.core.nth.call(null,vec__12622,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12618,chunk__12619,count__12620,i__12621,vec__12622,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12618,chunk__12619,count__12620,i__12621,vec__12622,v,_))
);
{
var G__12624 = seq__12618;
var G__12625 = chunk__12619;
var G__12626 = count__12620;
var G__12627 = (i__12621 + 1);
seq__12618 = G__12624;
chunk__12619 = G__12625;
count__12620 = G__12626;
i__12621 = G__12627;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12618);if(temp__4092__auto__)
{var seq__12618__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12618__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12618__$1);{
var G__12628 = cljs.core.chunk_rest.call(null,seq__12618__$1);
var G__12629 = c__4148__auto__;
var G__12630 = cljs.core.count.call(null,c__4148__auto__);
var G__12631 = 0;
seq__12618 = G__12628;
chunk__12619 = G__12629;
count__12620 = G__12630;
i__12621 = G__12631;
continue;
}
} else
{var vec__12623 = cljs.core.first.call(null,seq__12618__$1);var v = cljs.core.nth.call(null,vec__12623,0,null);var _ = cljs.core.nth.call(null,vec__12623,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12618,chunk__12619,count__12620,i__12621,vec__12623,v,_,seq__12618__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12618,chunk__12619,count__12620,i__12621,vec__12623,v,_,seq__12618__$1,temp__4092__auto__))
);
{
var G__12632 = cljs.core.next.call(null,seq__12618__$1);
var G__12633 = null;
var G__12634 = 0;
var G__12635 = 0;
seq__12618 = G__12632;
chunk__12619 = G__12633;
count__12620 = G__12634;
i__12621 = G__12635;
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