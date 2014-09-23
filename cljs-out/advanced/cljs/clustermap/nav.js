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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1126,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1126,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__39189_39195 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__39190_39196 = null;var count__39191_39197 = (0);var i__39192_39198 = (0);while(true){
if((i__39192_39198 < count__39191_39197))
{var vec__39193_39199 = chunk__39190_39196.cljs$core$IIndexed$_nth$arity$2(null,i__39192_39198);var v_39200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39193_39199,(0),null);var body_class_39201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39193_39199,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_39200,view))
{domina.add_class_BANG_(body,body_class_39201);
} else
{domina.remove_class_BANG_(body,body_class_39201);
}
{
var G__39202 = seq__39189_39195;
var G__39203 = chunk__39190_39196;
var G__39204 = count__39191_39197;
var G__39205 = (i__39192_39198 + (1));
seq__39189_39195 = G__39202;
chunk__39190_39196 = G__39203;
count__39191_39197 = G__39204;
i__39192_39198 = G__39205;
continue;
}
} else
{var temp__4126__auto___39206 = cljs.core.seq(seq__39189_39195);if(temp__4126__auto___39206)
{var seq__39189_39207__$1 = temp__4126__auto___39206;if(cljs.core.chunked_seq_QMARK_(seq__39189_39207__$1))
{var c__4314__auto___39208 = cljs.core.chunk_first(seq__39189_39207__$1);{
var G__39209 = cljs.core.chunk_rest(seq__39189_39207__$1);
var G__39210 = c__4314__auto___39208;
var G__39211 = cljs.core.count(c__4314__auto___39208);
var G__39212 = (0);
seq__39189_39195 = G__39209;
chunk__39190_39196 = G__39210;
count__39191_39197 = G__39211;
i__39192_39198 = G__39212;
continue;
}
} else
{var vec__39194_39213 = cljs.core.first(seq__39189_39207__$1);var v_39214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39194_39213,(0),null);var body_class_39215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39194_39213,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_39214,view))
{domina.add_class_BANG_(body,body_class_39215);
} else
{domina.remove_class_BANG_(body,body_class_39215);
}
{
var G__39216 = cljs.core.next(seq__39189_39207__$1);
var G__39217 = null;
var G__39218 = (0);
var G__39219 = (0);
seq__39189_39195 = G__39216;
chunk__39190_39196 = G__39217;
count__39191_39197 = G__39218;
i__39192_39198 = G__39219;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__39226 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__39227 = null;var count__39228 = (0);var i__39229 = (0);while(true){
if((i__39229 < count__39228))
{var vec__39230 = chunk__39227.cljs$core$IIndexed$_nth$arity$2(null,i__39229);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39230,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39230,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1126,((function (seq__39226,chunk__39227,count__39228,i__39229,vec__39230,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1127,v], null));
});})(seq__39226,chunk__39227,count__39228,i__39229,vec__39230,v,_))
);
{
var G__39232 = seq__39226;
var G__39233 = chunk__39227;
var G__39234 = count__39228;
var G__39235 = (i__39229 + (1));
seq__39226 = G__39232;
chunk__39227 = G__39233;
count__39228 = G__39234;
i__39229 = G__39235;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39226);if(temp__4126__auto__)
{var seq__39226__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39226__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__39226__$1);{
var G__39236 = cljs.core.chunk_rest(seq__39226__$1);
var G__39237 = c__4314__auto__;
var G__39238 = cljs.core.count(c__4314__auto__);
var G__39239 = (0);
seq__39226 = G__39236;
chunk__39227 = G__39237;
count__39228 = G__39238;
i__39229 = G__39239;
continue;
}
} else
{var vec__39231 = cljs.core.first(seq__39226__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39231,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39231,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1126,((function (seq__39226,chunk__39227,count__39228,i__39229,vec__39231,v,_,seq__39226__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1127,v], null));
});})(seq__39226,chunk__39227,count__39228,i__39229,vec__39231,v,_,seq__39226__$1,temp__4126__auto__))
);
{
var G__39240 = cljs.core.next(seq__39226__$1);
var G__39241 = null;
var G__39242 = (0);
var G__39243 = (0);
seq__39226 = G__39240;
chunk__39227 = G__39241;
count__39228 = G__39242;
i__39229 = G__39243;
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
