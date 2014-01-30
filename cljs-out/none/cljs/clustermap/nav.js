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
var seq__12031 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12032 = null;var count__12033 = 0;var i__12034 = 0;while(true){
if((i__12034 < count__12033))
{var vec__12035 = cljs.core._nth.call(null,chunk__12032,i__12034);var v = cljs.core.nth.call(null,vec__12035,0,null);var body_class = cljs.core.nth.call(null,vec__12035,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12037 = seq__12031;
var G__12038 = chunk__12032;
var G__12039 = count__12033;
var G__12040 = (i__12034 + 1);
seq__12031 = G__12037;
chunk__12032 = G__12038;
count__12033 = G__12039;
i__12034 = G__12040;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12031);if(temp__4092__auto__)
{var seq__12031__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12031__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12031__$1);{
var G__12041 = cljs.core.chunk_rest.call(null,seq__12031__$1);
var G__12042 = c__4148__auto__;
var G__12043 = cljs.core.count.call(null,c__4148__auto__);
var G__12044 = 0;
seq__12031 = G__12041;
chunk__12032 = G__12042;
count__12033 = G__12043;
i__12034 = G__12044;
continue;
}
} else
{var vec__12036 = cljs.core.first.call(null,seq__12031__$1);var v = cljs.core.nth.call(null,vec__12036,0,null);var body_class = cljs.core.nth.call(null,vec__12036,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12045 = cljs.core.next.call(null,seq__12031__$1);
var G__12046 = null;
var G__12047 = 0;
var G__12048 = 0;
seq__12031 = G__12045;
chunk__12032 = G__12046;
count__12033 = G__12047;
i__12034 = G__12048;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12055 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12056 = null;var count__12057 = 0;var i__12058 = 0;while(true){
if((i__12058 < count__12057))
{var vec__12059 = cljs.core._nth.call(null,chunk__12056,i__12058);var v = cljs.core.nth.call(null,vec__12059,0,null);var _ = cljs.core.nth.call(null,vec__12059,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12055,chunk__12056,count__12057,i__12058,vec__12059,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12055,chunk__12056,count__12057,i__12058,vec__12059,v,_))
);
{
var G__12061 = seq__12055;
var G__12062 = chunk__12056;
var G__12063 = count__12057;
var G__12064 = (i__12058 + 1);
seq__12055 = G__12061;
chunk__12056 = G__12062;
count__12057 = G__12063;
i__12058 = G__12064;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12055);if(temp__4092__auto__)
{var seq__12055__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12055__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12055__$1);{
var G__12065 = cljs.core.chunk_rest.call(null,seq__12055__$1);
var G__12066 = c__4148__auto__;
var G__12067 = cljs.core.count.call(null,c__4148__auto__);
var G__12068 = 0;
seq__12055 = G__12065;
chunk__12056 = G__12066;
count__12057 = G__12067;
i__12058 = G__12068;
continue;
}
} else
{var vec__12060 = cljs.core.first.call(null,seq__12055__$1);var v = cljs.core.nth.call(null,vec__12060,0,null);var _ = cljs.core.nth.call(null,vec__12060,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12055,chunk__12056,count__12057,i__12058,vec__12060,v,_,seq__12055__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12055,chunk__12056,count__12057,i__12058,vec__12060,v,_,seq__12055__$1,temp__4092__auto__))
);
{
var G__12069 = cljs.core.next.call(null,seq__12055__$1);
var G__12070 = null;
var G__12071 = 0;
var G__12072 = 0;
seq__12055 = G__12069;
chunk__12056 = G__12070;
count__12057 = G__12071;
i__12058 = G__12072;
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