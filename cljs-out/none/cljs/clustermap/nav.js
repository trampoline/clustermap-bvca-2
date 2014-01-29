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
var seq__12018 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12019 = null;var count__12020 = 0;var i__12021 = 0;while(true){
if((i__12021 < count__12020))
{var vec__12022 = cljs.core._nth.call(null,chunk__12019,i__12021);var v = cljs.core.nth.call(null,vec__12022,0,null);var body_class = cljs.core.nth.call(null,vec__12022,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12024 = seq__12018;
var G__12025 = chunk__12019;
var G__12026 = count__12020;
var G__12027 = (i__12021 + 1);
seq__12018 = G__12024;
chunk__12019 = G__12025;
count__12020 = G__12026;
i__12021 = G__12027;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12018);if(temp__4092__auto__)
{var seq__12018__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12018__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12018__$1);{
var G__12028 = cljs.core.chunk_rest.call(null,seq__12018__$1);
var G__12029 = c__4148__auto__;
var G__12030 = cljs.core.count.call(null,c__4148__auto__);
var G__12031 = 0;
seq__12018 = G__12028;
chunk__12019 = G__12029;
count__12020 = G__12030;
i__12021 = G__12031;
continue;
}
} else
{var vec__12023 = cljs.core.first.call(null,seq__12018__$1);var v = cljs.core.nth.call(null,vec__12023,0,null);var body_class = cljs.core.nth.call(null,vec__12023,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12032 = cljs.core.next.call(null,seq__12018__$1);
var G__12033 = null;
var G__12034 = 0;
var G__12035 = 0;
seq__12018 = G__12032;
chunk__12019 = G__12033;
count__12020 = G__12034;
i__12021 = G__12035;
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
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12042 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12043 = null;var count__12044 = 0;var i__12045 = 0;while(true){
if((i__12045 < count__12044))
{var vec__12046 = cljs.core._nth.call(null,chunk__12043,i__12045);var v = cljs.core.nth.call(null,vec__12046,0,null);var _ = cljs.core.nth.call(null,vec__12046,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12042,chunk__12043,count__12044,i__12045,vec__12046,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12042,chunk__12043,count__12044,i__12045,vec__12046,v,_))
);
{
var G__12048 = seq__12042;
var G__12049 = chunk__12043;
var G__12050 = count__12044;
var G__12051 = (i__12045 + 1);
seq__12042 = G__12048;
chunk__12043 = G__12049;
count__12044 = G__12050;
i__12045 = G__12051;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12042);if(temp__4092__auto__)
{var seq__12042__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12042__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12042__$1);{
var G__12052 = cljs.core.chunk_rest.call(null,seq__12042__$1);
var G__12053 = c__4148__auto__;
var G__12054 = cljs.core.count.call(null,c__4148__auto__);
var G__12055 = 0;
seq__12042 = G__12052;
chunk__12043 = G__12053;
count__12044 = G__12054;
i__12045 = G__12055;
continue;
}
} else
{var vec__12047 = cljs.core.first.call(null,seq__12042__$1);var v = cljs.core.nth.call(null,vec__12047,0,null);var _ = cljs.core.nth.call(null,vec__12047,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12042,chunk__12043,count__12044,i__12045,vec__12047,v,_,seq__12042__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12042,chunk__12043,count__12044,i__12045,vec__12047,v,_,seq__12042__$1,temp__4092__auto__))
);
{
var G__12056 = cljs.core.next.call(null,seq__12042__$1);
var G__12057 = null;
var G__12058 = 0;
var G__12059 = 0;
seq__12042 = G__12056;
chunk__12043 = G__12057;
count__12044 = G__12058;
i__12045 = G__12059;
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