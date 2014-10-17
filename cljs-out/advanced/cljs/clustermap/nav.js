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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1520,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1520,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__47798_47804 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__47799_47805 = null;var count__47800_47806 = (0);var i__47801_47807 = (0);while(true){
if((i__47801_47807 < count__47800_47806))
{var vec__47802_47808 = chunk__47799_47805.cljs$core$IIndexed$_nth$arity$2(null,i__47801_47807);var v_47809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47802_47808,(0),null);var body_class_47810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47802_47808,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_47809,view))
{domina.add_class_BANG_(body,body_class_47810);
} else
{domina.remove_class_BANG_(body,body_class_47810);
}
{
var G__47811 = seq__47798_47804;
var G__47812 = chunk__47799_47805;
var G__47813 = count__47800_47806;
var G__47814 = (i__47801_47807 + (1));
seq__47798_47804 = G__47811;
chunk__47799_47805 = G__47812;
count__47800_47806 = G__47813;
i__47801_47807 = G__47814;
continue;
}
} else
{var temp__4126__auto___47815 = cljs.core.seq(seq__47798_47804);if(temp__4126__auto___47815)
{var seq__47798_47816__$1 = temp__4126__auto___47815;if(cljs.core.chunked_seq_QMARK_(seq__47798_47816__$1))
{var c__4314__auto___47817 = cljs.core.chunk_first(seq__47798_47816__$1);{
var G__47818 = cljs.core.chunk_rest(seq__47798_47816__$1);
var G__47819 = c__4314__auto___47817;
var G__47820 = cljs.core.count(c__4314__auto___47817);
var G__47821 = (0);
seq__47798_47804 = G__47818;
chunk__47799_47805 = G__47819;
count__47800_47806 = G__47820;
i__47801_47807 = G__47821;
continue;
}
} else
{var vec__47803_47822 = cljs.core.first(seq__47798_47816__$1);var v_47823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47803_47822,(0),null);var body_class_47824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47803_47822,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_47823,view))
{domina.add_class_BANG_(body,body_class_47824);
} else
{domina.remove_class_BANG_(body,body_class_47824);
}
{
var G__47825 = cljs.core.next(seq__47798_47816__$1);
var G__47826 = null;
var G__47827 = (0);
var G__47828 = (0);
seq__47798_47804 = G__47825;
chunk__47799_47805 = G__47826;
count__47800_47806 = G__47827;
i__47801_47807 = G__47828;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__47835 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__47836 = null;var count__47837 = (0);var i__47838 = (0);while(true){
if((i__47838 < count__47837))
{var vec__47839 = chunk__47836.cljs$core$IIndexed$_nth$arity$2(null,i__47838);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47839,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47839,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1520,((function (seq__47835,chunk__47836,count__47837,i__47838,vec__47839,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1521,v], null));
});})(seq__47835,chunk__47836,count__47837,i__47838,vec__47839,v,_))
);
{
var G__47841 = seq__47835;
var G__47842 = chunk__47836;
var G__47843 = count__47837;
var G__47844 = (i__47838 + (1));
seq__47835 = G__47841;
chunk__47836 = G__47842;
count__47837 = G__47843;
i__47838 = G__47844;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__47835);if(temp__4126__auto__)
{var seq__47835__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__47835__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__47835__$1);{
var G__47845 = cljs.core.chunk_rest(seq__47835__$1);
var G__47846 = c__4314__auto__;
var G__47847 = cljs.core.count(c__4314__auto__);
var G__47848 = (0);
seq__47835 = G__47845;
chunk__47836 = G__47846;
count__47837 = G__47847;
i__47838 = G__47848;
continue;
}
} else
{var vec__47840 = cljs.core.first(seq__47835__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1520,((function (seq__47835,chunk__47836,count__47837,i__47838,vec__47840,v,_,seq__47835__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1521,v], null));
});})(seq__47835,chunk__47836,count__47837,i__47838,vec__47840,v,_,seq__47835__$1,temp__4126__auto__))
);
{
var G__47849 = cljs.core.next(seq__47835__$1);
var G__47850 = null;
var G__47851 = (0);
var G__47852 = (0);
seq__47835 = G__47849;
chunk__47836 = G__47850;
count__47837 = G__47851;
i__47838 = G__47852;
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
