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
var seq__33743_33749 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33744_33750 = null;var count__33745_33751 = 0;var i__33746_33752 = 0;while(true){
if((i__33746_33752 < count__33745_33751))
{var vec__33747_33753 = cljs.core._nth.call(null,chunk__33744_33750,i__33746_33752);var v_33754 = cljs.core.nth.call(null,vec__33747_33753,0,null);var body_class_33755 = cljs.core.nth.call(null,vec__33747_33753,1,null);if(cljs.core._EQ_.call(null,v_33754,view))
{domina.add_class_BANG_.call(null,body,body_class_33755);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33755);
}
{
var G__33756 = seq__33743_33749;
var G__33757 = chunk__33744_33750;
var G__33758 = count__33745_33751;
var G__33759 = (i__33746_33752 + 1);
seq__33743_33749 = G__33756;
chunk__33744_33750 = G__33757;
count__33745_33751 = G__33758;
i__33746_33752 = G__33759;
continue;
}
} else
{var temp__4092__auto___33760 = cljs.core.seq.call(null,seq__33743_33749);if(temp__4092__auto___33760)
{var seq__33743_33761__$1 = temp__4092__auto___33760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33743_33761__$1))
{var c__4148__auto___33762 = cljs.core.chunk_first.call(null,seq__33743_33761__$1);{
var G__33763 = cljs.core.chunk_rest.call(null,seq__33743_33761__$1);
var G__33764 = c__4148__auto___33762;
var G__33765 = cljs.core.count.call(null,c__4148__auto___33762);
var G__33766 = 0;
seq__33743_33749 = G__33763;
chunk__33744_33750 = G__33764;
count__33745_33751 = G__33765;
i__33746_33752 = G__33766;
continue;
}
} else
{var vec__33748_33767 = cljs.core.first.call(null,seq__33743_33761__$1);var v_33768 = cljs.core.nth.call(null,vec__33748_33767,0,null);var body_class_33769 = cljs.core.nth.call(null,vec__33748_33767,1,null);if(cljs.core._EQ_.call(null,v_33768,view))
{domina.add_class_BANG_.call(null,body,body_class_33769);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33769);
}
{
var G__33770 = cljs.core.next.call(null,seq__33743_33761__$1);
var G__33771 = null;
var G__33772 = 0;
var G__33773 = 0;
seq__33743_33749 = G__33770;
chunk__33744_33750 = G__33771;
count__33745_33751 = G__33772;
i__33746_33752 = G__33773;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33780 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33781 = null;var count__33782 = 0;var i__33783 = 0;while(true){
if((i__33783 < count__33782))
{var vec__33784 = cljs.core._nth.call(null,chunk__33781,i__33783);var v = cljs.core.nth.call(null,vec__33784,0,null);var _ = cljs.core.nth.call(null,vec__33784,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33780,chunk__33781,count__33782,i__33783,vec__33784,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33780,chunk__33781,count__33782,i__33783,vec__33784,v,_))
);
{
var G__33786 = seq__33780;
var G__33787 = chunk__33781;
var G__33788 = count__33782;
var G__33789 = (i__33783 + 1);
seq__33780 = G__33786;
chunk__33781 = G__33787;
count__33782 = G__33788;
i__33783 = G__33789;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33780);if(temp__4092__auto__)
{var seq__33780__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33780__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33780__$1);{
var G__33790 = cljs.core.chunk_rest.call(null,seq__33780__$1);
var G__33791 = c__4148__auto__;
var G__33792 = cljs.core.count.call(null,c__4148__auto__);
var G__33793 = 0;
seq__33780 = G__33790;
chunk__33781 = G__33791;
count__33782 = G__33792;
i__33783 = G__33793;
continue;
}
} else
{var vec__33785 = cljs.core.first.call(null,seq__33780__$1);var v = cljs.core.nth.call(null,vec__33785,0,null);var _ = cljs.core.nth.call(null,vec__33785,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33780,chunk__33781,count__33782,i__33783,vec__33785,v,_,seq__33780__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33780,chunk__33781,count__33782,i__33783,vec__33785,v,_,seq__33780__$1,temp__4092__auto__))
);
{
var G__33794 = cljs.core.next.call(null,seq__33780__$1);
var G__33795 = null;
var G__33796 = 0;
var G__33797 = 0;
seq__33780 = G__33794;
chunk__33781 = G__33795;
count__33782 = G__33796;
i__33783 = G__33797;
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
