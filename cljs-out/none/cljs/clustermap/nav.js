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
var seq__23846_23852 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23847_23853 = null;var count__23848_23854 = 0;var i__23849_23855 = 0;while(true){
if((i__23849_23855 < count__23848_23854))
{var vec__23850_23856 = cljs.core._nth.call(null,chunk__23847_23853,i__23849_23855);var v_23857 = cljs.core.nth.call(null,vec__23850_23856,0,null);var body_class_23858 = cljs.core.nth.call(null,vec__23850_23856,1,null);if(cljs.core._EQ_.call(null,v_23857,view))
{domina.add_class_BANG_.call(null,body,body_class_23858);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23858);
}
{
var G__23859 = seq__23846_23852;
var G__23860 = chunk__23847_23853;
var G__23861 = count__23848_23854;
var G__23862 = (i__23849_23855 + 1);
seq__23846_23852 = G__23859;
chunk__23847_23853 = G__23860;
count__23848_23854 = G__23861;
i__23849_23855 = G__23862;
continue;
}
} else
{var temp__4092__auto___23863 = cljs.core.seq.call(null,seq__23846_23852);if(temp__4092__auto___23863)
{var seq__23846_23864__$1 = temp__4092__auto___23863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23846_23864__$1))
{var c__4189__auto___23865 = cljs.core.chunk_first.call(null,seq__23846_23864__$1);{
var G__23866 = cljs.core.chunk_rest.call(null,seq__23846_23864__$1);
var G__23867 = c__4189__auto___23865;
var G__23868 = cljs.core.count.call(null,c__4189__auto___23865);
var G__23869 = 0;
seq__23846_23852 = G__23866;
chunk__23847_23853 = G__23867;
count__23848_23854 = G__23868;
i__23849_23855 = G__23869;
continue;
}
} else
{var vec__23851_23870 = cljs.core.first.call(null,seq__23846_23864__$1);var v_23871 = cljs.core.nth.call(null,vec__23851_23870,0,null);var body_class_23872 = cljs.core.nth.call(null,vec__23851_23870,1,null);if(cljs.core._EQ_.call(null,v_23871,view))
{domina.add_class_BANG_.call(null,body,body_class_23872);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23872);
}
{
var G__23873 = cljs.core.next.call(null,seq__23846_23864__$1);
var G__23874 = null;
var G__23875 = 0;
var G__23876 = 0;
seq__23846_23852 = G__23873;
chunk__23847_23853 = G__23874;
count__23848_23854 = G__23875;
i__23849_23855 = G__23876;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23883 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23884 = null;var count__23885 = 0;var i__23886 = 0;while(true){
if((i__23886 < count__23885))
{var vec__23887 = cljs.core._nth.call(null,chunk__23884,i__23886);var v = cljs.core.nth.call(null,vec__23887,0,null);var _ = cljs.core.nth.call(null,vec__23887,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23883,chunk__23884,count__23885,i__23886,vec__23887,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23883,chunk__23884,count__23885,i__23886,vec__23887,v,_))
);
{
var G__23889 = seq__23883;
var G__23890 = chunk__23884;
var G__23891 = count__23885;
var G__23892 = (i__23886 + 1);
seq__23883 = G__23889;
chunk__23884 = G__23890;
count__23885 = G__23891;
i__23886 = G__23892;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23883);if(temp__4092__auto__)
{var seq__23883__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23883__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__23883__$1);{
var G__23893 = cljs.core.chunk_rest.call(null,seq__23883__$1);
var G__23894 = c__4189__auto__;
var G__23895 = cljs.core.count.call(null,c__4189__auto__);
var G__23896 = 0;
seq__23883 = G__23893;
chunk__23884 = G__23894;
count__23885 = G__23895;
i__23886 = G__23896;
continue;
}
} else
{var vec__23888 = cljs.core.first.call(null,seq__23883__$1);var v = cljs.core.nth.call(null,vec__23888,0,null);var _ = cljs.core.nth.call(null,vec__23888,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23883,chunk__23884,count__23885,i__23886,vec__23888,v,_,seq__23883__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23883,chunk__23884,count__23885,i__23886,vec__23888,v,_,seq__23883__$1,temp__4092__auto__))
);
{
var G__23897 = cljs.core.next.call(null,seq__23883__$1);
var G__23898 = null;
var G__23899 = 0;
var G__23900 = 0;
seq__23883 = G__23897;
chunk__23884 = G__23898;
count__23885 = G__23899;
i__23886 = G__23900;
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