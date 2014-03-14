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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$750,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$750,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__34799_34805 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34800_34806 = null;var count__34801_34807 = 0;var i__34802_34808 = 0;while(true){
if((i__34802_34808 < count__34801_34807))
{var vec__34803_34809 = chunk__34800_34806.cljs$core$IIndexed$_nth$arity$2(null,i__34802_34808);var v_34810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34803_34809,0,null);var body_class_34811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34803_34809,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34810,view))
{domina.add_class_BANG_(body,body_class_34811);
} else
{domina.remove_class_BANG_(body,body_class_34811);
}
{
var G__34812 = seq__34799_34805;
var G__34813 = chunk__34800_34806;
var G__34814 = count__34801_34807;
var G__34815 = (i__34802_34808 + 1);
seq__34799_34805 = G__34812;
chunk__34800_34806 = G__34813;
count__34801_34807 = G__34814;
i__34802_34808 = G__34815;
continue;
}
} else
{var temp__4092__auto___34816 = cljs.core.seq(seq__34799_34805);if(temp__4092__auto___34816)
{var seq__34799_34817__$1 = temp__4092__auto___34816;if(cljs.core.chunked_seq_QMARK_(seq__34799_34817__$1))
{var c__4189__auto___34818 = cljs.core.chunk_first(seq__34799_34817__$1);{
var G__34819 = cljs.core.chunk_rest(seq__34799_34817__$1);
var G__34820 = c__4189__auto___34818;
var G__34821 = cljs.core.count(c__4189__auto___34818);
var G__34822 = 0;
seq__34799_34805 = G__34819;
chunk__34800_34806 = G__34820;
count__34801_34807 = G__34821;
i__34802_34808 = G__34822;
continue;
}
} else
{var vec__34804_34823 = cljs.core.first(seq__34799_34817__$1);var v_34824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_34823,0,null);var body_class_34825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_34823,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34824,view))
{domina.add_class_BANG_(body,body_class_34825);
} else
{domina.remove_class_BANG_(body,body_class_34825);
}
{
var G__34826 = cljs.core.next(seq__34799_34817__$1);
var G__34827 = null;
var G__34828 = 0;
var G__34829 = 0;
seq__34799_34805 = G__34826;
chunk__34800_34806 = G__34827;
count__34801_34807 = G__34828;
i__34802_34808 = G__34829;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__34836 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34837 = null;var count__34838 = 0;var i__34839 = 0;while(true){
if((i__34839 < count__34838))
{var vec__34840 = chunk__34837.cljs$core$IIndexed$_nth$arity$2(null,i__34839);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34840,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34840,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$750,((function (seq__34836,chunk__34837,count__34838,i__34839,vec__34840,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,v], null));
});})(seq__34836,chunk__34837,count__34838,i__34839,vec__34840,v,_))
);
{
var G__34842 = seq__34836;
var G__34843 = chunk__34837;
var G__34844 = count__34838;
var G__34845 = (i__34839 + 1);
seq__34836 = G__34842;
chunk__34837 = G__34843;
count__34838 = G__34844;
i__34839 = G__34845;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34836);if(temp__4092__auto__)
{var seq__34836__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34836__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34836__$1);{
var G__34846 = cljs.core.chunk_rest(seq__34836__$1);
var G__34847 = c__4189__auto__;
var G__34848 = cljs.core.count(c__4189__auto__);
var G__34849 = 0;
seq__34836 = G__34846;
chunk__34837 = G__34847;
count__34838 = G__34848;
i__34839 = G__34849;
continue;
}
} else
{var vec__34841 = cljs.core.first(seq__34836__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34841,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34841,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$750,((function (seq__34836,chunk__34837,count__34838,i__34839,vec__34841,v,_,seq__34836__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,v], null));
});})(seq__34836,chunk__34837,count__34838,i__34839,vec__34841,v,_,seq__34836__$1,temp__4092__auto__))
);
{
var G__34850 = cljs.core.next(seq__34836__$1);
var G__34851 = null;
var G__34852 = 0;
var G__34853 = 0;
seq__34836 = G__34850;
chunk__34837 = G__34851;
count__34838 = G__34852;
i__34839 = G__34853;
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
