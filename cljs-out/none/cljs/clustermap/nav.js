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
var seq__23742_23748 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23743_23749 = null;var count__23744_23750 = 0;var i__23745_23751 = 0;while(true){
if((i__23745_23751 < count__23744_23750))
{var vec__23746_23752 = cljs.core._nth.call(null,chunk__23743_23749,i__23745_23751);var v_23753 = cljs.core.nth.call(null,vec__23746_23752,0,null);var body_class_23754 = cljs.core.nth.call(null,vec__23746_23752,1,null);if(cljs.core._EQ_.call(null,v_23753,view))
{domina.add_class_BANG_.call(null,body,body_class_23754);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23754);
}
{
var G__23755 = seq__23742_23748;
var G__23756 = chunk__23743_23749;
var G__23757 = count__23744_23750;
var G__23758 = (i__23745_23751 + 1);
seq__23742_23748 = G__23755;
chunk__23743_23749 = G__23756;
count__23744_23750 = G__23757;
i__23745_23751 = G__23758;
continue;
}
} else
{var temp__4092__auto___23759 = cljs.core.seq.call(null,seq__23742_23748);if(temp__4092__auto___23759)
{var seq__23742_23760__$1 = temp__4092__auto___23759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23742_23760__$1))
{var c__4189__auto___23761 = cljs.core.chunk_first.call(null,seq__23742_23760__$1);{
var G__23762 = cljs.core.chunk_rest.call(null,seq__23742_23760__$1);
var G__23763 = c__4189__auto___23761;
var G__23764 = cljs.core.count.call(null,c__4189__auto___23761);
var G__23765 = 0;
seq__23742_23748 = G__23762;
chunk__23743_23749 = G__23763;
count__23744_23750 = G__23764;
i__23745_23751 = G__23765;
continue;
}
} else
{var vec__23747_23766 = cljs.core.first.call(null,seq__23742_23760__$1);var v_23767 = cljs.core.nth.call(null,vec__23747_23766,0,null);var body_class_23768 = cljs.core.nth.call(null,vec__23747_23766,1,null);if(cljs.core._EQ_.call(null,v_23767,view))
{domina.add_class_BANG_.call(null,body,body_class_23768);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23768);
}
{
var G__23769 = cljs.core.next.call(null,seq__23742_23760__$1);
var G__23770 = null;
var G__23771 = 0;
var G__23772 = 0;
seq__23742_23748 = G__23769;
chunk__23743_23749 = G__23770;
count__23744_23750 = G__23771;
i__23745_23751 = G__23772;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23779 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23780 = null;var count__23781 = 0;var i__23782 = 0;while(true){
if((i__23782 < count__23781))
{var vec__23783 = cljs.core._nth.call(null,chunk__23780,i__23782);var v = cljs.core.nth.call(null,vec__23783,0,null);var _ = cljs.core.nth.call(null,vec__23783,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23779,chunk__23780,count__23781,i__23782,vec__23783,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23779,chunk__23780,count__23781,i__23782,vec__23783,v,_))
);
{
var G__23785 = seq__23779;
var G__23786 = chunk__23780;
var G__23787 = count__23781;
var G__23788 = (i__23782 + 1);
seq__23779 = G__23785;
chunk__23780 = G__23786;
count__23781 = G__23787;
i__23782 = G__23788;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23779);if(temp__4092__auto__)
{var seq__23779__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23779__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__23779__$1);{
var G__23789 = cljs.core.chunk_rest.call(null,seq__23779__$1);
var G__23790 = c__4189__auto__;
var G__23791 = cljs.core.count.call(null,c__4189__auto__);
var G__23792 = 0;
seq__23779 = G__23789;
chunk__23780 = G__23790;
count__23781 = G__23791;
i__23782 = G__23792;
continue;
}
} else
{var vec__23784 = cljs.core.first.call(null,seq__23779__$1);var v = cljs.core.nth.call(null,vec__23784,0,null);var _ = cljs.core.nth.call(null,vec__23784,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23779,chunk__23780,count__23781,i__23782,vec__23784,v,_,seq__23779__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23779,chunk__23780,count__23781,i__23782,vec__23784,v,_,seq__23779__$1,temp__4092__auto__))
);
{
var G__23793 = cljs.core.next.call(null,seq__23779__$1);
var G__23794 = null;
var G__23795 = 0;
var G__23796 = 0;
seq__23779 = G__23793;
chunk__23780 = G__23794;
count__23781 = G__23795;
i__23782 = G__23796;
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