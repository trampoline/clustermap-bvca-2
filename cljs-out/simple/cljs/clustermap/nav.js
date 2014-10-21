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
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

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
var seq__31158_31164 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31159_31165 = null;var count__31160_31166 = (0);var i__31161_31167 = (0);while(true){
if((i__31161_31167 < count__31160_31166))
{var vec__31162_31168 = cljs.core._nth.call(null,chunk__31159_31165,i__31161_31167);var v_31169 = cljs.core.nth.call(null,vec__31162_31168,(0),null);var body_class_31170 = cljs.core.nth.call(null,vec__31162_31168,(1),null);if(cljs.core._EQ_.call(null,v_31169,view))
{domina.add_class_BANG_.call(null,body,body_class_31170);
} else
{domina.remove_class_BANG_.call(null,body,body_class_31170);
}
{
var G__31171 = seq__31158_31164;
var G__31172 = chunk__31159_31165;
var G__31173 = count__31160_31166;
var G__31174 = (i__31161_31167 + (1));
seq__31158_31164 = G__31171;
chunk__31159_31165 = G__31172;
count__31160_31166 = G__31173;
i__31161_31167 = G__31174;
continue;
}
} else
{var temp__4126__auto___31175 = cljs.core.seq.call(null,seq__31158_31164);if(temp__4126__auto___31175)
{var seq__31158_31176__$1 = temp__4126__auto___31175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31158_31176__$1))
{var c__4314__auto___31177 = cljs.core.chunk_first.call(null,seq__31158_31176__$1);{
var G__31178 = cljs.core.chunk_rest.call(null,seq__31158_31176__$1);
var G__31179 = c__4314__auto___31177;
var G__31180 = cljs.core.count.call(null,c__4314__auto___31177);
var G__31181 = (0);
seq__31158_31164 = G__31178;
chunk__31159_31165 = G__31179;
count__31160_31166 = G__31180;
i__31161_31167 = G__31181;
continue;
}
} else
{var vec__31163_31182 = cljs.core.first.call(null,seq__31158_31176__$1);var v_31183 = cljs.core.nth.call(null,vec__31163_31182,(0),null);var body_class_31184 = cljs.core.nth.call(null,vec__31163_31182,(1),null);if(cljs.core._EQ_.call(null,v_31183,view))
{domina.add_class_BANG_.call(null,body,body_class_31184);
} else
{domina.remove_class_BANG_.call(null,body,body_class_31184);
}
{
var G__31185 = cljs.core.next.call(null,seq__31158_31176__$1);
var G__31186 = null;
var G__31187 = (0);
var G__31188 = (0);
seq__31158_31164 = G__31185;
chunk__31159_31165 = G__31186;
count__31160_31166 = G__31187;
i__31161_31167 = G__31188;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__31195 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__31196 = null;var count__31197 = (0);var i__31198 = (0);while(true){
if((i__31198 < count__31197))
{var vec__31199 = cljs.core._nth.call(null,chunk__31196,i__31198);var v = cljs.core.nth.call(null,vec__31199,(0),null);var _ = cljs.core.nth.call(null,vec__31199,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__31195,chunk__31196,count__31197,i__31198,vec__31199,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__31195,chunk__31196,count__31197,i__31198,vec__31199,v,_))
);
{
var G__31201 = seq__31195;
var G__31202 = chunk__31196;
var G__31203 = count__31197;
var G__31204 = (i__31198 + (1));
seq__31195 = G__31201;
chunk__31196 = G__31202;
count__31197 = G__31203;
i__31198 = G__31204;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31195);if(temp__4126__auto__)
{var seq__31195__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31195__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__31195__$1);{
var G__31205 = cljs.core.chunk_rest.call(null,seq__31195__$1);
var G__31206 = c__4314__auto__;
var G__31207 = cljs.core.count.call(null,c__4314__auto__);
var G__31208 = (0);
seq__31195 = G__31205;
chunk__31196 = G__31206;
count__31197 = G__31207;
i__31198 = G__31208;
continue;
}
} else
{var vec__31200 = cljs.core.first.call(null,seq__31195__$1);var v = cljs.core.nth.call(null,vec__31200,(0),null);var _ = cljs.core.nth.call(null,vec__31200,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__31195,chunk__31196,count__31197,i__31198,vec__31200,v,_,seq__31195__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__31195,chunk__31196,count__31197,i__31198,vec__31200,v,_,seq__31195__$1,temp__4126__auto__))
);
{
var G__31209 = cljs.core.next.call(null,seq__31195__$1);
var G__31210 = null;
var G__31211 = (0);
var G__31212 = (0);
seq__31195 = G__31209;
chunk__31196 = G__31210;
count__31197 = G__31211;
i__31198 = G__31212;
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
