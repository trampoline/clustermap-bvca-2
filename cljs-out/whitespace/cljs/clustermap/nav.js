// Compiled by ClojureScript 0.0-2173
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
var seq__45544_45550 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45545_45551 = null;var count__45546_45552 = 0;var i__45547_45553 = 0;while(true){
if((i__45547_45553 < count__45546_45552))
{var vec__45548_45554 = cljs.core._nth.call(null,chunk__45545_45551,i__45547_45553);var v_45555 = cljs.core.nth.call(null,vec__45548_45554,0,null);var body_class_45556 = cljs.core.nth.call(null,vec__45548_45554,1,null);if(cljs.core._EQ_.call(null,v_45555,view))
{domina.add_class_BANG_.call(null,body,body_class_45556);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45556);
}
{
var G__45557 = seq__45544_45550;
var G__45558 = chunk__45545_45551;
var G__45559 = count__45546_45552;
var G__45560 = (i__45547_45553 + 1);
seq__45544_45550 = G__45557;
chunk__45545_45551 = G__45558;
count__45546_45552 = G__45559;
i__45547_45553 = G__45560;
continue;
}
} else
{var temp__4092__auto___45561 = cljs.core.seq.call(null,seq__45544_45550);if(temp__4092__auto___45561)
{var seq__45544_45562__$1 = temp__4092__auto___45561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45544_45562__$1))
{var c__4189__auto___45563 = cljs.core.chunk_first.call(null,seq__45544_45562__$1);{
var G__45564 = cljs.core.chunk_rest.call(null,seq__45544_45562__$1);
var G__45565 = c__4189__auto___45563;
var G__45566 = cljs.core.count.call(null,c__4189__auto___45563);
var G__45567 = 0;
seq__45544_45550 = G__45564;
chunk__45545_45551 = G__45565;
count__45546_45552 = G__45566;
i__45547_45553 = G__45567;
continue;
}
} else
{var vec__45549_45568 = cljs.core.first.call(null,seq__45544_45562__$1);var v_45569 = cljs.core.nth.call(null,vec__45549_45568,0,null);var body_class_45570 = cljs.core.nth.call(null,vec__45549_45568,1,null);if(cljs.core._EQ_.call(null,v_45569,view))
{domina.add_class_BANG_.call(null,body,body_class_45570);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45570);
}
{
var G__45571 = cljs.core.next.call(null,seq__45544_45562__$1);
var G__45572 = null;
var G__45573 = 0;
var G__45574 = 0;
seq__45544_45550 = G__45571;
chunk__45545_45551 = G__45572;
count__45546_45552 = G__45573;
i__45547_45553 = G__45574;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__45581 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45582 = null;var count__45583 = 0;var i__45584 = 0;while(true){
if((i__45584 < count__45583))
{var vec__45585 = cljs.core._nth.call(null,chunk__45582,i__45584);var v = cljs.core.nth.call(null,vec__45585,0,null);var _ = cljs.core.nth.call(null,vec__45585,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45581,chunk__45582,count__45583,i__45584,vec__45585,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45581,chunk__45582,count__45583,i__45584,vec__45585,v,_))
);
{
var G__45587 = seq__45581;
var G__45588 = chunk__45582;
var G__45589 = count__45583;
var G__45590 = (i__45584 + 1);
seq__45581 = G__45587;
chunk__45582 = G__45588;
count__45583 = G__45589;
i__45584 = G__45590;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45581);if(temp__4092__auto__)
{var seq__45581__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45581__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__45581__$1);{
var G__45591 = cljs.core.chunk_rest.call(null,seq__45581__$1);
var G__45592 = c__4189__auto__;
var G__45593 = cljs.core.count.call(null,c__4189__auto__);
var G__45594 = 0;
seq__45581 = G__45591;
chunk__45582 = G__45592;
count__45583 = G__45593;
i__45584 = G__45594;
continue;
}
} else
{var vec__45586 = cljs.core.first.call(null,seq__45581__$1);var v = cljs.core.nth.call(null,vec__45586,0,null);var _ = cljs.core.nth.call(null,vec__45586,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45581,chunk__45582,count__45583,i__45584,vec__45586,v,_,seq__45581__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45581,chunk__45582,count__45583,i__45584,vec__45586,v,_,seq__45581__$1,temp__4092__auto__))
);
{
var G__45595 = cljs.core.next.call(null,seq__45581__$1);
var G__45596 = null;
var G__45597 = 0;
var G__45598 = 0;
seq__45581 = G__45595;
chunk__45582 = G__45596;
count__45583 = G__45597;
i__45584 = G__45598;
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
