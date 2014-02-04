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
var seq__32242 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32243 = null;var count__32244 = 0;var i__32245 = 0;while(true){
if((i__32245 < count__32244))
{var vec__32246 = cljs.core._nth.call(null,chunk__32243,i__32245);var v = cljs.core.nth.call(null,vec__32246,0,null);var body_class = cljs.core.nth.call(null,vec__32246,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__32248 = seq__32242;
var G__32249 = chunk__32243;
var G__32250 = count__32244;
var G__32251 = (i__32245 + 1);
seq__32242 = G__32248;
chunk__32243 = G__32249;
count__32244 = G__32250;
i__32245 = G__32251;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32242);if(temp__4092__auto__)
{var seq__32242__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32242__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32242__$1);{
var G__32252 = cljs.core.chunk_rest.call(null,seq__32242__$1);
var G__32253 = c__4148__auto__;
var G__32254 = cljs.core.count.call(null,c__4148__auto__);
var G__32255 = 0;
seq__32242 = G__32252;
chunk__32243 = G__32253;
count__32244 = G__32254;
i__32245 = G__32255;
continue;
}
} else
{var vec__32247 = cljs.core.first.call(null,seq__32242__$1);var v = cljs.core.nth.call(null,vec__32247,0,null);var body_class = cljs.core.nth.call(null,vec__32247,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__32256 = cljs.core.next.call(null,seq__32242__$1);
var G__32257 = null;
var G__32258 = 0;
var G__32259 = 0;
seq__32242 = G__32256;
chunk__32243 = G__32257;
count__32244 = G__32258;
i__32245 = G__32259;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32266 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32267 = null;var count__32268 = 0;var i__32269 = 0;while(true){
if((i__32269 < count__32268))
{var vec__32270 = cljs.core._nth.call(null,chunk__32267,i__32269);var v = cljs.core.nth.call(null,vec__32270,0,null);var _ = cljs.core.nth.call(null,vec__32270,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32266,chunk__32267,count__32268,i__32269,vec__32270,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32266,chunk__32267,count__32268,i__32269,vec__32270,v,_))
);
{
var G__32272 = seq__32266;
var G__32273 = chunk__32267;
var G__32274 = count__32268;
var G__32275 = (i__32269 + 1);
seq__32266 = G__32272;
chunk__32267 = G__32273;
count__32268 = G__32274;
i__32269 = G__32275;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32266);if(temp__4092__auto__)
{var seq__32266__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32266__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32266__$1);{
var G__32276 = cljs.core.chunk_rest.call(null,seq__32266__$1);
var G__32277 = c__4148__auto__;
var G__32278 = cljs.core.count.call(null,c__4148__auto__);
var G__32279 = 0;
seq__32266 = G__32276;
chunk__32267 = G__32277;
count__32268 = G__32278;
i__32269 = G__32279;
continue;
}
} else
{var vec__32271 = cljs.core.first.call(null,seq__32266__$1);var v = cljs.core.nth.call(null,vec__32271,0,null);var _ = cljs.core.nth.call(null,vec__32271,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32266,chunk__32267,count__32268,i__32269,vec__32271,v,_,seq__32266__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32266,chunk__32267,count__32268,i__32269,vec__32271,v,_,seq__32266__$1,temp__4092__auto__))
);
{
var G__32280 = cljs.core.next.call(null,seq__32266__$1);
var G__32281 = null;
var G__32282 = 0;
var G__32283 = 0;
seq__32266 = G__32280;
chunk__32267 = G__32281;
count__32268 = G__32282;
i__32269 = G__32283;
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
