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
var seq__31958 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31959 = null;var count__31960 = 0;var i__31961 = 0;while(true){
if((i__31961 < count__31960))
{var vec__31962 = cljs.core._nth.call(null,chunk__31959,i__31961);var v = cljs.core.nth.call(null,vec__31962,0,null);var body_class = cljs.core.nth.call(null,vec__31962,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__31964 = seq__31958;
var G__31965 = chunk__31959;
var G__31966 = count__31960;
var G__31967 = (i__31961 + 1);
seq__31958 = G__31964;
chunk__31959 = G__31965;
count__31960 = G__31966;
i__31961 = G__31967;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31958);if(temp__4092__auto__)
{var seq__31958__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31958__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31958__$1);{
var G__31968 = cljs.core.chunk_rest.call(null,seq__31958__$1);
var G__31969 = c__4148__auto__;
var G__31970 = cljs.core.count.call(null,c__4148__auto__);
var G__31971 = 0;
seq__31958 = G__31968;
chunk__31959 = G__31969;
count__31960 = G__31970;
i__31961 = G__31971;
continue;
}
} else
{var vec__31963 = cljs.core.first.call(null,seq__31958__$1);var v = cljs.core.nth.call(null,vec__31963,0,null);var body_class = cljs.core.nth.call(null,vec__31963,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__31972 = cljs.core.next.call(null,seq__31958__$1);
var G__31973 = null;
var G__31974 = 0;
var G__31975 = 0;
seq__31958 = G__31972;
chunk__31959 = G__31973;
count__31960 = G__31974;
i__31961 = G__31975;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__31982 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31983 = null;var count__31984 = 0;var i__31985 = 0;while(true){
if((i__31985 < count__31984))
{var vec__31986 = cljs.core._nth.call(null,chunk__31983,i__31985);var v = cljs.core.nth.call(null,vec__31986,0,null);var _ = cljs.core.nth.call(null,vec__31986,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__31982,chunk__31983,count__31984,i__31985,vec__31986,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__31982,chunk__31983,count__31984,i__31985,vec__31986,v,_))
);
{
var G__31988 = seq__31982;
var G__31989 = chunk__31983;
var G__31990 = count__31984;
var G__31991 = (i__31985 + 1);
seq__31982 = G__31988;
chunk__31983 = G__31989;
count__31984 = G__31990;
i__31985 = G__31991;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31982);if(temp__4092__auto__)
{var seq__31982__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31982__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31982__$1);{
var G__31992 = cljs.core.chunk_rest.call(null,seq__31982__$1);
var G__31993 = c__4148__auto__;
var G__31994 = cljs.core.count.call(null,c__4148__auto__);
var G__31995 = 0;
seq__31982 = G__31992;
chunk__31983 = G__31993;
count__31984 = G__31994;
i__31985 = G__31995;
continue;
}
} else
{var vec__31987 = cljs.core.first.call(null,seq__31982__$1);var v = cljs.core.nth.call(null,vec__31987,0,null);var _ = cljs.core.nth.call(null,vec__31987,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__31982,chunk__31983,count__31984,i__31985,vec__31987,v,_,seq__31982__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__31982,chunk__31983,count__31984,i__31985,vec__31987,v,_,seq__31982__$1,temp__4092__auto__))
);
{
var G__31996 = cljs.core.next.call(null,seq__31982__$1);
var G__31997 = null;
var G__31998 = 0;
var G__31999 = 0;
seq__31982 = G__31996;
chunk__31983 = G__31997;
count__31984 = G__31998;
i__31985 = G__31999;
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
