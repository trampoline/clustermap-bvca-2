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
var seq__33432_33438 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33433_33439 = null;var count__33434_33440 = 0;var i__33435_33441 = 0;while(true){
if((i__33435_33441 < count__33434_33440))
{var vec__33436_33442 = cljs.core._nth.call(null,chunk__33433_33439,i__33435_33441);var v_33443 = cljs.core.nth.call(null,vec__33436_33442,0,null);var body_class_33444 = cljs.core.nth.call(null,vec__33436_33442,1,null);if(cljs.core._EQ_.call(null,v_33443,view))
{domina.add_class_BANG_.call(null,body,body_class_33444);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33444);
}
{
var G__33445 = seq__33432_33438;
var G__33446 = chunk__33433_33439;
var G__33447 = count__33434_33440;
var G__33448 = (i__33435_33441 + 1);
seq__33432_33438 = G__33445;
chunk__33433_33439 = G__33446;
count__33434_33440 = G__33447;
i__33435_33441 = G__33448;
continue;
}
} else
{var temp__4092__auto___33449 = cljs.core.seq.call(null,seq__33432_33438);if(temp__4092__auto___33449)
{var seq__33432_33450__$1 = temp__4092__auto___33449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33432_33450__$1))
{var c__4148__auto___33451 = cljs.core.chunk_first.call(null,seq__33432_33450__$1);{
var G__33452 = cljs.core.chunk_rest.call(null,seq__33432_33450__$1);
var G__33453 = c__4148__auto___33451;
var G__33454 = cljs.core.count.call(null,c__4148__auto___33451);
var G__33455 = 0;
seq__33432_33438 = G__33452;
chunk__33433_33439 = G__33453;
count__33434_33440 = G__33454;
i__33435_33441 = G__33455;
continue;
}
} else
{var vec__33437_33456 = cljs.core.first.call(null,seq__33432_33450__$1);var v_33457 = cljs.core.nth.call(null,vec__33437_33456,0,null);var body_class_33458 = cljs.core.nth.call(null,vec__33437_33456,1,null);if(cljs.core._EQ_.call(null,v_33457,view))
{domina.add_class_BANG_.call(null,body,body_class_33458);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33458);
}
{
var G__33459 = cljs.core.next.call(null,seq__33432_33450__$1);
var G__33460 = null;
var G__33461 = 0;
var G__33462 = 0;
seq__33432_33438 = G__33459;
chunk__33433_33439 = G__33460;
count__33434_33440 = G__33461;
i__33435_33441 = G__33462;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33469 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33470 = null;var count__33471 = 0;var i__33472 = 0;while(true){
if((i__33472 < count__33471))
{var vec__33473 = cljs.core._nth.call(null,chunk__33470,i__33472);var v = cljs.core.nth.call(null,vec__33473,0,null);var _ = cljs.core.nth.call(null,vec__33473,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33469,chunk__33470,count__33471,i__33472,vec__33473,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33469,chunk__33470,count__33471,i__33472,vec__33473,v,_))
);
{
var G__33475 = seq__33469;
var G__33476 = chunk__33470;
var G__33477 = count__33471;
var G__33478 = (i__33472 + 1);
seq__33469 = G__33475;
chunk__33470 = G__33476;
count__33471 = G__33477;
i__33472 = G__33478;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33469);if(temp__4092__auto__)
{var seq__33469__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33469__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33469__$1);{
var G__33479 = cljs.core.chunk_rest.call(null,seq__33469__$1);
var G__33480 = c__4148__auto__;
var G__33481 = cljs.core.count.call(null,c__4148__auto__);
var G__33482 = 0;
seq__33469 = G__33479;
chunk__33470 = G__33480;
count__33471 = G__33481;
i__33472 = G__33482;
continue;
}
} else
{var vec__33474 = cljs.core.first.call(null,seq__33469__$1);var v = cljs.core.nth.call(null,vec__33474,0,null);var _ = cljs.core.nth.call(null,vec__33474,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33469,chunk__33470,count__33471,i__33472,vec__33474,v,_,seq__33469__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33469,chunk__33470,count__33471,i__33472,vec__33474,v,_,seq__33469__$1,temp__4092__auto__))
);
{
var G__33483 = cljs.core.next.call(null,seq__33469__$1);
var G__33484 = null;
var G__33485 = 0;
var G__33486 = 0;
seq__33469 = G__33483;
chunk__33470 = G__33484;
count__33471 = G__33485;
i__33472 = G__33486;
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
