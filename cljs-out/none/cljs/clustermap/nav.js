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
var seq__12144_12150 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12145_12151 = null;var count__12146_12152 = 0;var i__12147_12153 = 0;while(true){
if((i__12147_12153 < count__12146_12152))
{var vec__12148_12154 = cljs.core._nth.call(null,chunk__12145_12151,i__12147_12153);var v_12155 = cljs.core.nth.call(null,vec__12148_12154,0,null);var body_class_12156 = cljs.core.nth.call(null,vec__12148_12154,1,null);if(cljs.core._EQ_.call(null,v_12155,view))
{domina.add_class_BANG_.call(null,body,body_class_12156);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12156);
}
{
var G__12157 = seq__12144_12150;
var G__12158 = chunk__12145_12151;
var G__12159 = count__12146_12152;
var G__12160 = (i__12147_12153 + 1);
seq__12144_12150 = G__12157;
chunk__12145_12151 = G__12158;
count__12146_12152 = G__12159;
i__12147_12153 = G__12160;
continue;
}
} else
{var temp__4092__auto___12161 = cljs.core.seq.call(null,seq__12144_12150);if(temp__4092__auto___12161)
{var seq__12144_12162__$1 = temp__4092__auto___12161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12144_12162__$1))
{var c__4148__auto___12163 = cljs.core.chunk_first.call(null,seq__12144_12162__$1);{
var G__12164 = cljs.core.chunk_rest.call(null,seq__12144_12162__$1);
var G__12165 = c__4148__auto___12163;
var G__12166 = cljs.core.count.call(null,c__4148__auto___12163);
var G__12167 = 0;
seq__12144_12150 = G__12164;
chunk__12145_12151 = G__12165;
count__12146_12152 = G__12166;
i__12147_12153 = G__12167;
continue;
}
} else
{var vec__12149_12168 = cljs.core.first.call(null,seq__12144_12162__$1);var v_12169 = cljs.core.nth.call(null,vec__12149_12168,0,null);var body_class_12170 = cljs.core.nth.call(null,vec__12149_12168,1,null);if(cljs.core._EQ_.call(null,v_12169,view))
{domina.add_class_BANG_.call(null,body,body_class_12170);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12170);
}
{
var G__12171 = cljs.core.next.call(null,seq__12144_12162__$1);
var G__12172 = null;
var G__12173 = 0;
var G__12174 = 0;
seq__12144_12150 = G__12171;
chunk__12145_12151 = G__12172;
count__12146_12152 = G__12173;
i__12147_12153 = G__12174;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12181 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12182 = null;var count__12183 = 0;var i__12184 = 0;while(true){
if((i__12184 < count__12183))
{var vec__12185 = cljs.core._nth.call(null,chunk__12182,i__12184);var v = cljs.core.nth.call(null,vec__12185,0,null);var _ = cljs.core.nth.call(null,vec__12185,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12181,chunk__12182,count__12183,i__12184,vec__12185,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12181,chunk__12182,count__12183,i__12184,vec__12185,v,_))
);
{
var G__12187 = seq__12181;
var G__12188 = chunk__12182;
var G__12189 = count__12183;
var G__12190 = (i__12184 + 1);
seq__12181 = G__12187;
chunk__12182 = G__12188;
count__12183 = G__12189;
i__12184 = G__12190;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12181);if(temp__4092__auto__)
{var seq__12181__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12181__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12181__$1);{
var G__12191 = cljs.core.chunk_rest.call(null,seq__12181__$1);
var G__12192 = c__4148__auto__;
var G__12193 = cljs.core.count.call(null,c__4148__auto__);
var G__12194 = 0;
seq__12181 = G__12191;
chunk__12182 = G__12192;
count__12183 = G__12193;
i__12184 = G__12194;
continue;
}
} else
{var vec__12186 = cljs.core.first.call(null,seq__12181__$1);var v = cljs.core.nth.call(null,vec__12186,0,null);var _ = cljs.core.nth.call(null,vec__12186,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12181,chunk__12182,count__12183,i__12184,vec__12186,v,_,seq__12181__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12181,chunk__12182,count__12183,i__12184,vec__12186,v,_,seq__12181__$1,temp__4092__auto__))
);
{
var G__12195 = cljs.core.next.call(null,seq__12181__$1);
var G__12196 = null;
var G__12197 = 0;
var G__12198 = 0;
seq__12181 = G__12195;
chunk__12182 = G__12196;
count__12183 = G__12197;
i__12184 = G__12198;
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