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
var seq__27155_27161 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__27156_27162 = null;var count__27157_27163 = (0);var i__27158_27164 = (0);while(true){
if((i__27158_27164 < count__27157_27163))
{var vec__27159_27165 = cljs.core._nth.call(null,chunk__27156_27162,i__27158_27164);var v_27166 = cljs.core.nth.call(null,vec__27159_27165,(0),null);var body_class_27167 = cljs.core.nth.call(null,vec__27159_27165,(1),null);if(cljs.core._EQ_.call(null,v_27166,view))
{domina.add_class_BANG_.call(null,body,body_class_27167);
} else
{domina.remove_class_BANG_.call(null,body,body_class_27167);
}
{
var G__27168 = seq__27155_27161;
var G__27169 = chunk__27156_27162;
var G__27170 = count__27157_27163;
var G__27171 = (i__27158_27164 + (1));
seq__27155_27161 = G__27168;
chunk__27156_27162 = G__27169;
count__27157_27163 = G__27170;
i__27158_27164 = G__27171;
continue;
}
} else
{var temp__4126__auto___27172 = cljs.core.seq.call(null,seq__27155_27161);if(temp__4126__auto___27172)
{var seq__27155_27173__$1 = temp__4126__auto___27172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27155_27173__$1))
{var c__4299__auto___27174 = cljs.core.chunk_first.call(null,seq__27155_27173__$1);{
var G__27175 = cljs.core.chunk_rest.call(null,seq__27155_27173__$1);
var G__27176 = c__4299__auto___27174;
var G__27177 = cljs.core.count.call(null,c__4299__auto___27174);
var G__27178 = (0);
seq__27155_27161 = G__27175;
chunk__27156_27162 = G__27176;
count__27157_27163 = G__27177;
i__27158_27164 = G__27178;
continue;
}
} else
{var vec__27160_27179 = cljs.core.first.call(null,seq__27155_27173__$1);var v_27180 = cljs.core.nth.call(null,vec__27160_27179,(0),null);var body_class_27181 = cljs.core.nth.call(null,vec__27160_27179,(1),null);if(cljs.core._EQ_.call(null,v_27180,view))
{domina.add_class_BANG_.call(null,body,body_class_27181);
} else
{domina.remove_class_BANG_.call(null,body,body_class_27181);
}
{
var G__27182 = cljs.core.next.call(null,seq__27155_27173__$1);
var G__27183 = null;
var G__27184 = (0);
var G__27185 = (0);
seq__27155_27161 = G__27182;
chunk__27156_27162 = G__27183;
count__27157_27163 = G__27184;
i__27158_27164 = G__27185;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__27192 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__27193 = null;var count__27194 = (0);var i__27195 = (0);while(true){
if((i__27195 < count__27194))
{var vec__27196 = cljs.core._nth.call(null,chunk__27193,i__27195);var v = cljs.core.nth.call(null,vec__27196,(0),null);var _ = cljs.core.nth.call(null,vec__27196,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__27192,chunk__27193,count__27194,i__27195,vec__27196,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__27192,chunk__27193,count__27194,i__27195,vec__27196,v,_))
);
{
var G__27198 = seq__27192;
var G__27199 = chunk__27193;
var G__27200 = count__27194;
var G__27201 = (i__27195 + (1));
seq__27192 = G__27198;
chunk__27193 = G__27199;
count__27194 = G__27200;
i__27195 = G__27201;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27192);if(temp__4126__auto__)
{var seq__27192__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27192__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__27192__$1);{
var G__27202 = cljs.core.chunk_rest.call(null,seq__27192__$1);
var G__27203 = c__4299__auto__;
var G__27204 = cljs.core.count.call(null,c__4299__auto__);
var G__27205 = (0);
seq__27192 = G__27202;
chunk__27193 = G__27203;
count__27194 = G__27204;
i__27195 = G__27205;
continue;
}
} else
{var vec__27197 = cljs.core.first.call(null,seq__27192__$1);var v = cljs.core.nth.call(null,vec__27197,(0),null);var _ = cljs.core.nth.call(null,vec__27197,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__27192,chunk__27193,count__27194,i__27195,vec__27197,v,_,seq__27192__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__27192,chunk__27193,count__27194,i__27195,vec__27197,v,_,seq__27192__$1,temp__4126__auto__))
);
{
var G__27206 = cljs.core.next.call(null,seq__27192__$1);
var G__27207 = null;
var G__27208 = (0);
var G__27209 = (0);
seq__27192 = G__27206;
chunk__27193 = G__27207;
count__27194 = G__27208;
i__27195 = G__27209;
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
