// Compiled by ClojureScript 0.0-2138
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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$391,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$391,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22913_22919 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22914_22920 = null;var count__22915_22921 = 0;var i__22916_22922 = 0;while(true){
if((i__22916_22922 < count__22915_22921))
{var vec__22917_22923 = chunk__22914_22920.cljs$core$IIndexed$_nth$arity$2(null,i__22916_22922);var v_22924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_22923,0,null);var body_class_22925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_22923,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22924,view))
{domina.add_class_BANG_(body,body_class_22925);
} else
{domina.remove_class_BANG_(body,body_class_22925);
}
{
var G__22926 = seq__22913_22919;
var G__22927 = chunk__22914_22920;
var G__22928 = count__22915_22921;
var G__22929 = (i__22916_22922 + 1);
seq__22913_22919 = G__22926;
chunk__22914_22920 = G__22927;
count__22915_22921 = G__22928;
i__22916_22922 = G__22929;
continue;
}
} else
{var temp__4092__auto___22930 = cljs.core.seq(seq__22913_22919);if(temp__4092__auto___22930)
{var seq__22913_22931__$1 = temp__4092__auto___22930;if(cljs.core.chunked_seq_QMARK_(seq__22913_22931__$1))
{var c__4148__auto___22932 = cljs.core.chunk_first(seq__22913_22931__$1);{
var G__22933 = cljs.core.chunk_rest(seq__22913_22931__$1);
var G__22934 = c__4148__auto___22932;
var G__22935 = cljs.core.count(c__4148__auto___22932);
var G__22936 = 0;
seq__22913_22919 = G__22933;
chunk__22914_22920 = G__22934;
count__22915_22921 = G__22935;
i__22916_22922 = G__22936;
continue;
}
} else
{var vec__22918_22937 = cljs.core.first(seq__22913_22931__$1);var v_22938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22918_22937,0,null);var body_class_22939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22918_22937,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22938,view))
{domina.add_class_BANG_(body,body_class_22939);
} else
{domina.remove_class_BANG_(body,body_class_22939);
}
{
var G__22940 = cljs.core.next(seq__22913_22931__$1);
var G__22941 = null;
var G__22942 = 0;
var G__22943 = 0;
seq__22913_22919 = G__22940;
chunk__22914_22920 = G__22941;
count__22915_22921 = G__22942;
i__22916_22922 = G__22943;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22950 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22951 = null;var count__22952 = 0;var i__22953 = 0;while(true){
if((i__22953 < count__22952))
{var vec__22954 = chunk__22951.cljs$core$IIndexed$_nth$arity$2(null,i__22953);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$391,((function (seq__22950,chunk__22951,count__22952,i__22953,vec__22954,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,v], null));
});})(seq__22950,chunk__22951,count__22952,i__22953,vec__22954,v,_))
);
{
var G__22956 = seq__22950;
var G__22957 = chunk__22951;
var G__22958 = count__22952;
var G__22959 = (i__22953 + 1);
seq__22950 = G__22956;
chunk__22951 = G__22957;
count__22952 = G__22958;
i__22953 = G__22959;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22950);if(temp__4092__auto__)
{var seq__22950__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22950__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22950__$1);{
var G__22960 = cljs.core.chunk_rest(seq__22950__$1);
var G__22961 = c__4148__auto__;
var G__22962 = cljs.core.count(c__4148__auto__);
var G__22963 = 0;
seq__22950 = G__22960;
chunk__22951 = G__22961;
count__22952 = G__22962;
i__22953 = G__22963;
continue;
}
} else
{var vec__22955 = cljs.core.first(seq__22950__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22955,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22955,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$391,((function (seq__22950,chunk__22951,count__22952,i__22953,vec__22955,v,_,seq__22950__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,v], null));
});})(seq__22950,chunk__22951,count__22952,i__22953,vec__22955,v,_,seq__22950__$1,temp__4092__auto__))
);
{
var G__22964 = cljs.core.next(seq__22950__$1);
var G__22965 = null;
var G__22966 = 0;
var G__22967 = 0;
seq__22950 = G__22964;
chunk__22951 = G__22965;
count__22952 = G__22966;
i__22953 = G__22967;
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
