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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$344,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$344,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__22176 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22177 = null;var count__22178 = 0;var i__22179 = 0;while(true){
if((i__22179 < count__22178))
{var vec__22180 = chunk__22177.cljs$core$IIndexed$_nth$arity$2(null,i__22179);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22180,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22180,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22182 = seq__22176;
var G__22183 = chunk__22177;
var G__22184 = count__22178;
var G__22185 = (i__22179 + 1);
seq__22176 = G__22182;
chunk__22177 = G__22183;
count__22178 = G__22184;
i__22179 = G__22185;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22176);if(temp__4092__auto__)
{var seq__22176__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22176__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22176__$1);{
var G__22186 = cljs.core.chunk_rest(seq__22176__$1);
var G__22187 = c__4148__auto__;
var G__22188 = cljs.core.count(c__4148__auto__);
var G__22189 = 0;
seq__22176 = G__22186;
chunk__22177 = G__22187;
count__22178 = G__22188;
i__22179 = G__22189;
continue;
}
} else
{var vec__22181 = cljs.core.first(seq__22176__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,view))
{domina.add_class_BANG_(body,body_class);
} else
{domina.remove_class_BANG_(body,body_class);
}
{
var G__22190 = cljs.core.next(seq__22176__$1);
var G__22191 = null;
var G__22192 = 0;
var G__22193 = 0;
seq__22176 = G__22190;
chunk__22177 = G__22191;
count__22178 = G__22192;
i__22179 = G__22193;
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
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22200 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22201 = null;var count__22202 = 0;var i__22203 = 0;while(true){
if((i__22203 < count__22202))
{var vec__22204 = chunk__22201.cljs$core$IIndexed$_nth$arity$2(null,i__22203);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22204,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22204,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$344,((function (seq__22200,chunk__22201,count__22202,i__22203,vec__22204,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,v], null));
});})(seq__22200,chunk__22201,count__22202,i__22203,vec__22204,v,_))
);
{
var G__22206 = seq__22200;
var G__22207 = chunk__22201;
var G__22208 = count__22202;
var G__22209 = (i__22203 + 1);
seq__22200 = G__22206;
chunk__22201 = G__22207;
count__22202 = G__22208;
i__22203 = G__22209;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22200);if(temp__4092__auto__)
{var seq__22200__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22200__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22200__$1);{
var G__22210 = cljs.core.chunk_rest(seq__22200__$1);
var G__22211 = c__4148__auto__;
var G__22212 = cljs.core.count(c__4148__auto__);
var G__22213 = 0;
seq__22200 = G__22210;
chunk__22201 = G__22211;
count__22202 = G__22212;
i__22203 = G__22213;
continue;
}
} else
{var vec__22205 = cljs.core.first(seq__22200__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22205,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22205,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$344,((function (seq__22200,chunk__22201,count__22202,i__22203,vec__22205,v,_,seq__22200__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,v], null));
});})(seq__22200,chunk__22201,count__22202,i__22203,vec__22205,v,_,seq__22200__$1,temp__4092__auto__))
);
{
var G__22214 = cljs.core.next(seq__22200__$1);
var G__22215 = null;
var G__22216 = 0;
var G__22217 = 0;
seq__22200 = G__22214;
chunk__22201 = G__22215;
count__22202 = G__22216;
i__22203 = G__22217;
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
