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
var seq__32003 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32004 = null;var count__32005 = 0;var i__32006 = 0;while(true){
if((i__32006 < count__32005))
{var vec__32007 = cljs.core._nth.call(null,chunk__32004,i__32006);var v = cljs.core.nth.call(null,vec__32007,0,null);var body_class = cljs.core.nth.call(null,vec__32007,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__32009 = seq__32003;
var G__32010 = chunk__32004;
var G__32011 = count__32005;
var G__32012 = (i__32006 + 1);
seq__32003 = G__32009;
chunk__32004 = G__32010;
count__32005 = G__32011;
i__32006 = G__32012;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32003);if(temp__4092__auto__)
{var seq__32003__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32003__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32003__$1);{
var G__32013 = cljs.core.chunk_rest.call(null,seq__32003__$1);
var G__32014 = c__4148__auto__;
var G__32015 = cljs.core.count.call(null,c__4148__auto__);
var G__32016 = 0;
seq__32003 = G__32013;
chunk__32004 = G__32014;
count__32005 = G__32015;
i__32006 = G__32016;
continue;
}
} else
{var vec__32008 = cljs.core.first.call(null,seq__32003__$1);var v = cljs.core.nth.call(null,vec__32008,0,null);var body_class = cljs.core.nth.call(null,vec__32008,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__32017 = cljs.core.next.call(null,seq__32003__$1);
var G__32018 = null;
var G__32019 = 0;
var G__32020 = 0;
seq__32003 = G__32017;
chunk__32004 = G__32018;
count__32005 = G__32019;
i__32006 = G__32020;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32027 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32028 = null;var count__32029 = 0;var i__32030 = 0;while(true){
if((i__32030 < count__32029))
{var vec__32031 = cljs.core._nth.call(null,chunk__32028,i__32030);var v = cljs.core.nth.call(null,vec__32031,0,null);var _ = cljs.core.nth.call(null,vec__32031,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32027,chunk__32028,count__32029,i__32030,vec__32031,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32027,chunk__32028,count__32029,i__32030,vec__32031,v,_))
);
{
var G__32033 = seq__32027;
var G__32034 = chunk__32028;
var G__32035 = count__32029;
var G__32036 = (i__32030 + 1);
seq__32027 = G__32033;
chunk__32028 = G__32034;
count__32029 = G__32035;
i__32030 = G__32036;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32027);if(temp__4092__auto__)
{var seq__32027__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32027__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32027__$1);{
var G__32037 = cljs.core.chunk_rest.call(null,seq__32027__$1);
var G__32038 = c__4148__auto__;
var G__32039 = cljs.core.count.call(null,c__4148__auto__);
var G__32040 = 0;
seq__32027 = G__32037;
chunk__32028 = G__32038;
count__32029 = G__32039;
i__32030 = G__32040;
continue;
}
} else
{var vec__32032 = cljs.core.first.call(null,seq__32027__$1);var v = cljs.core.nth.call(null,vec__32032,0,null);var _ = cljs.core.nth.call(null,vec__32032,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__32027,chunk__32028,count__32029,i__32030,vec__32032,v,_,seq__32027__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__32027,chunk__32028,count__32029,i__32030,vec__32032,v,_,seq__32027__$1,temp__4092__auto__))
);
{
var G__32041 = cljs.core.next.call(null,seq__32027__$1);
var G__32042 = null;
var G__32043 = 0;
var G__32044 = 0;
seq__32027 = G__32041;
chunk__32028 = G__32042;
count__32029 = G__32043;
i__32030 = G__32044;
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
