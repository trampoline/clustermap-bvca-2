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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$400,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$400,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__23128_23134 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23129_23135 = null;var count__23130_23136 = 0;var i__23131_23137 = 0;while(true){
if((i__23131_23137 < count__23130_23136))
{var vec__23132_23138 = chunk__23129_23135.cljs$core$IIndexed$_nth$arity$2(null,i__23131_23137);var v_23139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23132_23138,0,null);var body_class_23140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23132_23138,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23139,view))
{domina.add_class_BANG_(body,body_class_23140);
} else
{domina.remove_class_BANG_(body,body_class_23140);
}
{
var G__23141 = seq__23128_23134;
var G__23142 = chunk__23129_23135;
var G__23143 = count__23130_23136;
var G__23144 = (i__23131_23137 + 1);
seq__23128_23134 = G__23141;
chunk__23129_23135 = G__23142;
count__23130_23136 = G__23143;
i__23131_23137 = G__23144;
continue;
}
} else
{var temp__4092__auto___23145 = cljs.core.seq(seq__23128_23134);if(temp__4092__auto___23145)
{var seq__23128_23146__$1 = temp__4092__auto___23145;if(cljs.core.chunked_seq_QMARK_(seq__23128_23146__$1))
{var c__4148__auto___23147 = cljs.core.chunk_first(seq__23128_23146__$1);{
var G__23148 = cljs.core.chunk_rest(seq__23128_23146__$1);
var G__23149 = c__4148__auto___23147;
var G__23150 = cljs.core.count(c__4148__auto___23147);
var G__23151 = 0;
seq__23128_23134 = G__23148;
chunk__23129_23135 = G__23149;
count__23130_23136 = G__23150;
i__23131_23137 = G__23151;
continue;
}
} else
{var vec__23133_23152 = cljs.core.first(seq__23128_23146__$1);var v_23153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133_23152,0,null);var body_class_23154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133_23152,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23153,view))
{domina.add_class_BANG_(body,body_class_23154);
} else
{domina.remove_class_BANG_(body,body_class_23154);
}
{
var G__23155 = cljs.core.next(seq__23128_23146__$1);
var G__23156 = null;
var G__23157 = 0;
var G__23158 = 0;
seq__23128_23134 = G__23155;
chunk__23129_23135 = G__23156;
count__23130_23136 = G__23157;
i__23131_23137 = G__23158;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23165 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23166 = null;var count__23167 = 0;var i__23168 = 0;while(true){
if((i__23168 < count__23167))
{var vec__23169 = chunk__23166.cljs$core$IIndexed$_nth$arity$2(null,i__23168);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23169,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23169,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$400,((function (seq__23165,chunk__23166,count__23167,i__23168,vec__23169,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,v], null));
});})(seq__23165,chunk__23166,count__23167,i__23168,vec__23169,v,_))
);
{
var G__23171 = seq__23165;
var G__23172 = chunk__23166;
var G__23173 = count__23167;
var G__23174 = (i__23168 + 1);
seq__23165 = G__23171;
chunk__23166 = G__23172;
count__23167 = G__23173;
i__23168 = G__23174;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23165);if(temp__4092__auto__)
{var seq__23165__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23165__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23165__$1);{
var G__23175 = cljs.core.chunk_rest(seq__23165__$1);
var G__23176 = c__4148__auto__;
var G__23177 = cljs.core.count(c__4148__auto__);
var G__23178 = 0;
seq__23165 = G__23175;
chunk__23166 = G__23176;
count__23167 = G__23177;
i__23168 = G__23178;
continue;
}
} else
{var vec__23170 = cljs.core.first(seq__23165__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23170,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23170,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$400,((function (seq__23165,chunk__23166,count__23167,i__23168,vec__23170,v,_,seq__23165__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,v], null));
});})(seq__23165,chunk__23166,count__23167,i__23168,vec__23170,v,_,seq__23165__$1,temp__4092__auto__))
);
{
var G__23179 = cljs.core.next(seq__23165__$1);
var G__23180 = null;
var G__23181 = 0;
var G__23182 = 0;
seq__23165 = G__23179;
chunk__23166 = G__23180;
count__23167 = G__23181;
i__23168 = G__23182;
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
