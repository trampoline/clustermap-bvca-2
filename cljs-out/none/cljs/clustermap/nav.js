// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('domina.xpath');
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
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.call(null,"body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__24260_24266 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24261_24267 = null;var count__24262_24268 = 0;var i__24263_24269 = 0;while(true){
if((i__24263_24269 < count__24262_24268))
{var vec__24264_24270 = cljs.core._nth.call(null,chunk__24261_24267,i__24263_24269);var v_24271 = cljs.core.nth.call(null,vec__24264_24270,0,null);var body_class_24272 = cljs.core.nth.call(null,vec__24264_24270,1,null);if(cljs.core._EQ_.call(null,v_24271,view))
{domina.add_class_BANG_.call(null,body,body_class_24272);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24272);
}
{
var G__24273 = seq__24260_24266;
var G__24274 = chunk__24261_24267;
var G__24275 = count__24262_24268;
var G__24276 = (i__24263_24269 + 1);
seq__24260_24266 = G__24273;
chunk__24261_24267 = G__24274;
count__24262_24268 = G__24275;
i__24263_24269 = G__24276;
continue;
}
} else
{var temp__4126__auto___24277 = cljs.core.seq.call(null,seq__24260_24266);if(temp__4126__auto___24277)
{var seq__24260_24278__$1 = temp__4126__auto___24277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24260_24278__$1))
{var c__4295__auto___24279 = cljs.core.chunk_first.call(null,seq__24260_24278__$1);{
var G__24280 = cljs.core.chunk_rest.call(null,seq__24260_24278__$1);
var G__24281 = c__4295__auto___24279;
var G__24282 = cljs.core.count.call(null,c__4295__auto___24279);
var G__24283 = 0;
seq__24260_24266 = G__24280;
chunk__24261_24267 = G__24281;
count__24262_24268 = G__24282;
i__24263_24269 = G__24283;
continue;
}
} else
{var vec__24265_24284 = cljs.core.first.call(null,seq__24260_24278__$1);var v_24285 = cljs.core.nth.call(null,vec__24265_24284,0,null);var body_class_24286 = cljs.core.nth.call(null,vec__24265_24284,1,null);if(cljs.core._EQ_.call(null,v_24285,view))
{domina.add_class_BANG_.call(null,body,body_class_24286);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24286);
}
{
var G__24287 = cljs.core.next.call(null,seq__24260_24278__$1);
var G__24288 = null;
var G__24289 = 0;
var G__24290 = 0;
seq__24260_24266 = G__24287;
chunk__24261_24267 = G__24288;
count__24262_24268 = G__24289;
i__24263_24269 = G__24290;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__24297 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24298 = null;var count__24299 = 0;var i__24300 = 0;while(true){
if((i__24300 < count__24299))
{var vec__24301 = cljs.core._nth.call(null,chunk__24298,i__24300);var v = cljs.core.nth.call(null,vec__24301,0,null);var _ = cljs.core.nth.call(null,vec__24301,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__24297,chunk__24298,count__24299,i__24300,vec__24301,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__24297,chunk__24298,count__24299,i__24300,vec__24301,v,_))
);
{
var G__24303 = seq__24297;
var G__24304 = chunk__24298;
var G__24305 = count__24299;
var G__24306 = (i__24300 + 1);
seq__24297 = G__24303;
chunk__24298 = G__24304;
count__24299 = G__24305;
i__24300 = G__24306;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24297);if(temp__4126__auto__)
{var seq__24297__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24297__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__24297__$1);{
var G__24307 = cljs.core.chunk_rest.call(null,seq__24297__$1);
var G__24308 = c__4295__auto__;
var G__24309 = cljs.core.count.call(null,c__4295__auto__);
var G__24310 = 0;
seq__24297 = G__24307;
chunk__24298 = G__24308;
count__24299 = G__24309;
i__24300 = G__24310;
continue;
}
} else
{var vec__24302 = cljs.core.first.call(null,seq__24297__$1);var v = cljs.core.nth.call(null,vec__24302,0,null);var _ = cljs.core.nth.call(null,vec__24302,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__24297,chunk__24298,count__24299,i__24300,vec__24302,v,_,seq__24297__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__24297,chunk__24298,count__24299,i__24300,vec__24302,v,_,seq__24297__$1,temp__4126__auto__))
);
{
var G__24311 = cljs.core.next.call(null,seq__24297__$1);
var G__24312 = null;
var G__24313 = 0;
var G__24314 = 0;
seq__24297 = G__24311;
chunk__24298 = G__24312;
count__24299 = G__24313;
i__24300 = G__24314;
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