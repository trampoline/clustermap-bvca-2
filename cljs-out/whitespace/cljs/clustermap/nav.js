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
var seq__14148_14154 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14149_14155 = null;var count__14150_14156 = (0);var i__14151_14157 = (0);while(true){
if((i__14151_14157 < count__14150_14156))
{var vec__14152_14158 = cljs.core._nth.call(null,chunk__14149_14155,i__14151_14157);var v_14159 = cljs.core.nth.call(null,vec__14152_14158,(0),null);var body_class_14160 = cljs.core.nth.call(null,vec__14152_14158,(1),null);if(cljs.core._EQ_.call(null,v_14159,view))
{domina.add_class_BANG_.call(null,body,body_class_14160);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14160);
}
{
var G__14161 = seq__14148_14154;
var G__14162 = chunk__14149_14155;
var G__14163 = count__14150_14156;
var G__14164 = (i__14151_14157 + (1));
seq__14148_14154 = G__14161;
chunk__14149_14155 = G__14162;
count__14150_14156 = G__14163;
i__14151_14157 = G__14164;
continue;
}
} else
{var temp__4126__auto___14165 = cljs.core.seq.call(null,seq__14148_14154);if(temp__4126__auto___14165)
{var seq__14148_14166__$1 = temp__4126__auto___14165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14148_14166__$1))
{var c__4299__auto___14167 = cljs.core.chunk_first.call(null,seq__14148_14166__$1);{
var G__14168 = cljs.core.chunk_rest.call(null,seq__14148_14166__$1);
var G__14169 = c__4299__auto___14167;
var G__14170 = cljs.core.count.call(null,c__4299__auto___14167);
var G__14171 = (0);
seq__14148_14154 = G__14168;
chunk__14149_14155 = G__14169;
count__14150_14156 = G__14170;
i__14151_14157 = G__14171;
continue;
}
} else
{var vec__14153_14172 = cljs.core.first.call(null,seq__14148_14166__$1);var v_14173 = cljs.core.nth.call(null,vec__14153_14172,(0),null);var body_class_14174 = cljs.core.nth.call(null,vec__14153_14172,(1),null);if(cljs.core._EQ_.call(null,v_14173,view))
{domina.add_class_BANG_.call(null,body,body_class_14174);
} else
{domina.remove_class_BANG_.call(null,body,body_class_14174);
}
{
var G__14175 = cljs.core.next.call(null,seq__14148_14166__$1);
var G__14176 = null;
var G__14177 = (0);
var G__14178 = (0);
seq__14148_14154 = G__14175;
chunk__14149_14155 = G__14176;
count__14150_14156 = G__14177;
i__14151_14157 = G__14178;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__14185 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__14186 = null;var count__14187 = (0);var i__14188 = (0);while(true){
if((i__14188 < count__14187))
{var vec__14189 = cljs.core._nth.call(null,chunk__14186,i__14188);var v = cljs.core.nth.call(null,vec__14189,(0),null);var _ = cljs.core.nth.call(null,vec__14189,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14185,chunk__14186,count__14187,i__14188,vec__14189,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14185,chunk__14186,count__14187,i__14188,vec__14189,v,_))
);
{
var G__14191 = seq__14185;
var G__14192 = chunk__14186;
var G__14193 = count__14187;
var G__14194 = (i__14188 + (1));
seq__14185 = G__14191;
chunk__14186 = G__14192;
count__14187 = G__14193;
i__14188 = G__14194;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14185);if(temp__4126__auto__)
{var seq__14185__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14185__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14185__$1);{
var G__14195 = cljs.core.chunk_rest.call(null,seq__14185__$1);
var G__14196 = c__4299__auto__;
var G__14197 = cljs.core.count.call(null,c__4299__auto__);
var G__14198 = (0);
seq__14185 = G__14195;
chunk__14186 = G__14196;
count__14187 = G__14197;
i__14188 = G__14198;
continue;
}
} else
{var vec__14190 = cljs.core.first.call(null,seq__14185__$1);var v = cljs.core.nth.call(null,vec__14190,(0),null);var _ = cljs.core.nth.call(null,vec__14190,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__14185,chunk__14186,count__14187,i__14188,vec__14190,v,_,seq__14185__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__14185,chunk__14186,count__14187,i__14188,vec__14190,v,_,seq__14185__$1,temp__4126__auto__))
);
{
var G__14199 = cljs.core.next.call(null,seq__14185__$1);
var G__14200 = null;
var G__14201 = (0);
var G__14202 = (0);
seq__14185 = G__14199;
chunk__14186 = G__14200;
count__14187 = G__14201;
i__14188 = G__14202;
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
