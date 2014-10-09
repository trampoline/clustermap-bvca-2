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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$1177,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$1177,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__41127_41133 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__41128_41134 = null;var count__41129_41135 = (0);var i__41130_41136 = (0);while(true){
if((i__41130_41136 < count__41129_41135))
{var vec__41131_41137 = chunk__41128_41134.cljs$core$IIndexed$_nth$arity$2(null,i__41130_41136);var v_41138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131_41137,(0),null);var body_class_41139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131_41137,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_41138,view))
{domina.add_class_BANG_(body,body_class_41139);
} else
{domina.remove_class_BANG_(body,body_class_41139);
}
{
var G__41140 = seq__41127_41133;
var G__41141 = chunk__41128_41134;
var G__41142 = count__41129_41135;
var G__41143 = (i__41130_41136 + (1));
seq__41127_41133 = G__41140;
chunk__41128_41134 = G__41141;
count__41129_41135 = G__41142;
i__41130_41136 = G__41143;
continue;
}
} else
{var temp__4126__auto___41144 = cljs.core.seq(seq__41127_41133);if(temp__4126__auto___41144)
{var seq__41127_41145__$1 = temp__4126__auto___41144;if(cljs.core.chunked_seq_QMARK_(seq__41127_41145__$1))
{var c__4314__auto___41146 = cljs.core.chunk_first(seq__41127_41145__$1);{
var G__41147 = cljs.core.chunk_rest(seq__41127_41145__$1);
var G__41148 = c__4314__auto___41146;
var G__41149 = cljs.core.count(c__4314__auto___41146);
var G__41150 = (0);
seq__41127_41133 = G__41147;
chunk__41128_41134 = G__41148;
count__41129_41135 = G__41149;
i__41130_41136 = G__41150;
continue;
}
} else
{var vec__41132_41151 = cljs.core.first(seq__41127_41145__$1);var v_41152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41132_41151,(0),null);var body_class_41153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41132_41151,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_41152,view))
{domina.add_class_BANG_(body,body_class_41153);
} else
{domina.remove_class_BANG_(body,body_class_41153);
}
{
var G__41154 = cljs.core.next(seq__41127_41145__$1);
var G__41155 = null;
var G__41156 = (0);
var G__41157 = (0);
seq__41127_41133 = G__41154;
chunk__41128_41134 = G__41155;
count__41129_41135 = G__41156;
i__41130_41136 = G__41157;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__41164 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__41165 = null;var count__41166 = (0);var i__41167 = (0);while(true){
if((i__41167 < count__41166))
{var vec__41168 = chunk__41165.cljs$core$IIndexed$_nth$arity$2(null,i__41167);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41168,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41168,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1177,((function (seq__41164,chunk__41165,count__41166,i__41167,vec__41168,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1178,v], null));
});})(seq__41164,chunk__41165,count__41166,i__41167,vec__41168,v,_))
);
{
var G__41170 = seq__41164;
var G__41171 = chunk__41165;
var G__41172 = count__41166;
var G__41173 = (i__41167 + (1));
seq__41164 = G__41170;
chunk__41165 = G__41171;
count__41166 = G__41172;
i__41167 = G__41173;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__41164);if(temp__4126__auto__)
{var seq__41164__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__41164__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__41164__$1);{
var G__41174 = cljs.core.chunk_rest(seq__41164__$1);
var G__41175 = c__4314__auto__;
var G__41176 = cljs.core.count(c__4314__auto__);
var G__41177 = (0);
seq__41164 = G__41174;
chunk__41165 = G__41175;
count__41166 = G__41176;
i__41167 = G__41177;
continue;
}
} else
{var vec__41169 = cljs.core.first(seq__41164__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41169,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41169,(1),null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1(("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),cljs.core.constant$keyword$1177,((function (seq__41164,chunk__41165,count__41166,i__41167,vec__41169,v,_,seq__41164__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1178,v], null));
});})(seq__41164,chunk__41165,count__41166,i__41167,vec__41169,v,_,seq__41164__$1,temp__4126__auto__))
);
{
var G__41178 = cljs.core.next(seq__41164__$1);
var G__41179 = null;
var G__41180 = (0);
var G__41181 = (0);
seq__41164 = G__41178;
chunk__41165 = G__41179;
count__41166 = G__41180;
i__41167 = G__41181;
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
