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
var seq__17093_17099 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17094_17100 = null;var count__17095_17101 = (0);var i__17096_17102 = (0);while(true){
if((i__17096_17102 < count__17095_17101))
{var vec__17097_17103 = cljs.core._nth.call(null,chunk__17094_17100,i__17096_17102);var v_17104 = cljs.core.nth.call(null,vec__17097_17103,(0),null);var body_class_17105 = cljs.core.nth.call(null,vec__17097_17103,(1),null);if(cljs.core._EQ_.call(null,v_17104,view))
{domina.add_class_BANG_.call(null,body,body_class_17105);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17105);
}
{
var G__17106 = seq__17093_17099;
var G__17107 = chunk__17094_17100;
var G__17108 = count__17095_17101;
var G__17109 = (i__17096_17102 + (1));
seq__17093_17099 = G__17106;
chunk__17094_17100 = G__17107;
count__17095_17101 = G__17108;
i__17096_17102 = G__17109;
continue;
}
} else
{var temp__4126__auto___17110 = cljs.core.seq.call(null,seq__17093_17099);if(temp__4126__auto___17110)
{var seq__17093_17111__$1 = temp__4126__auto___17110;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17093_17111__$1))
{var c__4314__auto___17112 = cljs.core.chunk_first.call(null,seq__17093_17111__$1);{
var G__17113 = cljs.core.chunk_rest.call(null,seq__17093_17111__$1);
var G__17114 = c__4314__auto___17112;
var G__17115 = cljs.core.count.call(null,c__4314__auto___17112);
var G__17116 = (0);
seq__17093_17099 = G__17113;
chunk__17094_17100 = G__17114;
count__17095_17101 = G__17115;
i__17096_17102 = G__17116;
continue;
}
} else
{var vec__17098_17117 = cljs.core.first.call(null,seq__17093_17111__$1);var v_17118 = cljs.core.nth.call(null,vec__17098_17117,(0),null);var body_class_17119 = cljs.core.nth.call(null,vec__17098_17117,(1),null);if(cljs.core._EQ_.call(null,v_17118,view))
{domina.add_class_BANG_.call(null,body,body_class_17119);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17119);
}
{
var G__17120 = cljs.core.next.call(null,seq__17093_17111__$1);
var G__17121 = null;
var G__17122 = (0);
var G__17123 = (0);
seq__17093_17099 = G__17120;
chunk__17094_17100 = G__17121;
count__17095_17101 = G__17122;
i__17096_17102 = G__17123;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__17130 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17131 = null;var count__17132 = (0);var i__17133 = (0);while(true){
if((i__17133 < count__17132))
{var vec__17134 = cljs.core._nth.call(null,chunk__17131,i__17133);var v = cljs.core.nth.call(null,vec__17134,(0),null);var _ = cljs.core.nth.call(null,vec__17134,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17130,chunk__17131,count__17132,i__17133,vec__17134,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17130,chunk__17131,count__17132,i__17133,vec__17134,v,_))
);
{
var G__17136 = seq__17130;
var G__17137 = chunk__17131;
var G__17138 = count__17132;
var G__17139 = (i__17133 + (1));
seq__17130 = G__17136;
chunk__17131 = G__17137;
count__17132 = G__17138;
i__17133 = G__17139;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17130);if(temp__4126__auto__)
{var seq__17130__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17130__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__17130__$1);{
var G__17140 = cljs.core.chunk_rest.call(null,seq__17130__$1);
var G__17141 = c__4314__auto__;
var G__17142 = cljs.core.count.call(null,c__4314__auto__);
var G__17143 = (0);
seq__17130 = G__17140;
chunk__17131 = G__17141;
count__17132 = G__17142;
i__17133 = G__17143;
continue;
}
} else
{var vec__17135 = cljs.core.first.call(null,seq__17130__$1);var v = cljs.core.nth.call(null,vec__17135,(0),null);var _ = cljs.core.nth.call(null,vec__17135,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17130,chunk__17131,count__17132,i__17133,vec__17135,v,_,seq__17130__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17130,chunk__17131,count__17132,i__17133,vec__17135,v,_,seq__17130__$1,temp__4126__auto__))
);
{
var G__17144 = cljs.core.next.call(null,seq__17130__$1);
var G__17145 = null;
var G__17146 = (0);
var G__17147 = (0);
seq__17130 = G__17144;
chunk__17131 = G__17145;
count__17132 = G__17146;
i__17133 = G__17147;
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
