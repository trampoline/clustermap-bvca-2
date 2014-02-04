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
var seq__12130 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12131 = null;var count__12132 = 0;var i__12133 = 0;while(true){
if((i__12133 < count__12132))
{var vec__12134 = cljs.core._nth.call(null,chunk__12131,i__12133);var v = cljs.core.nth.call(null,vec__12134,0,null);var body_class = cljs.core.nth.call(null,vec__12134,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12136 = seq__12130;
var G__12137 = chunk__12131;
var G__12138 = count__12132;
var G__12139 = (i__12133 + 1);
seq__12130 = G__12136;
chunk__12131 = G__12137;
count__12132 = G__12138;
i__12133 = G__12139;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12130);if(temp__4092__auto__)
{var seq__12130__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12130__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12130__$1);{
var G__12140 = cljs.core.chunk_rest.call(null,seq__12130__$1);
var G__12141 = c__4148__auto__;
var G__12142 = cljs.core.count.call(null,c__4148__auto__);
var G__12143 = 0;
seq__12130 = G__12140;
chunk__12131 = G__12141;
count__12132 = G__12142;
i__12133 = G__12143;
continue;
}
} else
{var vec__12135 = cljs.core.first.call(null,seq__12130__$1);var v = cljs.core.nth.call(null,vec__12135,0,null);var body_class = cljs.core.nth.call(null,vec__12135,1,null);if(cljs.core._EQ_.call(null,v,view))
{domina.add_class_BANG_.call(null,body,body_class);
} else
{domina.remove_class_BANG_.call(null,body,body_class);
}
{
var G__12144 = cljs.core.next.call(null,seq__12130__$1);
var G__12145 = null;
var G__12146 = 0;
var G__12147 = 0;
seq__12130 = G__12144;
chunk__12131 = G__12145;
count__12132 = G__12146;
i__12133 = G__12147;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12154 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12155 = null;var count__12156 = 0;var i__12157 = 0;while(true){
if((i__12157 < count__12156))
{var vec__12158 = cljs.core._nth.call(null,chunk__12155,i__12157);var v = cljs.core.nth.call(null,vec__12158,0,null);var _ = cljs.core.nth.call(null,vec__12158,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12154,chunk__12155,count__12156,i__12157,vec__12158,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12154,chunk__12155,count__12156,i__12157,vec__12158,v,_))
);
{
var G__12160 = seq__12154;
var G__12161 = chunk__12155;
var G__12162 = count__12156;
var G__12163 = (i__12157 + 1);
seq__12154 = G__12160;
chunk__12155 = G__12161;
count__12156 = G__12162;
i__12157 = G__12163;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12154);if(temp__4092__auto__)
{var seq__12154__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12154__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12154__$1);{
var G__12164 = cljs.core.chunk_rest.call(null,seq__12154__$1);
var G__12165 = c__4148__auto__;
var G__12166 = cljs.core.count.call(null,c__4148__auto__);
var G__12167 = 0;
seq__12154 = G__12164;
chunk__12155 = G__12165;
count__12156 = G__12166;
i__12157 = G__12167;
continue;
}
} else
{var vec__12159 = cljs.core.first.call(null,seq__12154__$1);var v = cljs.core.nth.call(null,vec__12159,0,null);var _ = cljs.core.nth.call(null,vec__12159,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12154,chunk__12155,count__12156,i__12157,vec__12159,v,_,seq__12154__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12154,chunk__12155,count__12156,i__12157,vec__12159,v,_,seq__12154__$1,temp__4092__auto__))
);
{
var G__12168 = cljs.core.next.call(null,seq__12154__$1);
var G__12169 = null;
var G__12170 = 0;
var G__12171 = 0;
seq__12154 = G__12168;
chunk__12155 = G__12169;
count__12156 = G__12170;
i__12157 = G__12171;
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