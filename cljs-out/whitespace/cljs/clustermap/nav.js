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
var seq__14114_14120 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14115_14121 = null;var count__14116_14122 = (0);var i__14117_14123 = (0);while(true){
if((i__14117_14123 < count__14116_14122))
{var vec__14118_14124 = cljs.core._nth.call(null,chunk__14115_14121,i__14117_14123);var v_14125 = cljs.core.nth.call(null,vec__14118_14124,(0),null);var body_class_14126 = cljs.core.nth.call(null,vec__14118_14124,(1),null);if(cljs.core._EQ_.call(null,v_14125,view))
{domina.add_class_BANG_.call(null,body,body_class_14126);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14126);
}
{
var G__14127 = seq__14114_14120;
var G__14128 = chunk__14115_14121;
var G__14129 = count__14116_14122;
var G__14130 = (i__14117_14123 + (1));
seq__14114_14120 = G__14127;
chunk__14115_14121 = G__14128;
count__14116_14122 = G__14129;
i__14117_14123 = G__14130;
continue;
}
} else
{var temp__4126__auto___14131 = cljs.core.seq.call(null,seq__14114_14120);if(temp__4126__auto___14131)
{var seq__14114_14132__$1 = temp__4126__auto___14131;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14114_14132__$1))
{var c__4299__auto___14133 = cljs.core.chunk_first.call(null,seq__14114_14132__$1);{
var G__14134 = cljs.core.chunk_rest.call(null,seq__14114_14132__$1);
var G__14135 = c__4299__auto___14133;
var G__14136 = cljs.core.count.call(null,c__4299__auto___14133);
var G__14137 = (0);
seq__14114_14120 = G__14134;
chunk__14115_14121 = G__14135;
count__14116_14122 = G__14136;
i__14117_14123 = G__14137;
continue;
}
} else
{var vec__14119_14138 = cljs.core.first.call(null,seq__14114_14132__$1);var v_14139 = cljs.core.nth.call(null,vec__14119_14138,(0),null);var body_class_14140 = cljs.core.nth.call(null,vec__14119_14138,(1),null);if(cljs.core._EQ_.call(null,v_14139,view))
{domina.add_class_BANG_.call(null,body,body_class_14140);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14140);
}
{
var G__14141 = cljs.core.next.call(null,seq__14114_14132__$1);
var G__14142 = null;
var G__14143 = (0);
var G__14144 = (0);
seq__14114_14120 = G__14141;
chunk__14115_14121 = G__14142;
count__14116_14122 = G__14143;
i__14117_14123 = G__14144;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14151 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14152 = null;var count__14153 = (0);var i__14154 = (0);while(true){
if((i__14154 < count__14153))
{var vec__14155 = cljs.core._nth.call(null,chunk__14152,i__14154);var v = cljs.core.nth.call(null,vec__14155,(0),null);var _ = cljs.core.nth.call(null,vec__14155,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14151,chunk__14152,count__14153,i__14154,vec__14155,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14151,chunk__14152,count__14153,i__14154,vec__14155,v,_))
);
{
var G__14157 = seq__14151;
var G__14158 = chunk__14152;
var G__14159 = count__14153;
var G__14160 = (i__14154 + (1));
seq__14151 = G__14157;
chunk__14152 = G__14158;
count__14153 = G__14159;
i__14154 = G__14160;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14151);if(temp__4126__auto__)
{var seq__14151__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14151__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14151__$1);{
var G__14161 = cljs.core.chunk_rest.call(null,seq__14151__$1);
var G__14162 = c__4299__auto__;
var G__14163 = cljs.core.count.call(null,c__4299__auto__);
var G__14164 = (0);
seq__14151 = G__14161;
chunk__14152 = G__14162;
count__14153 = G__14163;
i__14154 = G__14164;
continue;
}
} else
{var vec__14156 = cljs.core.first.call(null,seq__14151__$1);var v = cljs.core.nth.call(null,vec__14156,(0),null);var _ = cljs.core.nth.call(null,vec__14156,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14151,chunk__14152,count__14153,i__14154,vec__14156,v,_,seq__14151__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14151,chunk__14152,count__14153,i__14154,vec__14156,v,_,seq__14151__$1,temp__4126__auto__))
);
{
var G__14165 = cljs.core.next.call(null,seq__14151__$1);
var G__14166 = null;
var G__14167 = (0);
var G__14168 = (0);
seq__14151 = G__14165;
chunk__14152 = G__14166;
count__14153 = G__14167;
i__14154 = G__14168;
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
