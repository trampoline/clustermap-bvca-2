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
var seq__22831_22837 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22832_22838 = null;var count__22833_22839 = 0;var i__22834_22840 = 0;while(true){
if((i__22834_22840 < count__22833_22839))
{var vec__22835_22841 = chunk__22832_22838.cljs$core$IIndexed$_nth$arity$2(null,i__22834_22840);var v_22842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22835_22841,0,null);var body_class_22843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22835_22841,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22842,view))
{domina.add_class_BANG_(body,body_class_22843);
} else
{domina.remove_class_BANG_(body,body_class_22843);
}
{
var G__22844 = seq__22831_22837;
var G__22845 = chunk__22832_22838;
var G__22846 = count__22833_22839;
var G__22847 = (i__22834_22840 + 1);
seq__22831_22837 = G__22844;
chunk__22832_22838 = G__22845;
count__22833_22839 = G__22846;
i__22834_22840 = G__22847;
continue;
}
} else
{var temp__4092__auto___22848 = cljs.core.seq(seq__22831_22837);if(temp__4092__auto___22848)
{var seq__22831_22849__$1 = temp__4092__auto___22848;if(cljs.core.chunked_seq_QMARK_(seq__22831_22849__$1))
{var c__4148__auto___22850 = cljs.core.chunk_first(seq__22831_22849__$1);{
var G__22851 = cljs.core.chunk_rest(seq__22831_22849__$1);
var G__22852 = c__4148__auto___22850;
var G__22853 = cljs.core.count(c__4148__auto___22850);
var G__22854 = 0;
seq__22831_22837 = G__22851;
chunk__22832_22838 = G__22852;
count__22833_22839 = G__22853;
i__22834_22840 = G__22854;
continue;
}
} else
{var vec__22836_22855 = cljs.core.first(seq__22831_22849__$1);var v_22856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22836_22855,0,null);var body_class_22857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22836_22855,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22856,view))
{domina.add_class_BANG_(body,body_class_22857);
} else
{domina.remove_class_BANG_(body,body_class_22857);
}
{
var G__22858 = cljs.core.next(seq__22831_22849__$1);
var G__22859 = null;
var G__22860 = 0;
var G__22861 = 0;
seq__22831_22837 = G__22858;
chunk__22832_22838 = G__22859;
count__22833_22839 = G__22860;
i__22834_22840 = G__22861;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22868 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22869 = null;var count__22870 = 0;var i__22871 = 0;while(true){
if((i__22871 < count__22870))
{var vec__22872 = chunk__22869.cljs$core$IIndexed$_nth$arity$2(null,i__22871);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22872,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22872,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$388,((function (seq__22868,chunk__22869,count__22870,i__22871,vec__22872,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,v], null));
});})(seq__22868,chunk__22869,count__22870,i__22871,vec__22872,v,_))
);
{
var G__22874 = seq__22868;
var G__22875 = chunk__22869;
var G__22876 = count__22870;
var G__22877 = (i__22871 + 1);
seq__22868 = G__22874;
chunk__22869 = G__22875;
count__22870 = G__22876;
i__22871 = G__22877;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22868);if(temp__4092__auto__)
{var seq__22868__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22868__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22868__$1);{
var G__22878 = cljs.core.chunk_rest(seq__22868__$1);
var G__22879 = c__4148__auto__;
var G__22880 = cljs.core.count(c__4148__auto__);
var G__22881 = 0;
seq__22868 = G__22878;
chunk__22869 = G__22879;
count__22870 = G__22880;
i__22871 = G__22881;
continue;
}
} else
{var vec__22873 = cljs.core.first(seq__22868__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$388,((function (seq__22868,chunk__22869,count__22870,i__22871,vec__22873,v,_,seq__22868__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,v], null));
});})(seq__22868,chunk__22869,count__22870,i__22871,vec__22873,v,_,seq__22868__$1,temp__4092__auto__))
);
{
var G__22882 = cljs.core.next(seq__22868__$1);
var G__22883 = null;
var G__22884 = 0;
var G__22885 = 0;
seq__22868 = G__22882;
chunk__22869 = G__22883;
count__22870 = G__22884;
i__22871 = G__22885;
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
