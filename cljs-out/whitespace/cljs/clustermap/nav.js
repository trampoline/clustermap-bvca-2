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
var seq__33360_33366 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33361_33367 = null;var count__33362_33368 = 0;var i__33363_33369 = 0;while(true){
if((i__33363_33369 < count__33362_33368))
{var vec__33364_33370 = cljs.core._nth.call(null,chunk__33361_33367,i__33363_33369);var v_33371 = cljs.core.nth.call(null,vec__33364_33370,0,null);var body_class_33372 = cljs.core.nth.call(null,vec__33364_33370,1,null);if(cljs.core._EQ_.call(null,v_33371,view))
{domina.add_class_BANG_.call(null,body,body_class_33372);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33372);
}
{
var G__33373 = seq__33360_33366;
var G__33374 = chunk__33361_33367;
var G__33375 = count__33362_33368;
var G__33376 = (i__33363_33369 + 1);
seq__33360_33366 = G__33373;
chunk__33361_33367 = G__33374;
count__33362_33368 = G__33375;
i__33363_33369 = G__33376;
continue;
}
} else
{var temp__4092__auto___33377 = cljs.core.seq.call(null,seq__33360_33366);if(temp__4092__auto___33377)
{var seq__33360_33378__$1 = temp__4092__auto___33377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33360_33378__$1))
{var c__4148__auto___33379 = cljs.core.chunk_first.call(null,seq__33360_33378__$1);{
var G__33380 = cljs.core.chunk_rest.call(null,seq__33360_33378__$1);
var G__33381 = c__4148__auto___33379;
var G__33382 = cljs.core.count.call(null,c__4148__auto___33379);
var G__33383 = 0;
seq__33360_33366 = G__33380;
chunk__33361_33367 = G__33381;
count__33362_33368 = G__33382;
i__33363_33369 = G__33383;
continue;
}
} else
{var vec__33365_33384 = cljs.core.first.call(null,seq__33360_33378__$1);var v_33385 = cljs.core.nth.call(null,vec__33365_33384,0,null);var body_class_33386 = cljs.core.nth.call(null,vec__33365_33384,1,null);if(cljs.core._EQ_.call(null,v_33385,view))
{domina.add_class_BANG_.call(null,body,body_class_33386);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33386);
}
{
var G__33387 = cljs.core.next.call(null,seq__33360_33378__$1);
var G__33388 = null;
var G__33389 = 0;
var G__33390 = 0;
seq__33360_33366 = G__33387;
chunk__33361_33367 = G__33388;
count__33362_33368 = G__33389;
i__33363_33369 = G__33390;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33397 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33398 = null;var count__33399 = 0;var i__33400 = 0;while(true){
if((i__33400 < count__33399))
{var vec__33401 = cljs.core._nth.call(null,chunk__33398,i__33400);var v = cljs.core.nth.call(null,vec__33401,0,null);var _ = cljs.core.nth.call(null,vec__33401,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33397,chunk__33398,count__33399,i__33400,vec__33401,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33397,chunk__33398,count__33399,i__33400,vec__33401,v,_))
);
{
var G__33403 = seq__33397;
var G__33404 = chunk__33398;
var G__33405 = count__33399;
var G__33406 = (i__33400 + 1);
seq__33397 = G__33403;
chunk__33398 = G__33404;
count__33399 = G__33405;
i__33400 = G__33406;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33397);if(temp__4092__auto__)
{var seq__33397__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33397__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33397__$1);{
var G__33407 = cljs.core.chunk_rest.call(null,seq__33397__$1);
var G__33408 = c__4148__auto__;
var G__33409 = cljs.core.count.call(null,c__4148__auto__);
var G__33410 = 0;
seq__33397 = G__33407;
chunk__33398 = G__33408;
count__33399 = G__33409;
i__33400 = G__33410;
continue;
}
} else
{var vec__33402 = cljs.core.first.call(null,seq__33397__$1);var v = cljs.core.nth.call(null,vec__33402,0,null);var _ = cljs.core.nth.call(null,vec__33402,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33397,chunk__33398,count__33399,i__33400,vec__33402,v,_,seq__33397__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33397,chunk__33398,count__33399,i__33400,vec__33402,v,_,seq__33397__$1,temp__4092__auto__))
);
{
var G__33411 = cljs.core.next.call(null,seq__33397__$1);
var G__33412 = null;
var G__33413 = 0;
var G__33414 = 0;
seq__33397 = G__33411;
chunk__33398 = G__33412;
count__33399 = G__33413;
i__33400 = G__33414;
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
