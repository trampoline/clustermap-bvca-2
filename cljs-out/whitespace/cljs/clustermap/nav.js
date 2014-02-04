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
var seq__32302 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32303 = null;var count__32304 = 0;var i__32305 = 0;while(true){
if((i__32305 < count__32304))
{var vec__32306 = cljs.core._nth.call(null,chunk__32303,i__32305);var v = cljs.core.nth.call(null,vec__32306,0,null);var body_class = cljs.core.nth.call(null,vec__32306,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__32308 = seq__32302;
var G__32309 = chunk__32303;
var G__32310 = count__32304;
var G__32311 = (i__32305 + 1);
seq__32302 = G__32308;
chunk__32303 = G__32309;
count__32304 = G__32310;
i__32305 = G__32311;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32302);if(temp__4092__auto__)
{var seq__32302__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32302__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32302__$1);{
var G__32312 = cljs.core.chunk_rest.call(null,seq__32302__$1);
var G__32313 = c__4148__auto__;
var G__32314 = cljs.core.count.call(null,c__4148__auto__);
var G__32315 = 0;
seq__32302 = G__32312;
chunk__32303 = G__32313;
count__32304 = G__32314;
i__32305 = G__32315;
continue;
}
} else
{var vec__32307 = cljs.core.first.call(null,seq__32302__$1);var v = cljs.core.nth.call(null,vec__32307,0,null);var body_class = cljs.core.nth.call(null,vec__32307,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__32316 = cljs.core.next.call(null,seq__32302__$1);
var G__32317 = null;
var G__32318 = 0;
var G__32319 = 0;
seq__32302 = G__32316;
chunk__32303 = G__32317;
count__32304 = G__32318;
i__32305 = G__32319;
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
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32326 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32327 = null;var count__32328 = 0;var i__32329 = 0;while(true){
if((i__32329 < count__32328))
{var vec__32330 = cljs.core._nth.call(null,chunk__32327,i__32329);var v = cljs.core.nth.call(null,vec__32330,0,null);var _ = cljs.core.nth.call(null,vec__32330,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32326,chunk__32327,count__32328,i__32329,vec__32330,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32326,chunk__32327,count__32328,i__32329,vec__32330,v,_))
);
{
var G__32332 = seq__32326;
var G__32333 = chunk__32327;
var G__32334 = count__32328;
var G__32335 = (i__32329 + 1);
seq__32326 = G__32332;
chunk__32327 = G__32333;
count__32328 = G__32334;
i__32329 = G__32335;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32326);if(temp__4092__auto__)
{var seq__32326__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32326__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32326__$1);{
var G__32336 = cljs.core.chunk_rest.call(null,seq__32326__$1);
var G__32337 = c__4148__auto__;
var G__32338 = cljs.core.count.call(null,c__4148__auto__);
var G__32339 = 0;
seq__32326 = G__32336;
chunk__32327 = G__32337;
count__32328 = G__32338;
i__32329 = G__32339;
continue;
}
} else
{var vec__32331 = cljs.core.first.call(null,seq__32326__$1);var v = cljs.core.nth.call(null,vec__32331,0,null);var _ = cljs.core.nth.call(null,vec__32331,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32326,chunk__32327,count__32328,i__32329,vec__32331,v,_,seq__32326__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32326,chunk__32327,count__32328,i__32329,vec__32331,v,_,seq__32326__$1,temp__4092__auto__))
);
{
var G__32340 = cljs.core.next.call(null,seq__32326__$1);
var G__32341 = null;
var G__32342 = 0;
var G__32343 = 0;
seq__32326 = G__32340;
chunk__32327 = G__32341;
count__32328 = G__32342;
i__32329 = G__32343;
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
