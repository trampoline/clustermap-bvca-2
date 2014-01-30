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
var seq__32015 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32016 = null;var count__32017 = 0;var i__32018 = 0;while(true){
if((i__32018 < count__32017))
{var vec__32019 = cljs.core._nth.call(null,chunk__32016,i__32018);var v = cljs.core.nth.call(null,vec__32019,0,null);var body_class = cljs.core.nth.call(null,vec__32019,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__32021 = seq__32015;
var G__32022 = chunk__32016;
var G__32023 = count__32017;
var G__32024 = (i__32018 + 1);
seq__32015 = G__32021;
chunk__32016 = G__32022;
count__32017 = G__32023;
i__32018 = G__32024;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32015);if(temp__4092__auto__)
{var seq__32015__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32015__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32015__$1);{
var G__32025 = cljs.core.chunk_rest.call(null,seq__32015__$1);
var G__32026 = c__4148__auto__;
var G__32027 = cljs.core.count.call(null,c__4148__auto__);
var G__32028 = 0;
seq__32015 = G__32025;
chunk__32016 = G__32026;
count__32017 = G__32027;
i__32018 = G__32028;
continue;
}
} else
{var vec__32020 = cljs.core.first.call(null,seq__32015__$1);var v = cljs.core.nth.call(null,vec__32020,0,null);var body_class = cljs.core.nth.call(null,vec__32020,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__32029 = cljs.core.next.call(null,seq__32015__$1);
var G__32030 = null;
var G__32031 = 0;
var G__32032 = 0;
seq__32015 = G__32029;
chunk__32016 = G__32030;
count__32017 = G__32031;
i__32018 = G__32032;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32039 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32040 = null;var count__32041 = 0;var i__32042 = 0;while(true){
if((i__32042 < count__32041))
{var vec__32043 = cljs.core._nth.call(null,chunk__32040,i__32042);var v = cljs.core.nth.call(null,vec__32043,0,null);var _ = cljs.core.nth.call(null,vec__32043,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32039,chunk__32040,count__32041,i__32042,vec__32043,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32039,chunk__32040,count__32041,i__32042,vec__32043,v,_))
);
{
var G__32045 = seq__32039;
var G__32046 = chunk__32040;
var G__32047 = count__32041;
var G__32048 = (i__32042 + 1);
seq__32039 = G__32045;
chunk__32040 = G__32046;
count__32041 = G__32047;
i__32042 = G__32048;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32039);if(temp__4092__auto__)
{var seq__32039__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32039__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32039__$1);{
var G__32049 = cljs.core.chunk_rest.call(null,seq__32039__$1);
var G__32050 = c__4148__auto__;
var G__32051 = cljs.core.count.call(null,c__4148__auto__);
var G__32052 = 0;
seq__32039 = G__32049;
chunk__32040 = G__32050;
count__32041 = G__32051;
i__32042 = G__32052;
continue;
}
} else
{var vec__32044 = cljs.core.first.call(null,seq__32039__$1);var v = cljs.core.nth.call(null,vec__32044,0,null);var _ = cljs.core.nth.call(null,vec__32044,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32039,chunk__32040,count__32041,i__32042,vec__32044,v,_,seq__32039__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32039,chunk__32040,count__32041,i__32042,vec__32044,v,_,seq__32039__$1,temp__4092__auto__))
);
{
var G__32053 = cljs.core.next.call(null,seq__32039__$1);
var G__32054 = null;
var G__32055 = 0;
var G__32056 = 0;
seq__32039 = G__32053;
chunk__32040 = G__32054;
count__32041 = G__32055;
i__32042 = G__32056;
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
