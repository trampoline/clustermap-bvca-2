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
var seq__12925_12931 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12926_12932 = null;var count__12927_12933 = 0;var i__12928_12934 = 0;while(true){
if((i__12928_12934 < count__12927_12933))
{var vec__12929_12935 = cljs.core._nth.call(null,chunk__12926_12932,i__12928_12934);var v_12936 = cljs.core.nth.call(null,vec__12929_12935,0,null);var body_class_12937 = cljs.core.nth.call(null,vec__12929_12935,1,null);if(cljs.core._EQ_.call(null,v_12936,view))
{domina.add_class_BANG_.call(null,body,body_class_12937);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12937);
}
{
var G__12938 = seq__12925_12931;
var G__12939 = chunk__12926_12932;
var G__12940 = count__12927_12933;
var G__12941 = (i__12928_12934 + 1);
seq__12925_12931 = G__12938;
chunk__12926_12932 = G__12939;
count__12927_12933 = G__12940;
i__12928_12934 = G__12941;
continue;
}
} else
{var temp__4092__auto___12942 = cljs.core.seq.call(null,seq__12925_12931);if(temp__4092__auto___12942)
{var seq__12925_12943__$1 = temp__4092__auto___12942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12925_12943__$1))
{var c__4189__auto___12944 = cljs.core.chunk_first.call(null,seq__12925_12943__$1);{
var G__12945 = cljs.core.chunk_rest.call(null,seq__12925_12943__$1);
var G__12946 = c__4189__auto___12944;
var G__12947 = cljs.core.count.call(null,c__4189__auto___12944);
var G__12948 = 0;
seq__12925_12931 = G__12945;
chunk__12926_12932 = G__12946;
count__12927_12933 = G__12947;
i__12928_12934 = G__12948;
continue;
}
} else
{var vec__12930_12949 = cljs.core.first.call(null,seq__12925_12943__$1);var v_12950 = cljs.core.nth.call(null,vec__12930_12949,0,null);var body_class_12951 = cljs.core.nth.call(null,vec__12930_12949,1,null);if(cljs.core._EQ_.call(null,v_12950,view))
{domina.add_class_BANG_.call(null,body,body_class_12951);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12951);
}
{
var G__12952 = cljs.core.next.call(null,seq__12925_12943__$1);
var G__12953 = null;
var G__12954 = 0;
var G__12955 = 0;
seq__12925_12931 = G__12952;
chunk__12926_12932 = G__12953;
count__12927_12933 = G__12954;
i__12928_12934 = G__12955;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12962 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12963 = null;var count__12964 = 0;var i__12965 = 0;while(true){
if((i__12965 < count__12964))
{var vec__12966 = cljs.core._nth.call(null,chunk__12963,i__12965);var v = cljs.core.nth.call(null,vec__12966,0,null);var _ = cljs.core.nth.call(null,vec__12966,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12962,chunk__12963,count__12964,i__12965,vec__12966,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12962,chunk__12963,count__12964,i__12965,vec__12966,v,_))
);
{
var G__12968 = seq__12962;
var G__12969 = chunk__12963;
var G__12970 = count__12964;
var G__12971 = (i__12965 + 1);
seq__12962 = G__12968;
chunk__12963 = G__12969;
count__12964 = G__12970;
i__12965 = G__12971;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12962);if(temp__4092__auto__)
{var seq__12962__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12962__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12962__$1);{
var G__12972 = cljs.core.chunk_rest.call(null,seq__12962__$1);
var G__12973 = c__4189__auto__;
var G__12974 = cljs.core.count.call(null,c__4189__auto__);
var G__12975 = 0;
seq__12962 = G__12972;
chunk__12963 = G__12973;
count__12964 = G__12974;
i__12965 = G__12975;
continue;
}
} else
{var vec__12967 = cljs.core.first.call(null,seq__12962__$1);var v = cljs.core.nth.call(null,vec__12967,0,null);var _ = cljs.core.nth.call(null,vec__12967,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12962,chunk__12963,count__12964,i__12965,vec__12967,v,_,seq__12962__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12962,chunk__12963,count__12964,i__12965,vec__12967,v,_,seq__12962__$1,temp__4092__auto__))
);
{
var G__12976 = cljs.core.next.call(null,seq__12962__$1);
var G__12977 = null;
var G__12978 = 0;
var G__12979 = 0;
seq__12962 = G__12976;
chunk__12963 = G__12977;
count__12964 = G__12978;
i__12965 = G__12979;
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
