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
var seq__12569_12575 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12570_12576 = null;var count__12571_12577 = 0;var i__12572_12578 = 0;while(true){
if((i__12572_12578 < count__12571_12577))
{var vec__12573_12579 = cljs.core._nth.call(null,chunk__12570_12576,i__12572_12578);var v_12580 = cljs.core.nth.call(null,vec__12573_12579,0,null);var body_class_12581 = cljs.core.nth.call(null,vec__12573_12579,1,null);if(cljs.core._EQ_.call(null,v_12580,view))
{domina.add_class_BANG_.call(null,body,body_class_12581);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12581);
}
{
var G__12582 = seq__12569_12575;
var G__12583 = chunk__12570_12576;
var G__12584 = count__12571_12577;
var G__12585 = (i__12572_12578 + 1);
seq__12569_12575 = G__12582;
chunk__12570_12576 = G__12583;
count__12571_12577 = G__12584;
i__12572_12578 = G__12585;
continue;
}
} else
{var temp__4092__auto___12586 = cljs.core.seq.call(null,seq__12569_12575);if(temp__4092__auto___12586)
{var seq__12569_12587__$1 = temp__4092__auto___12586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12569_12587__$1))
{var c__4148__auto___12588 = cljs.core.chunk_first.call(null,seq__12569_12587__$1);{
var G__12589 = cljs.core.chunk_rest.call(null,seq__12569_12587__$1);
var G__12590 = c__4148__auto___12588;
var G__12591 = cljs.core.count.call(null,c__4148__auto___12588);
var G__12592 = 0;
seq__12569_12575 = G__12589;
chunk__12570_12576 = G__12590;
count__12571_12577 = G__12591;
i__12572_12578 = G__12592;
continue;
}
} else
{var vec__12574_12593 = cljs.core.first.call(null,seq__12569_12587__$1);var v_12594 = cljs.core.nth.call(null,vec__12574_12593,0,null);var body_class_12595 = cljs.core.nth.call(null,vec__12574_12593,1,null);if(cljs.core._EQ_.call(null,v_12594,view))
{domina.add_class_BANG_.call(null,body,body_class_12595);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12595);
}
{
var G__12596 = cljs.core.next.call(null,seq__12569_12587__$1);
var G__12597 = null;
var G__12598 = 0;
var G__12599 = 0;
seq__12569_12575 = G__12596;
chunk__12570_12576 = G__12597;
count__12571_12577 = G__12598;
i__12572_12578 = G__12599;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12606 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12607 = null;var count__12608 = 0;var i__12609 = 0;while(true){
if((i__12609 < count__12608))
{var vec__12610 = cljs.core._nth.call(null,chunk__12607,i__12609);var v = cljs.core.nth.call(null,vec__12610,0,null);var _ = cljs.core.nth.call(null,vec__12610,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12606,chunk__12607,count__12608,i__12609,vec__12610,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12606,chunk__12607,count__12608,i__12609,vec__12610,v,_))
);
{
var G__12612 = seq__12606;
var G__12613 = chunk__12607;
var G__12614 = count__12608;
var G__12615 = (i__12609 + 1);
seq__12606 = G__12612;
chunk__12607 = G__12613;
count__12608 = G__12614;
i__12609 = G__12615;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12606);if(temp__4092__auto__)
{var seq__12606__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12606__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12606__$1);{
var G__12616 = cljs.core.chunk_rest.call(null,seq__12606__$1);
var G__12617 = c__4148__auto__;
var G__12618 = cljs.core.count.call(null,c__4148__auto__);
var G__12619 = 0;
seq__12606 = G__12616;
chunk__12607 = G__12617;
count__12608 = G__12618;
i__12609 = G__12619;
continue;
}
} else
{var vec__12611 = cljs.core.first.call(null,seq__12606__$1);var v = cljs.core.nth.call(null,vec__12611,0,null);var _ = cljs.core.nth.call(null,vec__12611,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12606,chunk__12607,count__12608,i__12609,vec__12611,v,_,seq__12606__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12606,chunk__12607,count__12608,i__12609,vec__12611,v,_,seq__12606__$1,temp__4092__auto__))
);
{
var G__12620 = cljs.core.next.call(null,seq__12606__$1);
var G__12621 = null;
var G__12622 = 0;
var G__12623 = 0;
seq__12606 = G__12620;
chunk__12607 = G__12621;
count__12608 = G__12622;
i__12609 = G__12623;
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