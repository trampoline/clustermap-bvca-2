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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
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
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__33272_33278 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33273_33279 = null;var count__33274_33280 = 0;var i__33275_33281 = 0;while(true){
if((i__33275_33281 < count__33274_33280))
{var vec__33276_33282 = cljs.core._nth.call(null,chunk__33273_33279,i__33275_33281);var v_33283 = cljs.core.nth.call(null,vec__33276_33282,0,null);var body_class_33284 = cljs.core.nth.call(null,vec__33276_33282,1,null);if(cljs.core._EQ_.call(null,v_33283,view))
{domina.add_class_BANG_.call(null,body,body_class_33284);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33284);
}
{
var G__33285 = seq__33272_33278;
var G__33286 = chunk__33273_33279;
var G__33287 = count__33274_33280;
var G__33288 = (i__33275_33281 + 1);
seq__33272_33278 = G__33285;
chunk__33273_33279 = G__33286;
count__33274_33280 = G__33287;
i__33275_33281 = G__33288;
continue;
}
} else
{var temp__4092__auto___33289 = cljs.core.seq.call(null,seq__33272_33278);if(temp__4092__auto___33289)
{var seq__33272_33290__$1 = temp__4092__auto___33289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33272_33290__$1))
{var c__4148__auto___33291 = cljs.core.chunk_first.call(null,seq__33272_33290__$1);{
var G__33292 = cljs.core.chunk_rest.call(null,seq__33272_33290__$1);
var G__33293 = c__4148__auto___33291;
var G__33294 = cljs.core.count.call(null,c__4148__auto___33291);
var G__33295 = 0;
seq__33272_33278 = G__33292;
chunk__33273_33279 = G__33293;
count__33274_33280 = G__33294;
i__33275_33281 = G__33295;
continue;
}
} else
{var vec__33277_33296 = cljs.core.first.call(null,seq__33272_33290__$1);var v_33297 = cljs.core.nth.call(null,vec__33277_33296,0,null);var body_class_33298 = cljs.core.nth.call(null,vec__33277_33296,1,null);if(cljs.core._EQ_.call(null,v_33297,view))
{domina.add_class_BANG_.call(null,body,body_class_33298);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33298);
}
{
var G__33299 = cljs.core.next.call(null,seq__33272_33290__$1);
var G__33300 = null;
var G__33301 = 0;
var G__33302 = 0;
seq__33272_33278 = G__33299;
chunk__33273_33279 = G__33300;
count__33274_33280 = G__33301;
i__33275_33281 = G__33302;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33309 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33310 = null;var count__33311 = 0;var i__33312 = 0;while(true){
if((i__33312 < count__33311))
{var vec__33313 = cljs.core._nth.call(null,chunk__33310,i__33312);var v = cljs.core.nth.call(null,vec__33313,0,null);var _ = cljs.core.nth.call(null,vec__33313,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33309,chunk__33310,count__33311,i__33312,vec__33313,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33309,chunk__33310,count__33311,i__33312,vec__33313,v,_))
);
{
var G__33315 = seq__33309;
var G__33316 = chunk__33310;
var G__33317 = count__33311;
var G__33318 = (i__33312 + 1);
seq__33309 = G__33315;
chunk__33310 = G__33316;
count__33311 = G__33317;
i__33312 = G__33318;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33309);if(temp__4092__auto__)
{var seq__33309__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33309__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33309__$1);{
var G__33319 = cljs.core.chunk_rest.call(null,seq__33309__$1);
var G__33320 = c__4148__auto__;
var G__33321 = cljs.core.count.call(null,c__4148__auto__);
var G__33322 = 0;
seq__33309 = G__33319;
chunk__33310 = G__33320;
count__33311 = G__33321;
i__33312 = G__33322;
continue;
}
} else
{var vec__33314 = cljs.core.first.call(null,seq__33309__$1);var v = cljs.core.nth.call(null,vec__33314,0,null);var _ = cljs.core.nth.call(null,vec__33314,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33309,chunk__33310,count__33311,i__33312,vec__33314,v,_,seq__33309__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33309,chunk__33310,count__33311,i__33312,vec__33314,v,_,seq__33309__$1,temp__4092__auto__))
);
{
var G__33323 = cljs.core.next.call(null,seq__33309__$1);
var G__33324 = null;
var G__33325 = 0;
var G__33326 = 0;
seq__33309 = G__33323;
chunk__33310 = G__33324;
count__33311 = G__33325;
i__33312 = G__33326;
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
