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
var seq__23870_23876 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23871_23877 = null;var count__23872_23878 = 0;var i__23873_23879 = 0;while(true){
if((i__23873_23879 < count__23872_23878))
{var vec__23874_23880 = cljs.core._nth.call(null,chunk__23871_23877,i__23873_23879);var v_23881 = cljs.core.nth.call(null,vec__23874_23880,0,null);var body_class_23882 = cljs.core.nth.call(null,vec__23874_23880,1,null);if(cljs.core._EQ_.call(null,v_23881,view))
{domina.add_class_BANG_.call(null,body,body_class_23882);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23882);
}
{
var G__23883 = seq__23870_23876;
var G__23884 = chunk__23871_23877;
var G__23885 = count__23872_23878;
var G__23886 = (i__23873_23879 + 1);
seq__23870_23876 = G__23883;
chunk__23871_23877 = G__23884;
count__23872_23878 = G__23885;
i__23873_23879 = G__23886;
continue;
}
} else
{var temp__4092__auto___23887 = cljs.core.seq.call(null,seq__23870_23876);if(temp__4092__auto___23887)
{var seq__23870_23888__$1 = temp__4092__auto___23887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23870_23888__$1))
{var c__4189__auto___23889 = cljs.core.chunk_first.call(null,seq__23870_23888__$1);{
var G__23890 = cljs.core.chunk_rest.call(null,seq__23870_23888__$1);
var G__23891 = c__4189__auto___23889;
var G__23892 = cljs.core.count.call(null,c__4189__auto___23889);
var G__23893 = 0;
seq__23870_23876 = G__23890;
chunk__23871_23877 = G__23891;
count__23872_23878 = G__23892;
i__23873_23879 = G__23893;
continue;
}
} else
{var vec__23875_23894 = cljs.core.first.call(null,seq__23870_23888__$1);var v_23895 = cljs.core.nth.call(null,vec__23875_23894,0,null);var body_class_23896 = cljs.core.nth.call(null,vec__23875_23894,1,null);if(cljs.core._EQ_.call(null,v_23895,view))
{domina.add_class_BANG_.call(null,body,body_class_23896);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23896);
}
{
var G__23897 = cljs.core.next.call(null,seq__23870_23888__$1);
var G__23898 = null;
var G__23899 = 0;
var G__23900 = 0;
seq__23870_23876 = G__23897;
chunk__23871_23877 = G__23898;
count__23872_23878 = G__23899;
i__23873_23879 = G__23900;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23907 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23908 = null;var count__23909 = 0;var i__23910 = 0;while(true){
if((i__23910 < count__23909))
{var vec__23911 = cljs.core._nth.call(null,chunk__23908,i__23910);var v = cljs.core.nth.call(null,vec__23911,0,null);var _ = cljs.core.nth.call(null,vec__23911,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23907,chunk__23908,count__23909,i__23910,vec__23911,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23907,chunk__23908,count__23909,i__23910,vec__23911,v,_))
);
{
var G__23913 = seq__23907;
var G__23914 = chunk__23908;
var G__23915 = count__23909;
var G__23916 = (i__23910 + 1);
seq__23907 = G__23913;
chunk__23908 = G__23914;
count__23909 = G__23915;
i__23910 = G__23916;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23907);if(temp__4092__auto__)
{var seq__23907__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23907__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__23907__$1);{
var G__23917 = cljs.core.chunk_rest.call(null,seq__23907__$1);
var G__23918 = c__4189__auto__;
var G__23919 = cljs.core.count.call(null,c__4189__auto__);
var G__23920 = 0;
seq__23907 = G__23917;
chunk__23908 = G__23918;
count__23909 = G__23919;
i__23910 = G__23920;
continue;
}
} else
{var vec__23912 = cljs.core.first.call(null,seq__23907__$1);var v = cljs.core.nth.call(null,vec__23912,0,null);var _ = cljs.core.nth.call(null,vec__23912,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23907,chunk__23908,count__23909,i__23910,vec__23912,v,_,seq__23907__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23907,chunk__23908,count__23909,i__23910,vec__23912,v,_,seq__23907__$1,temp__4092__auto__))
);
{
var G__23921 = cljs.core.next.call(null,seq__23907__$1);
var G__23922 = null;
var G__23923 = 0;
var G__23924 = 0;
seq__23907 = G__23921;
chunk__23908 = G__23922;
count__23909 = G__23923;
i__23910 = G__23924;
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