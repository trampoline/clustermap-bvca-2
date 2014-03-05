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
var seq__45904_45910 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45905_45911 = null;var count__45906_45912 = 0;var i__45907_45913 = 0;while(true){
if((i__45907_45913 < count__45906_45912))
{var vec__45908_45914 = cljs.core._nth.call(null,chunk__45905_45911,i__45907_45913);var v_45915 = cljs.core.nth.call(null,vec__45908_45914,0,null);var body_class_45916 = cljs.core.nth.call(null,vec__45908_45914,1,null);if(cljs.core._EQ_.call(null,v_45915,view))
{domina.add_class_BANG_.call(null,body,body_class_45916);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45916);
}
{
var G__45917 = seq__45904_45910;
var G__45918 = chunk__45905_45911;
var G__45919 = count__45906_45912;
var G__45920 = (i__45907_45913 + 1);
seq__45904_45910 = G__45917;
chunk__45905_45911 = G__45918;
count__45906_45912 = G__45919;
i__45907_45913 = G__45920;
continue;
}
} else
{var temp__4092__auto___45921 = cljs.core.seq.call(null,seq__45904_45910);if(temp__4092__auto___45921)
{var seq__45904_45922__$1 = temp__4092__auto___45921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45904_45922__$1))
{var c__4189__auto___45923 = cljs.core.chunk_first.call(null,seq__45904_45922__$1);{
var G__45924 = cljs.core.chunk_rest.call(null,seq__45904_45922__$1);
var G__45925 = c__4189__auto___45923;
var G__45926 = cljs.core.count.call(null,c__4189__auto___45923);
var G__45927 = 0;
seq__45904_45910 = G__45924;
chunk__45905_45911 = G__45925;
count__45906_45912 = G__45926;
i__45907_45913 = G__45927;
continue;
}
} else
{var vec__45909_45928 = cljs.core.first.call(null,seq__45904_45922__$1);var v_45929 = cljs.core.nth.call(null,vec__45909_45928,0,null);var body_class_45930 = cljs.core.nth.call(null,vec__45909_45928,1,null);if(cljs.core._EQ_.call(null,v_45929,view))
{domina.add_class_BANG_.call(null,body,body_class_45930);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45930);
}
{
var G__45931 = cljs.core.next.call(null,seq__45904_45922__$1);
var G__45932 = null;
var G__45933 = 0;
var G__45934 = 0;
seq__45904_45910 = G__45931;
chunk__45905_45911 = G__45932;
count__45906_45912 = G__45933;
i__45907_45913 = G__45934;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__45941 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45942 = null;var count__45943 = 0;var i__45944 = 0;while(true){
if((i__45944 < count__45943))
{var vec__45945 = cljs.core._nth.call(null,chunk__45942,i__45944);var v = cljs.core.nth.call(null,vec__45945,0,null);var _ = cljs.core.nth.call(null,vec__45945,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45941,chunk__45942,count__45943,i__45944,vec__45945,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45941,chunk__45942,count__45943,i__45944,vec__45945,v,_))
);
{
var G__45947 = seq__45941;
var G__45948 = chunk__45942;
var G__45949 = count__45943;
var G__45950 = (i__45944 + 1);
seq__45941 = G__45947;
chunk__45942 = G__45948;
count__45943 = G__45949;
i__45944 = G__45950;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45941);if(temp__4092__auto__)
{var seq__45941__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45941__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__45941__$1);{
var G__45951 = cljs.core.chunk_rest.call(null,seq__45941__$1);
var G__45952 = c__4189__auto__;
var G__45953 = cljs.core.count.call(null,c__4189__auto__);
var G__45954 = 0;
seq__45941 = G__45951;
chunk__45942 = G__45952;
count__45943 = G__45953;
i__45944 = G__45954;
continue;
}
} else
{var vec__45946 = cljs.core.first.call(null,seq__45941__$1);var v = cljs.core.nth.call(null,vec__45946,0,null);var _ = cljs.core.nth.call(null,vec__45946,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45941,chunk__45942,count__45943,i__45944,vec__45946,v,_,seq__45941__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45941,chunk__45942,count__45943,i__45944,vec__45946,v,_,seq__45941__$1,temp__4092__auto__))
);
{
var G__45955 = cljs.core.next.call(null,seq__45941__$1);
var G__45956 = null;
var G__45957 = 0;
var G__45958 = 0;
seq__45941 = G__45955;
chunk__45942 = G__45956;
count__45943 = G__45957;
i__45944 = G__45958;
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
