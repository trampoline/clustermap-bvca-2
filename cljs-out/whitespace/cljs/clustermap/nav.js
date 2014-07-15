// Compiled by ClojureScript 0.0-2261
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
var seq__13275_13281 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13276_13282 = null;var count__13277_13283 = (0);var i__13278_13284 = (0);while(true){
if((i__13278_13284 < count__13277_13283))
{var vec__13279_13285 = cljs.core._nth.call(null,chunk__13276_13282,i__13278_13284);var v_13286 = cljs.core.nth.call(null,vec__13279_13285,(0),null);var body_class_13287 = cljs.core.nth.call(null,vec__13279_13285,(1),null);if(cljs.core._EQ_.call(null,v_13286,view))
{domina.add_class_BANG_.call(null,body,body_class_13287);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13287);
}
{
var G__13288 = seq__13275_13281;
var G__13289 = chunk__13276_13282;
var G__13290 = count__13277_13283;
var G__13291 = (i__13278_13284 + (1));
seq__13275_13281 = G__13288;
chunk__13276_13282 = G__13289;
count__13277_13283 = G__13290;
i__13278_13284 = G__13291;
continue;
}
} else
{var temp__4126__auto___13292 = cljs.core.seq.call(null,seq__13275_13281);if(temp__4126__auto___13292)
{var seq__13275_13293__$1 = temp__4126__auto___13292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13275_13293__$1))
{var c__4299__auto___13294 = cljs.core.chunk_first.call(null,seq__13275_13293__$1);{
var G__13295 = cljs.core.chunk_rest.call(null,seq__13275_13293__$1);
var G__13296 = c__4299__auto___13294;
var G__13297 = cljs.core.count.call(null,c__4299__auto___13294);
var G__13298 = (0);
seq__13275_13281 = G__13295;
chunk__13276_13282 = G__13296;
count__13277_13283 = G__13297;
i__13278_13284 = G__13298;
continue;
}
} else
{var vec__13280_13299 = cljs.core.first.call(null,seq__13275_13293__$1);var v_13300 = cljs.core.nth.call(null,vec__13280_13299,(0),null);var body_class_13301 = cljs.core.nth.call(null,vec__13280_13299,(1),null);if(cljs.core._EQ_.call(null,v_13300,view))
{domina.add_class_BANG_.call(null,body,body_class_13301);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13301);
}
{
var G__13302 = cljs.core.next.call(null,seq__13275_13293__$1);
var G__13303 = null;
var G__13304 = (0);
var G__13305 = (0);
seq__13275_13281 = G__13302;
chunk__13276_13282 = G__13303;
count__13277_13283 = G__13304;
i__13278_13284 = G__13305;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13312 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13313 = null;var count__13314 = (0);var i__13315 = (0);while(true){
if((i__13315 < count__13314))
{var vec__13316 = cljs.core._nth.call(null,chunk__13313,i__13315);var v = cljs.core.nth.call(null,vec__13316,(0),null);var _ = cljs.core.nth.call(null,vec__13316,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13312,chunk__13313,count__13314,i__13315,vec__13316,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13312,chunk__13313,count__13314,i__13315,vec__13316,v,_))
);
{
var G__13318 = seq__13312;
var G__13319 = chunk__13313;
var G__13320 = count__13314;
var G__13321 = (i__13315 + (1));
seq__13312 = G__13318;
chunk__13313 = G__13319;
count__13314 = G__13320;
i__13315 = G__13321;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13312);if(temp__4126__auto__)
{var seq__13312__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13312__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13312__$1);{
var G__13322 = cljs.core.chunk_rest.call(null,seq__13312__$1);
var G__13323 = c__4299__auto__;
var G__13324 = cljs.core.count.call(null,c__4299__auto__);
var G__13325 = (0);
seq__13312 = G__13322;
chunk__13313 = G__13323;
count__13314 = G__13324;
i__13315 = G__13325;
continue;
}
} else
{var vec__13317 = cljs.core.first.call(null,seq__13312__$1);var v = cljs.core.nth.call(null,vec__13317,(0),null);var _ = cljs.core.nth.call(null,vec__13317,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13312,chunk__13313,count__13314,i__13315,vec__13317,v,_,seq__13312__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13312,chunk__13313,count__13314,i__13315,vec__13317,v,_,seq__13312__$1,temp__4126__auto__))
);
{
var G__13326 = cljs.core.next.call(null,seq__13312__$1);
var G__13327 = null;
var G__13328 = (0);
var G__13329 = (0);
seq__13312 = G__13326;
chunk__13313 = G__13327;
count__13314 = G__13328;
i__13315 = G__13329;
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
