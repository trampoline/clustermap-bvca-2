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
var seq__31925 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31926 = null;var count__31927 = 0;var i__31928 = 0;while(true){
if((i__31928 < count__31927))
{var vec__31929 = cljs.core._nth.call(null,chunk__31926,i__31928);var v = cljs.core.nth.call(null,vec__31929,0,null);var body_class = cljs.core.nth.call(null,vec__31929,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__31931 = seq__31925;
var G__31932 = chunk__31926;
var G__31933 = count__31927;
var G__31934 = (i__31928 + 1);
seq__31925 = G__31931;
chunk__31926 = G__31932;
count__31927 = G__31933;
i__31928 = G__31934;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31925);if(temp__4092__auto__)
{var seq__31925__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31925__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31925__$1);{
var G__31935 = cljs.core.chunk_rest.call(null,seq__31925__$1);
var G__31936 = c__4148__auto__;
var G__31937 = cljs.core.count.call(null,c__4148__auto__);
var G__31938 = 0;
seq__31925 = G__31935;
chunk__31926 = G__31936;
count__31927 = G__31937;
i__31928 = G__31938;
continue;
}
} else
{var vec__31930 = cljs.core.first.call(null,seq__31925__$1);var v = cljs.core.nth.call(null,vec__31930,0,null);var body_class = cljs.core.nth.call(null,vec__31930,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__31939 = cljs.core.next.call(null,seq__31925__$1);
var G__31940 = null;
var G__31941 = 0;
var G__31942 = 0;
seq__31925 = G__31939;
chunk__31926 = G__31940;
count__31927 = G__31941;
i__31928 = G__31942;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__31949 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31950 = null;var count__31951 = 0;var i__31952 = 0;while(true){
if((i__31952 < count__31951))
{var vec__31953 = cljs.core._nth.call(null,chunk__31950,i__31952);var v = cljs.core.nth.call(null,vec__31953,0,null);var _ = cljs.core.nth.call(null,vec__31953,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__31949,chunk__31950,count__31951,i__31952,vec__31953,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__31949,chunk__31950,count__31951,i__31952,vec__31953,v,_))
);
{
var G__31955 = seq__31949;
var G__31956 = chunk__31950;
var G__31957 = count__31951;
var G__31958 = (i__31952 + 1);
seq__31949 = G__31955;
chunk__31950 = G__31956;
count__31951 = G__31957;
i__31952 = G__31958;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31949);if(temp__4092__auto__)
{var seq__31949__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31949__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31949__$1);{
var G__31959 = cljs.core.chunk_rest.call(null,seq__31949__$1);
var G__31960 = c__4148__auto__;
var G__31961 = cljs.core.count.call(null,c__4148__auto__);
var G__31962 = 0;
seq__31949 = G__31959;
chunk__31950 = G__31960;
count__31951 = G__31961;
i__31952 = G__31962;
continue;
}
} else
{var vec__31954 = cljs.core.first.call(null,seq__31949__$1);var v = cljs.core.nth.call(null,vec__31954,0,null);var _ = cljs.core.nth.call(null,vec__31954,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__31949,chunk__31950,count__31951,i__31952,vec__31954,v,_,seq__31949__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__31949,chunk__31950,count__31951,i__31952,vec__31954,v,_,seq__31949__$1,temp__4092__auto__))
);
{
var G__31963 = cljs.core.next.call(null,seq__31949__$1);
var G__31964 = null;
var G__31965 = 0;
var G__31966 = 0;
seq__31949 = G__31963;
chunk__31950 = G__31964;
count__31951 = G__31965;
i__31952 = G__31966;
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
