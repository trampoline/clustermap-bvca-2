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
var seq__22205_22211 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22206_22212 = null;var count__22207_22213 = 0;var i__22208_22214 = 0;while(true){
if((i__22208_22214 < count__22207_22213))
{var vec__22209_22215 = chunk__22206_22212.cljs$core$IIndexed$_nth$arity$2(null,i__22208_22214);var v_22216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22209_22215,0,null);var body_class_22217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22209_22215,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22216,view))
{domina.add_class_BANG_(body,body_class_22217);
} else
{domina.remove_class_BANG_(body,body_class_22217);
}
{
var G__22218 = seq__22205_22211;
var G__22219 = chunk__22206_22212;
var G__22220 = count__22207_22213;
var G__22221 = (i__22208_22214 + 1);
seq__22205_22211 = G__22218;
chunk__22206_22212 = G__22219;
count__22207_22213 = G__22220;
i__22208_22214 = G__22221;
continue;
}
} else
{var temp__4092__auto___22222 = cljs.core.seq(seq__22205_22211);if(temp__4092__auto___22222)
{var seq__22205_22223__$1 = temp__4092__auto___22222;if(cljs.core.chunked_seq_QMARK_(seq__22205_22223__$1))
{var c__4148__auto___22224 = cljs.core.chunk_first(seq__22205_22223__$1);{
var G__22225 = cljs.core.chunk_rest(seq__22205_22223__$1);
var G__22226 = c__4148__auto___22224;
var G__22227 = cljs.core.count(c__4148__auto___22224);
var G__22228 = 0;
seq__22205_22211 = G__22225;
chunk__22206_22212 = G__22226;
count__22207_22213 = G__22227;
i__22208_22214 = G__22228;
continue;
}
} else
{var vec__22210_22229 = cljs.core.first(seq__22205_22223__$1);var v_22230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22229,0,null);var body_class_22231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22229,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_22230,view))
{domina.add_class_BANG_(body,body_class_22231);
} else
{domina.remove_class_BANG_(body,body_class_22231);
}
{
var G__22232 = cljs.core.next(seq__22205_22223__$1);
var G__22233 = null;
var G__22234 = 0;
var G__22235 = 0;
seq__22205_22211 = G__22232;
chunk__22206_22212 = G__22233;
count__22207_22213 = G__22234;
i__22208_22214 = G__22235;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__22242 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__22243 = null;var count__22244 = 0;var i__22245 = 0;while(true){
if((i__22245 < count__22244))
{var vec__22246 = chunk__22243.cljs$core$IIndexed$_nth$arity$2(null,i__22245);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22246,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22246,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$344,((function (seq__22242,chunk__22243,count__22244,i__22245,vec__22246,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,v], null));
});})(seq__22242,chunk__22243,count__22244,i__22245,vec__22246,v,_))
);
{
var G__22248 = seq__22242;
var G__22249 = chunk__22243;
var G__22250 = count__22244;
var G__22251 = (i__22245 + 1);
seq__22242 = G__22248;
chunk__22243 = G__22249;
count__22244 = G__22250;
i__22245 = G__22251;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22242);if(temp__4092__auto__)
{var seq__22242__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22242__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22242__$1);{
var G__22252 = cljs.core.chunk_rest(seq__22242__$1);
var G__22253 = c__4148__auto__;
var G__22254 = cljs.core.count(c__4148__auto__);
var G__22255 = 0;
seq__22242 = G__22252;
chunk__22243 = G__22253;
count__22244 = G__22254;
i__22245 = G__22255;
continue;
}
} else
{var vec__22247 = cljs.core.first(seq__22242__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22247,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22247,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$344,((function (seq__22242,chunk__22243,count__22244,i__22245,vec__22247,v,_,seq__22242__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,v], null));
});})(seq__22242,chunk__22243,count__22244,i__22245,vec__22247,v,_,seq__22242__$1,temp__4092__auto__))
);
{
var G__22256 = cljs.core.next(seq__22242__$1);
var G__22257 = null;
var G__22258 = 0;
var G__22259 = 0;
seq__22242 = G__22256;
chunk__22243 = G__22257;
count__22244 = G__22258;
i__22245 = G__22259;
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
