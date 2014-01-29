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
clustermap.nav.select_view = (function select_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__31951_31957 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31952_31958 = null;var count__31953_31959 = 0;var i__31954_31960 = 0;while(true){
if((i__31954_31960 < count__31953_31959))
{var vec__31955_31961 = cljs.core._nth.call(null,chunk__31952_31958,i__31954_31960);var v_31962 = cljs.core.nth.call(null,vec__31955_31961,0,null);var body_class_31963 = cljs.core.nth.call(null,vec__31955_31961,1,null);if(cljs.core._EQ_.call(null,v_31962,view))
{domina.add_class_BANG_.call(null,body,body_class_31963);
} else
{domina.remove_class_BANG_.call(null,body,body_class_31963);
}
{
var G__31964 = seq__31951_31957;
var G__31965 = chunk__31952_31958;
var G__31966 = count__31953_31959;
var G__31967 = (i__31954_31960 + 1);
seq__31951_31957 = G__31964;
chunk__31952_31958 = G__31965;
count__31953_31959 = G__31966;
i__31954_31960 = G__31967;
continue;
}
} else
{var temp__4092__auto___31968 = cljs.core.seq.call(null,seq__31951_31957);if(temp__4092__auto___31968)
{var seq__31951_31969__$1 = temp__4092__auto___31968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31951_31969__$1))
{var c__4148__auto___31970 = cljs.core.chunk_first.call(null,seq__31951_31969__$1);{
var G__31971 = cljs.core.chunk_rest.call(null,seq__31951_31969__$1);
var G__31972 = c__4148__auto___31970;
var G__31973 = cljs.core.count.call(null,c__4148__auto___31970);
var G__31974 = 0;
seq__31951_31957 = G__31971;
chunk__31952_31958 = G__31972;
count__31953_31959 = G__31973;
i__31954_31960 = G__31974;
continue;
}
} else
{var vec__31956_31975 = cljs.core.first.call(null,seq__31951_31969__$1);var v_31976 = cljs.core.nth.call(null,vec__31956_31975,0,null);var body_class_31977 = cljs.core.nth.call(null,vec__31956_31975,1,null);if(cljs.core._EQ_.call(null,v_31976,view))
{domina.add_class_BANG_.call(null,body,body_class_31977);
} else
{domina.remove_class_BANG_.call(null,body,body_class_31977);
}
{
var G__31978 = cljs.core.next.call(null,seq__31951_31969__$1);
var G__31979 = null;
var G__31980 = 0;
var G__31981 = 0;
seq__31951_31957 = G__31978;
chunk__31952_31958 = G__31979;
count__31953_31959 = G__31980;
i__31954_31960 = G__31981;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,window).trigger("resize");
});
clustermap.nav.handle_view_switches = (function handle_view_switches(){var seq__31988 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31989 = null;var count__31990 = 0;var i__31991 = 0;while(true){
if((i__31991 < count__31990))
{var vec__31992 = cljs.core._nth.call(null,chunk__31989,i__31991);var v = cljs.core.nth.call(null,vec__31992,0,null);var _ = cljs.core.nth.call(null,vec__31992,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__31988,chunk__31989,count__31990,i__31991,vec__31992,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return clustermap.nav.select_view.call(null,v);
});})(seq__31988,chunk__31989,count__31990,i__31991,vec__31992,v,_))
);
{
var G__31994 = seq__31988;
var G__31995 = chunk__31989;
var G__31996 = count__31990;
var G__31997 = (i__31991 + 1);
seq__31988 = G__31994;
chunk__31989 = G__31995;
count__31990 = G__31996;
i__31991 = G__31997;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31988);if(temp__4092__auto__)
{var seq__31988__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31988__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31988__$1);{
var G__31998 = cljs.core.chunk_rest.call(null,seq__31988__$1);
var G__31999 = c__4148__auto__;
var G__32000 = cljs.core.count.call(null,c__4148__auto__);
var G__32001 = 0;
seq__31988 = G__31998;
chunk__31989 = G__31999;
count__31990 = G__32000;
i__31991 = G__32001;
continue;
}
} else
{var vec__31993 = cljs.core.first.call(null,seq__31988__$1);var v = cljs.core.nth.call(null,vec__31993,0,null);var _ = cljs.core.nth.call(null,vec__31993,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__31988,chunk__31989,count__31990,i__31991,vec__31993,v,_,seq__31988__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return clustermap.nav.select_view.call(null,v);
});})(seq__31988,chunk__31989,count__31990,i__31991,vec__31993,v,_,seq__31988__$1,temp__4092__auto__))
);
{
var G__32002 = cljs.core.next.call(null,seq__31988__$1);
var G__32003 = null;
var G__32004 = 0;
var G__32005 = 0;
seq__31988 = G__32002;
chunk__31989 = G__32003;
count__31990 = G__32004;
i__31991 = G__32005;
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
clustermap.nav.init = (function init(){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null);
});
