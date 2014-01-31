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
var seq__12027 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12028 = null;var count__12029 = 0;var i__12030 = 0;while(true){
if((i__12030 < count__12029))
{var vec__12031 = cljs.core._nth.call(null,chunk__12028,i__12030);var v = cljs.core.nth.call(null,vec__12031,0,null);var body_class = cljs.core.nth.call(null,vec__12031,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12033 = seq__12027;
var G__12034 = chunk__12028;
var G__12035 = count__12029;
var G__12036 = (i__12030 + 1);
seq__12027 = G__12033;
chunk__12028 = G__12034;
count__12029 = G__12035;
i__12030 = G__12036;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12027);if(temp__4092__auto__)
{var seq__12027__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12027__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12027__$1);{
var G__12037 = cljs.core.chunk_rest.call(null,seq__12027__$1);
var G__12038 = c__4148__auto__;
var G__12039 = cljs.core.count.call(null,c__4148__auto__);
var G__12040 = 0;
seq__12027 = G__12037;
chunk__12028 = G__12038;
count__12029 = G__12039;
i__12030 = G__12040;
continue;
}
} else
{var vec__12032 = cljs.core.first.call(null,seq__12027__$1);var v = cljs.core.nth.call(null,vec__12032,0,null);var body_class = cljs.core.nth.call(null,vec__12032,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12041 = cljs.core.next.call(null,seq__12027__$1);
var G__12042 = null;
var G__12043 = 0;
var G__12044 = 0;
seq__12027 = G__12041;
chunk__12028 = G__12042;
count__12029 = G__12043;
i__12030 = G__12044;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12051 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12052 = null;var count__12053 = 0;var i__12054 = 0;while(true){
if((i__12054 < count__12053))
{var vec__12055 = cljs.core._nth.call(null,chunk__12052,i__12054);var v = cljs.core.nth.call(null,vec__12055,0,null);var _ = cljs.core.nth.call(null,vec__12055,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12051,chunk__12052,count__12053,i__12054,vec__12055,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12051,chunk__12052,count__12053,i__12054,vec__12055,v,_))
);
{
var G__12057 = seq__12051;
var G__12058 = chunk__12052;
var G__12059 = count__12053;
var G__12060 = (i__12054 + 1);
seq__12051 = G__12057;
chunk__12052 = G__12058;
count__12053 = G__12059;
i__12054 = G__12060;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12051);if(temp__4092__auto__)
{var seq__12051__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12051__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12051__$1);{
var G__12061 = cljs.core.chunk_rest.call(null,seq__12051__$1);
var G__12062 = c__4148__auto__;
var G__12063 = cljs.core.count.call(null,c__4148__auto__);
var G__12064 = 0;
seq__12051 = G__12061;
chunk__12052 = G__12062;
count__12053 = G__12063;
i__12054 = G__12064;
continue;
}
} else
{var vec__12056 = cljs.core.first.call(null,seq__12051__$1);var v = cljs.core.nth.call(null,vec__12056,0,null);var _ = cljs.core.nth.call(null,vec__12056,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12051,chunk__12052,count__12053,i__12054,vec__12056,v,_,seq__12051__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12051,chunk__12052,count__12053,i__12054,vec__12056,v,_,seq__12051__$1,temp__4092__auto__))
);
{
var G__12065 = cljs.core.next.call(null,seq__12051__$1);
var G__12066 = null;
var G__12067 = 0;
var G__12068 = 0;
seq__12051 = G__12065;
chunk__12052 = G__12066;
count__12053 = G__12067;
i__12054 = G__12068;
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