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
var seq__33791_33797 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33792_33798 = null;var count__33793_33799 = 0;var i__33794_33800 = 0;while(true){
if((i__33794_33800 < count__33793_33799))
{var vec__33795_33801 = cljs.core._nth.call(null,chunk__33792_33798,i__33794_33800);var v_33802 = cljs.core.nth.call(null,vec__33795_33801,0,null);var body_class_33803 = cljs.core.nth.call(null,vec__33795_33801,1,null);if(cljs.core._EQ_.call(null,v_33802,view))
{domina.add_class_BANG_.call(null,body,body_class_33803);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33803);
}
{
var G__33804 = seq__33791_33797;
var G__33805 = chunk__33792_33798;
var G__33806 = count__33793_33799;
var G__33807 = (i__33794_33800 + 1);
seq__33791_33797 = G__33804;
chunk__33792_33798 = G__33805;
count__33793_33799 = G__33806;
i__33794_33800 = G__33807;
continue;
}
} else
{var temp__4092__auto___33808 = cljs.core.seq.call(null,seq__33791_33797);if(temp__4092__auto___33808)
{var seq__33791_33809__$1 = temp__4092__auto___33808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33791_33809__$1))
{var c__4148__auto___33810 = cljs.core.chunk_first.call(null,seq__33791_33809__$1);{
var G__33811 = cljs.core.chunk_rest.call(null,seq__33791_33809__$1);
var G__33812 = c__4148__auto___33810;
var G__33813 = cljs.core.count.call(null,c__4148__auto___33810);
var G__33814 = 0;
seq__33791_33797 = G__33811;
chunk__33792_33798 = G__33812;
count__33793_33799 = G__33813;
i__33794_33800 = G__33814;
continue;
}
} else
{var vec__33796_33815 = cljs.core.first.call(null,seq__33791_33809__$1);var v_33816 = cljs.core.nth.call(null,vec__33796_33815,0,null);var body_class_33817 = cljs.core.nth.call(null,vec__33796_33815,1,null);if(cljs.core._EQ_.call(null,v_33816,view))
{domina.add_class_BANG_.call(null,body,body_class_33817);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33817);
}
{
var G__33818 = cljs.core.next.call(null,seq__33791_33809__$1);
var G__33819 = null;
var G__33820 = 0;
var G__33821 = 0;
seq__33791_33797 = G__33818;
chunk__33792_33798 = G__33819;
count__33793_33799 = G__33820;
i__33794_33800 = G__33821;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33828 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33829 = null;var count__33830 = 0;var i__33831 = 0;while(true){
if((i__33831 < count__33830))
{var vec__33832 = cljs.core._nth.call(null,chunk__33829,i__33831);var v = cljs.core.nth.call(null,vec__33832,0,null);var _ = cljs.core.nth.call(null,vec__33832,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33828,chunk__33829,count__33830,i__33831,vec__33832,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33828,chunk__33829,count__33830,i__33831,vec__33832,v,_))
);
{
var G__33834 = seq__33828;
var G__33835 = chunk__33829;
var G__33836 = count__33830;
var G__33837 = (i__33831 + 1);
seq__33828 = G__33834;
chunk__33829 = G__33835;
count__33830 = G__33836;
i__33831 = G__33837;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33828);if(temp__4092__auto__)
{var seq__33828__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33828__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33828__$1);{
var G__33838 = cljs.core.chunk_rest.call(null,seq__33828__$1);
var G__33839 = c__4148__auto__;
var G__33840 = cljs.core.count.call(null,c__4148__auto__);
var G__33841 = 0;
seq__33828 = G__33838;
chunk__33829 = G__33839;
count__33830 = G__33840;
i__33831 = G__33841;
continue;
}
} else
{var vec__33833 = cljs.core.first.call(null,seq__33828__$1);var v = cljs.core.nth.call(null,vec__33833,0,null);var _ = cljs.core.nth.call(null,vec__33833,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33828,chunk__33829,count__33830,i__33831,vec__33833,v,_,seq__33828__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33828,chunk__33829,count__33830,i__33831,vec__33833,v,_,seq__33828__$1,temp__4092__auto__))
);
{
var G__33842 = cljs.core.next.call(null,seq__33828__$1);
var G__33843 = null;
var G__33844 = 0;
var G__33845 = 0;
seq__33828 = G__33842;
chunk__33829 = G__33843;
count__33830 = G__33844;
i__33831 = G__33845;
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
