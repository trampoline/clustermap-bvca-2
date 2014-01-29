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
var seq__12007 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12008 = null;var count__12009 = 0;var i__12010 = 0;while(true){
if((i__12010 < count__12009))
{var vec__12011 = cljs.core._nth.call(null,chunk__12008,i__12010);var v = cljs.core.nth.call(null,vec__12011,0,null);var body_class = cljs.core.nth.call(null,vec__12011,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12013 = seq__12007;
var G__12014 = chunk__12008;
var G__12015 = count__12009;
var G__12016 = (i__12010 + 1);
seq__12007 = G__12013;
chunk__12008 = G__12014;
count__12009 = G__12015;
i__12010 = G__12016;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12007);if(temp__4092__auto__)
{var seq__12007__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12007__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12007__$1);{
var G__12017 = cljs.core.chunk_rest.call(null,seq__12007__$1);
var G__12018 = c__4148__auto__;
var G__12019 = cljs.core.count.call(null,c__4148__auto__);
var G__12020 = 0;
seq__12007 = G__12017;
chunk__12008 = G__12018;
count__12009 = G__12019;
i__12010 = G__12020;
continue;
}
} else
{var vec__12012 = cljs.core.first.call(null,seq__12007__$1);var v = cljs.core.nth.call(null,vec__12012,0,null);var body_class = cljs.core.nth.call(null,vec__12012,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12021 = cljs.core.next.call(null,seq__12007__$1);
var G__12022 = null;
var G__12023 = 0;
var G__12024 = 0;
seq__12007 = G__12021;
chunk__12008 = G__12022;
count__12009 = G__12023;
i__12010 = G__12024;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12031 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12032 = null;var count__12033 = 0;var i__12034 = 0;while(true){
if((i__12034 < count__12033))
{var vec__12035 = cljs.core._nth.call(null,chunk__12032,i__12034);var v = cljs.core.nth.call(null,vec__12035,0,null);var _ = cljs.core.nth.call(null,vec__12035,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12031,chunk__12032,count__12033,i__12034,vec__12035,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12031,chunk__12032,count__12033,i__12034,vec__12035,v,_))
);
{
var G__12037 = seq__12031;
var G__12038 = chunk__12032;
var G__12039 = count__12033;
var G__12040 = (i__12034 + 1);
seq__12031 = G__12037;
chunk__12032 = G__12038;
count__12033 = G__12039;
i__12034 = G__12040;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12031);if(temp__4092__auto__)
{var seq__12031__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12031__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12031__$1);{
var G__12041 = cljs.core.chunk_rest.call(null,seq__12031__$1);
var G__12042 = c__4148__auto__;
var G__12043 = cljs.core.count.call(null,c__4148__auto__);
var G__12044 = 0;
seq__12031 = G__12041;
chunk__12032 = G__12042;
count__12033 = G__12043;
i__12034 = G__12044;
continue;
}
} else
{var vec__12036 = cljs.core.first.call(null,seq__12031__$1);var v = cljs.core.nth.call(null,vec__12036,0,null);var _ = cljs.core.nth.call(null,vec__12036,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12031,chunk__12032,count__12033,i__12034,vec__12036,v,_,seq__12031__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12031,chunk__12032,count__12033,i__12034,vec__12036,v,_,seq__12031__$1,temp__4092__auto__))
);
{
var G__12045 = cljs.core.next.call(null,seq__12031__$1);
var G__12046 = null;
var G__12047 = 0;
var G__12048 = 0;
seq__12031 = G__12045;
chunk__12032 = G__12046;
count__12033 = G__12047;
i__12034 = G__12048;
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

//# sourceMappingURL=nav.js.map