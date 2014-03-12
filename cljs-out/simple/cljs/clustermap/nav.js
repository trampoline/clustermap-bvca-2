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
var seq__12921_12927 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12922_12928 = null;var count__12923_12929 = 0;var i__12924_12930 = 0;while(true){
if((i__12924_12930 < count__12923_12929))
{var vec__12925_12931 = cljs.core._nth.call(null,chunk__12922_12928,i__12924_12930);var v_12932 = cljs.core.nth.call(null,vec__12925_12931,0,null);var body_class_12933 = cljs.core.nth.call(null,vec__12925_12931,1,null);if(cljs.core._EQ_.call(null,v_12932,view))
{domina.add_class_BANG_.call(null,body,body_class_12933);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12933);
}
{
var G__12934 = seq__12921_12927;
var G__12935 = chunk__12922_12928;
var G__12936 = count__12923_12929;
var G__12937 = (i__12924_12930 + 1);
seq__12921_12927 = G__12934;
chunk__12922_12928 = G__12935;
count__12923_12929 = G__12936;
i__12924_12930 = G__12937;
continue;
}
} else
{var temp__4092__auto___12938 = cljs.core.seq.call(null,seq__12921_12927);if(temp__4092__auto___12938)
{var seq__12921_12939__$1 = temp__4092__auto___12938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12921_12939__$1))
{var c__4189__auto___12940 = cljs.core.chunk_first.call(null,seq__12921_12939__$1);{
var G__12941 = cljs.core.chunk_rest.call(null,seq__12921_12939__$1);
var G__12942 = c__4189__auto___12940;
var G__12943 = cljs.core.count.call(null,c__4189__auto___12940);
var G__12944 = 0;
seq__12921_12927 = G__12941;
chunk__12922_12928 = G__12942;
count__12923_12929 = G__12943;
i__12924_12930 = G__12944;
continue;
}
} else
{var vec__12926_12945 = cljs.core.first.call(null,seq__12921_12939__$1);var v_12946 = cljs.core.nth.call(null,vec__12926_12945,0,null);var body_class_12947 = cljs.core.nth.call(null,vec__12926_12945,1,null);if(cljs.core._EQ_.call(null,v_12946,view))
{domina.add_class_BANG_.call(null,body,body_class_12947);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12947);
}
{
var G__12948 = cljs.core.next.call(null,seq__12921_12939__$1);
var G__12949 = null;
var G__12950 = 0;
var G__12951 = 0;
seq__12921_12927 = G__12948;
chunk__12922_12928 = G__12949;
count__12923_12929 = G__12950;
i__12924_12930 = G__12951;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12958 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12959 = null;var count__12960 = 0;var i__12961 = 0;while(true){
if((i__12961 < count__12960))
{var vec__12962 = cljs.core._nth.call(null,chunk__12959,i__12961);var v = cljs.core.nth.call(null,vec__12962,0,null);var _ = cljs.core.nth.call(null,vec__12962,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12958,chunk__12959,count__12960,i__12961,vec__12962,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12958,chunk__12959,count__12960,i__12961,vec__12962,v,_))
);
{
var G__12964 = seq__12958;
var G__12965 = chunk__12959;
var G__12966 = count__12960;
var G__12967 = (i__12961 + 1);
seq__12958 = G__12964;
chunk__12959 = G__12965;
count__12960 = G__12966;
i__12961 = G__12967;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12958);if(temp__4092__auto__)
{var seq__12958__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12958__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12958__$1);{
var G__12968 = cljs.core.chunk_rest.call(null,seq__12958__$1);
var G__12969 = c__4189__auto__;
var G__12970 = cljs.core.count.call(null,c__4189__auto__);
var G__12971 = 0;
seq__12958 = G__12968;
chunk__12959 = G__12969;
count__12960 = G__12970;
i__12961 = G__12971;
continue;
}
} else
{var vec__12963 = cljs.core.first.call(null,seq__12958__$1);var v = cljs.core.nth.call(null,vec__12963,0,null);var _ = cljs.core.nth.call(null,vec__12963,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12958,chunk__12959,count__12960,i__12961,vec__12963,v,_,seq__12958__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12958,chunk__12959,count__12960,i__12961,vec__12963,v,_,seq__12958__$1,temp__4092__auto__))
);
{
var G__12972 = cljs.core.next.call(null,seq__12958__$1);
var G__12973 = null;
var G__12974 = 0;
var G__12975 = 0;
seq__12958 = G__12972;
chunk__12959 = G__12973;
count__12960 = G__12974;
i__12961 = G__12975;
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
