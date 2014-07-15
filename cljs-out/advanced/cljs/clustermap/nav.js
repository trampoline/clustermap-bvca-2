// Compiled by ClojureScript 0.0-2261
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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$876,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$876,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__35789_35795 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__35790_35796 = null;var count__35791_35797 = (0);var i__35792_35798 = (0);while(true){
if((i__35792_35798 < count__35791_35797))
{var vec__35793_35799 = chunk__35790_35796.cljs$core$IIndexed$_nth$arity$2(null,i__35792_35798);var v_35800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793_35799,(0),null);var body_class_35801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793_35799,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_35800,view))
{domina.add_class_BANG_(body,body_class_35801);
} else
{domina.remove_class_BANG_(body,body_class_35801);
}
{
var G__35802 = seq__35789_35795;
var G__35803 = chunk__35790_35796;
var G__35804 = count__35791_35797;
var G__35805 = (i__35792_35798 + (1));
seq__35789_35795 = G__35802;
chunk__35790_35796 = G__35803;
count__35791_35797 = G__35804;
i__35792_35798 = G__35805;
continue;
}
} else
{var temp__4126__auto___35806 = cljs.core.seq(seq__35789_35795);if(temp__4126__auto___35806)
{var seq__35789_35807__$1 = temp__4126__auto___35806;if(cljs.core.chunked_seq_QMARK_(seq__35789_35807__$1))
{var c__4299__auto___35808 = cljs.core.chunk_first(seq__35789_35807__$1);{
var G__35809 = cljs.core.chunk_rest(seq__35789_35807__$1);
var G__35810 = c__4299__auto___35808;
var G__35811 = cljs.core.count(c__4299__auto___35808);
var G__35812 = (0);
seq__35789_35795 = G__35809;
chunk__35790_35796 = G__35810;
count__35791_35797 = G__35811;
i__35792_35798 = G__35812;
continue;
}
} else
{var vec__35794_35813 = cljs.core.first(seq__35789_35807__$1);var v_35814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794_35813,(0),null);var body_class_35815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794_35813,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_35814,view))
{domina.add_class_BANG_(body,body_class_35815);
} else
{domina.remove_class_BANG_(body,body_class_35815);
}
{
var G__35816 = cljs.core.next(seq__35789_35807__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35789_35795 = G__35816;
chunk__35790_35796 = G__35817;
count__35791_35797 = G__35818;
i__35792_35798 = G__35819;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__35826 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__35827 = null;var count__35828 = (0);var i__35829 = (0);while(true){
if((i__35829 < count__35828))
{var vec__35830 = chunk__35827.cljs$core$IIndexed$_nth$arity$2(null,i__35829);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35830,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35830,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$876,((function (seq__35826,chunk__35827,count__35828,i__35829,vec__35830,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$877,v], null));
});})(seq__35826,chunk__35827,count__35828,i__35829,vec__35830,v,_))
);
{
var G__35832 = seq__35826;
var G__35833 = chunk__35827;
var G__35834 = count__35828;
var G__35835 = (i__35829 + (1));
seq__35826 = G__35832;
chunk__35827 = G__35833;
count__35828 = G__35834;
i__35829 = G__35835;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__35826);if(temp__4126__auto__)
{var seq__35826__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__35826__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__35826__$1);{
var G__35836 = cljs.core.chunk_rest(seq__35826__$1);
var G__35837 = c__4299__auto__;
var G__35838 = cljs.core.count(c__4299__auto__);
var G__35839 = (0);
seq__35826 = G__35836;
chunk__35827 = G__35837;
count__35828 = G__35838;
i__35829 = G__35839;
continue;
}
} else
{var vec__35831 = cljs.core.first(seq__35826__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35831,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35831,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$876,((function (seq__35826,chunk__35827,count__35828,i__35829,vec__35831,v,_,seq__35826__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$877,v], null));
});})(seq__35826,chunk__35827,count__35828,i__35829,vec__35831,v,_,seq__35826__$1,temp__4126__auto__))
);
{
var G__35840 = cljs.core.next(seq__35826__$1);
var G__35841 = null;
var G__35842 = (0);
var G__35843 = (0);
seq__35826 = G__35840;
chunk__35827 = G__35841;
count__35828 = G__35842;
i__35829 = G__35843;
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
