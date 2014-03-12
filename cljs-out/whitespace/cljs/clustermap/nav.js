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
var seq__45888_45894 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45889_45895 = null;var count__45890_45896 = 0;var i__45891_45897 = 0;while(true){
if((i__45891_45897 < count__45890_45896))
{var vec__45892_45898 = cljs.core._nth.call(null,chunk__45889_45895,i__45891_45897);var v_45899 = cljs.core.nth.call(null,vec__45892_45898,0,null);var body_class_45900 = cljs.core.nth.call(null,vec__45892_45898,1,null);if(cljs.core._EQ_.call(null,v_45899,view))
{domina.add_class_BANG_.call(null,body,body_class_45900);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45900);
}
{
var G__45901 = seq__45888_45894;
var G__45902 = chunk__45889_45895;
var G__45903 = count__45890_45896;
var G__45904 = (i__45891_45897 + 1);
seq__45888_45894 = G__45901;
chunk__45889_45895 = G__45902;
count__45890_45896 = G__45903;
i__45891_45897 = G__45904;
continue;
}
} else
{var temp__4092__auto___45905 = cljs.core.seq.call(null,seq__45888_45894);if(temp__4092__auto___45905)
{var seq__45888_45906__$1 = temp__4092__auto___45905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45888_45906__$1))
{var c__4189__auto___45907 = cljs.core.chunk_first.call(null,seq__45888_45906__$1);{
var G__45908 = cljs.core.chunk_rest.call(null,seq__45888_45906__$1);
var G__45909 = c__4189__auto___45907;
var G__45910 = cljs.core.count.call(null,c__4189__auto___45907);
var G__45911 = 0;
seq__45888_45894 = G__45908;
chunk__45889_45895 = G__45909;
count__45890_45896 = G__45910;
i__45891_45897 = G__45911;
continue;
}
} else
{var vec__45893_45912 = cljs.core.first.call(null,seq__45888_45906__$1);var v_45913 = cljs.core.nth.call(null,vec__45893_45912,0,null);var body_class_45914 = cljs.core.nth.call(null,vec__45893_45912,1,null);if(cljs.core._EQ_.call(null,v_45913,view))
{domina.add_class_BANG_.call(null,body,body_class_45914);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45914);
}
{
var G__45915 = cljs.core.next.call(null,seq__45888_45906__$1);
var G__45916 = null;
var G__45917 = 0;
var G__45918 = 0;
seq__45888_45894 = G__45915;
chunk__45889_45895 = G__45916;
count__45890_45896 = G__45917;
i__45891_45897 = G__45918;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__45925 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45926 = null;var count__45927 = 0;var i__45928 = 0;while(true){
if((i__45928 < count__45927))
{var vec__45929 = cljs.core._nth.call(null,chunk__45926,i__45928);var v = cljs.core.nth.call(null,vec__45929,0,null);var _ = cljs.core.nth.call(null,vec__45929,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45925,chunk__45926,count__45927,i__45928,vec__45929,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45925,chunk__45926,count__45927,i__45928,vec__45929,v,_))
);
{
var G__45931 = seq__45925;
var G__45932 = chunk__45926;
var G__45933 = count__45927;
var G__45934 = (i__45928 + 1);
seq__45925 = G__45931;
chunk__45926 = G__45932;
count__45927 = G__45933;
i__45928 = G__45934;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45925);if(temp__4092__auto__)
{var seq__45925__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45925__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__45925__$1);{
var G__45935 = cljs.core.chunk_rest.call(null,seq__45925__$1);
var G__45936 = c__4189__auto__;
var G__45937 = cljs.core.count.call(null,c__4189__auto__);
var G__45938 = 0;
seq__45925 = G__45935;
chunk__45926 = G__45936;
count__45927 = G__45937;
i__45928 = G__45938;
continue;
}
} else
{var vec__45930 = cljs.core.first.call(null,seq__45925__$1);var v = cljs.core.nth.call(null,vec__45930,0,null);var _ = cljs.core.nth.call(null,vec__45930,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45925,chunk__45926,count__45927,i__45928,vec__45930,v,_,seq__45925__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45925,chunk__45926,count__45927,i__45928,vec__45930,v,_,seq__45925__$1,temp__4092__auto__))
);
{
var G__45939 = cljs.core.next.call(null,seq__45925__$1);
var G__45940 = null;
var G__45941 = 0;
var G__45942 = 0;
seq__45925 = G__45939;
chunk__45926 = G__45940;
count__45927 = G__45941;
i__45928 = G__45942;
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
