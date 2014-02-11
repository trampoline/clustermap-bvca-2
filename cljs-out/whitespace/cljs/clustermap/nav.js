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
var seq__32390_32396 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32391_32397 = null;var count__32392_32398 = 0;var i__32393_32399 = 0;while(true){
if((i__32393_32399 < count__32392_32398))
{var vec__32394_32400 = cljs.core._nth.call(null,chunk__32391_32397,i__32393_32399);var v_32401 = cljs.core.nth.call(null,vec__32394_32400,0,null);var body_class_32402 = cljs.core.nth.call(null,vec__32394_32400,1,null);if(cljs.core._EQ_.call(null,v_32401,view))
{domina.add_class_BANG_.call(null,body,body_class_32402);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32402);
}
{
var G__32403 = seq__32390_32396;
var G__32404 = chunk__32391_32397;
var G__32405 = count__32392_32398;
var G__32406 = (i__32393_32399 + 1);
seq__32390_32396 = G__32403;
chunk__32391_32397 = G__32404;
count__32392_32398 = G__32405;
i__32393_32399 = G__32406;
continue;
}
} else
{var temp__4092__auto___32407 = cljs.core.seq.call(null,seq__32390_32396);if(temp__4092__auto___32407)
{var seq__32390_32408__$1 = temp__4092__auto___32407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32390_32408__$1))
{var c__4148__auto___32409 = cljs.core.chunk_first.call(null,seq__32390_32408__$1);{
var G__32410 = cljs.core.chunk_rest.call(null,seq__32390_32408__$1);
var G__32411 = c__4148__auto___32409;
var G__32412 = cljs.core.count.call(null,c__4148__auto___32409);
var G__32413 = 0;
seq__32390_32396 = G__32410;
chunk__32391_32397 = G__32411;
count__32392_32398 = G__32412;
i__32393_32399 = G__32413;
continue;
}
} else
{var vec__32395_32414 = cljs.core.first.call(null,seq__32390_32408__$1);var v_32415 = cljs.core.nth.call(null,vec__32395_32414,0,null);var body_class_32416 = cljs.core.nth.call(null,vec__32395_32414,1,null);if(cljs.core._EQ_.call(null,v_32415,view))
{domina.add_class_BANG_.call(null,body,body_class_32416);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32416);
}
{
var G__32417 = cljs.core.next.call(null,seq__32390_32408__$1);
var G__32418 = null;
var G__32419 = 0;
var G__32420 = 0;
seq__32390_32396 = G__32417;
chunk__32391_32397 = G__32418;
count__32392_32398 = G__32419;
i__32393_32399 = G__32420;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32427 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32428 = null;var count__32429 = 0;var i__32430 = 0;while(true){
if((i__32430 < count__32429))
{var vec__32431 = cljs.core._nth.call(null,chunk__32428,i__32430);var v = cljs.core.nth.call(null,vec__32431,0,null);var _ = cljs.core.nth.call(null,vec__32431,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32427,chunk__32428,count__32429,i__32430,vec__32431,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32427,chunk__32428,count__32429,i__32430,vec__32431,v,_))
);
{
var G__32433 = seq__32427;
var G__32434 = chunk__32428;
var G__32435 = count__32429;
var G__32436 = (i__32430 + 1);
seq__32427 = G__32433;
chunk__32428 = G__32434;
count__32429 = G__32435;
i__32430 = G__32436;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32427);if(temp__4092__auto__)
{var seq__32427__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32427__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32427__$1);{
var G__32437 = cljs.core.chunk_rest.call(null,seq__32427__$1);
var G__32438 = c__4148__auto__;
var G__32439 = cljs.core.count.call(null,c__4148__auto__);
var G__32440 = 0;
seq__32427 = G__32437;
chunk__32428 = G__32438;
count__32429 = G__32439;
i__32430 = G__32440;
continue;
}
} else
{var vec__32432 = cljs.core.first.call(null,seq__32427__$1);var v = cljs.core.nth.call(null,vec__32432,0,null);var _ = cljs.core.nth.call(null,vec__32432,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32427,chunk__32428,count__32429,i__32430,vec__32432,v,_,seq__32427__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32427,chunk__32428,count__32429,i__32430,vec__32432,v,_,seq__32427__$1,temp__4092__auto__))
);
{
var G__32441 = cljs.core.next.call(null,seq__32427__$1);
var G__32442 = null;
var G__32443 = 0;
var G__32444 = 0;
seq__32427 = G__32441;
chunk__32428 = G__32442;
count__32429 = G__32443;
i__32430 = G__32444;
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
