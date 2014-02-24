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
var seq__12561_12567 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12562_12568 = null;var count__12563_12569 = 0;var i__12564_12570 = 0;while(true){
if((i__12564_12570 < count__12563_12569))
{var vec__12565_12571 = cljs.core._nth.call(null,chunk__12562_12568,i__12564_12570);var v_12572 = cljs.core.nth.call(null,vec__12565_12571,0,null);var body_class_12573 = cljs.core.nth.call(null,vec__12565_12571,1,null);if(cljs.core._EQ_.call(null,v_12572,view))
{domina.add_class_BANG_.call(null,body,body_class_12573);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12573);
}
{
var G__12574 = seq__12561_12567;
var G__12575 = chunk__12562_12568;
var G__12576 = count__12563_12569;
var G__12577 = (i__12564_12570 + 1);
seq__12561_12567 = G__12574;
chunk__12562_12568 = G__12575;
count__12563_12569 = G__12576;
i__12564_12570 = G__12577;
continue;
}
} else
{var temp__4092__auto___12578 = cljs.core.seq.call(null,seq__12561_12567);if(temp__4092__auto___12578)
{var seq__12561_12579__$1 = temp__4092__auto___12578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12561_12579__$1))
{var c__4148__auto___12580 = cljs.core.chunk_first.call(null,seq__12561_12579__$1);{
var G__12581 = cljs.core.chunk_rest.call(null,seq__12561_12579__$1);
var G__12582 = c__4148__auto___12580;
var G__12583 = cljs.core.count.call(null,c__4148__auto___12580);
var G__12584 = 0;
seq__12561_12567 = G__12581;
chunk__12562_12568 = G__12582;
count__12563_12569 = G__12583;
i__12564_12570 = G__12584;
continue;
}
} else
{var vec__12566_12585 = cljs.core.first.call(null,seq__12561_12579__$1);var v_12586 = cljs.core.nth.call(null,vec__12566_12585,0,null);var body_class_12587 = cljs.core.nth.call(null,vec__12566_12585,1,null);if(cljs.core._EQ_.call(null,v_12586,view))
{domina.add_class_BANG_.call(null,body,body_class_12587);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12587);
}
{
var G__12588 = cljs.core.next.call(null,seq__12561_12579__$1);
var G__12589 = null;
var G__12590 = 0;
var G__12591 = 0;
seq__12561_12567 = G__12588;
chunk__12562_12568 = G__12589;
count__12563_12569 = G__12590;
i__12564_12570 = G__12591;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12598 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12599 = null;var count__12600 = 0;var i__12601 = 0;while(true){
if((i__12601 < count__12600))
{var vec__12602 = cljs.core._nth.call(null,chunk__12599,i__12601);var v = cljs.core.nth.call(null,vec__12602,0,null);var _ = cljs.core.nth.call(null,vec__12602,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12598,chunk__12599,count__12600,i__12601,vec__12602,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12598,chunk__12599,count__12600,i__12601,vec__12602,v,_))
);
{
var G__12604 = seq__12598;
var G__12605 = chunk__12599;
var G__12606 = count__12600;
var G__12607 = (i__12601 + 1);
seq__12598 = G__12604;
chunk__12599 = G__12605;
count__12600 = G__12606;
i__12601 = G__12607;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12598);if(temp__4092__auto__)
{var seq__12598__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12598__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12598__$1);{
var G__12608 = cljs.core.chunk_rest.call(null,seq__12598__$1);
var G__12609 = c__4148__auto__;
var G__12610 = cljs.core.count.call(null,c__4148__auto__);
var G__12611 = 0;
seq__12598 = G__12608;
chunk__12599 = G__12609;
count__12600 = G__12610;
i__12601 = G__12611;
continue;
}
} else
{var vec__12603 = cljs.core.first.call(null,seq__12598__$1);var v = cljs.core.nth.call(null,vec__12603,0,null);var _ = cljs.core.nth.call(null,vec__12603,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12598,chunk__12599,count__12600,i__12601,vec__12603,v,_,seq__12598__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12598,chunk__12599,count__12600,i__12601,vec__12603,v,_,seq__12598__$1,temp__4092__auto__))
);
{
var G__12612 = cljs.core.next.call(null,seq__12598__$1);
var G__12613 = null;
var G__12614 = 0;
var G__12615 = 0;
seq__12598 = G__12612;
chunk__12599 = G__12613;
count__12600 = G__12614;
i__12601 = G__12615;
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