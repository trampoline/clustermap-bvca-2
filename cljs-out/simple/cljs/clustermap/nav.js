// Compiled by ClojureScript 0.0-2268
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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
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
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.call(null,"body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__27165_27171 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__27166_27172 = null;var count__27167_27173 = (0);var i__27168_27174 = (0);while(true){
if((i__27168_27174 < count__27167_27173))
{var vec__27169_27175 = cljs.core._nth.call(null,chunk__27166_27172,i__27168_27174);var v_27176 = cljs.core.nth.call(null,vec__27169_27175,(0),null);var body_class_27177 = cljs.core.nth.call(null,vec__27169_27175,(1),null);if(cljs.core._EQ_.call(null,v_27176,view))
{domina.add_class_BANG_.call(null,body,body_class_27177);
} else
{domina.remove_class_BANG_.call(null,body,body_class_27177);
}
{
var G__27178 = seq__27165_27171;
var G__27179 = chunk__27166_27172;
var G__27180 = count__27167_27173;
var G__27181 = (i__27168_27174 + (1));
seq__27165_27171 = G__27178;
chunk__27166_27172 = G__27179;
count__27167_27173 = G__27180;
i__27168_27174 = G__27181;
continue;
}
} else
{var temp__4126__auto___27182 = cljs.core.seq.call(null,seq__27165_27171);if(temp__4126__auto___27182)
{var seq__27165_27183__$1 = temp__4126__auto___27182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27165_27183__$1))
{var c__4299__auto___27184 = cljs.core.chunk_first.call(null,seq__27165_27183__$1);{
var G__27185 = cljs.core.chunk_rest.call(null,seq__27165_27183__$1);
var G__27186 = c__4299__auto___27184;
var G__27187 = cljs.core.count.call(null,c__4299__auto___27184);
var G__27188 = (0);
seq__27165_27171 = G__27185;
chunk__27166_27172 = G__27186;
count__27167_27173 = G__27187;
i__27168_27174 = G__27188;
continue;
}
} else
{var vec__27170_27189 = cljs.core.first.call(null,seq__27165_27183__$1);var v_27190 = cljs.core.nth.call(null,vec__27170_27189,(0),null);var body_class_27191 = cljs.core.nth.call(null,vec__27170_27189,(1),null);if(cljs.core._EQ_.call(null,v_27190,view))
{domina.add_class_BANG_.call(null,body,body_class_27191);
} else
{domina.remove_class_BANG_.call(null,body,body_class_27191);
}
{
var G__27192 = cljs.core.next.call(null,seq__27165_27183__$1);
var G__27193 = null;
var G__27194 = (0);
var G__27195 = (0);
seq__27165_27171 = G__27192;
chunk__27166_27172 = G__27193;
count__27167_27173 = G__27194;
i__27168_27174 = G__27195;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__27202 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__27203 = null;var count__27204 = (0);var i__27205 = (0);while(true){
if((i__27205 < count__27204))
{var vec__27206 = cljs.core._nth.call(null,chunk__27203,i__27205);var v = cljs.core.nth.call(null,vec__27206,(0),null);var _ = cljs.core.nth.call(null,vec__27206,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__27202,chunk__27203,count__27204,i__27205,vec__27206,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__27202,chunk__27203,count__27204,i__27205,vec__27206,v,_))
);
{
var G__27208 = seq__27202;
var G__27209 = chunk__27203;
var G__27210 = count__27204;
var G__27211 = (i__27205 + (1));
seq__27202 = G__27208;
chunk__27203 = G__27209;
count__27204 = G__27210;
i__27205 = G__27211;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27202);if(temp__4126__auto__)
{var seq__27202__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27202__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__27202__$1);{
var G__27212 = cljs.core.chunk_rest.call(null,seq__27202__$1);
var G__27213 = c__4299__auto__;
var G__27214 = cljs.core.count.call(null,c__4299__auto__);
var G__27215 = (0);
seq__27202 = G__27212;
chunk__27203 = G__27213;
count__27204 = G__27214;
i__27205 = G__27215;
continue;
}
} else
{var vec__27207 = cljs.core.first.call(null,seq__27202__$1);var v = cljs.core.nth.call(null,vec__27207,(0),null);var _ = cljs.core.nth.call(null,vec__27207,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__27202,chunk__27203,count__27204,i__27205,vec__27207,v,_,seq__27202__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__27202,chunk__27203,count__27204,i__27205,vec__27207,v,_,seq__27202__$1,temp__4126__auto__))
);
{
var G__27216 = cljs.core.next.call(null,seq__27202__$1);
var G__27217 = null;
var G__27218 = (0);
var G__27219 = (0);
seq__27202 = G__27216;
chunk__27203 = G__27217;
count__27204 = G__27218;
i__27205 = G__27219;
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
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});
