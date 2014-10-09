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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1516,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1516,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

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
var seq__47789_47795 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__47790_47796 = null;var count__47791_47797 = (0);var i__47792_47798 = (0);while(true){
if((i__47792_47798 < count__47791_47797))
{var vec__47793_47799 = chunk__47790_47796.cljs$core$IIndexed$_nth$arity$2(null,i__47792_47798);var v_47800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47793_47799,(0),null);var body_class_47801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47793_47799,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_47800,view))
{domina.add_class_BANG_(body,body_class_47801);
} else
{domina.remove_class_BANG_(body,body_class_47801);
}
{
var G__47802 = seq__47789_47795;
var G__47803 = chunk__47790_47796;
var G__47804 = count__47791_47797;
var G__47805 = (i__47792_47798 + (1));
seq__47789_47795 = G__47802;
chunk__47790_47796 = G__47803;
count__47791_47797 = G__47804;
i__47792_47798 = G__47805;
continue;
}
} else
{var temp__4126__auto___47806 = cljs.core.seq(seq__47789_47795);if(temp__4126__auto___47806)
{var seq__47789_47807__$1 = temp__4126__auto___47806;if(cljs.core.chunked_seq_QMARK_(seq__47789_47807__$1))
{var c__4314__auto___47808 = cljs.core.chunk_first(seq__47789_47807__$1);{
var G__47809 = cljs.core.chunk_rest(seq__47789_47807__$1);
var G__47810 = c__4314__auto___47808;
var G__47811 = cljs.core.count(c__4314__auto___47808);
var G__47812 = (0);
seq__47789_47795 = G__47809;
chunk__47790_47796 = G__47810;
count__47791_47797 = G__47811;
i__47792_47798 = G__47812;
continue;
}
} else
{var vec__47794_47813 = cljs.core.first(seq__47789_47807__$1);var v_47814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47794_47813,(0),null);var body_class_47815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47794_47813,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_47814,view))
{domina.add_class_BANG_(body,body_class_47815);
} else
{domina.remove_class_BANG_(body,body_class_47815);
}
{
var G__47816 = cljs.core.next(seq__47789_47807__$1);
var G__47817 = null;
var G__47818 = (0);
var G__47819 = (0);
seq__47789_47795 = G__47816;
chunk__47790_47796 = G__47817;
count__47791_47797 = G__47818;
i__47792_47798 = G__47819;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__47826 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__47827 = null;var count__47828 = (0);var i__47829 = (0);while(true){
if((i__47829 < count__47828))
{var vec__47830 = chunk__47827.cljs$core$IIndexed$_nth$arity$2(null,i__47829);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47830,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47830,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1516,((function (seq__47826,chunk__47827,count__47828,i__47829,vec__47830,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1517,v], null));
});})(seq__47826,chunk__47827,count__47828,i__47829,vec__47830,v,_))
);
{
var G__47832 = seq__47826;
var G__47833 = chunk__47827;
var G__47834 = count__47828;
var G__47835 = (i__47829 + (1));
seq__47826 = G__47832;
chunk__47827 = G__47833;
count__47828 = G__47834;
i__47829 = G__47835;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__47826);if(temp__4126__auto__)
{var seq__47826__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__47826__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__47826__$1);{
var G__47836 = cljs.core.chunk_rest(seq__47826__$1);
var G__47837 = c__4314__auto__;
var G__47838 = cljs.core.count(c__4314__auto__);
var G__47839 = (0);
seq__47826 = G__47836;
chunk__47827 = G__47837;
count__47828 = G__47838;
i__47829 = G__47839;
continue;
}
} else
{var vec__47831 = cljs.core.first(seq__47826__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47831,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47831,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1516,((function (seq__47826,chunk__47827,count__47828,i__47829,vec__47831,v,_,seq__47826__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1517,v], null));
});})(seq__47826,chunk__47827,count__47828,i__47829,vec__47831,v,_,seq__47826__$1,temp__4126__auto__))
);
{
var G__47840 = cljs.core.next(seq__47826__$1);
var G__47841 = null;
var G__47842 = (0);
var G__47843 = (0);
seq__47826 = G__47840;
chunk__47827 = G__47841;
count__47828 = G__47842;
i__47829 = G__47843;
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
