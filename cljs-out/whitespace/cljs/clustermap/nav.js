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
var seq__14253_14259 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14254_14260 = null;var count__14255_14261 = (0);var i__14256_14262 = (0);while(true){
if((i__14256_14262 < count__14255_14261))
{var vec__14257_14263 = cljs.core._nth.call(null,chunk__14254_14260,i__14256_14262);var v_14264 = cljs.core.nth.call(null,vec__14257_14263,(0),null);var body_class_14265 = cljs.core.nth.call(null,vec__14257_14263,(1),null);if(cljs.core._EQ_.call(null,v_14264,view))
{domina.add_class_BANG_.call(null,body,body_class_14265);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14265);
}
{
var G__14266 = seq__14253_14259;
var G__14267 = chunk__14254_14260;
var G__14268 = count__14255_14261;
var G__14269 = (i__14256_14262 + (1));
seq__14253_14259 = G__14266;
chunk__14254_14260 = G__14267;
count__14255_14261 = G__14268;
i__14256_14262 = G__14269;
continue;
}
} else
{var temp__4126__auto___14270 = cljs.core.seq.call(null,seq__14253_14259);if(temp__4126__auto___14270)
{var seq__14253_14271__$1 = temp__4126__auto___14270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14253_14271__$1))
{var c__4297__auto___14272 = cljs.core.chunk_first.call(null,seq__14253_14271__$1);{
var G__14273 = cljs.core.chunk_rest.call(null,seq__14253_14271__$1);
var G__14274 = c__4297__auto___14272;
var G__14275 = cljs.core.count.call(null,c__4297__auto___14272);
var G__14276 = (0);
seq__14253_14259 = G__14273;
chunk__14254_14260 = G__14274;
count__14255_14261 = G__14275;
i__14256_14262 = G__14276;
continue;
}
} else
{var vec__14258_14277 = cljs.core.first.call(null,seq__14253_14271__$1);var v_14278 = cljs.core.nth.call(null,vec__14258_14277,(0),null);var body_class_14279 = cljs.core.nth.call(null,vec__14258_14277,(1),null);if(cljs.core._EQ_.call(null,v_14278,view))
{domina.add_class_BANG_.call(null,body,body_class_14279);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14279);
}
{
var G__14280 = cljs.core.next.call(null,seq__14253_14271__$1);
var G__14281 = null;
var G__14282 = (0);
var G__14283 = (0);
seq__14253_14259 = G__14280;
chunk__14254_14260 = G__14281;
count__14255_14261 = G__14282;
i__14256_14262 = G__14283;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14290 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14291 = null;var count__14292 = (0);var i__14293 = (0);while(true){
if((i__14293 < count__14292))
{var vec__14294 = cljs.core._nth.call(null,chunk__14291,i__14293);var v = cljs.core.nth.call(null,vec__14294,(0),null);var _ = cljs.core.nth.call(null,vec__14294,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14290,chunk__14291,count__14292,i__14293,vec__14294,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14290,chunk__14291,count__14292,i__14293,vec__14294,v,_))
);
{
var G__14296 = seq__14290;
var G__14297 = chunk__14291;
var G__14298 = count__14292;
var G__14299 = (i__14293 + (1));
seq__14290 = G__14296;
chunk__14291 = G__14297;
count__14292 = G__14298;
i__14293 = G__14299;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14290);if(temp__4126__auto__)
{var seq__14290__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14290__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__14290__$1);{
var G__14300 = cljs.core.chunk_rest.call(null,seq__14290__$1);
var G__14301 = c__4297__auto__;
var G__14302 = cljs.core.count.call(null,c__4297__auto__);
var G__14303 = (0);
seq__14290 = G__14300;
chunk__14291 = G__14301;
count__14292 = G__14302;
i__14293 = G__14303;
continue;
}
} else
{var vec__14295 = cljs.core.first.call(null,seq__14290__$1);var v = cljs.core.nth.call(null,vec__14295,(0),null);var _ = cljs.core.nth.call(null,vec__14295,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14290,chunk__14291,count__14292,i__14293,vec__14295,v,_,seq__14290__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14290,chunk__14291,count__14292,i__14293,vec__14295,v,_,seq__14290__$1,temp__4126__auto__))
);
{
var G__14304 = cljs.core.next.call(null,seq__14290__$1);
var G__14305 = null;
var G__14306 = (0);
var G__14307 = (0);
seq__14290 = G__14304;
chunk__14291 = G__14305;
count__14292 = G__14306;
i__14293 = G__14307;
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
