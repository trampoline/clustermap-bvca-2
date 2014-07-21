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
var seq__52383_52389 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__52384_52390 = null;var count__52385_52391 = (0);var i__52386_52392 = (0);while(true){
if((i__52386_52392 < count__52385_52391))
{var vec__52387_52393 = cljs.core._nth.call(null,chunk__52384_52390,i__52386_52392);var v_52394 = cljs.core.nth.call(null,vec__52387_52393,(0),null);var body_class_52395 = cljs.core.nth.call(null,vec__52387_52393,(1),null);if(cljs.core._EQ_.call(null,v_52394,view))
{domina.add_class_BANG_.call(null,body,body_class_52395);
} else
{domina.remove_class_BANG_.call(null,body,body_class_52395);
}
{
var G__52396 = seq__52383_52389;
var G__52397 = chunk__52384_52390;
var G__52398 = count__52385_52391;
var G__52399 = (i__52386_52392 + (1));
seq__52383_52389 = G__52396;
chunk__52384_52390 = G__52397;
count__52385_52391 = G__52398;
i__52386_52392 = G__52399;
continue;
}
} else
{var temp__4126__auto___52400 = cljs.core.seq.call(null,seq__52383_52389);if(temp__4126__auto___52400)
{var seq__52383_52401__$1 = temp__4126__auto___52400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52383_52401__$1))
{var c__4299__auto___52402 = cljs.core.chunk_first.call(null,seq__52383_52401__$1);{
var G__52403 = cljs.core.chunk_rest.call(null,seq__52383_52401__$1);
var G__52404 = c__4299__auto___52402;
var G__52405 = cljs.core.count.call(null,c__4299__auto___52402);
var G__52406 = (0);
seq__52383_52389 = G__52403;
chunk__52384_52390 = G__52404;
count__52385_52391 = G__52405;
i__52386_52392 = G__52406;
continue;
}
} else
{var vec__52388_52407 = cljs.core.first.call(null,seq__52383_52401__$1);var v_52408 = cljs.core.nth.call(null,vec__52388_52407,(0),null);var body_class_52409 = cljs.core.nth.call(null,vec__52388_52407,(1),null);if(cljs.core._EQ_.call(null,v_52408,view))
{domina.add_class_BANG_.call(null,body,body_class_52409);
} else
{domina.remove_class_BANG_.call(null,body,body_class_52409);
}
{
var G__52410 = cljs.core.next.call(null,seq__52383_52401__$1);
var G__52411 = null;
var G__52412 = (0);
var G__52413 = (0);
seq__52383_52389 = G__52410;
chunk__52384_52390 = G__52411;
count__52385_52391 = G__52412;
i__52386_52392 = G__52413;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__52420 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__52421 = null;var count__52422 = (0);var i__52423 = (0);while(true){
if((i__52423 < count__52422))
{var vec__52424 = cljs.core._nth.call(null,chunk__52421,i__52423);var v = cljs.core.nth.call(null,vec__52424,(0),null);var _ = cljs.core.nth.call(null,vec__52424,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__52420,chunk__52421,count__52422,i__52423,vec__52424,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__52420,chunk__52421,count__52422,i__52423,vec__52424,v,_))
);
{
var G__52426 = seq__52420;
var G__52427 = chunk__52421;
var G__52428 = count__52422;
var G__52429 = (i__52423 + (1));
seq__52420 = G__52426;
chunk__52421 = G__52427;
count__52422 = G__52428;
i__52423 = G__52429;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52420);if(temp__4126__auto__)
{var seq__52420__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52420__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__52420__$1);{
var G__52430 = cljs.core.chunk_rest.call(null,seq__52420__$1);
var G__52431 = c__4299__auto__;
var G__52432 = cljs.core.count.call(null,c__4299__auto__);
var G__52433 = (0);
seq__52420 = G__52430;
chunk__52421 = G__52431;
count__52422 = G__52432;
i__52423 = G__52433;
continue;
}
} else
{var vec__52425 = cljs.core.first.call(null,seq__52420__$1);var v = cljs.core.nth.call(null,vec__52425,(0),null);var _ = cljs.core.nth.call(null,vec__52425,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__52420,chunk__52421,count__52422,i__52423,vec__52425,v,_,seq__52420__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__52420,chunk__52421,count__52422,i__52423,vec__52425,v,_,seq__52420__$1,temp__4126__auto__))
);
{
var G__52434 = cljs.core.next.call(null,seq__52420__$1);
var G__52435 = null;
var G__52436 = (0);
var G__52437 = (0);
seq__52420 = G__52434;
chunk__52421 = G__52435;
count__52422 = G__52436;
i__52423 = G__52437;
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