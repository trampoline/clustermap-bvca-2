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
var seq__23758_23764 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23759_23765 = null;var count__23760_23766 = 0;var i__23761_23767 = 0;while(true){
if((i__23761_23767 < count__23760_23766))
{var vec__23762_23768 = cljs.core._nth.call(null,chunk__23759_23765,i__23761_23767);var v_23769 = cljs.core.nth.call(null,vec__23762_23768,0,null);var body_class_23770 = cljs.core.nth.call(null,vec__23762_23768,1,null);if(cljs.core._EQ_.call(null,v_23769,view))
{domina.add_class_BANG_.call(null,body,body_class_23770);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23770);
}
{
var G__23771 = seq__23758_23764;
var G__23772 = chunk__23759_23765;
var G__23773 = count__23760_23766;
var G__23774 = (i__23761_23767 + 1);
seq__23758_23764 = G__23771;
chunk__23759_23765 = G__23772;
count__23760_23766 = G__23773;
i__23761_23767 = G__23774;
continue;
}
} else
{var temp__4092__auto___23775 = cljs.core.seq.call(null,seq__23758_23764);if(temp__4092__auto___23775)
{var seq__23758_23776__$1 = temp__4092__auto___23775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23758_23776__$1))
{var c__4189__auto___23777 = cljs.core.chunk_first.call(null,seq__23758_23776__$1);{
var G__23778 = cljs.core.chunk_rest.call(null,seq__23758_23776__$1);
var G__23779 = c__4189__auto___23777;
var G__23780 = cljs.core.count.call(null,c__4189__auto___23777);
var G__23781 = 0;
seq__23758_23764 = G__23778;
chunk__23759_23765 = G__23779;
count__23760_23766 = G__23780;
i__23761_23767 = G__23781;
continue;
}
} else
{var vec__23763_23782 = cljs.core.first.call(null,seq__23758_23776__$1);var v_23783 = cljs.core.nth.call(null,vec__23763_23782,0,null);var body_class_23784 = cljs.core.nth.call(null,vec__23763_23782,1,null);if(cljs.core._EQ_.call(null,v_23783,view))
{domina.add_class_BANG_.call(null,body,body_class_23784);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23784);
}
{
var G__23785 = cljs.core.next.call(null,seq__23758_23776__$1);
var G__23786 = null;
var G__23787 = 0;
var G__23788 = 0;
seq__23758_23764 = G__23785;
chunk__23759_23765 = G__23786;
count__23760_23766 = G__23787;
i__23761_23767 = G__23788;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23795 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23796 = null;var count__23797 = 0;var i__23798 = 0;while(true){
if((i__23798 < count__23797))
{var vec__23799 = cljs.core._nth.call(null,chunk__23796,i__23798);var v = cljs.core.nth.call(null,vec__23799,0,null);var _ = cljs.core.nth.call(null,vec__23799,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23795,chunk__23796,count__23797,i__23798,vec__23799,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23795,chunk__23796,count__23797,i__23798,vec__23799,v,_))
);
{
var G__23801 = seq__23795;
var G__23802 = chunk__23796;
var G__23803 = count__23797;
var G__23804 = (i__23798 + 1);
seq__23795 = G__23801;
chunk__23796 = G__23802;
count__23797 = G__23803;
i__23798 = G__23804;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23795);if(temp__4092__auto__)
{var seq__23795__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23795__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__23795__$1);{
var G__23805 = cljs.core.chunk_rest.call(null,seq__23795__$1);
var G__23806 = c__4189__auto__;
var G__23807 = cljs.core.count.call(null,c__4189__auto__);
var G__23808 = 0;
seq__23795 = G__23805;
chunk__23796 = G__23806;
count__23797 = G__23807;
i__23798 = G__23808;
continue;
}
} else
{var vec__23800 = cljs.core.first.call(null,seq__23795__$1);var v = cljs.core.nth.call(null,vec__23800,0,null);var _ = cljs.core.nth.call(null,vec__23800,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23795,chunk__23796,count__23797,i__23798,vec__23800,v,_,seq__23795__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23795,chunk__23796,count__23797,i__23798,vec__23800,v,_,seq__23795__$1,temp__4092__auto__))
);
{
var G__23809 = cljs.core.next.call(null,seq__23795__$1);
var G__23810 = null;
var G__23811 = 0;
var G__23812 = 0;
seq__23795 = G__23809;
chunk__23796 = G__23810;
count__23797 = G__23811;
i__23798 = G__23812;
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