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
var seq__12901_12907 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12902_12908 = null;var count__12903_12909 = 0;var i__12904_12910 = 0;while(true){
if((i__12904_12910 < count__12903_12909))
{var vec__12905_12911 = cljs.core._nth.call(null,chunk__12902_12908,i__12904_12910);var v_12912 = cljs.core.nth.call(null,vec__12905_12911,0,null);var body_class_12913 = cljs.core.nth.call(null,vec__12905_12911,1,null);if(cljs.core._EQ_.call(null,v_12912,view))
{domina.add_class_BANG_.call(null,body,body_class_12913);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12913);
}
{
var G__12914 = seq__12901_12907;
var G__12915 = chunk__12902_12908;
var G__12916 = count__12903_12909;
var G__12917 = (i__12904_12910 + 1);
seq__12901_12907 = G__12914;
chunk__12902_12908 = G__12915;
count__12903_12909 = G__12916;
i__12904_12910 = G__12917;
continue;
}
} else
{var temp__4092__auto___12918 = cljs.core.seq.call(null,seq__12901_12907);if(temp__4092__auto___12918)
{var seq__12901_12919__$1 = temp__4092__auto___12918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12901_12919__$1))
{var c__4189__auto___12920 = cljs.core.chunk_first.call(null,seq__12901_12919__$1);{
var G__12921 = cljs.core.chunk_rest.call(null,seq__12901_12919__$1);
var G__12922 = c__4189__auto___12920;
var G__12923 = cljs.core.count.call(null,c__4189__auto___12920);
var G__12924 = 0;
seq__12901_12907 = G__12921;
chunk__12902_12908 = G__12922;
count__12903_12909 = G__12923;
i__12904_12910 = G__12924;
continue;
}
} else
{var vec__12906_12925 = cljs.core.first.call(null,seq__12901_12919__$1);var v_12926 = cljs.core.nth.call(null,vec__12906_12925,0,null);var body_class_12927 = cljs.core.nth.call(null,vec__12906_12925,1,null);if(cljs.core._EQ_.call(null,v_12926,view))
{domina.add_class_BANG_.call(null,body,body_class_12927);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12927);
}
{
var G__12928 = cljs.core.next.call(null,seq__12901_12919__$1);
var G__12929 = null;
var G__12930 = 0;
var G__12931 = 0;
seq__12901_12907 = G__12928;
chunk__12902_12908 = G__12929;
count__12903_12909 = G__12930;
i__12904_12910 = G__12931;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12938 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12939 = null;var count__12940 = 0;var i__12941 = 0;while(true){
if((i__12941 < count__12940))
{var vec__12942 = cljs.core._nth.call(null,chunk__12939,i__12941);var v = cljs.core.nth.call(null,vec__12942,0,null);var _ = cljs.core.nth.call(null,vec__12942,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12938,chunk__12939,count__12940,i__12941,vec__12942,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12938,chunk__12939,count__12940,i__12941,vec__12942,v,_))
);
{
var G__12944 = seq__12938;
var G__12945 = chunk__12939;
var G__12946 = count__12940;
var G__12947 = (i__12941 + 1);
seq__12938 = G__12944;
chunk__12939 = G__12945;
count__12940 = G__12946;
i__12941 = G__12947;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12938);if(temp__4092__auto__)
{var seq__12938__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12938__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12938__$1);{
var G__12948 = cljs.core.chunk_rest.call(null,seq__12938__$1);
var G__12949 = c__4189__auto__;
var G__12950 = cljs.core.count.call(null,c__4189__auto__);
var G__12951 = 0;
seq__12938 = G__12948;
chunk__12939 = G__12949;
count__12940 = G__12950;
i__12941 = G__12951;
continue;
}
} else
{var vec__12943 = cljs.core.first.call(null,seq__12938__$1);var v = cljs.core.nth.call(null,vec__12943,0,null);var _ = cljs.core.nth.call(null,vec__12943,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12938,chunk__12939,count__12940,i__12941,vec__12943,v,_,seq__12938__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12938,chunk__12939,count__12940,i__12941,vec__12943,v,_,seq__12938__$1,temp__4092__auto__))
);
{
var G__12952 = cljs.core.next.call(null,seq__12938__$1);
var G__12953 = null;
var G__12954 = 0;
var G__12955 = 0;
seq__12938 = G__12952;
chunk__12939 = G__12953;
count__12940 = G__12954;
i__12941 = G__12955;
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
