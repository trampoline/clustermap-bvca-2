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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$414,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$414,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__23180_23186 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23181_23187 = null;var count__23182_23188 = 0;var i__23183_23189 = 0;while(true){
if((i__23183_23189 < count__23182_23188))
{var vec__23184_23190 = chunk__23181_23187.cljs$core$IIndexed$_nth$arity$2(null,i__23183_23189);var v_23191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23184_23190,0,null);var body_class_23192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23184_23190,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23191,view))
{domina.add_class_BANG_(body,body_class_23192);
} else
{domina.remove_class_BANG_(body,body_class_23192);
}
{
var G__23193 = seq__23180_23186;
var G__23194 = chunk__23181_23187;
var G__23195 = count__23182_23188;
var G__23196 = (i__23183_23189 + 1);
seq__23180_23186 = G__23193;
chunk__23181_23187 = G__23194;
count__23182_23188 = G__23195;
i__23183_23189 = G__23196;
continue;
}
} else
{var temp__4092__auto___23197 = cljs.core.seq(seq__23180_23186);if(temp__4092__auto___23197)
{var seq__23180_23198__$1 = temp__4092__auto___23197;if(cljs.core.chunked_seq_QMARK_(seq__23180_23198__$1))
{var c__4148__auto___23199 = cljs.core.chunk_first(seq__23180_23198__$1);{
var G__23200 = cljs.core.chunk_rest(seq__23180_23198__$1);
var G__23201 = c__4148__auto___23199;
var G__23202 = cljs.core.count(c__4148__auto___23199);
var G__23203 = 0;
seq__23180_23186 = G__23200;
chunk__23181_23187 = G__23201;
count__23182_23188 = G__23202;
i__23183_23189 = G__23203;
continue;
}
} else
{var vec__23185_23204 = cljs.core.first(seq__23180_23198__$1);var v_23205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23185_23204,0,null);var body_class_23206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23185_23204,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23205,view))
{domina.add_class_BANG_(body,body_class_23206);
} else
{domina.remove_class_BANG_(body,body_class_23206);
}
{
var G__23207 = cljs.core.next(seq__23180_23198__$1);
var G__23208 = null;
var G__23209 = 0;
var G__23210 = 0;
seq__23180_23186 = G__23207;
chunk__23181_23187 = G__23208;
count__23182_23188 = G__23209;
i__23183_23189 = G__23210;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23217 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23218 = null;var count__23219 = 0;var i__23220 = 0;while(true){
if((i__23220 < count__23219))
{var vec__23221 = chunk__23218.cljs$core$IIndexed$_nth$arity$2(null,i__23220);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23221,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23221,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$414,((function (seq__23217,chunk__23218,count__23219,i__23220,vec__23221,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,v], null));
});})(seq__23217,chunk__23218,count__23219,i__23220,vec__23221,v,_))
);
{
var G__23223 = seq__23217;
var G__23224 = chunk__23218;
var G__23225 = count__23219;
var G__23226 = (i__23220 + 1);
seq__23217 = G__23223;
chunk__23218 = G__23224;
count__23219 = G__23225;
i__23220 = G__23226;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23217);if(temp__4092__auto__)
{var seq__23217__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23217__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23217__$1);{
var G__23227 = cljs.core.chunk_rest(seq__23217__$1);
var G__23228 = c__4148__auto__;
var G__23229 = cljs.core.count(c__4148__auto__);
var G__23230 = 0;
seq__23217 = G__23227;
chunk__23218 = G__23228;
count__23219 = G__23229;
i__23220 = G__23230;
continue;
}
} else
{var vec__23222 = cljs.core.first(seq__23217__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23222,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23222,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$414,((function (seq__23217,chunk__23218,count__23219,i__23220,vec__23222,v,_,seq__23217__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,v], null));
});})(seq__23217,chunk__23218,count__23219,i__23220,vec__23222,v,_,seq__23217__$1,temp__4092__auto__))
);
{
var G__23231 = cljs.core.next(seq__23217__$1);
var G__23232 = null;
var G__23233 = 0;
var G__23234 = 0;
seq__23217 = G__23231;
chunk__23218 = G__23232;
count__23219 = G__23233;
i__23220 = G__23234;
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
