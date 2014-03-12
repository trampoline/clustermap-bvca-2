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
var seq__23862_23868 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23863_23869 = null;var count__23864_23870 = 0;var i__23865_23871 = 0;while(true){
if((i__23865_23871 < count__23864_23870))
{var vec__23866_23872 = cljs.core._nth.call(null,chunk__23863_23869,i__23865_23871);var v_23873 = cljs.core.nth.call(null,vec__23866_23872,0,null);var body_class_23874 = cljs.core.nth.call(null,vec__23866_23872,1,null);if(cljs.core._EQ_.call(null,v_23873,view))
{domina.add_class_BANG_.call(null,body,body_class_23874);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23874);
}
{
var G__23875 = seq__23862_23868;
var G__23876 = chunk__23863_23869;
var G__23877 = count__23864_23870;
var G__23878 = (i__23865_23871 + 1);
seq__23862_23868 = G__23875;
chunk__23863_23869 = G__23876;
count__23864_23870 = G__23877;
i__23865_23871 = G__23878;
continue;
}
} else
{var temp__4092__auto___23879 = cljs.core.seq.call(null,seq__23862_23868);if(temp__4092__auto___23879)
{var seq__23862_23880__$1 = temp__4092__auto___23879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23862_23880__$1))
{var c__4189__auto___23881 = cljs.core.chunk_first.call(null,seq__23862_23880__$1);{
var G__23882 = cljs.core.chunk_rest.call(null,seq__23862_23880__$1);
var G__23883 = c__4189__auto___23881;
var G__23884 = cljs.core.count.call(null,c__4189__auto___23881);
var G__23885 = 0;
seq__23862_23868 = G__23882;
chunk__23863_23869 = G__23883;
count__23864_23870 = G__23884;
i__23865_23871 = G__23885;
continue;
}
} else
{var vec__23867_23886 = cljs.core.first.call(null,seq__23862_23880__$1);var v_23887 = cljs.core.nth.call(null,vec__23867_23886,0,null);var body_class_23888 = cljs.core.nth.call(null,vec__23867_23886,1,null);if(cljs.core._EQ_.call(null,v_23887,view))
{domina.add_class_BANG_.call(null,body,body_class_23888);
} else
{domina.remove_class_BANG_.call(null,body,body_class_23888);
}
{
var G__23889 = cljs.core.next.call(null,seq__23862_23880__$1);
var G__23890 = null;
var G__23891 = 0;
var G__23892 = 0;
seq__23862_23868 = G__23889;
chunk__23863_23869 = G__23890;
count__23864_23870 = G__23891;
i__23865_23871 = G__23892;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23899 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__23900 = null;var count__23901 = 0;var i__23902 = 0;while(true){
if((i__23902 < count__23901))
{var vec__23903 = cljs.core._nth.call(null,chunk__23900,i__23902);var v = cljs.core.nth.call(null,vec__23903,0,null);var _ = cljs.core.nth.call(null,vec__23903,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23899,chunk__23900,count__23901,i__23902,vec__23903,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23899,chunk__23900,count__23901,i__23902,vec__23903,v,_))
);
{
var G__23905 = seq__23899;
var G__23906 = chunk__23900;
var G__23907 = count__23901;
var G__23908 = (i__23902 + 1);
seq__23899 = G__23905;
chunk__23900 = G__23906;
count__23901 = G__23907;
i__23902 = G__23908;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23899);if(temp__4092__auto__)
{var seq__23899__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23899__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__23899__$1);{
var G__23909 = cljs.core.chunk_rest.call(null,seq__23899__$1);
var G__23910 = c__4189__auto__;
var G__23911 = cljs.core.count.call(null,c__4189__auto__);
var G__23912 = 0;
seq__23899 = G__23909;
chunk__23900 = G__23910;
count__23901 = G__23911;
i__23902 = G__23912;
continue;
}
} else
{var vec__23904 = cljs.core.first.call(null,seq__23899__$1);var v = cljs.core.nth.call(null,vec__23904,0,null);var _ = cljs.core.nth.call(null,vec__23904,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__23899,chunk__23900,count__23901,i__23902,vec__23904,v,_,seq__23899__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__23899,chunk__23900,count__23901,i__23902,vec__23904,v,_,seq__23899__$1,temp__4092__auto__))
);
{
var G__23913 = cljs.core.next.call(null,seq__23899__$1);
var G__23914 = null;
var G__23915 = 0;
var G__23916 = 0;
seq__23899 = G__23913;
chunk__23900 = G__23914;
count__23901 = G__23915;
i__23902 = G__23916;
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