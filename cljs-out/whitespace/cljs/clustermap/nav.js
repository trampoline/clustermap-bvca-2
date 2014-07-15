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
var seq__13397_13403 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13398_13404 = null;var count__13399_13405 = (0);var i__13400_13406 = (0);while(true){
if((i__13400_13406 < count__13399_13405))
{var vec__13401_13407 = cljs.core._nth.call(null,chunk__13398_13404,i__13400_13406);var v_13408 = cljs.core.nth.call(null,vec__13401_13407,(0),null);var body_class_13409 = cljs.core.nth.call(null,vec__13401_13407,(1),null);if(cljs.core._EQ_.call(null,v_13408,view))
{domina.add_class_BANG_.call(null,body,body_class_13409);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13409);
}
{
var G__13410 = seq__13397_13403;
var G__13411 = chunk__13398_13404;
var G__13412 = count__13399_13405;
var G__13413 = (i__13400_13406 + (1));
seq__13397_13403 = G__13410;
chunk__13398_13404 = G__13411;
count__13399_13405 = G__13412;
i__13400_13406 = G__13413;
continue;
}
} else
{var temp__4126__auto___13414 = cljs.core.seq.call(null,seq__13397_13403);if(temp__4126__auto___13414)
{var seq__13397_13415__$1 = temp__4126__auto___13414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13397_13415__$1))
{var c__4299__auto___13416 = cljs.core.chunk_first.call(null,seq__13397_13415__$1);{
var G__13417 = cljs.core.chunk_rest.call(null,seq__13397_13415__$1);
var G__13418 = c__4299__auto___13416;
var G__13419 = cljs.core.count.call(null,c__4299__auto___13416);
var G__13420 = (0);
seq__13397_13403 = G__13417;
chunk__13398_13404 = G__13418;
count__13399_13405 = G__13419;
i__13400_13406 = G__13420;
continue;
}
} else
{var vec__13402_13421 = cljs.core.first.call(null,seq__13397_13415__$1);var v_13422 = cljs.core.nth.call(null,vec__13402_13421,(0),null);var body_class_13423 = cljs.core.nth.call(null,vec__13402_13421,(1),null);if(cljs.core._EQ_.call(null,v_13422,view))
{domina.add_class_BANG_.call(null,body,body_class_13423);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13423);
}
{
var G__13424 = cljs.core.next.call(null,seq__13397_13415__$1);
var G__13425 = null;
var G__13426 = (0);
var G__13427 = (0);
seq__13397_13403 = G__13424;
chunk__13398_13404 = G__13425;
count__13399_13405 = G__13426;
i__13400_13406 = G__13427;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13434 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13435 = null;var count__13436 = (0);var i__13437 = (0);while(true){
if((i__13437 < count__13436))
{var vec__13438 = cljs.core._nth.call(null,chunk__13435,i__13437);var v = cljs.core.nth.call(null,vec__13438,(0),null);var _ = cljs.core.nth.call(null,vec__13438,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13434,chunk__13435,count__13436,i__13437,vec__13438,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13434,chunk__13435,count__13436,i__13437,vec__13438,v,_))
);
{
var G__13440 = seq__13434;
var G__13441 = chunk__13435;
var G__13442 = count__13436;
var G__13443 = (i__13437 + (1));
seq__13434 = G__13440;
chunk__13435 = G__13441;
count__13436 = G__13442;
i__13437 = G__13443;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13434);if(temp__4126__auto__)
{var seq__13434__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13434__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13434__$1);{
var G__13444 = cljs.core.chunk_rest.call(null,seq__13434__$1);
var G__13445 = c__4299__auto__;
var G__13446 = cljs.core.count.call(null,c__4299__auto__);
var G__13447 = (0);
seq__13434 = G__13444;
chunk__13435 = G__13445;
count__13436 = G__13446;
i__13437 = G__13447;
continue;
}
} else
{var vec__13439 = cljs.core.first.call(null,seq__13434__$1);var v = cljs.core.nth.call(null,vec__13439,(0),null);var _ = cljs.core.nth.call(null,vec__13439,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13434,chunk__13435,count__13436,i__13437,vec__13439,v,_,seq__13434__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13434,chunk__13435,count__13436,i__13437,vec__13439,v,_,seq__13434__$1,temp__4126__auto__))
);
{
var G__13448 = cljs.core.next.call(null,seq__13434__$1);
var G__13449 = null;
var G__13450 = (0);
var G__13451 = (0);
seq__13434 = G__13448;
chunk__13435 = G__13449;
count__13436 = G__13450;
i__13437 = G__13451;
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
