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
var seq__33779_33785 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33780_33786 = null;var count__33781_33787 = 0;var i__33782_33788 = 0;while(true){
if((i__33782_33788 < count__33781_33787))
{var vec__33783_33789 = cljs.core._nth.call(null,chunk__33780_33786,i__33782_33788);var v_33790 = cljs.core.nth.call(null,vec__33783_33789,0,null);var body_class_33791 = cljs.core.nth.call(null,vec__33783_33789,1,null);if(cljs.core._EQ_.call(null,v_33790,view))
{domina.add_class_BANG_.call(null,body,body_class_33791);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33791);
}
{
var G__33792 = seq__33779_33785;
var G__33793 = chunk__33780_33786;
var G__33794 = count__33781_33787;
var G__33795 = (i__33782_33788 + 1);
seq__33779_33785 = G__33792;
chunk__33780_33786 = G__33793;
count__33781_33787 = G__33794;
i__33782_33788 = G__33795;
continue;
}
} else
{var temp__4092__auto___33796 = cljs.core.seq.call(null,seq__33779_33785);if(temp__4092__auto___33796)
{var seq__33779_33797__$1 = temp__4092__auto___33796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33779_33797__$1))
{var c__4148__auto___33798 = cljs.core.chunk_first.call(null,seq__33779_33797__$1);{
var G__33799 = cljs.core.chunk_rest.call(null,seq__33779_33797__$1);
var G__33800 = c__4148__auto___33798;
var G__33801 = cljs.core.count.call(null,c__4148__auto___33798);
var G__33802 = 0;
seq__33779_33785 = G__33799;
chunk__33780_33786 = G__33800;
count__33781_33787 = G__33801;
i__33782_33788 = G__33802;
continue;
}
} else
{var vec__33784_33803 = cljs.core.first.call(null,seq__33779_33797__$1);var v_33804 = cljs.core.nth.call(null,vec__33784_33803,0,null);var body_class_33805 = cljs.core.nth.call(null,vec__33784_33803,1,null);if(cljs.core._EQ_.call(null,v_33804,view))
{domina.add_class_BANG_.call(null,body,body_class_33805);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33805);
}
{
var G__33806 = cljs.core.next.call(null,seq__33779_33797__$1);
var G__33807 = null;
var G__33808 = 0;
var G__33809 = 0;
seq__33779_33785 = G__33806;
chunk__33780_33786 = G__33807;
count__33781_33787 = G__33808;
i__33782_33788 = G__33809;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33816 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33817 = null;var count__33818 = 0;var i__33819 = 0;while(true){
if((i__33819 < count__33818))
{var vec__33820 = cljs.core._nth.call(null,chunk__33817,i__33819);var v = cljs.core.nth.call(null,vec__33820,0,null);var _ = cljs.core.nth.call(null,vec__33820,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33816,chunk__33817,count__33818,i__33819,vec__33820,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33816,chunk__33817,count__33818,i__33819,vec__33820,v,_))
);
{
var G__33822 = seq__33816;
var G__33823 = chunk__33817;
var G__33824 = count__33818;
var G__33825 = (i__33819 + 1);
seq__33816 = G__33822;
chunk__33817 = G__33823;
count__33818 = G__33824;
i__33819 = G__33825;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33816);if(temp__4092__auto__)
{var seq__33816__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33816__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33816__$1);{
var G__33826 = cljs.core.chunk_rest.call(null,seq__33816__$1);
var G__33827 = c__4148__auto__;
var G__33828 = cljs.core.count.call(null,c__4148__auto__);
var G__33829 = 0;
seq__33816 = G__33826;
chunk__33817 = G__33827;
count__33818 = G__33828;
i__33819 = G__33829;
continue;
}
} else
{var vec__33821 = cljs.core.first.call(null,seq__33816__$1);var v = cljs.core.nth.call(null,vec__33821,0,null);var _ = cljs.core.nth.call(null,vec__33821,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33816,chunk__33817,count__33818,i__33819,vec__33821,v,_,seq__33816__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33816,chunk__33817,count__33818,i__33819,vec__33821,v,_,seq__33816__$1,temp__4092__auto__))
);
{
var G__33830 = cljs.core.next.call(null,seq__33816__$1);
var G__33831 = null;
var G__33832 = 0;
var G__33833 = 0;
seq__33816 = G__33830;
chunk__33817 = G__33831;
count__33818 = G__33832;
i__33819 = G__33833;
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
