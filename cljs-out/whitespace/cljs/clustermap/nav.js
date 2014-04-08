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
var seq__45576_45582 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45577_45583 = null;var count__45578_45584 = 0;var i__45579_45585 = 0;while(true){
if((i__45579_45585 < count__45578_45584))
{var vec__45580_45586 = cljs.core._nth.call(null,chunk__45577_45583,i__45579_45585);var v_45587 = cljs.core.nth.call(null,vec__45580_45586,0,null);var body_class_45588 = cljs.core.nth.call(null,vec__45580_45586,1,null);if(cljs.core._EQ_.call(null,v_45587,view))
{domina.add_class_BANG_.call(null,body,body_class_45588);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45588);
}
{
var G__45589 = seq__45576_45582;
var G__45590 = chunk__45577_45583;
var G__45591 = count__45578_45584;
var G__45592 = (i__45579_45585 + 1);
seq__45576_45582 = G__45589;
chunk__45577_45583 = G__45590;
count__45578_45584 = G__45591;
i__45579_45585 = G__45592;
continue;
}
} else
{var temp__4092__auto___45593 = cljs.core.seq.call(null,seq__45576_45582);if(temp__4092__auto___45593)
{var seq__45576_45594__$1 = temp__4092__auto___45593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45576_45594__$1))
{var c__4189__auto___45595 = cljs.core.chunk_first.call(null,seq__45576_45594__$1);{
var G__45596 = cljs.core.chunk_rest.call(null,seq__45576_45594__$1);
var G__45597 = c__4189__auto___45595;
var G__45598 = cljs.core.count.call(null,c__4189__auto___45595);
var G__45599 = 0;
seq__45576_45582 = G__45596;
chunk__45577_45583 = G__45597;
count__45578_45584 = G__45598;
i__45579_45585 = G__45599;
continue;
}
} else
{var vec__45581_45600 = cljs.core.first.call(null,seq__45576_45594__$1);var v_45601 = cljs.core.nth.call(null,vec__45581_45600,0,null);var body_class_45602 = cljs.core.nth.call(null,vec__45581_45600,1,null);if(cljs.core._EQ_.call(null,v_45601,view))
{domina.add_class_BANG_.call(null,body,body_class_45602);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45602);
}
{
var G__45603 = cljs.core.next.call(null,seq__45576_45594__$1);
var G__45604 = null;
var G__45605 = 0;
var G__45606 = 0;
seq__45576_45582 = G__45603;
chunk__45577_45583 = G__45604;
count__45578_45584 = G__45605;
i__45579_45585 = G__45606;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__45613 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45614 = null;var count__45615 = 0;var i__45616 = 0;while(true){
if((i__45616 < count__45615))
{var vec__45617 = cljs.core._nth.call(null,chunk__45614,i__45616);var v = cljs.core.nth.call(null,vec__45617,0,null);var _ = cljs.core.nth.call(null,vec__45617,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45613,chunk__45614,count__45615,i__45616,vec__45617,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45613,chunk__45614,count__45615,i__45616,vec__45617,v,_))
);
{
var G__45619 = seq__45613;
var G__45620 = chunk__45614;
var G__45621 = count__45615;
var G__45622 = (i__45616 + 1);
seq__45613 = G__45619;
chunk__45614 = G__45620;
count__45615 = G__45621;
i__45616 = G__45622;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45613);if(temp__4092__auto__)
{var seq__45613__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45613__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__45613__$1);{
var G__45623 = cljs.core.chunk_rest.call(null,seq__45613__$1);
var G__45624 = c__4189__auto__;
var G__45625 = cljs.core.count.call(null,c__4189__auto__);
var G__45626 = 0;
seq__45613 = G__45623;
chunk__45614 = G__45624;
count__45615 = G__45625;
i__45616 = G__45626;
continue;
}
} else
{var vec__45618 = cljs.core.first.call(null,seq__45613__$1);var v = cljs.core.nth.call(null,vec__45618,0,null);var _ = cljs.core.nth.call(null,vec__45618,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45613,chunk__45614,count__45615,i__45616,vec__45618,v,_,seq__45613__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45613,chunk__45614,count__45615,i__45616,vec__45618,v,_,seq__45613__$1,temp__4092__auto__))
);
{
var G__45627 = cljs.core.next.call(null,seq__45613__$1);
var G__45628 = null;
var G__45629 = 0;
var G__45630 = 0;
seq__45613 = G__45627;
chunk__45614 = G__45628;
count__45615 = G__45629;
i__45616 = G__45630;
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
