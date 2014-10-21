// Compiled by ClojureScript 0.0-2356
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
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

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
var seq__17427_17433 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17428_17434 = null;var count__17429_17435 = (0);var i__17430_17436 = (0);while(true){
if((i__17430_17436 < count__17429_17435))
{var vec__17431_17437 = cljs.core._nth.call(null,chunk__17428_17434,i__17430_17436);var v_17438 = cljs.core.nth.call(null,vec__17431_17437,(0),null);var body_class_17439 = cljs.core.nth.call(null,vec__17431_17437,(1),null);if(cljs.core._EQ_.call(null,v_17438,view))
{domina.add_class_BANG_.call(null,body,body_class_17439);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17439);
}
{
var G__17440 = seq__17427_17433;
var G__17441 = chunk__17428_17434;
var G__17442 = count__17429_17435;
var G__17443 = (i__17430_17436 + (1));
seq__17427_17433 = G__17440;
chunk__17428_17434 = G__17441;
count__17429_17435 = G__17442;
i__17430_17436 = G__17443;
continue;
}
} else
{var temp__4126__auto___17444 = cljs.core.seq.call(null,seq__17427_17433);if(temp__4126__auto___17444)
{var seq__17427_17445__$1 = temp__4126__auto___17444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17427_17445__$1))
{var c__4406__auto___17446 = cljs.core.chunk_first.call(null,seq__17427_17445__$1);{
var G__17447 = cljs.core.chunk_rest.call(null,seq__17427_17445__$1);
var G__17448 = c__4406__auto___17446;
var G__17449 = cljs.core.count.call(null,c__4406__auto___17446);
var G__17450 = (0);
seq__17427_17433 = G__17447;
chunk__17428_17434 = G__17448;
count__17429_17435 = G__17449;
i__17430_17436 = G__17450;
continue;
}
} else
{var vec__17432_17451 = cljs.core.first.call(null,seq__17427_17445__$1);var v_17452 = cljs.core.nth.call(null,vec__17432_17451,(0),null);var body_class_17453 = cljs.core.nth.call(null,vec__17432_17451,(1),null);if(cljs.core._EQ_.call(null,v_17452,view))
{domina.add_class_BANG_.call(null,body,body_class_17453);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17453);
}
{
var G__17454 = cljs.core.next.call(null,seq__17427_17445__$1);
var G__17455 = null;
var G__17456 = (0);
var G__17457 = (0);
seq__17427_17433 = G__17454;
chunk__17428_17434 = G__17455;
count__17429_17435 = G__17456;
i__17430_17436 = G__17457;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__17464 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17465 = null;var count__17466 = (0);var i__17467 = (0);while(true){
if((i__17467 < count__17466))
{var vec__17468 = cljs.core._nth.call(null,chunk__17465,i__17467);var v = cljs.core.nth.call(null,vec__17468,(0),null);var _ = cljs.core.nth.call(null,vec__17468,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17464,chunk__17465,count__17466,i__17467,vec__17468,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17464,chunk__17465,count__17466,i__17467,vec__17468,v,_))
);
{
var G__17470 = seq__17464;
var G__17471 = chunk__17465;
var G__17472 = count__17466;
var G__17473 = (i__17467 + (1));
seq__17464 = G__17470;
chunk__17465 = G__17471;
count__17466 = G__17472;
i__17467 = G__17473;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17464);if(temp__4126__auto__)
{var seq__17464__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17464__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__17464__$1);{
var G__17474 = cljs.core.chunk_rest.call(null,seq__17464__$1);
var G__17475 = c__4406__auto__;
var G__17476 = cljs.core.count.call(null,c__4406__auto__);
var G__17477 = (0);
seq__17464 = G__17474;
chunk__17465 = G__17475;
count__17466 = G__17476;
i__17467 = G__17477;
continue;
}
} else
{var vec__17469 = cljs.core.first.call(null,seq__17464__$1);var v = cljs.core.nth.call(null,vec__17469,(0),null);var _ = cljs.core.nth.call(null,vec__17469,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17464,chunk__17465,count__17466,i__17467,vec__17469,v,_,seq__17464__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17464,chunk__17465,count__17466,i__17467,vec__17469,v,_,seq__17464__$1,temp__4126__auto__))
);
{
var G__17478 = cljs.core.next.call(null,seq__17464__$1);
var G__17479 = null;
var G__17480 = (0);
var G__17481 = (0);
seq__17464 = G__17478;
chunk__17465 = G__17479;
count__17466 = G__17480;
i__17467 = G__17481;
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
