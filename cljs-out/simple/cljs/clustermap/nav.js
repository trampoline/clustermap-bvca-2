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
var seq__24246_24252 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24247_24253 = null;var count__24248_24254 = 0;var i__24249_24255 = 0;while(true){
if((i__24249_24255 < count__24248_24254))
{var vec__24250_24256 = cljs.core._nth.call(null,chunk__24247_24253,i__24249_24255);var v_24257 = cljs.core.nth.call(null,vec__24250_24256,0,null);var body_class_24258 = cljs.core.nth.call(null,vec__24250_24256,1,null);if(cljs.core._EQ_.call(null,v_24257,view))
{domina.add_class_BANG_.call(null,body,body_class_24258);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24258);
}
{
var G__24259 = seq__24246_24252;
var G__24260 = chunk__24247_24253;
var G__24261 = count__24248_24254;
var G__24262 = (i__24249_24255 + 1);
seq__24246_24252 = G__24259;
chunk__24247_24253 = G__24260;
count__24248_24254 = G__24261;
i__24249_24255 = G__24262;
continue;
}
} else
{var temp__4126__auto___24263 = cljs.core.seq.call(null,seq__24246_24252);if(temp__4126__auto___24263)
{var seq__24246_24264__$1 = temp__4126__auto___24263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24246_24264__$1))
{var c__4297__auto___24265 = cljs.core.chunk_first.call(null,seq__24246_24264__$1);{
var G__24266 = cljs.core.chunk_rest.call(null,seq__24246_24264__$1);
var G__24267 = c__4297__auto___24265;
var G__24268 = cljs.core.count.call(null,c__4297__auto___24265);
var G__24269 = 0;
seq__24246_24252 = G__24266;
chunk__24247_24253 = G__24267;
count__24248_24254 = G__24268;
i__24249_24255 = G__24269;
continue;
}
} else
{var vec__24251_24270 = cljs.core.first.call(null,seq__24246_24264__$1);var v_24271 = cljs.core.nth.call(null,vec__24251_24270,0,null);var body_class_24272 = cljs.core.nth.call(null,vec__24251_24270,1,null);if(cljs.core._EQ_.call(null,v_24271,view))
{domina.add_class_BANG_.call(null,body,body_class_24272);
} else
{domina.remove_class_BANG_.call(null,body,body_class_24272);
}
{
var G__24273 = cljs.core.next.call(null,seq__24246_24264__$1);
var G__24274 = null;
var G__24275 = 0;
var G__24276 = 0;
seq__24246_24252 = G__24273;
chunk__24247_24253 = G__24274;
count__24248_24254 = G__24275;
i__24249_24255 = G__24276;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__24283 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__24284 = null;var count__24285 = 0;var i__24286 = 0;while(true){
if((i__24286 < count__24285))
{var vec__24287 = cljs.core._nth.call(null,chunk__24284,i__24286);var v = cljs.core.nth.call(null,vec__24287,0,null);var _ = cljs.core.nth.call(null,vec__24287,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__24283,chunk__24284,count__24285,i__24286,vec__24287,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__24283,chunk__24284,count__24285,i__24286,vec__24287,v,_))
);
{
var G__24289 = seq__24283;
var G__24290 = chunk__24284;
var G__24291 = count__24285;
var G__24292 = (i__24286 + 1);
seq__24283 = G__24289;
chunk__24284 = G__24290;
count__24285 = G__24291;
i__24286 = G__24292;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24283);if(temp__4126__auto__)
{var seq__24283__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24283__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__24283__$1);{
var G__24293 = cljs.core.chunk_rest.call(null,seq__24283__$1);
var G__24294 = c__4297__auto__;
var G__24295 = cljs.core.count.call(null,c__4297__auto__);
var G__24296 = 0;
seq__24283 = G__24293;
chunk__24284 = G__24294;
count__24285 = G__24295;
i__24286 = G__24296;
continue;
}
} else
{var vec__24288 = cljs.core.first.call(null,seq__24283__$1);var v = cljs.core.nth.call(null,vec__24288,0,null);var _ = cljs.core.nth.call(null,vec__24288,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__24283,chunk__24284,count__24285,i__24286,vec__24288,v,_,seq__24283__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__24283,chunk__24284,count__24285,i__24286,vec__24288,v,_,seq__24283__$1,temp__4126__auto__))
);
{
var G__24297 = cljs.core.next.call(null,seq__24283__$1);
var G__24298 = null;
var G__24299 = 0;
var G__24300 = 0;
seq__24283 = G__24297;
chunk__24284 = G__24298;
count__24285 = G__24299;
i__24286 = G__24300;
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
