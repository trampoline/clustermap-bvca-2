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
var seq__32654_32660 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32655_32661 = null;var count__32656_32662 = 0;var i__32657_32663 = 0;while(true){
if((i__32657_32663 < count__32656_32662))
{var vec__32658_32664 = cljs.core._nth.call(null,chunk__32655_32661,i__32657_32663);var v_32665 = cljs.core.nth.call(null,vec__32658_32664,0,null);var body_class_32666 = cljs.core.nth.call(null,vec__32658_32664,1,null);if(cljs.core._EQ_.call(null,v_32665,view))
{domina.add_class_BANG_.call(null,body,body_class_32666);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32666);
}
{
var G__32667 = seq__32654_32660;
var G__32668 = chunk__32655_32661;
var G__32669 = count__32656_32662;
var G__32670 = (i__32657_32663 + 1);
seq__32654_32660 = G__32667;
chunk__32655_32661 = G__32668;
count__32656_32662 = G__32669;
i__32657_32663 = G__32670;
continue;
}
} else
{var temp__4092__auto___32671 = cljs.core.seq.call(null,seq__32654_32660);if(temp__4092__auto___32671)
{var seq__32654_32672__$1 = temp__4092__auto___32671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32654_32672__$1))
{var c__4148__auto___32673 = cljs.core.chunk_first.call(null,seq__32654_32672__$1);{
var G__32674 = cljs.core.chunk_rest.call(null,seq__32654_32672__$1);
var G__32675 = c__4148__auto___32673;
var G__32676 = cljs.core.count.call(null,c__4148__auto___32673);
var G__32677 = 0;
seq__32654_32660 = G__32674;
chunk__32655_32661 = G__32675;
count__32656_32662 = G__32676;
i__32657_32663 = G__32677;
continue;
}
} else
{var vec__32659_32678 = cljs.core.first.call(null,seq__32654_32672__$1);var v_32679 = cljs.core.nth.call(null,vec__32659_32678,0,null);var body_class_32680 = cljs.core.nth.call(null,vec__32659_32678,1,null);if(cljs.core._EQ_.call(null,v_32679,view))
{domina.add_class_BANG_.call(null,body,body_class_32680);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32680);
}
{
var G__32681 = cljs.core.next.call(null,seq__32654_32672__$1);
var G__32682 = null;
var G__32683 = 0;
var G__32684 = 0;
seq__32654_32660 = G__32681;
chunk__32655_32661 = G__32682;
count__32656_32662 = G__32683;
i__32657_32663 = G__32684;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32691 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32692 = null;var count__32693 = 0;var i__32694 = 0;while(true){
if((i__32694 < count__32693))
{var vec__32695 = cljs.core._nth.call(null,chunk__32692,i__32694);var v = cljs.core.nth.call(null,vec__32695,0,null);var _ = cljs.core.nth.call(null,vec__32695,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32691,chunk__32692,count__32693,i__32694,vec__32695,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32691,chunk__32692,count__32693,i__32694,vec__32695,v,_))
);
{
var G__32697 = seq__32691;
var G__32698 = chunk__32692;
var G__32699 = count__32693;
var G__32700 = (i__32694 + 1);
seq__32691 = G__32697;
chunk__32692 = G__32698;
count__32693 = G__32699;
i__32694 = G__32700;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32691);if(temp__4092__auto__)
{var seq__32691__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32691__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32691__$1);{
var G__32701 = cljs.core.chunk_rest.call(null,seq__32691__$1);
var G__32702 = c__4148__auto__;
var G__32703 = cljs.core.count.call(null,c__4148__auto__);
var G__32704 = 0;
seq__32691 = G__32701;
chunk__32692 = G__32702;
count__32693 = G__32703;
i__32694 = G__32704;
continue;
}
} else
{var vec__32696 = cljs.core.first.call(null,seq__32691__$1);var v = cljs.core.nth.call(null,vec__32696,0,null);var _ = cljs.core.nth.call(null,vec__32696,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32691,chunk__32692,count__32693,i__32694,vec__32696,v,_,seq__32691__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32691,chunk__32692,count__32693,i__32694,vec__32696,v,_,seq__32691__$1,temp__4092__auto__))
);
{
var G__32705 = cljs.core.next.call(null,seq__32691__$1);
var G__32706 = null;
var G__32707 = 0;
var G__32708 = 0;
seq__32691 = G__32705;
chunk__32692 = G__32706;
count__32693 = G__32707;
i__32694 = G__32708;
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
