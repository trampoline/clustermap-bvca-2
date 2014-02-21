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
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$401,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$401,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
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
var seq__23136_23142 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23137_23143 = null;var count__23138_23144 = 0;var i__23139_23145 = 0;while(true){
if((i__23139_23145 < count__23138_23144))
{var vec__23140_23146 = chunk__23137_23143.cljs$core$IIndexed$_nth$arity$2(null,i__23139_23145);var v_23147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23140_23146,0,null);var body_class_23148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23140_23146,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23147,view))
{domina.add_class_BANG_(body,body_class_23148);
} else
{domina.remove_class_BANG_(body,body_class_23148);
}
{
var G__23149 = seq__23136_23142;
var G__23150 = chunk__23137_23143;
var G__23151 = count__23138_23144;
var G__23152 = (i__23139_23145 + 1);
seq__23136_23142 = G__23149;
chunk__23137_23143 = G__23150;
count__23138_23144 = G__23151;
i__23139_23145 = G__23152;
continue;
}
} else
{var temp__4092__auto___23153 = cljs.core.seq(seq__23136_23142);if(temp__4092__auto___23153)
{var seq__23136_23154__$1 = temp__4092__auto___23153;if(cljs.core.chunked_seq_QMARK_(seq__23136_23154__$1))
{var c__4148__auto___23155 = cljs.core.chunk_first(seq__23136_23154__$1);{
var G__23156 = cljs.core.chunk_rest(seq__23136_23154__$1);
var G__23157 = c__4148__auto___23155;
var G__23158 = cljs.core.count(c__4148__auto___23155);
var G__23159 = 0;
seq__23136_23142 = G__23156;
chunk__23137_23143 = G__23157;
count__23138_23144 = G__23158;
i__23139_23145 = G__23159;
continue;
}
} else
{var vec__23141_23160 = cljs.core.first(seq__23136_23154__$1);var v_23161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23141_23160,0,null);var body_class_23162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23141_23160,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23161,view))
{domina.add_class_BANG_(body,body_class_23162);
} else
{domina.remove_class_BANG_(body,body_class_23162);
}
{
var G__23163 = cljs.core.next(seq__23136_23154__$1);
var G__23164 = null;
var G__23165 = 0;
var G__23166 = 0;
seq__23136_23142 = G__23163;
chunk__23137_23143 = G__23164;
count__23138_23144 = G__23165;
i__23139_23145 = G__23166;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23173 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23174 = null;var count__23175 = 0;var i__23176 = 0;while(true){
if((i__23176 < count__23175))
{var vec__23177 = chunk__23174.cljs$core$IIndexed$_nth$arity$2(null,i__23176);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23177,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23177,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$401,((function (seq__23173,chunk__23174,count__23175,i__23176,vec__23177,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,v], null));
});})(seq__23173,chunk__23174,count__23175,i__23176,vec__23177,v,_))
);
{
var G__23179 = seq__23173;
var G__23180 = chunk__23174;
var G__23181 = count__23175;
var G__23182 = (i__23176 + 1);
seq__23173 = G__23179;
chunk__23174 = G__23180;
count__23175 = G__23181;
i__23176 = G__23182;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23173);if(temp__4092__auto__)
{var seq__23173__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23173__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23173__$1);{
var G__23183 = cljs.core.chunk_rest(seq__23173__$1);
var G__23184 = c__4148__auto__;
var G__23185 = cljs.core.count(c__4148__auto__);
var G__23186 = 0;
seq__23173 = G__23183;
chunk__23174 = G__23184;
count__23175 = G__23185;
i__23176 = G__23186;
continue;
}
} else
{var vec__23178 = cljs.core.first(seq__23173__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23178,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23178,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$401,((function (seq__23173,chunk__23174,count__23175,i__23176,vec__23178,v,_,seq__23173__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,v], null));
});})(seq__23173,chunk__23174,count__23175,i__23176,vec__23178,v,_,seq__23173__$1,temp__4092__auto__))
);
{
var G__23187 = cljs.core.next(seq__23173__$1);
var G__23188 = null;
var G__23189 = 0;
var G__23190 = 0;
seq__23173 = G__23187;
chunk__23174 = G__23188;
count__23175 = G__23189;
i__23176 = G__23190;
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
