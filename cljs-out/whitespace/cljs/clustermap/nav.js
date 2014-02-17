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
var seq__33438_33444 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33439_33445 = null;var count__33440_33446 = 0;var i__33441_33447 = 0;while(true){
if((i__33441_33447 < count__33440_33446))
{var vec__33442_33448 = cljs.core._nth.call(null,chunk__33439_33445,i__33441_33447);var v_33449 = cljs.core.nth.call(null,vec__33442_33448,0,null);var body_class_33450 = cljs.core.nth.call(null,vec__33442_33448,1,null);if(cljs.core._EQ_.call(null,v_33449,view))
{domina.add_class_BANG_.call(null,body,body_class_33450);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33450);
}
{
var G__33451 = seq__33438_33444;
var G__33452 = chunk__33439_33445;
var G__33453 = count__33440_33446;
var G__33454 = (i__33441_33447 + 1);
seq__33438_33444 = G__33451;
chunk__33439_33445 = G__33452;
count__33440_33446 = G__33453;
i__33441_33447 = G__33454;
continue;
}
} else
{var temp__4092__auto___33455 = cljs.core.seq.call(null,seq__33438_33444);if(temp__4092__auto___33455)
{var seq__33438_33456__$1 = temp__4092__auto___33455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33438_33456__$1))
{var c__4148__auto___33457 = cljs.core.chunk_first.call(null,seq__33438_33456__$1);{
var G__33458 = cljs.core.chunk_rest.call(null,seq__33438_33456__$1);
var G__33459 = c__4148__auto___33457;
var G__33460 = cljs.core.count.call(null,c__4148__auto___33457);
var G__33461 = 0;
seq__33438_33444 = G__33458;
chunk__33439_33445 = G__33459;
count__33440_33446 = G__33460;
i__33441_33447 = G__33461;
continue;
}
} else
{var vec__33443_33462 = cljs.core.first.call(null,seq__33438_33456__$1);var v_33463 = cljs.core.nth.call(null,vec__33443_33462,0,null);var body_class_33464 = cljs.core.nth.call(null,vec__33443_33462,1,null);if(cljs.core._EQ_.call(null,v_33463,view))
{domina.add_class_BANG_.call(null,body,body_class_33464);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33464);
}
{
var G__33465 = cljs.core.next.call(null,seq__33438_33456__$1);
var G__33466 = null;
var G__33467 = 0;
var G__33468 = 0;
seq__33438_33444 = G__33465;
chunk__33439_33445 = G__33466;
count__33440_33446 = G__33467;
i__33441_33447 = G__33468;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33475 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33476 = null;var count__33477 = 0;var i__33478 = 0;while(true){
if((i__33478 < count__33477))
{var vec__33479 = cljs.core._nth.call(null,chunk__33476,i__33478);var v = cljs.core.nth.call(null,vec__33479,0,null);var _ = cljs.core.nth.call(null,vec__33479,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33475,chunk__33476,count__33477,i__33478,vec__33479,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33475,chunk__33476,count__33477,i__33478,vec__33479,v,_))
);
{
var G__33481 = seq__33475;
var G__33482 = chunk__33476;
var G__33483 = count__33477;
var G__33484 = (i__33478 + 1);
seq__33475 = G__33481;
chunk__33476 = G__33482;
count__33477 = G__33483;
i__33478 = G__33484;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33475);if(temp__4092__auto__)
{var seq__33475__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33475__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33475__$1);{
var G__33485 = cljs.core.chunk_rest.call(null,seq__33475__$1);
var G__33486 = c__4148__auto__;
var G__33487 = cljs.core.count.call(null,c__4148__auto__);
var G__33488 = 0;
seq__33475 = G__33485;
chunk__33476 = G__33486;
count__33477 = G__33487;
i__33478 = G__33488;
continue;
}
} else
{var vec__33480 = cljs.core.first.call(null,seq__33475__$1);var v = cljs.core.nth.call(null,vec__33480,0,null);var _ = cljs.core.nth.call(null,vec__33480,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33475,chunk__33476,count__33477,i__33478,vec__33480,v,_,seq__33475__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33475,chunk__33476,count__33477,i__33478,vec__33480,v,_,seq__33475__$1,temp__4092__auto__))
);
{
var G__33489 = cljs.core.next.call(null,seq__33475__$1);
var G__33490 = null;
var G__33491 = 0;
var G__33492 = 0;
seq__33475 = G__33489;
chunk__33476 = G__33490;
count__33477 = G__33491;
i__33478 = G__33492;
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
