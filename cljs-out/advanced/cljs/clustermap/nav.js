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
var seq__34827_34833 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34828_34834 = null;var count__34829_34835 = 0;var i__34830_34836 = 0;while(true){
if((i__34830_34836 < count__34829_34835))
{var vec__34831_34837 = chunk__34828_34834.cljs$core$IIndexed$_nth$arity$2(null,i__34830_34836);var v_34838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34831_34837,0,null);var body_class_34839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34831_34837,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34838,view))
{domina.add_class_BANG_(body,body_class_34839);
} else
{domina.remove_class_BANG_(body,body_class_34839);
}
{
var G__34840 = seq__34827_34833;
var G__34841 = chunk__34828_34834;
var G__34842 = count__34829_34835;
var G__34843 = (i__34830_34836 + 1);
seq__34827_34833 = G__34840;
chunk__34828_34834 = G__34841;
count__34829_34835 = G__34842;
i__34830_34836 = G__34843;
continue;
}
} else
{var temp__4092__auto___34844 = cljs.core.seq(seq__34827_34833);if(temp__4092__auto___34844)
{var seq__34827_34845__$1 = temp__4092__auto___34844;if(cljs.core.chunked_seq_QMARK_(seq__34827_34845__$1))
{var c__4189__auto___34846 = cljs.core.chunk_first(seq__34827_34845__$1);{
var G__34847 = cljs.core.chunk_rest(seq__34827_34845__$1);
var G__34848 = c__4189__auto___34846;
var G__34849 = cljs.core.count(c__4189__auto___34846);
var G__34850 = 0;
seq__34827_34833 = G__34847;
chunk__34828_34834 = G__34848;
count__34829_34835 = G__34849;
i__34830_34836 = G__34850;
continue;
}
} else
{var vec__34832_34851 = cljs.core.first(seq__34827_34845__$1);var v_34852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34832_34851,0,null);var body_class_34853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34832_34851,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34852,view))
{domina.add_class_BANG_(body,body_class_34853);
} else
{domina.remove_class_BANG_(body,body_class_34853);
}
{
var G__34854 = cljs.core.next(seq__34827_34845__$1);
var G__34855 = null;
var G__34856 = 0;
var G__34857 = 0;
seq__34827_34833 = G__34854;
chunk__34828_34834 = G__34855;
count__34829_34835 = G__34856;
i__34830_34836 = G__34857;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__34864 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34865 = null;var count__34866 = 0;var i__34867 = 0;while(true){
if((i__34867 < count__34866))
{var vec__34868 = chunk__34865.cljs$core$IIndexed$_nth$arity$2(null,i__34867);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34868,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34868,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$750,((function (seq__34864,chunk__34865,count__34866,i__34867,vec__34868,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,v], null));
});})(seq__34864,chunk__34865,count__34866,i__34867,vec__34868,v,_))
);
{
var G__34870 = seq__34864;
var G__34871 = chunk__34865;
var G__34872 = count__34866;
var G__34873 = (i__34867 + 1);
seq__34864 = G__34870;
chunk__34865 = G__34871;
count__34866 = G__34872;
i__34867 = G__34873;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34864);if(temp__4092__auto__)
{var seq__34864__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34864__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34864__$1);{
var G__34874 = cljs.core.chunk_rest(seq__34864__$1);
var G__34875 = c__4189__auto__;
var G__34876 = cljs.core.count(c__4189__auto__);
var G__34877 = 0;
seq__34864 = G__34874;
chunk__34865 = G__34875;
count__34866 = G__34876;
i__34867 = G__34877;
continue;
}
} else
{var vec__34869 = cljs.core.first(seq__34864__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34869,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34869,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$750,((function (seq__34864,chunk__34865,count__34866,i__34867,vec__34869,v,_,seq__34864__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,v], null));
});})(seq__34864,chunk__34865,count__34866,i__34867,vec__34869,v,_,seq__34864__$1,temp__4092__auto__))
);
{
var G__34878 = cljs.core.next(seq__34864__$1);
var G__34879 = null;
var G__34880 = 0;
var G__34881 = 0;
seq__34864 = G__34878;
chunk__34865 = G__34879;
count__34866 = G__34880;
i__34867 = G__34881;
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
