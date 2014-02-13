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
var seq__32432_32438 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32433_32439 = null;var count__32434_32440 = 0;var i__32435_32441 = 0;while(true){
if((i__32435_32441 < count__32434_32440))
{var vec__32436_32442 = cljs.core._nth.call(null,chunk__32433_32439,i__32435_32441);var v_32443 = cljs.core.nth.call(null,vec__32436_32442,0,null);var body_class_32444 = cljs.core.nth.call(null,vec__32436_32442,1,null);if(cljs.core._EQ_.call(null,v_32443,view))
{domina.add_class_BANG_.call(null,body,body_class_32444);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32444);
}
{
var G__32445 = seq__32432_32438;
var G__32446 = chunk__32433_32439;
var G__32447 = count__32434_32440;
var G__32448 = (i__32435_32441 + 1);
seq__32432_32438 = G__32445;
chunk__32433_32439 = G__32446;
count__32434_32440 = G__32447;
i__32435_32441 = G__32448;
continue;
}
} else
{var temp__4092__auto___32449 = cljs.core.seq.call(null,seq__32432_32438);if(temp__4092__auto___32449)
{var seq__32432_32450__$1 = temp__4092__auto___32449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32432_32450__$1))
{var c__4148__auto___32451 = cljs.core.chunk_first.call(null,seq__32432_32450__$1);{
var G__32452 = cljs.core.chunk_rest.call(null,seq__32432_32450__$1);
var G__32453 = c__4148__auto___32451;
var G__32454 = cljs.core.count.call(null,c__4148__auto___32451);
var G__32455 = 0;
seq__32432_32438 = G__32452;
chunk__32433_32439 = G__32453;
count__32434_32440 = G__32454;
i__32435_32441 = G__32455;
continue;
}
} else
{var vec__32437_32456 = cljs.core.first.call(null,seq__32432_32450__$1);var v_32457 = cljs.core.nth.call(null,vec__32437_32456,0,null);var body_class_32458 = cljs.core.nth.call(null,vec__32437_32456,1,null);if(cljs.core._EQ_.call(null,v_32457,view))
{domina.add_class_BANG_.call(null,body,body_class_32458);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32458);
}
{
var G__32459 = cljs.core.next.call(null,seq__32432_32450__$1);
var G__32460 = null;
var G__32461 = 0;
var G__32462 = 0;
seq__32432_32438 = G__32459;
chunk__32433_32439 = G__32460;
count__32434_32440 = G__32461;
i__32435_32441 = G__32462;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32469 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32470 = null;var count__32471 = 0;var i__32472 = 0;while(true){
if((i__32472 < count__32471))
{var vec__32473 = cljs.core._nth.call(null,chunk__32470,i__32472);var v = cljs.core.nth.call(null,vec__32473,0,null);var _ = cljs.core.nth.call(null,vec__32473,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32469,chunk__32470,count__32471,i__32472,vec__32473,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32469,chunk__32470,count__32471,i__32472,vec__32473,v,_))
);
{
var G__32475 = seq__32469;
var G__32476 = chunk__32470;
var G__32477 = count__32471;
var G__32478 = (i__32472 + 1);
seq__32469 = G__32475;
chunk__32470 = G__32476;
count__32471 = G__32477;
i__32472 = G__32478;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32469);if(temp__4092__auto__)
{var seq__32469__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32469__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32469__$1);{
var G__32479 = cljs.core.chunk_rest.call(null,seq__32469__$1);
var G__32480 = c__4148__auto__;
var G__32481 = cljs.core.count.call(null,c__4148__auto__);
var G__32482 = 0;
seq__32469 = G__32479;
chunk__32470 = G__32480;
count__32471 = G__32481;
i__32472 = G__32482;
continue;
}
} else
{var vec__32474 = cljs.core.first.call(null,seq__32469__$1);var v = cljs.core.nth.call(null,vec__32474,0,null);var _ = cljs.core.nth.call(null,vec__32474,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32469,chunk__32470,count__32471,i__32472,vec__32474,v,_,seq__32469__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32469,chunk__32470,count__32471,i__32472,vec__32474,v,_,seq__32469__$1,temp__4092__auto__))
);
{
var G__32483 = cljs.core.next.call(null,seq__32469__$1);
var G__32484 = null;
var G__32485 = 0;
var G__32486 = 0;
seq__32469 = G__32483;
chunk__32470 = G__32484;
count__32471 = G__32485;
i__32472 = G__32486;
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
