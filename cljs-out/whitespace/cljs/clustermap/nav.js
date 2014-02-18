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
var seq__33707_33713 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33708_33714 = null;var count__33709_33715 = 0;var i__33710_33716 = 0;while(true){
if((i__33710_33716 < count__33709_33715))
{var vec__33711_33717 = cljs.core._nth.call(null,chunk__33708_33714,i__33710_33716);var v_33718 = cljs.core.nth.call(null,vec__33711_33717,0,null);var body_class_33719 = cljs.core.nth.call(null,vec__33711_33717,1,null);if(cljs.core._EQ_.call(null,v_33718,view))
{domina.add_class_BANG_.call(null,body,body_class_33719);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33719);
}
{
var G__33720 = seq__33707_33713;
var G__33721 = chunk__33708_33714;
var G__33722 = count__33709_33715;
var G__33723 = (i__33710_33716 + 1);
seq__33707_33713 = G__33720;
chunk__33708_33714 = G__33721;
count__33709_33715 = G__33722;
i__33710_33716 = G__33723;
continue;
}
} else
{var temp__4092__auto___33724 = cljs.core.seq.call(null,seq__33707_33713);if(temp__4092__auto___33724)
{var seq__33707_33725__$1 = temp__4092__auto___33724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33707_33725__$1))
{var c__4148__auto___33726 = cljs.core.chunk_first.call(null,seq__33707_33725__$1);{
var G__33727 = cljs.core.chunk_rest.call(null,seq__33707_33725__$1);
var G__33728 = c__4148__auto___33726;
var G__33729 = cljs.core.count.call(null,c__4148__auto___33726);
var G__33730 = 0;
seq__33707_33713 = G__33727;
chunk__33708_33714 = G__33728;
count__33709_33715 = G__33729;
i__33710_33716 = G__33730;
continue;
}
} else
{var vec__33712_33731 = cljs.core.first.call(null,seq__33707_33725__$1);var v_33732 = cljs.core.nth.call(null,vec__33712_33731,0,null);var body_class_33733 = cljs.core.nth.call(null,vec__33712_33731,1,null);if(cljs.core._EQ_.call(null,v_33732,view))
{domina.add_class_BANG_.call(null,body,body_class_33733);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33733);
}
{
var G__33734 = cljs.core.next.call(null,seq__33707_33725__$1);
var G__33735 = null;
var G__33736 = 0;
var G__33737 = 0;
seq__33707_33713 = G__33734;
chunk__33708_33714 = G__33735;
count__33709_33715 = G__33736;
i__33710_33716 = G__33737;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33744 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33745 = null;var count__33746 = 0;var i__33747 = 0;while(true){
if((i__33747 < count__33746))
{var vec__33748 = cljs.core._nth.call(null,chunk__33745,i__33747);var v = cljs.core.nth.call(null,vec__33748,0,null);var _ = cljs.core.nth.call(null,vec__33748,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33744,chunk__33745,count__33746,i__33747,vec__33748,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33744,chunk__33745,count__33746,i__33747,vec__33748,v,_))
);
{
var G__33750 = seq__33744;
var G__33751 = chunk__33745;
var G__33752 = count__33746;
var G__33753 = (i__33747 + 1);
seq__33744 = G__33750;
chunk__33745 = G__33751;
count__33746 = G__33752;
i__33747 = G__33753;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33744);if(temp__4092__auto__)
{var seq__33744__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33744__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33744__$1);{
var G__33754 = cljs.core.chunk_rest.call(null,seq__33744__$1);
var G__33755 = c__4148__auto__;
var G__33756 = cljs.core.count.call(null,c__4148__auto__);
var G__33757 = 0;
seq__33744 = G__33754;
chunk__33745 = G__33755;
count__33746 = G__33756;
i__33747 = G__33757;
continue;
}
} else
{var vec__33749 = cljs.core.first.call(null,seq__33744__$1);var v = cljs.core.nth.call(null,vec__33749,0,null);var _ = cljs.core.nth.call(null,vec__33749,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33744,chunk__33745,count__33746,i__33747,vec__33749,v,_,seq__33744__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33744,chunk__33745,count__33746,i__33747,vec__33749,v,_,seq__33744__$1,temp__4092__auto__))
);
{
var G__33758 = cljs.core.next.call(null,seq__33744__$1);
var G__33759 = null;
var G__33760 = 0;
var G__33761 = 0;
seq__33744 = G__33758;
chunk__33745 = G__33759;
count__33746 = G__33760;
i__33747 = G__33761;
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
