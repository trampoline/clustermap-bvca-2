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
var seq__14079_14085 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14080_14086 = null;var count__14081_14087 = (0);var i__14082_14088 = (0);while(true){
if((i__14082_14088 < count__14081_14087))
{var vec__14083_14089 = cljs.core._nth.call(null,chunk__14080_14086,i__14082_14088);var v_14090 = cljs.core.nth.call(null,vec__14083_14089,(0),null);var body_class_14091 = cljs.core.nth.call(null,vec__14083_14089,(1),null);if(cljs.core._EQ_.call(null,v_14090,view))
{domina.add_class_BANG_.call(null,body,body_class_14091);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14091);
}
{
var G__14092 = seq__14079_14085;
var G__14093 = chunk__14080_14086;
var G__14094 = count__14081_14087;
var G__14095 = (i__14082_14088 + (1));
seq__14079_14085 = G__14092;
chunk__14080_14086 = G__14093;
count__14081_14087 = G__14094;
i__14082_14088 = G__14095;
continue;
}
} else
{var temp__4126__auto___14096 = cljs.core.seq.call(null,seq__14079_14085);if(temp__4126__auto___14096)
{var seq__14079_14097__$1 = temp__4126__auto___14096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14079_14097__$1))
{var c__4314__auto___14098 = cljs.core.chunk_first.call(null,seq__14079_14097__$1);{
var G__14099 = cljs.core.chunk_rest.call(null,seq__14079_14097__$1);
var G__14100 = c__4314__auto___14098;
var G__14101 = cljs.core.count.call(null,c__4314__auto___14098);
var G__14102 = (0);
seq__14079_14085 = G__14099;
chunk__14080_14086 = G__14100;
count__14081_14087 = G__14101;
i__14082_14088 = G__14102;
continue;
}
} else
{var vec__14084_14103 = cljs.core.first.call(null,seq__14079_14097__$1);var v_14104 = cljs.core.nth.call(null,vec__14084_14103,(0),null);var body_class_14105 = cljs.core.nth.call(null,vec__14084_14103,(1),null);if(cljs.core._EQ_.call(null,v_14104,view))
{domina.add_class_BANG_.call(null,body,body_class_14105);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14105);
}
{
var G__14106 = cljs.core.next.call(null,seq__14079_14097__$1);
var G__14107 = null;
var G__14108 = (0);
var G__14109 = (0);
seq__14079_14085 = G__14106;
chunk__14080_14086 = G__14107;
count__14081_14087 = G__14108;
i__14082_14088 = G__14109;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14116 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14117 = null;var count__14118 = (0);var i__14119 = (0);while(true){
if((i__14119 < count__14118))
{var vec__14120 = cljs.core._nth.call(null,chunk__14117,i__14119);var v = cljs.core.nth.call(null,vec__14120,(0),null);var _ = cljs.core.nth.call(null,vec__14120,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14116,chunk__14117,count__14118,i__14119,vec__14120,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14116,chunk__14117,count__14118,i__14119,vec__14120,v,_))
);
{
var G__14122 = seq__14116;
var G__14123 = chunk__14117;
var G__14124 = count__14118;
var G__14125 = (i__14119 + (1));
seq__14116 = G__14122;
chunk__14117 = G__14123;
count__14118 = G__14124;
i__14119 = G__14125;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14116);if(temp__4126__auto__)
{var seq__14116__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14116__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__14116__$1);{
var G__14126 = cljs.core.chunk_rest.call(null,seq__14116__$1);
var G__14127 = c__4314__auto__;
var G__14128 = cljs.core.count.call(null,c__4314__auto__);
var G__14129 = (0);
seq__14116 = G__14126;
chunk__14117 = G__14127;
count__14118 = G__14128;
i__14119 = G__14129;
continue;
}
} else
{var vec__14121 = cljs.core.first.call(null,seq__14116__$1);var v = cljs.core.nth.call(null,vec__14121,(0),null);var _ = cljs.core.nth.call(null,vec__14121,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14116,chunk__14117,count__14118,i__14119,vec__14121,v,_,seq__14116__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14116,chunk__14117,count__14118,i__14119,vec__14121,v,_,seq__14116__$1,temp__4126__auto__))
);
{
var G__14130 = cljs.core.next.call(null,seq__14116__$1);
var G__14131 = null;
var G__14132 = (0);
var G__14133 = (0);
seq__14116 = G__14130;
chunk__14117 = G__14131;
count__14118 = G__14132;
i__14119 = G__14133;
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
