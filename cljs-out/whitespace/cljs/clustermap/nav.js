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
var seq__33701_33707 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33702_33708 = null;var count__33703_33709 = 0;var i__33704_33710 = 0;while(true){
if((i__33704_33710 < count__33703_33709))
{var vec__33705_33711 = cljs.core._nth.call(null,chunk__33702_33708,i__33704_33710);var v_33712 = cljs.core.nth.call(null,vec__33705_33711,0,null);var body_class_33713 = cljs.core.nth.call(null,vec__33705_33711,1,null);if(cljs.core._EQ_.call(null,v_33712,view))
{domina.add_class_BANG_.call(null,body,body_class_33713);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33713);
}
{
var G__33714 = seq__33701_33707;
var G__33715 = chunk__33702_33708;
var G__33716 = count__33703_33709;
var G__33717 = (i__33704_33710 + 1);
seq__33701_33707 = G__33714;
chunk__33702_33708 = G__33715;
count__33703_33709 = G__33716;
i__33704_33710 = G__33717;
continue;
}
} else
{var temp__4092__auto___33718 = cljs.core.seq.call(null,seq__33701_33707);if(temp__4092__auto___33718)
{var seq__33701_33719__$1 = temp__4092__auto___33718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33701_33719__$1))
{var c__4148__auto___33720 = cljs.core.chunk_first.call(null,seq__33701_33719__$1);{
var G__33721 = cljs.core.chunk_rest.call(null,seq__33701_33719__$1);
var G__33722 = c__4148__auto___33720;
var G__33723 = cljs.core.count.call(null,c__4148__auto___33720);
var G__33724 = 0;
seq__33701_33707 = G__33721;
chunk__33702_33708 = G__33722;
count__33703_33709 = G__33723;
i__33704_33710 = G__33724;
continue;
}
} else
{var vec__33706_33725 = cljs.core.first.call(null,seq__33701_33719__$1);var v_33726 = cljs.core.nth.call(null,vec__33706_33725,0,null);var body_class_33727 = cljs.core.nth.call(null,vec__33706_33725,1,null);if(cljs.core._EQ_.call(null,v_33726,view))
{domina.add_class_BANG_.call(null,body,body_class_33727);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33727);
}
{
var G__33728 = cljs.core.next.call(null,seq__33701_33719__$1);
var G__33729 = null;
var G__33730 = 0;
var G__33731 = 0;
seq__33701_33707 = G__33728;
chunk__33702_33708 = G__33729;
count__33703_33709 = G__33730;
i__33704_33710 = G__33731;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33738 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33739 = null;var count__33740 = 0;var i__33741 = 0;while(true){
if((i__33741 < count__33740))
{var vec__33742 = cljs.core._nth.call(null,chunk__33739,i__33741);var v = cljs.core.nth.call(null,vec__33742,0,null);var _ = cljs.core.nth.call(null,vec__33742,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33738,chunk__33739,count__33740,i__33741,vec__33742,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33738,chunk__33739,count__33740,i__33741,vec__33742,v,_))
);
{
var G__33744 = seq__33738;
var G__33745 = chunk__33739;
var G__33746 = count__33740;
var G__33747 = (i__33741 + 1);
seq__33738 = G__33744;
chunk__33739 = G__33745;
count__33740 = G__33746;
i__33741 = G__33747;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33738);if(temp__4092__auto__)
{var seq__33738__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33738__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33738__$1);{
var G__33748 = cljs.core.chunk_rest.call(null,seq__33738__$1);
var G__33749 = c__4148__auto__;
var G__33750 = cljs.core.count.call(null,c__4148__auto__);
var G__33751 = 0;
seq__33738 = G__33748;
chunk__33739 = G__33749;
count__33740 = G__33750;
i__33741 = G__33751;
continue;
}
} else
{var vec__33743 = cljs.core.first.call(null,seq__33738__$1);var v = cljs.core.nth.call(null,vec__33743,0,null);var _ = cljs.core.nth.call(null,vec__33743,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33738,chunk__33739,count__33740,i__33741,vec__33743,v,_,seq__33738__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33738,chunk__33739,count__33740,i__33741,vec__33743,v,_,seq__33738__$1,temp__4092__auto__))
);
{
var G__33752 = cljs.core.next.call(null,seq__33738__$1);
var G__33753 = null;
var G__33754 = 0;
var G__33755 = 0;
seq__33738 = G__33752;
chunk__33739 = G__33753;
count__33740 = G__33754;
i__33741 = G__33755;
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
