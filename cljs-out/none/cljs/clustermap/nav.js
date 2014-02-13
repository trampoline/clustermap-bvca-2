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
var seq__12168_12174 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12169_12175 = null;var count__12170_12176 = 0;var i__12171_12177 = 0;while(true){
if((i__12171_12177 < count__12170_12176))
{var vec__12172_12178 = cljs.core._nth.call(null,chunk__12169_12175,i__12171_12177);var v_12179 = cljs.core.nth.call(null,vec__12172_12178,0,null);var body_class_12180 = cljs.core.nth.call(null,vec__12172_12178,1,null);if(cljs.core._EQ_.call(null,v_12179,view))
{domina.add_class_BANG_.call(null,body,body_class_12180);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12180);
}
{
var G__12181 = seq__12168_12174;
var G__12182 = chunk__12169_12175;
var G__12183 = count__12170_12176;
var G__12184 = (i__12171_12177 + 1);
seq__12168_12174 = G__12181;
chunk__12169_12175 = G__12182;
count__12170_12176 = G__12183;
i__12171_12177 = G__12184;
continue;
}
} else
{var temp__4092__auto___12185 = cljs.core.seq.call(null,seq__12168_12174);if(temp__4092__auto___12185)
{var seq__12168_12186__$1 = temp__4092__auto___12185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12168_12186__$1))
{var c__4148__auto___12187 = cljs.core.chunk_first.call(null,seq__12168_12186__$1);{
var G__12188 = cljs.core.chunk_rest.call(null,seq__12168_12186__$1);
var G__12189 = c__4148__auto___12187;
var G__12190 = cljs.core.count.call(null,c__4148__auto___12187);
var G__12191 = 0;
seq__12168_12174 = G__12188;
chunk__12169_12175 = G__12189;
count__12170_12176 = G__12190;
i__12171_12177 = G__12191;
continue;
}
} else
{var vec__12173_12192 = cljs.core.first.call(null,seq__12168_12186__$1);var v_12193 = cljs.core.nth.call(null,vec__12173_12192,0,null);var body_class_12194 = cljs.core.nth.call(null,vec__12173_12192,1,null);if(cljs.core._EQ_.call(null,v_12193,view))
{domina.add_class_BANG_.call(null,body,body_class_12194);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12194);
}
{
var G__12195 = cljs.core.next.call(null,seq__12168_12186__$1);
var G__12196 = null;
var G__12197 = 0;
var G__12198 = 0;
seq__12168_12174 = G__12195;
chunk__12169_12175 = G__12196;
count__12170_12176 = G__12197;
i__12171_12177 = G__12198;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12205 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12206 = null;var count__12207 = 0;var i__12208 = 0;while(true){
if((i__12208 < count__12207))
{var vec__12209 = cljs.core._nth.call(null,chunk__12206,i__12208);var v = cljs.core.nth.call(null,vec__12209,0,null);var _ = cljs.core.nth.call(null,vec__12209,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12205,chunk__12206,count__12207,i__12208,vec__12209,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12205,chunk__12206,count__12207,i__12208,vec__12209,v,_))
);
{
var G__12211 = seq__12205;
var G__12212 = chunk__12206;
var G__12213 = count__12207;
var G__12214 = (i__12208 + 1);
seq__12205 = G__12211;
chunk__12206 = G__12212;
count__12207 = G__12213;
i__12208 = G__12214;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12205);if(temp__4092__auto__)
{var seq__12205__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12205__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12205__$1);{
var G__12215 = cljs.core.chunk_rest.call(null,seq__12205__$1);
var G__12216 = c__4148__auto__;
var G__12217 = cljs.core.count.call(null,c__4148__auto__);
var G__12218 = 0;
seq__12205 = G__12215;
chunk__12206 = G__12216;
count__12207 = G__12217;
i__12208 = G__12218;
continue;
}
} else
{var vec__12210 = cljs.core.first.call(null,seq__12205__$1);var v = cljs.core.nth.call(null,vec__12210,0,null);var _ = cljs.core.nth.call(null,vec__12210,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12205,chunk__12206,count__12207,i__12208,vec__12210,v,_,seq__12205__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12205,chunk__12206,count__12207,i__12208,vec__12210,v,_,seq__12205__$1,temp__4092__auto__))
);
{
var G__12219 = cljs.core.next.call(null,seq__12205__$1);
var G__12220 = null;
var G__12221 = 0;
var G__12222 = 0;
seq__12205 = G__12219;
chunk__12206 = G__12220;
count__12207 = G__12221;
i__12208 = G__12222;
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