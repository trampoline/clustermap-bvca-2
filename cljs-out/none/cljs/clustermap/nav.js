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
var seq__12118_12124 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12119_12125 = null;var count__12120_12126 = 0;var i__12121_12127 = 0;while(true){
if((i__12121_12127 < count__12120_12126))
{var vec__12122_12128 = cljs.core._nth.call(null,chunk__12119_12125,i__12121_12127);var v_12129 = cljs.core.nth.call(null,vec__12122_12128,0,null);var body_class_12130 = cljs.core.nth.call(null,vec__12122_12128,1,null);if(cljs.core._EQ_.call(null,v_12129,view))
{domina.add_class_BANG_.call(null,body,body_class_12130);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12130);
}
{
var G__12131 = seq__12118_12124;
var G__12132 = chunk__12119_12125;
var G__12133 = count__12120_12126;
var G__12134 = (i__12121_12127 + 1);
seq__12118_12124 = G__12131;
chunk__12119_12125 = G__12132;
count__12120_12126 = G__12133;
i__12121_12127 = G__12134;
continue;
}
} else
{var temp__4092__auto___12135 = cljs.core.seq.call(null,seq__12118_12124);if(temp__4092__auto___12135)
{var seq__12118_12136__$1 = temp__4092__auto___12135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12118_12136__$1))
{var c__4148__auto___12137 = cljs.core.chunk_first.call(null,seq__12118_12136__$1);{
var G__12138 = cljs.core.chunk_rest.call(null,seq__12118_12136__$1);
var G__12139 = c__4148__auto___12137;
var G__12140 = cljs.core.count.call(null,c__4148__auto___12137);
var G__12141 = 0;
seq__12118_12124 = G__12138;
chunk__12119_12125 = G__12139;
count__12120_12126 = G__12140;
i__12121_12127 = G__12141;
continue;
}
} else
{var vec__12123_12142 = cljs.core.first.call(null,seq__12118_12136__$1);var v_12143 = cljs.core.nth.call(null,vec__12123_12142,0,null);var body_class_12144 = cljs.core.nth.call(null,vec__12123_12142,1,null);if(cljs.core._EQ_.call(null,v_12143,view))
{domina.add_class_BANG_.call(null,body,body_class_12144);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12144);
}
{
var G__12145 = cljs.core.next.call(null,seq__12118_12136__$1);
var G__12146 = null;
var G__12147 = 0;
var G__12148 = 0;
seq__12118_12124 = G__12145;
chunk__12119_12125 = G__12146;
count__12120_12126 = G__12147;
i__12121_12127 = G__12148;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12155 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12156 = null;var count__12157 = 0;var i__12158 = 0;while(true){
if((i__12158 < count__12157))
{var vec__12159 = cljs.core._nth.call(null,chunk__12156,i__12158);var v = cljs.core.nth.call(null,vec__12159,0,null);var _ = cljs.core.nth.call(null,vec__12159,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12155,chunk__12156,count__12157,i__12158,vec__12159,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12155,chunk__12156,count__12157,i__12158,vec__12159,v,_))
);
{
var G__12161 = seq__12155;
var G__12162 = chunk__12156;
var G__12163 = count__12157;
var G__12164 = (i__12158 + 1);
seq__12155 = G__12161;
chunk__12156 = G__12162;
count__12157 = G__12163;
i__12158 = G__12164;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12155);if(temp__4092__auto__)
{var seq__12155__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12155__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12155__$1);{
var G__12165 = cljs.core.chunk_rest.call(null,seq__12155__$1);
var G__12166 = c__4148__auto__;
var G__12167 = cljs.core.count.call(null,c__4148__auto__);
var G__12168 = 0;
seq__12155 = G__12165;
chunk__12156 = G__12166;
count__12157 = G__12167;
i__12158 = G__12168;
continue;
}
} else
{var vec__12160 = cljs.core.first.call(null,seq__12155__$1);var v = cljs.core.nth.call(null,vec__12160,0,null);var _ = cljs.core.nth.call(null,vec__12160,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12155,chunk__12156,count__12157,i__12158,vec__12160,v,_,seq__12155__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12155,chunk__12156,count__12157,i__12158,vec__12160,v,_,seq__12155__$1,temp__4092__auto__))
);
{
var G__12169 = cljs.core.next.call(null,seq__12155__$1);
var G__12170 = null;
var G__12171 = 0;
var G__12172 = 0;
seq__12155 = G__12169;
chunk__12156 = G__12170;
count__12157 = G__12171;
i__12158 = G__12172;
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