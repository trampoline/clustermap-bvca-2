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
var seq__12893_12899 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12894_12900 = null;var count__12895_12901 = 0;var i__12896_12902 = 0;while(true){
if((i__12896_12902 < count__12895_12901))
{var vec__12897_12903 = cljs.core._nth.call(null,chunk__12894_12900,i__12896_12902);var v_12904 = cljs.core.nth.call(null,vec__12897_12903,0,null);var body_class_12905 = cljs.core.nth.call(null,vec__12897_12903,1,null);if(cljs.core._EQ_.call(null,v_12904,view))
{domina.add_class_BANG_.call(null,body,body_class_12905);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12905);
}
{
var G__12906 = seq__12893_12899;
var G__12907 = chunk__12894_12900;
var G__12908 = count__12895_12901;
var G__12909 = (i__12896_12902 + 1);
seq__12893_12899 = G__12906;
chunk__12894_12900 = G__12907;
count__12895_12901 = G__12908;
i__12896_12902 = G__12909;
continue;
}
} else
{var temp__4092__auto___12910 = cljs.core.seq.call(null,seq__12893_12899);if(temp__4092__auto___12910)
{var seq__12893_12911__$1 = temp__4092__auto___12910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12893_12911__$1))
{var c__4189__auto___12912 = cljs.core.chunk_first.call(null,seq__12893_12911__$1);{
var G__12913 = cljs.core.chunk_rest.call(null,seq__12893_12911__$1);
var G__12914 = c__4189__auto___12912;
var G__12915 = cljs.core.count.call(null,c__4189__auto___12912);
var G__12916 = 0;
seq__12893_12899 = G__12913;
chunk__12894_12900 = G__12914;
count__12895_12901 = G__12915;
i__12896_12902 = G__12916;
continue;
}
} else
{var vec__12898_12917 = cljs.core.first.call(null,seq__12893_12911__$1);var v_12918 = cljs.core.nth.call(null,vec__12898_12917,0,null);var body_class_12919 = cljs.core.nth.call(null,vec__12898_12917,1,null);if(cljs.core._EQ_.call(null,v_12918,view))
{domina.add_class_BANG_.call(null,body,body_class_12919);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12919);
}
{
var G__12920 = cljs.core.next.call(null,seq__12893_12911__$1);
var G__12921 = null;
var G__12922 = 0;
var G__12923 = 0;
seq__12893_12899 = G__12920;
chunk__12894_12900 = G__12921;
count__12895_12901 = G__12922;
i__12896_12902 = G__12923;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12930 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12931 = null;var count__12932 = 0;var i__12933 = 0;while(true){
if((i__12933 < count__12932))
{var vec__12934 = cljs.core._nth.call(null,chunk__12931,i__12933);var v = cljs.core.nth.call(null,vec__12934,0,null);var _ = cljs.core.nth.call(null,vec__12934,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12930,chunk__12931,count__12932,i__12933,vec__12934,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12930,chunk__12931,count__12932,i__12933,vec__12934,v,_))
);
{
var G__12936 = seq__12930;
var G__12937 = chunk__12931;
var G__12938 = count__12932;
var G__12939 = (i__12933 + 1);
seq__12930 = G__12936;
chunk__12931 = G__12937;
count__12932 = G__12938;
i__12933 = G__12939;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12930);if(temp__4092__auto__)
{var seq__12930__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12930__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12930__$1);{
var G__12940 = cljs.core.chunk_rest.call(null,seq__12930__$1);
var G__12941 = c__4189__auto__;
var G__12942 = cljs.core.count.call(null,c__4189__auto__);
var G__12943 = 0;
seq__12930 = G__12940;
chunk__12931 = G__12941;
count__12932 = G__12942;
i__12933 = G__12943;
continue;
}
} else
{var vec__12935 = cljs.core.first.call(null,seq__12930__$1);var v = cljs.core.nth.call(null,vec__12935,0,null);var _ = cljs.core.nth.call(null,vec__12935,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12930,chunk__12931,count__12932,i__12933,vec__12935,v,_,seq__12930__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12930,chunk__12931,count__12932,i__12933,vec__12935,v,_,seq__12930__$1,temp__4092__auto__))
);
{
var G__12944 = cljs.core.next.call(null,seq__12930__$1);
var G__12945 = null;
var G__12946 = 0;
var G__12947 = 0;
seq__12930 = G__12944;
chunk__12931 = G__12945;
count__12932 = G__12946;
i__12933 = G__12947;
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
