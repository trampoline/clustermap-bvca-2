// Compiled by ClojureScript 0.0-2322
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
var seq__14486_14492 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14487_14493 = null;var count__14488_14494 = (0);var i__14489_14495 = (0);while(true){
if((i__14489_14495 < count__14488_14494))
{var vec__14490_14496 = cljs.core._nth.call(null,chunk__14487_14493,i__14489_14495);var v_14497 = cljs.core.nth.call(null,vec__14490_14496,(0),null);var body_class_14498 = cljs.core.nth.call(null,vec__14490_14496,(1),null);if(cljs.core._EQ_.call(null,v_14497,view))
{domina.add_class_BANG_.call(null,body,body_class_14498);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14498);
}
{
var G__14499 = seq__14486_14492;
var G__14500 = chunk__14487_14493;
var G__14501 = count__14488_14494;
var G__14502 = (i__14489_14495 + (1));
seq__14486_14492 = G__14499;
chunk__14487_14493 = G__14500;
count__14488_14494 = G__14501;
i__14489_14495 = G__14502;
continue;
}
} else
{var temp__4126__auto___14503 = cljs.core.seq.call(null,seq__14486_14492);if(temp__4126__auto___14503)
{var seq__14486_14504__$1 = temp__4126__auto___14503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14486_14504__$1))
{var c__4314__auto___14505 = cljs.core.chunk_first.call(null,seq__14486_14504__$1);{
var G__14506 = cljs.core.chunk_rest.call(null,seq__14486_14504__$1);
var G__14507 = c__4314__auto___14505;
var G__14508 = cljs.core.count.call(null,c__4314__auto___14505);
var G__14509 = (0);
seq__14486_14492 = G__14506;
chunk__14487_14493 = G__14507;
count__14488_14494 = G__14508;
i__14489_14495 = G__14509;
continue;
}
} else
{var vec__14491_14510 = cljs.core.first.call(null,seq__14486_14504__$1);var v_14511 = cljs.core.nth.call(null,vec__14491_14510,(0),null);var body_class_14512 = cljs.core.nth.call(null,vec__14491_14510,(1),null);if(cljs.core._EQ_.call(null,v_14511,view))
{domina.add_class_BANG_.call(null,body,body_class_14512);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14512);
}
{
var G__14513 = cljs.core.next.call(null,seq__14486_14504__$1);
var G__14514 = null;
var G__14515 = (0);
var G__14516 = (0);
seq__14486_14492 = G__14513;
chunk__14487_14493 = G__14514;
count__14488_14494 = G__14515;
i__14489_14495 = G__14516;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14523 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14524 = null;var count__14525 = (0);var i__14526 = (0);while(true){
if((i__14526 < count__14525))
{var vec__14527 = cljs.core._nth.call(null,chunk__14524,i__14526);var v = cljs.core.nth.call(null,vec__14527,(0),null);var _ = cljs.core.nth.call(null,vec__14527,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14523,chunk__14524,count__14525,i__14526,vec__14527,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14523,chunk__14524,count__14525,i__14526,vec__14527,v,_))
);
{
var G__14529 = seq__14523;
var G__14530 = chunk__14524;
var G__14531 = count__14525;
var G__14532 = (i__14526 + (1));
seq__14523 = G__14529;
chunk__14524 = G__14530;
count__14525 = G__14531;
i__14526 = G__14532;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14523);if(temp__4126__auto__)
{var seq__14523__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14523__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__14523__$1);{
var G__14533 = cljs.core.chunk_rest.call(null,seq__14523__$1);
var G__14534 = c__4314__auto__;
var G__14535 = cljs.core.count.call(null,c__4314__auto__);
var G__14536 = (0);
seq__14523 = G__14533;
chunk__14524 = G__14534;
count__14525 = G__14535;
i__14526 = G__14536;
continue;
}
} else
{var vec__14528 = cljs.core.first.call(null,seq__14523__$1);var v = cljs.core.nth.call(null,vec__14528,(0),null);var _ = cljs.core.nth.call(null,vec__14528,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14523,chunk__14524,count__14525,i__14526,vec__14528,v,_,seq__14523__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14523,chunk__14524,count__14525,i__14526,vec__14528,v,_,seq__14523__$1,temp__4126__auto__))
);
{
var G__14537 = cljs.core.next.call(null,seq__14523__$1);
var G__14538 = null;
var G__14539 = (0);
var G__14540 = (0);
seq__14523 = G__14537;
chunk__14524 = G__14538;
count__14525 = G__14539;
i__14526 = G__14540;
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
