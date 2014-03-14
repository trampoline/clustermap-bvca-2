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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$747,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$747,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__34839_34845 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34840_34846 = null;var count__34841_34847 = 0;var i__34842_34848 = 0;while(true){
if((i__34842_34848 < count__34841_34847))
{var vec__34843_34849 = chunk__34840_34846.cljs$core$IIndexed$_nth$arity$2(null,i__34842_34848);var v_34850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843_34849,0,null);var body_class_34851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843_34849,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34850,view))
{domina.add_class_BANG_(body,body_class_34851);
} else
{domina.remove_class_BANG_(body,body_class_34851);
}
{
var G__34852 = seq__34839_34845;
var G__34853 = chunk__34840_34846;
var G__34854 = count__34841_34847;
var G__34855 = (i__34842_34848 + 1);
seq__34839_34845 = G__34852;
chunk__34840_34846 = G__34853;
count__34841_34847 = G__34854;
i__34842_34848 = G__34855;
continue;
}
} else
{var temp__4092__auto___34856 = cljs.core.seq(seq__34839_34845);if(temp__4092__auto___34856)
{var seq__34839_34857__$1 = temp__4092__auto___34856;if(cljs.core.chunked_seq_QMARK_(seq__34839_34857__$1))
{var c__4189__auto___34858 = cljs.core.chunk_first(seq__34839_34857__$1);{
var G__34859 = cljs.core.chunk_rest(seq__34839_34857__$1);
var G__34860 = c__4189__auto___34858;
var G__34861 = cljs.core.count(c__4189__auto___34858);
var G__34862 = 0;
seq__34839_34845 = G__34859;
chunk__34840_34846 = G__34860;
count__34841_34847 = G__34861;
i__34842_34848 = G__34862;
continue;
}
} else
{var vec__34844_34863 = cljs.core.first(seq__34839_34857__$1);var v_34864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34844_34863,0,null);var body_class_34865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34844_34863,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34864,view))
{domina.add_class_BANG_(body,body_class_34865);
} else
{domina.remove_class_BANG_(body,body_class_34865);
}
{
var G__34866 = cljs.core.next(seq__34839_34857__$1);
var G__34867 = null;
var G__34868 = 0;
var G__34869 = 0;
seq__34839_34845 = G__34866;
chunk__34840_34846 = G__34867;
count__34841_34847 = G__34868;
i__34842_34848 = G__34869;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__34876 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34877 = null;var count__34878 = 0;var i__34879 = 0;while(true){
if((i__34879 < count__34878))
{var vec__34880 = chunk__34877.cljs$core$IIndexed$_nth$arity$2(null,i__34879);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$747,((function (seq__34876,chunk__34877,count__34878,i__34879,vec__34880,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,v], null));
});})(seq__34876,chunk__34877,count__34878,i__34879,vec__34880,v,_))
);
{
var G__34882 = seq__34876;
var G__34883 = chunk__34877;
var G__34884 = count__34878;
var G__34885 = (i__34879 + 1);
seq__34876 = G__34882;
chunk__34877 = G__34883;
count__34878 = G__34884;
i__34879 = G__34885;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34876);if(temp__4092__auto__)
{var seq__34876__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34876__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34876__$1);{
var G__34886 = cljs.core.chunk_rest(seq__34876__$1);
var G__34887 = c__4189__auto__;
var G__34888 = cljs.core.count(c__4189__auto__);
var G__34889 = 0;
seq__34876 = G__34886;
chunk__34877 = G__34887;
count__34878 = G__34888;
i__34879 = G__34889;
continue;
}
} else
{var vec__34881 = cljs.core.first(seq__34876__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34881,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34881,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$747,((function (seq__34876,chunk__34877,count__34878,i__34879,vec__34881,v,_,seq__34876__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,v], null));
});})(seq__34876,chunk__34877,count__34878,i__34879,vec__34881,v,_,seq__34876__$1,temp__4092__auto__))
);
{
var G__34890 = cljs.core.next(seq__34876__$1);
var G__34891 = null;
var G__34892 = 0;
var G__34893 = 0;
seq__34876 = G__34890;
chunk__34877 = G__34891;
count__34878 = G__34892;
i__34879 = G__34893;
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
