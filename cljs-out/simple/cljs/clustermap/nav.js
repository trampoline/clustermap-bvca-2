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
var seq__12897_12903 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12898_12904 = null;var count__12899_12905 = 0;var i__12900_12906 = 0;while(true){
if((i__12900_12906 < count__12899_12905))
{var vec__12901_12907 = cljs.core._nth.call(null,chunk__12898_12904,i__12900_12906);var v_12908 = cljs.core.nth.call(null,vec__12901_12907,0,null);var body_class_12909 = cljs.core.nth.call(null,vec__12901_12907,1,null);if(cljs.core._EQ_.call(null,v_12908,view))
{domina.add_class_BANG_.call(null,body,body_class_12909);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12909);
}
{
var G__12910 = seq__12897_12903;
var G__12911 = chunk__12898_12904;
var G__12912 = count__12899_12905;
var G__12913 = (i__12900_12906 + 1);
seq__12897_12903 = G__12910;
chunk__12898_12904 = G__12911;
count__12899_12905 = G__12912;
i__12900_12906 = G__12913;
continue;
}
} else
{var temp__4092__auto___12914 = cljs.core.seq.call(null,seq__12897_12903);if(temp__4092__auto___12914)
{var seq__12897_12915__$1 = temp__4092__auto___12914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12897_12915__$1))
{var c__4189__auto___12916 = cljs.core.chunk_first.call(null,seq__12897_12915__$1);{
var G__12917 = cljs.core.chunk_rest.call(null,seq__12897_12915__$1);
var G__12918 = c__4189__auto___12916;
var G__12919 = cljs.core.count.call(null,c__4189__auto___12916);
var G__12920 = 0;
seq__12897_12903 = G__12917;
chunk__12898_12904 = G__12918;
count__12899_12905 = G__12919;
i__12900_12906 = G__12920;
continue;
}
} else
{var vec__12902_12921 = cljs.core.first.call(null,seq__12897_12915__$1);var v_12922 = cljs.core.nth.call(null,vec__12902_12921,0,null);var body_class_12923 = cljs.core.nth.call(null,vec__12902_12921,1,null);if(cljs.core._EQ_.call(null,v_12922,view))
{domina.add_class_BANG_.call(null,body,body_class_12923);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12923);
}
{
var G__12924 = cljs.core.next.call(null,seq__12897_12915__$1);
var G__12925 = null;
var G__12926 = 0;
var G__12927 = 0;
seq__12897_12903 = G__12924;
chunk__12898_12904 = G__12925;
count__12899_12905 = G__12926;
i__12900_12906 = G__12927;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12934 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12935 = null;var count__12936 = 0;var i__12937 = 0;while(true){
if((i__12937 < count__12936))
{var vec__12938 = cljs.core._nth.call(null,chunk__12935,i__12937);var v = cljs.core.nth.call(null,vec__12938,0,null);var _ = cljs.core.nth.call(null,vec__12938,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12934,chunk__12935,count__12936,i__12937,vec__12938,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12934,chunk__12935,count__12936,i__12937,vec__12938,v,_))
);
{
var G__12940 = seq__12934;
var G__12941 = chunk__12935;
var G__12942 = count__12936;
var G__12943 = (i__12937 + 1);
seq__12934 = G__12940;
chunk__12935 = G__12941;
count__12936 = G__12942;
i__12937 = G__12943;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12934);if(temp__4092__auto__)
{var seq__12934__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12934__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12934__$1);{
var G__12944 = cljs.core.chunk_rest.call(null,seq__12934__$1);
var G__12945 = c__4189__auto__;
var G__12946 = cljs.core.count.call(null,c__4189__auto__);
var G__12947 = 0;
seq__12934 = G__12944;
chunk__12935 = G__12945;
count__12936 = G__12946;
i__12937 = G__12947;
continue;
}
} else
{var vec__12939 = cljs.core.first.call(null,seq__12934__$1);var v = cljs.core.nth.call(null,vec__12939,0,null);var _ = cljs.core.nth.call(null,vec__12939,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12934,chunk__12935,count__12936,i__12937,vec__12939,v,_,seq__12934__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12934,chunk__12935,count__12936,i__12937,vec__12939,v,_,seq__12934__$1,temp__4092__auto__))
);
{
var G__12948 = cljs.core.next.call(null,seq__12934__$1);
var G__12949 = null;
var G__12950 = 0;
var G__12951 = 0;
seq__12934 = G__12948;
chunk__12935 = G__12949;
count__12936 = G__12950;
i__12937 = G__12951;
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
