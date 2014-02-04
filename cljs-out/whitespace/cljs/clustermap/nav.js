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
var seq__32292_32298 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32293_32299 = null;var count__32294_32300 = 0;var i__32295_32301 = 0;while(true){
if((i__32295_32301 < count__32294_32300))
{var vec__32296_32302 = cljs.core._nth.call(null,chunk__32293_32299,i__32295_32301);var v_32303 = cljs.core.nth.call(null,vec__32296_32302,0,null);var body_class_32304 = cljs.core.nth.call(null,vec__32296_32302,1,null);if(cljs.core._EQ_.call(null,v_32303,view))
{domina.add_class_BANG_.call(null,body,body_class_32304);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32304);
}
{
var G__32305 = seq__32292_32298;
var G__32306 = chunk__32293_32299;
var G__32307 = count__32294_32300;
var G__32308 = (i__32295_32301 + 1);
seq__32292_32298 = G__32305;
chunk__32293_32299 = G__32306;
count__32294_32300 = G__32307;
i__32295_32301 = G__32308;
continue;
}
} else
{var temp__4092__auto___32309 = cljs.core.seq.call(null,seq__32292_32298);if(temp__4092__auto___32309)
{var seq__32292_32310__$1 = temp__4092__auto___32309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32292_32310__$1))
{var c__4148__auto___32311 = cljs.core.chunk_first.call(null,seq__32292_32310__$1);{
var G__32312 = cljs.core.chunk_rest.call(null,seq__32292_32310__$1);
var G__32313 = c__4148__auto___32311;
var G__32314 = cljs.core.count.call(null,c__4148__auto___32311);
var G__32315 = 0;
seq__32292_32298 = G__32312;
chunk__32293_32299 = G__32313;
count__32294_32300 = G__32314;
i__32295_32301 = G__32315;
continue;
}
} else
{var vec__32297_32316 = cljs.core.first.call(null,seq__32292_32310__$1);var v_32317 = cljs.core.nth.call(null,vec__32297_32316,0,null);var body_class_32318 = cljs.core.nth.call(null,vec__32297_32316,1,null);if(cljs.core._EQ_.call(null,v_32317,view))
{domina.add_class_BANG_.call(null,body,body_class_32318);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32318);
}
{
var G__32319 = cljs.core.next.call(null,seq__32292_32310__$1);
var G__32320 = null;
var G__32321 = 0;
var G__32322 = 0;
seq__32292_32298 = G__32319;
chunk__32293_32299 = G__32320;
count__32294_32300 = G__32321;
i__32295_32301 = G__32322;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32329 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32330 = null;var count__32331 = 0;var i__32332 = 0;while(true){
if((i__32332 < count__32331))
{var vec__32333 = cljs.core._nth.call(null,chunk__32330,i__32332);var v = cljs.core.nth.call(null,vec__32333,0,null);var _ = cljs.core.nth.call(null,vec__32333,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32329,chunk__32330,count__32331,i__32332,vec__32333,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32329,chunk__32330,count__32331,i__32332,vec__32333,v,_))
);
{
var G__32335 = seq__32329;
var G__32336 = chunk__32330;
var G__32337 = count__32331;
var G__32338 = (i__32332 + 1);
seq__32329 = G__32335;
chunk__32330 = G__32336;
count__32331 = G__32337;
i__32332 = G__32338;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32329);if(temp__4092__auto__)
{var seq__32329__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32329__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32329__$1);{
var G__32339 = cljs.core.chunk_rest.call(null,seq__32329__$1);
var G__32340 = c__4148__auto__;
var G__32341 = cljs.core.count.call(null,c__4148__auto__);
var G__32342 = 0;
seq__32329 = G__32339;
chunk__32330 = G__32340;
count__32331 = G__32341;
i__32332 = G__32342;
continue;
}
} else
{var vec__32334 = cljs.core.first.call(null,seq__32329__$1);var v = cljs.core.nth.call(null,vec__32334,0,null);var _ = cljs.core.nth.call(null,vec__32334,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32329,chunk__32330,count__32331,i__32332,vec__32334,v,_,seq__32329__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32329,chunk__32330,count__32331,i__32332,vec__32334,v,_,seq__32329__$1,temp__4092__auto__))
);
{
var G__32343 = cljs.core.next.call(null,seq__32329__$1);
var G__32344 = null;
var G__32345 = 0;
var G__32346 = 0;
seq__32329 = G__32343;
chunk__32330 = G__32344;
count__32331 = G__32345;
i__32332 = G__32346;
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
