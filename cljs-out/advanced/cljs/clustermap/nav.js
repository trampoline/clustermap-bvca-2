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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$402,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$402,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__23132_23138 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23133_23139 = null;var count__23134_23140 = 0;var i__23135_23141 = 0;while(true){
if((i__23135_23141 < count__23134_23140))
{var vec__23136_23142 = chunk__23133_23139.cljs$core$IIndexed$_nth$arity$2(null,i__23135_23141);var v_23143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23136_23142,0,null);var body_class_23144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23136_23142,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23143,view))
{domina.add_class_BANG_(body,body_class_23144);
} else
{domina.remove_class_BANG_(body,body_class_23144);
}
{
var G__23145 = seq__23132_23138;
var G__23146 = chunk__23133_23139;
var G__23147 = count__23134_23140;
var G__23148 = (i__23135_23141 + 1);
seq__23132_23138 = G__23145;
chunk__23133_23139 = G__23146;
count__23134_23140 = G__23147;
i__23135_23141 = G__23148;
continue;
}
} else
{var temp__4092__auto___23149 = cljs.core.seq(seq__23132_23138);if(temp__4092__auto___23149)
{var seq__23132_23150__$1 = temp__4092__auto___23149;if(cljs.core.chunked_seq_QMARK_(seq__23132_23150__$1))
{var c__4148__auto___23151 = cljs.core.chunk_first(seq__23132_23150__$1);{
var G__23152 = cljs.core.chunk_rest(seq__23132_23150__$1);
var G__23153 = c__4148__auto___23151;
var G__23154 = cljs.core.count(c__4148__auto___23151);
var G__23155 = 0;
seq__23132_23138 = G__23152;
chunk__23133_23139 = G__23153;
count__23134_23140 = G__23154;
i__23135_23141 = G__23155;
continue;
}
} else
{var vec__23137_23156 = cljs.core.first(seq__23132_23150__$1);var v_23157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137_23156,0,null);var body_class_23158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137_23156,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23157,view))
{domina.add_class_BANG_(body,body_class_23158);
} else
{domina.remove_class_BANG_(body,body_class_23158);
}
{
var G__23159 = cljs.core.next(seq__23132_23150__$1);
var G__23160 = null;
var G__23161 = 0;
var G__23162 = 0;
seq__23132_23138 = G__23159;
chunk__23133_23139 = G__23160;
count__23134_23140 = G__23161;
i__23135_23141 = G__23162;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23169 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23170 = null;var count__23171 = 0;var i__23172 = 0;while(true){
if((i__23172 < count__23171))
{var vec__23173 = chunk__23170.cljs$core$IIndexed$_nth$arity$2(null,i__23172);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23173,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23173,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$402,((function (seq__23169,chunk__23170,count__23171,i__23172,vec__23173,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,v], null));
});})(seq__23169,chunk__23170,count__23171,i__23172,vec__23173,v,_))
);
{
var G__23175 = seq__23169;
var G__23176 = chunk__23170;
var G__23177 = count__23171;
var G__23178 = (i__23172 + 1);
seq__23169 = G__23175;
chunk__23170 = G__23176;
count__23171 = G__23177;
i__23172 = G__23178;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23169);if(temp__4092__auto__)
{var seq__23169__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23169__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23169__$1);{
var G__23179 = cljs.core.chunk_rest(seq__23169__$1);
var G__23180 = c__4148__auto__;
var G__23181 = cljs.core.count(c__4148__auto__);
var G__23182 = 0;
seq__23169 = G__23179;
chunk__23170 = G__23180;
count__23171 = G__23181;
i__23172 = G__23182;
continue;
}
} else
{var vec__23174 = cljs.core.first(seq__23169__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23174,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23174,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$402,((function (seq__23169,chunk__23170,count__23171,i__23172,vec__23174,v,_,seq__23169__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,v], null));
});})(seq__23169,chunk__23170,count__23171,i__23172,vec__23174,v,_,seq__23169__$1,temp__4092__auto__))
);
{
var G__23183 = cljs.core.next(seq__23169__$1);
var G__23184 = null;
var G__23185 = 0;
var G__23186 = 0;
seq__23169 = G__23183;
chunk__23170 = G__23184;
count__23171 = G__23185;
i__23172 = G__23186;
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
