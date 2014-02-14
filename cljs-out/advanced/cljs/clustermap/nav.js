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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$388,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$388,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22855_22861 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22856_22862 = null;var count__22857_22863 = 0;var i__22858_22864 = 0;while(true){
if((i__22858_22864 < count__22857_22863))
{var vec__22859_22865 = chunk__22856_22862.cljs$core$IIndexed$_nth$arity$2(null,i__22858_22864);var v_22866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859_22865,0,null);var body_class_22867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859_22865,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22866,view))
{domina.add_class_BANG_(body,body_class_22867);
} else
{domina.remove_class_BANG_(body,body_class_22867);
}
{
var G__22868 = seq__22855_22861;
var G__22869 = chunk__22856_22862;
var G__22870 = count__22857_22863;
var G__22871 = (i__22858_22864 + 1);
seq__22855_22861 = G__22868;
chunk__22856_22862 = G__22869;
count__22857_22863 = G__22870;
i__22858_22864 = G__22871;
continue;
}
} else
{var temp__4092__auto___22872 = cljs.core.seq(seq__22855_22861);if(temp__4092__auto___22872)
{var seq__22855_22873__$1 = temp__4092__auto___22872;if(cljs.core.chunked_seq_QMARK_(seq__22855_22873__$1))
{var c__4148__auto___22874 = cljs.core.chunk_first(seq__22855_22873__$1);{
var G__22875 = cljs.core.chunk_rest(seq__22855_22873__$1);
var G__22876 = c__4148__auto___22874;
var G__22877 = cljs.core.count(c__4148__auto___22874);
var G__22878 = 0;
seq__22855_22861 = G__22875;
chunk__22856_22862 = G__22876;
count__22857_22863 = G__22877;
i__22858_22864 = G__22878;
continue;
}
} else
{var vec__22860_22879 = cljs.core.first(seq__22855_22873__$1);var v_22880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22860_22879,0,null);var body_class_22881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22860_22879,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22880,view))
{domina.add_class_BANG_(body,body_class_22881);
} else
{domina.remove_class_BANG_(body,body_class_22881);
}
{
var G__22882 = cljs.core.next(seq__22855_22873__$1);
var G__22883 = null;
var G__22884 = 0;
var G__22885 = 0;
seq__22855_22861 = G__22882;
chunk__22856_22862 = G__22883;
count__22857_22863 = G__22884;
i__22858_22864 = G__22885;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22892 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22893 = null;var count__22894 = 0;var i__22895 = 0;while(true){
if((i__22895 < count__22894))
{var vec__22896 = chunk__22893.cljs$core$IIndexed$_nth$arity$2(null,i__22895);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$388,((function (seq__22892,chunk__22893,count__22894,i__22895,vec__22896,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,v], null));
});})(seq__22892,chunk__22893,count__22894,i__22895,vec__22896,v,_))
);
{
var G__22898 = seq__22892;
var G__22899 = chunk__22893;
var G__22900 = count__22894;
var G__22901 = (i__22895 + 1);
seq__22892 = G__22898;
chunk__22893 = G__22899;
count__22894 = G__22900;
i__22895 = G__22901;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22892);if(temp__4092__auto__)
{var seq__22892__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22892__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22892__$1);{
var G__22902 = cljs.core.chunk_rest(seq__22892__$1);
var G__22903 = c__4148__auto__;
var G__22904 = cljs.core.count(c__4148__auto__);
var G__22905 = 0;
seq__22892 = G__22902;
chunk__22893 = G__22903;
count__22894 = G__22904;
i__22895 = G__22905;
continue;
}
} else
{var vec__22897 = cljs.core.first(seq__22892__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22897,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22897,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$388,((function (seq__22892,chunk__22893,count__22894,i__22895,vec__22897,v,_,seq__22892__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,v], null));
});})(seq__22892,chunk__22893,count__22894,i__22895,vec__22897,v,_,seq__22892__$1,temp__4092__auto__))
);
{
var G__22906 = cljs.core.next(seq__22892__$1);
var G__22907 = null;
var G__22908 = 0;
var G__22909 = 0;
seq__22892 = G__22906;
chunk__22893 = G__22907;
count__22894 = G__22908;
i__22895 = G__22909;
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
