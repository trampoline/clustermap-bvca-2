// Compiled by ClojureScript 0.0-2261
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
var seq__25680_25686 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__25681_25687 = null;var count__25682_25688 = (0);var i__25683_25689 = (0);while(true){
if((i__25683_25689 < count__25682_25688))
{var vec__25684_25690 = cljs.core._nth.call(null,chunk__25681_25687,i__25683_25689);var v_25691 = cljs.core.nth.call(null,vec__25684_25690,(0),null);var body_class_25692 = cljs.core.nth.call(null,vec__25684_25690,(1),null);if(cljs.core._EQ_.call(null,v_25691,view))
{domina.add_class_BANG_.call(null,body,body_class_25692);
} else
{domina.remove_class_BANG_.call(null,body,body_class_25692);
}
{
var G__25693 = seq__25680_25686;
var G__25694 = chunk__25681_25687;
var G__25695 = count__25682_25688;
var G__25696 = (i__25683_25689 + (1));
seq__25680_25686 = G__25693;
chunk__25681_25687 = G__25694;
count__25682_25688 = G__25695;
i__25683_25689 = G__25696;
continue;
}
} else
{var temp__4126__auto___25697 = cljs.core.seq.call(null,seq__25680_25686);if(temp__4126__auto___25697)
{var seq__25680_25698__$1 = temp__4126__auto___25697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25680_25698__$1))
{var c__4299__auto___25699 = cljs.core.chunk_first.call(null,seq__25680_25698__$1);{
var G__25700 = cljs.core.chunk_rest.call(null,seq__25680_25698__$1);
var G__25701 = c__4299__auto___25699;
var G__25702 = cljs.core.count.call(null,c__4299__auto___25699);
var G__25703 = (0);
seq__25680_25686 = G__25700;
chunk__25681_25687 = G__25701;
count__25682_25688 = G__25702;
i__25683_25689 = G__25703;
continue;
}
} else
{var vec__25685_25704 = cljs.core.first.call(null,seq__25680_25698__$1);var v_25705 = cljs.core.nth.call(null,vec__25685_25704,(0),null);var body_class_25706 = cljs.core.nth.call(null,vec__25685_25704,(1),null);if(cljs.core._EQ_.call(null,v_25705,view))
{domina.add_class_BANG_.call(null,body,body_class_25706);
} else
{domina.remove_class_BANG_.call(null,body,body_class_25706);
}
{
var G__25707 = cljs.core.next.call(null,seq__25680_25698__$1);
var G__25708 = null;
var G__25709 = (0);
var G__25710 = (0);
seq__25680_25686 = G__25707;
chunk__25681_25687 = G__25708;
count__25682_25688 = G__25709;
i__25683_25689 = G__25710;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__25717 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__25718 = null;var count__25719 = (0);var i__25720 = (0);while(true){
if((i__25720 < count__25719))
{var vec__25721 = cljs.core._nth.call(null,chunk__25718,i__25720);var v = cljs.core.nth.call(null,vec__25721,(0),null);var _ = cljs.core.nth.call(null,vec__25721,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__25717,chunk__25718,count__25719,i__25720,vec__25721,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__25717,chunk__25718,count__25719,i__25720,vec__25721,v,_))
);
{
var G__25723 = seq__25717;
var G__25724 = chunk__25718;
var G__25725 = count__25719;
var G__25726 = (i__25720 + (1));
seq__25717 = G__25723;
chunk__25718 = G__25724;
count__25719 = G__25725;
i__25720 = G__25726;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25717);if(temp__4126__auto__)
{var seq__25717__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25717__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__25717__$1);{
var G__25727 = cljs.core.chunk_rest.call(null,seq__25717__$1);
var G__25728 = c__4299__auto__;
var G__25729 = cljs.core.count.call(null,c__4299__auto__);
var G__25730 = (0);
seq__25717 = G__25727;
chunk__25718 = G__25728;
count__25719 = G__25729;
i__25720 = G__25730;
continue;
}
} else
{var vec__25722 = cljs.core.first.call(null,seq__25717__$1);var v = cljs.core.nth.call(null,vec__25722,(0),null);var _ = cljs.core.nth.call(null,vec__25722,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__25717,chunk__25718,count__25719,i__25720,vec__25722,v,_,seq__25717__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__25717,chunk__25718,count__25719,i__25720,vec__25722,v,_,seq__25717__$1,temp__4126__auto__))
);
{
var G__25731 = cljs.core.next.call(null,seq__25717__$1);
var G__25732 = null;
var G__25733 = (0);
var G__25734 = (0);
seq__25717 = G__25731;
chunk__25718 = G__25732;
count__25719 = G__25733;
i__25720 = G__25734;
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
