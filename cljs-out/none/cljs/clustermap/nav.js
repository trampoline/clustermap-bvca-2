// Compiled by ClojureScript 0.0-2356
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
var seq__79919_79925 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__79920_79926 = null;var count__79921_79927 = (0);var i__79922_79928 = (0);while(true){
if((i__79922_79928 < count__79921_79927))
{var vec__79923_79929 = cljs.core._nth.call(null,chunk__79920_79926,i__79922_79928);var v_79930 = cljs.core.nth.call(null,vec__79923_79929,(0),null);var body_class_79931 = cljs.core.nth.call(null,vec__79923_79929,(1),null);if(cljs.core._EQ_.call(null,v_79930,view))
{domina.add_class_BANG_.call(null,body,body_class_79931);
} else
{domina.remove_class_BANG_.call(null,body,body_class_79931);
}
{
var G__79932 = seq__79919_79925;
var G__79933 = chunk__79920_79926;
var G__79934 = count__79921_79927;
var G__79935 = (i__79922_79928 + (1));
seq__79919_79925 = G__79932;
chunk__79920_79926 = G__79933;
count__79921_79927 = G__79934;
i__79922_79928 = G__79935;
continue;
}
} else
{var temp__4126__auto___79936 = cljs.core.seq.call(null,seq__79919_79925);if(temp__4126__auto___79936)
{var seq__79919_79937__$1 = temp__4126__auto___79936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__79919_79937__$1))
{var c__4406__auto___79938 = cljs.core.chunk_first.call(null,seq__79919_79937__$1);{
var G__79939 = cljs.core.chunk_rest.call(null,seq__79919_79937__$1);
var G__79940 = c__4406__auto___79938;
var G__79941 = cljs.core.count.call(null,c__4406__auto___79938);
var G__79942 = (0);
seq__79919_79925 = G__79939;
chunk__79920_79926 = G__79940;
count__79921_79927 = G__79941;
i__79922_79928 = G__79942;
continue;
}
} else
{var vec__79924_79943 = cljs.core.first.call(null,seq__79919_79937__$1);var v_79944 = cljs.core.nth.call(null,vec__79924_79943,(0),null);var body_class_79945 = cljs.core.nth.call(null,vec__79924_79943,(1),null);if(cljs.core._EQ_.call(null,v_79944,view))
{domina.add_class_BANG_.call(null,body,body_class_79945);
} else
{domina.remove_class_BANG_.call(null,body,body_class_79945);
}
{
var G__79946 = cljs.core.next.call(null,seq__79919_79937__$1);
var G__79947 = null;
var G__79948 = (0);
var G__79949 = (0);
seq__79919_79925 = G__79946;
chunk__79920_79926 = G__79947;
count__79921_79927 = G__79948;
i__79922_79928 = G__79949;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__79956 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__79957 = null;var count__79958 = (0);var i__79959 = (0);while(true){
if((i__79959 < count__79958))
{var vec__79960 = cljs.core._nth.call(null,chunk__79957,i__79959);var v = cljs.core.nth.call(null,vec__79960,(0),null);var _ = cljs.core.nth.call(null,vec__79960,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__79956,chunk__79957,count__79958,i__79959,vec__79960,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__79956,chunk__79957,count__79958,i__79959,vec__79960,v,_))
);
{
var G__79962 = seq__79956;
var G__79963 = chunk__79957;
var G__79964 = count__79958;
var G__79965 = (i__79959 + (1));
seq__79956 = G__79962;
chunk__79957 = G__79963;
count__79958 = G__79964;
i__79959 = G__79965;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__79956);if(temp__4126__auto__)
{var seq__79956__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__79956__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__79956__$1);{
var G__79966 = cljs.core.chunk_rest.call(null,seq__79956__$1);
var G__79967 = c__4406__auto__;
var G__79968 = cljs.core.count.call(null,c__4406__auto__);
var G__79969 = (0);
seq__79956 = G__79966;
chunk__79957 = G__79967;
count__79958 = G__79968;
i__79959 = G__79969;
continue;
}
} else
{var vec__79961 = cljs.core.first.call(null,seq__79956__$1);var v = cljs.core.nth.call(null,vec__79961,(0),null);var _ = cljs.core.nth.call(null,vec__79961,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__79956,chunk__79957,count__79958,i__79959,vec__79961,v,_,seq__79956__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__79956,chunk__79957,count__79958,i__79959,vec__79961,v,_,seq__79956__$1,temp__4126__auto__))
);
{
var G__79970 = cljs.core.next.call(null,seq__79956__$1);
var G__79971 = null;
var G__79972 = (0);
var G__79973 = (0);
seq__79956 = G__79970;
chunk__79957 = G__79971;
count__79958 = G__79972;
i__79959 = G__79973;
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