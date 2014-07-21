// Compiled by ClojureScript 0.0-2268
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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1055,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1055,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{if(true)
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
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
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.cljs$core$IFn$_invoke$arity$1("body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.cljs$core$IFn$_invoke$arity$1(target_selector);var ul = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target_li,"..");var active_li = domina.css.sel.cljs$core$IFn$_invoke$arity$2(ul,"> .active");domina.remove_class_BANG_(active_li,"active");
domina.add_class_BANG_(target_li,"active");
var seq__39769_39775 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__39770_39776 = null;var count__39771_39777 = (0);var i__39772_39778 = (0);while(true){
if((i__39772_39778 < count__39771_39777))
{var vec__39773_39779 = chunk__39770_39776.cljs$core$IIndexed$_nth$arity$2(null,i__39772_39778);var v_39780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39773_39779,(0),null);var body_class_39781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39773_39779,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_39780,view))
{domina.add_class_BANG_(body,body_class_39781);
} else
{domina.remove_class_BANG_(body,body_class_39781);
}
{
var G__39782 = seq__39769_39775;
var G__39783 = chunk__39770_39776;
var G__39784 = count__39771_39777;
var G__39785 = (i__39772_39778 + (1));
seq__39769_39775 = G__39782;
chunk__39770_39776 = G__39783;
count__39771_39777 = G__39784;
i__39772_39778 = G__39785;
continue;
}
} else
{var temp__4126__auto___39786 = cljs.core.seq(seq__39769_39775);if(temp__4126__auto___39786)
{var seq__39769_39787__$1 = temp__4126__auto___39786;if(cljs.core.chunked_seq_QMARK_(seq__39769_39787__$1))
{var c__4299__auto___39788 = cljs.core.chunk_first(seq__39769_39787__$1);{
var G__39789 = cljs.core.chunk_rest(seq__39769_39787__$1);
var G__39790 = c__4299__auto___39788;
var G__39791 = cljs.core.count(c__4299__auto___39788);
var G__39792 = (0);
seq__39769_39775 = G__39789;
chunk__39770_39776 = G__39790;
count__39771_39777 = G__39791;
i__39772_39778 = G__39792;
continue;
}
} else
{var vec__39774_39793 = cljs.core.first(seq__39769_39787__$1);var v_39794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39774_39793,(0),null);var body_class_39795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39774_39793,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_39794,view))
{domina.add_class_BANG_(body,body_class_39795);
} else
{domina.remove_class_BANG_(body,body_class_39795);
}
{
var G__39796 = cljs.core.next(seq__39769_39787__$1);
var G__39797 = null;
var G__39798 = (0);
var G__39799 = (0);
seq__39769_39775 = G__39796;
chunk__39770_39776 = G__39797;
count__39771_39777 = G__39798;
i__39772_39778 = G__39799;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__39806 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__39807 = null;var count__39808 = (0);var i__39809 = (0);while(true){
if((i__39809 < count__39808))
{var vec__39810 = chunk__39807.cljs$core$IIndexed$_nth$arity$2(null,i__39809);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39810,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39810,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1055,((function (seq__39806,chunk__39807,count__39808,i__39809,vec__39810,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1056,v], null));
});})(seq__39806,chunk__39807,count__39808,i__39809,vec__39810,v,_))
);
{
var G__39812 = seq__39806;
var G__39813 = chunk__39807;
var G__39814 = count__39808;
var G__39815 = (i__39809 + (1));
seq__39806 = G__39812;
chunk__39807 = G__39813;
count__39808 = G__39814;
i__39809 = G__39815;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39806);if(temp__4126__auto__)
{var seq__39806__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39806__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__39806__$1);{
var G__39816 = cljs.core.chunk_rest(seq__39806__$1);
var G__39817 = c__4299__auto__;
var G__39818 = cljs.core.count(c__4299__auto__);
var G__39819 = (0);
seq__39806 = G__39816;
chunk__39807 = G__39817;
count__39808 = G__39818;
i__39809 = G__39819;
continue;
}
} else
{var vec__39811 = cljs.core.first(seq__39806__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39811,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39811,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1055,((function (seq__39806,chunk__39807,count__39808,i__39809,vec__39811,v,_,seq__39806__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1056,v], null));
});})(seq__39806,chunk__39807,count__39808,i__39809,vec__39811,v,_,seq__39806__$1,temp__4126__auto__))
);
{
var G__39820 = cljs.core.next(seq__39806__$1);
var G__39821 = null;
var G__39822 = (0);
var G__39823 = (0);
seq__39806 = G__39820;
chunk__39807 = G__39821;
count__39808 = G__39822;
i__39809 = G__39823;
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
