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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$413,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$413,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__23188_23194 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23189_23195 = null;var count__23190_23196 = 0;var i__23191_23197 = 0;while(true){
if((i__23191_23197 < count__23190_23196))
{var vec__23192_23198 = chunk__23189_23195.cljs$core$IIndexed$_nth$arity$2(null,i__23191_23197);var v_23199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23192_23198,0,null);var body_class_23200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23192_23198,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23199,view))
{domina.add_class_BANG_(body,body_class_23200);
} else
{domina.remove_class_BANG_(body,body_class_23200);
}
{
var G__23201 = seq__23188_23194;
var G__23202 = chunk__23189_23195;
var G__23203 = count__23190_23196;
var G__23204 = (i__23191_23197 + 1);
seq__23188_23194 = G__23201;
chunk__23189_23195 = G__23202;
count__23190_23196 = G__23203;
i__23191_23197 = G__23204;
continue;
}
} else
{var temp__4092__auto___23205 = cljs.core.seq(seq__23188_23194);if(temp__4092__auto___23205)
{var seq__23188_23206__$1 = temp__4092__auto___23205;if(cljs.core.chunked_seq_QMARK_(seq__23188_23206__$1))
{var c__4148__auto___23207 = cljs.core.chunk_first(seq__23188_23206__$1);{
var G__23208 = cljs.core.chunk_rest(seq__23188_23206__$1);
var G__23209 = c__4148__auto___23207;
var G__23210 = cljs.core.count(c__4148__auto___23207);
var G__23211 = 0;
seq__23188_23194 = G__23208;
chunk__23189_23195 = G__23209;
count__23190_23196 = G__23210;
i__23191_23197 = G__23211;
continue;
}
} else
{var vec__23193_23212 = cljs.core.first(seq__23188_23206__$1);var v_23213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193_23212,0,null);var body_class_23214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193_23212,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23213,view))
{domina.add_class_BANG_(body,body_class_23214);
} else
{domina.remove_class_BANG_(body,body_class_23214);
}
{
var G__23215 = cljs.core.next(seq__23188_23206__$1);
var G__23216 = null;
var G__23217 = 0;
var G__23218 = 0;
seq__23188_23194 = G__23215;
chunk__23189_23195 = G__23216;
count__23190_23196 = G__23217;
i__23191_23197 = G__23218;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23225 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23226 = null;var count__23227 = 0;var i__23228 = 0;while(true){
if((i__23228 < count__23227))
{var vec__23229 = chunk__23226.cljs$core$IIndexed$_nth$arity$2(null,i__23228);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23229,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23229,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$413,((function (seq__23225,chunk__23226,count__23227,i__23228,vec__23229,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,v], null));
});})(seq__23225,chunk__23226,count__23227,i__23228,vec__23229,v,_))
);
{
var G__23231 = seq__23225;
var G__23232 = chunk__23226;
var G__23233 = count__23227;
var G__23234 = (i__23228 + 1);
seq__23225 = G__23231;
chunk__23226 = G__23232;
count__23227 = G__23233;
i__23228 = G__23234;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23225);if(temp__4092__auto__)
{var seq__23225__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23225__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23225__$1);{
var G__23235 = cljs.core.chunk_rest(seq__23225__$1);
var G__23236 = c__4148__auto__;
var G__23237 = cljs.core.count(c__4148__auto__);
var G__23238 = 0;
seq__23225 = G__23235;
chunk__23226 = G__23236;
count__23227 = G__23237;
i__23228 = G__23238;
continue;
}
} else
{var vec__23230 = cljs.core.first(seq__23225__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23230,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23230,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$413,((function (seq__23225,chunk__23226,count__23227,i__23228,vec__23230,v,_,seq__23225__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,v], null));
});})(seq__23225,chunk__23226,count__23227,i__23228,vec__23230,v,_,seq__23225__$1,temp__4092__auto__))
);
{
var G__23239 = cljs.core.next(seq__23225__$1);
var G__23240 = null;
var G__23241 = 0;
var G__23242 = 0;
seq__23225 = G__23239;
chunk__23226 = G__23240;
count__23227 = G__23241;
i__23228 = G__23242;
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
