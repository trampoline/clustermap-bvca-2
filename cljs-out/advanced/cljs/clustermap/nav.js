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
var seq__34899_34905 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34900_34906 = null;var count__34901_34907 = 0;var i__34902_34908 = 0;while(true){
if((i__34902_34908 < count__34901_34907))
{var vec__34903_34909 = chunk__34900_34906.cljs$core$IIndexed$_nth$arity$2(null,i__34902_34908);var v_34910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903_34909,0,null);var body_class_34911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903_34909,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34910,view))
{domina.add_class_BANG_(body,body_class_34911);
} else
{domina.remove_class_BANG_(body,body_class_34911);
}
{
var G__34912 = seq__34899_34905;
var G__34913 = chunk__34900_34906;
var G__34914 = count__34901_34907;
var G__34915 = (i__34902_34908 + 1);
seq__34899_34905 = G__34912;
chunk__34900_34906 = G__34913;
count__34901_34907 = G__34914;
i__34902_34908 = G__34915;
continue;
}
} else
{var temp__4092__auto___34916 = cljs.core.seq(seq__34899_34905);if(temp__4092__auto___34916)
{var seq__34899_34917__$1 = temp__4092__auto___34916;if(cljs.core.chunked_seq_QMARK_(seq__34899_34917__$1))
{var c__4189__auto___34918 = cljs.core.chunk_first(seq__34899_34917__$1);{
var G__34919 = cljs.core.chunk_rest(seq__34899_34917__$1);
var G__34920 = c__4189__auto___34918;
var G__34921 = cljs.core.count(c__4189__auto___34918);
var G__34922 = 0;
seq__34899_34905 = G__34919;
chunk__34900_34906 = G__34920;
count__34901_34907 = G__34921;
i__34902_34908 = G__34922;
continue;
}
} else
{var vec__34904_34923 = cljs.core.first(seq__34899_34917__$1);var v_34924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34904_34923,0,null);var body_class_34925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34904_34923,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34924,view))
{domina.add_class_BANG_(body,body_class_34925);
} else
{domina.remove_class_BANG_(body,body_class_34925);
}
{
var G__34926 = cljs.core.next(seq__34899_34917__$1);
var G__34927 = null;
var G__34928 = 0;
var G__34929 = 0;
seq__34899_34905 = G__34926;
chunk__34900_34906 = G__34927;
count__34901_34907 = G__34928;
i__34902_34908 = G__34929;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__34936 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34937 = null;var count__34938 = 0;var i__34939 = 0;while(true){
if((i__34939 < count__34938))
{var vec__34940 = chunk__34937.cljs$core$IIndexed$_nth$arity$2(null,i__34939);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$750,((function (seq__34936,chunk__34937,count__34938,i__34939,vec__34940,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,v], null));
});})(seq__34936,chunk__34937,count__34938,i__34939,vec__34940,v,_))
);
{
var G__34942 = seq__34936;
var G__34943 = chunk__34937;
var G__34944 = count__34938;
var G__34945 = (i__34939 + 1);
seq__34936 = G__34942;
chunk__34937 = G__34943;
count__34938 = G__34944;
i__34939 = G__34945;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34936);if(temp__4092__auto__)
{var seq__34936__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34936__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34936__$1);{
var G__34946 = cljs.core.chunk_rest(seq__34936__$1);
var G__34947 = c__4189__auto__;
var G__34948 = cljs.core.count(c__4189__auto__);
var G__34949 = 0;
seq__34936 = G__34946;
chunk__34937 = G__34947;
count__34938 = G__34948;
i__34939 = G__34949;
continue;
}
} else
{var vec__34941 = cljs.core.first(seq__34936__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$750,((function (seq__34936,chunk__34937,count__34938,i__34939,vec__34941,v,_,seq__34936__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,v], null));
});})(seq__34936,chunk__34937,count__34938,i__34939,vec__34941,v,_,seq__34936__$1,temp__4092__auto__))
);
{
var G__34950 = cljs.core.next(seq__34936__$1);
var G__34951 = null;
var G__34952 = 0;
var G__34953 = 0;
seq__34936 = G__34950;
chunk__34937 = G__34951;
count__34938 = G__34952;
i__34939 = G__34953;
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
