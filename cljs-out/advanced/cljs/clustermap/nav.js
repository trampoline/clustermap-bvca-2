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
var seq__23140_23146 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23141_23147 = null;var count__23142_23148 = 0;var i__23143_23149 = 0;while(true){
if((i__23143_23149 < count__23142_23148))
{var vec__23144_23150 = chunk__23141_23147.cljs$core$IIndexed$_nth$arity$2(null,i__23143_23149);var v_23151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144_23150,0,null);var body_class_23152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144_23150,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23151,view))
{domina.add_class_BANG_(body,body_class_23152);
} else
{domina.remove_class_BANG_(body,body_class_23152);
}
{
var G__23153 = seq__23140_23146;
var G__23154 = chunk__23141_23147;
var G__23155 = count__23142_23148;
var G__23156 = (i__23143_23149 + 1);
seq__23140_23146 = G__23153;
chunk__23141_23147 = G__23154;
count__23142_23148 = G__23155;
i__23143_23149 = G__23156;
continue;
}
} else
{var temp__4092__auto___23157 = cljs.core.seq(seq__23140_23146);if(temp__4092__auto___23157)
{var seq__23140_23158__$1 = temp__4092__auto___23157;if(cljs.core.chunked_seq_QMARK_(seq__23140_23158__$1))
{var c__4148__auto___23159 = cljs.core.chunk_first(seq__23140_23158__$1);{
var G__23160 = cljs.core.chunk_rest(seq__23140_23158__$1);
var G__23161 = c__4148__auto___23159;
var G__23162 = cljs.core.count(c__4148__auto___23159);
var G__23163 = 0;
seq__23140_23146 = G__23160;
chunk__23141_23147 = G__23161;
count__23142_23148 = G__23162;
i__23143_23149 = G__23163;
continue;
}
} else
{var vec__23145_23164 = cljs.core.first(seq__23140_23158__$1);var v_23165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23145_23164,0,null);var body_class_23166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23145_23164,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23165,view))
{domina.add_class_BANG_(body,body_class_23166);
} else
{domina.remove_class_BANG_(body,body_class_23166);
}
{
var G__23167 = cljs.core.next(seq__23140_23158__$1);
var G__23168 = null;
var G__23169 = 0;
var G__23170 = 0;
seq__23140_23146 = G__23167;
chunk__23141_23147 = G__23168;
count__23142_23148 = G__23169;
i__23143_23149 = G__23170;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23177 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23178 = null;var count__23179 = 0;var i__23180 = 0;while(true){
if((i__23180 < count__23179))
{var vec__23181 = chunk__23178.cljs$core$IIndexed$_nth$arity$2(null,i__23180);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23181,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23181,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$414,((function (seq__23177,chunk__23178,count__23179,i__23180,vec__23181,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,v], null));
});})(seq__23177,chunk__23178,count__23179,i__23180,vec__23181,v,_))
);
{
var G__23183 = seq__23177;
var G__23184 = chunk__23178;
var G__23185 = count__23179;
var G__23186 = (i__23180 + 1);
seq__23177 = G__23183;
chunk__23178 = G__23184;
count__23179 = G__23185;
i__23180 = G__23186;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23177);if(temp__4092__auto__)
{var seq__23177__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23177__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23177__$1);{
var G__23187 = cljs.core.chunk_rest(seq__23177__$1);
var G__23188 = c__4148__auto__;
var G__23189 = cljs.core.count(c__4148__auto__);
var G__23190 = 0;
seq__23177 = G__23187;
chunk__23178 = G__23188;
count__23179 = G__23189;
i__23180 = G__23190;
continue;
}
} else
{var vec__23182 = cljs.core.first(seq__23177__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23182,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23182,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$414,((function (seq__23177,chunk__23178,count__23179,i__23180,vec__23182,v,_,seq__23177__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,v], null));
});})(seq__23177,chunk__23178,count__23179,i__23180,vec__23182,v,_,seq__23177__$1,temp__4092__auto__))
);
{
var G__23191 = cljs.core.next(seq__23177__$1);
var G__23192 = null;
var G__23193 = 0;
var G__23194 = 0;
seq__23177 = G__23191;
chunk__23178 = G__23192;
count__23179 = G__23193;
i__23180 = G__23194;
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
