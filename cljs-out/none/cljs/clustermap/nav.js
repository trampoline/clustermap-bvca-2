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
var seq__23910_23916 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23911_23917 = null;var count__23912_23918 = 0;var i__23913_23919 = 0;while(true){
if((i__23913_23919 < count__23912_23918))
{var vec__23914_23920 = cljs.core._nth.call(null,chunk__23911_23917,i__23913_23919);var v_23921 = cljs.core.nth.call(null,vec__23914_23920,0,null);var body_class_23922 = cljs.core.nth.call(null,vec__23914_23920,1,null);if(cljs.core._EQ_.call(null,v_23921,view))
{domina.add_class_BANG_.call(null,body,body_class_23922);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23922);
}
{
var G__23923 = seq__23910_23916;
var G__23924 = chunk__23911_23917;
var G__23925 = count__23912_23918;
var G__23926 = (i__23913_23919 + 1);
seq__23910_23916 = G__23923;
chunk__23911_23917 = G__23924;
count__23912_23918 = G__23925;
i__23913_23919 = G__23926;
continue;
}
} else
{var temp__4092__auto___23927 = cljs.core.seq.call(null,seq__23910_23916);if(temp__4092__auto___23927)
{var seq__23910_23928__$1 = temp__4092__auto___23927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23910_23928__$1))
{var c__4189__auto___23929 = cljs.core.chunk_first.call(null,seq__23910_23928__$1);{
var G__23930 = cljs.core.chunk_rest.call(null,seq__23910_23928__$1);
var G__23931 = c__4189__auto___23929;
var G__23932 = cljs.core.count.call(null,c__4189__auto___23929);
var G__23933 = 0;
seq__23910_23916 = G__23930;
chunk__23911_23917 = G__23931;
count__23912_23918 = G__23932;
i__23913_23919 = G__23933;
continue;
}
} else
{var vec__23915_23934 = cljs.core.first.call(null,seq__23910_23928__$1);var v_23935 = cljs.core.nth.call(null,vec__23915_23934,0,null);var body_class_23936 = cljs.core.nth.call(null,vec__23915_23934,1,null);if(cljs.core._EQ_.call(null,v_23935,view))
{domina.add_class_BANG_.call(null,body,body_class_23936);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23936);
}
{
var G__23937 = cljs.core.next.call(null,seq__23910_23928__$1);
var G__23938 = null;
var G__23939 = 0;
var G__23940 = 0;
seq__23910_23916 = G__23937;
chunk__23911_23917 = G__23938;
count__23912_23918 = G__23939;
i__23913_23919 = G__23940;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23947 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23948 = null;var count__23949 = 0;var i__23950 = 0;while(true){
if((i__23950 < count__23949))
{var vec__23951 = cljs.core._nth.call(null,chunk__23948,i__23950);var v = cljs.core.nth.call(null,vec__23951,0,null);var _ = cljs.core.nth.call(null,vec__23951,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23947,chunk__23948,count__23949,i__23950,vec__23951,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23947,chunk__23948,count__23949,i__23950,vec__23951,v,_))
);
{
var G__23953 = seq__23947;
var G__23954 = chunk__23948;
var G__23955 = count__23949;
var G__23956 = (i__23950 + 1);
seq__23947 = G__23953;
chunk__23948 = G__23954;
count__23949 = G__23955;
i__23950 = G__23956;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23947);if(temp__4092__auto__)
{var seq__23947__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23947__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__23947__$1);{
var G__23957 = cljs.core.chunk_rest.call(null,seq__23947__$1);
var G__23958 = c__4189__auto__;
var G__23959 = cljs.core.count.call(null,c__4189__auto__);
var G__23960 = 0;
seq__23947 = G__23957;
chunk__23948 = G__23958;
count__23949 = G__23959;
i__23950 = G__23960;
continue;
}
} else
{var vec__23952 = cljs.core.first.call(null,seq__23947__$1);var v = cljs.core.nth.call(null,vec__23952,0,null);var _ = cljs.core.nth.call(null,vec__23952,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23947,chunk__23948,count__23949,i__23950,vec__23952,v,_,seq__23947__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23947,chunk__23948,count__23949,i__23950,vec__23952,v,_,seq__23947__$1,temp__4092__auto__))
);
{
var G__23961 = cljs.core.next.call(null,seq__23947__$1);
var G__23962 = null;
var G__23963 = 0;
var G__23964 = 0;
seq__23947 = G__23961;
chunk__23948 = G__23962;
count__23949 = G__23963;
i__23950 = G__23964;
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