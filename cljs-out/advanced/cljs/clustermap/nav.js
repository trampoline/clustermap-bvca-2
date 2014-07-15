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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1014,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1014,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__36155_36161 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__36156_36162 = null;var count__36157_36163 = (0);var i__36158_36164 = (0);while(true){
if((i__36158_36164 < count__36157_36163))
{var vec__36159_36165 = chunk__36156_36162.cljs$core$IIndexed$_nth$arity$2(null,i__36158_36164);var v_36166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159_36165,(0),null);var body_class_36167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159_36165,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_36166,view))
{domina.add_class_BANG_(body,body_class_36167);
} else
{domina.remove_class_BANG_(body,body_class_36167);
}
{
var G__36168 = seq__36155_36161;
var G__36169 = chunk__36156_36162;
var G__36170 = count__36157_36163;
var G__36171 = (i__36158_36164 + (1));
seq__36155_36161 = G__36168;
chunk__36156_36162 = G__36169;
count__36157_36163 = G__36170;
i__36158_36164 = G__36171;
continue;
}
} else
{var temp__4126__auto___36172 = cljs.core.seq(seq__36155_36161);if(temp__4126__auto___36172)
{var seq__36155_36173__$1 = temp__4126__auto___36172;if(cljs.core.chunked_seq_QMARK_(seq__36155_36173__$1))
{var c__4299__auto___36174 = cljs.core.chunk_first(seq__36155_36173__$1);{
var G__36175 = cljs.core.chunk_rest(seq__36155_36173__$1);
var G__36176 = c__4299__auto___36174;
var G__36177 = cljs.core.count(c__4299__auto___36174);
var G__36178 = (0);
seq__36155_36161 = G__36175;
chunk__36156_36162 = G__36176;
count__36157_36163 = G__36177;
i__36158_36164 = G__36178;
continue;
}
} else
{var vec__36160_36179 = cljs.core.first(seq__36155_36173__$1);var v_36180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36160_36179,(0),null);var body_class_36181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36160_36179,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_36180,view))
{domina.add_class_BANG_(body,body_class_36181);
} else
{domina.remove_class_BANG_(body,body_class_36181);
}
{
var G__36182 = cljs.core.next(seq__36155_36173__$1);
var G__36183 = null;
var G__36184 = (0);
var G__36185 = (0);
seq__36155_36161 = G__36182;
chunk__36156_36162 = G__36183;
count__36157_36163 = G__36184;
i__36158_36164 = G__36185;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__36192 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__36193 = null;var count__36194 = (0);var i__36195 = (0);while(true){
if((i__36195 < count__36194))
{var vec__36196 = chunk__36193.cljs$core$IIndexed$_nth$arity$2(null,i__36195);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36196,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36196,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1014,((function (seq__36192,chunk__36193,count__36194,i__36195,vec__36196,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1015,v], null));
});})(seq__36192,chunk__36193,count__36194,i__36195,vec__36196,v,_))
);
{
var G__36198 = seq__36192;
var G__36199 = chunk__36193;
var G__36200 = count__36194;
var G__36201 = (i__36195 + (1));
seq__36192 = G__36198;
chunk__36193 = G__36199;
count__36194 = G__36200;
i__36195 = G__36201;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__36192);if(temp__4126__auto__)
{var seq__36192__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36192__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__36192__$1);{
var G__36202 = cljs.core.chunk_rest(seq__36192__$1);
var G__36203 = c__4299__auto__;
var G__36204 = cljs.core.count(c__4299__auto__);
var G__36205 = (0);
seq__36192 = G__36202;
chunk__36193 = G__36203;
count__36194 = G__36204;
i__36195 = G__36205;
continue;
}
} else
{var vec__36197 = cljs.core.first(seq__36192__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36197,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36197,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1014,((function (seq__36192,chunk__36193,count__36194,i__36195,vec__36197,v,_,seq__36192__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1015,v], null));
});})(seq__36192,chunk__36193,count__36194,i__36195,vec__36197,v,_,seq__36192__$1,temp__4126__auto__))
);
{
var G__36206 = cljs.core.next(seq__36192__$1);
var G__36207 = null;
var G__36208 = (0);
var G__36209 = (0);
seq__36192 = G__36206;
chunk__36193 = G__36207;
count__36194 = G__36208;
i__36195 = G__36209;
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
