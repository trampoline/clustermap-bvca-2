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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$752,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$752,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
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
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.cljs$core$IFn$_invoke$arity$1("body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.cljs$core$IFn$_invoke$arity$1(target_selector);var ul = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target_li,"..");var active_li = domina.css.sel.cljs$core$IFn$_invoke$arity$2(ul,"> .active");domina.remove_class_BANG_(active_li,"active");
domina.add_class_BANG_(target_li,"active");
var seq__34911_34917 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34912_34918 = null;var count__34913_34919 = 0;var i__34914_34920 = 0;while(true){
if((i__34914_34920 < count__34913_34919))
{var vec__34915_34921 = chunk__34912_34918.cljs$core$IIndexed$_nth$arity$2(null,i__34914_34920);var v_34922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34915_34921,0,null);var body_class_34923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34915_34921,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34922,view))
{domina.add_class_BANG_(body,body_class_34923);
} else
{domina.remove_class_BANG_(body,body_class_34923);
}
{
var G__34924 = seq__34911_34917;
var G__34925 = chunk__34912_34918;
var G__34926 = count__34913_34919;
var G__34927 = (i__34914_34920 + 1);
seq__34911_34917 = G__34924;
chunk__34912_34918 = G__34925;
count__34913_34919 = G__34926;
i__34914_34920 = G__34927;
continue;
}
} else
{var temp__4092__auto___34928 = cljs.core.seq(seq__34911_34917);if(temp__4092__auto___34928)
{var seq__34911_34929__$1 = temp__4092__auto___34928;if(cljs.core.chunked_seq_QMARK_(seq__34911_34929__$1))
{var c__4189__auto___34930 = cljs.core.chunk_first(seq__34911_34929__$1);{
var G__34931 = cljs.core.chunk_rest(seq__34911_34929__$1);
var G__34932 = c__4189__auto___34930;
var G__34933 = cljs.core.count(c__4189__auto___34930);
var G__34934 = 0;
seq__34911_34917 = G__34931;
chunk__34912_34918 = G__34932;
count__34913_34919 = G__34933;
i__34914_34920 = G__34934;
continue;
}
} else
{var vec__34916_34935 = cljs.core.first(seq__34911_34929__$1);var v_34936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34916_34935,0,null);var body_class_34937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34916_34935,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34936,view))
{domina.add_class_BANG_(body,body_class_34937);
} else
{domina.remove_class_BANG_(body,body_class_34937);
}
{
var G__34938 = cljs.core.next(seq__34911_34929__$1);
var G__34939 = null;
var G__34940 = 0;
var G__34941 = 0;
seq__34911_34917 = G__34938;
chunk__34912_34918 = G__34939;
count__34913_34919 = G__34940;
i__34914_34920 = G__34941;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__34948 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34949 = null;var count__34950 = 0;var i__34951 = 0;while(true){
if((i__34951 < count__34950))
{var vec__34952 = chunk__34949.cljs$core$IIndexed$_nth$arity$2(null,i__34951);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$752,((function (seq__34948,chunk__34949,count__34950,i__34951,vec__34952,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,v], null));
});})(seq__34948,chunk__34949,count__34950,i__34951,vec__34952,v,_))
);
{
var G__34954 = seq__34948;
var G__34955 = chunk__34949;
var G__34956 = count__34950;
var G__34957 = (i__34951 + 1);
seq__34948 = G__34954;
chunk__34949 = G__34955;
count__34950 = G__34956;
i__34951 = G__34957;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34948);if(temp__4092__auto__)
{var seq__34948__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34948__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34948__$1);{
var G__34958 = cljs.core.chunk_rest(seq__34948__$1);
var G__34959 = c__4189__auto__;
var G__34960 = cljs.core.count(c__4189__auto__);
var G__34961 = 0;
seq__34948 = G__34958;
chunk__34949 = G__34959;
count__34950 = G__34960;
i__34951 = G__34961;
continue;
}
} else
{var vec__34953 = cljs.core.first(seq__34948__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34953,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34953,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$752,((function (seq__34948,chunk__34949,count__34950,i__34951,vec__34953,v,_,seq__34948__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,v], null));
});})(seq__34948,chunk__34949,count__34950,i__34951,vec__34953,v,_,seq__34948__$1,temp__4092__auto__))
);
{
var G__34962 = cljs.core.next(seq__34948__$1);
var G__34963 = null;
var G__34964 = 0;
var G__34965 = 0;
seq__34948 = G__34962;
chunk__34949 = G__34963;
count__34950 = G__34964;
i__34951 = G__34965;
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
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips();
clustermap.nav.handle_toggle_nav_search();
clustermap.nav.handle_hide_show_map_report();
return clustermap.nav.handle_view_switches(comm);
});
