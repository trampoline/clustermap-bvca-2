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
var seq__12232_12238 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12233_12239 = null;var count__12234_12240 = 0;var i__12235_12241 = 0;while(true){
if((i__12235_12241 < count__12234_12240))
{var vec__12236_12242 = cljs.core._nth.call(null,chunk__12233_12239,i__12235_12241);var v_12243 = cljs.core.nth.call(null,vec__12236_12242,0,null);var body_class_12244 = cljs.core.nth.call(null,vec__12236_12242,1,null);if(cljs.core._EQ_.call(null,v_12243,view))
{domina.add_class_BANG_.call(null,body,body_class_12244);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12244);
}
{
var G__12245 = seq__12232_12238;
var G__12246 = chunk__12233_12239;
var G__12247 = count__12234_12240;
var G__12248 = (i__12235_12241 + 1);
seq__12232_12238 = G__12245;
chunk__12233_12239 = G__12246;
count__12234_12240 = G__12247;
i__12235_12241 = G__12248;
continue;
}
} else
{var temp__4092__auto___12249 = cljs.core.seq.call(null,seq__12232_12238);if(temp__4092__auto___12249)
{var seq__12232_12250__$1 = temp__4092__auto___12249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12232_12250__$1))
{var c__4148__auto___12251 = cljs.core.chunk_first.call(null,seq__12232_12250__$1);{
var G__12252 = cljs.core.chunk_rest.call(null,seq__12232_12250__$1);
var G__12253 = c__4148__auto___12251;
var G__12254 = cljs.core.count.call(null,c__4148__auto___12251);
var G__12255 = 0;
seq__12232_12238 = G__12252;
chunk__12233_12239 = G__12253;
count__12234_12240 = G__12254;
i__12235_12241 = G__12255;
continue;
}
} else
{var vec__12237_12256 = cljs.core.first.call(null,seq__12232_12250__$1);var v_12257 = cljs.core.nth.call(null,vec__12237_12256,0,null);var body_class_12258 = cljs.core.nth.call(null,vec__12237_12256,1,null);if(cljs.core._EQ_.call(null,v_12257,view))
{domina.add_class_BANG_.call(null,body,body_class_12258);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12258);
}
{
var G__12259 = cljs.core.next.call(null,seq__12232_12250__$1);
var G__12260 = null;
var G__12261 = 0;
var G__12262 = 0;
seq__12232_12238 = G__12259;
chunk__12233_12239 = G__12260;
count__12234_12240 = G__12261;
i__12235_12241 = G__12262;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12269 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12270 = null;var count__12271 = 0;var i__12272 = 0;while(true){
if((i__12272 < count__12271))
{var vec__12273 = cljs.core._nth.call(null,chunk__12270,i__12272);var v = cljs.core.nth.call(null,vec__12273,0,null);var _ = cljs.core.nth.call(null,vec__12273,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12269,chunk__12270,count__12271,i__12272,vec__12273,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12269,chunk__12270,count__12271,i__12272,vec__12273,v,_))
);
{
var G__12275 = seq__12269;
var G__12276 = chunk__12270;
var G__12277 = count__12271;
var G__12278 = (i__12272 + 1);
seq__12269 = G__12275;
chunk__12270 = G__12276;
count__12271 = G__12277;
i__12272 = G__12278;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12269);if(temp__4092__auto__)
{var seq__12269__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12269__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12269__$1);{
var G__12279 = cljs.core.chunk_rest.call(null,seq__12269__$1);
var G__12280 = c__4148__auto__;
var G__12281 = cljs.core.count.call(null,c__4148__auto__);
var G__12282 = 0;
seq__12269 = G__12279;
chunk__12270 = G__12280;
count__12271 = G__12281;
i__12272 = G__12282;
continue;
}
} else
{var vec__12274 = cljs.core.first.call(null,seq__12269__$1);var v = cljs.core.nth.call(null,vec__12274,0,null);var _ = cljs.core.nth.call(null,vec__12274,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12269,chunk__12270,count__12271,i__12272,vec__12274,v,_,seq__12269__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12269,chunk__12270,count__12271,i__12272,vec__12274,v,_,seq__12269__$1,temp__4092__auto__))
);
{
var G__12283 = cljs.core.next.call(null,seq__12269__$1);
var G__12284 = null;
var G__12285 = 0;
var G__12286 = 0;
seq__12269 = G__12283;
chunk__12270 = G__12284;
count__12271 = G__12285;
i__12272 = G__12286;
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