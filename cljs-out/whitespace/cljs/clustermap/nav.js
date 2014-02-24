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
var seq__33719_33725 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33720_33726 = null;var count__33721_33727 = 0;var i__33722_33728 = 0;while(true){
if((i__33722_33728 < count__33721_33727))
{var vec__33723_33729 = cljs.core._nth.call(null,chunk__33720_33726,i__33722_33728);var v_33730 = cljs.core.nth.call(null,vec__33723_33729,0,null);var body_class_33731 = cljs.core.nth.call(null,vec__33723_33729,1,null);if(cljs.core._EQ_.call(null,v_33730,view))
{domina.add_class_BANG_.call(null,body,body_class_33731);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33731);
}
{
var G__33732 = seq__33719_33725;
var G__33733 = chunk__33720_33726;
var G__33734 = count__33721_33727;
var G__33735 = (i__33722_33728 + 1);
seq__33719_33725 = G__33732;
chunk__33720_33726 = G__33733;
count__33721_33727 = G__33734;
i__33722_33728 = G__33735;
continue;
}
} else
{var temp__4092__auto___33736 = cljs.core.seq.call(null,seq__33719_33725);if(temp__4092__auto___33736)
{var seq__33719_33737__$1 = temp__4092__auto___33736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33719_33737__$1))
{var c__4148__auto___33738 = cljs.core.chunk_first.call(null,seq__33719_33737__$1);{
var G__33739 = cljs.core.chunk_rest.call(null,seq__33719_33737__$1);
var G__33740 = c__4148__auto___33738;
var G__33741 = cljs.core.count.call(null,c__4148__auto___33738);
var G__33742 = 0;
seq__33719_33725 = G__33739;
chunk__33720_33726 = G__33740;
count__33721_33727 = G__33741;
i__33722_33728 = G__33742;
continue;
}
} else
{var vec__33724_33743 = cljs.core.first.call(null,seq__33719_33737__$1);var v_33744 = cljs.core.nth.call(null,vec__33724_33743,0,null);var body_class_33745 = cljs.core.nth.call(null,vec__33724_33743,1,null);if(cljs.core._EQ_.call(null,v_33744,view))
{domina.add_class_BANG_.call(null,body,body_class_33745);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33745);
}
{
var G__33746 = cljs.core.next.call(null,seq__33719_33737__$1);
var G__33747 = null;
var G__33748 = 0;
var G__33749 = 0;
seq__33719_33725 = G__33746;
chunk__33720_33726 = G__33747;
count__33721_33727 = G__33748;
i__33722_33728 = G__33749;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33756 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33757 = null;var count__33758 = 0;var i__33759 = 0;while(true){
if((i__33759 < count__33758))
{var vec__33760 = cljs.core._nth.call(null,chunk__33757,i__33759);var v = cljs.core.nth.call(null,vec__33760,0,null);var _ = cljs.core.nth.call(null,vec__33760,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33756,chunk__33757,count__33758,i__33759,vec__33760,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33756,chunk__33757,count__33758,i__33759,vec__33760,v,_))
);
{
var G__33762 = seq__33756;
var G__33763 = chunk__33757;
var G__33764 = count__33758;
var G__33765 = (i__33759 + 1);
seq__33756 = G__33762;
chunk__33757 = G__33763;
count__33758 = G__33764;
i__33759 = G__33765;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33756);if(temp__4092__auto__)
{var seq__33756__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33756__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33756__$1);{
var G__33766 = cljs.core.chunk_rest.call(null,seq__33756__$1);
var G__33767 = c__4148__auto__;
var G__33768 = cljs.core.count.call(null,c__4148__auto__);
var G__33769 = 0;
seq__33756 = G__33766;
chunk__33757 = G__33767;
count__33758 = G__33768;
i__33759 = G__33769;
continue;
}
} else
{var vec__33761 = cljs.core.first.call(null,seq__33756__$1);var v = cljs.core.nth.call(null,vec__33761,0,null);var _ = cljs.core.nth.call(null,vec__33761,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33756,chunk__33757,count__33758,i__33759,vec__33761,v,_,seq__33756__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33756,chunk__33757,count__33758,i__33759,vec__33761,v,_,seq__33756__$1,temp__4092__auto__))
);
{
var G__33770 = cljs.core.next.call(null,seq__33756__$1);
var G__33771 = null;
var G__33772 = 0;
var G__33773 = 0;
seq__33756 = G__33770;
chunk__33757 = G__33771;
count__33758 = G__33772;
i__33759 = G__33773;
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
