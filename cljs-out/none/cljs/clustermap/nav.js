// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('domina.xpath');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.call(null,"body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__22005_22011 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__22006_22012 = null;var count__22007_22013 = (0);var i__22008_22014 = (0);while(true){
if((i__22008_22014 < count__22007_22013))
{var vec__22009_22015 = cljs.core._nth.call(null,chunk__22006_22012,i__22008_22014);var v_22016 = cljs.core.nth.call(null,vec__22009_22015,(0),null);var body_class_22017 = cljs.core.nth.call(null,vec__22009_22015,(1),null);if(cljs.core._EQ_.call(null,v_22016,view))
{domina.add_class_BANG_.call(null,body,body_class_22017);
} else
{domina.remove_class_BANG_.call(null,body,body_class_22017);
}
{
var G__22018 = seq__22005_22011;
var G__22019 = chunk__22006_22012;
var G__22020 = count__22007_22013;
var G__22021 = (i__22008_22014 + (1));
seq__22005_22011 = G__22018;
chunk__22006_22012 = G__22019;
count__22007_22013 = G__22020;
i__22008_22014 = G__22021;
continue;
}
} else
{var temp__4126__auto___22022 = cljs.core.seq.call(null,seq__22005_22011);if(temp__4126__auto___22022)
{var seq__22005_22023__$1 = temp__4126__auto___22022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22005_22023__$1))
{var c__8656__auto___22024 = cljs.core.chunk_first.call(null,seq__22005_22023__$1);{
var G__22025 = cljs.core.chunk_rest.call(null,seq__22005_22023__$1);
var G__22026 = c__8656__auto___22024;
var G__22027 = cljs.core.count.call(null,c__8656__auto___22024);
var G__22028 = (0);
seq__22005_22011 = G__22025;
chunk__22006_22012 = G__22026;
count__22007_22013 = G__22027;
i__22008_22014 = G__22028;
continue;
}
} else
{var vec__22010_22029 = cljs.core.first.call(null,seq__22005_22023__$1);var v_22030 = cljs.core.nth.call(null,vec__22010_22029,(0),null);var body_class_22031 = cljs.core.nth.call(null,vec__22010_22029,(1),null);if(cljs.core._EQ_.call(null,v_22030,view))
{domina.add_class_BANG_.call(null,body,body_class_22031);
} else
{domina.remove_class_BANG_.call(null,body,body_class_22031);
}
{
var G__22032 = cljs.core.next.call(null,seq__22005_22023__$1);
var G__22033 = null;
var G__22034 = (0);
var G__22035 = (0);
seq__22005_22011 = G__22032;
chunk__22006_22012 = G__22033;
count__22007_22013 = G__22034;
i__22008_22014 = G__22035;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22042 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__22043 = null;var count__22044 = (0);var i__22045 = (0);while(true){
if((i__22045 < count__22044))
{var vec__22046 = cljs.core._nth.call(null,chunk__22043,i__22045);var v = cljs.core.nth.call(null,vec__22046,(0),null);var _ = cljs.core.nth.call(null,vec__22046,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__22042,chunk__22043,count__22044,i__22045,vec__22046,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__22042,chunk__22043,count__22044,i__22045,vec__22046,v,_))
);
{
var G__22048 = seq__22042;
var G__22049 = chunk__22043;
var G__22050 = count__22044;
var G__22051 = (i__22045 + (1));
seq__22042 = G__22048;
chunk__22043 = G__22049;
count__22044 = G__22050;
i__22045 = G__22051;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22042);if(temp__4126__auto__)
{var seq__22042__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22042__$1))
{var c__8656__auto__ = cljs.core.chunk_first.call(null,seq__22042__$1);{
var G__22052 = cljs.core.chunk_rest.call(null,seq__22042__$1);
var G__22053 = c__8656__auto__;
var G__22054 = cljs.core.count.call(null,c__8656__auto__);
var G__22055 = (0);
seq__22042 = G__22052;
chunk__22043 = G__22053;
count__22044 = G__22054;
i__22045 = G__22055;
continue;
}
} else
{var vec__22047 = cljs.core.first.call(null,seq__22042__$1);var v = cljs.core.nth.call(null,vec__22047,(0),null);var _ = cljs.core.nth.call(null,vec__22047,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__22042,chunk__22043,count__22044,i__22045,vec__22047,v,_,seq__22042__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__22042,chunk__22043,count__22044,i__22045,vec__22047,v,_,seq__22042__$1,temp__4126__auto__))
);
{
var G__22056 = cljs.core.next.call(null,seq__22042__$1);
var G__22057 = null;
var G__22058 = (0);
var G__22059 = (0);
seq__22042 = G__22056;
chunk__22043 = G__22057;
count__22044 = G__22058;
i__22045 = G__22059;
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