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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$389,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$389,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22839_22845 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22840_22846 = null;var count__22841_22847 = 0;var i__22842_22848 = 0;while(true){
if((i__22842_22848 < count__22841_22847))
{var vec__22843_22849 = chunk__22840_22846.cljs$core$IIndexed$_nth$arity$2(null,i__22842_22848);var v_22850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22843_22849,0,null);var body_class_22851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22843_22849,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22850,view))
{domina.add_class_BANG_(body,body_class_22851);
} else
{domina.remove_class_BANG_(body,body_class_22851);
}
{
var G__22852 = seq__22839_22845;
var G__22853 = chunk__22840_22846;
var G__22854 = count__22841_22847;
var G__22855 = (i__22842_22848 + 1);
seq__22839_22845 = G__22852;
chunk__22840_22846 = G__22853;
count__22841_22847 = G__22854;
i__22842_22848 = G__22855;
continue;
}
} else
{var temp__4092__auto___22856 = cljs.core.seq(seq__22839_22845);if(temp__4092__auto___22856)
{var seq__22839_22857__$1 = temp__4092__auto___22856;if(cljs.core.chunked_seq_QMARK_(seq__22839_22857__$1))
{var c__4148__auto___22858 = cljs.core.chunk_first(seq__22839_22857__$1);{
var G__22859 = cljs.core.chunk_rest(seq__22839_22857__$1);
var G__22860 = c__4148__auto___22858;
var G__22861 = cljs.core.count(c__4148__auto___22858);
var G__22862 = 0;
seq__22839_22845 = G__22859;
chunk__22840_22846 = G__22860;
count__22841_22847 = G__22861;
i__22842_22848 = G__22862;
continue;
}
} else
{var vec__22844_22863 = cljs.core.first(seq__22839_22857__$1);var v_22864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844_22863,0,null);var body_class_22865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844_22863,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22864,view))
{domina.add_class_BANG_(body,body_class_22865);
} else
{domina.remove_class_BANG_(body,body_class_22865);
}
{
var G__22866 = cljs.core.next(seq__22839_22857__$1);
var G__22867 = null;
var G__22868 = 0;
var G__22869 = 0;
seq__22839_22845 = G__22866;
chunk__22840_22846 = G__22867;
count__22841_22847 = G__22868;
i__22842_22848 = G__22869;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22876 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22877 = null;var count__22878 = 0;var i__22879 = 0;while(true){
if((i__22879 < count__22878))
{var vec__22880 = chunk__22877.cljs$core$IIndexed$_nth$arity$2(null,i__22879);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$389,((function (seq__22876,chunk__22877,count__22878,i__22879,vec__22880,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,v], null));
});})(seq__22876,chunk__22877,count__22878,i__22879,vec__22880,v,_))
);
{
var G__22882 = seq__22876;
var G__22883 = chunk__22877;
var G__22884 = count__22878;
var G__22885 = (i__22879 + 1);
seq__22876 = G__22882;
chunk__22877 = G__22883;
count__22878 = G__22884;
i__22879 = G__22885;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22876);if(temp__4092__auto__)
{var seq__22876__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22876__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22876__$1);{
var G__22886 = cljs.core.chunk_rest(seq__22876__$1);
var G__22887 = c__4148__auto__;
var G__22888 = cljs.core.count(c__4148__auto__);
var G__22889 = 0;
seq__22876 = G__22886;
chunk__22877 = G__22887;
count__22878 = G__22888;
i__22879 = G__22889;
continue;
}
} else
{var vec__22881 = cljs.core.first(seq__22876__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$389,((function (seq__22876,chunk__22877,count__22878,i__22879,vec__22881,v,_,seq__22876__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,v], null));
});})(seq__22876,chunk__22877,count__22878,i__22879,vec__22881,v,_,seq__22876__$1,temp__4092__auto__))
);
{
var G__22890 = cljs.core.next(seq__22876__$1);
var G__22891 = null;
var G__22892 = 0;
var G__22893 = 0;
seq__22876 = G__22890;
chunk__22877 = G__22891;
count__22878 = G__22892;
i__22879 = G__22893;
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
