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
var seq__14055_14061 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14056_14062 = null;var count__14057_14063 = (0);var i__14058_14064 = (0);while(true){
if((i__14058_14064 < count__14057_14063))
{var vec__14059_14065 = cljs.core._nth.call(null,chunk__14056_14062,i__14058_14064);var v_14066 = cljs.core.nth.call(null,vec__14059_14065,(0),null);var body_class_14067 = cljs.core.nth.call(null,vec__14059_14065,(1),null);if(cljs.core._EQ_.call(null,v_14066,view))
{domina.add_class_BANG_.call(null,body,body_class_14067);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14067);
}
{
var G__14068 = seq__14055_14061;
var G__14069 = chunk__14056_14062;
var G__14070 = count__14057_14063;
var G__14071 = (i__14058_14064 + (1));
seq__14055_14061 = G__14068;
chunk__14056_14062 = G__14069;
count__14057_14063 = G__14070;
i__14058_14064 = G__14071;
continue;
}
} else
{var temp__4126__auto___14072 = cljs.core.seq.call(null,seq__14055_14061);if(temp__4126__auto___14072)
{var seq__14055_14073__$1 = temp__4126__auto___14072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14055_14073__$1))
{var c__4314__auto___14074 = cljs.core.chunk_first.call(null,seq__14055_14073__$1);{
var G__14075 = cljs.core.chunk_rest.call(null,seq__14055_14073__$1);
var G__14076 = c__4314__auto___14074;
var G__14077 = cljs.core.count.call(null,c__4314__auto___14074);
var G__14078 = (0);
seq__14055_14061 = G__14075;
chunk__14056_14062 = G__14076;
count__14057_14063 = G__14077;
i__14058_14064 = G__14078;
continue;
}
} else
{var vec__14060_14079 = cljs.core.first.call(null,seq__14055_14073__$1);var v_14080 = cljs.core.nth.call(null,vec__14060_14079,(0),null);var body_class_14081 = cljs.core.nth.call(null,vec__14060_14079,(1),null);if(cljs.core._EQ_.call(null,v_14080,view))
{domina.add_class_BANG_.call(null,body,body_class_14081);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14081);
}
{
var G__14082 = cljs.core.next.call(null,seq__14055_14073__$1);
var G__14083 = null;
var G__14084 = (0);
var G__14085 = (0);
seq__14055_14061 = G__14082;
chunk__14056_14062 = G__14083;
count__14057_14063 = G__14084;
i__14058_14064 = G__14085;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14092 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14093 = null;var count__14094 = (0);var i__14095 = (0);while(true){
if((i__14095 < count__14094))
{var vec__14096 = cljs.core._nth.call(null,chunk__14093,i__14095);var v = cljs.core.nth.call(null,vec__14096,(0),null);var _ = cljs.core.nth.call(null,vec__14096,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14092,chunk__14093,count__14094,i__14095,vec__14096,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14092,chunk__14093,count__14094,i__14095,vec__14096,v,_))
);
{
var G__14098 = seq__14092;
var G__14099 = chunk__14093;
var G__14100 = count__14094;
var G__14101 = (i__14095 + (1));
seq__14092 = G__14098;
chunk__14093 = G__14099;
count__14094 = G__14100;
i__14095 = G__14101;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14092);if(temp__4126__auto__)
{var seq__14092__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14092__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__14092__$1);{
var G__14102 = cljs.core.chunk_rest.call(null,seq__14092__$1);
var G__14103 = c__4314__auto__;
var G__14104 = cljs.core.count.call(null,c__4314__auto__);
var G__14105 = (0);
seq__14092 = G__14102;
chunk__14093 = G__14103;
count__14094 = G__14104;
i__14095 = G__14105;
continue;
}
} else
{var vec__14097 = cljs.core.first.call(null,seq__14092__$1);var v = cljs.core.nth.call(null,vec__14097,(0),null);var _ = cljs.core.nth.call(null,vec__14097,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14092,chunk__14093,count__14094,i__14095,vec__14097,v,_,seq__14092__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14092,chunk__14093,count__14094,i__14095,vec__14097,v,_,seq__14092__$1,temp__4126__auto__))
);
{
var G__14106 = cljs.core.next.call(null,seq__14092__$1);
var G__14107 = null;
var G__14108 = (0);
var G__14109 = (0);
seq__14092 = G__14106;
chunk__14093 = G__14107;
count__14094 = G__14108;
i__14095 = G__14109;
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
