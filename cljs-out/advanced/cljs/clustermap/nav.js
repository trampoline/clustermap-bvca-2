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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$428,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$428,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__23156_23162 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23157_23163 = null;var count__23158_23164 = 0;var i__23159_23165 = 0;while(true){
if((i__23159_23165 < count__23158_23164))
{var vec__23160_23166 = chunk__23157_23163.cljs$core$IIndexed$_nth$arity$2(null,i__23159_23165);var v_23167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23160_23166,0,null);var body_class_23168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23160_23166,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23167,view))
{domina.add_class_BANG_(body,body_class_23168);
} else
{domina.remove_class_BANG_(body,body_class_23168);
}
{
var G__23169 = seq__23156_23162;
var G__23170 = chunk__23157_23163;
var G__23171 = count__23158_23164;
var G__23172 = (i__23159_23165 + 1);
seq__23156_23162 = G__23169;
chunk__23157_23163 = G__23170;
count__23158_23164 = G__23171;
i__23159_23165 = G__23172;
continue;
}
} else
{var temp__4092__auto___23173 = cljs.core.seq(seq__23156_23162);if(temp__4092__auto___23173)
{var seq__23156_23174__$1 = temp__4092__auto___23173;if(cljs.core.chunked_seq_QMARK_(seq__23156_23174__$1))
{var c__4148__auto___23175 = cljs.core.chunk_first(seq__23156_23174__$1);{
var G__23176 = cljs.core.chunk_rest(seq__23156_23174__$1);
var G__23177 = c__4148__auto___23175;
var G__23178 = cljs.core.count(c__4148__auto___23175);
var G__23179 = 0;
seq__23156_23162 = G__23176;
chunk__23157_23163 = G__23177;
count__23158_23164 = G__23178;
i__23159_23165 = G__23179;
continue;
}
} else
{var vec__23161_23180 = cljs.core.first(seq__23156_23174__$1);var v_23181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23161_23180,0,null);var body_class_23182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23161_23180,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23181,view))
{domina.add_class_BANG_(body,body_class_23182);
} else
{domina.remove_class_BANG_(body,body_class_23182);
}
{
var G__23183 = cljs.core.next(seq__23156_23174__$1);
var G__23184 = null;
var G__23185 = 0;
var G__23186 = 0;
seq__23156_23162 = G__23183;
chunk__23157_23163 = G__23184;
count__23158_23164 = G__23185;
i__23159_23165 = G__23186;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23193 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23194 = null;var count__23195 = 0;var i__23196 = 0;while(true){
if((i__23196 < count__23195))
{var vec__23197 = chunk__23194.cljs$core$IIndexed$_nth$arity$2(null,i__23196);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23197,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23197,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$428,((function (seq__23193,chunk__23194,count__23195,i__23196,vec__23197,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,v], null));
});})(seq__23193,chunk__23194,count__23195,i__23196,vec__23197,v,_))
);
{
var G__23199 = seq__23193;
var G__23200 = chunk__23194;
var G__23201 = count__23195;
var G__23202 = (i__23196 + 1);
seq__23193 = G__23199;
chunk__23194 = G__23200;
count__23195 = G__23201;
i__23196 = G__23202;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23193);if(temp__4092__auto__)
{var seq__23193__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23193__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23193__$1);{
var G__23203 = cljs.core.chunk_rest(seq__23193__$1);
var G__23204 = c__4148__auto__;
var G__23205 = cljs.core.count(c__4148__auto__);
var G__23206 = 0;
seq__23193 = G__23203;
chunk__23194 = G__23204;
count__23195 = G__23205;
i__23196 = G__23206;
continue;
}
} else
{var vec__23198 = cljs.core.first(seq__23193__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23198,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23198,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$428,((function (seq__23193,chunk__23194,count__23195,i__23196,vec__23198,v,_,seq__23193__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,v], null));
});})(seq__23193,chunk__23194,count__23195,i__23196,vec__23198,v,_,seq__23193__$1,temp__4092__auto__))
);
{
var G__23207 = cljs.core.next(seq__23193__$1);
var G__23208 = null;
var G__23209 = 0;
var G__23210 = 0;
seq__23193 = G__23207;
chunk__23194 = G__23208;
count__23195 = G__23209;
i__23196 = G__23210;
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
