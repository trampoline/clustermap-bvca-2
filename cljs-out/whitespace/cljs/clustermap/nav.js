// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
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
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__32462_32468 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32463_32469 = null;var count__32464_32470 = 0;var i__32465_32471 = 0;while(true){
if((i__32465_32471 < count__32464_32470))
{var vec__32466_32472 = cljs.core._nth.call(null,chunk__32463_32469,i__32465_32471);var v_32473 = cljs.core.nth.call(null,vec__32466_32472,0,null);var body_class_32474 = cljs.core.nth.call(null,vec__32466_32472,1,null);if(cljs.core._EQ_.call(null,v_32473,view))
{domina.add_class_BANG_.call(null,body,body_class_32474);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32474);
}
{
var G__32475 = seq__32462_32468;
var G__32476 = chunk__32463_32469;
var G__32477 = count__32464_32470;
var G__32478 = (i__32465_32471 + 1);
seq__32462_32468 = G__32475;
chunk__32463_32469 = G__32476;
count__32464_32470 = G__32477;
i__32465_32471 = G__32478;
continue;
}
} else
{var temp__4092__auto___32479 = cljs.core.seq.call(null,seq__32462_32468);if(temp__4092__auto___32479)
{var seq__32462_32480__$1 = temp__4092__auto___32479;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32462_32480__$1))
{var c__4148__auto___32481 = cljs.core.chunk_first.call(null,seq__32462_32480__$1);{
var G__32482 = cljs.core.chunk_rest.call(null,seq__32462_32480__$1);
var G__32483 = c__4148__auto___32481;
var G__32484 = cljs.core.count.call(null,c__4148__auto___32481);
var G__32485 = 0;
seq__32462_32468 = G__32482;
chunk__32463_32469 = G__32483;
count__32464_32470 = G__32484;
i__32465_32471 = G__32485;
continue;
}
} else
{var vec__32467_32486 = cljs.core.first.call(null,seq__32462_32480__$1);var v_32487 = cljs.core.nth.call(null,vec__32467_32486,0,null);var body_class_32488 = cljs.core.nth.call(null,vec__32467_32486,1,null);if(cljs.core._EQ_.call(null,v_32487,view))
{domina.add_class_BANG_.call(null,body,body_class_32488);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32488);
}
{
var G__32489 = cljs.core.next.call(null,seq__32462_32480__$1);
var G__32490 = null;
var G__32491 = 0;
var G__32492 = 0;
seq__32462_32468 = G__32489;
chunk__32463_32469 = G__32490;
count__32464_32470 = G__32491;
i__32465_32471 = G__32492;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32499 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32500 = null;var count__32501 = 0;var i__32502 = 0;while(true){
if((i__32502 < count__32501))
{var vec__32503 = cljs.core._nth.call(null,chunk__32500,i__32502);var v = cljs.core.nth.call(null,vec__32503,0,null);var _ = cljs.core.nth.call(null,vec__32503,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32499,chunk__32500,count__32501,i__32502,vec__32503,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32499,chunk__32500,count__32501,i__32502,vec__32503,v,_))
);
{
var G__32505 = seq__32499;
var G__32506 = chunk__32500;
var G__32507 = count__32501;
var G__32508 = (i__32502 + 1);
seq__32499 = G__32505;
chunk__32500 = G__32506;
count__32501 = G__32507;
i__32502 = G__32508;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32499);if(temp__4092__auto__)
{var seq__32499__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32499__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32499__$1);{
var G__32509 = cljs.core.chunk_rest.call(null,seq__32499__$1);
var G__32510 = c__4148__auto__;
var G__32511 = cljs.core.count.call(null,c__4148__auto__);
var G__32512 = 0;
seq__32499 = G__32509;
chunk__32500 = G__32510;
count__32501 = G__32511;
i__32502 = G__32512;
continue;
}
} else
{var vec__32504 = cljs.core.first.call(null,seq__32499__$1);var v = cljs.core.nth.call(null,vec__32504,0,null);var _ = cljs.core.nth.call(null,vec__32504,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32499,chunk__32500,count__32501,i__32502,vec__32504,v,_,seq__32499__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32499,chunk__32500,count__32501,i__32502,vec__32504,v,_,seq__32499__$1,temp__4092__auto__))
);
{
var G__32513 = cljs.core.next.call(null,seq__32499__$1);
var G__32514 = null;
var G__32515 = 0;
var G__32516 = 0;
seq__32499 = G__32513;
chunk__32500 = G__32514;
count__32501 = G__32515;
i__32502 = G__32516;
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
