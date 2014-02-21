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
var seq__33713_33719 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33714_33720 = null;var count__33715_33721 = 0;var i__33716_33722 = 0;while(true){
if((i__33716_33722 < count__33715_33721))
{var vec__33717_33723 = cljs.core._nth.call(null,chunk__33714_33720,i__33716_33722);var v_33724 = cljs.core.nth.call(null,vec__33717_33723,0,null);var body_class_33725 = cljs.core.nth.call(null,vec__33717_33723,1,null);if(cljs.core._EQ_.call(null,v_33724,view))
{domina.add_class_BANG_.call(null,body,body_class_33725);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33725);
}
{
var G__33726 = seq__33713_33719;
var G__33727 = chunk__33714_33720;
var G__33728 = count__33715_33721;
var G__33729 = (i__33716_33722 + 1);
seq__33713_33719 = G__33726;
chunk__33714_33720 = G__33727;
count__33715_33721 = G__33728;
i__33716_33722 = G__33729;
continue;
}
} else
{var temp__4092__auto___33730 = cljs.core.seq.call(null,seq__33713_33719);if(temp__4092__auto___33730)
{var seq__33713_33731__$1 = temp__4092__auto___33730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33713_33731__$1))
{var c__4148__auto___33732 = cljs.core.chunk_first.call(null,seq__33713_33731__$1);{
var G__33733 = cljs.core.chunk_rest.call(null,seq__33713_33731__$1);
var G__33734 = c__4148__auto___33732;
var G__33735 = cljs.core.count.call(null,c__4148__auto___33732);
var G__33736 = 0;
seq__33713_33719 = G__33733;
chunk__33714_33720 = G__33734;
count__33715_33721 = G__33735;
i__33716_33722 = G__33736;
continue;
}
} else
{var vec__33718_33737 = cljs.core.first.call(null,seq__33713_33731__$1);var v_33738 = cljs.core.nth.call(null,vec__33718_33737,0,null);var body_class_33739 = cljs.core.nth.call(null,vec__33718_33737,1,null);if(cljs.core._EQ_.call(null,v_33738,view))
{domina.add_class_BANG_.call(null,body,body_class_33739);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33739);
}
{
var G__33740 = cljs.core.next.call(null,seq__33713_33731__$1);
var G__33741 = null;
var G__33742 = 0;
var G__33743 = 0;
seq__33713_33719 = G__33740;
chunk__33714_33720 = G__33741;
count__33715_33721 = G__33742;
i__33716_33722 = G__33743;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33750 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33751 = null;var count__33752 = 0;var i__33753 = 0;while(true){
if((i__33753 < count__33752))
{var vec__33754 = cljs.core._nth.call(null,chunk__33751,i__33753);var v = cljs.core.nth.call(null,vec__33754,0,null);var _ = cljs.core.nth.call(null,vec__33754,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33750,chunk__33751,count__33752,i__33753,vec__33754,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33750,chunk__33751,count__33752,i__33753,vec__33754,v,_))
);
{
var G__33756 = seq__33750;
var G__33757 = chunk__33751;
var G__33758 = count__33752;
var G__33759 = (i__33753 + 1);
seq__33750 = G__33756;
chunk__33751 = G__33757;
count__33752 = G__33758;
i__33753 = G__33759;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33750);if(temp__4092__auto__)
{var seq__33750__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33750__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33750__$1);{
var G__33760 = cljs.core.chunk_rest.call(null,seq__33750__$1);
var G__33761 = c__4148__auto__;
var G__33762 = cljs.core.count.call(null,c__4148__auto__);
var G__33763 = 0;
seq__33750 = G__33760;
chunk__33751 = G__33761;
count__33752 = G__33762;
i__33753 = G__33763;
continue;
}
} else
{var vec__33755 = cljs.core.first.call(null,seq__33750__$1);var v = cljs.core.nth.call(null,vec__33755,0,null);var _ = cljs.core.nth.call(null,vec__33755,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33750,chunk__33751,count__33752,i__33753,vec__33755,v,_,seq__33750__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33750,chunk__33751,count__33752,i__33753,vec__33755,v,_,seq__33750__$1,temp__4092__auto__))
);
{
var G__33764 = cljs.core.next.call(null,seq__33750__$1);
var G__33765 = null;
var G__33766 = 0;
var G__33767 = 0;
seq__33750 = G__33764;
chunk__33751 = G__33765;
count__33752 = G__33766;
i__33753 = G__33767;
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
