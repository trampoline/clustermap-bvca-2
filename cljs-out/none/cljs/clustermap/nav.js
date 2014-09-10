// Compiled by ClojureScript 0.0-2268
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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
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
var seq__51237_51243 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__51238_51244 = null;var count__51239_51245 = (0);var i__51240_51246 = (0);while(true){
if((i__51240_51246 < count__51239_51245))
{var vec__51241_51247 = cljs.core._nth.call(null,chunk__51238_51244,i__51240_51246);var v_51248 = cljs.core.nth.call(null,vec__51241_51247,(0),null);var body_class_51249 = cljs.core.nth.call(null,vec__51241_51247,(1),null);if(cljs.core._EQ_.call(null,v_51248,view))
{domina.add_class_BANG_.call(null,body,body_class_51249);
} else
{domina.remove_class_BANG_.call(null,body,body_class_51249);
}
{
var G__51250 = seq__51237_51243;
var G__51251 = chunk__51238_51244;
var G__51252 = count__51239_51245;
var G__51253 = (i__51240_51246 + (1));
seq__51237_51243 = G__51250;
chunk__51238_51244 = G__51251;
count__51239_51245 = G__51252;
i__51240_51246 = G__51253;
continue;
}
} else
{var temp__4126__auto___51254 = cljs.core.seq.call(null,seq__51237_51243);if(temp__4126__auto___51254)
{var seq__51237_51255__$1 = temp__4126__auto___51254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51237_51255__$1))
{var c__4297__auto___51256 = cljs.core.chunk_first.call(null,seq__51237_51255__$1);{
var G__51257 = cljs.core.chunk_rest.call(null,seq__51237_51255__$1);
var G__51258 = c__4297__auto___51256;
var G__51259 = cljs.core.count.call(null,c__4297__auto___51256);
var G__51260 = (0);
seq__51237_51243 = G__51257;
chunk__51238_51244 = G__51258;
count__51239_51245 = G__51259;
i__51240_51246 = G__51260;
continue;
}
} else
{var vec__51242_51261 = cljs.core.first.call(null,seq__51237_51255__$1);var v_51262 = cljs.core.nth.call(null,vec__51242_51261,(0),null);var body_class_51263 = cljs.core.nth.call(null,vec__51242_51261,(1),null);if(cljs.core._EQ_.call(null,v_51262,view))
{domina.add_class_BANG_.call(null,body,body_class_51263);
} else
{domina.remove_class_BANG_.call(null,body,body_class_51263);
}
{
var G__51264 = cljs.core.next.call(null,seq__51237_51255__$1);
var G__51265 = null;
var G__51266 = (0);
var G__51267 = (0);
seq__51237_51243 = G__51264;
chunk__51238_51244 = G__51265;
count__51239_51245 = G__51266;
i__51240_51246 = G__51267;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__51274 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__51275 = null;var count__51276 = (0);var i__51277 = (0);while(true){
if((i__51277 < count__51276))
{var vec__51278 = cljs.core._nth.call(null,chunk__51275,i__51277);var v = cljs.core.nth.call(null,vec__51278,(0),null);var _ = cljs.core.nth.call(null,vec__51278,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__51274,chunk__51275,count__51276,i__51277,vec__51278,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__51274,chunk__51275,count__51276,i__51277,vec__51278,v,_))
);
{
var G__51280 = seq__51274;
var G__51281 = chunk__51275;
var G__51282 = count__51276;
var G__51283 = (i__51277 + (1));
seq__51274 = G__51280;
chunk__51275 = G__51281;
count__51276 = G__51282;
i__51277 = G__51283;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51274);if(temp__4126__auto__)
{var seq__51274__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51274__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__51274__$1);{
var G__51284 = cljs.core.chunk_rest.call(null,seq__51274__$1);
var G__51285 = c__4297__auto__;
var G__51286 = cljs.core.count.call(null,c__4297__auto__);
var G__51287 = (0);
seq__51274 = G__51284;
chunk__51275 = G__51285;
count__51276 = G__51286;
i__51277 = G__51287;
continue;
}
} else
{var vec__51279 = cljs.core.first.call(null,seq__51274__$1);var v = cljs.core.nth.call(null,vec__51279,(0),null);var _ = cljs.core.nth.call(null,vec__51279,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__51274,chunk__51275,count__51276,i__51277,vec__51279,v,_,seq__51274__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__51274,chunk__51275,count__51276,i__51277,vec__51279,v,_,seq__51274__$1,temp__4126__auto__))
);
{
var G__51288 = cljs.core.next.call(null,seq__51274__$1);
var G__51289 = null;
var G__51290 = (0);
var G__51291 = (0);
seq__51274 = G__51288;
chunk__51275 = G__51289;
count__51276 = G__51290;
i__51277 = G__51291;
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