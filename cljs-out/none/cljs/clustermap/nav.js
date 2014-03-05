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
var seq__23918_23924 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23919_23925 = null;var count__23920_23926 = 0;var i__23921_23927 = 0;while(true){
if((i__23921_23927 < count__23920_23926))
{var vec__23922_23928 = cljs.core._nth.call(null,chunk__23919_23925,i__23921_23927);var v_23929 = cljs.core.nth.call(null,vec__23922_23928,0,null);var body_class_23930 = cljs.core.nth.call(null,vec__23922_23928,1,null);if(cljs.core._EQ_.call(null,v_23929,view))
{domina.add_class_BANG_.call(null,body,body_class_23930);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23930);
}
{
var G__23931 = seq__23918_23924;
var G__23932 = chunk__23919_23925;
var G__23933 = count__23920_23926;
var G__23934 = (i__23921_23927 + 1);
seq__23918_23924 = G__23931;
chunk__23919_23925 = G__23932;
count__23920_23926 = G__23933;
i__23921_23927 = G__23934;
continue;
}
} else
{var temp__4092__auto___23935 = cljs.core.seq.call(null,seq__23918_23924);if(temp__4092__auto___23935)
{var seq__23918_23936__$1 = temp__4092__auto___23935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23918_23936__$1))
{var c__4189__auto___23937 = cljs.core.chunk_first.call(null,seq__23918_23936__$1);{
var G__23938 = cljs.core.chunk_rest.call(null,seq__23918_23936__$1);
var G__23939 = c__4189__auto___23937;
var G__23940 = cljs.core.count.call(null,c__4189__auto___23937);
var G__23941 = 0;
seq__23918_23924 = G__23938;
chunk__23919_23925 = G__23939;
count__23920_23926 = G__23940;
i__23921_23927 = G__23941;
continue;
}
} else
{var vec__23923_23942 = cljs.core.first.call(null,seq__23918_23936__$1);var v_23943 = cljs.core.nth.call(null,vec__23923_23942,0,null);var body_class_23944 = cljs.core.nth.call(null,vec__23923_23942,1,null);if(cljs.core._EQ_.call(null,v_23943,view))
{domina.add_class_BANG_.call(null,body,body_class_23944);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23944);
}
{
var G__23945 = cljs.core.next.call(null,seq__23918_23936__$1);
var G__23946 = null;
var G__23947 = 0;
var G__23948 = 0;
seq__23918_23924 = G__23945;
chunk__23919_23925 = G__23946;
count__23920_23926 = G__23947;
i__23921_23927 = G__23948;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23955 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23956 = null;var count__23957 = 0;var i__23958 = 0;while(true){
if((i__23958 < count__23957))
{var vec__23959 = cljs.core._nth.call(null,chunk__23956,i__23958);var v = cljs.core.nth.call(null,vec__23959,0,null);var _ = cljs.core.nth.call(null,vec__23959,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23955,chunk__23956,count__23957,i__23958,vec__23959,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23955,chunk__23956,count__23957,i__23958,vec__23959,v,_))
);
{
var G__23961 = seq__23955;
var G__23962 = chunk__23956;
var G__23963 = count__23957;
var G__23964 = (i__23958 + 1);
seq__23955 = G__23961;
chunk__23956 = G__23962;
count__23957 = G__23963;
i__23958 = G__23964;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23955);if(temp__4092__auto__)
{var seq__23955__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23955__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__23955__$1);{
var G__23965 = cljs.core.chunk_rest.call(null,seq__23955__$1);
var G__23966 = c__4189__auto__;
var G__23967 = cljs.core.count.call(null,c__4189__auto__);
var G__23968 = 0;
seq__23955 = G__23965;
chunk__23956 = G__23966;
count__23957 = G__23967;
i__23958 = G__23968;
continue;
}
} else
{var vec__23960 = cljs.core.first.call(null,seq__23955__$1);var v = cljs.core.nth.call(null,vec__23960,0,null);var _ = cljs.core.nth.call(null,vec__23960,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23955,chunk__23956,count__23957,i__23958,vec__23960,v,_,seq__23955__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23955,chunk__23956,count__23957,i__23958,vec__23960,v,_,seq__23955__$1,temp__4092__auto__))
);
{
var G__23969 = cljs.core.next.call(null,seq__23955__$1);
var G__23970 = null;
var G__23971 = 0;
var G__23972 = 0;
seq__23955 = G__23969;
chunk__23956 = G__23970;
count__23957 = G__23971;
i__23958 = G__23972;
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