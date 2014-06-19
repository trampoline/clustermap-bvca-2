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
var seq__24244_24250 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24245_24251 = null;var count__24246_24252 = 0;var i__24247_24253 = 0;while(true){
if((i__24247_24253 < count__24246_24252))
{var vec__24248_24254 = cljs.core._nth.call(null,chunk__24245_24251,i__24247_24253);var v_24255 = cljs.core.nth.call(null,vec__24248_24254,0,null);var body_class_24256 = cljs.core.nth.call(null,vec__24248_24254,1,null);if(cljs.core._EQ_.call(null,v_24255,view))
{domina.add_class_BANG_.call(null,body,body_class_24256);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24256);
}
{
var G__24257 = seq__24244_24250;
var G__24258 = chunk__24245_24251;
var G__24259 = count__24246_24252;
var G__24260 = (i__24247_24253 + 1);
seq__24244_24250 = G__24257;
chunk__24245_24251 = G__24258;
count__24246_24252 = G__24259;
i__24247_24253 = G__24260;
continue;
}
} else
{var temp__4126__auto___24261 = cljs.core.seq.call(null,seq__24244_24250);if(temp__4126__auto___24261)
{var seq__24244_24262__$1 = temp__4126__auto___24261;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24244_24262__$1))
{var c__4295__auto___24263 = cljs.core.chunk_first.call(null,seq__24244_24262__$1);{
var G__24264 = cljs.core.chunk_rest.call(null,seq__24244_24262__$1);
var G__24265 = c__4295__auto___24263;
var G__24266 = cljs.core.count.call(null,c__4295__auto___24263);
var G__24267 = 0;
seq__24244_24250 = G__24264;
chunk__24245_24251 = G__24265;
count__24246_24252 = G__24266;
i__24247_24253 = G__24267;
continue;
}
} else
{var vec__24249_24268 = cljs.core.first.call(null,seq__24244_24262__$1);var v_24269 = cljs.core.nth.call(null,vec__24249_24268,0,null);var body_class_24270 = cljs.core.nth.call(null,vec__24249_24268,1,null);if(cljs.core._EQ_.call(null,v_24269,view))
{domina.add_class_BANG_.call(null,body,body_class_24270);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24270);
}
{
var G__24271 = cljs.core.next.call(null,seq__24244_24262__$1);
var G__24272 = null;
var G__24273 = 0;
var G__24274 = 0;
seq__24244_24250 = G__24271;
chunk__24245_24251 = G__24272;
count__24246_24252 = G__24273;
i__24247_24253 = G__24274;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__24281 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24282 = null;var count__24283 = 0;var i__24284 = 0;while(true){
if((i__24284 < count__24283))
{var vec__24285 = cljs.core._nth.call(null,chunk__24282,i__24284);var v = cljs.core.nth.call(null,vec__24285,0,null);var _ = cljs.core.nth.call(null,vec__24285,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__24281,chunk__24282,count__24283,i__24284,vec__24285,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__24281,chunk__24282,count__24283,i__24284,vec__24285,v,_))
);
{
var G__24287 = seq__24281;
var G__24288 = chunk__24282;
var G__24289 = count__24283;
var G__24290 = (i__24284 + 1);
seq__24281 = G__24287;
chunk__24282 = G__24288;
count__24283 = G__24289;
i__24284 = G__24290;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24281);if(temp__4126__auto__)
{var seq__24281__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24281__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__24281__$1);{
var G__24291 = cljs.core.chunk_rest.call(null,seq__24281__$1);
var G__24292 = c__4295__auto__;
var G__24293 = cljs.core.count.call(null,c__4295__auto__);
var G__24294 = 0;
seq__24281 = G__24291;
chunk__24282 = G__24292;
count__24283 = G__24293;
i__24284 = G__24294;
continue;
}
} else
{var vec__24286 = cljs.core.first.call(null,seq__24281__$1);var v = cljs.core.nth.call(null,vec__24286,0,null);var _ = cljs.core.nth.call(null,vec__24286,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__24281,chunk__24282,count__24283,i__24284,vec__24286,v,_,seq__24281__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__24281,chunk__24282,count__24283,i__24284,vec__24286,v,_,seq__24281__$1,temp__4126__auto__))
);
{
var G__24295 = cljs.core.next.call(null,seq__24281__$1);
var G__24296 = null;
var G__24297 = 0;
var G__24298 = 0;
seq__24281 = G__24295;
chunk__24282 = G__24296;
count__24283 = G__24297;
i__24284 = G__24298;
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