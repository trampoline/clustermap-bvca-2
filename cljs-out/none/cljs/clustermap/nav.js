// Compiled by ClojureScript 0.0-2173
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
var seq__12849_12855 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12850_12856 = null;var count__12851_12857 = 0;var i__12852_12858 = 0;while(true){
if((i__12852_12858 < count__12851_12857))
{var vec__12853_12859 = cljs.core._nth.call(null,chunk__12850_12856,i__12852_12858);var v_12860 = cljs.core.nth.call(null,vec__12853_12859,0,null);var body_class_12861 = cljs.core.nth.call(null,vec__12853_12859,1,null);if(cljs.core._EQ_.call(null,v_12860,view))
{domina.add_class_BANG_.call(null,body,body_class_12861);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12861);
}
{
var G__12862 = seq__12849_12855;
var G__12863 = chunk__12850_12856;
var G__12864 = count__12851_12857;
var G__12865 = (i__12852_12858 + 1);
seq__12849_12855 = G__12862;
chunk__12850_12856 = G__12863;
count__12851_12857 = G__12864;
i__12852_12858 = G__12865;
continue;
}
} else
{var temp__4092__auto___12866 = cljs.core.seq.call(null,seq__12849_12855);if(temp__4092__auto___12866)
{var seq__12849_12867__$1 = temp__4092__auto___12866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12849_12867__$1))
{var c__4189__auto___12868 = cljs.core.chunk_first.call(null,seq__12849_12867__$1);{
var G__12869 = cljs.core.chunk_rest.call(null,seq__12849_12867__$1);
var G__12870 = c__4189__auto___12868;
var G__12871 = cljs.core.count.call(null,c__4189__auto___12868);
var G__12872 = 0;
seq__12849_12855 = G__12869;
chunk__12850_12856 = G__12870;
count__12851_12857 = G__12871;
i__12852_12858 = G__12872;
continue;
}
} else
{var vec__12854_12873 = cljs.core.first.call(null,seq__12849_12867__$1);var v_12874 = cljs.core.nth.call(null,vec__12854_12873,0,null);var body_class_12875 = cljs.core.nth.call(null,vec__12854_12873,1,null);if(cljs.core._EQ_.call(null,v_12874,view))
{domina.add_class_BANG_.call(null,body,body_class_12875);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12875);
}
{
var G__12876 = cljs.core.next.call(null,seq__12849_12867__$1);
var G__12877 = null;
var G__12878 = 0;
var G__12879 = 0;
seq__12849_12855 = G__12876;
chunk__12850_12856 = G__12877;
count__12851_12857 = G__12878;
i__12852_12858 = G__12879;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12886 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12887 = null;var count__12888 = 0;var i__12889 = 0;while(true){
if((i__12889 < count__12888))
{var vec__12890 = cljs.core._nth.call(null,chunk__12887,i__12889);var v = cljs.core.nth.call(null,vec__12890,0,null);var _ = cljs.core.nth.call(null,vec__12890,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12886,chunk__12887,count__12888,i__12889,vec__12890,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12886,chunk__12887,count__12888,i__12889,vec__12890,v,_))
);
{
var G__12892 = seq__12886;
var G__12893 = chunk__12887;
var G__12894 = count__12888;
var G__12895 = (i__12889 + 1);
seq__12886 = G__12892;
chunk__12887 = G__12893;
count__12888 = G__12894;
i__12889 = G__12895;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12886);if(temp__4092__auto__)
{var seq__12886__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12886__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12886__$1);{
var G__12896 = cljs.core.chunk_rest.call(null,seq__12886__$1);
var G__12897 = c__4189__auto__;
var G__12898 = cljs.core.count.call(null,c__4189__auto__);
var G__12899 = 0;
seq__12886 = G__12896;
chunk__12887 = G__12897;
count__12888 = G__12898;
i__12889 = G__12899;
continue;
}
} else
{var vec__12891 = cljs.core.first.call(null,seq__12886__$1);var v = cljs.core.nth.call(null,vec__12891,0,null);var _ = cljs.core.nth.call(null,vec__12891,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12886,chunk__12887,count__12888,i__12889,vec__12891,v,_,seq__12886__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12886,chunk__12887,count__12888,i__12889,vec__12891,v,_,seq__12886__$1,temp__4092__auto__))
);
{
var G__12900 = cljs.core.next.call(null,seq__12886__$1);
var G__12901 = null;
var G__12902 = 0;
var G__12903 = 0;
seq__12886 = G__12900;
chunk__12887 = G__12901;
count__12888 = G__12902;
i__12889 = G__12903;
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