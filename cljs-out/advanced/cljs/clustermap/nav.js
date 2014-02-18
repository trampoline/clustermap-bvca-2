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
var seq__23098_23104 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23099_23105 = null;var count__23100_23106 = 0;var i__23101_23107 = 0;while(true){
if((i__23101_23107 < count__23100_23106))
{var vec__23102_23108 = chunk__23099_23105.cljs$core$IIndexed$_nth$arity$2(null,i__23101_23107);var v_23109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102_23108,0,null);var body_class_23110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102_23108,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23109,view))
{domina.add_class_BANG_(body,body_class_23110);
} else
{domina.remove_class_BANG_(body,body_class_23110);
}
{
var G__23111 = seq__23098_23104;
var G__23112 = chunk__23099_23105;
var G__23113 = count__23100_23106;
var G__23114 = (i__23101_23107 + 1);
seq__23098_23104 = G__23111;
chunk__23099_23105 = G__23112;
count__23100_23106 = G__23113;
i__23101_23107 = G__23114;
continue;
}
} else
{var temp__4092__auto___23115 = cljs.core.seq(seq__23098_23104);if(temp__4092__auto___23115)
{var seq__23098_23116__$1 = temp__4092__auto___23115;if(cljs.core.chunked_seq_QMARK_(seq__23098_23116__$1))
{var c__4148__auto___23117 = cljs.core.chunk_first(seq__23098_23116__$1);{
var G__23118 = cljs.core.chunk_rest(seq__23098_23116__$1);
var G__23119 = c__4148__auto___23117;
var G__23120 = cljs.core.count(c__4148__auto___23117);
var G__23121 = 0;
seq__23098_23104 = G__23118;
chunk__23099_23105 = G__23119;
count__23100_23106 = G__23120;
i__23101_23107 = G__23121;
continue;
}
} else
{var vec__23103_23122 = cljs.core.first(seq__23098_23116__$1);var v_23123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23103_23122,0,null);var body_class_23124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23103_23122,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_23123,view))
{domina.add_class_BANG_(body,body_class_23124);
} else
{domina.remove_class_BANG_(body,body_class_23124);
}
{
var G__23125 = cljs.core.next(seq__23098_23116__$1);
var G__23126 = null;
var G__23127 = 0;
var G__23128 = 0;
seq__23098_23104 = G__23125;
chunk__23099_23105 = G__23126;
count__23100_23106 = G__23127;
i__23101_23107 = G__23128;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__23135 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__23136 = null;var count__23137 = 0;var i__23138 = 0;while(true){
if((i__23138 < count__23137))
{var vec__23139 = chunk__23136.cljs$core$IIndexed$_nth$arity$2(null,i__23138);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23139,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23139,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$402,((function (seq__23135,chunk__23136,count__23137,i__23138,vec__23139,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,v], null));
});})(seq__23135,chunk__23136,count__23137,i__23138,vec__23139,v,_))
);
{
var G__23141 = seq__23135;
var G__23142 = chunk__23136;
var G__23143 = count__23137;
var G__23144 = (i__23138 + 1);
seq__23135 = G__23141;
chunk__23136 = G__23142;
count__23137 = G__23143;
i__23138 = G__23144;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23135);if(temp__4092__auto__)
{var seq__23135__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23135__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23135__$1);{
var G__23145 = cljs.core.chunk_rest(seq__23135__$1);
var G__23146 = c__4148__auto__;
var G__23147 = cljs.core.count(c__4148__auto__);
var G__23148 = 0;
seq__23135 = G__23145;
chunk__23136 = G__23146;
count__23137 = G__23147;
i__23138 = G__23148;
continue;
}
} else
{var vec__23140 = cljs.core.first(seq__23135__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23140,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23140,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$402,((function (seq__23135,chunk__23136,count__23137,i__23138,vec__23140,v,_,seq__23135__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,v], null));
});})(seq__23135,chunk__23136,count__23137,i__23138,vec__23140,v,_,seq__23135__$1,temp__4092__auto__))
);
{
var G__23149 = cljs.core.next(seq__23135__$1);
var G__23150 = null;
var G__23151 = 0;
var G__23152 = 0;
seq__23135 = G__23149;
chunk__23136 = G__23150;
count__23137 = G__23151;
i__23138 = G__23152;
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
