// Compiled by ClojureScript 0.0-2322
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
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

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
var seq__59289_59295 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__59290_59296 = null;var count__59291_59297 = (0);var i__59292_59298 = (0);while(true){
if((i__59292_59298 < count__59291_59297))
{var vec__59293_59299 = cljs.core._nth.call(null,chunk__59290_59296,i__59292_59298);var v_59300 = cljs.core.nth.call(null,vec__59293_59299,(0),null);var body_class_59301 = cljs.core.nth.call(null,vec__59293_59299,(1),null);if(cljs.core._EQ_.call(null,v_59300,view))
{domina.add_class_BANG_.call(null,body,body_class_59301);
} else
{domina.remove_class_BANG_.call(null,body,body_class_59301);
}
{
var G__59302 = seq__59289_59295;
var G__59303 = chunk__59290_59296;
var G__59304 = count__59291_59297;
var G__59305 = (i__59292_59298 + (1));
seq__59289_59295 = G__59302;
chunk__59290_59296 = G__59303;
count__59291_59297 = G__59304;
i__59292_59298 = G__59305;
continue;
}
} else
{var temp__4126__auto___59306 = cljs.core.seq.call(null,seq__59289_59295);if(temp__4126__auto___59306)
{var seq__59289_59307__$1 = temp__4126__auto___59306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59289_59307__$1))
{var c__4314__auto___59308 = cljs.core.chunk_first.call(null,seq__59289_59307__$1);{
var G__59309 = cljs.core.chunk_rest.call(null,seq__59289_59307__$1);
var G__59310 = c__4314__auto___59308;
var G__59311 = cljs.core.count.call(null,c__4314__auto___59308);
var G__59312 = (0);
seq__59289_59295 = G__59309;
chunk__59290_59296 = G__59310;
count__59291_59297 = G__59311;
i__59292_59298 = G__59312;
continue;
}
} else
{var vec__59294_59313 = cljs.core.first.call(null,seq__59289_59307__$1);var v_59314 = cljs.core.nth.call(null,vec__59294_59313,(0),null);var body_class_59315 = cljs.core.nth.call(null,vec__59294_59313,(1),null);if(cljs.core._EQ_.call(null,v_59314,view))
{domina.add_class_BANG_.call(null,body,body_class_59315);
} else
{domina.remove_class_BANG_.call(null,body,body_class_59315);
}
{
var G__59316 = cljs.core.next.call(null,seq__59289_59307__$1);
var G__59317 = null;
var G__59318 = (0);
var G__59319 = (0);
seq__59289_59295 = G__59316;
chunk__59290_59296 = G__59317;
count__59291_59297 = G__59318;
i__59292_59298 = G__59319;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__59326 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__59327 = null;var count__59328 = (0);var i__59329 = (0);while(true){
if((i__59329 < count__59328))
{var vec__59330 = cljs.core._nth.call(null,chunk__59327,i__59329);var v = cljs.core.nth.call(null,vec__59330,(0),null);var _ = cljs.core.nth.call(null,vec__59330,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__59326,chunk__59327,count__59328,i__59329,vec__59330,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__59326,chunk__59327,count__59328,i__59329,vec__59330,v,_))
);
{
var G__59332 = seq__59326;
var G__59333 = chunk__59327;
var G__59334 = count__59328;
var G__59335 = (i__59329 + (1));
seq__59326 = G__59332;
chunk__59327 = G__59333;
count__59328 = G__59334;
i__59329 = G__59335;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__59326);if(temp__4126__auto__)
{var seq__59326__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59326__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__59326__$1);{
var G__59336 = cljs.core.chunk_rest.call(null,seq__59326__$1);
var G__59337 = c__4314__auto__;
var G__59338 = cljs.core.count.call(null,c__4314__auto__);
var G__59339 = (0);
seq__59326 = G__59336;
chunk__59327 = G__59337;
count__59328 = G__59338;
i__59329 = G__59339;
continue;
}
} else
{var vec__59331 = cljs.core.first.call(null,seq__59326__$1);var v = cljs.core.nth.call(null,vec__59331,(0),null);var _ = cljs.core.nth.call(null,vec__59331,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__59326,chunk__59327,count__59328,i__59329,vec__59331,v,_,seq__59326__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__59326,chunk__59327,count__59328,i__59329,vec__59331,v,_,seq__59326__$1,temp__4126__auto__))
);
{
var G__59340 = cljs.core.next.call(null,seq__59326__$1);
var G__59341 = null;
var G__59342 = (0);
var G__59343 = (0);
seq__59326 = G__59340;
chunk__59327 = G__59341;
count__59328 = G__59342;
i__59329 = G__59343;
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