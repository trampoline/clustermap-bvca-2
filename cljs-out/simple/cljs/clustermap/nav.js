// Compiled by ClojureScript 0.0-2356
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
var seq__33256_33262 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33257_33263 = null;var count__33258_33264 = (0);var i__33259_33265 = (0);while(true){
if((i__33259_33265 < count__33258_33264))
{var vec__33260_33266 = cljs.core._nth.call(null,chunk__33257_33263,i__33259_33265);var v_33267 = cljs.core.nth.call(null,vec__33260_33266,(0),null);var body_class_33268 = cljs.core.nth.call(null,vec__33260_33266,(1),null);if(cljs.core._EQ_.call(null,v_33267,view))
{domina.add_class_BANG_.call(null,body,body_class_33268);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33268);
}
{
var G__33269 = seq__33256_33262;
var G__33270 = chunk__33257_33263;
var G__33271 = count__33258_33264;
var G__33272 = (i__33259_33265 + (1));
seq__33256_33262 = G__33269;
chunk__33257_33263 = G__33270;
count__33258_33264 = G__33271;
i__33259_33265 = G__33272;
continue;
}
} else
{var temp__4126__auto___33273 = cljs.core.seq.call(null,seq__33256_33262);if(temp__4126__auto___33273)
{var seq__33256_33274__$1 = temp__4126__auto___33273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33256_33274__$1))
{var c__4406__auto___33275 = cljs.core.chunk_first.call(null,seq__33256_33274__$1);{
var G__33276 = cljs.core.chunk_rest.call(null,seq__33256_33274__$1);
var G__33277 = c__4406__auto___33275;
var G__33278 = cljs.core.count.call(null,c__4406__auto___33275);
var G__33279 = (0);
seq__33256_33262 = G__33276;
chunk__33257_33263 = G__33277;
count__33258_33264 = G__33278;
i__33259_33265 = G__33279;
continue;
}
} else
{var vec__33261_33280 = cljs.core.first.call(null,seq__33256_33274__$1);var v_33281 = cljs.core.nth.call(null,vec__33261_33280,(0),null);var body_class_33282 = cljs.core.nth.call(null,vec__33261_33280,(1),null);if(cljs.core._EQ_.call(null,v_33281,view))
{domina.add_class_BANG_.call(null,body,body_class_33282);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33282);
}
{
var G__33283 = cljs.core.next.call(null,seq__33256_33274__$1);
var G__33284 = null;
var G__33285 = (0);
var G__33286 = (0);
seq__33256_33262 = G__33283;
chunk__33257_33263 = G__33284;
count__33258_33264 = G__33285;
i__33259_33265 = G__33286;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33293 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33294 = null;var count__33295 = (0);var i__33296 = (0);while(true){
if((i__33296 < count__33295))
{var vec__33297 = cljs.core._nth.call(null,chunk__33294,i__33296);var v = cljs.core.nth.call(null,vec__33297,(0),null);var _ = cljs.core.nth.call(null,vec__33297,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__33293,chunk__33294,count__33295,i__33296,vec__33297,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__33293,chunk__33294,count__33295,i__33296,vec__33297,v,_))
);
{
var G__33299 = seq__33293;
var G__33300 = chunk__33294;
var G__33301 = count__33295;
var G__33302 = (i__33296 + (1));
seq__33293 = G__33299;
chunk__33294 = G__33300;
count__33295 = G__33301;
i__33296 = G__33302;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33293);if(temp__4126__auto__)
{var seq__33293__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33293__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__33293__$1);{
var G__33303 = cljs.core.chunk_rest.call(null,seq__33293__$1);
var G__33304 = c__4406__auto__;
var G__33305 = cljs.core.count.call(null,c__4406__auto__);
var G__33306 = (0);
seq__33293 = G__33303;
chunk__33294 = G__33304;
count__33295 = G__33305;
i__33296 = G__33306;
continue;
}
} else
{var vec__33298 = cljs.core.first.call(null,seq__33293__$1);var v = cljs.core.nth.call(null,vec__33298,(0),null);var _ = cljs.core.nth.call(null,vec__33298,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__33293,chunk__33294,count__33295,i__33296,vec__33298,v,_,seq__33293__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__33293,chunk__33294,count__33295,i__33296,vec__33298,v,_,seq__33293__$1,temp__4126__auto__))
);
{
var G__33307 = cljs.core.next.call(null,seq__33293__$1);
var G__33308 = null;
var G__33309 = (0);
var G__33310 = (0);
seq__33293 = G__33307;
chunk__33294 = G__33308;
count__33295 = G__33309;
i__33296 = G__33310;
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
