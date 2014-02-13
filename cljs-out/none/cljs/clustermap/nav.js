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
var seq__12158_12164 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12159_12165 = null;var count__12160_12166 = 0;var i__12161_12167 = 0;while(true){
if((i__12161_12167 < count__12160_12166))
{var vec__12162_12168 = cljs.core._nth.call(null,chunk__12159_12165,i__12161_12167);var v_12169 = cljs.core.nth.call(null,vec__12162_12168,0,null);var body_class_12170 = cljs.core.nth.call(null,vec__12162_12168,1,null);if(cljs.core._EQ_.call(null,v_12169,view))
{domina.add_class_BANG_.call(null,body,body_class_12170);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12170);
}
{
var G__12171 = seq__12158_12164;
var G__12172 = chunk__12159_12165;
var G__12173 = count__12160_12166;
var G__12174 = (i__12161_12167 + 1);
seq__12158_12164 = G__12171;
chunk__12159_12165 = G__12172;
count__12160_12166 = G__12173;
i__12161_12167 = G__12174;
continue;
}
} else
{var temp__4092__auto___12175 = cljs.core.seq.call(null,seq__12158_12164);if(temp__4092__auto___12175)
{var seq__12158_12176__$1 = temp__4092__auto___12175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12158_12176__$1))
{var c__4148__auto___12177 = cljs.core.chunk_first.call(null,seq__12158_12176__$1);{
var G__12178 = cljs.core.chunk_rest.call(null,seq__12158_12176__$1);
var G__12179 = c__4148__auto___12177;
var G__12180 = cljs.core.count.call(null,c__4148__auto___12177);
var G__12181 = 0;
seq__12158_12164 = G__12178;
chunk__12159_12165 = G__12179;
count__12160_12166 = G__12180;
i__12161_12167 = G__12181;
continue;
}
} else
{var vec__12163_12182 = cljs.core.first.call(null,seq__12158_12176__$1);var v_12183 = cljs.core.nth.call(null,vec__12163_12182,0,null);var body_class_12184 = cljs.core.nth.call(null,vec__12163_12182,1,null);if(cljs.core._EQ_.call(null,v_12183,view))
{domina.add_class_BANG_.call(null,body,body_class_12184);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12184);
}
{
var G__12185 = cljs.core.next.call(null,seq__12158_12176__$1);
var G__12186 = null;
var G__12187 = 0;
var G__12188 = 0;
seq__12158_12164 = G__12185;
chunk__12159_12165 = G__12186;
count__12160_12166 = G__12187;
i__12161_12167 = G__12188;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12195 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12196 = null;var count__12197 = 0;var i__12198 = 0;while(true){
if((i__12198 < count__12197))
{var vec__12199 = cljs.core._nth.call(null,chunk__12196,i__12198);var v = cljs.core.nth.call(null,vec__12199,0,null);var _ = cljs.core.nth.call(null,vec__12199,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12195,chunk__12196,count__12197,i__12198,vec__12199,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12195,chunk__12196,count__12197,i__12198,vec__12199,v,_))
);
{
var G__12201 = seq__12195;
var G__12202 = chunk__12196;
var G__12203 = count__12197;
var G__12204 = (i__12198 + 1);
seq__12195 = G__12201;
chunk__12196 = G__12202;
count__12197 = G__12203;
i__12198 = G__12204;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12195);if(temp__4092__auto__)
{var seq__12195__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12195__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12195__$1);{
var G__12205 = cljs.core.chunk_rest.call(null,seq__12195__$1);
var G__12206 = c__4148__auto__;
var G__12207 = cljs.core.count.call(null,c__4148__auto__);
var G__12208 = 0;
seq__12195 = G__12205;
chunk__12196 = G__12206;
count__12197 = G__12207;
i__12198 = G__12208;
continue;
}
} else
{var vec__12200 = cljs.core.first.call(null,seq__12195__$1);var v = cljs.core.nth.call(null,vec__12200,0,null);var _ = cljs.core.nth.call(null,vec__12200,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12195,chunk__12196,count__12197,i__12198,vec__12200,v,_,seq__12195__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12195,chunk__12196,count__12197,i__12198,vec__12200,v,_,seq__12195__$1,temp__4092__auto__))
);
{
var G__12209 = cljs.core.next.call(null,seq__12195__$1);
var G__12210 = null;
var G__12211 = 0;
var G__12212 = 0;
seq__12195 = G__12209;
chunk__12196 = G__12210;
count__12197 = G__12211;
i__12198 = G__12212;
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