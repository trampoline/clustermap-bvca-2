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
var seq__31985 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31986 = null;var count__31987 = 0;var i__31988 = 0;while(true){
if((i__31988 < count__31987))
{var vec__31989 = cljs.core._nth.call(null,chunk__31986,i__31988);var v = cljs.core.nth.call(null,vec__31989,0,null);var body_class = cljs.core.nth.call(null,vec__31989,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__31991 = seq__31985;
var G__31992 = chunk__31986;
var G__31993 = count__31987;
var G__31994 = (i__31988 + 1);
seq__31985 = G__31991;
chunk__31986 = G__31992;
count__31987 = G__31993;
i__31988 = G__31994;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31985);if(temp__4092__auto__)
{var seq__31985__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31985__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31985__$1);{
var G__31995 = cljs.core.chunk_rest.call(null,seq__31985__$1);
var G__31996 = c__4148__auto__;
var G__31997 = cljs.core.count.call(null,c__4148__auto__);
var G__31998 = 0;
seq__31985 = G__31995;
chunk__31986 = G__31996;
count__31987 = G__31997;
i__31988 = G__31998;
continue;
}
} else
{var vec__31990 = cljs.core.first.call(null,seq__31985__$1);var v = cljs.core.nth.call(null,vec__31990,0,null);var body_class = cljs.core.nth.call(null,vec__31990,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__31999 = cljs.core.next.call(null,seq__31985__$1);
var G__32000 = null;
var G__32001 = 0;
var G__32002 = 0;
seq__31985 = G__31999;
chunk__31986 = G__32000;
count__31987 = G__32001;
i__31988 = G__32002;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32009 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32010 = null;var count__32011 = 0;var i__32012 = 0;while(true){
if((i__32012 < count__32011))
{var vec__32013 = cljs.core._nth.call(null,chunk__32010,i__32012);var v = cljs.core.nth.call(null,vec__32013,0,null);var _ = cljs.core.nth.call(null,vec__32013,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32009,chunk__32010,count__32011,i__32012,vec__32013,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32009,chunk__32010,count__32011,i__32012,vec__32013,v,_))
);
{
var G__32015 = seq__32009;
var G__32016 = chunk__32010;
var G__32017 = count__32011;
var G__32018 = (i__32012 + 1);
seq__32009 = G__32015;
chunk__32010 = G__32016;
count__32011 = G__32017;
i__32012 = G__32018;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32009);if(temp__4092__auto__)
{var seq__32009__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32009__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32009__$1);{
var G__32019 = cljs.core.chunk_rest.call(null,seq__32009__$1);
var G__32020 = c__4148__auto__;
var G__32021 = cljs.core.count.call(null,c__4148__auto__);
var G__32022 = 0;
seq__32009 = G__32019;
chunk__32010 = G__32020;
count__32011 = G__32021;
i__32012 = G__32022;
continue;
}
} else
{var vec__32014 = cljs.core.first.call(null,seq__32009__$1);var v = cljs.core.nth.call(null,vec__32014,0,null);var _ = cljs.core.nth.call(null,vec__32014,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32009,chunk__32010,count__32011,i__32012,vec__32014,v,_,seq__32009__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32009,chunk__32010,count__32011,i__32012,vec__32014,v,_,seq__32009__$1,temp__4092__auto__))
);
{
var G__32023 = cljs.core.next.call(null,seq__32009__$1);
var G__32024 = null;
var G__32025 = 0;
var G__32026 = 0;
seq__32009 = G__32023;
chunk__32010 = G__32024;
count__32011 = G__32025;
i__32012 = G__32026;
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
