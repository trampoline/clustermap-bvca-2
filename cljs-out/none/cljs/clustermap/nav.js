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
var seq__52403_52409 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__52404_52410 = null;var count__52405_52411 = (0);var i__52406_52412 = (0);while(true){
if((i__52406_52412 < count__52405_52411))
{var vec__52407_52413 = cljs.core._nth.call(null,chunk__52404_52410,i__52406_52412);var v_52414 = cljs.core.nth.call(null,vec__52407_52413,(0),null);var body_class_52415 = cljs.core.nth.call(null,vec__52407_52413,(1),null);if(cljs.core._EQ_.call(null,v_52414,view))
{domina.add_class_BANG_.call(null,body,body_class_52415);
} else
{domina.remove_class_BANG_.call(null,body,body_class_52415);
}
{
var G__52416 = seq__52403_52409;
var G__52417 = chunk__52404_52410;
var G__52418 = count__52405_52411;
var G__52419 = (i__52406_52412 + (1));
seq__52403_52409 = G__52416;
chunk__52404_52410 = G__52417;
count__52405_52411 = G__52418;
i__52406_52412 = G__52419;
continue;
}
} else
{var temp__4126__auto___52420 = cljs.core.seq.call(null,seq__52403_52409);if(temp__4126__auto___52420)
{var seq__52403_52421__$1 = temp__4126__auto___52420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52403_52421__$1))
{var c__4299__auto___52422 = cljs.core.chunk_first.call(null,seq__52403_52421__$1);{
var G__52423 = cljs.core.chunk_rest.call(null,seq__52403_52421__$1);
var G__52424 = c__4299__auto___52422;
var G__52425 = cljs.core.count.call(null,c__4299__auto___52422);
var G__52426 = (0);
seq__52403_52409 = G__52423;
chunk__52404_52410 = G__52424;
count__52405_52411 = G__52425;
i__52406_52412 = G__52426;
continue;
}
} else
{var vec__52408_52427 = cljs.core.first.call(null,seq__52403_52421__$1);var v_52428 = cljs.core.nth.call(null,vec__52408_52427,(0),null);var body_class_52429 = cljs.core.nth.call(null,vec__52408_52427,(1),null);if(cljs.core._EQ_.call(null,v_52428,view))
{domina.add_class_BANG_.call(null,body,body_class_52429);
} else
{domina.remove_class_BANG_.call(null,body,body_class_52429);
}
{
var G__52430 = cljs.core.next.call(null,seq__52403_52421__$1);
var G__52431 = null;
var G__52432 = (0);
var G__52433 = (0);
seq__52403_52409 = G__52430;
chunk__52404_52410 = G__52431;
count__52405_52411 = G__52432;
i__52406_52412 = G__52433;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__52440 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__52441 = null;var count__52442 = (0);var i__52443 = (0);while(true){
if((i__52443 < count__52442))
{var vec__52444 = cljs.core._nth.call(null,chunk__52441,i__52443);var v = cljs.core.nth.call(null,vec__52444,(0),null);var _ = cljs.core.nth.call(null,vec__52444,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__52440,chunk__52441,count__52442,i__52443,vec__52444,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__52440,chunk__52441,count__52442,i__52443,vec__52444,v,_))
);
{
var G__52446 = seq__52440;
var G__52447 = chunk__52441;
var G__52448 = count__52442;
var G__52449 = (i__52443 + (1));
seq__52440 = G__52446;
chunk__52441 = G__52447;
count__52442 = G__52448;
i__52443 = G__52449;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52440);if(temp__4126__auto__)
{var seq__52440__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52440__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__52440__$1);{
var G__52450 = cljs.core.chunk_rest.call(null,seq__52440__$1);
var G__52451 = c__4299__auto__;
var G__52452 = cljs.core.count.call(null,c__4299__auto__);
var G__52453 = (0);
seq__52440 = G__52450;
chunk__52441 = G__52451;
count__52442 = G__52452;
i__52443 = G__52453;
continue;
}
} else
{var vec__52445 = cljs.core.first.call(null,seq__52440__$1);var v = cljs.core.nth.call(null,vec__52445,(0),null);var _ = cljs.core.nth.call(null,vec__52445,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__52440,chunk__52441,count__52442,i__52443,vec__52445,v,_,seq__52440__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__52440,chunk__52441,count__52442,i__52443,vec__52445,v,_,seq__52440__$1,temp__4126__auto__))
);
{
var G__52454 = cljs.core.next.call(null,seq__52440__$1);
var G__52455 = null;
var G__52456 = (0);
var G__52457 = (0);
seq__52440 = G__52454;
chunk__52441 = G__52455;
count__52442 = G__52456;
i__52443 = G__52457;
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